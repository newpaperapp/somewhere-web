/* ============================================================
   Somewhere — i18n (Korean / English)
   - Auto-detects browser language, persists choice in localStorage.
   - Applies text to any element with [data-i18n] (and a few attr variants).
   ============================================================ */

const I18N = {
  ko: {
    "lang.toggle": "English",
    "lang.name": "한국어",

    "nav.features": "기능",
    "nav.download": "다운로드",

    "hero.eyebrow": "Somewhere 여행 계획 앱",
    "hero.title.1": "Somewhere",
    "hero.title.2": "여행 계획 앱",
    "hero.lead":
      "나만의 여행 계획을 손쉽게 세워보세요. 여행 만들기부터 지도 동선 확인, 친구 초대, 대화면 최적화까지 여행 준비에 필요한 흐름을 한 곳에 모읍니다.",
    "hero.note": "App Store · Google Play 무료 다운로드",
    "hero.screen.trips": "Somewhere 여행 목록 화면",
    "hero.screen.map": "Somewhere 지도 동선 화면",

    "feature.map.kicker": "지도",
    "feature.map.title": "지도로 확인하는 여행 동선",
    "feature.map.desc":
      "가고 싶은 장소를 지도에 표시하고, 이동 동선을 한눈에 확인하세요.",
    "feature.map.alt": "태블릿에서 보는 Somewhere 여행 지도 화면",
    "feature.ai.kicker": "AI",
    "feature.ai.title": "AI 맞춤 여행 생성",
    "feature.ai.desc":
      "여행 생성 AI가 원하는 여행을 간편하게 만들어드려요.",
    "feature.ai.alt": "AI 여행 유형 선택 화면",
    "feature.together.kicker": "협업",
    "feature.together.title": "함께 만드는 여행",
    "feature.together.desc":
      "친구를 초대해 서로 아이디어를 더하고, 같이 여행을 준비하세요.",
    "feature.together.alt": "여행 친구 초대 및 권한 화면",
    "feature.large.kicker": "대화면",
    "feature.large.title": "대화면 최적화 UI",
    "feature.large.desc":
      "폴더블, 태블릿 등 큰 화면에서도 편리하게 이용해보세요.",
    "feature.large.alt": "폴더블에서 보는 Somewhere 여행 일정 화면",

    "support.eyebrow": "지원 기능",
    "support.title": "다양한 기능",
    "support.budget": "장소별 예산 입력, 총 예산 확인 기능",
    "support.theme": "라이트 / 다크 모드 지원",
    "support.account": "계정 연동 지원",
    "support.language": "한국어 / 영어 지원",
    "support.platform": "Android, iOS, iPadOS 및 macOS 지원",

    "pro.eyebrow": "구독",
    "pro.title": "Somewhere Pro 구독제",
    "pro.ads": "광고 제거",
    "pro.trips": "최대 여행수 10 → 300개",
    "pro.friends": "최대 친구 초대 수(여행 당) 5 → 50명",

    "cta.title": "지금 여행을 시작하세요",
    "cta.sub": "지금 Somewhere를 다운로드하고 첫 여행을 만들어 보세요.",
    "cta.qr": "카메라로 스캔해서 다운로드",

    "footer.developer": "개발자",
    "footer.contact": "문의",
    "footer.privacy": "개인정보처리방침",
    "footer.terms": "서비스 이용약관",
    "footer.rights": "여행 계획 앱",

    /* redirect */
    "redirect.auto.title": "스토어로 이동 중…",
    "redirect.auto.sub": "잠시만 기다려 주세요.",
    "redirect.manual.title": "Somewhere 다운로드",
    "redirect.manual.sub": "사용 중인 기기의 스토어를 선택하세요.",
    "redirect.home": "홈으로",
  },

  en: {
    "lang.toggle": "한국어",
    "lang.name": "English",

    "nav.features": "Features",
    "nav.download": "Download",

    "hero.eyebrow": "Somewhere Trip Planner App",
    "hero.title.1": "Somewhere",
    "hero.title.2": "Trip Planner App",
    "hero.lead":
      "Build your own trip without the busywork. Somewhere brings trip creation, route maps, friend invites, and large-screen layouts into one planning flow.",
    "hero.note": "Free on the App Store and Google Play",
    "hero.screen.trips": "Somewhere trips screen",
    "hero.screen.map": "Somewhere route map screen",

    "feature.map.kicker": "Map",
    "feature.map.title": "Travel routes on a map",
    "feature.map.desc":
      "Mark the places you want to visit and see your travel route at a glance.",
    "feature.map.alt": "Somewhere trip map on a tablet",
    "feature.ai.kicker": "AI",
    "feature.ai.title": "AI-generated custom trips",
    "feature.ai.desc":
      "Trip-generation AI helps you create the kind of trip you want more easily.",
    "feature.ai.alt": "AI trip type selection screen",
    "feature.together.kicker": "Together",
    "feature.together.title": "Plan trips together",
    "feature.together.desc":
      "Invite friends, collect ideas, and prepare for the trip together.",
    "feature.together.alt": "Trip mates invitation and permission screen",
    "feature.large.kicker": "Large screens",
    "feature.large.title": "Optimized for bigger displays",
    "feature.large.desc":
      "Use Somewhere comfortably on foldables, tablets, and other large screens.",
    "feature.large.alt": "Somewhere itinerary screen on a foldable device",

    "support.eyebrow": "Included",
    "support.title": "Various features",
    "support.budget": "Place-level budgets and total budget overview",
    "support.theme": "Light / dark mode support",
    "support.account": "Account linking support",
    "support.language": "Korean / English support",
    "support.platform": "Android, iOS, iPadOS and macOS support",

    "pro.eyebrow": "Subscription",
    "pro.title": "Somewhere Pro",
    "pro.ads": "Remove ads",
    "pro.trips": "Maximum trips: 10 → 300",
    "pro.friends": "Maximum invited friends per trip: 5 → 50",

    "cta.title": "Start your journey today",
    "cta.sub": "Download Somewhere and create your first trip.",
    "cta.qr": "Scan to download",

    "footer.developer": "Developer",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "Trip Planner App",

    /* redirect */
    "redirect.auto.title": "Taking you to the store…",
    "redirect.auto.sub": "Please wait a moment.",
    "redirect.manual.title": "Download Somewhere",
    "redirect.manual.sub": "Choose the store for your device.",
    "redirect.home": "Home",
  },
};

const SUPPORTED = ["ko", "en"];
const STORAGE_KEY = "somewhere-lang";

function detectLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("ko") ? "ko" : "en";
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] != null) el.setAttribute("alt", dict[key]);
  });
  document.querySelectorAll("[data-i18n-src-ko][data-i18n-src-en]").forEach((el) => {
    const src = el.getAttribute(`data-i18n-src-${lang}`);
    if (src) el.setAttribute("src", src);
  });

  localStorage.setItem(STORAGE_KEY, lang);
  window.__lang = lang;

  // let page-specific components (e.g. the privacy version picker) react
  window.dispatchEvent(new CustomEvent("somewhere:langchange", { detail: lang }));
}

function toggleLang() {
  applyLang(window.__lang === "ko" ? "en" : "ko");
}

// expose
window.SomewhereI18N = { detectLang, applyLang, toggleLang };
