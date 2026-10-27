/* Notices list (/notices/) and notice pages (/notices/<id>/).
   The build renders every language of a notice; show the reader's, or English. */
(function () {
  // A link from the app carries ?lang=; keep it on links between the notices pages.
  const fromApp = new URLSearchParams(window.location.search).has("lang");

  function showLang(lang) {
    document.querySelectorAll("[data-notice]").forEach((notice) => {
      const shown = notice.querySelector(`[data-lang="${lang}"]`) ? lang : "en";
      notice.querySelectorAll("[data-lang]").forEach((el) => {
        el.hidden = el.dataset.lang !== shown;
      });
    });
    if (fromApp) {
      document.querySelectorAll("a[data-notices-link]").forEach((link) => {
        link.search = `?lang=${encodeURIComponent(lang)}`;
      });
    }
    const title = document.querySelector("h1 [data-lang]:not([hidden])");
    document.title = `${title ? title.textContent : window.SomewhereI18N.get("notices.title", lang)} — Somewhere`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.SomewhereI18N) return;
    window.addEventListener("somewhere:langchange", (event) => showLang(event.detail));
    window.applyAppLang();
    showLang(window.__lang || "en");
  });
})();
