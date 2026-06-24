/* ============================================================
   Somewhere - shared legal document loader
   Loads immutable date-based HTML fragments into privacy/terms pages.
   ============================================================ */
(function () {
  function currentLang() {
    return document.documentElement.lang === "en" ? "en" : "ko";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function init(config) {
    const versions = config.versions || [];
    const currentVersion = versions.find((v) => v.current) || versions[0];
    const labels = config.labels || {};
    const cache = new Map();
    let selectedId = currentVersion && currentVersion.id;
    let renderSeq = 0;

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

    function updateUrl(version) {
      if (!window.history || !window.history.replaceState) return;
      try {
        const url = new URL(window.location.href);
        if (version.current) {
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
        lang === "en"
          ? "Could not load this document. Please refresh the page or try again later."
          : "문서를 불러오지 못했습니다. 페이지를 새로고침하거나 잠시 후 다시 시도해 주세요.";
      content.innerHTML = `<div class="policy"><p class="muted">${escapeHtml(message)}</p></div>`;
      content.hidden = false;
    }

    async function render() {
      const wrap = document.querySelector(".legal__wrap");
      if (!wrap || !currentVersion) return;

      const select = wrap.querySelector(`#${config.selectId}`);
      const content = wrap.querySelector("[data-legal-content]");
      const loading = wrap.querySelector("[data-legal-loading]");
      if (!select || !content) return;

      const lang = currentLang();
      const t = labels[lang] || labels.ko || {};
      const available = versions.filter((v) => v.langs.includes(lang));
      if (!available.some((v) => v.id === selectedId)) selectedId = currentVersion.id;
      const selected = available.find((v) => v.id === selectedId) || currentVersion;
      const seq = ++renderSeq;

      select.innerHTML = available
        .map((v) => {
          const label = (lang === "en" ? v.en : v.ko) + (v.current ? t.current : "");
          return `<option value="${escapeHtml(v.id)}">${escapeHtml(label)}</option>`;
        })
        .join("");
      select.value = selected.id;
      select.onchange = function () {
        selectedId = select.value;
        render();
      };

      setText(wrap, "[data-eff-label]", t.eff || "");
      setText(wrap, "[data-eff-date]", lang === "en" ? selected.en : selected.ko);
      setText(wrap, "[data-versions-label]", t.versions || "");
      updateUrl(selected);

      if (loading) loading.hidden = false;
      content.hidden = true;

      try {
        const html = await loadHtml(selected);
        if (seq !== renderSeq) return;
        content.innerHTML = html;
        const sections = content.querySelectorAll(".policy[data-lang]");
        sections.forEach((section) => {
          section.hidden = section.dataset.lang !== lang;
        });
        if (!content.querySelector(`.policy[data-lang="${lang}"]`)) {
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
