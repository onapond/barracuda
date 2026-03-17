export const navLinks = [
  { href: "/brand", label: "Brand" },
  { href: "/coffee", label: "Coffee" },
  { href: "/space", label: "Space" },
  { href: "/menu", label: "Menu" },
  { href: "/store", label: "Store" },
  { href: "/visit", label: "Visit" },
] as const;

export const businessInfo = {
  brandName: "BARRACUDA",
  koreanName: "바라쿠다 로스터리 & 카페",
  address: "서울 용산구 한남동 [상세 주소 입력 예정]",
  openingHours: "매일 / 10:00-22:00",
  parking: "주차 정보 추후 업데이트",
  contact: "02-0000-0000",
  instagramHandle: "@barracuda",
  instagramUrl: "https://instagram.com/",
  directionsUrl: "https://maps.google.com/?q=Yongsan-gu,Seoul,South+Korea",
} as const;

export const assetPaths = {
  hero: "/images/hero.svg",
  brand: ["/images/brand-1.svg", "/images/brand-2.svg", "/images/brand-3.svg"],
  coffee: "/images/coffee-1.svg",
  space: ["/images/space-1.svg", "/images/space-2.svg", "/images/space-3.svg"],
  store: ["/images/store-1.svg", "/images/store-2.svg", "/images/store-3.svg"],
} as const;

type PageHero = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export const siteContent = {
  hero: {
    image: assetPaths.hero,
    imageAlt: "Barracuda 공간을 담은 대표 이미지",
    eyebrow: "로스터리 카페",
    title: businessInfo.brandName,
    subtitle: "로스팅과 공간, 그리고 조용한 분위기로 완성되는 브랜드.",
    description:
      "로스팅의 밀도와 공간의 분위기가 조용하게 이어지며, 커피와 경험이 하나의 결로 머무는 브랜드 공간입니다.",
    primaryCta: {
      href: "/visit",
      label: "바라쿠다 방문하기",
    },
    secondaryCta: {
      href: "/coffee",
      label: "커피 살펴보기",
    },
  },
  brand: {
    eyebrow: "브랜드",
    title: "커피와 공간, 그리고 경험을 하나의 결로 엮습니다.",
    description:
      "Barracuda는 단순한 카페가 아니라 로스터리의 감도와 공간의 인상을 함께 전하는 브랜드입니다. 조용하고 정제된 분위기 안에서 커피, 문화, 만남이 자연스럽게 이어집니다.",
    pillars: ["커피", "공간", "문화", "경험"],
    cta: {
      href: "/brand",
      label: "브랜드 소개 보기",
    },
    images: [
      { src: assetPaths.brand[0], alt: "브랜드 무드를 보여주는 첫 번째 이미지" },
      { src: assetPaths.brand[1], alt: "브랜드 무드를 보여주는 두 번째 이미지" },
      { src: assetPaths.brand[2], alt: "브랜드 무드를 보여주는 세 번째 이미지" },
    ],
  },
  coffee: {
    eyebrow: "커피",
    title: "로스터리 기반의 신뢰를 담은 커피 경험.",
    description:
      "Barracuda의 커피는 한 잔의 메뉴가 아니라 브랜드의 태도를 보여주는 중심축입니다. 원두 셀렉션과 로스팅의 방향성은 앞으로 더 넓은 제품 경험으로 확장될 수 있도록 설계됩니다.",
    image: {
      src: assetPaths.coffee,
      alt: "원두와 로스팅 무드를 보여주는 커피 이미지",
    },
    features: [
      { title: "원두 셀렉션", description: "계절에 맞춘 셀렉션과 시그니처 프로파일" },
      { title: "로스팅 방향", description: "브랜드 톤을 반영한 정제된 로스팅 방향" },
    ],
    cta: {
      href: "/coffee",
      label: "커피 자세히 보기",
    },
  },
  space: {
    eyebrow: "공간",
    title: "머무는 시간 자체가 브랜드 경험이 되는 공간.",
    description:
      "Barracuda는 커피를 마시는 장소를 넘어, 분위기와 모임, 문화적 장면이 축적될 수 있는 공간을 지향합니다. 카페와 이벤트, 경험이 하나의 무드 안에서 이어지도록 설계합니다.",
    highlight: "커피와 모임, 그리고 앞으로의 문화 프로그램을 담아낼 수 있도록 설계한 공간입니다.",
    items: [
      {
        title: "카페",
        description: "조용한 밀도와 여백을 중심으로 머무는 공간",
        src: assetPaths.space[0],
        alt: "카페 공간의 무드를 보여주는 이미지",
        height: "min-h-[520px]",
      },
      {
        title: "이벤트",
        description: "모임과 프로그램으로 확장될 수 있는 장면",
        src: assetPaths.space[1],
        alt: "이벤트와 모임이 가능한 공간 이미지",
        height: "min-h-[300px]",
      },
      {
        title: "브랜드 경험",
        description: "브랜드의 결을 직접 체감하게 하는 경험",
        src: assetPaths.space[2],
        alt: "브랜드 경험을 보여주는 공간 이미지",
        height: "min-h-[360px]",
      },
    ],
    cta: {
      href: "/space",
      label: "공간 살펴보기",
    },
  },
  store: {
    eyebrow: "스토어",
    title: "원두와 굿즈, 그리고 브랜드 제품의 미리보기.",
    description:
      "지금은 가볍게 소개하는 수준에 머무르지만, 이후 Barracuda의 제품군으로 자연스럽게 확장될 수 있는 구조를 염두에 둡니다.",
    note: "미리보기",
    items: [
      { title: "원두", src: assetPaths.store[0], alt: "원두 제품을 암시하는 이미지" },
      { title: "굿즈", src: assetPaths.store[1], alt: "브랜드 굿즈를 암시하는 이미지" },
      { title: "라이프스타일 제품", src: assetPaths.store[2], alt: "라이프스타일 제품을 암시하는 이미지" },
    ],
  },
  visit: {
    eyebrow: "방문",
    title: "Barracuda를 직접 경험해 보세요.",
    description: "방문 전 필요한 정보를 간결하게 정리했습니다.",
    details: [
      { label: "주소", value: businessInfo.address },
      { label: "운영 시간", value: businessInfo.openingHours },
      { label: "주차", value: businessInfo.parking },
      { label: "연락처", value: businessInfo.contact },
      { label: "인스타그램", value: businessInfo.instagramHandle },
    ],
    directionsHref: businessInfo.directionsUrl,
    directionsLabel: "길찾기",
    instagramHref: businessInfo.instagramUrl,
    instagramLabel: "인스타그램",
    mapEyebrow: "위치",
    mapTitle: "브랜드의 온도와 공간의 결을 현장에서 직접 확인할 수 있습니다.",
    mapLinkLabel: "지도 열기",
  },
  footer: {
    statement: "커피와 공간, 그리고 경험을 조용하게 연결하는 브랜드.",
    subline: businessInfo.koreanName,
    address: businessInfo.address,
    instagramHref: businessInfo.instagramUrl,
    instagramLabel: "인스타그램",
    copyright: "© 2026 Barracuda. All rights reserved.",
    links: navLinks,
  },
} as const;

export const subpageContent = {
  brand: {
    hero: {
      eyebrow: "브랜드",
      title: "Barracuda는 로스터리의 결을 공간과 문화 안으로 옮기는 브랜드입니다.",
      description:
        "단순히 메뉴를 소개하는 카페가 아니라, 조용한 분위기와 정제된 경험을 통해 커피와 공간의 태도를 함께 보여주는 브랜드로 설계합니다.",
      image: assetPaths.brand[0],
      imageAlt: "Barracuda 브랜드 무드를 보여주는 이미지",
    } satisfies PageHero,
    intro:
      "브랜드 스토리는 커피, 공간, 문화가 각각 분리된 기능이 아니라 하나의 흐름으로 연결된다는 전제에서 시작합니다. 방문자는 한 잔의 커피를 마시는 동시에 Barracuda의 공간감과 톤을 경험하게 됩니다.",
    values: [
      {
        title: "브랜드 스토리",
        body: "Barracuda는 로스터리 기반의 감도와 조용한 접객 경험을 결합해 오래 머물고 싶은 브랜드 장면을 만듭니다.",
      },
      {
        title: "로스터리 철학",
        body: "원두 셀렉션과 로스팅의 방향은 카페 메뉴를 넘어 제품 경험과 브랜드 신뢰를 뒷받침하는 기반으로 작동합니다.",
      },
      {
        title: "공간 철학",
        body: "과한 장식 대신 여백과 재료감, 빛과 동선을 중심으로 공간의 태도를 분명하게 드러냅니다.",
      },
      {
        title: "문화",
        body: "향후 북클럽, 워크숍, 소규모 프로그램이 자연스럽게 열릴 수 있는 조용한 문화적 플랫폼을 지향합니다.",
      },
    ],
    gallery: siteContent.brand.images,
  },
  coffee: {
    hero: {
      eyebrow: "커피",
      title: "바라쿠다 커피",
      description:
        `바라쿠다는 CNC Tech 로스터리에서 로스팅한 스페셜티 커피를 바탕으로,
        한 잔의 선명함과 균형, 원두 본연의 인상을 차분하게 전합니다.`,
      image: assetPaths.coffee,
      imageAlt: "Barracuda 커피와 로스팅 무드를 보여주는 이미지",
      ctaHref: "#beans-preview",
      ctaLabel: "원두 미리 보기",
    } satisfies PageHero,
    subtitle: "의도를 담아 로스팅한 커피.",
    intro: {
      title: "커피는 바라쿠다 경험의 중요한 결을 만듭니다.",
      description:
        `Barracuda의 커피는 단순히 메뉴를 채우는 요소가 아니라 브랜드의 인상을 결정하는 핵심입니다.
        한 잔의 밸런스와 추출의 리듬, 공간과의 조화까지 하나의 경험으로 연결합니다.`,
    },
    roasteryIntro: {
      eyebrow: "CNC Tech 로스터리",
      title: "바라쿠다 커피의 기반이 되는 로스팅 파트너.",
      description:
        `바라쿠다의 커피는 품질과 일관성에 집중하는 CNC Tech 로스터리에서 로스팅합니다.
        바라쿠다는 그 기술적 기반을 공간의 무드와 서비스 경험 안으로 자연스럽게 옮겨옵니다.`,
      points: ["소량 배치 로스팅", "스페셜티 커피 중심", "정교한 로스트 프로파일"],
      externalHref: "https://cnctechlab.co.kr/",
      externalLabel: "CNC Tech 사이트 보기",
    },
    roastingPhilosophy: {
      eyebrow: "로스팅 철학",
      title: "선명함과 단맛, 깔끔한 마무리를 우선합니다.",
      description:
        `각 원두는 본연의 캐릭터가 선명하게 드러나도록 선택하고 로스팅합니다.
        무거운 인상보다는 원산지의 맑은 결, 균형 잡힌 단맛, 편안한 마무리를 먼저 생각합니다.`,
      pillars: ["원산지의 선명함", "균형 잡힌 단맛", "깔끔한 마무리"],
      image: {
        src: assetPaths.coffee,
        alt: "로스팅 철학을 보여주는 커피 이미지",
      },
    },
    coffeeSelection: {
      eyebrow: "커피 셀렉션",
      title: "바라쿠다의 커피 인상을 만드는 셀렉션.",
      cards: [
        {
          title: "싱글 오리진",
          name: "에티오피아 구지",
          origin: "에티오피아",
          notes: ["복숭아", "플로럴", "허니"],
        },
        {
          title: "시즈널 커피",
          name: "콜롬비아 시즈널 로트",
          origin: "콜롬비아",
          notes: ["붉은 사과", "카라멜", "시트러스"],
        },
        {
          title: "시그니처 블렌드",
          name: "바라쿠다 하우스 블렌드",
          origin: "브라질 / 콜롬비아",
          notes: ["초콜릿", "고소함", "균형 잡힌 단맛"],
        },
      ],
    },
    brewingExperience: {
      eyebrow: "브루잉 경험",
      title: "균형과 질감을 세심하게 살려 준비합니다.",
      description:
        `바라쿠다의 커피는 깨끗하고 편안하며, 의도가 느껴지는 한 잔이 되도록 준비합니다.
        추출의 과시보다 마시는 경험의 안정감과 질감을 먼저 생각합니다.`,
      image: {
        src: assetPaths.coffee,
        alt: "브루잉 경험을 보여주는 이미지",
      },
    },
    beansPreview: {
      id: "beans-preview",
      eyebrow: "원두",
      title: "앞으로 스토어로 이어질 수 있는 원두 구성을 먼저 소개합니다.",
      items: [
        { title: "바라쿠다 하우스 블렌드", description: "에스프레소와 밀크 음료에 자연스럽게 어울리는 데일리 밸런스" },
        { title: "시즈널 싱글 오리진", description: "밝고 깨끗한 인상을 중심으로 바뀌는 시즌 셀렉션" },
        { title: "필터 커피 셀렉션", description: "핸드브루와 느린 커피 시간을 위해 준비한 로스트" },
      ],
      ctaHref: "/store",
      ctaLabel: "원두 보기",
    },
    ctaSection: {
      eyebrow: "다음으로 이어가기",
      title: "커피에서 시작해 바라쿠다의 다른 경험으로 이어가 보세요.",
      actions: [
        { href: "/visit", label: "카페 방문 정보" },
        { href: "/space", label: "공간 살펴보기" },
        { href: "/menu", label: "메뉴 보기" },
      ],
    },
  },
  space: {
    hero: {
      eyebrow: "공간",
      title: "바라쿠다 공간",
      description:
        "바라쿠다는 커피와 문화, 사람들이 조용하게 모일 수 있도록 설계한 공간입니다.",
      image: assetPaths.space[0],
      imageAlt: "Barracuda 공간을 대표하는 이미지",
      ctaHref: "#inquiry",
      ctaLabel: "행사 문의하기",
    } satisfies PageHero,
    overview: {
      title: "모임과 문화, 경험을 담아내는 차분한 공간.",
      description:
        `Barracuda의 공간은 로스터리 카페의 차분한 결을 유지하면서도,
        사적인 모임과 창의적인 만남, 문화적 장면이 자연스럽게 펼쳐질 수 있도록 설계됩니다.`,
      themes: ["커피 모임", "창의적인 미팅", "문화적 장면"],
    },
    eventTypes: [
      {
        title: "프라이빗 파티",
        description: "소규모 프라이빗 모임과 브랜드 초대 행사를 위한 차분한 공간 구성.",
        image: assetPaths.space[0],
        imageAlt: "프라이빗 파티를 상상할 수 있는 공간 이미지",
      },
      {
        title: "패션 쇼",
        description: "브랜드 무드와 오브제를 살린 프레젠테이션, 쇼케이스, 룩 공개 행사.",
        image: assetPaths.space[1],
        imageAlt: "패션 쇼와 프레젠테이션을 상상할 수 있는 공간 이미지",
      },
      {
        title: "북클럽",
        description: "조용한 대화와 집중이 필요한 북클럽, 리딩 세션, 소규모 토크.",
        image: assetPaths.space[2],
        imageAlt: "북클럽과 소규모 토크를 상상할 수 있는 공간 이미지",
      },
      {
        title: "워크숍",
        description: "창작 워크숍, 클래스, 브랜디드 세션에 적합한 유연한 운영 동선.",
        image: assetPaths.space[0],
        imageAlt: "워크숍 진행을 상상할 수 있는 공간 이미지",
      },
      {
        title: "브랜드 이벤트",
        description: "브랜드 론칭, 제품 소개, 커뮤니티 초청 이벤트를 위한 무드 중심 공간.",
        image: assetPaths.space[1],
        imageAlt: "브랜드 이벤트를 상상할 수 있는 공간 이미지",
      },
      {
        title: "크리에이티브 밋업",
        description: "크리에이터 네트워킹, 협업 미팅, 큐레이션 중심 모임을 담을 수 있는 환경.",
        image: assetPaths.space[2],
        imageAlt: "크리에이티브 밋업을 상상할 수 있는 공간 이미지",
      },
    ],
    gallery: [
      { src: assetPaths.space[0], alt: "Barracuda interior gallery image one" },
      { src: assetPaths.space[1], alt: "Barracuda interior gallery image two" },
      { src: assetPaths.space[2], alt: "Barracuda interior gallery image three" },
      { src: assetPaths.space[0], alt: "Barracuda interior gallery image four" },
      { src: assetPaths.space[1], alt: "Barracuda interior gallery image five" },
      { src: assetPaths.space[2], alt: "Barracuda interior gallery image six" },
    ],
    rentalInfo: [
      {
        label: "수용 인원",
        value: "좌석 구성과 이벤트 성격에 따라 소규모 프라이빗 행사 중심으로 운영 예정",
      },
      {
        label: "이용 가능 시간",
        value: "카페 운영 시간 외 또는 일부 시간대 조율 방식으로 검토",
      },
      {
        label: "기본 장비",
        value: "기본 테이블, 좌석, 전원 환경 중심. 추가 장비는 행사 성격에 따라 별도 협의",
      },
      {
        label: "위치",
        value: businessInfo.address,
      },
    ],
    inquiryForm: {
      title: "행사 문의",
      description:
        `예약 시스템이 아니라 행사 가능성을 확인하는 간단한 문의 폼입니다.
        운영팀이 확인 후 별도로 안내하는 흐름을 전제로 합니다.`,
      submitLabel: "문의 보내기",
      fields: [
        { name: "name", label: "이름", type: "text", placeholder: "이름을 입력해 주세요" },
        { name: "phone", label: "연락처", type: "tel", placeholder: "010-0000-0000" },
        { name: "email", label: "이메일", type: "email", placeholder: "name@example.com" },
        { name: "eventType", label: "행사 유형", type: "text", placeholder: "예: 프라이빗 파티" },
        { name: "eventDate", label: "행사 날짜", type: "date" },
        { name: "expectedGuests", label: "예상 인원", type: "number", placeholder: "20" },
      ],
      messageField: {
        name: "message",
        label: "문의 내용",
        placeholder: "행사 내용과 희망 일정, 필요한 사항을 간단히 적어 주세요.",
      },
      successMessage: "문의가 접수되었습니다. 현재는 간단한 요청 확인용 폼으로 운영하고 있습니다.",
    },
  },
  menu: {
    hero: {
      eyebrow: "메뉴",
      title: "바라쿠다 메뉴",
      description:
        `바라쿠다는 CNC Tech 로스터리의 스페셜티 커피를 바탕으로,
        음료와 디저트를 차분하게 구성한 메뉴를 선보입니다.`,
      image: assetPaths.coffee,
      imageAlt: "Barracuda 메뉴와 커피 무드를 보여주는 이미지",
      ctaHref: "#order-request",
      ctaLabel: "주문 요청하기",
    } satisfies PageHero,
    subtitle: "커피와 분위기, 그리고 단정한 좋은 것들.",
    categoryNav: [
      { href: "#coffee-menu", label: "커피" },
      { href: "#signature-menu", label: "시그니처" },
      { href: "#non-coffee", label: "논커피" },
      { href: "#dessert", label: "디저트" },
    ],
    sections: [
      {
        id: "coffee-menu",
        eyebrow: "커피 메뉴",
        title: "로스터리의 기반 위에 선명하게 준비한 커피.",
        groups: [
          {
            title: "에스프레소 기반",
            items: ["에스프레소", "아메리카노", "카푸치노", "라테", "플랫 화이트"],
          },
          {
            title: "필터 커피",
            items: ["핸드드립", "시즈널 싱글 오리진"],
          },
          {
            title: "콜드 커피",
            items: ["콜드브루", "콜드브루 라테"],
          },
        ],
      },
      {
        id: "signature-menu",
        eyebrow: "시그니처 메뉴",
        title: "바라쿠다의 로스팅 톤을 반영한 시그니처 음료.",
        description:
          "브랜드 무드와 공간 경험을 자연스럽게 연결하는 차분한 시그니처 구성을 제안합니다.",
        groups: [
          {
            title: "시그니처",
            items: ["Barracuda Latte", "Roastery Cream Coffee", "Seasonal Signature Drink"],
          },
        ],
      },
      {
        id: "non-coffee",
        eyebrow: "논커피",
        title: "커피 외에도 공간의 리듬을 해치지 않는 가벼운 선택지.",
        groups: [
          {
            title: "음료",
            items: ["티", "초콜릿", "에이드", "스파클링"],
          },
        ],
      },
      {
        id: "dessert",
        eyebrow: "디저트",
        title: "커피와 함께 두기 좋은 단순하고 정제된 디저트.",
        groups: [
          {
            title: "디저트",
            items: ["쿠키", "케이크", "시즈널 디저트"],
          },
        ],
      },
    ],
    orderForm: {
      title: "주문 요청",
      description:
        `결제 시스템 없이 주문 가능성을 먼저 확인하는 간단한 요청 폼입니다.
        카페 주문과 단체 주문, 이벤트 주문, 케이터링 문의까지 가볍게 열어둡니다.`,
      submitLabel: "주문 요청 보내기",
      orderTypes: ["카페 주문", "단체 주문", "이벤트 주문", "케이터링"],
      fields: [
        { name: "name", label: "이름", type: "text", placeholder: "이름을 입력해 주세요" },
        { name: "phone", label: "연락처", type: "tel", placeholder: "010-0000-0000" },
        { name: "email", label: "이메일", type: "email", placeholder: "name@example.com" },
        { name: "pickupDate", label: "수령 날짜", type: "date" },
        { name: "pickupTime", label: "수령 시간", type: "time" },
      ],
      messageField: {
        name: "orderDetails",
        label: "주문 내용",
        placeholder: "원하는 메뉴와 수량, 희망 시간, 전달할 내용을 적어 주세요.",
      },
      successMessage: "주문 요청이 기록되었습니다. 현재는 간단한 요청 확인용 폼으로 운영하고 있습니다.",
    },
  },
  store: {
    hero: {
      eyebrow: "스토어",
      title: "원두와 굿즈, 라이프스타일 제품으로 이어질 바라쿠다의 제품 세계를 미리 보여줍니다.",
      description:
        "체크아웃 없이도 브랜드 제품 방향을 읽을 수 있도록, 카테고리와 무드 중심으로 정리한 preview-only 페이지입니다.",
      image: assetPaths.store[0],
      imageAlt: "Barracuda 스토어 제품 무드를 보여주는 이미지",
      ctaHref: "#collections",
      ctaLabel: "카테고리 보기",
    } satisfies PageHero,
    intro: {
      title: "스토어는 판매 시스템보다 먼저 브랜드 제품 감도를 보여주는 페이지입니다.",
      description:
        "지금 단계에서는 실제 구매 흐름을 만들기보다, Barracuda가 어떤 제품 세계를 준비하고 있는지 차분하게 소개하는 데 집중합니다.",
      points: ["정적 프리뷰 중심", "카테고리 소개 우선", "결제 기능 없음"],
    },
    collections: [
      {
        id: "coffee-beans",
        title: "원두",
        eyebrow: "Coffee Beans",
        description: "Barracuda의 로스팅 감도를 가장 직접적으로 보여줄 수 있는 핵심 제품군입니다.",
        note: "로스터리 기반의 시그니처 셀렉션",
        items: [
          "Barracuda House Blend",
          "Seasonal Single Origin",
          "Filter Coffee Selection",
          "Espresso Blend",
        ],
      },
      {
        id: "coffee-products",
        title: "커피 제품",
        eyebrow: "Coffee Products",
        description: "매장 경험을 집과 사무실로 자연스럽게 이어가기 위한 간결한 커피 제품군입니다.",
        note: "가볍게 이어지는 데일리 제품",
        items: ["Drip Bag", "Coffee Bag", "Cold Brew Bottle", "Capsule Coffee"],
      },
      {
        id: "goods",
        title: "굿즈",
        eyebrow: "Goods",
        description: "브랜드의 태도와 물성을 일상으로 가져갈 수 있도록 돕는 오브젝트 중심 구상입니다.",
        note: "브랜드 경험을 남기는 오브젝트",
        items: ["Mug", "Tumbler", "Glass", "Drip Set", "Barracuda Tote Bag"],
      },
      {
        id: "lifestyle",
        title: "라이프스타일 제품",
        eyebrow: "Lifestyle",
        description: "커피와 공간의 분위기를 보완하는 조용한 사용감의 라이프스타일 셀렉션입니다.",
        note: "커피 시간이 확장되는 주변 제품",
        items: ["Notebook", "Coffee Journal", "Coffee Tools"],
      },
    ],
    featuredProduct: {
      eyebrow: "Featured Preview",
      title: "Barracuda House Blend",
      description:
        "CNC Tech 로스터리에서 로스팅한 Barracuda 시그니처 블렌드를 대표 프리뷰로 소개합니다. 실제 결제나 재고 연결 없이도 스토어의 방향성을 가장 명확하게 보여주는 기준 제품입니다.",
      details: ["초콜릿과 고소함 중심의 밸런스", "에스프레소와 밀크 음료에 자연스럽게 대응", "향후 스토어 전개 시 중심 제품으로 확장 가능"],
      image: assetPaths.store[1],
      imageAlt: "Barracuda 하우스 블렌드를 상징하는 스토어 이미지",
    },
    ctaSection: {
      eyebrow: "Store Notice",
      title: "현재 스토어는 브랜드 제품 방향을 보여주는 프리뷰 페이지로 운영합니다.",
      description:
        "장바구니, 체크아웃, 결제 시스템은 아직 도입하지 않았습니다. 제품 문의나 운영 논의가 필요할 경우에는 방문 또는 별도 문의 흐름으로 연결하는 수준만 유지합니다.",
      actions: [
        { href: "/coffee", label: "커피 페이지 보기" },
        { href: "/visit", label: "방문 정보 보기" },
      ],
    },
    note: "MVP에서는 결제를 제공하지 않습니다.",
  },
  visit: {
    hero: {
      eyebrow: "??",
      title: "?? ? ??? ??",
      description: "??, ?? ??, ???? ?? ?? ??? ?? ?????.",
      image: assetPaths.space[2],
      imageAlt: "Barracuda ?? ??? ???? ???",
      ctaHref: "#visit-info",
      ctaLabel: "?? ?? ??",
    } satisfies PageHero,
    details: siteContent.visit.details,
    infoSection: {
      eyebrow: "Visit Info",
      title: "?? ??? ?? ??",
      description: "?? ?? ??? ??? ??? ?????.",
    },
    guideCards: [
      {
        title: "??",
        description: "??? ?? ??? ?? ?????.",
      },
      {
        title: "?? ??",
        description: "?? ? ?? ??? ?????.",
      },
      {
        title: "?? ? ??",
        description: "?? ?? ??? ?? ?????.",
      },
    ],
    noticeSection: {
      eyebrow: "Before You Go",
      title: "?? ???? ?? ??",
      items: ["?? ??", "?? ?? ??", "?? ??", "??? ? ????? ??"],
    },
    ctaSection: {
      eyebrow: "Visit Action",
      title: "?? ???? ?? ?????.",
      description: "? ??? ?????, ??? ??? ?? ???? ??? ? ????.",
      actions: [
        { href: businessInfo.directionsUrl, label: "???" },
        { href: businessInfo.instagramUrl, label: "?????" },
        { href: "/menu", label: "?? ??" },
        { href: "/space", label: "?? ??" },
      ],
    },
    actions: [
      { href: businessInfo.directionsUrl, label: "???" },
      { href: businessInfo.instagramUrl, label: "?????" },
    ],
  },
} as const;



