/* Apply the language the app passes as ?lang= without changing the site's saved language.
   Shared by the pages the app opens in its in-app browser. */
(function () {
  // Android reports Chinese as a bare "zh", so the browser's own Chinese variant decides
  // between Simplified and Traditional.
  function requestedLang() {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (!param) return null;
    if (param.toLowerCase() === "zh") {
      const browserZh = (navigator.languages || []).find((lang) => /^zh/i.test(lang));
      if (browserZh) return browserZh;
    }
    return param;
  }

  // Call after main.js has applied the stored preference. applyLang() saves the language for
  // the whole site; restore the saved value so a link from the app does not change the
  // language of the site's other pages.
  window.applyAppLang = function () {
    const lang = requestedLang();
    if (!lang || !window.SomewhereI18N) return;
    let saved = null;
    try { saved = localStorage.getItem("somewhere-lang"); } catch (_) {}
    window.SomewhereI18N.applyLang(lang);
    try {
      if (saved === null) localStorage.removeItem("somewhere-lang");
      else localStorage.setItem("somewhere-lang", saved);
    } catch (_) {}
  };
})();
