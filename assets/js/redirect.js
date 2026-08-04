/* ============================================================
   Somewhere — smart store redirect
   Android  -> Google Play
   iOS      -> App Store
   Other    -> show both buttons (no auto-redirect)
   ============================================================ */
(function () {
  const cfg = window.SOMEWHERE || {};
  const helper = window.SomewhereInAppDownload;
  const ua = navigator.userAgent || navigator.vendor || "";

  const isAndroid = helper ? helper.isAndroid() : /android/i.test(ua);
  // iPadOS 13+ reports as Mac; detect touch to disambiguate.
  const isIOS = helper
    ? helper.isIOS()
    : /iPad|iPhone|iPod/.test(ua) ||
      (/Macintosh/.test(ua) && "ontouchend" in document);
  const isMetaInAppBrowser = helper ? helper.isInAppBrowser() : false;

  let target = null;
  if (isAndroid) target = cfg.PLAY_STORE_URL;
  else if (isIOS) target = cfg.APP_STORE_URL;

  if (target && !isMetaInAppBrowser) {
    // give the page a beat to paint the spinner, then go
    window.setTimeout(function () {
      window.location.replace(target);
    }, 600);
  } else {
    // Meta in-app browsers need a user-initiated tap to open the external
    // browser. Desktop / unknown platforms also keep the manual choices.
    document.addEventListener("DOMContentLoaded", function () {
      const auto = document.getElementById("auto-state");
      const manual = document.getElementById("manual-state");
      if (auto) auto.classList.add("hidden");
      if (manual) manual.classList.remove("hidden");
    });
  }
})();
