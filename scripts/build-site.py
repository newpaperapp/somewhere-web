"""Build static localized landing pages using the existing HTML and JS catalog.

Requires Python 3.9+ and Node.js 22+. No package install or browser is needed.
Only public files are copied; scripts, source screenshots and repository
metadata never enter the deployment artifact. Output is the ignored dist/ tree.
"""
import html
import json
import re
import shutil
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

from site_common import ROOT, ORIGIN, catalog, home_path

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
LOCALES = {"ko": "ko_KR", "en": "en_US", "ja": "ja_JP", "zh-CN": "zh_CN", "zh-TW": "zh_TW",
           "fr": "fr_FR", "de": "de_DE", "es": "es_ES"}


class Element:
    def __init__(self, tag, attrs=()):
        self.tag, self.attrs, self.children = tag, dict(attrs), []

    def render(self):
        attrs = "".join(" " + key + ("" if value is None else '="' + html.escape(value, quote=True) + '"')
                        for key, value in self.attrs.items())
        start = "<" + self.tag + attrs + ">"
        if self.tag in VOID:
            return start
        return start + "".join(c.render() if isinstance(c, Element) else c for c in self.children) + "</" + self.tag + ">"


class Document(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=False)
        self.root = Element("document")
        self.stack = [self.root]
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        node = Element(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        assert self.stack[-1].tag == tag, f"Unexpected closing tag: {tag}"
        self.stack.pop()

    def handle_data(self, data):
        self.stack[-1].children.append(data)

    def handle_comment(self, data):
        self.handle_data("<!--" + data + "-->")

    def handle_decl(self, decl):
        self.handle_data("<!" + decl + ">")

    def handle_entityref(self, name):
        self.handle_data("&" + name + ";")

    def handle_charref(self, name):
        self.handle_data("&#" + name + ";")

    def elements(self, node=None):
        for child in (node or self.root).children:
            if isinstance(child, Element):
                yield child
                yield from self.elements(child)

    def render(self):
        return "".join(c.render() if isinstance(c, Element) else c for c in self.root.children)


def text(value):
    return html.unescape(re.sub("<[^>]*>", "", value)).strip()


def validate_resources(output):
    """Check all public HTML and CSS, including utility-page inline fonts."""
    def check_url(source, value):
        parts = urlsplit(value)
        if parts.scheme or parts.netloc or not parts.path:
            return
        base = "https://local/" + source.relative_to(output).as_posix()
        path = unquote(urlsplit(urljoin(base, value)).path).lstrip("/")
        assert (output / path).is_file(), f"Broken resource in {source.relative_to(output)}: {value}"

    def check_css(source, css):
        for match in re.finditer(r"url\(\s*(?:\"([^\"]*)\"|'([^']*)'|([^)]*))\s*\)", css):
            value = next(group for group in match.groups() if group is not None).strip()
            check_url(source, value)

    class ResourceParser(HTMLParser):
        def __init__(self, source):
            super().__init__()
            self.source = source
            self.in_style = False

        def handle_starttag(self, tag, attrs):
            attrs = dict(attrs)
            if tag == "style":
                self.in_style = True
            if tag in {"img", "script", "link", "source"}:
                for attribute in ["src", "href"]:
                    if attrs.get(attribute):
                        check_url(self.source, attrs[attribute])
            if attrs.get("style"):
                check_css(self.source, attrs["style"])

        def handle_endtag(self, tag):
            if tag == "style":
                self.in_style = False

        def handle_data(self, value):
            if self.in_style:
                check_css(self.source, value)

    for source in output.rglob("*.html"):
        ResourceParser(source).feed(source.read_text())
    for source in output.rglob("*.css"):
        check_css(source, source.read_text())


def landing(source, lang, data):
    document = Document(source)
    dictionary = data["translations"][lang]
    english = data["translations"]["en"]

    def translate(key):
        assert key in dictionary or key in english, f"Missing translation: {lang}/{key}"
        return dictionary.get(key, english.get(key))

    url = ORIGIN + home_path(lang)
    title = "Somewhere — " + translate("hero.title.2")
    description = text(translate("hero.lead"))
    schema = {
        "@context": "https://schema.org", "@graph": [
            {"@type": "Organization", "@id": ORIGIN + "/#organization", "name": "NP", "alternateName": "엔피",
             "url": ORIGIN + "/", "logo": ORIGIN + "/assets/img/app-icon.svg", "email": "contact@npsomewhere.com"},
            {"@type": "WebSite", "@id": ORIGIN + "/#website", "url": ORIGIN + "/", "name": "Somewhere",
             "inLanguage": data["languages"], "publisher": {"@id": ORIGIN + "/#organization"}},
            {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": title,
             "description": description, "inLanguage": lang, "isPartOf": {"@id": ORIGIN + "/#website"},
             "mainEntity": {"@id": ORIGIN + "/#app"}},
            {"@type": "SoftwareApplication", "@id": ORIGIN + "/#app", "name": "Somewhere",
             "operatingSystem": "iOS, Android", "applicationCategory": "TravelApplication", "url": ORIGIN + "/",
             "description": description, "publisher": {"@id": ORIGIN + "/#organization"},
             "offers": {"@type": "Offer", "price": "0", "priceCurrency": "KRW"},
             "downloadUrl": [data["config"]["APP_STORE_URL"], data["config"]["PLAY_STORE_URL"]]}
        ]}
    head = None
    for node in document.elements():
        attrs = node.attrs
        if attrs.get("data-store") in {"ios", "android"}:
            attrs["href"] = data["config"]["APP_STORE_URL" if attrs["data-store"] == "ios" else "PLAY_STORE_URL"]
        if node.tag == "html":
            attrs.update({"lang": lang, "data-page-lang": lang})
        if node.tag == "head":
            head = node
        for attribute, output in [("data-i18n-aria", "aria-label"), ("data-i18n-title", "title"),
                                  ("data-i18n-alt", "alt"), ("data-i18n-content", "content")]:
            if attribute in attrs:
                attrs[output] = translate(attrs[attribute])
        if "data-i18n" in attrs:
            node.children = [html.escape(translate(attrs["data-i18n"]))]
        if "data-i18n-html" in attrs:
            node.children = [translate(attrs["data-i18n-html"])]
        if "data-language-value" in attrs:
            node.children = [html.escape(translate("lang.option." + lang))]
        if node.tag == "option":
            attrs.pop("selected", None)
            if attrs.get("value") == lang:
                attrs["selected"] = None
        if "data-i18n-src-ko" in attrs:
            attrs["src"] = attrs["data-i18n-src-ko" if lang == "ko" else "data-i18n-src-en"]
        if node.tag == "title":
            node.children = [html.escape(title)]
        if node.tag == "meta":
            key = attrs.get("name", attrs.get("property"))
            if key in {"description", "og:description", "twitter:description"}:
                attrs["content"] = description
            elif key in {"og:title", "og:image:alt", "twitter:title"}:
                attrs["content"] = title
            elif key == "og:url":
                attrs["content"] = url
            elif key == "og:locale":
                attrs["content"] = LOCALES[lang]
        if node.tag == "link" and attrs.get("rel") == "canonical":
            attrs["href"] = url
        if node.tag == "script" and attrs.get("type") == "application/ld+json":
            node.children = [json.dumps(schema, ensure_ascii=False, indent=2).replace("<", "\\u003c")]
        # Assets and utility links resolve correctly at every language URL.
        for attribute in ["href", "src", "data-i18n-src-ko", "data-i18n-src-en"]:
            value = attrs.get(attribute, "")
            if value.startswith("assets/") or value in {"privacy.html", "terms.html", "download.html"}:
                attrs[attribute] = "/" + value
            elif value == "index.html":
                attrs[attribute] = home_path(lang)
    assert head is not None
    for alternative in data["languages"] + ["x-default"]:
        head.children.append(Element("link", [("rel", "alternate"), ("hreflang", alternative),
                                             ("href", ORIGIN + home_path("ko" if alternative == "x-default" else alternative))]))
    for alternative in data["languages"]:
        if alternative != lang:
            head.children.append(Element("meta", [("property", "og:locale:alternate"), ("content", LOCALES[alternative])]))
    return document.render()


def validate(output, data):
    for lang in data["languages"]:
        target = output / home_path(lang).lstrip("/") / "index.html"
        nodes = list(Document(target.read_text()).elements())
        assert len([node for node in nodes if node.tag == "h1"]) == 1
        canonical = [n.attrs["href"] for n in nodes if n.tag == "link" and n.attrs.get("rel") == "canonical"]
        assert canonical == [ORIGIN + home_path(lang)]
        alternatives = {n.attrs["hreflang"]: n.attrs["href"] for n in nodes if "hreflang" in n.attrs}
        assert alternatives == {l: ORIGIN + home_path(l) for l in data["languages"]} | {"x-default": ORIGIN + "/"}
        selected = [n.attrs["value"] for n in nodes if n.tag == "option" and "selected" in n.attrs]
        assert selected == [lang]
        for node in nodes:
            if node.tag == "script" and node.attrs.get("type") == "application/ld+json":
                json.loads("".join(node.children))
            for attribute in ["href", "src", "data-i18n-src-ko", "data-i18n-src-en"]:
                value = node.attrs.get(attribute, "")
                parts = urlsplit(value)
                if not parts.path or parts.scheme or parts.netloc:
                    continue
                asset = output / parts.path.lstrip("/")
                assert asset.exists(), f"Broken {lang} link: {value}"
    for name in ["CNAME", ".nojekyll", "robots.txt", ".well-known/apple-app-site-association", ".well-known/assetlinks.json", "join/index.html", "privacy/index.html", "assets/fonts/PretendardVariable.woff2"]:
        assert (ROOT / name).read_bytes() == (output / name).read_bytes(), f"Changed protected entry point: {name}"
    assert not list(output.rglob("*.md"))
    validate_resources(output)
    print("Validated language metadata, reciprocal hreflang, JSON-LD, all HTML/CSS resources and protected entry points")


def main():
    data = catalog()
    output = ROOT / "dist"
    if output.exists():
        shutil.rmtree(output)
    output.mkdir()
    # Explicit public entry points prevent accidental publication of local docs,
    # repository internals, optimizer tools or agent configuration.
    for name in ["assets", ".well-known", "join", "privacy"]:
        shutil.copytree(ROOT / name, output / name, ignore=shutil.ignore_patterns("*.md", "__pycache__", "optimized-assets.json"))
    for source in ROOT.iterdir():
        if source.is_file() and (source.suffix == ".html" or source.name in {"CNAME", ".nojekyll", "robots.txt", "app-ads.txt"}):
            shutil.copy2(source, output / source.name)
    download = output / "download.html"
    content = download.read_text()
    for store, key in [("ios", "APP_STORE_URL"), ("android", "PLAY_STORE_URL")]:
        url = html.escape(data["config"][key], quote=True)
        content = re.sub(r'(data-store="' + store + r'" href=")[^"]*', lambda match: match[1] + url, content)
    download.write_text(content)
    for source in (output / "assets/img/screens").glob("*.png"):
        assert source.with_suffix(".webp").exists(), f"Run optimize-assets.py for {source.name}"
        source.unlink()
    # The unchanged invitation page still loads the original font. Landing and
    # legal pages use subsets, so retaining this file does not add to their load.
    assert (output / "assets/css/fonts.css").exists(), "Run optimize-assets.py first"
    source = (ROOT / "index.html").read_text()
    for lang in data["languages"]:
        target = output / home_path(lang).lstrip("/") / "index.html"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(landing(source, lang, data))
    # Keep explicit content dates stable across rebuilds. Update these dates only
    # when the corresponding public content changes, never on every deployment.
    entries = [(ORIGIN + home_path(lang), "2026-09-26") for lang in data["languages"]]
    entries += [(ORIGIN + "/" + page, "2026-09-12") for page in ["privacy.html", "terms.html"]]
    sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    sitemap += "".join(f"  <url><loc>{url}</loc><lastmod>{date}</lastmod></url>\n" for url, date in entries) + "</urlset>\n"
    (output / "sitemap.xml").write_text(sitemap)
    llms = "# Somewhere\n\n> A travel planning app for schedules, route maps, shared trips, expenses and settlement.\n\n"
    llms += "The app is free to download. Optional Somewhere Pro subscriptions provide additional features; free download does not mean every feature is free.\n\n## Official product pages\n\n"
    llms += "".join(f"- [{lang}]({ORIGIN + home_path(lang)}): {text(data['translations'][lang]['hero.title.2'])}\n" for lang in data["languages"])
    llms += f"\n## Downloads and policies\n\n- [App Store]({data['config']['APP_STORE_URL']})\n- [Google Play]({data['config']['PLAY_STORE_URL']})\n- [Privacy policy](https://npsomewhere.com/privacy.html)\n- [Terms of service](https://npsomewhere.com/terms.html)\n"
    (output / "llms.txt").write_text(llms)
    validate(output, data)
    print(f"Built {len(data['languages'])} static landing languages and {len(entries)} sitemap URLs in dist/")


if __name__ == "__main__":
    main()
