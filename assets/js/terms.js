/* ============================================================
   Somewhere — terms page version picker
   - Shows one terms version at a time (current + past).
   - The date dropdown (right of the effective date) switches versions.
   - Available versions differ per language; selection falls back to
     "current" when the chosen date has no version in the active language.
   - Reacts to language changes dispatched by assets/js/i18n.js.

   To add a past version later (when these terms are revised):
     1. Add an entry to VERSIONS below (keep it newest-first), e.g.
        { id: "20260624", ko: "2026년 6월 24일", en: "June 24, 2026", langs: ["ko", "en"] }
        and drop `current: true` from the entry that is no longer current.
     2. Add matching bodies in terms.html:
        <div class="policy" data-version="20260624" data-lang="ko" hidden> … </div>
        <div class="policy" data-version="20260624" data-lang="en" hidden> … </div>
   ============================================================ */
(function () {
  // Newest first. `langs` lists which languages have this version.
  const VERSIONS = [
    { id: "current", ko: "2026년 6월 24일", en: "June 24, 2026", langs: ["ko", "en"], current: true },
  ];

  const TXT = {
    ko: { eff: "시행일", versions: "지난 이용약관", current: " (현재)" },
    en: { eff: "Effective", versions: "Previous terms", current: " (current)" },
  };

  let selectedId = "current";

  function render() {
    const wrap = document.querySelector(".legal__wrap");
    if (!wrap) return;
    const select = wrap.querySelector("#terms-version");
    if (!select) return;

    const lang = document.documentElement.lang === "en" ? "en" : "ko";
    const t = TXT[lang];
    const available = VERSIONS.filter((v) => v.langs.includes(lang));
    if (!available.some((v) => v.id === selectedId)) selectedId = "current";

    // (re)build the date options for the active language
    select.innerHTML = available
      .map((v) => {
        const label = (lang === "en" ? v.en : v.ko) + (v.current ? t.current : "");
        return `<option value="${v.id}">${label}</option>`;
      })
      .join("");
    select.value = selectedId;
    select.onchange = function () {
      selectedId = select.value;
      render();
    };

    // show only the matching (language + version) terms body
    wrap.querySelectorAll(".policy").forEach((el) => {
      el.hidden = !(el.dataset.lang === lang && el.dataset.version === selectedId);
    });

    // labels + effective date for the active selection
    const cur = available.find((v) => v.id === selectedId) || available[0];
    const setText = (sel, value) => {
      const el = wrap.querySelector(sel);
      if (el) el.textContent = value;
    };
    setText("[data-eff-label]", t.eff);
    setText("[data-eff-date]", lang === "en" ? cur.en : cur.ko);
    setText("[data-versions-label]", t.versions);
  }

  // language toggle fires this (see assets/js/i18n.js)
  window.addEventListener("somewhere:langchange", render);
  document.addEventListener("DOMContentLoaded", render);
})();
