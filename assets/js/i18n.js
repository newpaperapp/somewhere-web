/* ============================================================
   Somewhere — i18n
   - Auto-detects browser language and persists the selected language.
   - Applies text to any element with [data-i18n] (and common attr variants).
   - Legal documents intentionally remain Korean / English only.
   ============================================================ */

const I18N = {
  ko: {
    "lang.name": "한국어",
    "lang.select": "언어 선택",
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
    "theme.toggle": "테마 전환",

    "hero.eyebrow": "Somewhere 여행 계획 앱",
    "hero.title.1": "Somewhere",
    "hero.title.2": "여행 계획 앱",
    "hero.lead":
      "나만의 여행 계획을 손쉽게 세워보세요. 여행 계획부터 지도 동선 확인, 소비 내역 기록 및 정산까지 여행 준비에 필요한 흐름을 한 곳에 모아드려요.",
    "hero.note": "App Store · Google Play 무료 다운로드",
    "hero.screen.trips": "Somewhere 여행 목록 화면",
    "hero.screen.map": "Somewhere 지도 동선 화면",
    "hero.screens": "Somewhere 앱 스크린샷",

    "feature.map.kicker": "지도",
    "feature.map.title": "지도로 확인하는 여행 동선",
    "feature.map.desc":
      "가고 싶은 장소를 지도에 표시하고, 이동 동선을 한눈에 확인하세요",
    "feature.map.alt": "태블릿에서 보는 Somewhere 여행 지도 화면",
    "feature.live.dynamic.title": "실시간 현황",
    "feature.live.dynamic.desc":
      "홈 화면의 Dynamic Island에서 현재 여행 현황을 확인하세요 (Somewhere Pro에서 이용 가능)",
    "feature.live.dynamic.alt":
      "홈 화면의 Dynamic Island에서 확인하는 현재 여행 현황",
    "feature.live.lock.title": "실시간 현황",
    "feature.live.lock.desc":
      "잠금 화면에서 현재 여행 현황을 한눈에 확인하세요 (Somewhere Pro에서 이용 가능)",
    "feature.live.lock.alt": "잠금 화면 하단에서 확인하는 현재 여행 현황",
    "feature.expense.kicker": "지출",
    "feature.expense.title": "지출 내역과 정산",
    "feature.expense.desc":
      "여행의 소비 내역을 기록하고, 정산 기능으로 친구에게 얼마를 보낼지 손쉽게 확인하세요",
    "feature.expense.alt": "여행 소비 지출 내역 및 정산 화면",
    "feature.together.kicker": "협업",
    "feature.together.title": "함께 만드는 여행",
    "feature.together.desc":
      "친구를 초대해 서로 아이디어를 더하고, 같이 여행을 준비하세요",
    "feature.together.alt": "여행 친구 초대 및 권한 화면",
    "feature.large.kicker": "대화면",
    "feature.large.title": "대화면 최적화 UI",
    "feature.large.desc":
      "폴더블, 태블릿 등 큰 화면에서도 편리하게 이용해보세요",
    "feature.large.alt": "폴더블에서 보는 Somewhere 여행 일정 화면",

    "support.eyebrow": "지원 기능",
    "support.title": "다양한 기능",
    "support.account": "계정 연동 지원",
    "support.platform": "Android, iOS, iPadOS, macOS 및 visionOS 지원",
    "support.language":
      "한국어, 영어, 일본어, 중국어(간체·번체), 스페인어, 프랑스어, 독일어 지원",

    "a11y.eyebrow": "접근성",
    "a11y.title": "접근성",
    "a11y.darkMode": "라이트/다크 모드 지원",
    "a11y.fontSize": "글꼴 및 디스플레이 크기 조절",
    "a11y.screenReader": "스크린 리더 (VoiceOver) 지원",

    "pro.eyebrow": "구독",
    "pro.title": "Somewhere Pro 구독제",
    "pro.ads": "광고 제거",
    "pro.credits": "매주 300 크레딧 제공",
    "pro.liveActivities": "실시간 현황",
    "pro.trips": "최대 여행 수 증가",
    "pro.friends": "친구 초대 수 증가",
    "pro.expenseImages": "소비 내역 영수증·사진 첨부",

    "cta.title": "지금 여행을 시작하세요",
    "cta.sub": "지금 Somewhere를 다운로드하고 첫 여행을 만들어 보세요",
    "cta.qr": "카메라로 스캔해서 다운로드",

    "footer.developer": "개발자",
    "footer.contact": "문의",
    "footer.privacy": "개인정보처리방침",
    "footer.terms": "서비스 이용약관",
    "footer.rights": "여행 계획 앱",
    "footer.copyEmail": "이메일 주소 복사",
    "footer.business": "사업자 정보",
    "footer.businessInfo":
      "상호: 엔피(NP)<br />대표자: 이세종<br />사업자등록번호: 545-01-04035<br />통신판매업 신고번호: 제 2026-서울양천-0818 호<br />사업장 소재지: 서울특별시 양천구 중앙로45길 25-22, 402호(신정동, 신정빌라)<br />이메일: contact@npsomewhere.com",
    "footer.legal":
      "Apple 및 Apple 로고는 미국 및 기타 국가에 등록된 Apple Inc.의 상표입니다. App Store는 Apple Inc.의 서비스 상표입니다. Google Play 및 Google Play 로고는 Google LLC의 상표입니다.",

    "redirect.auto.title": "스토어로 이동 중…",
    "redirect.auto.sub": "잠시만 기다려 주세요",
    "redirect.manual.title": "Somewhere 다운로드",
    "redirect.manual.sub": "사용 중인 기기의 스토어를 선택하세요",
    "redirect.home": "홈으로",

    "join.documentTitle": "여행 초대",
    "join.title": "여행 초대를 받았어요",
    "join.description":
      "Somewhere 앱이 설치되어 있다면 아래 버튼을 눌러 여행 정보를 확인하고 참가할 수 있습니다.",
    "join.open": "앱에서 열기",
    "join.download": "앱 다운로드",
    "join.home": "Somewhere 홈으로",
    "error.notFound": "페이지를 찾을 수 없습니다",
    "error.home": "홈으로",
  },

  en: {
    "lang.name": "English",
    "lang.select": "Select language",
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
    "theme.toggle": "Toggle theme",

    "hero.eyebrow": "Somewhere Trip Planner App",
    "hero.title.1": "Somewhere",
    "hero.title.2": "Trip Planner App",
    "hero.lead":
      "Build your own trip without the busywork. Somewhere brings trip planning, route maps, and expense tracking & settlement into one planning flow.",
    "hero.note": "Free on the App Store and Google Play",
    "hero.screen.trips": "Somewhere trips screen",
    "hero.screen.map": "Somewhere route map screen",
    "hero.screens": "Somewhere app screenshots",

    "feature.map.kicker": "Map",
    "feature.map.title": "Travel routes on a map",
    "feature.map.desc":
      "Mark the places you want to visit and see your travel route at a glance",
    "feature.map.alt": "Somewhere trip map on a tablet",
    "feature.live.dynamic.title": "Live Activities",
    "feature.live.dynamic.desc":
      "See your current trip status in the Dynamic Island from your Home Screen (Available on Somewhere Pro)",
    "feature.live.dynamic.alt":
      "Current trip status in the Dynamic Island on the Home Screen",
    "feature.live.lock.title": "Live Activities",
    "feature.live.lock.desc":
      "View your current trip status at a glance on your Lock Screen (Available on Somewhere Pro)",
    "feature.live.lock.alt":
      "Current trip status at the bottom of the Lock Screen",
    "feature.expense.kicker": "Expense",
    "feature.expense.title": "Expenses & Settlement",
    "feature.expense.desc":
      "Record your travel spending and easily calculate settlement amounts to send to friends",
    "feature.expense.alt": "Travel expense details and settlement screen",
    "feature.together.kicker": "Together",
    "feature.together.title": "Plan trips together",
    "feature.together.desc":
      "Invite friends, collect ideas, and prepare for the trip together",
    "feature.together.alt": "Trip mates invitation and permission screen",
    "feature.large.kicker": "Large screens",
    "feature.large.title": "Optimized for bigger displays",
    "feature.large.desc":
      "Use Somewhere comfortably on foldables, tablets, and other large screens",
    "feature.large.alt": "Somewhere itinerary screen on a foldable device",

    "support.eyebrow": "Included",
    "support.title": "Various features",
    "support.account": "Account linking support",
    "support.platform": "Android, iOS, iPadOS, macOS and visionOS support",
    "support.language":
      "Supports Korean, English, Japanese, Chinese (Simplified & Traditional), Spanish, French, German",

    "a11y.eyebrow": "Accessibility",
    "a11y.title": "Accessibility",
    "a11y.darkMode": "Light and dark mode support",
    "a11y.fontSize": "Adjustable font & display size",
    "a11y.screenReader": "Screen reader (VoiceOver) support",

    "pro.eyebrow": "Subscription",
    "pro.title": "Somewhere Pro",
    "pro.ads": "Remove ads",
    "pro.credits": "300 credits provided weekly",
    "pro.liveActivities": "Live Activities",
    "pro.trips": "Increased maximum trips",
    "pro.friends": "Increased friend invite limit",
    "pro.expenseImages": "Attach expense receipts & photos",

    "cta.title": "Start your journey today",
    "cta.sub": "Download Somewhere and create your first trip",
    "cta.qr": "Scan to download",

    "footer.developer": "Developer",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "Trip Planner App",
    "footer.copyEmail": "Copy email address",
    "footer.business": "Business information",
    "footer.businessInfo":
      "Business name: NP<br />Representative: Sejong Lee<br />Business registration number: 545-01-04035<br />Mail-order business report number: 2026-Seoul Yangcheon-0818<br />Business address: 25-22 Jungang-ro 45-gil, Yangcheon-gu, Seoul, 08060, Republic of Korea<br />Email: contact@npsomewhere.com",
    "footer.legal":
      "Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.",

    "redirect.auto.title": "Taking you to the store…",
    "redirect.auto.sub": "Please wait a moment",
    "redirect.manual.title": "Download Somewhere",
    "redirect.manual.sub": "Choose the store for your device",
    "redirect.home": "Home",

    "join.documentTitle": "Trip Invitation",
    "join.title": "You've been invited",
    "join.description":
      "If Somewhere is installed, use the button below to review and join the trip in the app.",
    "join.open": "Open in App",
    "join.download": "Download App",
    "join.home": "Go to Somewhere Home",
    "error.notFound": "Page not found",
    "error.home": "Home",
  },

  ja: {
    "lang.name": "日本語",
    "lang.select": "言語を選択",
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
    "theme.toggle": "テーマを切り替え",

    "hero.eyebrow": "Somewhere 旅行計画アプリ",
    "hero.title.1": "Somewhere",
    "hero.title.2": "旅行計画アプリ",
    "hero.lead":
      "面倒な作業なしで、自分だけの旅行を計画できます。Somewhereは、旅行計画からルートマップ、支出の記録と精算まで、旅の準備に必要な流れをひとつにまとめます。",
    "hero.note": "App Store・Google Playで無料ダウンロード",
    "hero.screen.trips": "Somewhereの旅行一覧画面",
    "hero.screen.map": "Somewhereのルートマップ画面",
    "hero.screens": "Somewhereのアプリ画面",

    "feature.map.kicker": "地図",
    "feature.map.title": "地図で見る旅行ルート",
    "feature.map.desc":
      "行きたい場所を地図に登録して、移動ルートをひと目で確認できます",
    "feature.map.alt": "タブレットで見るSomewhereの旅行マップ",
    "feature.live.dynamic.title": "リアルタイム情報",
    "feature.live.dynamic.desc":
      "ホーム画面のDynamic Islandで現在の旅行状況を確認できます（Somewhere Proで利用可能）",
    "feature.live.dynamic.alt":
      "ホーム画面のDynamic Islandに表示された現在の旅行状況",
    "feature.live.lock.title": "リアルタイム情報",
    "feature.live.lock.desc":
      "ロック画面で現在の旅行状況をひと目で確認できます（Somewhere Proで利用可能）",
    "feature.live.lock.alt": "ロック画面下部に表示された現在の旅行状況",
    "feature.expense.kicker": "支出",
    "feature.expense.title": "支出と精算",
    "feature.expense.desc":
      "旅行中の支出を記録し、友だちに送る金額を精算機能で簡単に確認できます",
    "feature.expense.alt": "旅行の支出明細と精算画面",
    "feature.together.kicker": "共同作業",
    "feature.together.title": "みんなで作る旅",
    "feature.together.desc":
      "友だちを招待してアイデアを出し合い、一緒に旅行を準備できます",
    "feature.together.alt": "旅行メンバーの招待と権限設定画面",
    "feature.large.kicker": "大画面",
    "feature.large.title": "大画面に最適化されたUI",
    "feature.large.desc":
      "折りたたみスマートフォンやタブレットなど、大きな画面でも快適に使えます",
    "feature.large.alt": "折りたたみスマートフォンで見るSomewhereの旅行日程画面",

    "support.eyebrow": "対応機能",
    "support.title": "さまざまな機能",
    "support.account": "アカウント連携に対応",
    "support.platform": "Android、iOS、iPadOS、macOS、visionOSに対応",
    "support.language":
      "韓国語、英語、日本語、中国語（簡体字・繁体字）、スペイン語、フランス語、ドイツ語に対応",

    "a11y.eyebrow": "アクセシビリティ",
    "a11y.title": "アクセシビリティ",
    "a11y.darkMode": "ライト／ダークモードに対応",
    "a11y.fontSize": "フォントと表示サイズを調整可能",
    "a11y.screenReader": "スクリーンリーダー（VoiceOver）に対応",

    "pro.eyebrow": "サブスクリプション",
    "pro.title": "Somewhere Pro",
    "pro.ads": "広告を削除",
    "pro.credits": "毎週300クレジットを提供",
    "pro.liveActivities": "リアルタイム情報",
    "pro.trips": "作成できる旅行数を拡大",
    "pro.friends": "友だち招待数を拡大",
    "pro.expenseImages": "支出にレシートや写真を添付",

    "cta.title": "今日から旅を始めよう",
    "cta.sub": "Somewhereをダウンロードして、最初の旅行を作りましょう",
    "cta.qr": "カメラでスキャンしてダウンロード",

    "footer.developer": "開発者",
    "footer.contact": "お問い合わせ",
    "footer.privacy": "プライバシーポリシー",
    "footer.terms": "利用規約",
    "footer.rights": "旅行計画アプリ",
    "footer.copyEmail": "メールアドレスをコピー",
    "footer.business": "事業者情報",
    "footer.businessInfo":
      "商号: NP<br />代表者: Sejong Lee<br />事業者登録番号: 545-01-04035<br />通信販売業申告番号: 2026-Seoul Yangcheon-0818<br />事業所所在地: 25-22 Jungang-ro 45-gil, Yangcheon-gu, Seoul, 08060, Republic of Korea<br />メール: contact@npsomewhere.com",
    "footer.legal":
      "AppleおよびAppleロゴは、米国その他の国で登録されたApple Inc.の商標です。App StoreはApple Inc.のサービスマークです。Google PlayおよびGoogle PlayロゴはGoogle LLCの商標です。",

    "redirect.auto.title": "ストアへ移動しています…",
    "redirect.auto.sub": "しばらくお待ちください",
    "redirect.manual.title": "Somewhereをダウンロード",
    "redirect.manual.sub": "お使いのデバイスのストアを選択してください",
    "redirect.home": "ホームへ",

    "join.documentTitle": "旅行への招待",
    "join.title": "旅行に招待されました",
    "join.description":
      "Somewhereがインストールされている場合は、下のボタンから旅行情報を確認して参加できます。",
    "join.open": "アプリで開く",
    "join.download": "アプリをダウンロード",
    "join.home": "Somewhereホームへ",
    "error.notFound": "ページが見つかりません",
    "error.home": "ホームへ",
  },

  "zh-CN": {
    "lang.name": "简体中文",
    "lang.select": "选择语言",
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
    "theme.toggle": "切换主题",

    "hero.eyebrow": "Somewhere 旅行规划应用",
    "hero.title.1": "Somewhere",
    "hero.title.2": "旅行规划应用",
    "hero.lead":
      "轻松制定专属旅行计划。Somewhere 将行程规划、路线地图、消费记录与结算整合在一个流程中。",
    "hero.note": "App Store · Google Play 免费下载",
    "hero.screen.trips": "Somewhere 旅行列表界面",
    "hero.screen.map": "Somewhere 路线地图界面",
    "hero.screens": "Somewhere 应用界面截图",

    "feature.map.kicker": "地图",
    "feature.map.title": "在地图上查看旅行路线",
    "feature.map.desc": "在地图上标记想去的地点，一眼查看出行路线",
    "feature.map.alt": "平板电脑上的 Somewhere 旅行地图",
    "feature.live.dynamic.title": "实时状态",
    "feature.live.dynamic.desc":
      "在主屏幕的灵动岛中查看当前旅行状态（Somewhere Pro 专享）",
    "feature.live.dynamic.alt": "主屏幕灵动岛中的当前旅行状态",
    "feature.live.lock.title": "实时状态",
    "feature.live.lock.desc":
      "在锁定屏幕上一眼查看当前旅行状态（Somewhere Pro 专享）",
    "feature.live.lock.alt": "锁定屏幕底部的当前旅行状态",
    "feature.expense.kicker": "支出",
    "feature.expense.title": "支出记录与结算",
    "feature.expense.desc": "记录旅行支出，轻松计算需要发给朋友的结算金额",
    "feature.expense.alt": "旅行支出明细与结算界面",
    "feature.together.kicker": "协作",
    "feature.together.title": "一起规划旅行",
    "feature.together.desc": "邀请朋友分享想法，一起准备旅行",
    "feature.together.alt": "旅行伙伴邀请与权限界面",
    "feature.large.kicker": "大屏幕",
    "feature.large.title": "为大屏幕优化的界面",
    "feature.large.desc": "在折叠屏、平板电脑等大屏幕上也能舒适使用",
    "feature.large.alt": "折叠屏上的 Somewhere 旅行日程界面",

    "support.eyebrow": "支持功能",
    "support.title": "丰富的功能",
    "support.account": "支持账号关联",
    "support.platform": "支持 Android、iOS、iPadOS、macOS 和 visionOS",
    "support.language":
      "支持韩语、英语、日语、简体中文、繁体中文、西班牙语、法语和德语",

    "a11y.eyebrow": "无障碍",
    "a11y.title": "无障碍",
    "a11y.darkMode": "支持浅色和深色模式",
    "a11y.fontSize": "可调整字体和显示大小",
    "a11y.screenReader": "支持屏幕阅读器（VoiceOver）",

    "pro.eyebrow": "订阅",
    "pro.title": "Somewhere Pro",
    "pro.ads": "移除广告",
    "pro.credits": "每周提供 300 个积分",
    "pro.liveActivities": "实时状态",
    "pro.trips": "增加可创建的旅行数量",
    "pro.friends": "增加好友邀请数量",
    "pro.expenseImages": "为支出添加收据和照片",

    "cta.title": "今天就开始旅行",
    "cta.sub": "下载 Somewhere，创建你的第一次旅行",
    "cta.qr": "用相机扫描下载",

    "footer.developer": "开发者",
    "footer.contact": "联系",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.rights": "旅行规划应用",
    "footer.copyEmail": "复制电子邮箱地址",
    "footer.business": "企业信息",
    "footer.businessInfo":
      "企业名称：NP<br />代表人：Sejong Lee<br />营业执照号：545-01-04035<br />网络销售业务申报编号：2026-Seoul Yangcheon-0818<br />营业地址：25-22 Jungang-ro 45-gil, Yangcheon-gu, Seoul, 08060, Republic of Korea<br />电子邮箱：contact@npsomewhere.com",
    "footer.legal":
      "Apple 及 Apple 标志是 Apple Inc. 在美国和其他国家注册的商标。App Store 是 Apple Inc. 的服务标志。Google Play 及 Google Play 标志是 Google LLC 的商标。",

    "redirect.auto.title": "正在前往应用商店…",
    "redirect.auto.sub": "请稍候",
    "redirect.manual.title": "下载 Somewhere",
    "redirect.manual.sub": "请选择适用于你设备的应用商店",
    "redirect.home": "返回首页",

    "join.documentTitle": "旅行邀请",
    "join.title": "你收到了一份旅行邀请",
    "join.description":
      "如果已安装 Somewhere，请点击下方按钮查看旅行信息并加入旅行。",
    "join.open": "在应用中打开",
    "join.download": "下载应用",
    "join.home": "前往 Somewhere 首页",
    "error.notFound": "找不到页面",
    "error.home": "返回首页",
  },

  "zh-TW": {
    "lang.name": "繁體中文",
    "lang.select": "選擇語言",
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
    "theme.toggle": "切換主題",

    "hero.eyebrow": "Somewhere 旅行規劃應用程式",
    "hero.title.1": "Somewhere",
    "hero.title.2": "旅行規劃應用程式",
    "hero.lead":
      "輕鬆規劃專屬旅程。Somewhere 將行程規劃、路線地圖、消費記錄與結算整合在一個流程中。",
    "hero.note": "App Store · Google Play 免費下載",
    "hero.screen.trips": "Somewhere 旅程列表畫面",
    "hero.screen.map": "Somewhere 路線地圖畫面",
    "hero.screens": "Somewhere 應用程式畫面截圖",

    "feature.map.kicker": "地圖",
    "feature.map.title": "在地圖上查看旅程路線",
    "feature.map.desc": "在地圖上標記想去的地點，一眼查看移動路線",
    "feature.map.alt": "平板電腦上的 Somewhere 旅程地圖",
    "feature.live.dynamic.title": "即時狀態",
    "feature.live.dynamic.desc":
      "在主畫面的動態島查看目前的旅程狀態（Somewhere Pro 專享）",
    "feature.live.dynamic.alt": "主畫面動態島中的目前旅程狀態",
    "feature.live.lock.title": "即時狀態",
    "feature.live.lock.desc":
      "在鎖定畫面上一眼查看目前的旅程狀態（Somewhere Pro 專享）",
    "feature.live.lock.alt": "鎖定畫面底部的目前旅程狀態",
    "feature.expense.kicker": "支出",
    "feature.expense.title": "支出記錄與結算",
    "feature.expense.desc": "記錄旅程支出，輕鬆計算需要傳給朋友的結算金額",
    "feature.expense.alt": "旅程支出明細與結算畫面",
    "feature.together.kicker": "協作",
    "feature.together.title": "一起規劃旅程",
    "feature.together.desc": "邀請朋友分享想法，一起準備旅程",
    "feature.together.alt": "旅伴邀請與權限畫面",
    "feature.large.kicker": "大螢幕",
    "feature.large.title": "為大螢幕最佳化的介面",
    "feature.large.desc": "在摺疊螢幕、平板電腦等大螢幕上也能舒適使用",
    "feature.large.alt": "摺疊螢幕上的 Somewhere 旅程行程畫面",

    "support.eyebrow": "支援功能",
    "support.title": "豐富的功能",
    "support.account": "支援帳號連結",
    "support.platform": "支援 Android、iOS、iPadOS、macOS 和 visionOS",
    "support.language":
      "支援韓語、英語、日語、簡體中文、繁體中文、西班牙語、法語和德語",

    "a11y.eyebrow": "無障礙功能",
    "a11y.title": "無障礙功能",
    "a11y.darkMode": "支援淺色與深色模式",
    "a11y.fontSize": "可調整字型與顯示大小",
    "a11y.screenReader": "支援螢幕閱讀器（VoiceOver）",

    "pro.eyebrow": "訂閱",
    "pro.title": "Somewhere Pro",
    "pro.ads": "移除廣告",
    "pro.credits": "每週提供 300 個點數",
    "pro.liveActivities": "即時狀態",
    "pro.trips": "增加可建立的旅程數量",
    "pro.friends": "增加好友邀請數量",
    "pro.expenseImages": "為支出附加收據與照片",

    "cta.title": "今天就開始旅行",
    "cta.sub": "下載 Somewhere，建立你的第一趟旅程",
    "cta.qr": "用相機掃描下載",

    "footer.developer": "開發者",
    "footer.contact": "聯絡",
    "footer.privacy": "隱私權政策",
    "footer.terms": "服務條款",
    "footer.rights": "旅行規劃應用程式",
    "footer.copyEmail": "複製電子郵件地址",
    "footer.business": "企業資訊",
    "footer.businessInfo":
      "企業名稱：NP<br />代表人：Sejong Lee<br />營業執照號碼：545-01-04035<br />網路銷售業務申報編號：2026-Seoul Yangcheon-0818<br />營業地址：25-22 Jungang-ro 45-gil, Yangcheon-gu, Seoul, 08060, Republic of Korea<br />電子郵件：contact@npsomewhere.com",
    "footer.legal":
      "Apple 及 Apple 標誌是 Apple Inc. 在美國及其他國家註冊的商標。App Store 是 Apple Inc. 的服務標章。Google Play 及 Google Play 標誌是 Google LLC 的商標。",

    "redirect.auto.title": "正在前往應用程式商店…",
    "redirect.auto.sub": "請稍候",
    "redirect.manual.title": "下載 Somewhere",
    "redirect.manual.sub": "請選擇適用於你裝置的應用程式商店",
    "redirect.home": "返回首頁",

    "join.documentTitle": "旅程邀請",
    "join.title": "你收到了一份旅程邀請",
    "join.description":
      "如果已安裝 Somewhere，請點選下方按鈕查看旅程資訊並加入旅程。",
    "join.open": "在應用程式中開啟",
    "join.download": "下載應用程式",
    "join.home": "前往 Somewhere 首頁",
    "error.notFound": "找不到頁面",
    "error.home": "返回首頁",
  },

  fr: {
    "lang.name": "Français",
    "lang.select": "Choisir la langue",
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
    "theme.toggle": "Changer de thème",

    "hero.eyebrow": "Application de voyage Somewhere",
    "hero.title.1": "Somewhere",
    "hero.title.2": "Application de voyage",
    "hero.lead":
      "Créez facilement votre propre voyage. Somewhere réunit la planification, les itinéraires sur carte et le suivi des dépenses avec le partage des frais dans un seul parcours.",
    "hero.note": "Téléchargement gratuit sur l’App Store et Google Play",
    "hero.screen.trips": "Écran des voyages Somewhere",
    "hero.screen.map": "Écran de carte d’itinéraire Somewhere",
    "hero.screens": "Captures d’écran de l’application Somewhere",

    "feature.map.kicker": "Carte",
    "feature.map.title": "Vos itinéraires sur une carte",
    "feature.map.desc":
      "Marquez les endroits à visiter et visualisez votre itinéraire en un coup d’œil",
    "feature.map.alt": "Carte de voyage Somewhere sur une tablette",
    "feature.live.dynamic.title": "Activités en direct",
    "feature.live.dynamic.desc":
      "Consultez l’état de votre voyage dans la Dynamic Island depuis l’écran d’accueil (disponible avec Somewhere Pro)",
    "feature.live.dynamic.alt":
      "État actuel du voyage dans la Dynamic Island de l’écran d’accueil",
    "feature.live.lock.title": "Activités en direct",
    "feature.live.lock.desc":
      "Consultez l’état de votre voyage en un coup d’œil sur l’écran verrouillé (disponible avec Somewhere Pro)",
    "feature.live.lock.alt":
      "État actuel du voyage en bas de l’écran verrouillé",
    "feature.expense.kicker": "Dépenses",
    "feature.expense.title": "Dépenses et partage des frais",
    "feature.expense.desc":
      "Enregistrez vos dépenses de voyage et calculez facilement les montants à envoyer à vos amis",
    "feature.expense.alt": "Écran des dépenses et du partage des frais",
    "feature.together.kicker": "Ensemble",
    "feature.together.title": "Planifiez vos voyages ensemble",
    "feature.together.desc":
      "Invitez vos amis, rassemblez vos idées et préparez votre voyage ensemble",
    "feature.together.alt": "Écran d’invitation et d’autorisations des compagnons de voyage",
    "feature.large.kicker": "Grands écrans",
    "feature.large.title": "Optimisé pour les grands écrans",
    "feature.large.desc":
      "Utilisez Somewhere confortablement sur les appareils pliables, les tablettes et autres grands écrans",
    "feature.large.alt": "Écran d’itinéraire Somewhere sur un appareil pliable",

    "support.eyebrow": "Inclus",
    "support.title": "De nombreuses fonctionnalités",
    "support.account": "Prise en charge de la connexion de comptes",
    "support.platform": "Compatible avec Android, iOS, iPadOS, macOS et visionOS",
    "support.language":
      "Disponible en coréen, anglais, japonais, chinois simplifié, chinois traditionnel, espagnol, français et allemand",

    "a11y.eyebrow": "Accessibilité",
    "a11y.title": "Accessibilité",
    "a11y.darkMode": "Prise en charge des modes clair et sombre",
    "a11y.fontSize": "Taille de police et d’affichage réglable",
    "a11y.screenReader": "Prise en charge du lecteur d’écran (VoiceOver)",

    "pro.eyebrow": "Abonnement",
    "pro.title": "Somewhere Pro",
    "pro.ads": "Supprimer les publicités",
    "pro.credits": "300 crédits offerts chaque semaine",
    "pro.liveActivities": "Activités en direct",
    "pro.trips": "Nombre maximal de voyages augmenté",
    "pro.friends": "Limite d’invitations d’amis augmentée",
    "pro.expenseImages": "Joindre des reçus et des photos aux dépenses",

    "cta.title": "Commencez votre voyage aujourd’hui",
    "cta.sub": "Téléchargez Somewhere et créez votre premier voyage",
    "cta.qr": "Scannez pour télécharger",

    "footer.developer": "Développeur",
    "footer.contact": "Contact",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d’utilisation",
    "footer.rights": "Application de voyage",
    "footer.copyEmail": "Copier l’adresse e-mail",
    "footer.business": "Informations sur l’entreprise",
    "footer.businessInfo":
      "Nom de l’entreprise : NP<br />Représentant : Sejong Lee<br />Numéro d’enregistrement : 545-01-04035<br />Numéro de déclaration de vente à distance : 2026-Seoul Yangcheon-0818<br />Adresse : 25-22 Jungang-ro 45-gil, Yangcheon-gu, Séoul, 08060, République de Corée<br />E-mail : contact@npsomewhere.com",
    "footer.legal":
      "Apple et le logo Apple sont des marques commerciales d’Apple Inc., déposées aux États-Unis et dans d’autres pays. App Store est une marque de service d’Apple Inc. Google Play et le logo Google Play sont des marques commerciales de Google LLC.",

    "redirect.auto.title": "Redirection vers le store…",
    "redirect.auto.sub": "Veuillez patienter",
    "redirect.manual.title": "Télécharger Somewhere",
    "redirect.manual.sub": "Choisissez le store correspondant à votre appareil",
    "redirect.home": "Accueil",

    "join.documentTitle": "Invitation à un voyage",
    "join.title": "Vous avez été invité",
    "join.description":
      "Si Somewhere est installé, utilisez le bouton ci-dessous pour consulter le voyage et le rejoindre dans l’application.",
    "join.open": "Ouvrir dans l’application",
    "join.download": "Télécharger l’application",
    "join.home": "Accéder à l’accueil de Somewhere",
    "error.notFound": "Page introuvable",
    "error.home": "Accueil",
  },

  de: {
    "lang.name": "Deutsch",
    "lang.select": "Sprache auswählen",
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
    "theme.toggle": "Darstellung wechseln",

    "hero.eyebrow": "Somewhere Reiseplaner-App",
    "hero.title.1": "Somewhere",
    "hero.title.2": "Reiseplaner-App",
    "hero.lead":
      "Planen Sie Ihre eigene Reise ganz unkompliziert. Somewhere vereint Reiseplanung, Routen auf der Karte sowie Ausgabenaufzeichnung und Abrechnung in einem Ablauf.",
    "hero.note": "Kostenlos im App Store und bei Google Play",
    "hero.screen.trips": "Reiseübersicht von Somewhere",
    "hero.screen.map": "Routenkarte von Somewhere",
    "hero.screens": "Screenshots der Somewhere-App",

    "feature.map.kicker": "Karte",
    "feature.map.title": "Reiserouten auf der Karte",
    "feature.map.desc":
      "Markieren Sie die Orte, die Sie besuchen möchten, und sehen Sie Ihre Route auf einen Blick",
    "feature.map.alt": "Somewhere-Reisekarte auf einem Tablet",
    "feature.live.dynamic.title": "Live-Aktivitäten",
    "feature.live.dynamic.desc":
      "Sehen Sie den aktuellen Stand Ihrer Reise in der Dynamic Island auf dem Home-Bildschirm (mit Somewhere Pro verfügbar)",
    "feature.live.dynamic.alt":
      "Aktueller Reisestatus in der Dynamic Island auf dem Home-Bildschirm",
    "feature.live.lock.title": "Live-Aktivitäten",
    "feature.live.lock.desc":
      "Sehen Sie den aktuellen Stand Ihrer Reise auf dem Sperrbildschirm auf einen Blick (mit Somewhere Pro verfügbar)",
    "feature.live.lock.alt":
      "Aktueller Reisestatus am unteren Rand des Sperrbildschirms",
    "feature.expense.kicker": "Ausgaben",
    "feature.expense.title": "Ausgaben und Abrechnung",
    "feature.expense.desc":
      "Erfassen Sie Ihre Reiseausgaben und berechnen Sie einfach, wie viel Sie an Freunde senden müssen",
    "feature.expense.alt": "Ausgaben- und Abrechnungsansicht einer Reise",
    "feature.together.kicker": "Gemeinsam",
    "feature.together.title": "Reisen gemeinsam planen",
    "feature.together.desc":
      "Laden Sie Freunde ein, sammeln Sie Ideen und bereiten Sie die Reise gemeinsam vor",
    "feature.together.alt": "Einladung und Berechtigungen für Mitreisende",
    "feature.large.kicker": "Große Bildschirme",
    "feature.large.title": "Für große Bildschirme optimiert",
    "feature.large.desc":
      "Nutzen Sie Somewhere bequem auf faltbaren Geräten, Tablets und anderen großen Bildschirmen",
    "feature.large.alt": "Somewhere-Reiseplan auf einem faltbaren Gerät",

    "support.eyebrow": "Enthalten",
    "support.title": "Viele Funktionen",
    "support.account": "Unterstützung für die Kontoverknüpfung",
    "support.platform": "Unterstützung für Android, iOS, iPadOS, macOS und visionOS",
    "support.language":
      "Unterstützt Koreanisch, Englisch, Japanisch, vereinfachtes und traditionelles Chinesisch, Spanisch, Französisch und Deutsch",

    "a11y.eyebrow": "Barrierefreiheit",
    "a11y.title": "Barrierefreiheit",
    "a11y.darkMode": "Unterstützung für hellen und dunklen Modus",
    "a11y.fontSize": "Schrift- und Anzeigegröße anpassbar",
    "a11y.screenReader": "Unterstützung für Screenreader (VoiceOver)",

    "pro.eyebrow": "Abonnement",
    "pro.title": "Somewhere Pro",
    "pro.ads": "Werbung entfernen",
    "pro.credits": "300 Credits pro Woche",
    "pro.liveActivities": "Live-Aktivitäten",
    "pro.trips": "Höhere maximale Anzahl an Reisen",
    "pro.friends": "Höhere Grenze für Freundeseinladungen",
    "pro.expenseImages": "Belege und Fotos an Ausgaben anhängen",

    "cta.title": "Starten Sie heute Ihre Reise",
    "cta.sub": "Laden Sie Somewhere herunter und erstellen Sie Ihre erste Reise",
    "cta.qr": "Zum Download scannen",

    "footer.developer": "Entwickler",
    "footer.contact": "Kontakt",
    "footer.privacy": "Datenschutzerklärung",
    "footer.terms": "Nutzungsbedingungen",
    "footer.rights": "Reiseplaner-App",
    "footer.copyEmail": "E-Mail-Adresse kopieren",
    "footer.business": "Unternehmensinformationen",
    "footer.businessInfo":
      "Unternehmensname: NP<br />Vertreter: Sejong Lee<br />Unternehmensregisternummer: 545-01-04035<br />Meldungsnummer für den Versandhandel: 2026-Seoul Yangcheon-0818<br />Geschäftsadresse: 25-22 Jungang-ro 45-gil, Yangcheon-gu, Seoul, 08060, Republik Korea<br />E-Mail: contact@npsomewhere.com",
    "footer.legal":
      "Apple und das Apple-Logo sind Marken von Apple Inc., die in den USA und anderen Ländern eingetragen sind. App Store ist eine Dienstleistungsmarke von Apple Inc. Google Play und das Google-Play-Logo sind Marken von Google LLC.",

    "redirect.auto.title": "Weiterleitung zum Store…",
    "redirect.auto.sub": "Bitte warten Sie einen Moment",
    "redirect.manual.title": "Somewhere herunterladen",
    "redirect.manual.sub": "Wählen Sie den Store für Ihr Gerät",
    "redirect.home": "Startseite",

    "join.documentTitle": "Reiseeinladung",
    "join.title": "Sie wurden eingeladen",
    "join.description":
      "Wenn Somewhere installiert ist, können Sie über die Schaltfläche unten die Reise ansehen und in der App beitreten.",
    "join.open": "In der App öffnen",
    "join.download": "App herunterladen",
    "join.home": "Zur Somewhere-Startseite",
    "error.notFound": "Seite nicht gefunden",
    "error.home": "Startseite",
  },

  es: {
    "lang.name": "Español",
    "lang.select": "Seleccionar idioma",
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
    "theme.toggle": "Cambiar tema",

    "hero.eyebrow": "Aplicación de viajes Somewhere",
    "hero.title.1": "Somewhere",
    "hero.title.2": "Aplicación de viajes",
    "hero.lead":
      "Crea tu propio viaje sin complicaciones. Somewhere reúne la planificación, las rutas en el mapa y el registro y reparto de gastos en un solo flujo.",
    "hero.note": "Descarga gratis en App Store y Google Play",
    "hero.screen.trips": "Pantalla de viajes de Somewhere",
    "hero.screen.map": "Pantalla de mapa de rutas de Somewhere",
    "hero.screens": "Capturas de pantalla de la aplicación Somewhere",

    "feature.map.kicker": "Mapa",
    "feature.map.title": "Rutas de viaje en un mapa",
    "feature.map.desc":
      "Marca los lugares que quieres visitar y consulta tu ruta de un vistazo",
    "feature.map.alt": "Mapa de viaje de Somewhere en una tableta",
    "feature.live.dynamic.title": "Actividades en directo",
    "feature.live.dynamic.desc":
      "Consulta el estado actual de tu viaje en la Dynamic Island desde la pantalla de inicio (disponible con Somewhere Pro)",
    "feature.live.dynamic.alt":
      "Estado actual del viaje en la Dynamic Island de la pantalla de inicio",
    "feature.live.lock.title": "Actividades en directo",
    "feature.live.lock.desc":
      "Consulta el estado actual de tu viaje de un vistazo en la pantalla bloqueada (disponible con Somewhere Pro)",
    "feature.live.lock.alt":
      "Estado actual del viaje en la parte inferior de la pantalla bloqueada",
    "feature.expense.kicker": "Gastos",
    "feature.expense.title": "Gastos y reparto",
    "feature.expense.desc":
      "Registra tus gastos de viaje y calcula fácilmente cuánto enviar a tus amigos",
    "feature.expense.alt": "Pantalla de gastos y reparto de un viaje",
    "feature.together.kicker": "Juntos",
    "feature.together.title": "Planifiquen viajes juntos",
    "feature.together.desc":
      "Invita a tus amigos, reúne ideas y preparen el viaje juntos",
    "feature.together.alt": "Pantalla de invitación y permisos de compañeros de viaje",
    "feature.large.kicker": "Pantallas grandes",
    "feature.large.title": "Optimizada para pantallas grandes",
    "feature.large.desc":
      "Usa Somewhere cómodamente en dispositivos plegables, tabletas y otras pantallas grandes",
    "feature.large.alt": "Pantalla de itinerario de Somewhere en un dispositivo plegable",

    "support.eyebrow": "Incluye",
    "support.title": "Muchas funciones",
    "support.account": "Compatible con la vinculación de cuentas",
    "support.platform": "Compatible con Android, iOS, iPadOS, macOS y visionOS",
    "support.language":
      "Disponible en coreano, inglés, japonés, chino simplificado, chino tradicional, español, francés y alemán",

    "a11y.eyebrow": "Accesibilidad",
    "a11y.title": "Accesibilidad",
    "a11y.darkMode": "Compatibilidad con modo claro y oscuro",
    "a11y.fontSize": "Tamaño de fuente y pantalla ajustable",
    "a11y.screenReader": "Compatibilidad con lectores de pantalla (VoiceOver)",

    "pro.eyebrow": "Suscripción",
    "pro.title": "Somewhere Pro",
    "pro.ads": "Quitar anuncios",
    "pro.credits": "300 créditos cada semana",
    "pro.liveActivities": "Actividades en directo",
    "pro.trips": "Más viajes como máximo",
    "pro.friends": "Más invitaciones de amigos",
    "pro.expenseImages": "Adjunta recibos y fotos a los gastos",

    "cta.title": "Empieza tu viaje hoy",
    "cta.sub": "Descarga Somewhere y crea tu primer viaje",
    "cta.qr": "Escanea para descargar",

    "footer.developer": "Desarrollador",
    "footer.contact": "Contacto",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos del servicio",
    "footer.rights": "Aplicación de viajes",
    "footer.copyEmail": "Copiar dirección de correo",
    "footer.business": "Información de la empresa",
    "footer.businessInfo":
      "Nombre de la empresa: NP<br />Representante: Sejong Lee<br />Número de registro empresarial: 545-01-04035<br />Número de declaración de venta por correo: 2026-Seoul Yangcheon-0818<br />Domicilio social: 25-22 Jungang-ro 45-gil, Yangcheon-gu, Seúl, 08060, República de Corea<br />Correo: contact@npsomewhere.com",
    "footer.legal":
      "Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. y otros países. App Store es una marca de servicio de Apple Inc. Google Play y el logotipo de Google Play son marcas comerciales de Google LLC.",

    "redirect.auto.title": "Te llevamos a la tienda…",
    "redirect.auto.sub": "Espera un momento",
    "redirect.manual.title": "Descargar Somewhere",
    "redirect.manual.sub": "Elige la tienda para tu dispositivo",
    "redirect.home": "Inicio",

    "join.documentTitle": "Invitación a un viaje",
    "join.title": "Te han invitado",
    "join.description":
      "Si Somewhere está instalado, usa el botón de abajo para consultar el viaje y unirte desde la aplicación.",
    "join.open": "Abrir en la aplicación",
    "join.download": "Descargar la aplicación",
    "join.home": "Ir al inicio de Somewhere",
    "error.notFound": "No se ha encontrado la página",
    "error.home": "Inicio",
  },
};

const SUPPORTED = ["ko", "en", "ja", "zh-CN", "zh-TW", "fr", "de", "es"];
const STORAGE_KEY = "somewhere-lang";

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
  const saved = normalizeLang(localStorage.getItem(STORAGE_KEY));
  if (saved) return saved;
  return normalizeLang(navigator.language || "en") || "en";
}

function getString(key, lang = window.__lang || "en") {
  const dict = I18N[lang] || I18N.en;
  return dict[key] != null ? dict[key] : I18N.en[key] || "";
}

function updateDocumentTitle(lang) {
  const path = window.location.pathname;
  if (path.endsWith("/privacy.html")) {
    document.title = `Somewhere — ${lang === "ko" ? "개인정보처리방침" : "Privacy Policy"}`;
    return;
  }
  if (path.endsWith("/terms.html")) {
    document.title = `Somewhere — ${lang === "ko" ? "서비스 이용약관" : "Terms of Service"}`;
    return;
  }
  if (path.endsWith("/download.html")) {
    document.title = `Somewhere — ${getString("redirect.manual.title", lang)}`;
    return;
  }
  if (path.endsWith("/index.html") || path === "/") {
    document.title = `Somewhere — ${getString("hero.title.2", lang)}`;
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

  // Screenshot artwork currently exists in Korean and English only. Use the
  // English artwork for every supported language without a matching asset.
  const imageLang = lang === "ko" ? "ko" : "en";
  document
    .querySelectorAll("[data-i18n-src-ko][data-i18n-src-en]")
    .forEach((el) => {
      const src =
        el.getAttribute(`data-i18n-src-${imageLang}`) ||
        el.getAttribute("data-i18n-src-en");
      if (src) el.setAttribute("src", src);
    });

  document.querySelectorAll("[data-action='change-lang']").forEach((select) => {
    select.value = lang;
  });
  document.querySelectorAll("[data-language-value]").forEach((el) => {
    el.textContent = getString(`lang.option.${lang}`, lang);
  });

  updateDocumentTitle(lang);

  localStorage.setItem(STORAGE_KEY, lang);

  // Let page-specific components (for example, the legal version picker)
  // react without duplicating language state.
  window.dispatchEvent(new CustomEvent("somewhere:langchange", { detail: lang }));
}

function toggleLang() {
  const currentIndex = SUPPORTED.indexOf(window.__lang);
  const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % SUPPORTED.length;
  applyLang(SUPPORTED[nextIndex]);
}

window.SomewhereI18N = {
  supported: SUPPORTED.slice(),
  detectLang,
  normalizeLang,
  get: getString,
  applyLang,
  toggleLang,
};
