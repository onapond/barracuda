import type { CompanySiteConfig } from "@/lib/company-site";

const navLinks = [
  { href: "/brand", label: "Brand" },
  { href: "/coffee", label: "Coffee" },
  { href: "/space", label: "Space" },
  { href: "/store", label: "Store" },
  { href: "/visit", label: "Visit" },
] as const;

const utilityLinks = [
  { href: "#", label: "로그인" },
  { href: "#", label: "회원가입" },
] as const;

const homepage = {
  utilityLinks,
  navLinks,
  logo: {
    src: "/images/logo-wordmark-gold.png",
    alt: "Baracuda wordmark logo",
    width: 1390,
    height: 338,
    caption: "B A R A C U D A",
  },
  hero: {
    image: "/images/hero.jpg",
    imageAlt: "Baracuda 공간을 담은 대표 이미지",
    title: "머무는 방식까지\n취향이 되는 공간",
    description: "커피와 공간이 하나의 인상으로 남는 바라쿠다.",
    primaryCta: {
      href: "/space",
      label: "공간 살펴보기",
    },
  },
} as const;

export const barracudaSiteConfig: CompanySiteConfig = {
  siteKey: "barracuda",
  homepage,
  homepageIntro: {
    eyebrow: "Space",
    title: "우리만의 장면이\n자연스럽게 완성되는 곳",
    description:
      "일상과 모임, 브랜드 장면까지 자연스럽게 열리는 공간입니다.",
    cta: {
      href: "/space",
      label: "공간 보기",
    },
    primaryImage: {
      src: "/images/cafe.jpg",
      alt: "바라쿠다 공간 전경 이미지",
      title: "Private Flow",
      description: "프라이빗한 시간과 여유로운 체류가 한 공간 안에서 이어지는 장면",
      heightClassName: "min-h-[26rem] sm:min-h-[34rem]",
    },
    secondaryImages: [
      {
        src: "/images/event.jpg",
        alt: "바라쿠다 이벤트 세팅 이미지",
        title: "Celebration",
        description: "가볍게 기념하고 오래 기억되는 순간을 위한 세팅",
      },
      {
        src: "/images/experience.jpg",
        alt: "바라쿠다 경험 장면 이미지",
        title: "Our Scene",
        description: "원하는 방식으로 머무는 시간이 공간의 인상을 완성합니다.",
      },
    ],
  },
  homepageSignatureTabs: [
    {
      key: "private-scene",
      label: "Private Scene",
      title: "사적인 시간의 결",
      description: "작은 모임일수록 분위기가 더 선명해집니다.",
      cta: { href: "/space", label: "공간 문의" },
      featuredMedia: {
        src: "/images/book.jpg",
        alt: "프라이빗한 모임 장면 이미지",
        type: "image",
      },
      gallery: [
        {
          src: "/images/1.jpg",
          alt: "바라쿠다 프라이빗 공간 이미지 1",
          title: "Quiet Gathering",
          description: "너무 크지 않은 자리일수록 공간의 무드는 더 섬세하게 살아납니다.",
        },
        {
          src: "/images/2.jpg",
          alt: "바라쿠다 프라이빗 공간 이미지 2",
          title: "Intimate Table",
          description: "가까운 사람들과의 시간이 자연스럽게 오래 머무는 테이블 장면",
        },
      ],
    },
    {
      key: "celebration",
      label: "Celebration",
      title: "기억에 남는 순간의 분위기",
      description: "기념과 파티도 차분한 무드 안에서 남습니다.",
      cta: { href: "/space", label: "공간 살펴보기" },
      featuredMedia: {
        src: "/images/showcase.jpg",
        alt: "기념과 파티 장면 이미지",
        type: "image",
      },
      gallery: [
        {
          src: "/images/fation.jpg",
          alt: "바라쿠다 셀러브레이션 이미지 1",
          title: "After Hours",
          description: "시간대와 분위기에 따라 전혀 다른 표정을 보여주는 공간의 결",
        },
        {
          src: "/images/3.jpg",
          alt: "바라쿠다 셀러브레이션 이미지 2",
          title: "Soft Statement",
          description: "크게 드러내지 않아도 충분히 선명하게 남는 장면",
        },
      ],
    },
    {
      key: "brand-moment",
      label: "Brand Moment",
      title: "브랜드가 머무는 방식",
      description: "브랜드의 순간이 정제된 인상으로 이어집니다.",
      cta: { href: "/brand", label: "브랜드 보기" },
      featuredMedia: {
        src: "/images/creator.jpg",
        alt: "브랜드 순간을 담은 이미지",
        type: "image",
      },
      gallery: [
        {
          src: "/images/brend-2.jpg",
          alt: "브랜드 장면 이미지 1",
          title: "Presentation",
          description: "브랜드의 태도와 디테일을 차분하게 전달하는 장면",
        },
        {
          src: "/images/brend-4.jpg",
          alt: "브랜드 장면 이미지 2",
          title: "Showcase",
          description: "무엇을 보여주느냐보다 어떻게 남느냐가 더 중요해지는 순간",
        },
      ],
    },
    {
      key: "cafe-lounge",
      label: "Cafe & Lounge",
      title: "일상과 특별함 사이",
      description: "카페와 라운지의 분위기가 자연스럽게 이어집니다.",
      cta: { href: "/coffee", label: "커피 보기" },
      featuredMedia: {
        src: "/images/brend.jpg",
        alt: "카페와 라운지 무드를 보여주는 이미지",
        type: "image",
      },
      gallery: [
        {
          src: "/images/experience.jpg",
          alt: "카페 라운지 이미지 1",
          title: "Calm Rhythm",
          description: "편안한 방문이 곧 바라쿠다의 첫 인상으로 이어지는 리듬",
        },
        {
          src: "/images/cafe.jpg",
          alt: "카페 라운지 이미지 2",
          title: "Lounge Mood",
          description: "일상적인 시간과 특별한 순간을 모두 받아들이는 공간의 여백",
        },
      ],
    },
  ],
  homepagePreviews: {
    spaceExperience: {
      eyebrow: "Scene",
      title: "파티와 모임,\n그리고 각자의 방식",
      description: "시간과 목적에 따라 다른 장면이 펼쳐집니다.",
      cta: { href: "/space", label: "문의하기" },
      surface: "tint",
      images: [
        {
          src: "/images/showcase.jpg",
          alt: "바라쿠다 공간 경험 대표 이미지",
          title: "Event Scene",
          description: "브랜드 쇼케이스와 프라이빗한 장면이 하나의 무드 안에서 이어지는 공간",
          heightClassName: "min-h-[24rem] sm:min-h-[34rem]",
        },
        {
          src: "/images/4.jpg",
          alt: "바라쿠다 공간 경험 이미지 1",
          title: "Private Table",
          description: "조용한 대화와 긴 여운이 자연스럽게 머무는 자리",
        },
        {
          src: "/images/5.jpg",
          alt: "바라쿠다 공간 경험 이미지 2",
          title: "Party Mood",
          description: "가볍게 기념하고 깊게 기억되는 장면의 온도",
        },
        {
          src: "/images/6.jpg",
          alt: "바라쿠다 공간 경험 이미지 3",
          title: "Open Layout",
          description: "쓰임에 따라 다르게 열리는 공간의 여백과 흐름",
        },
      ],
    },
    brand: {
      eyebrow: "Brand",
      title: "공간에 스며든\n브랜드의 태도",
      description: "차분한 감도는 장면과 디테일에서 드러납니다.",
      cta: { href: "/brand", label: "브랜드 보기" },
      images: [
        {
          src: "/images/brend-hero.jpg.jpg",
          alt: "브랜드 프리뷰 대표 이미지",
          title: "Spatial Identity",
          description: "설명보다 먼저 기억되는 공간의 인상과 디테일",
          heightClassName: "min-h-[22rem] sm:min-h-[30rem]",
        },
        {
          src: "/images/brend-1.jpg",
          alt: "브랜드 프리뷰 이미지 1",
          title: "First Impression",
          description: "브랜드의 첫 장면을 만드는 차분한 결",
        },
        {
          src: "/images/brend-3.jpg",
          alt: "브랜드 프리뷰 이미지 2",
          title: "Quiet Tone",
          description: "오래 머무는 시선 안에서 또렷해지는 태도",
        },
      ],
    },
    coffee: {
      eyebrow: "Coffee",
      title: "공간의 분위기를\n완성하는 커피",
      description: "로스터리 기반의 커피가 공간의 인상을 완성합니다.",
      cta: { href: "/coffee", label: "커피 보기" },
      surface: "tint",
      images: [
        {
          src: "/images/roastery.png",
          alt: "커피 프리뷰 대표 이미지",
          title: "Roastery Base",
          description: "공간의 결을 흔들지 않는 균형감 있는 커피의 출발점",
          heightClassName: "min-h-[22rem] sm:min-h-[30rem]",
        },
        {
          src: "/images/roasting.png",
          alt: "커피 프리뷰 이미지 1",
          title: "Roasting",
          description: "과하지 않고 오래 남는 균형의 감도",
        },
        {
          src: "/images/brew.png",
          alt: "커피 프리뷰 이미지 2",
          title: "Brewing",
          description: "한 잔의 리듬까지 세심하게 이어지는 마무리",
        },
      ],
    },
    menu: {
      eyebrow: "Menu",
      title: "머무는 시간을 위한\n셀렉션",
      description: "메뉴도 공간의 흐름 안에서 이어지도록 구성했습니다.",
      cta: { href: "/menu", label: "메뉴 보기" },
      images: [
        {
          src: "/images/ba_menu.jpg",
          alt: "메뉴 프리뷰 대표 이미지",
          title: "Menu Board",
          description: "나열보다 인상으로 먼저 읽히는 메뉴의 구성",
          heightClassName: "min-h-[22rem] sm:min-h-[30rem]",
        },
        {
          src: "/images/latte.png",
          alt: "메뉴 프리뷰 이미지 1",
          title: "Milk Texture",
          description: "부드러운 결이 오래 남는 시그니처 메뉴 장면",
        },
        {
          src: "/images/ade.png",
          alt: "메뉴 프리뷰 이미지 2",
          title: "Seasonal Mood",
          description: "공간의 인상과 자연스럽게 어울리는 음료 셀렉션",
        },
      ],
    },
    visit: {
      eyebrow: "Visit",
      title: "방문을 위한\n기본 정보",
      description: "방문에 필요한 정보만 간결하게 정리했습니다.",
      cta: { href: "/visit", label: "길찾기" },
      surface: "tint",
      images: [
        {
          src: "/images/brend-1.jpg",
          alt: "방문 프리뷰 대표 이미지",
          title: "Arrival",
          description: "첫 방문의 분위기를 미리 느낄 수 있는 장면",
          heightClassName: "min-h-[20rem] sm:min-h-[28rem]",
        },
        {
          src: "/images/2.jpg",
          alt: "방문 프리뷰 이미지 1",
          title: "View",
          description: "방문 경험과 연결되는 시선의 흐름",
        },
      ],
    },
  },
  footer: {
    logo: homepage.logo,
    statement: "커피와 공간, 그리고 머무는 장면을 조용하게 이어가는 브랜드",
    subline: "바라쿠다 로스터리 & 카페",
    address: "서울특별시 용산구 이태원로 29, 로얄파크컨벤션 1층",
    familySites: [
      { href: "http://www.peacenpark.com/", label: "Peace N Park" },
      { href: "https://royalpark.kr/", label: "Royal Park" },
      { href: "https://cnctechlab.co.kr/", label: "CNC Tech Lab" },
    ],
    socialLinks: [
      { href: "https://blog.naver.com/baracudacafe", label: "Blog" },
      { href: "https://www.youtube.com/@barancuda", label: "YouTube" },
      { href: "https://www.instagram.com/baracuda.cafe", label: "Instagram" },
    ],
    copyright: "ⓒ 2026 Baracuda. All rights reserved.",
  },
  brand: {
    metadata: {
      title: "Brand | Baracuda",
      description: "바라쿠다 브랜드 무드와 공간 이미지를 중심으로 소개하는 페이지입니다.",
    },
    hero: {
      title: "BARACUDA\n브랜드 소개",
      description: "도심의 뷰와 차분한 리듬, 그리고 커피가 한 장면으로 남는 바라쿠다의 분위기를 이미지 중심으로 소개합니다.",
      image: "/images/brend.jpg",
      imageAlt: "Baracuda 브랜드 대표 이미지",
    },
    gallerySections: [
      {
        eyebrow: "Brand Gallery",
        title: "브랜드의 첫 인상을\n이미지로 보여줍니다",
        description: "설명보다 먼저 기억되는 장면과 분위기를 앞세웠습니다.",
        columns: 3,
        images: [
          { src: "/images/brend-1.jpg", alt: "바라쿠다 브랜드 이미지 1", title: "Signature Mood", description: "브랜드의 첫 인상을 만드는 장면" },
          { src: "/images/brend-2.jpg", alt: "바라쿠다 브랜드 이미지 2", title: "Calm Interior", description: "차분하게 머무는 실내의 결" },
          { src: "/images/brend-3.jpg", alt: "바라쿠다 브랜드 이미지 3", title: "Natural Flow", description: "커피와 대화가 자연스럽게 이어지는 흐름" },
        ],
      },
      {
        eyebrow: "Story",
        title: "도심의 뷰와\n차분한 리듬",
        description: "브랜드 소개 역시 텍스트보다 큰 비주얼과 짧은 문장으로 읽히도록 정리했습니다.",
        columns: 2,
        surface: "tint",
        images: [
          { src: "/images/brend-hero.jpg.jpg", alt: "바라쿠다 브랜드 배경 이미지", title: "Brand Story", description: "도심 속에서 조용한 감도와 경험을 쌓아가는 공간" },
          { src: "/images/brend-4.jpg", alt: "바라쿠다 브랜드 이미지 4", title: "Detail", description: "디테일에서 드러나는 브랜드 무드" },
        ],
      },
    ],
    noteSection: {
      eyebrow: "Brand Note",
      body: "바라쿠다는 커피를 마시는 장소를 넘어, 머무는 분위기와 장면이 함께 기억되는 브랜드를 지향합니다.",
    },
  },
  coffee: {
    metadata: {
      title: "Coffee | Baracuda",
      description: "바라쿠다 커피의 로스터리, 로스팅, 브루잉 이미지를 중심으로 소개합니다.",
    },
    hero: {
      title: "BARACUDA\n커피",
      description: "로스터리 기반의 이미지와 질감을 중심으로 바라쿠다 커피의 방향을 보여줍니다.",
      image: "/images/roastery.png",
      imageAlt: "Baracuda 로스터리 대표 이미지",
      ctaHref: "/menu",
      ctaLabel: "메뉴 보기",
    },
    gallerySections: [
      {
        eyebrow: "Coffee Process",
        title: "원두에서 한 잔까지\n같은 톤으로 이어집니다",
        description: "로스터리 기반의 신뢰를 설명보다 이미지와 짧은 문장으로 먼저 전달합니다.",
        columns: 3,
        images: [
          { src: "/images/roastery.png", alt: "바라쿠다 로스터리 이미지", title: "Roastery", description: "기준이 되는 로스터리 기반" },
          { src: "/images/roasting.png", alt: "바라쿠다 로스팅 이미지", title: "Roasting", description: "과하지 않고 오래 남는 균형" },
          { src: "/images/brew.png", alt: "바라쿠다 브루잉 이미지", title: "Brewing", description: "질감과 온도를 세심하게 맞춘 한 잔" },
        ],
      },
      {
        eyebrow: "Menu Mood",
        title: "메뉴 역시\n브랜드의 분위기 안에 있습니다",
        description: "단순한 메뉴 설명보다 실제 장면과 질감이 먼저 느껴지도록 구성했습니다.",
        columns: 3,
        surface: "tint",
        images: [
          { src: "/images/ame.png", alt: "아메리카노 이미지", title: "Americano", description: "기본이 가장 또렷하게 드러나는 한 잔" },
          { src: "/images/latte.webp", alt: "라떼 이미지", title: "Latte", description: "부드러운 질감과 균형이 중심이 되는 메뉴" },
          { src: "/images/ade.png", alt: "에이드 이미지", title: "Seasonal Drink", description: "커피 외 음료도 같은 톤으로 이어집니다" },
        ],
      },
    ],
    menuShowcase: {
      eyebrow: "Full Menu",
      title: "MENU MOOD 아래에서\n전체 메뉴를 확인하세요",
      description: "대표 이미지와 함께 실제 메뉴판을 길게 배치해, 커피 페이지 안에서 메뉴까지 자연스럽게 이어서 볼 수 있게 정리했습니다.",
      featureImage: {
        src: "/images/ba_menu.jpg",
        alt: "바라쿠다 메뉴 보드 이미지",
        title: "Menu Board",
        description: "커피의 무드 아래에서 메뉴 선택까지 같은 흐름으로 이어지도록 구성한 보드 이미지",
      },
      fullMenuImage: {
        src: "/images/menu.png",
        alt: "바라쿠다 전체 메뉴 이미지",
      },
    },
    actionLinks: [
      { href: "/menu", label: "메뉴 보기" },
      { href: "/store", label: "스토어 보기", variant: "ghost" },
    ],
  },
  space: {
    metadata: {
      title: "Space | Baracuda",
      description: "바라쿠다 공간의 분위기와 활용 장면을 갤러리 중심으로 보여주는 페이지입니다.",
    },
    hero: {
      title: "BARACUDA\n공간",
      description: "카페, 모임, 행사, 브랜드 경험까지 하나의 분위기 안에서 이어지는 공간을 이미지 중심으로 보여줍니다.",
      image: "/images/cafe.jpg",
      imageAlt: "Baracuda 공간 대표 이미지",
      ctaHref: "#space-inquiry",
      ctaLabel: "공간 문의",
    },
    gallerySections: [
      {
        eyebrow: "Main Space",
        title: "공간의 기본 장면을\n먼저 보여줍니다",
        description: "설명보다 먼저 공간의 결을 느낄 수 있게 대표 장면을 크게 배치했습니다.",
        columns: 3,
        images: [
          { src: "/images/cafe.jpg", alt: "바라쿠다 카페 공간 이미지", title: "Cafe", description: "일상적인 방문이 자연스럽게 이어지는 메인 공간" },
          { src: "/images/event.jpg", alt: "바라쿠다 이벤트 이미지", title: "Event", description: "작은 행사가 어울리는 장면" },
          { src: "/images/experience.jpg", alt: "바라쿠다 경험 이미지", title: "Experience", description: "브랜드 경험과 프로그램이 가능한 분위기" },
        ],
      },
      {
        eyebrow: "Use Cases",
        title: "행사와 모임도\n같은 무드 안에서",
        description: "프라이빗 모임, 북클럽, 쇼케이스 등 확장 가능한 장면을 함께 제시합니다.",
        columns: 3,
        surface: "tint",
        images: [
          { src: "/images/book.jpg", alt: "북클럽 이미지", title: "Book Club", description: "대화와 집중이 함께하는 시간" },
          { src: "/images/fation.jpg", alt: "브랜드 모임 이미지", title: "Brand Meeting", description: "정제된 무드로 이어지는 소개와 모임" },
          { src: "/images/showcase.jpg", alt: "쇼케이스 이미지", title: "Showcase", description: "브랜드나 제품을 조용히 보여주는 자리" },
        ],
      },
      {
        eyebrow: "Full Gallery",
        title: "이미지로 먼저 느끼는\n바라쿠다 공간",
        columns: 3,
        images: [
          { src: "/images/1.jpg", alt: "바라쿠다 내부 갤러리 1" },
          { src: "/images/2.jpg", alt: "바라쿠다 내부 갤러리 2" },
          { src: "/images/3.jpg", alt: "바라쿠다 내부 갤러리 3" },
          { src: "/images/4.jpg", alt: "바라쿠다 내부 갤러리 4" },
          { src: "/images/5.jpg", alt: "바라쿠다 내부 갤러리 5" },
          { src: "/images/6.jpg", alt: "바라쿠다 내부 갤러리 6" },
        ],
      },
    ],
    inquirySectionId: "space-inquiry",
    inquiryForm: {
      title: "행사 문의",
      description: "대관 및 공간 사용 가능 여부를 먼저 확인하는 문의 폼입니다.",
      submitLabel: "문의 보내기",
      successMessage: "문의가 접수되었습니다. 확인 후 연락드리겠습니다.",
      subject: "[Baracuda] 공간 문의",
      fields: [
        { name: "name", label: "이름", type: "text", placeholder: "이름을 입력해 주세요." },
        { name: "phone", label: "연락처", type: "tel", placeholder: "010-0000-0000" },
        { name: "email", label: "이메일", type: "email", placeholder: "name@example.com" },
        { name: "eventType", label: "행사 유형", type: "text", placeholder: "예: 브랜드 모임" },
        { name: "eventDate", label: "행사 날짜", type: "date" },
        { name: "expectedGuests", label: "예상 인원", type: "number", placeholder: "20" },
      ],
      messageField: {
        name: "message",
        label: "문의 내용",
        placeholder: "행사 내용과 일정, 필요한 사항을 적어 주세요.",
      },
    },
  },
  menu: {
    metadata: {
      title: "Menu | Baracuda",
      description: "바라쿠다 메뉴와 음료 이미지를 갤러리 중심으로 보여주는 페이지입니다.",
    },
    hero: {
      title: "BARACUDA\n메뉴",
      description: "메뉴도 텍스트만 나열하지 않고, 음료와 디저트의 이미지를 중심으로 분위기 있게 정리했습니다.",
      image: "/images/menu.png",
      imageAlt: "Baracuda 메뉴 대표 이미지",
      ctaHref: "#menu-order",
      ctaLabel: "주문 문의",
    },
    gallerySections: [
      {
        eyebrow: "Menu Gallery",
        title: "메뉴는\n분위기와 함께 보여줍니다",
        description: "카테고리 나열보다 먼저 음료와 메뉴보드 이미지를 통해 인상을 전달합니다.",
        columns: 3,
        images: [
          { src: "/images/ba_menu.jpg", alt: "바라쿠다 메뉴 이미지", title: "Menu Board", description: "브랜드 톤 안에서 정리된 실제 메뉴 구성" },
          { src: "/images/ame.png", alt: "아메리카노 이미지", title: "Coffee", description: "기본 메뉴의 균형과 톤" },
          { src: "/images/latte.png", alt: "라떼 이미지", title: "Milk Menu", description: "질감과 분위기가 함께 느껴지는 메뉴" },
        ],
      },
      {
        eyebrow: "More Mood",
        title: "음료와 디저트도\n같은 무드로",
        description: "메뉴 페이지 역시 공간과 브랜드 톤을 함께 느낄 수 있게 구성했습니다.",
        columns: 2,
        surface: "tint",
        images: [
          { src: "/images/ade.png", alt: "에이드 이미지", title: "Seasonal Drink", description: "커피 외 메뉴도 같은 인상으로 이어집니다" },
          { src: "/images/book.jpg", alt: "디저트와 분위기 이미지", title: "Dessert Mood", description: "메뉴 페이지도 공간 분위기와 함께 읽히도록 구성" },
        ],
      },
    ],
    orderSectionId: "menu-order",
    orderForm: {
      title: "주문 요청",
      description: "카페 주문과 단체 주문 가능 여부를 먼저 확인하는 요청 폼입니다.",
      submitLabel: "주문 요청 보내기",
      successMessage: "주문 요청이 접수되었습니다. 확인 후 연락드리겠습니다.",
      subject: "[Baracuda] 주문 요청",
      orderTypes: ["카페 주문", "단체 주문", "행사 주문", "케이터링 문의"],
      fields: [
        { name: "name", label: "이름", type: "text", placeholder: "이름을 입력해 주세요." },
        { name: "phone", label: "연락처", type: "tel", placeholder: "010-0000-0000" },
        { name: "email", label: "이메일", type: "email", placeholder: "name@example.com" },
        { name: "pickupDate", label: "수령 날짜", type: "date" },
        { name: "pickupTime", label: "수령 시간", type: "time" },
      ],
      messageField: {
        name: "orderDetails",
        label: "주문 내용",
        placeholder: "원하는 메뉴와 수량, 일정 등을 적어 주세요.",
      },
    },
  },
  store: {
    metadata: {
      title: "Store | Baracuda",
      description: "바라쿠다 스토어 방향을 갤러리 중심 프리뷰로 보여주는 페이지입니다.",
    },
    hero: {
      title: "BARACUDA\n스토어 프리뷰",
      description: "원두와 굿즈, 라이프스타일 제품 방향을 이미지 중심의 프리뷰 페이지로 정리했습니다.",
      image: "/images/apollo.png",
      imageAlt: "Baracuda 스토어 대표 이미지",
      ctaHref: "/coffee",
      ctaLabel: "커피 보기",
    },
    gallerySections: [
      {
        eyebrow: "Collections",
        title: "카테고리도\n먼저 장면으로 보여줍니다",
        description: "스토어는 설명보다 제품 이미지와 오브젝트 분위기가 먼저 읽히도록 구성했습니다.",
        columns: 3,
        images: [
          { src: "/images/apollo.png", alt: "원두 이미지", title: "Coffee Beans", description: "스토어의 중심이 되는 원두 셀렉션" },
          { src: "/images/goods.png", alt: "굿즈 이미지", title: "Goods", description: "브랜드의 무드를 이어가는 오브젝트" },
          { src: "/images/Parcera.png", alt: "라이프스타일 이미지", title: "Lifestyle", description: "일상 속으로 확장되는 제품 방향" },
        ],
      },
      {
        eyebrow: "Preview",
        title: "프리뷰 중심의\n제품 방향",
        description: "현재는 결제보다 제품 감도와 카테고리 방향을 미리 보여주는 역할에 집중합니다.",
        columns: 2,
        surface: "tint",
        images: [
          { src: "/images/latte.png", alt: "라떼 이미지", title: "Drink Objects", description: "음료와 제품 이미지의 연결감" },
          { src: "/images/ame.png", alt: "아메리카노 이미지", title: "Brand Daily", description: "데일리 무드로 이어지는 상품 감도" },
        ],
      },
    ],
    actionLinks: [
      { href: "/coffee", label: "커피 보기" },
      { href: "/visit", label: "방문 정보", variant: "ghost" },
    ],
  },
  visit: {
    metadata: {
      title: "Visit | Baracuda",
      description: "바라쿠다 방문 정보와 공간 이미지를 간결하게 보여주는 페이지입니다.",
    },
    hero: {
      title: "BARACUDA\n오시는 길",
      description: "방문 정보도 이미지와 핵심 정보 카드 위주로 단순하게 정리했습니다.",
      image: "/images/brend-hero.jpg.jpg",
      imageAlt: "Baracuda 방문 대표 이미지",
      ctaHref:
        "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C%2029%20%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%BB%A8%EB%B2%A4%EC%85%98%201%EC%B8%B5",
      ctaLabel: "길찾기",
    },
    gallerySections: [
      {
        eyebrow: "Visit Mood",
        title: "방문 전에도\n분위기를 먼저 느끼도록",
        description: "위치 안내 페이지도 정보만 나열하지 않고, 공간의 분위기가 먼저 읽히도록 구성했습니다.",
        columns: 3,
        images: [
          { src: "/images/brend-1.jpg", alt: "방문 이미지 1", title: "Arrival", description: "첫 방문의 분위기를 만드는 장면" },
          { src: "/images/cafe.jpg", alt: "방문 이미지 2", title: "Interior", description: "머무는 동안 가장 먼저 만나는 실내 분위기" },
          { src: "/images/2.jpg", alt: "방문 이미지 3", title: "View", description: "방문 경험과 연결되는 시선" },
        ],
      },
    ],
    infoSection: {
      eyebrow: "Visit Info",
      title: "필요한 정보만\n빠르게 확인하세요",
      surface: "tint",
      items: [
        { label: "주소", value: "서울특별시 용산구 이태원로 29, 로얄파크컨벤션 1층" },
        { label: "운영 시간", value: "매주 월요일 휴무 / 10:00-19:00" },
        { label: "연락처", value: "02-501-4527" },
        { label: "주차", value: "지상 및 지하 주차장 이용 가능" },
      ],
      links: [
        {
          href:
            "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C%2029%20%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%BB%A8%EB%B2%A4%EC%85%98%201%EC%B8%B5",
          label: "길찾기",
        },
        { href: "https://www.instagram.com/baracuda.cafe", label: "인스타그램", variant: "ghost" },
      ],
    },
  },
  contact: {
    formRecipientEmail: "4everlll@naver.com",
  },
};
