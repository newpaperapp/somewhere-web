/* Send returning visitors from the root page to their chosen language page,
   and on every landing page suggest the browser's language without
   redirecting. Crawlers render with a browser locale but no stored
   preference, so each localized page stays distinct for hreflang. */
(function () {
  const supported = ["ko", "en", "ja", "zh-CN", "zh-TW", "fr", "de", "es"];
  const explicitKey = "somewhere-lang-explicit";
  const storedKey = "somewhere-lang";
  const dismissedKey = "somewhere-lang-banner-dismissed";

  function normalize(value) {
    const raw = String(value || "").trim().replace(/_/g, "-").toLowerCase();
    if (!raw) return null;
    const exact = supported.find((language) => language.toLowerCase() === raw);
    if (exact) return exact;
    if (raw.startsWith("ko")) return "ko";
    if (raw.startsWith("ja")) return "ja";
    if (raw.startsWith("fr")) return "fr";
    if (raw.startsWith("de")) return "de";
    if (raw.startsWith("es")) return "es";
    if (raw.startsWith("zh")) return /(?:-tw|-hk|-mo|hant)/.test(raw) ? "zh-TW" : "zh-CN";
    if (raw.startsWith("en")) return "en";
    return null;
  }

  const pageLanguage = normalize(document.documentElement.getAttribute("data-page-lang"));
  if (!pageLanguage) return;

  function localizedPath(language) {
    const home = language === "ko" ? "/" : `/${language.toLowerCase()}/`;
    return `${home}${window.location.search}${window.location.hash}`;
  }

  function readStorage(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  }

  function writeStorage(key, value) {
    try { localStorage.setItem(key, value); } catch (_) { /* Browser storage is optional. */ }
  }

  const explicit = normalize(readStorage(explicitKey));

  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/" || path === "/index.html") {
    // The old site saved its Korean root page as if it were a user choice, so
    // a saved "ko" is not treated as a preference here.
    const saved = normalize(readStorage(storedKey));
    const preferred = explicit || (saved && saved !== "ko" ? saved : null);
    if (preferred && preferred !== pageLanguage) {
      window.location.replace(localizedPath(preferred));
      return;
    }
  }

  const preferences = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "en"];
  let browserLanguage = null;
  for (const preference of preferences) {
    browserLanguage = normalize(preference);
    if (browserLanguage) break;
  }
  const suggested = explicit || browserLanguage || "en";
  if (suggested === pageLanguage || readStorage(dismissedKey) === suggested) return;

  function showBanner() {
    const i18n = window.SomewhereI18N;
    const t = (key) => (i18n ? i18n.get(key, suggested) : "");
    const message = t("langBanner.message");
    if (!message) return;

    const banner = document.createElement("div");
    banner.className = "lang-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", message);
    banner.lang = suggested;

    const text = document.createElement("span");
    text.className = "lang-banner__text";
    text.textContent = message;

    const action = document.createElement("a");
    action.className = "lang-banner__action";
    action.href = localizedPath(suggested);
    action.textContent = t("langBanner.action");
    action.addEventListener("click", () => writeStorage(explicitKey, suggested));

    const close = document.createElement("button");
    close.type = "button";
    close.className = "lang-banner__close";
    close.setAttribute("aria-label", t("langBanner.close"));
    const svgNS = "http://www.w3.org/2000/svg";
    const icon = document.createElementNS(svgNS, "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");
    const cross = document.createElementNS(svgNS, "path");
    cross.setAttribute("d", "M6 6l12 12M18 6L6 18");
    icon.appendChild(cross);
    close.appendChild(icon);
    close.addEventListener("click", () => {
      writeStorage(dismissedKey, suggested);
      banner.remove();
    });

    banner.append(text, action, close);
    document.body.appendChild(banner);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showBanner);
  } else {
    showBanner();
  }
})();
