"""Prepare lossless screenshots and complete, disjoint variable-font subsets.

Run only when screenshot/font sources or Korean landing copy change.
Requires Python 3.10+ and Node.js 22+; the static build supports Python 3.9+.
Dependencies: Pillow 12.3.0, fonttools[woff] 4.60.1 (see requirements-assets.txt).
The deployment build uses the prepared files and needs neither dependency.
"""
import json
import re
import sys
from pathlib import Path

if sys.version_info < (3, 10):
    raise SystemExit("Asset optimization requires Python 3.10 or newer. Create the asset environment with python3.11; the static build still supports Python 3.9.")

from PIL import Image
from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import DecomposingRecordingPen
from site_common import ROOT, catalog


def unicode_ranges(points):
    runs = []
    for point in sorted(points):
        if runs and point == runs[-1][1] + 1:
            runs[-1][1] = point
        else:
            runs.append([point, point])
    return ",".join(f"U+{a:X}" if a == b else f"U+{a:X}-{b:X}" for a, b in runs)


def main():
    images = []
    for source in sorted((ROOT / "assets/img/screens").glob("*.png")):
        target = source.with_suffix(".webp")
        with Image.open(source) as image:
            image.save(target, "WEBP", lossless=True, exact=True, method=6,
                       icc_profile=image.info.get("icc_profile", b""))
            with Image.open(target) as optimized:
                assert image.size == optimized.size
                assert image.convert("RGBA").tobytes() == optimized.convert("RGBA").tobytes()
                assert image.info.get("icc_profile") == optimized.info.get("icc_profile")
        images.append({"source": str(source.relative_to(ROOT)), "output": str(target.relative_to(ROOT)),
                       "before": source.stat().st_size, "after": target.stat().st_size})

    source = ROOT / "assets/fonts/PretendardVariable.woff2"
    font = TTFont(source, recalcTimestamp=False)
    cmap = font.getBestCmap()
    points = set(cmap)
    original_glyphs = font.getGlyphSet()
    # Put only the Korean landing's glyphs in a small common subset. Remaining
    # glyphs are retained in bounded shards, so legal text and other locales
    # keep exactly the original font's coverage and variable weight axis.
    korean = catalog()["translations"]["ko"]
    common_text = re.sub("<[^>]*>", "", " ".join(korean.values()))
    latin = {p for p in points if p <= 0x24F}
    common = ({ord(c) for c in common_text} & points) - latin
    remaining = sorted(points - latin - common)
    groups = [("latin", latin), ("ko-common", common)]
    groups += [(f"extra-{i // 256:02d}", set(remaining[i:i + 256])) for i in range(0, len(remaining), 256)]
    css, fonts = [], []
    covered = set()
    output = ROOT / "assets/fonts/subsets"
    output.mkdir(exist_ok=True)
    for name, characters in groups:
        if not characters:
            continue
        assert not covered & characters
        covered |= characters
        part = TTFont(source, recalcTimestamp=False)
        options = subset.Options()
        options.name_IDs = ["*"]
        options.name_languages = ["*"]
        options.name_legacy = True
        options.layout_features = ["*"]
        options.recalc_timestamp = False
        cutter = subset.Subsetter(options=options)
        cutter.populate(unicodes=characters)
        cutter.subset(part)
        # Derivatives must use a new primary font name under the source OFL.
        for record in part["name"].names:
            names = {1: "Somewhere Sans", 3: "SomewhereSans-" + name,
                     4: "Somewhere Sans Variable", 6: "SomewhereSansVariable",
                     16: "Somewhere Sans", 25: "SomewhereSans"}
            if record.nameID in names:
                record.string = names[record.nameID].encode(record.getEncoding())
            elif record.nameID >= 256 and "PretendardVariable" in record.toUnicode():
                record.string = record.toUnicode().replace("PretendardVariable", "SomewhereSansVariable").encode(record.getEncoding())
        part.flavor = "woff2"
        target = output / f"Pretendard-{name}.woff2"
        part.save(target)
        part = TTFont(target)
        assert [(a.axisTag, a.minValue, a.defaultValue, a.maxValue) for a in part["fvar"].axes] == [(a.axisTag, a.minValue, a.defaultValue, a.maxValue) for a in font["fvar"].axes]
        optimized_glyphs = part.getGlyphSet()
        assert set(part.getBestCmap()) == characters
        # Every surviving glyph keeps the original advance/side-bearing.
        for point, glyph in part.getBestCmap().items():
            original = cmap[point]
            assert part["hmtx"][glyph] == font["hmtx"][original]
            before = DecomposingRecordingPen(original_glyphs)
            after = DecomposingRecordingPen(optimized_glyphs)
            original_glyphs[original].draw(before)
            optimized_glyphs[glyph].draw(after)
            assert before.value == after.value
            assert [(v.axes, v.coordinates) for v in part["gvar"].variations.get(glyph, [])] == [(v.axes, v.coordinates) for v in font["gvar"].variations.get(original, [])]
        css.append('@font-face {\n  font-family: "Somewhere Sans";\n  font-weight: 100 900;\n'
                   '  font-display: swap;\n  font-style: normal;\n'
                   f'  src: url("../fonts/subsets/{target.name}") format("woff2-variations");\n'
                   f'  unicode-range: {unicode_ranges(characters)};\n}}\n')
        fonts.append({"output": str(target.relative_to(ROOT)), "bytes": target.stat().st_size,
                      "codepointCount": len(characters)})
    assert covered == points
    (ROOT / "assets/css/fonts.css").write_text("/* Generated by scripts/optimize-assets.py; preserves the original font's complete coverage. */\n" + "\n".join(css))
    report = {"images": images, "font": {"sourceBytes": source.stat().st_size, "subsets": fonts}}
    (ROOT / "assets/optimized-assets.json").write_text(json.dumps(report, indent=2) + "\n")
    print(f"Screenshots: {sum(i['before'] for i in images):,} → {sum(i['after'] for i in images):,} bytes (pixel-identical)")
    print(f"Landing font subsets: {sum(f['bytes'] for f in fonts[:2]):,} bytes; all {len(points):,} codepoints retained")


if __name__ == "__main__":
    main()
