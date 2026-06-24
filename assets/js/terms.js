/* ============================================================
   Somewhere - terms page versions
   Each date is stored in assets/legal/terms/YYYY-MM-DD.html.
   ============================================================ */
(function () {
  if (!window.SomewhereLegalDoc) return;

  window.SomewhereLegalDoc.init({
    selectId: "terms-version",
    labels: {
      ko: { eff: "시행일", versions: "지난 이용약관", current: " (현재)" },
      en: { eff: "Effective", versions: "Previous terms", current: " (current)" },
    },
    versions: [
      {
        id: "2026-06-24",
        ko: "2026년 6월 24일",
        en: "June 24, 2026",
        path: "assets/legal/terms/2026-06-24.html",
        langs: ["ko", "en"],
        current: true,
      },
    ],
  });
})();
