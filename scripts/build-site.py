"""Build static localized landing pages using the existing HTML and JS catalog.

Requires Python 3.9+ and Node.js 22+. No package install or browser is needed.
Only public files are copied; scripts, source screenshots and repository
metadata never enter the deployment artifact. Output is the ignored dist/ tree.
"""
import html
import json
import os
import re
import shutil
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
from zoneinfo import ZoneInfo

from site_common import ROOT, ORIGIN, catalog, home_path

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
LOCALES = {"ko": "ko_KR", "en": "en_US", "ja": "ja_JP", "zh-CN": "zh_CN", "zh-TW": "zh_TW",
           "fr": "fr_FR", "de": "de_DE", "es": "es_ES"}
LEGAL_ROUTES = {lang: {"privacy.html": "/privacy", "terms.html": "/terms"} for lang in LOCALES}
# Hand-written feature pages: features/<slug>/<lang>.html holds the localized <title>, description
# and <main>, wrapped in features/_shell.html and served at feature_path(slug, lang).
# Each date is the page's last content change and becomes its sitemap lastmod.
FEATURE_PAGES = {"expense": "2026-10-27", "map": "2026-10-21", "together": "2026-10-21", "ai": "2026-10-21"}
FEATURE_LANGUAGES = ["ko", "en", "ja", "zh-CN", "zh-TW", "fr", "de", "es"]
# Legal shells: page -> (fragment folder, page language, script listing its versions).
# Each fragment's file name is its effective date. The build embeds the version in
# force on the build day in Korea, and a daily scheduled deploy keeps it current.
LEGAL_DOCUMENTS = {
    "privacy.html": ("assets/legal/privacy", "ko", "assets/js/privacy.js"),
    "terms.html": ("assets/legal/terms", "ko", "assets/js/terms.js"),
    **{f"{page}/{doc}.html": (f"assets/legal/{key}/{doc}", key.split("/")[1], "assets/js/regional-legal.js")
       for key, page in {"us/en": "us", "eu/en": "eu", "eu/fr": "eu/fr", "eu/de": "eu/de",
                         "eu/es": "eu/es", "jp/ja": "ja"}.items()
       for doc in ["privacy", "terms"]},
}
LEGAL_MONTHS = {
    "en": ["January", "February", "March", "April", "May", "June", "July", "August", "September",
           "October", "November", "December"],
    "fr": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre",
           "octobre", "novembre", "décembre"],
    "de": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September",
           "Oktober", "November", "Dezember"],
    "es": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre",
           "octubre", "noviembre", "diciembre"],
}
LEGAL_BODY = re.compile(r"(<!-- legal-body:start -->\n).*?(\n<!-- legal-body:end -->)", re.S)


def feature_path(slug, lang):
    return home_path(lang) + "features/" + slug + "/"


def build_day():
    """Today in Korea, or SITE_BUILD_DATE (YYYY-MM-DD) to preview a future switch."""
    return os.environ.get("SITE_BUILD_DATE") or datetime.now(ZoneInfo("Asia/Seoul")).date().isoformat()


def legal_versions(folder):
    """Effective dates of a document's fragments, newest first."""
    return sorted((p.stem for p in (ROOT / folder).glob("*.html")
                   if re.fullmatch(r"\d{4}-\d{2}-\d{2}", p.stem)), reverse=True)


def legal_date(day, lang):
    """Same wording as legal-doc.js labels, for pages read without JavaScript."""
    year, month, date = (int(part) for part in day.split("-"))
    if lang == "ko":
        return f"{year}년 {month}월 {date}일"
    if lang == "ja":
        return f"{year}年{month}月{date}日"
    name = LEGAL_MONTHS[lang][month - 1]
    return {"fr": f"{'1er' if date == 1 else date} {name} {year}", "de": f"{date}. {name} {year}",
            "es": f"{date} de {name} de {year}"}.get(lang, f"{name} {date}, {year}")


def validate_legal():
    """Version lists match the fragment files, and sources embed their newest fragment."""
    normalize = lambda value: re.sub(r"\s+", " ", value).strip()
    regional = {}
    for key, ids in re.findall(r'"(\w+/\w+/\w+)": \[([^\]]*)\]', (ROOT / "assets/js/regional-legal.js").read_text()):
        regional[key] = re.findall(r'"([\d-]+)"', ids)
    for page, (folder, _, script) in LEGAL_DOCUMENTS.items():
        files = legal_versions(folder)
        if script.endswith("regional-legal.js"):
            listed = regional.get(folder.removeprefix("assets/legal/"), [])
        else:
            listed = re.findall(re.escape(folder) + r"/([\d-]+)\.html", (ROOT / script).read_text())
        assert sorted(listed, reverse=True) == files, f"{script} must list every fragment in {folder}"
        source = (ROOT / page).read_text()
        body = LEGAL_BODY.search(source)
        assert body, f"Missing legal body markers in {page}"
        newest = (ROOT / folder / f"{files[0]}.html").read_text()
        assert normalize(body.group(0)[len(body[1]):-len(body[2])]) == normalize(newest), \
            f"{page} must embed {folder}/{files[0]}.html"
        assert f'data-legal-embedded="{files[0]}"' in source, f"{page} must mark {files[0]} as embedded"


def embed_legal(output, day):
    """Puts the version in force on `day` into each built legal shell; returns page -> its date."""
    in_force = {}
    for page, (folder, lang, _) in LEGAL_DOCUMENTS.items():
        current = next(v for v in legal_versions(folder) if v <= day)
        fragment = (ROOT / folder / f"{current}.html").read_text().rstrip("\n")
        target = output / page
        content = LEGAL_BODY.sub(lambda match: match[1] + fragment + match[2], target.read_text())
        content = re.sub(r'data-legal-embedded="[^"]*"', f'data-legal-embedded="{current}"', content)
        content = re.sub(r"(<span data-eff-date>)[^<]*(</span>)",
                         lambda match: match[1] + legal_date(current, lang) + match[2], content)
        target.write_text(content)
        in_force[page] = current
    return in_force


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
             "url": ORIGIN + "/", "logo": ORIGIN + "/assets/img/app-icon.svg", "email": "np@npsomewhere.com"},
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
        # Feature links point at the feature page in the landing page's own language.
        if "data-feature-page" in attrs:
            attrs["href"] = feature_path(attrs["data-feature-page"], lang)
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
        if "data-i18n-src" in attrs:
            attrs["src"] = attrs["data-i18n-src"].replace("{lang}", lang.lower())
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
        for attribute in ["href", "src", "data-i18n-src"]:
            value = attrs.get(attribute, "")
            if value in {"privacy.html", "terms.html"}:
                attrs[attribute] = LEGAL_ROUTES[lang][value]
            elif value.startswith("assets/") or value == "download.html":
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


def feature_page(slug, lang, data):
    """Wrap a feature page's localized body in the shared frame, with its metadata and FAQ schema."""
    dictionary, english = data["translations"][lang], data["translations"]["en"]

    def translate(key):
        assert key in dictionary or key in english, f"Missing translation: {lang}/{key}"
        return dictionary.get(key, english.get(key))

    source = (ROOT / "features" / slug / f"{lang}.html").read_text()
    title = text(re.search(r"<title>(.*?)</title>", source, re.S)[1])
    description = html.unescape(re.search(r'<meta name="description" content="([^"]*)"', source)[1])
    main = source[source.index("<main"):source.rindex("</main>") + len("</main>")]
    badges = (
        f'<div class="store-badges" role="group" aria-label="{html.escape(translate("store.downloadGroup"))}">'
        + "".join(
            f'<a class="store-badge store-badge--{store}" data-store="{store}" href="{html.escape(data["config"][key])}"'
            f' target="_blank" rel="noopener" aria-label="{html.escape(translate("store." + store))}">'
            f'<img src="/assets/img/badges/{badge}" alt="{html.escape(translate("store." + store))}" width="{width}" height="40" /></a>'
            for store, key, badge, width in [("ios", "APP_STORE_URL", "download_on_the_app_store.svg", 120),
                                             ("android", "PLAY_STORE_URL", "get_it_on_google_play.svg", 135)])
        + "</div>")
    main = main.replace("<!-- store-badges -->", badges)

    def plain(node):
        return " ".join(text(node.render()).split())

    nodes = list(Document(main).elements())
    eyebrow = next((plain(n) for n in nodes if n.attrs.get("class") == "feature-hero__eyebrow"), None)
    assert eyebrow, f"Needs a feature-hero__eyebrow for the breadcrumb: {slug}/{lang}"
    faq = []
    for node in nodes:
        if node.attrs.get("class") == "feature-faq":
            for item in (child for child in node.children if isinstance(child, Element)):
                question = next(c for c in item.children if isinstance(c, Element) and c.tag == "h3")
                answer = next(c for c in item.children if isinstance(c, Element) and c.tag == "p")
                faq.append({"@type": "Question", "name": plain(question),
                            "acceptedAnswer": {"@type": "Answer", "text": plain(answer)}})
    url = ORIGIN + feature_path(slug, lang)
    graph = [
        {"@type": "WebPage", "@id": url + "#webpage", "url": url, "name": title, "description": description,
         "inLanguage": lang, "isPartOf": {"@id": ORIGIN + "/#website"}, "about": {"@id": ORIGIN + "/#app"},
         "breadcrumb": {"@id": url + "#breadcrumb"}},
        {"@type": "BreadcrumbList", "@id": url + "#breadcrumb", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Somewhere", "item": ORIGIN + home_path(lang)},
            {"@type": "ListItem", "position": 2, "name": eyebrow, "item": url}]},
    ]
    if faq:
        graph.append({"@type": "FAQPage", "@id": url + "#faq", "inLanguage": lang, "mainEntity": faq})
    schema = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, indent=2)

    values = {
        "lang": lang, "title": html.escape(title), "description": html.escape(description), "url": url,
        "alternates": "\n    ".join(
            f'<link rel="alternate" hreflang="{alternative}" href="{ORIGIN + feature_path(slug, "ko" if alternative == "x-default" else alternative)}" />'
            for alternative in FEATURE_LANGUAGES + ["x-default"]),
        "locale": LOCALES[lang],
        "locale_alternates": "\n    ".join(
            f'<meta property="og:locale:alternate" content="{LOCALES[alternative]}" />'
            for alternative in FEATURE_LANGUAGES if alternative != lang),
        "schema": schema.replace("<", "\\u003c"),
        "home": home_path(lang),
        "language_name": html.escape(translate("lang.option." + lang)),
        "language_label": html.escape(translate("lang.select")),
        "language_options": "\n              ".join(
            f'<option value="{option}" data-href="{feature_path(slug, option)}"{" selected" if option == lang else ""}>'
            f'{html.escape(translate("lang.option." + option))}</option>' for option in FEATURE_LANGUAGES),
        "theme_label": html.escape(translate("theme.toggle")),
        "main": main,
        "footer_contact": html.escape(translate("footer.contact")),
        "privacy": LEGAL_ROUTES[lang]["privacy.html"], "terms": LEGAL_ROUTES[lang]["terms.html"],
        "footer_privacy": html.escape(translate("footer.privacy")),
        "footer_terms": html.escape(translate("footer.terms")),
        "footer_notices": html.escape(translate("footer.notices")),
        "footer_whats_new": html.escape(translate("whatsNew.title")),
        "footer_business": html.escape(translate("footer.business")),
        "footer_business_info": translate("footer.businessInfo"),
        "footer_legal": html.escape(translate("footer.legal")),
    }
    shell = re.sub(r"<!--.*?-->\n", "", (ROOT / "features/_shell.html").read_text(), count=1, flags=re.S)
    return re.sub(r"\{\{(\w+)\}\}", lambda match: values[match[1]], shell)


def fill_placeholder(page, marker, content):
    """Replace the one build placeholder comment in a page copied to dist/."""
    source = page.read_text()
    assert source.count(marker) == 1, f"{page.relative_to(page.parents[1])} needs exactly one {marker}"
    page.write_text(source.replace(marker, content))


def whats_new(output, data):
    """Render whats-new/releases.json into the page so crawlers and no-JS readers get the cards.

    Korean is the default text; each note carries every translation for the page script.
    Returns the newest release date (YYYY-MM-DD) for the sitemap.
    """
    releases = json.loads((ROOT / "whats-new/releases.json").read_text())["releases"]
    ko = data["translations"]["ko"]
    cards = []
    for index, release in enumerate(releases):
        badge = (f'<span class="news-card__badge" data-i18n="whatsNew.latest">{html.escape(ko["whatsNew.latest"])}</span>'
                 if index == 0 else "")
        items = "".join(
            f'<li data-news-item="{html.escape(json.dumps(item, ensure_ascii=False), quote=True)}">'
            f'{html.escape(item.get("ko") or item["en"])}</li>'
            for item in release["items"])
        cards.append(
            f'<section class="news-card{" news-card--latest" if index == 0 else ""}">'
            f'<div class="news-card__header"><h2 class="news-card__version">v{html.escape(release["version"])}</h2>'
            f'{badge}<span class="news-card__date">{html.escape(release["date"])}</span></div>'
            f'<ul class="news-card__items">{items}</ul></section>')
    if not cards:
        cards.append(f'<p class="news-status" data-i18n="whatsNew.empty">{html.escape(ko["whatsNew.empty"])}</p>')
    fill_placeholder(output / "whats-new/index.html", "<!-- whats-new:releases -->", "".join(cards))
    dates = [release["date"] for release in releases if release["date"].count(".") == 2]
    return dates[0].replace(".", "-") if dates else None


def notice_body(blocks):
    """A string is a paragraph and a list of strings is a bulleted list."""
    return "".join(
        "<ul>" + "".join(f"<li>{html.escape(item)}</li>" for item in block) + "</ul>"
        if isinstance(block, list) else f"<p>{html.escape(block)}</p>"
        for block in blocks)


def notices(output, data):
    """Render notices/notices.json into the list page and one page per notice at /notices/<id>/.

    Both come from the frame in notices/_shell.html. Each notice is rendered in each of its
    languages so crawlers and no-JS readers get it; Korean (or English) is visible and the page
    script shows the reader's language, falling back to English. Returns the (url, YYYY-MM-DD)
    sitemap entries of the list and notices.
    """
    entries = json.loads((ROOT / "notices/notices.json").read_text())["notices"]
    assert len({notice["id"] for notice in entries}) == len(entries), "notices.json ids must be unique"
    dates = [notice["date"] for notice in entries]
    assert dates == sorted(dates, reverse=True), "notices.json must list notices newest first"
    ko = data["translations"]["ko"]
    shell = re.sub(r"<!--.*?-->\n", "", (output / "notices/_shell.html").read_text(), count=1, flags=re.S)
    (output / "notices/_shell.html").unlink()

    def write(path, lang, values):
        values |= {"lang": lang, "locale": LOCALES[lang], "url": ORIGIN + path}
        page = output / path.lstrip("/") / "index.html"
        page.parent.mkdir(parents=True, exist_ok=True)
        page.write_text(re.sub(r"\{\{(\w+)\}\}", lambda match: values[match[1]], shell))

    items, sitemap = [], []
    for notice in entries:
        nid, link = notice["id"], notice.get("link")
        assert re.fullmatch(r"[a-z0-9-]+", nid), f"Notice id must be a URL path segment: {nid}"
        assert re.fullmatch(r"\d{4}\.\d{2}\.\d{2}", notice["date"]), f"Notice date must be YYYY.MM.DD: {nid}"
        langs = set(notice["title"])
        assert "en" in langs and langs <= set(data["languages"]), f"Notice needs English and site languages only: {nid}"
        assert set(notice["body"]) == langs and (not link or set(link["label"]) == langs), \
            f"Notice title, body and link label need the same languages: {nid}"
        # validate_notices() checks that the target exists once every page is built.
        assert not link or (link["href"].startswith("/") and not link["href"].startswith("//")), \
            f"Notice link must be a site path starting with /: {nid}"
        shown = "ko" if "ko" in langs else "en"
        ordered = [lang for lang in data["languages"] if lang in langs]

        def variants(tag, cls, render):
            return "".join(f'<{tag}{cls} lang="{lang}" data-lang="{lang}"{"" if lang == shown else " hidden"}>'
                           f'{render(lang)}</{tag}>' for lang in ordered)

        path = f"/notices/{nid}/"
        date = html.escape(notice["date"])
        items.append(
            f'<li data-notice><a class="notice-item" href="{path}" data-notices-link>'
            + variants("span", ' class="notice-item__title"', lambda lang: html.escape(notice["title"][lang]))
            + f'<span class="notice-item__date">{date}</span></a></li>')
        body = variants("div", "", lambda lang: notice_body(notice["body"][lang]) + (
            f'<a class="notice-detail__link" href="{html.escape(link["href"], quote=True)}">'
            f'{html.escape(link["label"][lang])}'
            '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">'
            '<path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></svg></a>' if link else ""))
        article = (
            '<article class="notice-detail" data-notice>'
            + '<h1 class="notice-detail__title">'
            + variants("span", "", lambda lang: html.escape(notice["title"][lang])) + "</h1>"
            + f'<time class="notice-detail__date" datetime="{notice["date"].replace(".", "-")}">{date}</time>'
            + f'<div class="notice-detail__body">{body}</div></article>')
        # The first paragraph describes the notice; a body of lists only falls back to the title.
        summary = next((block for block in notice["body"][shown] if isinstance(block, str)), notice["title"][shown])
        write(path, shown, {
            "title": html.escape(notice["title"][shown]), "og_type": "article", "locale_alternate": "",
            "description": html.escape(summary if len(summary) <= 160 else summary[:159] + "…", quote=True),
            "nav_class": "", "main": article,
            "nav": ('<a class="notice-back" href="/notices/" data-notices-link>'
                    '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">'
                    '<path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>'
                    f'<span data-i18n="notices.back">{html.escape(ko["notices.back"])}</span></a>')})
        sitemap.append((ORIGIN + path, notice["date"].replace(".", "-")))
    listing = (f'<ul class="notice-list">{"".join(items)}</ul>' if items else
               f'<p class="notice-status" data-i18n="notices.empty">{html.escape(ko["notices.empty"])}</p>')
    write("/notices/", "ko", {
        "title": html.escape(ko["notices.title"]), "og_type": "website",
        "locale_alternate": '\n    <meta property="og:locale:alternate" content="en_US" />',
        "description": html.escape(f'{ko["notices.subtitle"]} / {data["translations"]["en"]["notices.subtitle"]}', quote=True),
        "nav_class": " notice-top-nav--title",
        "nav": f'<h1 class="notice-page-title" data-i18n="notices.title">{html.escape(ko["notices.title"])}</h1>',
        "main": f'<p class="notice-subtitle" data-i18n="notices.subtitle">{html.escape(ko["notices.subtitle"])}</p>\n      {listing}'})
    # The list changes whenever a notice is added, so it follows the newest notice date.
    return ([(ORIGIN + "/notices/", sitemap[0][1])] if sitemap else []) + sitemap


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
        policy_links = [
            n.attrs["href"] for n in nodes
            if n.tag == "a" and n.attrs.get("href") in {"/privacy", "/terms"}
        ]
        assert policy_links == ["/privacy", "/terms"]
        for node in nodes:
            if node.tag == "script" and node.attrs.get("type") == "application/ld+json":
                json.loads("".join(node.children))
            values = [node.attrs.get("href", ""), node.attrs.get("src", "")]
            # Every language's screenshot must exist for the runtime language switch.
            values += [node.attrs["data-i18n-src"].replace("{lang}", l.lower())
                       for l in data["languages"] if "data-i18n-src" in node.attrs]
            for value in values:
                parts = urlsplit(value)
                if not parts.path or parts.scheme or parts.netloc:
                    continue
                asset = output / parts.path.lstrip("/")
                assert asset.exists(), f"Broken {lang} link: {value}"
    ko_alias = output / "ko" / "index.html"
    ko_nodes = list(Document(ko_alias.read_text()).elements())
    assert next(n for n in ko_nodes if n.tag == "html").attrs["lang"] == "ko"
    assert [n.attrs["href"] for n in ko_nodes if n.tag == "link" and n.attrs.get("rel") == "canonical"] == [ORIGIN + "/"]
    assert [n.attrs["value"] for n in ko_nodes if n.tag == "option" and "selected" in n.attrs] == ["ko"]
    for name in ["CNAME", ".nojekyll", "robots.txt", ".well-known/apple-app-site-association", ".well-known/assetlinks.json", "join/index.html", "privacy/index.html", "terms/index.html", "assets/fonts/PretendardVariable.woff2"]:
        assert (ROOT / name).read_bytes() == (output / name).read_bytes(), f"Changed protected entry point: {name}"
    assert not list(output.rglob("*.md"))
    validate_features(output)
    validate_notices(output)
    validate_sitemap(output)
    validate_resources(output)
    print("Validated language metadata, reciprocal hreflang, JSON-LD, sitemap URLs, all HTML/CSS resources and protected entry points")


def served(output, href):
    """Whether a site path resolves; GitHub Pages serves /name from name.html or name/index.html."""
    path = urlsplit(href).path.lstrip("/")
    return any(candidate.is_file() for candidate in [
        output / path, output / path / "index.html", output / (path + ".html")])


def validate_sitemap(output):
    """Every sitemap URL is a page the deployment serves."""
    for url in re.findall(r"<loc>([^<]*)</loc>", (output / "sitemap.xml").read_text()):
        assert url.startswith(ORIGIN + "/") and served(output, url[len(ORIGIN):]), f"Sitemap URL is not served: {url}"


def validate_notices(output):
    for page in (output / "notices").glob("*/index.html"):
        for node in Document(page.read_text()).elements():
            if node.tag == "a" and node.attrs.get("class") == "notice-detail__link":
                assert served(output, node.attrs["href"]), f"Broken link in notice {page.parent.name}: {node.attrs['href']}"


def validate_features(output):
    for slug in FEATURE_PAGES:
        expected = {lang: ORIGIN + feature_path(slug, lang) for lang in FEATURE_LANGUAGES}
        expected["x-default"] = expected["ko"]
        for lang in FEATURE_LANGUAGES:
            nodes = list(Document((output / feature_path(slug, lang).lstrip("/") / "index.html").read_text()).elements())
            assert next(n for n in nodes if n.tag == "html").attrs.get("lang") == lang, f"Wrong lang: {slug}/{lang}"
            assert len([n for n in nodes if n.tag == "h1"]) == 1, f"Needs one h1: {slug}/{lang}"
            canonical = [n.attrs["href"] for n in nodes if n.tag == "link" and n.attrs.get("rel") == "canonical"]
            assert canonical == [expected[lang]], f"Wrong canonical: {slug}/{lang}"
            alternatives = {n.attrs["hreflang"]: n.attrs["href"] for n in nodes if n.tag == "link" and "hreflang" in n.attrs}
            assert alternatives == expected, f"Wrong hreflang: {slug}/{lang}"
            descriptions = [n.attrs.get("content", "") for n in nodes if n.tag == "meta" and n.attrs.get("name") == "description"]
            assert len(descriptions) == 1 and descriptions[0].strip(), f"Needs a description: {slug}/{lang}"
            for node in nodes:
                if node.tag == "script" and node.attrs.get("type") == "application/ld+json":
                    json.loads("".join(node.children))
                href = node.attrs.get("href", "") if node.tag == "a" else ""
                if href.startswith("/") and not href.startswith("//"):
                    assert served(output, href), f"Broken link in {slug}/{lang}: {href}"


def main():
    data = catalog()
    output = ROOT / "dist"
    if output.exists():
        shutil.rmtree(output)
    output.mkdir()
    # Explicit public entry points prevent accidental publication of local docs,
    # repository internals, optimizer tools or agent configuration.
    for name in ["assets", ".well-known", "join", "privacy", "terms", "whats-new", "notices", "ja", "eu", "us"]:
        shutil.copytree(ROOT / name, output / name, ignore=shutil.ignore_patterns("*.md", "__pycache__", "optimized-assets.json"))
    for source in ROOT.iterdir():
        if source.is_file() and (source.suffix == ".html" or source.name in {"CNAME", ".nojekyll", "robots.txt", "app-ads.txt"}):
            shutil.copy2(source, output / source.name)
    whats_new_lastmod = whats_new(output, data)
    notice_entries = notices(output, data)
    download = output / "download.html"
    content = download.read_text()
    for store, key in [("ios", "APP_STORE_URL"), ("android", "PLAY_STORE_URL")]:
        url = html.escape(data["config"][key], quote=True)
        content = re.sub(r'(data-store="' + store + r'" href=")[^"]*', lambda match: match[1] + url, content)
    download.write_text(content)
    assert not list(output.rglob("assets/img/screens/*.png")), "Screenshot PNGs belong in store-screenshots/web"
    # The unchanged invitation page still loads the original font. Landing and
    # legal pages use subsets, so retaining this file does not add to their load.
    assert (output / "assets/css/fonts.css").exists(), "Run optimize-assets.py first"
    source = (ROOT / "index.html").read_text()
    for lang in data["languages"]:
        target = output / home_path(lang).lstrip("/") / "index.html"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(landing(source, lang, data))
    # Keep / as the canonical Korean URL while serving the manually requested /ko/ path.
    ko_alias = output / "ko" / "index.html"
    ko_alias.parent.mkdir(parents=True, exist_ok=True)
    ko_alias.write_text(landing(source, "ko", data))
    for slug in FEATURE_PAGES:
        for lang in FEATURE_LANGUAGES:
            target = output / feature_path(slug, lang).lstrip("/") / "index.html"
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(feature_page(slug, lang, data))
    validate_legal()
    in_force = embed_legal(output, build_day())
    # Keep explicit content dates stable across rebuilds. Update these dates only
    # when the corresponding public content changes, never on every deployment.
    entries = [(ORIGIN + home_path(lang), "2026-10-27") for lang in data["languages"]]
    # Legal pages change content on the effective date of their version in force.
    entries += [(ORIGIN + "/" + page, date) for page, date in in_force.items()]
    entries += [(ORIGIN + "/ja/commercial-transactions.html", "2026-09-28")]
    # Import guides are listed at their canonical extensionless URLs.
    entries += [(ORIGIN + "/import-place", "2026-10-02"), (ORIGIN + "/import-trip", "2026-10-02")]
    entries += [(ORIGIN + feature_path(slug, lang), date)
                for slug, date in FEATURE_PAGES.items() for lang in FEATURE_LANGUAGES]
    # Changes with every published release, so it follows the newest release date.
    if whats_new_lastmod:
        entries += [(ORIGIN + "/whats-new/", whats_new_lastmod)]
    entries += notice_entries
    sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    sitemap += "".join(f"  <url><loc>{url}</loc><lastmod>{date}</lastmod></url>\n" for url, date in entries) + "</urlset>\n"
    (output / "sitemap.xml").write_text(sitemap)
    llms = "# Somewhere\n\n> A travel planning app for schedules, route maps, shared trips, expenses and settlement.\n\n"
    llms += "The app is free to download. Optional Somewhere Pro subscriptions provide additional features; free download does not mean every feature is free.\n\n## Official product pages\n\n"
    llms += "".join(f"- [{lang}]({ORIGIN + home_path(lang)}): {text(data['translations'][lang]['hero.title.2'])}\n" for lang in data["languages"])
    llms += "\n## Feature pages\n\n" + "".join(
        f"- [{lang}]({ORIGIN + feature_path(slug, lang)}): "
        f"{text(re.search(r'<title>(.*?)</title>', (ROOT / 'features' / slug / f'{lang}.html').read_text(), re.S)[1])}\n"
        for slug in FEATURE_PAGES for lang in FEATURE_LANGUAGES)
    llms += f"\n## Downloads and policies\n\n- [App Store]({data['config']['APP_STORE_URL']})\n- [Google Play]({data['config']['PLAY_STORE_URL']})\n- [Privacy policy (Korea, Korean/English)](https://npsomewhere.com/privacy.html)\n- [Terms of service (Korea, Korean/English)](https://npsomewhere.com/terms.html)\n- [Privacy policy (Japan)](https://npsomewhere.com/ja/privacy.html)\n- [Terms of service (Japan)](https://npsomewhere.com/ja/terms.html)\n- [Specified Commercial Transactions Act disclosure (Japan)](https://npsomewhere.com/ja/commercial-transactions.html)\n- [U.S. Privacy Notice](https://npsomewhere.com/us/privacy.html)\n- [U.S. Terms of Service](https://npsomewhere.com/us/terms.html)\n- [EU Privacy Notice (English)](https://npsomewhere.com/eu/privacy.html)\n- [EU Terms of Service (English)](https://npsomewhere.com/eu/terms.html)\n- [EU Privacy Notice (French)](https://npsomewhere.com/eu/fr/privacy.html)\n- [EU Privacy Notice (German)](https://npsomewhere.com/eu/de/privacy.html)\n- [EU Privacy Notice (Spanish)](https://npsomewhere.com/eu/es/privacy.html)\n"
    (output / "llms.txt").write_text(llms)
    validate(output, data)
    print(f"Built {len(data['languages'])} static landing languages and {len(entries)} sitemap URLs in dist/")


if __name__ == "__main__":
    main()
