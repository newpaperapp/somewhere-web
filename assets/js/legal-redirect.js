/* Route /privacy and /terms to the best matching regional document. */
(function () {
  const script = document.currentScript;
  const documentType = script && script.dataset.legalDocument;
  if (!["privacy", "terms"].includes(documentType)) return;

  const regionKey = "somewhere-legal-region";
  const languageKey = "somewhere-legal-language";
  const supported = ["ko", "en", "ja", "zh-cn", "zh-tw", "fr", "de", "es"];
  const euEeaCountries = new Set([
    "AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GR", "HR",
    "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT",
    "RO", "SE", "SI", "SK",
  ]);

  function readStorage(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  }

  function browserLocale() {
    try { return new Intl.Locale(navigator.language || "en"); } catch (_) { return null; }
  }

  function normalizeLanguage(value) {
    const raw = String(value || "").toLowerCase();
    if (raw.startsWith("zh-tw") || raw.startsWith("zh-hk") || raw.startsWith("zh-mo")) return "zh-tw";
    if (raw.startsWith("zh")) return "zh-cn";
    const language = raw.split("-")[0];
    return supported.includes(language) ? language : null;
  }

  function selectedLanguage() {
    const legalLanguage = normalizeLanguage(readStorage(languageKey));
    if (legalLanguage) return legalLanguage;
    if (window.SomewhereI18N) {
      const detected = normalizeLanguage(window.SomewhereI18N.detectLang());
      if (detected) return detected;
    }
    const locale = browserLocale();
    return normalizeLanguage(locale && locale.language) || "en";
  }

  function chooseRegion(language, explicitRegion) {
    if (["kr", "jp", "us", "eu"].includes(explicitRegion)) return explicitRegion;
    if (language === "ko" || language.startsWith("zh")) return "kr";
    if (language === "ja") return "jp";
    if (["fr", "de", "es"].includes(language)) return "eu";
    const locale = browserLocale();
    if (language === "en" && locale && euEeaCountries.has(locale.region)) return "eu";
    return "us";
  }

  function target(region, language) {
    if (region === "kr") return `/${documentType}.html?lang=${language === "ko" ? "ko" : "en"}`;
    if (region === "jp") return `/ja/${documentType}.html`;
    if (region === "us") return `/us/${documentType}.html`;
    const legalLanguage = ["en", "fr", "de", "es"].includes(language) ? language : "en";
    return legalLanguage === "en"
      ? `/eu/${documentType}.html`
      : `/eu/${legalLanguage}/${documentType}.html`;
  }

  const language = selectedLanguage();
  const region = chooseRegion(language, readStorage(regionKey));

  if (window.SomewhereI18N) {
    window.SomewhereI18N.applyLang(language);
    const titleKey = documentType === "privacy" ? "legal.redirect.title" : "legal.redirect.termsTitle";
    document.title = `Somewhere — ${window.SomewhereI18N.get(titleKey, language)}`;
  }
  window.location.replace(target(region, language));
})();
