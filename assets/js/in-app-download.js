/* ============================================================
   Somewhere — Meta in-app browser store-download helper

   Meta's iOS in-app browsers can swallow App Store navigations.
   Keep store CTAs as ordinary anchors everywhere else; only intercept
   a real user click inside Instagram/Threads/Facebook/Messenger.
   ============================================================ */
(function () {
  const ESCAPE_TIMEOUT_MS = 1500;
  let fallbackModal = null;

  function userAgent() {
    return navigator.userAgent || navigator.vendor || "";
  }

  function isIOS(ua) {
    const value = ua || userAgent();
    return (
      /iPad|iPhone|iPod/i.test(value) ||
      (/Macintosh/i.test(value) && navigator.maxTouchPoints > 1)
    );
  }

  function isAndroid(ua) {
    return /Android/i.test(ua || userAgent());
  }

  function isInstagram(ua) {
    return /Instagram|Threads/i.test(ua || userAgent());
  }

  function isFacebook(ua) {
    return /FBAN|FBAV|FB_IAB|Messenger/i.test(ua || userAgent());
  }

  function isInAppBrowser(ua) {
    return isInstagram(ua) || isFacebook(ua);
  }

  function getStoreUrl(store) {
    const cfg = window.SOMEWHERE || {};
    return store === "ios" ? cfg.APP_STORE_URL : cfg.PLAY_STORE_URL;
  }

  function getAndroidIntentUrl(url) {
    return "intent://" + url.replace(/^https?:\/\//i, "") + "#Intent;scheme=https;end";
  }

  function getEscapeUrl(url) {
    if (isInstagram() && isIOS()) {
      return "instagram://extbrowser/?url=" + encodeURIComponent(url);
    }
    if (isFacebook() && isIOS()) {
      return "x-safari-" + url;
    }
    if (isAndroid()) {
      return getAndroidIntentUrl(url);
    }
    return url;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied ? Promise.resolve() : Promise.reject(new Error("Copy failed"));
  }

  function localizedText() {
    const korean = (window.__lang || document.documentElement.lang || "ko") === "ko";
    return korean
      ? {
          title: "스토어를 열지 못했어요",
          description: "기본 브라우저에서 다시 열어 보세요.",
          retry: "기본 브라우저에서 열기",
          steps: "•••을 누른 다음 ‘브라우저에서 열기’를 선택하세요.",
          copy: "스토어 링크 복사",
          copied: "링크를 복사했어요.",
          copyFailed: "링크 복사에 실패했어요.",
          close: "닫기",
        }
      : {
          title: "Couldn't open the App Store",
          description: "Try opening it in your native browser instead.",
          retry: "Open in my native browser",
          steps: "Tap ••• → Open in browser in Instagram or Facebook.",
          copy: "Copy store link",
          copied: "Store link copied.",
          copyFailed: "Couldn't copy the store link.",
          close: "Close",
        };
  }

  function createFallbackModal() {
    const modal = document.createElement("div");
    modal.className = "in-app-download-modal";
    modal.hidden = true;
    modal.innerHTML =
      '<div class="in-app-download-modal__backdrop" data-in-app-close></div>' +
      '<section class="in-app-download-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="in-app-download-modal-title">' +
      '  <button class="in-app-download-modal__close" type="button" data-in-app-close></button>' +
      '  <h2 id="in-app-download-modal-title"></h2>' +
      '  <p class="in-app-download-modal__description"></p>' +
      '  <button class="in-app-download-modal__retry" type="button"></button>' +
      '  <p class="in-app-download-modal__steps"></p>' +
      '  <button class="in-app-download-modal__copy" type="button"></button>' +
      '  <p class="in-app-download-modal__status" aria-live="polite"></p>' +
      "</section>";
    document.body.appendChild(modal);

    modal.querySelectorAll("[data-in-app-close]").forEach(function (button) {
      button.addEventListener("click", hideFallbackModal);
    });
    modal.addEventListener("keydown", function (event) {
      if (event.key === "Escape") hideFallbackModal();
    });
    return modal;
  }

  function hideFallbackModal() {
    if (!fallbackModal) return;
    fallbackModal.hidden = true;
  }

  function showFallbackModal(url) {
    fallbackModal = fallbackModal || createFallbackModal();
    const text = localizedText();
    const title = fallbackModal.querySelector("h2");
    const description = fallbackModal.querySelector(".in-app-download-modal__description");
    const retry = fallbackModal.querySelector(".in-app-download-modal__retry");
    const steps = fallbackModal.querySelector(".in-app-download-modal__steps");
    const copy = fallbackModal.querySelector(".in-app-download-modal__copy");
    const close = fallbackModal.querySelector(".in-app-download-modal__close");
    const status = fallbackModal.querySelector(".in-app-download-modal__status");

    title.textContent = text.title;
    description.textContent = text.description;
    retry.textContent = text.retry;
    steps.textContent = text.steps;
    copy.textContent = text.copy;
    close.setAttribute("aria-label", text.close);
    status.textContent = "";

    retry.onclick = function () {
      hideFallbackModal();
      escapeStoreUrl(url);
    };
    copy.onclick = function () {
      copyText(url).then(
        function () {
          status.textContent = text.copied;
        },
        function () {
          status.textContent = text.copyFailed;
        }
      );
    };

    fallbackModal.hidden = false;
    retry.focus();
  }

  function watchForEscape(url) {
    let settled = false;
    let timeoutId = null;

    function cleanup() {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pagehide", onSuccess);
      window.removeEventListener("blur", onSuccess);
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    }

    function onSuccess() {
      if (settled) return;
      settled = true;
      cleanup();
    }

    function onVisibilityChange() {
      if (document.visibilityState === "hidden") onSuccess();
    }

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pagehide", onSuccess, { once: true });
    window.addEventListener("blur", onSuccess, { once: true });
    timeoutId = window.setTimeout(function () {
      if (settled) return;
      settled = true;
      cleanup();
      showFallbackModal(url);
    }, ESCAPE_TIMEOUT_MS);
  }

  // This function must remain synchronous: Meta WebViews drop scheme launches
  // that happen after a timeout, promise, or any other asynchronous boundary.
  function escapeStoreUrl(url) {
    watchForEscape(url);

    if (isInstagram() && isIOS()) {
      window.location.href = "instagram://extbrowser/?url=" + encodeURIComponent(url);
      return;
    }

    if (isFacebook() && isIOS()) {
      const opened = window.open("x-safari-" + url, "_blank");
      if (opened) opened.opener = null;
      return;
    }

    if (isAndroid()) {
      window.location.href = getAndroidIntentUrl(url);
      return;
    }

    window.location.href = url;
  }

  function wireDownloadLinks(root) {
    const scope = root || document;
    scope.querySelectorAll("[data-store='ios'], [data-store='android']").forEach(function (anchor) {
      const store = anchor.getAttribute("data-store");
      const url = getStoreUrl(store);
      if (!url) return;

      // Preserve a normal, copyable App Store / Google Play anchor for every
      // browser that is not a Meta in-app browser.
      anchor.href = url;

      if (!isInAppBrowser() || anchor.dataset.inAppDownloadBound) return;
      anchor.dataset.inAppDownloadBound = "true";
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        // Do not defer this call: the native scheme must run in this click.
        escapeStoreUrl(url);
      });
    });
  }

  window.SomewhereInAppDownload = {
    isIOS: isIOS,
    isAndroid: isAndroid,
    isInstagram: isInstagram,
    isFacebook: isFacebook,
    isInAppBrowser: isInAppBrowser,
    getStoreUrl: getStoreUrl,
    getEscapeUrl: getEscapeUrl,
    wireDownloadLinks: wireDownloadLinks,
    escapeStoreUrl: escapeStoreUrl,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      wireDownloadLinks();
    });
  } else {
    wireDownloadLinks();
  }

  window.addEventListener("somewhere:contentloaded", function () {
    wireDownloadLinks();
  });
})();
