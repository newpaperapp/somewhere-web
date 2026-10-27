/* ============================================================
   Somewhere - shared legal document loader
   Loads immutable date-based HTML fragments into privacy/terms pages.
   A version id is its effective date. The newest version whose date has
   arrived in Korea is current; later versions are shown as upcoming.
   ============================================================ */
(function () {
  const DEFAULT_LABELS = {
    ko: {
      eff: "시행일",
      versions: "버전",
      current: " (현재)",
      upcoming: " (시행 예정)",
      upcomingNotice: "{date}부터 개정된 문서가 적용돼요",
      previewUpcoming: "미리 보기",
      viewingUpcoming: "{date}부터 적용될 문서예요",
      viewCurrent: "현재 문서 보기",
    },
    en: {
      eff: "Effective date",
      versions: "Version",
      current: " (current)",
      upcoming: " (upcoming)",
      upcomingNotice: "A revised version takes effect on {date}",
      previewUpcoming: "Preview",
      viewingUpcoming: "This version takes effect on {date}",
      viewCurrent: "View current version",
    },
    ja: {
      eff: "制定・施行日",
      versions: "版",
      current: "（現行）",
      upcoming: "（施行予定）",
      upcomingNotice: "{date}から改定版が適用されます",
      previewUpcoming: "改定版を見る",
      viewingUpcoming: "{date}から適用される版です",
      viewCurrent: "現行版を見る",
    },
    fr: {
      eff: "Date d’effet",
      versions: "Version",
      current: " (en vigueur)",
      upcoming: " (à venir)",
      upcomingNotice: "Une version révisée s’appliquera à compter du {date}",
      previewUpcoming: "Aperçu",
      viewingUpcoming: "Cette version s’appliquera à compter du {date}",
      viewCurrent: "Voir la version en vigueur",
    },
    de: {
      eff: "Gültig ab",
      versions: "Fassung",
      current: " (aktuell)",
      upcoming: " (künftig)",
      upcomingNotice: "Eine überarbeitete Fassung gilt ab dem {date}",
      previewUpcoming: "Vorschau",
      viewingUpcoming: "Diese Fassung gilt ab dem {date}",
      viewCurrent: "Aktuelle Fassung anzeigen",
    },
    es: {
      eff: "Fecha de entrada en vigor",
      versions: "Versión",
      current: " (vigente)",
      upcoming: " (próxima)",
      upcomingNotice: "Una versión revisada entrará en vigor el {date}",
      previewUpcoming: "Ver",
      viewingUpcoming: "Esta versión entrará en vigor el {date}",
      viewCurrent: "Ver la versión vigente",
    },
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Effective dates are Korean calendar days, matching the documents' own wording.
  function todayInSeoul() {
    try {
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date());
    } catch (_) {
      return new Date().toISOString().slice(0, 10);
    }
  }

  function init(config) {
    // Newest first, so the first version whose date has arrived is current.
    const versions = (config.versions || []).slice().sort((a, b) => (a.id < b.id ? 1 : -1));
    const cache = new Map();
    let selectedId = null;
    let renderSeq = 0;

    // Single-language regional documents fix their language; Korea switches between Korean and English.
    function currentLang() {
      if (config.lang) return config.lang;
      return document.documentElement.lang === "ko" ? "ko" : "en";
    }

    function labelsFor(lang) {
      return Object.assign({}, DEFAULT_LABELS[lang] || DEFAULT_LABELS.en, (config.labels || {})[lang]);
    }

    function currentOf(available, today) {
      return available.find((v) => v.id <= today) || available[available.length - 1];
    }

    try {
      const requested = new URLSearchParams(window.location.search).get("version");
      if (versions.some((v) => v.id === requested)) selectedId = requested;
    } catch (_) {
      // Ignore malformed URLs; the current version remains selected.
    }

    async function loadHtml(version) {
      if (cache.has(version.path)) return cache.get(version.path);
      const response = await fetch(version.path, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error(`Failed to load ${version.path}: ${response.status}`);
      }
      const html = await response.text();
      cache.set(version.path, html);
      return html;
    }

    function updateUrl(version, current) {
      if (!window.history || !window.history.replaceState) return;
      try {
        const url = new URL(window.location.href);
        if (version.id === current.id) {
          url.searchParams.delete("version");
        } else {
          url.searchParams.set("version", version.id);
        }
        window.history.replaceState(null, "", url);
      } catch (_) {
        // URL updates are nice to have, not required for reading the document.
      }
    }

    function setText(wrap, selector, value) {
      const el = wrap.querySelector(selector);
      if (el) el.textContent = value;
    }

    function renderError(content, lang) {
      const message =
        lang === "ko"
          ? "문서를 불러오지 못했어요. 페이지를 새로고침하거나 잠시 후 다시 시도해 주세요."
          : "Could not load this document. Please refresh the page or try again later.";
      content.innerHTML = `<div class="policy"><p class="muted">${escapeHtml(message)}</p></div>`;
      content.hidden = false;
    }

    // Announces a version that is not yet in force and switches between it and the current one.
    function renderUpcoming(wrap, t, label, upcoming, selected, current) {
      let notice = wrap.querySelector("[data-legal-upcoming]");
      if (!upcoming) {
        if (notice) notice.hidden = true;
        return;
      }
      if (!notice) {
        notice = document.createElement("p");
        notice.className = "legal__upcoming";
        notice.setAttribute("data-legal-upcoming", "");
        notice.innerHTML = '<span></span><button type="button" class="legal__upcoming-action"></button>';
        const head = wrap.querySelector(".legal__head");
        if (head) head.insertAdjacentElement("afterend", notice);
        else wrap.prepend(notice);
      }
      const viewing = selected.id === upcoming.id;
      notice.querySelector("span").textContent = (viewing ? t.viewingUpcoming : t.upcomingNotice).replace(
        "{date}",
        label(upcoming)
      );
      const action = notice.querySelector("button");
      action.textContent = viewing ? t.viewCurrent : t.previewUpcoming;
      action.onclick = function () {
        selectedId = viewing ? current.id : upcoming.id;
        render();
      };
      notice.hidden = false;
    }

    async function render() {
      const wrap = document.querySelector(".legal__wrap");
      if (!wrap || !versions.length) return;

      const select = wrap.querySelector(`#${config.selectId}`);
      const content = wrap.querySelector("[data-legal-content]");
      const loading = wrap.querySelector("[data-legal-loading]");
      if (!select || !content) return;

      const lang = currentLang();
      const t = labelsFor(lang);
      const label = (v) => v[lang] || v.en;
      const sectionSelector = config.lang ? ".policy" : ".policy[data-lang]";
      const available = versions.filter((v) => (v.langs || [lang]).includes(lang));
      if (!available.length) return;
      const today = todayInSeoul();
      const current = currentOf(available, today);
      // The nearest version still to come; later drafts are unusual but stay listed.
      const upcoming = available.filter((v) => v.id > today).pop();
      // Without an explicit choice the page follows the current version, even across midnight.
      const selected = available.find((v) => v.id === selectedId) || current;
      const suffix = (v) => (v.id === current.id ? t.current : v.id > today ? t.upcoming : "");

      // Finder opens pages with the file: protocol, where browsers commonly block
      // fetch() of local fragments. Keep the embedded document readable there;
      // date-based history remains available when served over HTTP.
      const staticSections = content.querySelectorAll(sectionSelector);
      if (window.location.protocol === "file:" && staticSections.length) {
        const embedded = available.find((v) => v.id === content.dataset.legalEmbedded) || current;
        select.innerHTML = `<option value="${escapeHtml(embedded.id)}">${escapeHtml(label(embedded) + suffix(embedded))}</option>`;
        select.value = embedded.id;
        select.disabled = true;
        const versionsControl = select.closest(".legal__versions");
        if (versionsControl) versionsControl.hidden = true;
        setText(wrap, "[data-eff-label]", t.eff || "");
        setText(wrap, "[data-eff-date]", label(embedded) + (embedded.id > today ? t.upcoming : ""));
        if (!config.lang) {
          staticSections.forEach((section) => {
            section.hidden = section.dataset.lang !== lang;
          });
        }
        content.hidden = false;
        if (loading) loading.hidden = true;
        window.dispatchEvent(new CustomEvent("somewhere:contentloaded"));
        return;
      }

      const seq = ++renderSeq;

      select.disabled = false;
      const versionsControl = select.closest(".legal__versions");
      if (versionsControl) versionsControl.hidden = false;
      select.innerHTML = available
        .map((v) => `<option value="${escapeHtml(v.id)}">${escapeHtml(label(v) + suffix(v))}</option>`)
        .join("");
      select.value = selected.id;
      select.onchange = function () {
        selectedId = select.value;
        render();
      };

      setText(wrap, "[data-eff-label]", t.eff || "");
      setText(wrap, "[data-eff-date]", label(selected) + (selected.id > today ? t.upcoming : ""));
      setText(wrap, "[data-versions-label]", t.versions || "");
      renderUpcoming(wrap, t, label, upcoming, selected, current);
      updateUrl(selected, current);

      if (loading) loading.hidden = false;
      content.hidden = true;

      try {
        const html = await loadHtml(selected);
        if (seq !== renderSeq) return;
        content.innerHTML = html;
        if (!config.lang) {
          content.querySelectorAll(sectionSelector).forEach((section) => {
            section.hidden = section.dataset.lang !== lang;
          });
        }
        const body = config.lang ? ".policy" : `.policy[data-lang="${lang}"]`;
        if (!content.querySelector(body)) {
          throw new Error(`Missing ${lang} body in ${selected.path}`);
        }
        content.hidden = false;
        if (loading) loading.hidden = true;
        window.dispatchEvent(new CustomEvent("somewhere:contentloaded"));
      } catch (error) {
        if (seq !== renderSeq) return;
        if (loading) loading.hidden = true;
        renderError(content, lang);
        // Keep the failure visible for developers without interrupting users.
        console.error(error);
      }
    }

    window.addEventListener("somewhere:langchange", render);
    document.addEventListener("DOMContentLoaded", render);
  }

  window.SomewhereLegalDoc = { init };
})();
