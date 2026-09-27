/* Region selects the applicable legal document; language selects its translation. */
(function () {
  const LEGAL_REGION_KEY = "somewhere-legal-region";
  const LEGAL_LANGUAGE_KEY = "somewhere-legal-language";
  const routes = {
    kr: {
      languages: ["ko", "en"],
      privacy: { ko: "/privacy.html?lang=ko", en: "/privacy.html?lang=en" },
      terms: { ko: "/terms.html?lang=ko", en: "/terms.html?lang=en" },
    },
    jp: {
      languages: ["ja"],
      privacy: { ja: "/ja/privacy.html" },
      terms: { ja: "/ja/terms.html" },
      commerce: { ja: "/ja/commercial-transactions.html" },
    },
    us: {
      languages: ["en"],
      privacy: { en: "/us/privacy.html" },
      terms: { en: "/us/terms.html" },
    },
    eu: {
      languages: ["en", "fr", "de", "es"],
      privacy: {
        en: "/eu/privacy.html",
        fr: "/eu/fr/privacy.html",
        de: "/eu/de/privacy.html",
        es: "/eu/es/privacy.html",
      },
      terms: {
        en: "/eu/terms.html",
        fr: "/eu/fr/terms.html",
        de: "/eu/de/terms.html",
        es: "/eu/es/terms.html",
      },
    },
  };

  const copy = {
    ko: { region: "적용 지역", language: "문서 언어" },
    ja: { region: "適用地域", language: "文書の言語" },
    fr: { region: "Région applicable", language: "Langue du document" },
    de: { region: "Geltungsregion", language: "Dokumentsprache" },
    es: { region: "Región aplicable", language: "Idioma del documento" },
    en: { region: "Applicable region", language: "Document language" },
  };
  const regionNames = {
    kr: "South Korea / 한국",
    jp: "Japan / 日本",
    us: "United States",
    eu: "EU/EEA",
  };
  const languageNames = {
    ko: "Korean / 한국어",
    en: "English",
    ja: "Japanese / 日本語",
    fr: "French / Français",
    de: "German / Deutsch",
    es: "Spanish / Español",
  };

  const root = document.documentElement;
  const initialRegion = root.dataset.legalRegion;
  const initialDocument = root.dataset.legalDocument;
  if (!initialRegion || !initialDocument || !routes[initialRegion]) return;

  // Resolve the legal document language before the site-wide i18n initializes.
  // A language encoded in the route wins, then an explicit URL language, then
  // the last legal-document selection, and finally the region's default.
  function resolveDocumentLanguage() {
    const available = routes[initialRegion].languages;
    const declared = root.dataset.legalLang;
    if (available.includes(declared)) return declared;

    let requested = null;
    let saved = null;
    try {
      requested = new URLSearchParams(window.location.search).get("lang");
      saved = localStorage.getItem(LEGAL_LANGUAGE_KEY);
    } catch (_) {
      // URL and storage preferences are optional; the regional default remains.
    }
    if (available.includes(requested)) return requested;
    if (available.includes(saved)) return saved;
    if (available.includes(root.lang)) return root.lang;
    return available[0];
  }

  root.dataset.legalLang = resolveDocumentLanguage();
  try {
    localStorage.setItem(LEGAL_LANGUAGE_KEY, root.dataset.legalLang);
  } catch (_) {
    // The selected language still applies for this visit when storage is unavailable.
  }

  function currentLanguage() {
    return root.dataset.legalLang;
  }

  function navigate(region, language) {
    const documentRoutes = routes[region] && routes[region][initialDocument];
    if (!documentRoutes) return;
    const target = documentRoutes[language] || documentRoutes[routes[region].languages[0]];
    if (target) window.location.assign(target);
  }

  function bestLanguage(region, preferred) {
    if (routes[region].languages.includes(preferred)) return preferred;
    if (region === "kr" || region === "us" || region === "eu") return "en";
    return routes[region].languages[0];
  }

  function saveSelection(region, language) {
    try {
      localStorage.setItem(LEGAL_REGION_KEY, region);
      localStorage.setItem(LEGAL_LANGUAGE_KEY, language);
    } catch (_) {
      // Selection still works for this visit when storage is unavailable.
    }
  }

  function initialize() {
    const wrap = document.querySelector(".legal__wrap");
    const heading = wrap && wrap.querySelector("h1");
    if (!wrap || !heading || wrap.querySelector("[data-legal-jurisdiction]")) return;

    const siteLanguagePicker = document.querySelector(".language-picker");
    if (siteLanguagePicker) siteLanguagePicker.hidden = true;

    const language = currentLanguage();
    const labels = copy[language] || copy.en;
    const panel = document.createElement("div");
    panel.className = "legal-jurisdiction";
    panel.dataset.legalJurisdiction = "";
    panel.innerHTML =
      `<label><span>${labels.region}</span><span class="legal__select-wrap"><select class="legal__select" data-legal-region-select aria-label="${labels.region}"></select></span></label>` +
      `<label><span>${labels.language}</span><span class="legal__select-wrap"><select class="legal__select" data-legal-language-select aria-label="${labels.language}"></select></span></label>`;
    heading.insertAdjacentElement("afterend", panel);

    const regionSelect = panel.querySelector("[data-legal-region-select]");
    const languageSelect = panel.querySelector("[data-legal-language-select]");
    regionSelect.innerHTML = ["kr", "jp", "us", "eu"]
      .map((region) => `<option value="${region}">${regionNames[region]}</option>`)
      .join("");
    regionSelect.value = initialRegion;

    function renderLanguages(region, selectedLanguage) {
      languageSelect.innerHTML = routes[region].languages
        .map((value) => `<option value="${value}">${languageNames[value]}</option>`)
        .join("");
      languageSelect.value = bestLanguage(region, selectedLanguage);
      languageSelect.disabled = routes[region].languages.length === 1;
    }

    renderLanguages(initialRegion, language);
    regionSelect.addEventListener("change", function () {
      const region = regionSelect.value;
      renderLanguages(region, language);
      saveSelection(region, languageSelect.value);
      navigate(region, languageSelect.value);
    });
    languageSelect.addEventListener("change", function () {
      saveSelection(regionSelect.value, languageSelect.value);
      navigate(regionSelect.value, languageSelect.value);
    });
  }

  document.addEventListener("DOMContentLoaded", initialize);
  window.addEventListener("somewhere:langchange", function () {
    const existing = document.querySelector("[data-legal-jurisdiction]");
    if (existing) existing.remove();
    initialize();
  });
})();
