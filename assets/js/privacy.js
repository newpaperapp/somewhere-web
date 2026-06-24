/* ============================================================
   Somewhere - privacy page versions
   Each date is stored in assets/legal/privacy/YYYY-MM-DD.html.
   ============================================================ */
(function () {
  if (!window.SomewhereLegalDoc) return;

  window.SomewhereLegalDoc.init({
    selectId: "policy-version",
    labels: {
      ko: { eff: "시행일", versions: "지난 개인정보처리방침", current: " (현재)" },
      en: { eff: "Effective", versions: "Previous policy", current: " (current)" },
    },
    versions: [
      {
        id: "2026-06-24",
        ko: "2026년 6월 24일",
        en: "June 24, 2026",
        path: "assets/legal/privacy/2026-06-24.html",
        langs: ["ko", "en"],
        current: true,
      },
      {
        id: "2026-06-15",
        ko: "2026년 6월 15일",
        en: "June 15, 2026",
        path: "assets/legal/privacy/2026-06-15.html",
        langs: ["ko", "en"],
      },
      {
        id: "2024-10-23",
        ko: "2024년 10월 23일",
        en: "October 23, 2024",
        path: "assets/legal/privacy/2024-10-23.html",
        langs: ["ko"],
      },
      {
        id: "2023-10-21",
        ko: "2023년 10월 21일",
        en: "October 21, 2023",
        path: "assets/legal/privacy/2023-10-21.html",
        langs: ["ko", "en"],
      },
    ],
  });
})();
