/* ============================================================
   SOMEWHERE — i18n
   - Auto-detects browser language and persists the selected language.
   - Applies text to any element with [data-i18n] (and common attr variants).
   - Legal documents intentionally remain Korean / English only.
   ============================================================ */

const I18N = {
  ko: {
    "langBanner.message": "이 페이지는 한국어로도 볼 수 있어요",
    "langBanner.action": "한국어로 보기",
    "langBanner.close": "닫기",
    "lang.name": "한국어",
    "lang.select": "언어 선택",
    "whatsNew.title": "새로운 기능",
    "whatsNew.subtitle": "SOMEWHERE에 새로 추가된 기능을 소개해요",
    "whatsNew.latest": "최신",
    "whatsNew.empty": "아직 소개할 새로운 기능이 없어요",
    "notices.title": "공지사항",
    "notices.subtitle": "SOMEWHERE의 중요한 소식과 안내를 전해드려요",
    "notices.empty": "아직 등록된 공지사항이 없어요",
    "notices.back": "공지사항 목록",
    "lang.option.ko": "한국어",
    "lang.option.en": "English",
    "lang.option.ja": "日本語",
    "lang.option.zh-CN": "简体中文",
    "lang.option.zh-TW": "繁體中文",
    "lang.option.fr": "Français",
    "lang.option.de": "Deutsch",
    "lang.option.es": "Español",

    "nav.features": "기능",
    "nav.download": "다운로드",
    "store.downloadGroup": "스토어 다운로드 링크",
    "store.ios": "App Store에서 다운로드",
    "store.android": "Google Play에서 다운로드",
    "store.qr": "QR 코드로 이동",
    "theme.toggle": "테마 전환",

    "hero.eyebrow": "SOMEWHERE AI 여행 계획 앱",
    "hero.title.1": "SOMEWHERE",
    "hero.title.2": "AI 여행 계획 앱",
    "seo.title": "여행 일정·동선 지도·경비 정산 앱",
    "hero.lead":
      "나만의 여행 계획을 손쉽게 세워보세요. 여행 계획부터 지도 동선 확인, 소비 내역 기록 및 정산까지 여행 준비에 필요한 흐름을 한 곳에 모아드려요.",
    "hero.note": "App Store · Google Play 무료 다운로드",
    "hero.screen.trips": "SOMEWHERE 여행 목록 화면",
    "hero.screen.map": "SOMEWHERE 지도 동선 화면",
    "hero.screens": "SOMEWHERE 앱 스크린샷",

    "feature.map.kicker": "지도",
    "feature.map.title": "지도로 확인하는 여행 동선",
    "feature.map.desc":
      "가고 싶은 장소를 지도에 표시하고, 이동 동선을 한눈에 확인하세요",
    "feature.map.alt": "태블릿에서 보는 SOMEWHERE 여행 지도 화면",
    "feature.live.dynamic.title": "실시간 현황",
    "feature.live.dynamic.desc":
      "홈 화면의 Dynamic Island에서 현재 여행 현황을 확인하세요 (SOMEWHERE PRO에서 이용 가능)",
    "feature.live.dynamic.alt":
      "홈 화면의 Dynamic Island에서 확인하는 현재 여행 현황",
    "feature.live.lock.title": "실시간 현황",
    "feature.live.lock.desc":
      "잠금 화면에서 현재 여행 현황을 한눈에 확인하세요 (SOMEWHERE PRO에서 이용 가능)",
    "feature.live.lock.alt": "잠금 화면 하단에서 확인하는 현재 여행 현황",
    "feature.expense.kicker": "지출",
    "feature.expense.title": "지출 내역과 정산",
    "feature.expense.desc":
      "여행의 소비 내역을 기록하고, 정산 기능으로 친구에게 얼마를 보낼지 손쉽게 확인하세요",
    "feature.expense.alt": "여행 소비 지출 내역 및 정산 화면",
    "feature.more.map": "여행 동선 지도 알아보기",
    "feature.more.expense": "여행 경비 정산 알아보기",
    "feature.more.together": "친구와 일정 공유 알아보기",
    "feature.more.packing": "여행 준비물 체크리스트 알아보기",
    "feature.more.vouchers": "바우처·티켓 보관 알아보기",
    "feature.together.kicker": "협업",
    "feature.together.title": "함께 만드는 여행",
    "feature.together.desc":
      "친구를 초대해 서로 아이디어를 더하고, 같이 여행을 준비하세요",
    "feature.together.alt": "여행 친구 초대 및 권한 화면",
    "feature.large.kicker": "대화면",
    "feature.large.title": "대화면 최적화 UI",
    "feature.large.desc":
      "폴더블, 태블릿 등 큰 화면에서도 편리하게 이용해보세요",
    "feature.large.alt": "폴더블에서 보는 SOMEWHERE 여행 일정 화면",
    "feature.supplies.kicker": "준비물",
    "feature.supplies.title": "함께 챙기는 준비물",
    "feature.supplies.desc": "공동 준비물과 개인 준비물을 나눠 체크하고, 자주 챙기는 항목은 골라서 한 번에 추가하세요",
    "feature.supplies.alt": "공동 준비물 체크리스트 화면",
    "feature.voucher.kicker": "바우처·티켓",
    "feature.voucher.title": "바우처·티켓 보관",
    "feature.voucher.desc": "항공권과 숙소 바우처를 사진이나 PDF로 올리면 AI가 예약 정보를 채워주고, 필요할 때 바로 꺼내 볼 수 있어요",
    "feature.voucher.alt": "항공권 상세 화면",

    "support.eyebrow": "지원 기능",
    "support.title": "다양한 기능",
    "support.account": "계정 연동 지원",
    "support.platform": "Android, iOS, iPadOS, macOS 및 visionOS 지원",
    "support.language":
      "한국어, 영어, 일본어, 중국어(간체·번체), 스페인어, 프랑스어, 독일어 지원",
    "support.ai": "AI 여행 일정 만들기",
    "support.weather": "다가오는 여행 날짜의 날씨 예보",
    "support.duplicate": "여행 복제로 비슷한 일정 바로 만들기",

    "a11y.eyebrow": "접근성",
    "a11y.title": "접근성",
    "a11y.darkMode": "라이트/다크 모드 지원",
    "a11y.fontSize": "글꼴 및 디스플레이 크기 조절",
    "a11y.contrast": "대비 정도 조절",
    "a11y.screenReader": "스크린 리더 (TalkBack, VoiceOver) 지원",

    "pro.eyebrow": "구독",
    "pro.title": "SOMEWHERE PRO 구독제",
    "pro.ads": "광고 제거",
    "pro.credits": "매주 무료 크레딧 제공",
    "pro.friends": "친구 초대 수 증가",
    "pro.liveActivities": "지원되는 기기에서 실시간 현황(iOS)과 실시간 정보 · Now bar(Android) 사용",
    "pro.moreStorage": "더 많은 여행 · 장소 · 사진 · 바우처·티켓 저장",
    "pro.expenseImages": "지출 내역과 공동경비에 사진 추가",
    "pro.expenseCsv": "지출 내역 CSV 내보내기",

    "cta.title": "지금 여행을 시작하세요",
    "cta.sub": "지금 SOMEWHERE를 다운로드하고 첫 여행을 만들어 보세요",
    "cta.qr": "카메라로 스캔해서 다운로드",

    "footer.developer": "개발자",
    "footer.contact": "문의",
    "footer.privacy": "개인정보처리방침",
    "footer.terms": "서비스 이용약관",
    "footer.notices": "공지사항",
    "footer.rights": "여행 계획 앱",
    "footer.copyEmail": "이메일 주소 복사",
    "footer.business": "사업자 정보",
    "footer.businessInfo":
      "상호: 엔피(NP)<br />대표자: 이세종<br />사업자등록번호: 545-01-04035<br />통신판매업 신고번호: 제 2026-서울양천-0818 호<br />사업장 소재지: 서울특별시 양천구 중앙로45길 25-22, 402호(신정동, 신정빌라)<br />이메일: np@npsomewhere.com",
    "footer.legal":
      "Apple 및 Apple 로고는 미국 및 기타 국가에 등록된 Apple Inc.의 상표입니다. App Store는 Apple Inc.의 서비스 상표입니다. Google Play 및 Google Play 로고는 Google LLC의 상표입니다.",

    "redirect.auto.title": "스토어로 이동 중…",
    "redirect.auto.sub": "잠시만 기다려 주세요",
    "redirect.manual.title": "SOMEWHERE 다운로드",
    "redirect.manual.sub": "사용 중인 기기의 스토어를 선택하세요",
    "redirect.home": "홈으로",

    "join.documentTitle": "여행 초대",
    "join.title": "여행 초대를 받았어요",
    "join.description":
      "SOMEWHERE 앱이 설치되어 있다면 아래 버튼을 눌러 여행 정보를 확인하고 참가할 수 있어요.",
    "join.open": "앱에서 열기",
    "join.download": "앱 다운로드",
    "join.home": "SOMEWHERE 홈으로",
    "error.notFound": "페이지를 찾을 수 없어요",
    "error.home": "홈으로",
    "legal.redirect.title": "개인정보처리방침으로 이동 중이에요",
    "legal.redirect.open": "개인정보처리방침 열기",
    "legal.redirect.termsTitle": "서비스 이용약관으로 이동 중이에요",
    "legal.redirect.termsOpen": "서비스 이용약관 열기",
  },

  en: {
    "langBanner.message": "This page is also available in English",
    "langBanner.action": "View in English",
    "langBanner.close": "Close",
    "lang.name": "English",
    "lang.select": "Select language",
    "whatsNew.title": "What's new",
    "whatsNew.subtitle": "See what's new in SOMEWHERE",
    "whatsNew.latest": "Latest",
    "whatsNew.empty": "No new features to show yet",
    "notices.title": "Notices",
    "notices.subtitle": "Important news and updates about SOMEWHERE",
    "notices.empty": "No notices yet",
    "notices.back": "All notices",
    "lang.option.ko": "한국어",
    "lang.option.en": "English",
    "lang.option.ja": "日本語",
    "lang.option.zh-CN": "简体中文",
    "lang.option.zh-TW": "繁體中文",
    "lang.option.fr": "Français",
    "lang.option.de": "Deutsch",
    "lang.option.es": "Español",

    "nav.features": "Features",
    "nav.download": "Download",
    "store.downloadGroup": "Store download links",
    "store.ios": "Download on the App Store",
    "store.android": "Get it on Google Play",
    "store.qr": "Go to QR code",
    "theme.toggle": "Toggle theme",

    "hero.eyebrow": "SOMEWHERE AI Trip Planner App",
    "hero.title.1": "SOMEWHERE",
    "hero.title.2": "AI Trip Planner App",
    "seo.title": "Trip Planner with Route Maps & Expense Splitting",
    "hero.lead":
      "Build your own trip without the busywork. SOMEWHERE brings trip planning, route maps, and expense tracking & settlement into one planning flow.",
    "hero.note": "Free on the App Store and Google Play",
    "hero.screen.trips": "SOMEWHERE trips screen",
    "hero.screen.map": "SOMEWHERE route map screen",
    "hero.screens": "SOMEWHERE app screenshots",

    "feature.map.kicker": "Map",
    "feature.map.title": "Travel routes on a map",
    "feature.map.desc":
      "Mark the places you want to visit and see your travel route at a glance",
    "feature.map.alt": "SOMEWHERE trip map on a tablet",
    "feature.live.dynamic.title": "Live Activities",
    "feature.live.dynamic.desc":
      "See your current trip status in the Dynamic Island from your Home Screen (Available on SOMEWHERE PRO)",
    "feature.live.dynamic.alt":
      "Current trip status in the Dynamic Island on the Home Screen",
    "feature.live.lock.title": "Live Activities",
    "feature.live.lock.desc":
      "View your current trip status at a glance on your Lock Screen (Available on SOMEWHERE PRO)",
    "feature.live.lock.alt":
      "Current trip status at the bottom of the Lock Screen",
    "feature.expense.kicker": "Expense",
    "feature.expense.title": "Expenses & Settlement",
    "feature.expense.desc":
      "Record your travel spending and easily calculate settlement amounts to send to friends",
    "feature.expense.alt": "Travel expense details and settlement screen",
    "feature.more.map": "Explore trip route maps",
    "feature.more.expense": "Explore expense splitting",
    "feature.more.together": "Explore planning with friends",
    "feature.more.packing": "Explore packing lists",
    "feature.more.vouchers": "Explore vouchers & tickets",
    "feature.together.kicker": "Together",
    "feature.together.title": "Plan trips together",
    "feature.together.desc":
      "Invite friends, collect ideas, and prepare for the trip together",
    "feature.together.alt": "Trip mates invitation and permission screen",
    "feature.large.kicker": "Large screens",
    "feature.large.title": "Optimized for bigger displays",
    "feature.large.desc":
      "Use SOMEWHERE comfortably on foldables, tablets, and other large screens",
    "feature.large.alt": "SOMEWHERE itinerary screen on a foldable device",
    "feature.supplies.kicker": "Packing",
    "feature.supplies.title": "Pack together",
    "feature.supplies.desc": "Check off shared and personal items separately, and add common essentials all at once",
    "feature.supplies.alt": "Shared packing checklist screen",
    "feature.voucher.kicker": "Vouchers",
    "feature.voucher.title": "Vouchers & tickets",
    "feature.voucher.desc": "Add flight tickets and stay vouchers as photos or PDFs, let AI fill in the booking details, and pull them up when you need them",
    "feature.voucher.alt": "Flight ticket detail screen",

    "support.eyebrow": "Included",
    "support.title": "Various features",
    "support.account": "Account linking support",
    "support.platform": "Android, iOS, iPadOS, macOS and visionOS support",
    "support.language":
      "Supports Korean, English, Japanese, Chinese (Simplified & Traditional), Spanish, French, German",
    "support.ai": "AI trip planner",
    "support.weather": "Weather forecasts for upcoming trip dates",
    "support.duplicate": "Duplicate a trip to plan a similar one",

    "a11y.eyebrow": "Accessibility",
    "a11y.title": "Accessibility",
    "a11y.darkMode": "Light and dark mode support",
    "a11y.fontSize": "Adjustable font & display size",
    "a11y.contrast": "Adjustable contrast level",
    "a11y.screenReader": "Screen reader (TalkBack, VoiceOver) support",

    "pro.eyebrow": "Subscription",
    "pro.title": "SOMEWHERE PRO",
    "pro.ads": "Remove ads",
    "pro.credits": "Free credits provided weekly",
    "pro.friends": "Increased friend invite limit",
    "pro.liveActivities":
      "Live Activities (iOS) and Live Updates · Now bar (Android) on supported devices",
    "pro.moreStorage": "Save more trips, places, photos, and vouchers & tickets",
    "pro.expenseImages":
      "Add photos to expenses and shared fund contributions",
    "pro.expenseCsv": "Export expenses as CSV",

    "cta.title": "Start your journey today",
    "cta.sub": "Download SOMEWHERE and create your first trip",
    "cta.qr": "Scan to download",

    "footer.developer": "Developer",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.notices": "Notices",
    "footer.rights": "Trip Planner App",
    "footer.copyEmail": "Copy email address",
    "footer.business": "Business information",
    "footer.businessInfo":
      "Business name: NP<br />Representative: Sejong Lee<br />Business registration number: 545-01-04035<br />Mail-order business report number: 2026-Seoul Yangcheon-0818<br />Business address: Room 402, Sinjeong Villa, 25-22 Jungang-ro 45-gil, Yangcheon-gu, Seoul 08060, Republic of Korea<br />Email: np@npsomewhere.com",
    "footer.legal":
      "Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.",

    "redirect.auto.title": "Taking you to the store…",
    "redirect.auto.sub": "Please wait a moment",
    "redirect.manual.title": "Download SOMEWHERE",
    "redirect.manual.sub": "Choose the store for your device",
    "redirect.home": "Home",

    "join.documentTitle": "Trip Invitation",
    "join.title": "You've been invited",
    "join.description":
      "If SOMEWHERE is installed, use the button below to review and join the trip in the app.",
    "join.open": "Open in App",
    "join.download": "Download App",
    "join.home": "Go to SOMEWHERE Home",
    "error.notFound": "Page not found",
    "error.home": "Home",
    "legal.redirect.title": "Taking you to the Privacy Policy",
    "legal.redirect.open": "Open the Privacy Policy",
    "legal.redirect.termsTitle": "Taking you to the Terms of Service",
    "legal.redirect.termsOpen": "Open the Terms of Service",
  },

  ja: {
    "langBanner.message": "このページは日本語でもご覧いただけます",
    "langBanner.action": "日本語で見る",
    "langBanner.close": "閉じる",
    "lang.name": "日本語",
    "lang.select": "言語を選択",
    "whatsNew.title": "新機能",
    "whatsNew.subtitle": "SOMEWHEREに追加された新しい機能をご紹介します",
    "whatsNew.latest": "最新",
    "whatsNew.empty": "まだご紹介する新機能はありません",
    "notices.title": "お知らせ",
    "notices.subtitle": "SOMEWHEREからの大切なお知らせをお届けします",
    "notices.empty": "まだお知らせはありません",
    "notices.back": "お知らせ一覧",
    "lang.option.ko": "한국어",
    "lang.option.en": "English",
    "lang.option.ja": "日本語",
    "lang.option.zh-CN": "简体中文",
    "lang.option.zh-TW": "繁體中文",
    "lang.option.fr": "Français",
    "lang.option.de": "Deutsch",
    "lang.option.es": "Español",

    "nav.features": "機能",
    "nav.download": "ダウンロード",
    "store.downloadGroup": "ストアのダウンロードリンク",
    "store.ios": "App Storeからダウンロード",
    "store.android": "Google Playで入手",
    "store.qr": "QRコードへ移動",
    "theme.toggle": "テーマを切り替え",

    "hero.eyebrow": "SOMEWHERE AI旅行計画アプリ",
    "hero.title.1": "SOMEWHERE",
    "hero.title.2": "AI旅行計画アプリ",
    "seo.title": "旅行計画・ルートマップ・割り勘精算アプリ",
    "hero.lead":
      "面倒な作業なしで、自分だけの旅行を計画できます。SOMEWHEREは、旅行計画からルートマップ、支出の記録と精算まで、旅の準備に必要な流れをひとつにまとめます。",
    "hero.note": "App Store・Google Playで無料ダウンロード",
    "hero.screen.trips": "SOMEWHEREの旅行一覧画面",
    "hero.screen.map": "SOMEWHEREのルートマップ画面",
    "hero.screens": "SOMEWHEREのアプリ画面",

    "feature.map.kicker": "地図",
    "feature.map.title": "地図で見る旅行ルート",
    "feature.map.desc":
      "行きたい場所を地図に登録して、移動ルートをひと目で確認できます",
    "feature.map.alt": "タブレットで見るSOMEWHEREの旅行マップ",
    "feature.live.dynamic.title": "リアルタイム情報",
    "feature.live.dynamic.desc":
      "ホーム画面のDynamic Islandで現在の旅行状況を確認できます（SOMEWHERE PROで利用可能）",
    "feature.live.dynamic.alt":
      "ホーム画面のDynamic Islandに表示された現在の旅行状況",
    "feature.live.lock.title": "リアルタイム情報",
    "feature.live.lock.desc":
      "ロック画面で現在の旅行状況をひと目で確認できます（SOMEWHERE PROで利用可能）",
    "feature.live.lock.alt": "ロック画面下部に表示された現在の旅行状況",
    "feature.expense.kicker": "支出",
    "feature.expense.title": "支出と精算",
    "feature.expense.desc":
      "旅行中の支出を記録し、友だちに送る金額を精算機能で簡単に確認できます",
    "feature.expense.alt": "旅行の支出明細と精算画面",
    "feature.more.map": "ルートマップを詳しく見る",
    "feature.more.expense": "割り勘・精算を詳しく見る",
    "feature.more.together": "友達との予定共有を詳しく見る",
    "feature.more.packing": "持ち物リストを詳しく見る",
    "feature.more.vouchers": "バウチャー・チケットを詳しく見る",
    "feature.together.kicker": "共同作業",
    "feature.together.title": "みんなで作る旅",
    "feature.together.desc":
      "友だちを招待してアイデアを出し合い、一緒に旅行を準備できます",
    "feature.together.alt": "旅行メンバーの招待と権限設定画面",
    "feature.large.kicker": "大画面",
    "feature.large.title": "大画面に最適化されたUI",
    "feature.large.desc":
      "折りたたみスマートフォンやタブレットなど、大きな画面でも快適に使えます",
    "feature.large.alt": "折りたたみスマートフォンで見るSOMEWHEREの旅行日程画面",
    "feature.supplies.kicker": "持ち物",
    "feature.supplies.title": "みんなで準備する持ち物",
    "feature.supplies.desc": "共有と自分用の持ち物を分けてチェックし、定番アイテムはまとめて追加しましょう",
    "feature.supplies.alt": "共有の持ち物チェックリスト画面",
    "feature.voucher.kicker": "チケット",
    "feature.voucher.title": "バウチャー・チケット",
    "feature.voucher.desc": "航空券や宿泊バウチャーを写真やPDFで追加するとAIが予約情報を入力し、必要なときにすぐ確認できます",
    "feature.voucher.alt": "航空券の詳細画面",

    "support.eyebrow": "対応機能",
    "support.title": "さまざまな機能",
    "support.account": "アカウント連携に対応",
    "support.platform": "Android、iOS、iPadOS、macOS、visionOSに対応",
    "support.language":
      "韓国語、英語、日本語、中国語（簡体字・繁体字）、スペイン語、フランス語、ドイツ語に対応",
    "support.ai": "AIで旅行プラン作成",
    "support.weather": "近づいた旅行日の天気予報",
    "support.duplicate": "旅行を複製して似た旅程をすぐ作成",

    "a11y.eyebrow": "アクセシビリティ",
    "a11y.title": "アクセシビリティ",
    "a11y.darkMode": "ライト／ダークモードに対応",
    "a11y.fontSize": "フォントと表示サイズを調整可能",
    "a11y.contrast": "コントラストを調整可能",
    "a11y.screenReader": "スクリーンリーダー（TalkBack、VoiceOver）に対応",

    "pro.eyebrow": "サブスクリプション",
    "pro.title": "SOMEWHERE PRO",
    "pro.ads": "広告を削除",
    "pro.credits": "毎週無料クレジットを提供",
    "pro.friends": "友だち招待数を拡大",
    "pro.liveActivities":
      "対応する端末でライブアクティビティ（iOS）とリアルタイム情報 · Now bar（Android）を利用",
    "pro.moreStorage": "より多くの旅行・場所・写真、バウチャー・チケットを保存",
    "pro.expenseImages": "支出記録と共同経費に写真を追加",
    "pro.expenseCsv": "支出をCSVでエクスポート",

    "cta.title": "今日から旅を始めよう",
    "cta.sub": "SOMEWHEREをダウンロードして、最初の旅行を作りましょう",
    "cta.qr": "カメラでスキャンしてダウンロード",

    "footer.developer": "開発者",
    "footer.contact": "お問い合わせ",
    "footer.privacy": "プライバシーポリシー",
    "footer.terms": "利用規約",
    "footer.notices": "お知らせ",
    "footer.rights": "旅行計画アプリ",
    "footer.copyEmail": "メールアドレスをコピー",
    "footer.business": "事業者情報",
    "footer.businessInfo":
      "商号: NP<br />代表者: Sejong Lee<br />事業者登録番号: 545-01-04035<br />通信販売業申告番号: 2026-Seoul Yangcheon-0818<br />事業所所在地: 大韓民国 08060 ソウル特別市陽川区中央路45ギル25-22 新亭ヴィラ402号<br />メール: np@npsomewhere.com",
    "footer.legal":
      "AppleおよびAppleロゴは、米国その他の国で登録されたApple Inc.の商標です。App StoreはApple Inc.のサービスマークです。Google PlayおよびGoogle PlayロゴはGoogle LLCの商標です。",

    "redirect.auto.title": "ストアへ移動しています…",
    "redirect.auto.sub": "しばらくお待ちください",
    "redirect.manual.title": "SOMEWHEREをダウンロード",
    "redirect.manual.sub": "お使いのデバイスのストアを選択してください",
    "redirect.home": "ホームへ",

    "join.documentTitle": "旅行への招待",
    "join.title": "旅行に招待されました",
    "join.description":
      "SOMEWHEREがインストールされている場合は、下のボタンから旅行情報を確認して参加できます。",
    "join.open": "アプリで開く",
    "join.download": "アプリをダウンロード",
    "join.home": "SOMEWHEREホームへ",
    "error.notFound": "ページが見つかりません",
    "error.home": "ホームへ",
    "legal.redirect.title": "プライバシーポリシーへ移動しています",
    "legal.redirect.open": "プライバシーポリシーを開く",
  },

  "zh-CN": {
    "langBanner.message": "此页面也提供简体中文版本",
    "langBanner.action": "查看简体中文版",
    "langBanner.close": "关闭",
    "lang.name": "简体中文",
    "lang.select": "选择语言",
    "whatsNew.title": "新功能",
    "whatsNew.subtitle": "看看 SOMEWHERE 新增了哪些功能",
    "whatsNew.latest": "最新",
    "whatsNew.empty": "暂时还没有新功能",
    "notices.title": "公告",
    "notices.subtitle": "SOMEWHERE 的重要消息与通知",
    "notices.empty": "暂时还没有公告",
    "notices.back": "公告列表",
    "lang.option.ko": "한국어",
    "lang.option.en": "English",
    "lang.option.ja": "日本語",
    "lang.option.zh-CN": "简体中文",
    "lang.option.zh-TW": "繁體中文",
    "lang.option.fr": "Français",
    "lang.option.de": "Deutsch",
    "lang.option.es": "Español",

    "nav.features": "功能",
    "nav.download": "下载",
    "store.downloadGroup": "应用商店下载链接",
    "store.ios": "在 App Store 下载",
    "store.android": "在 Google Play 获取",
    "store.qr": "前往二维码",
    "theme.toggle": "切换主题",

    "hero.eyebrow": "SOMEWHERE AI旅行规划应用",
    "hero.title.1": "SOMEWHERE",
    "hero.title.2": "AI旅行规划应用",
    "seo.title": "旅行行程规划·路线地图·AA分账应用",
    "hero.lead":
      "轻松制定专属旅行计划。SOMEWHERE 将行程规划、路线地图、消费记录与结算整合在一个流程中。",
    "hero.note": "App Store · Google Play 免费下载",
    "hero.screen.trips": "SOMEWHERE 旅行列表界面",
    "hero.screen.map": "SOMEWHERE 路线地图界面",
    "hero.screens": "SOMEWHERE 应用界面截图",

    "feature.map.kicker": "地图",
    "feature.map.title": "在地图上查看旅行路线",
    "feature.map.desc": "在地图上标记想去的地点，一眼查看出行路线",
    "feature.map.alt": "平板电脑上的 SOMEWHERE 旅行地图",
    "feature.live.dynamic.title": "实时状态",
    "feature.live.dynamic.desc":
      "在主屏幕的灵动岛中查看当前旅行状态（SOMEWHERE PRO 专享）",
    "feature.live.dynamic.alt": "主屏幕灵动岛中的当前旅行状态",
    "feature.live.lock.title": "实时状态",
    "feature.live.lock.desc":
      "在锁定屏幕上一眼查看当前旅行状态（SOMEWHERE PRO 专享）",
    "feature.live.lock.alt": "锁定屏幕底部的当前旅行状态",
    "feature.expense.kicker": "支出",
    "feature.expense.title": "支出记录与结算",
    "feature.expense.desc": "记录旅行支出，轻松计算需要发给朋友的结算金额",
    "feature.expense.alt": "旅行支出明细与结算界面",
    "feature.more.map": "了解路线地图",
    "feature.more.expense": "了解旅行分账",
    "feature.more.together": "了解共享行程",
    "feature.more.packing": "了解旅行行李清单",
    "feature.more.vouchers": "了解凭证与票券",
    "feature.together.kicker": "协作",
    "feature.together.title": "一起规划旅行",
    "feature.together.desc": "邀请朋友分享想法，一起准备旅行",
    "feature.together.alt": "旅行伙伴邀请与权限界面",
    "feature.large.kicker": "大屏幕",
    "feature.large.title": "为大屏幕优化的界面",
    "feature.large.desc": "在折叠屏、平板电脑等大屏幕上也能舒适使用",
    "feature.large.alt": "折叠屏上的 SOMEWHERE 旅行日程界面",
    "feature.supplies.kicker": "行李清单",
    "feature.supplies.title": "一起准备行李",
    "feature.supplies.desc": "分开勾选共享和个人行李清单里的物品，常用物品可一次添加",
    "feature.supplies.alt": "共享行李清单界面",
    "feature.voucher.kicker": "票券",
    "feature.voucher.title": "凭证与票券",
    "feature.voucher.desc": "以照片或 PDF 添加机票和住宿凭证，AI 帮你填写预订信息，需要时随时查看",
    "feature.voucher.alt": "机票详情界面",

    "support.eyebrow": "支持功能",
    "support.title": "丰富的功能",
    "support.account": "支持账号关联",
    "support.platform": "支持 Android、iOS、iPadOS、macOS 和 visionOS",
    "support.language":
      "支持韩语、英语、日语、简体中文、繁体中文、西班牙语、法语和德语",
    "support.ai": "AI 旅行规划",
    "support.weather": "即将到来的旅行日期天气预报",
    "support.duplicate": "复制旅行，快速规划类似行程",

    "a11y.eyebrow": "无障碍",
    "a11y.title": "无障碍",
    "a11y.darkMode": "支持浅色和深色模式",
    "a11y.fontSize": "可调整字体和显示大小",
    "a11y.contrast": "可调整对比度",
    "a11y.screenReader": "支持屏幕阅读器（TalkBack、VoiceOver）",

    "pro.eyebrow": "订阅",
    "pro.title": "SOMEWHERE PRO",
    "pro.ads": "移除广告",
    "pro.credits": "每周提供免费积分",
    "pro.friends": "增加好友邀请数量",
    "pro.liveActivities": "在受支持的设备上使用实时活动（iOS）和实时信息 · Now bar（Android）",
    "pro.moreStorage": "保存更多旅行、地点、照片、凭证与票券",
    "pro.expenseImages": "可在支出和共同基金中添加照片",
    "pro.expenseCsv": "可将支出导出为 CSV 文件",

    "cta.title": "今天就开始旅行",
    "cta.sub": "下载 SOMEWHERE，创建你的第一次旅行",
    "cta.qr": "用相机扫描下载",

    "footer.developer": "开发者",
    "footer.contact": "联系",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.notices": "公告",
    "footer.rights": "旅行规划应用",
    "footer.copyEmail": "复制电子邮箱地址",
    "footer.business": "企业信息",
    "footer.businessInfo":
      "企业名称：NP<br />代表人：Sejong Lee<br />营业执照号：545-01-04035<br />网络销售业务申报编号：2026-Seoul Yangcheon-0818<br />营业地址：Room 402, Sinjeong Villa, 25-22 Jungang-ro 45-gil, Yangcheon-gu, Seoul 08060, Republic of Korea<br />电子邮箱：np@npsomewhere.com",
    "footer.legal":
      "Apple 及 Apple 标志是 Apple Inc. 在美国和其他国家注册的商标。App Store 是 Apple Inc. 的服务标志。Google Play 及 Google Play 标志是 Google LLC 的商标。",

    "redirect.auto.title": "正在前往应用商店…",
    "redirect.auto.sub": "请稍候",
    "redirect.manual.title": "下载 SOMEWHERE",
    "redirect.manual.sub": "请选择适用于你设备的应用商店",
    "redirect.home": "返回首页",

    "join.documentTitle": "旅行邀请",
    "join.title": "你收到了一份旅行邀请",
    "join.description":
      "如果已安装 SOMEWHERE，请点击下方按钮查看旅行信息并加入旅行。",
    "join.open": "在应用中打开",
    "join.download": "下载应用",
    "join.home": "前往 SOMEWHERE 首页",
    "error.notFound": "找不到页面",
    "error.home": "返回首页",
    "legal.redirect.title": "正在前往隐私政策",
    "legal.redirect.open": "打开隐私政策",
  },

  "zh-TW": {
    "langBanner.message": "此頁面也提供繁體中文版本",
    "langBanner.action": "查看繁體中文版",
    "langBanner.close": "關閉",
    "lang.name": "繁體中文",
    "lang.select": "選擇語言",
    "whatsNew.title": "新功能",
    "whatsNew.subtitle": "看看 SOMEWHERE 新增了哪些功能",
    "whatsNew.latest": "最新",
    "whatsNew.empty": "目前還沒有新功能",
    "notices.title": "公告",
    "notices.subtitle": "SOMEWHERE 的重要消息與通知",
    "notices.empty": "目前還沒有公告",
    "notices.back": "公告列表",
    "lang.option.ko": "한국어",
    "lang.option.en": "English",
    "lang.option.ja": "日本語",
    "lang.option.zh-CN": "简体中文",
    "lang.option.zh-TW": "繁體中文",
    "lang.option.fr": "Français",
    "lang.option.de": "Deutsch",
    "lang.option.es": "Español",

    "nav.features": "功能",
    "nav.download": "下載",
    "store.downloadGroup": "應用程式商店下載連結",
    "store.ios": "在 App Store 下載",
    "store.android": "在 Google Play 取得",
    "store.qr": "前往QR碼",
    "theme.toggle": "切換主題",

    "hero.eyebrow": "SOMEWHERE AI旅行規劃應用程式",
    "hero.title.1": "SOMEWHERE",
    "hero.title.2": "AI旅行規劃應用程式",
    "seo.title": "旅行行程規劃·路線地圖·分帳 App",
    "hero.lead":
      "輕鬆規劃專屬旅程。SOMEWHERE 將行程規劃、路線地圖、消費記錄與結算整合在一個流程中。",
    "hero.note": "App Store · Google Play 免費下載",
    "hero.screen.trips": "SOMEWHERE 旅程列表畫面",
    "hero.screen.map": "SOMEWHERE 路線地圖畫面",
    "hero.screens": "SOMEWHERE 應用程式畫面截圖",

    "feature.map.kicker": "地圖",
    "feature.map.title": "在地圖上查看旅程路線",
    "feature.map.desc": "在地圖上標記想去的地點，一眼查看移動路線",
    "feature.map.alt": "平板電腦上的 SOMEWHERE 旅程地圖",
    "feature.live.dynamic.title": "即時狀態",
    "feature.live.dynamic.desc":
      "在主畫面的動態島查看目前的旅程狀態（SOMEWHERE PRO 專享）",
    "feature.live.dynamic.alt": "主畫面動態島中的目前旅程狀態",
    "feature.live.lock.title": "即時狀態",
    "feature.live.lock.desc":
      "在鎖定畫面上一眼查看目前的旅程狀態（SOMEWHERE PRO 專享）",
    "feature.live.lock.alt": "鎖定畫面底部的目前旅程狀態",
    "feature.expense.kicker": "支出",
    "feature.expense.title": "支出記錄與結算",
    "feature.expense.desc": "記錄旅程支出，輕鬆計算需要傳給朋友的結算金額",
    "feature.expense.alt": "旅程支出明細與結算畫面",
    "feature.more.map": "了解路線地圖",
    "feature.more.expense": "了解旅行分帳",
    "feature.more.together": "了解共享行程",
    "feature.more.packing": "了解旅行行李清單",
    "feature.more.vouchers": "了解憑證與票券",
    "feature.together.kicker": "協作",
    "feature.together.title": "一起規劃旅程",
    "feature.together.desc": "邀請朋友分享想法，一起準備旅程",
    "feature.together.alt": "旅伴邀請與權限畫面",
    "feature.large.kicker": "大螢幕",
    "feature.large.title": "為大螢幕最佳化的介面",
    "feature.large.desc": "在摺疊螢幕、平板電腦等大螢幕上也能舒適使用",
    "feature.large.alt": "摺疊螢幕上的 SOMEWHERE 旅程行程畫面",
    "feature.supplies.kicker": "行李清單",
    "feature.supplies.title": "一起準備行李",
    "feature.supplies.desc": "分開勾選共享與個人行李清單裡的物品，常用物品可一次加入",
    "feature.supplies.alt": "共享行李清單畫面",
    "feature.voucher.kicker": "票券",
    "feature.voucher.title": "憑證與票券",
    "feature.voucher.desc": "以相片或 PDF 新增機票與住宿憑證，AI 幫你填寫預訂資訊，需要時隨時查看",
    "feature.voucher.alt": "機票詳情畫面",

    "support.eyebrow": "支援功能",
    "support.title": "豐富的功能",
    "support.account": "支援帳號連結",
    "support.platform": "支援 Android、iOS、iPadOS、macOS 和 visionOS",
    "support.language":
      "支援韓語、英語、日語、簡體中文、繁體中文、西班牙語、法語和德語",
    "support.ai": "AI 旅行規劃",
    "support.weather": "即將到來的旅行日期天氣預報",
    "support.duplicate": "複製旅行，快速規劃類似行程",

    "a11y.eyebrow": "無障礙功能",
    "a11y.title": "無障礙功能",
    "a11y.darkMode": "支援淺色與深色模式",
    "a11y.fontSize": "可調整字型與顯示大小",
    "a11y.contrast": "可調整對比度",
    "a11y.screenReader": "支援螢幕閱讀器（TalkBack、VoiceOver）",

    "pro.eyebrow": "訂閱",
    "pro.title": "SOMEWHERE PRO",
    "pro.ads": "移除廣告",
    "pro.credits": "每週提供免費點數",
    "pro.friends": "增加好友邀請數量",
    "pro.liveActivities": "在受支援的裝置上使用即時動態（iOS）和即時資訊 · Now bar（Android）",
    "pro.moreStorage": "儲存更多旅程、地點、相片、憑證與票券",
    "pro.expenseImages": "可在支出和共同基金中新增相片",
    "pro.expenseCsv": "可將支出匯出為 CSV 檔案",

    "cta.title": "今天就開始旅行",
    "cta.sub": "下載 SOMEWHERE，建立你的第一趟旅程",
    "cta.qr": "用相機掃描下載",

    "footer.developer": "開發者",
    "footer.contact": "聯絡",
    "footer.privacy": "隱私權政策",
    "footer.terms": "服務條款",
    "footer.notices": "公告",
    "footer.rights": "旅行規劃應用程式",
    "footer.copyEmail": "複製電子郵件地址",
    "footer.business": "企業資訊",
    "footer.businessInfo":
      "企業名稱：NP<br />代表人：Sejong Lee<br />營業執照號碼：545-01-04035<br />網路銷售業務申報編號：2026-Seoul Yangcheon-0818<br />營業地址：Room 402, Sinjeong Villa, 25-22 Jungang-ro 45-gil, Yangcheon-gu, Seoul 08060, Republic of Korea<br />電子郵件：np@npsomewhere.com",
    "footer.legal":
      "Apple 及 Apple 標誌是 Apple Inc. 在美國及其他國家註冊的商標。App Store 是 Apple Inc. 的服務標章。Google Play 及 Google Play 標誌是 Google LLC 的商標。",

    "redirect.auto.title": "正在前往應用程式商店…",
    "redirect.auto.sub": "請稍候",
    "redirect.manual.title": "下載 SOMEWHERE",
    "redirect.manual.sub": "請選擇適用於你裝置的應用程式商店",
    "redirect.home": "返回首頁",

    "join.documentTitle": "旅程邀請",
    "join.title": "你收到了一份旅程邀請",
    "join.description":
      "如果已安裝 SOMEWHERE，請點選下方按鈕查看旅程資訊並加入旅程。",
    "join.open": "在應用程式中開啟",
    "join.download": "下載應用程式",
    "join.home": "前往 SOMEWHERE 首頁",
    "error.notFound": "找不到頁面",
    "error.home": "返回首頁",
    "legal.redirect.title": "正在前往隱私權政策",
    "legal.redirect.open": "開啟隱私權政策",
  },

  fr: {
    "langBanner.message": "Cette page est aussi disponible en français",
    "langBanner.action": "Voir en français",
    "langBanner.close": "Fermer",
    "lang.name": "Français",
    "lang.select": "Choisir la langue",
    "whatsNew.title": "Nouveautés",
    "whatsNew.subtitle": "Découvrez les nouveautés de SOMEWHERE",
    "whatsNew.latest": "Nouveau",
    "whatsNew.empty": "Aucune nouveauté pour le moment",
    "notices.title": "Annonces",
    "notices.subtitle": "Les actualités et informations importantes de SOMEWHERE",
    "notices.empty": "Aucune annonce pour le moment",
    "notices.back": "Toutes les annonces",
    "lang.option.ko": "한국어",
    "lang.option.en": "English",
    "lang.option.ja": "日本語",
    "lang.option.zh-CN": "简体中文",
    "lang.option.zh-TW": "繁體中文",
    "lang.option.fr": "Français",
    "lang.option.de": "Deutsch",
    "lang.option.es": "Español",

    "nav.features": "Fonctionnalités",
    "nav.download": "Télécharger",
    "store.downloadGroup": "Liens de téléchargement des stores",
    "store.ios": "Télécharger sur l’App Store",
    "store.android": "Disponible sur Google Play",
    "store.qr": "Accéder au code QR",
    "theme.toggle": "Changer de thème",

    "hero.eyebrow": "Application de voyage IA SOMEWHERE",
    "hero.title.1": "SOMEWHERE",
    "hero.title.2": "Application de voyage IA",
    "seo.title": "Planificateur de voyage : itinéraires et dépenses",
    "hero.lead":
      "Créez facilement votre propre voyage. SOMEWHERE réunit la planification, les itinéraires sur carte et le suivi des dépenses avec le partage des frais dans un seul parcours.",
    "hero.note": "Téléchargement gratuit sur l’App Store et Google Play",
    "hero.screen.trips": "Écran des voyages SOMEWHERE",
    "hero.screen.map": "Écran de carte d’itinéraire SOMEWHERE",
    "hero.screens": "Captures d’écran de l’application SOMEWHERE",

    "feature.map.kicker": "Carte",
    "feature.map.title": "Vos itinéraires sur une carte",
    "feature.map.desc":
      "Marquez les endroits à visiter et visualisez votre itinéraire en un coup d’œil",
    "feature.map.alt": "Carte de voyage SOMEWHERE sur une tablette",
    "feature.live.dynamic.title": "Activités en direct",
    "feature.live.dynamic.desc":
      "Consultez l’état de votre voyage dans la Dynamic Island depuis l’écran d’accueil (disponible avec SOMEWHERE PRO)",
    "feature.live.dynamic.alt":
      "État actuel du voyage dans la Dynamic Island de l’écran d’accueil",
    "feature.live.lock.title": "Activités en direct",
    "feature.live.lock.desc":
      "Consultez l’état de votre voyage en un coup d’œil sur l’écran verrouillé (disponible avec SOMEWHERE PRO)",
    "feature.live.lock.alt":
      "État actuel du voyage en bas de l’écran verrouillé",
    "feature.expense.kicker": "Dépenses",
    "feature.expense.title": "Dépenses et partage des frais",
    "feature.expense.desc":
      "Enregistrez vos dépenses de voyage et calculez facilement les montants à envoyer à vos amis",
    "feature.expense.alt": "Écran des dépenses et du partage des frais",
    "feature.more.map": "Découvrir la carte d’itinéraire",
    "feature.more.expense": "Découvrir le partage des dépenses",
    "feature.more.together": "Découvrir la planification entre amis",
    "feature.more.packing": "Découvrir les listes de bagages",
    "feature.more.vouchers": "Découvrir les réservations et billets",
    "feature.together.kicker": "Ensemble",
    "feature.together.title": "Planifiez vos voyages ensemble",
    "feature.together.desc":
      "Invitez vos amis, rassemblez vos idées et préparez votre voyage ensemble",
    "feature.together.alt": "Écran d’invitation et d’autorisations des compagnons de voyage",
    "feature.large.kicker": "Grands écrans",
    "feature.large.title": "Optimisé pour les grands écrans",
    "feature.large.desc":
      "Utilisez SOMEWHERE confortablement sur les appareils pliables, les tablettes et autres grands écrans",
    "feature.large.alt": "Écran d’itinéraire SOMEWHERE sur un appareil pliable",
    "feature.supplies.kicker": "Bagages",
    "feature.supplies.title": "Préparer ses bagages ensemble",
    "feature.supplies.desc": "Cochez les affaires de la liste partagée et de la liste personnelle, et ajoutez les essentiels courants en une fois",
    "feature.supplies.alt": "Écran de la liste de bagages partagée",
    "feature.voucher.kicker": "Billets",
    "feature.voucher.title": "Réservations et billets",
    "feature.voucher.desc": "Ajoutez billets d’avion et réservations d’hébergement en photo ou en PDF, laissez l’IA remplir les détails et retrouvez-les quand vous en avez besoin",
    "feature.voucher.alt": "Écran de détail d’un billet d’avion",

    "support.eyebrow": "Inclus",
    "support.title": "De nombreuses fonctionnalités",
    "support.account": "Prise en charge de la connexion de comptes",
    "support.platform": "Compatible avec Android, iOS, iPadOS, macOS et visionOS",
    "support.language":
      "Disponible en coréen, anglais, japonais, chinois simplifié, chinois traditionnel, espagnol, français et allemand",
    "support.ai": "Planificateur de voyage IA",
    "support.weather": "Prévisions météo pour les prochains jours de voyage",
    "support.duplicate": "Dupliquez un voyage pour en préparer un similaire",

    "a11y.eyebrow": "Accessibilité",
    "a11y.title": "Accessibilité",
    "a11y.darkMode": "Prise en charge des modes clair et sombre",
    "a11y.fontSize": "Taille de police et d’affichage réglable",
    "a11y.contrast": "Contraste réglable",
    "a11y.screenReader":
      "Prise en charge du lecteur d’écran (TalkBack, VoiceOver)",

    "pro.eyebrow": "Abonnement",
    "pro.title": "SOMEWHERE PRO",
    "pro.ads": "Supprimer les publicités",
    "pro.credits": "Crédits gratuits offerts chaque semaine",
    "pro.friends": "Limite d’invitations d’amis augmentée",
    "pro.liveActivities":
      "Activités en direct (iOS) et Mises à jour en direct · Now bar (Android) sur les appareils compatibles",
    "pro.moreStorage": "Enregistrez plus de voyages, de lieux, de photos, de réservations et de billets",
    "pro.expenseImages":
      "Ajoutez des photos aux dépenses et à la cagnotte",
    "pro.expenseCsv": "Exportez vos dépenses au format CSV",

    "cta.title": "Commencez votre voyage aujourd’hui",
    "cta.sub": "Téléchargez SOMEWHERE et créez votre premier voyage",
    "cta.qr": "Scannez pour télécharger",

    "footer.developer": "Développeur",
    "footer.contact": "Contact",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d’utilisation",
    "footer.notices": "Annonces",
    "footer.rights": "Application de voyage",
    "footer.copyEmail": "Copier l’adresse e-mail",
    "footer.business": "Informations sur l’entreprise",
    "footer.businessInfo":
      "Nom de l’entreprise : NP<br />Représentant : Sejong Lee<br />Numéro d’enregistrement : 545-01-04035<br />Numéro de déclaration de vente à distance : 2026-Seoul Yangcheon-0818<br />Adresse : Room 402, Sinjeong Villa, 25-22 Jungang-ro 45-gil, Yangcheon-gu, Séoul 08060, République de Corée<br />E-mail : np@npsomewhere.com",
    "footer.legal":
      "Apple et le logo Apple sont des marques commerciales d’Apple Inc., déposées aux États-Unis et dans d’autres pays. App Store est une marque de service d’Apple Inc. Google Play et le logo Google Play sont des marques commerciales de Google LLC.",

    "redirect.auto.title": "Redirection vers le store…",
    "redirect.auto.sub": "Veuillez patienter",
    "redirect.manual.title": "Télécharger SOMEWHERE",
    "redirect.manual.sub": "Choisissez le store correspondant à votre appareil",
    "redirect.home": "Accueil",

    "join.documentTitle": "Invitation à un voyage",
    "join.title": "Vous avez été invité",
    "join.description":
      "Si SOMEWHERE est installé, utilisez le bouton ci-dessous pour consulter le voyage et le rejoindre dans l’application.",
    "join.open": "Ouvrir dans l’application",
    "join.download": "Télécharger l’application",
    "join.home": "Accéder à l’accueil de SOMEWHERE",
    "error.notFound": "Page introuvable",
    "error.home": "Accueil",
    "legal.redirect.title": "Redirection vers la politique de confidentialité",
    "legal.redirect.open": "Ouvrir la politique de confidentialité",
  },

  de: {
    "langBanner.message": "Diese Seite gibt es auch auf Deutsch",
    "langBanner.action": "Auf Deutsch ansehen",
    "langBanner.close": "Schließen",
    "lang.name": "Deutsch",
    "lang.select": "Sprache auswählen",
    "whatsNew.title": "Neue Funktionen",
    "whatsNew.subtitle": "Entdecke, was es Neues in SOMEWHERE gibt",
    "whatsNew.latest": "Neu",
    "whatsNew.empty": "Noch keine neuen Funktionen",
    "notices.title": "Mitteilungen",
    "notices.subtitle": "Wichtige Neuigkeiten und Hinweise zu SOMEWHERE",
    "notices.empty": "Noch keine Mitteilungen",
    "notices.back": "Alle Mitteilungen",
    "lang.option.ko": "한국어",
    "lang.option.en": "English",
    "lang.option.ja": "日本語",
    "lang.option.zh-CN": "简体中文",
    "lang.option.zh-TW": "繁體中文",
    "lang.option.fr": "Français",
    "lang.option.de": "Deutsch",
    "lang.option.es": "Español",

    "nav.features": "Funktionen",
    "nav.download": "Download",
    "store.downloadGroup": "Download-Links der Stores",
    "store.ios": "Im App Store laden",
    "store.android": "Bei Google Play laden",
    "store.qr": "Zum QR-Code springen",
    "theme.toggle": "Darstellung wechseln",

    "hero.eyebrow": "SOMEWHERE KI-Reiseplaner-App",
    "hero.title.1": "SOMEWHERE",
    "hero.title.2": "KI-Reiseplaner-App",
    "seo.title": "Reiseplaner-App mit Routenkarte & Kostenteilung",
    "hero.lead":
      "Planen Sie Ihre eigene Reise ganz unkompliziert. SOMEWHERE vereint Reiseplanung, Routen auf der Karte sowie Ausgabenaufzeichnung und Abrechnung in einem Ablauf.",
    "hero.note": "Kostenlos im App Store und bei Google Play",
    "hero.screen.trips": "Reiseübersicht von SOMEWHERE",
    "hero.screen.map": "Routenkarte von SOMEWHERE",
    "hero.screens": "Screenshots der SOMEWHERE-App",

    "feature.map.kicker": "Karte",
    "feature.map.title": "Reiserouten auf der Karte",
    "feature.map.desc":
      "Markieren Sie die Orte, die Sie besuchen möchten, und sehen Sie Ihre Route auf einen Blick",
    "feature.map.alt": "SOMEWHERE-Reisekarte auf einem Tablet",
    "feature.live.dynamic.title": "Live-Aktivitäten",
    "feature.live.dynamic.desc":
      "Sehen Sie den aktuellen Stand Ihrer Reise in der Dynamic Island auf dem Home-Bildschirm (mit SOMEWHERE PRO verfügbar)",
    "feature.live.dynamic.alt":
      "Aktueller Reisestatus in der Dynamic Island auf dem Home-Bildschirm",
    "feature.live.lock.title": "Live-Aktivitäten",
    "feature.live.lock.desc":
      "Sehen Sie den aktuellen Stand Ihrer Reise auf dem Sperrbildschirm auf einen Blick (mit SOMEWHERE PRO verfügbar)",
    "feature.live.lock.alt":
      "Aktueller Reisestatus am unteren Rand des Sperrbildschirms",
    "feature.expense.kicker": "Ausgaben",
    "feature.expense.title": "Ausgaben und Abrechnung",
    "feature.expense.desc":
      "Erfassen Sie Ihre Reiseausgaben und berechnen Sie einfach, wie viel Sie an Freunde senden müssen",
    "feature.expense.alt": "Ausgaben- und Abrechnungsansicht einer Reise",
    "feature.more.map": "Mehr zur Routenkarte",
    "feature.more.expense": "Mehr zur Kostenabrechnung",
    "feature.more.together": "Mehr zur gemeinsamen Planung",
    "feature.more.packing": "Mehr zur Packliste",
    "feature.more.vouchers": "Mehr zu Buchungen & Tickets",
    "feature.together.kicker": "Gemeinsam",
    "feature.together.title": "Reisen gemeinsam planen",
    "feature.together.desc":
      "Laden Sie Freunde ein, sammeln Sie Ideen und bereiten Sie die Reise gemeinsam vor",
    "feature.together.alt": "Einladung und Berechtigungen für Mitreisende",
    "feature.large.kicker": "Große Bildschirme",
    "feature.large.title": "Für große Bildschirme optimiert",
    "feature.large.desc":
      "Nutzen Sie SOMEWHERE bequem auf faltbaren Geräten, Tablets und anderen großen Bildschirmen",
    "feature.large.alt": "SOMEWHERE-Reiseplan auf einem faltbaren Gerät",
    "feature.supplies.kicker": "Packliste",
    "feature.supplies.title": "Gemeinsam packen",
    "feature.supplies.desc": "Haken Sie gemeinsame und persönliche Sachen getrennt ab und fügen Sie gängige Basics auf einmal hinzu",
    "feature.supplies.alt": "Gemeinsame Packliste einer Reise",
    "feature.voucher.kicker": "Tickets",
    "feature.voucher.title": "Buchungen & Tickets",
    "feature.voucher.desc": "Fügen Sie Flugtickets und Unterkunftsbuchungen als Foto oder PDF hinzu, lassen Sie die KI die Details ausfüllen und rufen Sie sie jederzeit ab",
    "feature.voucher.alt": "Detailansicht eines Flugtickets",

    "support.eyebrow": "Enthalten",
    "support.title": "Viele Funktionen",
    "support.account": "Unterstützung für die Kontoverknüpfung",
    "support.platform": "Unterstützung für Android, iOS, iPadOS, macOS und visionOS",
    "support.language":
      "Unterstützt Koreanisch, Englisch, Japanisch, vereinfachtes und traditionelles Chinesisch, Spanisch, Französisch und Deutsch",
    "support.ai": "KI-Reiseplaner",
    "support.weather": "Wettervorhersage für bevorstehende Reisetage",
    "support.duplicate": "Reisen duplizieren und ähnliche Pläne schnell erstellen",

    "a11y.eyebrow": "Barrierefreiheit",
    "a11y.title": "Barrierefreiheit",
    "a11y.darkMode": "Unterstützung für hellen und dunklen Modus",
    "a11y.fontSize": "Schrift- und Anzeigegröße anpassbar",
    "a11y.contrast": "Kontrast anpassbar",
    "a11y.screenReader":
      "Unterstützung für Screenreader (TalkBack, VoiceOver)",

    "pro.eyebrow": "Abonnement",
    "pro.title": "SOMEWHERE PRO",
    "pro.ads": "Werbung entfernen",
    "pro.credits": "Kostenlose Credits pro Woche",
    "pro.friends": "Höhere Grenze für Freundeseinladungen",
    "pro.liveActivities":
      "Live-Aktivitäten (iOS) und Live-Updates · Now bar (Android) auf unterstützten Geräten",
    "pro.moreStorage": "Mehr Reisen, Orte, Fotos, Buchungen & Tickets speichern",
    "pro.expenseImages":
      "Fotos zu Ausgaben und Gemeinschaftskassen hinzufügen",
    "pro.expenseCsv": "Ausgaben als CSV-Datei exportieren",

    "cta.title": "Starten Sie heute Ihre Reise",
    "cta.sub": "Laden Sie SOMEWHERE herunter und erstellen Sie Ihre erste Reise",
    "cta.qr": "Zum Download scannen",

    "footer.developer": "Entwickler",
    "footer.contact": "Kontakt",
    "footer.privacy": "Datenschutzerklärung",
    "footer.terms": "Nutzungsbedingungen",
    "footer.notices": "Mitteilungen",
    "footer.rights": "Reiseplaner-App",
    "footer.copyEmail": "E-Mail-Adresse kopieren",
    "footer.business": "Unternehmensinformationen",
    "footer.businessInfo":
      "Unternehmensname: NP<br />Vertreter: Sejong Lee<br />Unternehmensregisternummer: 545-01-04035<br />Meldungsnummer für den Versandhandel: 2026-Seoul Yangcheon-0818<br />Geschäftsadresse: Room 402, Sinjeong Villa, 25-22 Jungang-ro 45-gil, Yangcheon-gu, Seoul 08060, Republik Korea<br />E-Mail: np@npsomewhere.com",
    "footer.legal":
      "Apple und das Apple-Logo sind Marken von Apple Inc., die in den USA und anderen Ländern eingetragen sind. App Store ist eine Dienstleistungsmarke von Apple Inc. Google Play und das Google-Play-Logo sind Marken von Google LLC.",

    "redirect.auto.title": "Weiterleitung zum Store…",
    "redirect.auto.sub": "Bitte warten Sie einen Moment",
    "redirect.manual.title": "SOMEWHERE herunterladen",
    "redirect.manual.sub": "Wählen Sie den Store für Ihr Gerät",
    "redirect.home": "Startseite",

    "join.documentTitle": "Reiseeinladung",
    "join.title": "Sie wurden eingeladen",
    "join.description":
      "Wenn SOMEWHERE installiert ist, können Sie über die Schaltfläche unten die Reise ansehen und in der App beitreten.",
    "join.open": "In der App öffnen",
    "join.download": "App herunterladen",
    "join.home": "Zur SOMEWHERE-Startseite",
    "error.notFound": "Seite nicht gefunden",
    "error.home": "Startseite",
    "legal.redirect.title": "Weiterleitung zur Datenschutzerklärung",
    "legal.redirect.open": "Datenschutzerklärung öffnen",
  },

  es: {
    "langBanner.message": "Esta página también está disponible en español",
    "langBanner.action": "Ver en español",
    "langBanner.close": "Cerrar",
    "lang.name": "Español",
    "lang.select": "Seleccionar idioma",
    "whatsNew.title": "Novedades",
    "whatsNew.subtitle": "Descubre las novedades de SOMEWHERE",
    "whatsNew.latest": "Nuevo",
    "whatsNew.empty": "Todavía no hay novedades",
    "notices.title": "Avisos",
    "notices.subtitle": "Noticias e información importante sobre SOMEWHERE",
    "notices.empty": "Todavía no hay avisos",
    "notices.back": "Todos los avisos",
    "lang.option.ko": "한국어",
    "lang.option.en": "English",
    "lang.option.ja": "日本語",
    "lang.option.zh-CN": "简体中文",
    "lang.option.zh-TW": "繁體中文",
    "lang.option.fr": "Français",
    "lang.option.de": "Deutsch",
    "lang.option.es": "Español",

    "nav.features": "Funciones",
    "nav.download": "Descargar",
    "store.downloadGroup": "Enlaces de descarga de las tiendas",
    "store.ios": "Descargar en App Store",
    "store.android": "Disponible en Google Play",
    "store.qr": "Ir al código QR",
    "theme.toggle": "Cambiar tema",

    "hero.eyebrow": "Aplicación de viajes con IA SOMEWHERE",
    "hero.title.1": "SOMEWHERE",
    "hero.title.2": "Aplicación de viajes con IA",
    "seo.title": "Planificador de viajes con mapa de rutas y gastos",
    "hero.lead":
      "Crea tu propio viaje sin complicaciones. SOMEWHERE reúne la planificación, las rutas en el mapa y el registro y reparto de gastos en un solo flujo.",
    "hero.note": "Descarga gratis en App Store y Google Play",
    "hero.screen.trips": "Pantalla de viajes de SOMEWHERE",
    "hero.screen.map": "Pantalla de mapa de rutas de SOMEWHERE",
    "hero.screens": "Capturas de pantalla de la aplicación SOMEWHERE",

    "feature.map.kicker": "Mapa",
    "feature.map.title": "Rutas de viaje en un mapa",
    "feature.map.desc":
      "Marca los lugares que quieres visitar y consulta tu ruta de un vistazo",
    "feature.map.alt": "Mapa de viaje de SOMEWHERE en una tableta",
    "feature.live.dynamic.title": "Actividades en directo",
    "feature.live.dynamic.desc":
      "Consulta el estado actual de tu viaje en la Dynamic Island desde la pantalla de inicio (disponible con SOMEWHERE PRO)",
    "feature.live.dynamic.alt":
      "Estado actual del viaje en la Dynamic Island de la pantalla de inicio",
    "feature.live.lock.title": "Actividades en directo",
    "feature.live.lock.desc":
      "Consulta el estado actual de tu viaje de un vistazo en la pantalla bloqueada (disponible con SOMEWHERE PRO)",
    "feature.live.lock.alt":
      "Estado actual del viaje en la parte inferior de la pantalla bloqueada",
    "feature.expense.kicker": "Gastos",
    "feature.expense.title": "Gastos y reparto",
    "feature.expense.desc":
      "Registra tus gastos de viaje y calcula fácilmente cuánto enviar a tus amigos",
    "feature.expense.alt": "Pantalla de gastos y reparto de un viaje",
    "feature.more.map": "Descubre el mapa de rutas",
    "feature.more.expense": "Descubre cómo dividir gastos",
    "feature.more.together": "Descubre la planificación en grupo",
    "feature.more.packing": "Descubre las listas de equipaje",
    "feature.more.vouchers": "Descubre las reservas y billetes",
    "feature.together.kicker": "Juntos",
    "feature.together.title": "Planifiquen viajes juntos",
    "feature.together.desc":
      "Invita a tus amigos, reúne ideas y preparen el viaje juntos",
    "feature.together.alt": "Pantalla de invitación y permisos de compañeros de viaje",
    "feature.large.kicker": "Pantallas grandes",
    "feature.large.title": "Optimizada para pantallas grandes",
    "feature.large.desc":
      "Usa SOMEWHERE cómodamente en dispositivos plegables, tabletas y otras pantallas grandes",
    "feature.large.alt": "Pantalla de itinerario de SOMEWHERE en un dispositivo plegable",
    "feature.supplies.kicker": "Equipaje",
    "feature.supplies.title": "Preparar el equipaje juntos",
    "feature.supplies.desc": "Marca por separado lo compartido y lo personal, y añade lo esencial de una vez",
    "feature.supplies.alt": "Pantalla de la lista de equipaje compartida",
    "feature.voucher.kicker": "Billetes",
    "feature.voucher.title": "Reservas y billetes",
    "feature.voucher.desc": "Añade billetes de avión y reservas de alojamiento como foto o PDF, deja que la IA rellene los datos y consúltalos cuando los necesites",
    "feature.voucher.alt": "Pantalla de detalle de un billete de avión",

    "support.eyebrow": "Incluye",
    "support.title": "Muchas funciones",
    "support.account": "Compatible con la vinculación de cuentas",
    "support.platform": "Compatible con Android, iOS, iPadOS, macOS y visionOS",
    "support.language":
      "Disponible en coreano, inglés, japonés, chino simplificado, chino tradicional, español, francés y alemán",
    "support.ai": "Planificador de viajes con IA",
    "support.weather": "Previsión del tiempo para los próximos días del viaje",
    "support.duplicate": "Duplica un viaje para planear uno parecido",

    "a11y.eyebrow": "Accesibilidad",
    "a11y.title": "Accesibilidad",
    "a11y.darkMode": "Compatibilidad con modo claro y oscuro",
    "a11y.fontSize": "Tamaño de fuente y pantalla ajustable",
    "a11y.contrast": "Contraste ajustable",
    "a11y.screenReader":
      "Compatibilidad con lectores de pantalla (TalkBack, VoiceOver)",

    "pro.eyebrow": "Suscripción",
    "pro.title": "SOMEWHERE PRO",
    "pro.ads": "Quitar anuncios",
    "pro.credits": "Créditos gratis cada semana",
    "pro.friends": "Más invitaciones de amigos",
    "pro.liveActivities":
      "Actividades en directo (iOS) y Actualizaciones en vivo · Now bar (Android) en dispositivos compatibles",
    "pro.moreStorage": "Guarda más viajes, lugares, fotos, reservas y billetes",
    "pro.expenseImages": "Añade fotos a gastos y fondos comunes",
    "pro.expenseCsv": "Exporta los gastos en formato CSV",

    "cta.title": "Empieza tu viaje hoy",
    "cta.sub": "Descarga SOMEWHERE y crea tu primer viaje",
    "cta.qr": "Escanea para descargar",

    "footer.developer": "Desarrollador",
    "footer.contact": "Contacto",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos del servicio",
    "footer.notices": "Avisos",
    "footer.rights": "Aplicación de viajes",
    "footer.copyEmail": "Copiar dirección de correo",
    "footer.business": "Información de la empresa",
    "footer.businessInfo":
      "Nombre de la empresa: NP<br />Representante: Sejong Lee<br />Número de registro empresarial: 545-01-04035<br />Número de declaración de venta por correo: 2026-Seoul Yangcheon-0818<br />Domicilio social: Room 402, Sinjeong Villa, 25-22 Jungang-ro 45-gil, Yangcheon-gu, Seúl 08060, República de Corea<br />Correo: np@npsomewhere.com",
    "footer.legal":
      "Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. y otros países. App Store es una marca de servicio de Apple Inc. Google Play y el logotipo de Google Play son marcas comerciales de Google LLC.",

    "redirect.auto.title": "Te llevamos a la tienda…",
    "redirect.auto.sub": "Espera un momento",
    "redirect.manual.title": "Descargar SOMEWHERE",
    "redirect.manual.sub": "Elige la tienda para tu dispositivo",
    "redirect.home": "Inicio",

    "join.documentTitle": "Invitación a un viaje",
    "join.title": "Te han invitado",
    "join.description":
      "Si SOMEWHERE está instalado, usa el botón de abajo para consultar el viaje y unirte desde la aplicación.",
    "join.open": "Abrir en la aplicación",
    "join.download": "Descargar la aplicación",
    "join.home": "Ir al inicio de SOMEWHERE",
    "error.notFound": "No se ha encontrado la página",
    "error.home": "Inicio",
    "legal.redirect.title": "Te llevamos a la política de privacidad",
    "legal.redirect.open": "Abrir la política de privacidad",
  },
};

const SUPPORTED = ["ko", "en", "ja", "zh-CN", "zh-TW", "fr", "de", "es"];
const STORAGE_KEY = "somewhere-lang";
const EXPLICIT_STORAGE_KEY = "somewhere-lang-explicit";

function normalizeLang(value) {
  const raw = String(value || "").trim().replace(/_/g, "-").toLowerCase();
  if (!raw) return null;

  const exact = SUPPORTED.find((lang) => lang.toLowerCase() === raw);
  if (exact) return exact;
  if (raw.startsWith("ko")) return "ko";
  if (raw.startsWith("ja")) return "ja";
  if (raw.startsWith("fr")) return "fr";
  if (raw.startsWith("de")) return "de";
  if (raw.startsWith("es")) return "es";
  if (raw.startsWith("zh")) {
    return /(?:-tw|-hk|-mo|hant)/.test(raw) ? "zh-TW" : "zh-CN";
  }
  if (raw.startsWith("en")) return "en";
  return null;
}

function detectLang() {
  // Each localized landing URL remains fixed for people and crawlers.
  const pageLang = normalizeLang(document.documentElement.getAttribute("data-page-lang"));
  if (pageLang) return pageLang;
  // Legal pages use their region/document selector as the language source of truth.
  const legalDocumentLang = normalizeLang(document.documentElement.dataset.legalLang);
  if (document.documentElement.hasAttribute("data-legal-document") && legalDocumentLang) {
    return legalDocumentLang;
  }
  let explicit = null;
  let saved = null;
  try {
    explicit = normalizeLang(localStorage.getItem(EXPLICIT_STORAGE_KEY));
    saved = normalizeLang(localStorage.getItem(STORAGE_KEY));
  } catch (_) { /* Optional preference. */ }
  if (explicit) return explicit;

  const preferences = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "en"];
  let browserLanguage = null;
  for (const preference of preferences) {
    browserLanguage = normalizeLang(preference);
    if (browserLanguage) break;
  }

  // Before locale routing existed, the Korean root URL was persisted as though
  // the visitor had selected Korean. Treat that legacy value as a default.
  if (saved && saved !== "ko") return saved;
  return browserLanguage || saved || "en";
}

function getString(key, lang = window.__lang || "en") {
  const dict = I18N[lang] || I18N.en;
  return dict[key] != null ? dict[key] : I18N.en[key] || "";
}

function updateDocumentTitle(lang) {
  const path = window.location.pathname;
  const legalRegion = document.documentElement.dataset.legalRegion;
  const keepRegionalLegalTitle = legalRegion && legalRegion !== "kr";
  if (!keepRegionalLegalTitle && path.endsWith("/privacy.html")) {
    document.title = `SOMEWHERE — ${lang === "ko" ? "대한민국 개인정보처리방침" : "Korea Privacy Policy"}`;
    return;
  }
  if (!keepRegionalLegalTitle && path.endsWith("/terms.html")) {
    document.title = `SOMEWHERE — ${lang === "ko" ? "대한민국 이용약관" : "Korea Terms of Service"}`;
    return;
  }
  if (path.endsWith("/download.html")) {
    document.title = `SOMEWHERE — ${getString("redirect.manual.title", lang)}`;
    return;
  }
  if (document.documentElement.hasAttribute("data-page-lang") || path.endsWith("/index.html") || path === "/") {
    document.title = `SOMEWHERE — ${getString("seo.title", lang)}`;
  }
}

function applyLang(requestedLang) {
  const lang = normalizeLang(requestedLang) || "en";
  document.documentElement.lang = lang;
  window.__lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getString(key, lang);
    if (value !== "") el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    const value = getString(key, lang);
    if (value !== "") el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    const value = getString(key, lang);
    if (value !== "") el.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    const value = getString(key, lang);
    if (value !== "") el.setAttribute("title", value);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    const value = getString(key, lang);
    if (value !== "") el.setAttribute("alt", value);
  });
  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const key = el.getAttribute("data-i18n-content");
    const value = getString(key, lang);
    if (value !== "") el.setAttribute("content", value);
  });

  // Screenshot artwork exists for every supported language; file names use the
  // lowercase language code (e.g. zh-cn).
  document.querySelectorAll("[data-i18n-src]").forEach((el) => {
    el.setAttribute(
      "src",
      el.getAttribute("data-i18n-src").replace("{lang}", lang.toLowerCase())
    );
  });

  document.querySelectorAll("[data-action='change-lang']").forEach((select) => {
    select.value = lang;
  });
  document.querySelectorAll("[data-language-value]").forEach((el) => {
    el.textContent = getString(`lang.option.${lang}`, lang);
  });

  document.querySelectorAll("a[href='index.html'], a[data-home-link]").forEach((el) => {
    el.setAttribute("data-home-link", "");
    el.setAttribute("href", lang === "ko" ? "/" : `/${lang.toLowerCase()}/`);
  });

  updateDocumentTitle(lang);

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* Optional preference. */ }

  // Let page-specific components (for example, the legal version picker)
  // react without duplicating language state.
  window.dispatchEvent(new CustomEvent("somewhere:langchange", { detail: lang }));
}

function selectLang(requestedLang) {
  const lang = normalizeLang(requestedLang) || "en";
  try { localStorage.setItem(EXPLICIT_STORAGE_KEY, lang); } catch (_) { /* Optional preference. */ }
  if (document.documentElement.hasAttribute("data-page-lang")) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* Optional preference. */ }
    const path = lang === "ko" ? "/" : `/${lang.toLowerCase()}/`;
    if (lang !== document.documentElement.getAttribute("data-page-lang")) {
      window.location.assign(path + window.location.search + window.location.hash);
    }
    return;
  }
  applyLang(lang);
}

function toggleLang() {
  const currentIndex = SUPPORTED.indexOf(window.__lang);
  const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % SUPPORTED.length;
  selectLang(SUPPORTED[nextIndex]);
}

window.SomewhereI18N = {
  supported: SUPPORTED.slice(),
  detectLang,
  normalizeLang,
  get: getString,
  applyLang,
  selectLang,
  toggleLang,
};
