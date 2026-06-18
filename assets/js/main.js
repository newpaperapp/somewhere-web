/* ============================================================
   Somewhere — page behaviour: theme, language, store links, reveal
   ============================================================ */
(function () {
  const THEME_KEY = "somewhere-theme";

  /* ---- Theme (light / dark) ---------------------------------------------- */
  function currentTheme() {
    return (
      localStorage.getItem(THEME_KEY) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#1a1a1a" : "#f5f5f5");
    document.querySelectorAll("[data-theme-icon]").forEach((el) => {
      el.querySelector(".ico-sun").classList.toggle("hidden", theme === "light");
      el.querySelector(".ico-moon").classList.toggle("hidden", theme === "dark");
    });
  }

  /* ---- Store links ------------------------------------------------------- */
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  function wireStoreLinks() {
    const cfg = window.SOMEWHERE || {};
    document.querySelectorAll("[data-store='ios']").forEach((a) => {
      a.href = cfg.APP_STORE_URL;
    });
    document.querySelectorAll("[data-store='android']").forEach((a) => {
      a.href = cfg.PLAY_STORE_URL;
    });
    document.querySelectorAll("[data-contact-email]").forEach((el) => {
      if (!el.textContent.trim()) el.textContent = cfg.CONTACT_EMAIL;
      el.removeAttribute("role");
      el.removeAttribute("tabindex");
      // don't double-inject the copy button
      if (
        el.nextElementSibling &&
        el.nextElementSibling.classList.contains("copy-btn")
      ) {
        return;
      }

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "copy-btn";
      btn.setAttribute(
        "aria-label",
        document.documentElement.lang === "ko"
          ? "이메일 주소 복사"
          : "Copy email address"
      );
      btn.innerHTML =
        '<span class="material-symbols-rounded" aria-hidden="true">content_copy</span>';
      el.insertAdjacentElement("afterend", btn);

      btn.addEventListener("click", async function () {
        const icon = btn.querySelector(".material-symbols-rounded");
        const email = el.textContent.trim() || cfg.CONTACT_EMAIL;
        try {
          await copyText(email);
          icon.textContent = "check";
          btn.classList.add("is-copied");
          window.setTimeout(function () {
            icon.textContent = "content_copy";
            btn.classList.remove("is-copied");
          }, 1200);
        } catch (_) {
          window.prompt(btn.getAttribute("aria-label"), cfg.CONTACT_EMAIL);
        }
      });
    });
    document.querySelectorAll("[data-developer]").forEach((el) => {
      el.textContent = cfg.DEVELOPER;
    });
  }

  /* ---- QR codes ---------------------------------------------------------- */
  // Renders a QR for any [data-qr] element. The value is resolved against the
  // current location, so the code always points at this deployment (works on
  // localhost, github.io, or a custom domain) and the linked page branches by OS.
  function wireQRCodes() {
    if (typeof qrcode !== "function") return;
    document.querySelectorAll("[data-qr]").forEach((el) => {
      if (el.dataset.qrDone) return;
      const target = el.getAttribute("data-qr");
      if (!target) return;
      let url;
      try {
        url = new URL(target, window.location.href).href;
      } catch (_) {
        url = target;
      }
      const qr = qrcode(0, "M");
      qr.addData(url);
      qr.make();
      el.innerHTML = qr.createSvgTag({ cellSize: 4, scalable: true });
      el.dataset.qrDone = "1";
    });
  }

  /* ---- Nav reveal (home page only: hidden at top, shows after scroll) ----- */
  function wireNavReveal() {
    // Other pages keep the nav always visible (sticky); only the home page hides it.
    if (!document.body.classList.contains("is-home")) return;
    const nav = document.querySelector(".nav");
    if (!nav) return;
    const THRESHOLD = 80;
    function update() {
      nav.classList.toggle("nav--visible", window.scrollY > THRESHOLD);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---- Scroll reveal ----------------------------------------------------- */
  function wireReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---- Init -------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(currentTheme());

    if (window.SomewhereI18N) {
      window.SomewhereI18N.applyLang(window.SomewhereI18N.detectLang());
    }

    wireStoreLinks();
    wireQRCodes();
    wireNavReveal();
    wireReveal();

    document.querySelectorAll("[data-action='toggle-lang']").forEach((btn) => {
      btn.addEventListener("click", function () {
        if (window.SomewhereI18N) window.SomewhereI18N.toggleLang();
      });
    });

    document.querySelectorAll("[data-action='toggle-theme']").forEach((btn) => {
      btn.addEventListener("click", function () {
        applyTheme(
          document.documentElement.getAttribute("data-theme") === "dark"
            ? "light"
            : "dark"
        );
      });
    });
  });
})();
