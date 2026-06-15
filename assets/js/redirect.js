/* ============================================================
   Somewhere — smart store redirect
   Android  -> Google Play
   iOS      -> App Store
   Other    -> show both buttons (no auto-redirect)
   ============================================================ */
(function () {
  const cfg = window.SOMEWHERE || {};
  const ua = navigator.userAgent || navigator.vendor || "";

  const isAndroid = /android/i.test(ua);
  // iPadOS 13+ reports as Mac; detect touch to disambiguate.
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && "ontouchend" in document);

  let target = null;
  if (isAndroid) target = cfg.PLAY_STORE_URL;
  else if (isIOS) target = cfg.APP_STORE_URL;

  if (target) {
    // give the page a beat to paint the spinner, then go
    window.setTimeout(function () {
      window.location.replace(target);
    }, 600);
  } else {
    // desktop / unknown: hide spinner, show manual choices
    document.addEventListener("DOMContentLoaded", function () {
      const auto = document.getElementById("auto-state");
      const manual = document.getElementById("manual-state");
      if (auto) auto.classList.add("hidden");
      if (manual) manual.classList.remove("hidden");
    });
  }
})();
