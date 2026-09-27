/* Send the canonical landing URL to the visitor's preferred language page. */
(function () {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path !== "/" && path !== "/index.html") return;

  const supported = ["ko", "en", "ja", "zh-CN", "zh-TW", "fr", "de", "es"];
  const explicitKey = "somewhere-lang-explicit";
  const storedKey = "somewhere-lang";

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

  let explicit = null;
  let saved = null;
  try {
    explicit = normalize(localStorage.getItem(explicitKey));
    saved = normalize(localStorage.getItem(storedKey));
  } catch (_) { /* Browser storage is optional. */ }

  const preferences = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "en"];
  let browserLanguage = null;
  for (const preference of preferences) {
    browserLanguage = normalize(preference);
    if (browserLanguage) break;
  }

  // The old site saved its Korean root page as if it were a user choice.
  // Keep explicit choices and other saved languages, but let locale detection
  // replace that legacy default when it does not match the browser.
  const language = explicit || (saved && saved !== "ko" ? saved : null) || browserLanguage || saved || "en";
  if (language === "ko") return;

  window.location.replace(`/${language.toLowerCase()}/${window.location.search}${window.location.hash}`);
})();
