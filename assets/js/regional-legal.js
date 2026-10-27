/* ============================================================
   Somewhere - regional legal document versions
   Each date is stored in assets/legal/<region>/<lang>/<document>/YYYY-MM-DD.html.
   The id is the effective date; legal-doc.js picks the current version from it.
   ============================================================ */
(function () {
  if (!window.SomewhereLegalDoc) return;

  const VERSIONS = {
    "us/en/privacy": ["2026-10-28", "2026-10-16", "2026-09-28"],
    "us/en/terms": ["2026-09-28"],
    "eu/en/privacy": ["2026-10-28", "2026-10-16", "2026-09-28"],
    "eu/en/terms": ["2026-09-28"],
    "eu/fr/privacy": ["2026-10-28", "2026-10-16", "2026-09-28"],
    "eu/fr/terms": ["2026-09-28"],
    "eu/de/privacy": ["2026-10-28", "2026-10-16", "2026-09-28"],
    "eu/de/terms": ["2026-09-28"],
    "eu/es/privacy": ["2026-10-28", "2026-10-16", "2026-09-28"],
    "eu/es/terms": ["2026-09-28"],
    "jp/ja/privacy": ["2026-10-28", "2026-10-16", "2026-09-28"],
    "jp/ja/terms": ["2026-09-28"],
  };

  const MONTHS = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    fr: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  };

  // Matches the date wording already used in each regional document.
  function formatDate(id, lang) {
    const [year, month, day] = id.split("-").map(Number);
    if (lang === "ja") return `${year}年${month}月${day}日`;
    const name = MONTHS[lang][month - 1];
    if (lang === "fr") return `${day === 1 ? "1er" : day} ${name} ${year}`;
    if (lang === "de") return `${day}. ${name} ${year}`;
    if (lang === "es") return `${day} de ${name} de ${year}`;
    return `${name} ${day}, ${year}`;
  }

  const root = document.documentElement;
  const lang = root.dataset.legalLang;
  const key = `${root.dataset.legalRegion}/${lang}/${root.dataset.legalDocument}`;
  const ids = VERSIONS[key];
  if (!ids) return;

  window.SomewhereLegalDoc.init({
    selectId: "legal-version",
    lang,
    versions: ids.map((id) => ({
      id,
      [lang]: formatDate(id, lang),
      path: `/assets/legal/${key}/${id}.html`,
      langs: [lang],
    })),
  });
})();
