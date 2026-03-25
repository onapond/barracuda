import type { CompanySiteConfig } from "@/lib/company-site";

const navLinks = [
  { href: "/brand", label: "Brand" },
  { href: "/coffee", label: "Coffee" },
  { href: "/space", label: "Space" },
  { href: "/store", label: "Store" },
  { href: "/visit", label: "Visit" },
] as const;

const utilityLinks = [] as const;

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
    image: "/images/landing/intro/hero.jpg",
    imageAlt: "바라쿠다 메인 공간 전경",
    title: "커피와 공간의 결이 만나는 곳",
    description: "로스터리의 밀도와 차분한 공간의 감도를 한곳에 담았습니다.",
    primaryCta: {
      href: "/visit",
      label: "방문 정보 보기",
    },
  },
} as const;

export const barracudaSiteConfig: CompanySiteConfig = {
  siteKey: "barracuda",
  homepage,
  homepageIntro: {
    eyebrow: "BARRACUDA",
    title: "커피와 공간을\n한 결로 엮습니다",
    description: "맛과 분위기를 따로 나누지 않습니다.",
    cta: {
      href: "/brand",
      label: "브랜드 보기",
    },
    primaryImage: {
      src: "/images/landing/intro/main.jpg",
      alt: "바라쿠다 내부 공간 사진",
      title: "Roastery & Space",
      description: "커피의 결이 공간으로 이어지는 곳",
      heightClassName: "min-h-[26rem] sm:min-h-[34rem]",
    },
    secondaryImages: [
      {
        src: "/images/landing/intro/sub-1.png",
        alt: "바라쿠다 이벤트 세팅 이미지",
        title: "커피",
        description: "방향이 분명한 원두 선택",
      },
      {
        src: "/images/landing/intro/sub-2.jpg",
        alt: "바라쿠다 경험 장면 이미지",
        title: "공간",
        description: "머무는 시간이 인상을 만듭니다",
      },
    ],
  },
  homepageSignatureTabs: [
    {
      key: "private-scene",
      label: "Private Scene",
      title: "작은 모임의 결",
      description: "규모가 작을수록 공간의 결은 더 선명합니다.",
      cta: { href: "/space", label: "공간 보기" },
      featuredMedia: {
        src: "/images/landing/tabs/private-scene/main.jpg",
        alt: "작은 모임이 열리는 테이블 장면",
        type: "image",
      },
      gallery: [
        {
          src: "/images/landing/tabs/private-scene/sub-1.jpg",
          alt: "바라쿠다 프라이빗 공간 이미지 1",
          title: "Quiet Gathering",
          description: "소수가 모일수록 공간의 여백과 결이 더 선명하게 드러납니다.",
        },
        {
          src: "/images/landing/tabs/private-scene/sub-2.jpg",
          alt: "바라쿠다 프라이빗 공간 이미지 2",
          title: "Intimate Table",
          description: "가까운 사람들과의 시간이 편안하게 이어지는 테이블 장면",
        },
      ],
    },
    {
      key: "celebration",
      label: "Celebration",
      title: "기억에 남는 밤",
      description: "기념과 파티도 소란 없이 차분하게 남습니다.",
      cta: { href: "/space", label: "공간 보기" },
      featuredMedia: {
        src: "/images/landing/tabs/celebration/main.jpg",
        alt: "파티 세팅이 된 바라쿠다 공간",
        type: "image",
      },
      gallery: [
        {
          src: "/images/landing/tabs/celebration/sub-1.jpg",
          alt: "바라쿠다 셀러브레이션 이미지 1",
          title: "After Hours",
          description: "시간대에 따라 전혀 다른 표정을 보여주는 공간의 결",
        },
        {
          src: "/images/landing/tabs/celebration/sub-2.jpg",
          alt: "바라쿠다 셀러브레이션 이미지 2",
          title: "Soft Statement",
          description: "과하게 드러내지 않아도 선명하게 기억되는 장면",
        },
      ],
    },
    {
      key: "cafe-lounge",
      label: "Cafe & Lounge",
      title: "로스터리 커피와\n함께 머무는 카페",
      description: "로스터리 기반의 커피가 공간의 인상과 함께 나옵니다.",
      cta: { href: "/coffee", label: "커피 보기" },
      featuredMedia: {
        src: "/images/landing/tabs/cafe-lounge/main.jpg",
        alt: "라운지처럼 머무는 카페 공간",
        type: "image",
      },
      gallery: [
        {
          src: "/images/landing/tabs/cafe-lounge/sub-1.jpg",
          alt: "카페 라운지 이미지 1",
          title: "Calm Rhythm",
          description: "커피 한 잔이 공간의 분위기와 같은 온도로 이어지는 리듬",
        },
        {
          src: "/images/landing/tabs/cafe-lounge/sub-2.jpg",
          alt: "카페 라운지 이미지 2",
          title: "Lounge Mood",
          description: "일상의 방문도 바라쿠다만의 결로 기억됩니다",
        },
      ],
    },
    {
      key: "brand-goods",
      label: "Brand & Goods",
      title: "바라쿠다의 결을\n담은 제품들",
      description: "공간에서 시작한 감도를 일상으로 이어가는 라이프스타일 굿즈.",
      cta: { href: "/store", label: "스토어 보기" },
      featuredMedia: {
        src: "/images/landing/tabs/brand-goods/main.png",
        alt: "바라쿠다 라이프스타일 굿즈 대표 이미지",
        type: "image",
      },
      gallery: [
        {
          src: "/images/landing/tabs/brand-goods/sub-1.png",
          alt: "바라쿠다 굿즈 이미지 1",
          title: "Collection",
          description: "브랜드의 무드를 손에 담는 오브제",
        },
        {
          src: "/images/landing/tabs/brand-goods/sub-2.png",
          alt: "바라쿠다 굿즈 이미지 2",
          title: "Daily Object",
          description: "일상 안에 자연스럽게 놓이는 바라쿠다의 결",
        },
      ],
    },
  ],
  homepagePreviews: {
    spaceExperience: {
      eyebrow: "SPACE",
      title: "머무는 시간이\n인상을 만듭니다",
      description: "카페로 머물거나, 모임으로 채우거나. 공간은 목적에 맞게 자리를 바꿉니다.",
      cta: { href: "/space", label: "공간 보기" },
      surface: "tint",
      images: [
        {
          src: "/images/landing/previews/space-featured.jpg",
          alt: "바라쿠다 공간 경험 대표 이미지",
          title: "Event Scene",
          description: "브랜드 쇼케이스와 프라이빗한 장면이 하나의 무드 안에서 이어지는 공간",
          heightClassName: "min-h-[24rem] sm:min-h-[34rem]",
        },
        {
          src: "/images/landing/previews/space-sub-1.jpg",
          alt: "바라쿠다 공간 경험 이미지 1",
          title: "Private Table",
          description: "조용한 대화와 긴 여운이 자연스럽게 머무는 자리",
        },
        {
          src: "/images/landing/previews/space-sub-2.jpg",
          alt: "바라쿠다 공간 경험 이미지 2",
          title: "Open Layout",
          description: "쓰임에 따라 다르게 열리는 공간의 여백과 흐름",
        },
      ],
    },
    brand: {
      eyebrow: "BRAND",
      title: "공간과 커피,\n하나의 결로",
      description: "바라쿠다는 맛과 분위기를 따로 나누지 않습니다.",
      cta: { href: "/brand", label: "브랜드 보기" },
      images: [
        {
          src: "/images/landing/previews/brand-featured.png",
          alt: "브랜드 프리뷰 대표 이미지",
          title: "Spatial Identity",
          description: "설명보다 먼저 기억되는 공간의 인상과 디테일",
          heightClassName: "min-h-[22rem] sm:min-h-[30rem]",
        },
        {
          src: "/images/landing/previews/brand-sub-1.jpg",
          alt: "브랜드 프리뷰 이미지 1",
          title: "First Impression",
          description: "브랜드의 첫 장면을 만드는 차분한 결",
        },
        {
          src: "/images/landing/previews/brand-sub-2.png",
          alt: "브랜드 프리뷰 이미지 2",
          title: "Quiet Tone",
          description: "오래 머무는 시선 안에서 또렷해지는 태도",
        },
      ],
    },
    coffee: {
      eyebrow: "COFFEE",
      title: "로스터리 기반의\n커피를 선보입니다",
      description: "원두 선택부터 잔의 인상까지, 바라쿠다의 방향이 담긴 커피입니다.",
      cta: { href: "/coffee", label: "커피 보기" },
      surface: "tint",
      images: [
        {
          src: "/images/landing/previews/coffee-featured.png",
          alt: "커피 프리뷰 대표 이미지",
          title: "Roastery Base",
          description: "공간의 결을 흐트러뜨리지 않는 균형감 있는 커피의 출발점",
          heightClassName: "min-h-[22rem] sm:min-h-[30rem]",
        },
        {
          src: "/images/landing/previews/coffee-sub-1.png",
          alt: "커피 프리뷰 이미지 1",
          title: "Roasting",
          description: "과하지 않고 오래 남는 균형의 감도",
        },
        {
          src: "/images/landing/previews/coffee-sub-2.png",
          alt: "커피 프리뷰 이미지 2",
          title: "Brewing",
          description: "한 잔의 리듬까지 세심하게 이어지는 마무리",
        },
      ],
    },
    menu: {
      eyebrow: "MENU",
      title: "메뉴도\n흐름이 있습니다",
      description: "메뉴판은 길게, 문장은 짧게. 고르기만 편하면 됩니다.",
      cta: { href: "/menu", label: "메뉴 보기" },
      images: [
        {
          src: "/images/landing/previews/menu-featured.png",
          alt: "메뉴 프리뷰 대표 이미지",
          title: "Menu Board",
          description: "이름보다 인상으로 먼저 읽히는 메뉴의 구성",
          heightClassName: "min-h-[22rem] sm:min-h-[30rem]",
        },
        {
          src: "/images/landing/previews/menu-sub-1.png",
          alt: "메뉴 프리뷰 이미지 1",
          title: "Milk Texture",
          description: "부드러운 결이 오래 남는 시그니처 메뉴 장면",
        },
        {
          src: "/images/landing/previews/menu-sub-2.png",
          alt: "메뉴 프리뷰 이미지 2",
          title: "Seasonal Mood",
          description: "공간의 인상과 자연스럽게 어울리는 음료 셀렉션",
        },
      ],
    },
    visit: {
      eyebrow: "VISIT",
      title: "바라쿠다를 직접\n경험해 보세요",
      description: "방문 전 필요한 정보만 간결하게 정리했습니다.",
      cta: { href: "/visit", label: "방문 정보 보기" },
      surface: "tint",
      images: [
        {
          src: "/images/landing/previews/visit-featured.jpg",
          alt: "방문 프리뷰 대표 이미지",
          title: "Arrival",
          description: "첫 방문의 분위기를 미리 느낄 수 있는 장면",
          heightClassName: "min-h-[20rem] sm:min-h-[28rem]",
        },
        {
          src: "/images/landing/previews/visit-sub-1.png",
          alt: "방문 프리뷰 이미지 1",
          title: "View",
          description: "방문 경험과 연결되는 시선의 흐름",
        },
        {
          src: "/images/landing/previews/visit-sub-2.jpg",
          alt: "방문 프리뷰 이미지 2",
          title: "Interior",
          description: "들어서는 순간 느껴지는 공간의 결",
        },
        {
          src: "/images/landing/previews/visit-sub-3.jpg",
          alt: "방문 프리뷰 이미지 3",
          title: "Mood",
          description: "머무는 동안 자연스럽게 남는 분위기",
        },
      ],
    },
  },
  footer: {
    logo: homepage.logo,
    statement: "커피와 공간의 결이 만나는 곳, 바라쿠다",
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
      description: "바라쿠다는 우리들만의 프라이빗한 시간까지 담을 수 있는 특별한 카페입니다.",
    },
    hero: {
      title: "특별한 카페, 우리들만의 프라이빗 공간",
      description: "커피 한 잔도, 우리끼리만의 시간도 자연스럽게 이어지는 장소입니다. 평범한 카페보다 조용하고, 더 사적입니다.",
      image: "/images/brand/hero.jpg",
      imageAlt: "바라쿠다 브랜드 대표 공간 이미지",
    },
    gallerySections: [
      {
        eyebrow: "Brand Gallery",
        title: "우리끼리\n있는 것처럼 조용한 카페",
        description: "테이블 간격과 공간의 여백이 우리끼리 머무는 시간을 더 편하게 만듭니다.",
        columns: 3,
        images: [
          { src: "/images/brand/gallery-1/mood-1.jpg", alt: "바라쿠다 브랜드의 첫인상이 담긴 실내 장면", title: "Signature Mood", description: "브랜드의 첫인상을 만드는 장면" },
          { src: "/images/brand/gallery-1/mood-2.jpg", alt: "차분하게 머물게 하는 바라쿠다 실내 인테리어", title: "Calm Interior", description: "차분하게 머물게 하는 실내의 결" },
          { src: "/images/brand/gallery-1/mood-3.jpg", alt: "커피와 대화가 자연스럽게 이어지는 바라쿠다 공간", title: "Natural Flow", description: "커피와 대화가 자연스럽게 이어지는 흐름" },
        ],
      },
      {
        eyebrow: "Story",
        title: "커피만 마시고 가기엔\n아쉬운 카페",
        description: "커피를 마시는 시간만이 아니라 함께 보내는 시간까지 편하게 이어지도록 만들었습니다.",
        columns: 2,
        surface: "tint",
        images: [
          { src: "/images/brand/gallery-2/story.jpg", alt: "도심 속 차분한 흐름이 담긴 바라쿠다 브랜드 전경", title: "Brand Story", description: "도심 한가운데서도 차분한 흐름을 지키는 공간" },
          { src: "/images/brand/gallery-2/detail.jpg", alt: "브랜드 무드가 드러나는 바라쿠다 공간 디테일", title: "Detail", description: "작은 디테일에서 또렷해지는 브랜드의 무드" },
        ],
      },
    ],
    noteSection: {
      eyebrow: "Brand Note",
      body: "카페이면서 우리만의 장소가 되는 곳. 그게 바라쿠다입니다.",
    },
  },
  coffee: {
    metadata: {
      title: "Coffee | Baracuda",
      description: "바라쿠다 커피는 이 공간을 특별한 카페로 기억하게 만드는 중요한 이유입니다.",
    },
    hero: {
      title: "머무는 시간에 맞춘 커피",
      description: "로스터리 베이스로 직접 준비하는 커피입니다. 천천히 머무는 시간에 맞춰 차분하게 냅니다.",
      image: "/images/coffee/hero.png",
      imageAlt: "바라쿠다 로스터리 대표 이미지",
      ctaHref: "/menu",
      ctaLabel: "메뉴 보기",
    },
    gallerySections: [
      {
        eyebrow: "Coffee Process",
        title: "조용히 머무는\n시간에 어울리는 커피",
        description: "바라쿠다 커피는 빨리 마시고 잊히는 쪽보다, 천천히 머물게 하는 쪽에 가깝습니다.",
        columns: 3,
        images: [
          { src: "/images/roastery.png", alt: "바라쿠다 로스터리 이미지", title: "Roastery", description: "기준이 되는 로스터리 기반", href: "https://cnctechlab.co.kr/", hoverLabel: "바라쿠다 커피 더 자세히 알아보기 →" },
          { src: "/images/roasting.png", alt: "바라쿠다 로스팅 이미지", title: "Roasting", description: "과하지 않고 오래 남는 균형" },
          { src: "/images/brew.png", alt: "바라쿠다 브루잉 이미지", title: "Brewing", description: "질감과 온도를 세심하게 맞춘 한 잔" },
        ],
      },
      {
        eyebrow: "Menu Mood",
        title: "한 잔도 가볍게\n내지 않습니다",
        description: "공간이 조용하면 커피도 조용합니다. 튀는 것보다 오래 남는 쪽으로 만들었습니다.",
        columns: 3,
        surface: "tint",
        images: [
          { src: "/images/ame.png", alt: "아메리카노 이미지", title: "아메리카노" },
          { src: "/images/latte.webp", alt: "카파라떼 이미지", title: "카파라떼" },
          { src: "/images/latte.webp", alt: "바닐라 라떼 이미지", title: "바닐라 라떼" },
          { src: "/images/brew.png", alt: "페퍼민트 이미지", title: "페퍼민트" },
          { src: "/images/brew.png", alt: "캐모마일 이미지", title: "캐모마일" },
          { src: "/images/brew.png", alt: "루이보스티 이미지", title: "루이보스티" },
          { src: "/images/brew.png", alt: "히비스커스 이미지", title: "히비스커스" },
          { src: "/images/ade.png", alt: "레몬 얼그레이 이미지", title: "레몬 얼그레이" },
          { src: "/images/ade.png", alt: "애플 피치 우롱티 이미지", title: "애플 피치 우롱티" },
          { src: "/images/ade.png", alt: "애플 피치 시나몬 루이보스 이미지", title: "애플 피치 시나몬 루이보스" },
          { src: "/images/ade.png", alt: "딸기 피치 루이보스 이미지", title: "딸기 피치 루이보스" },
          { src: "/images/ade.png", alt: "베리썸 히비스커스 이미지", title: "베리썸 히비스커스" },
          { src: "/images/ade.png", alt: "아이스티 이미지", title: "아이스티" },
          { src: "/images/ade.png", alt: "레몬에이드 이미지", title: "레몬에이드" },
          { src: "/images/ade.png", alt: "청포도에이드 이미지", title: "청포도에이드" },
          { src: "/images/ade.png", alt: "자몽에이드 이미지", title: "자몽에이드" },
          { src: "/images/ade.png", alt: "분다버그 이미지", title: "분다버그" },
          { src: "/images/ade.png", alt: "오렌지 착즙 주스 이미지", title: "오렌지 착즙 주스" },
          { src: "/images/ba_menu.jpg", alt: "소금빵 이미지", title: "소금빵" },
        ],
      },
    ],
    actionLinks: [
      { href: "/menu", label: "메뉴 보기" },
      { href: "/store", label: "스토어 보기", variant: "ghost" },
    ],
  },
  space: {
    metadata: {
      title: "Space | Baracuda",
      description: "프라이빗 모임부터 브랜드 행사까지. 대관 가능한 바라쿠다 공간입니다.",
    },
    hero: {
      title: "우리끼리만 쓰는\n프라이빗 공간",
      description: "카페로 와도 되고, 우리끼리 빌려서 써도 됩니다. 소규모 모임부터 브랜드 행사까지 대관 가능합니다.",
      image: "/images/cafe.jpg",
      imageAlt: "Baracuda 공간 대표 이미지",
      ctaHref: "#space-inquiry",
      ctaLabel: "공간 문의",
    },
    gallerySections: [
      {
        eyebrow: "Main Space",
        title: "여백과 조명이\n분위기를 만드는 곳",
        description: "테이블 간격과 조명이 프라이빗한 분위기를 만듭니다. 카페인데 우리끼리 있는 것 같은 장소입니다.",
        columns: 3,
        images: [
          { src: "/images/cafe.jpg", alt: "바라쿠다 카페 공간 이미지", title: "Cafe", description: "일상의 방문이 자연스럽게 이어지는 메인 공간" },
          { src: "/images/event.jpg", alt: "바라쿠다 이벤트 이미지", title: "Event", description: "작은 행사와 기념이 어울리는 장면" },
          { src: "/images/experience.jpg", alt: "바라쿠다 경험 이미지", title: "Experience", description: "브랜드 경험과 프로그램이 가능한 분위기" },
        ],
      },
      {
        eyebrow: "Use Cases",
        title: "어떤 모임이든\n우리끼리의 장소로",
        description: "프라이빗 모임, 북클럽, 브랜드 쇼케이스. 목적에 맞게 자리를 꾸밀 수 있습니다.",
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
        title: "바라쿠다 공간 갤러리",
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
      title: "공간 대관 문의",
      description: "모임 날짜와 규모를 남겨 주시면 가능 여부를 확인해 드립니다.",
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
        placeholder: "행사 내용과 일정, 필요한 사항을 남겨 주세요.",
      },
    },
  },
  menu: {
    metadata: {
      title: "Menu | Baracuda",
      description: "바라쿠다의 메뉴와 음료를 분위기 중심으로 소개합니다.",
    },
    hero: {
      title: "메뉴도\n바라쿠다답게",
      description: "커피, 음료, 디저트까지. 바라쿠다 전체 메뉴를 확인하세요.",
      image: "/images/menu.png",
      imageAlt: "Baracuda 메뉴 대표 이미지",
      ctaHref: "#menu-order",
      ctaLabel: "주문 문의",
    },
    gallerySections: [
      {
        eyebrow: "Menu Gallery",
        title: "메뉴는\n분위기와 함께 읽힙니다",
        description: "메뉴보드부터 커피까지, 바라쿠다 메뉴의 인상을 먼저 확인하세요.",
        columns: 3,
        images: [
          { src: "/images/ba_menu.jpg", alt: "바라쿠다 메뉴 이미지", title: "Menu Board", description: "브랜드 톤 안에서 정리된 실제 메뉴 구성" },
          { src: "/images/ame.png", alt: "아메리카노 이미지", title: "Coffee", description: "기본 메뉴의 균형과 톤" },
          { src: "/images/latte.png", alt: "라떼 이미지", title: "Milk Menu", description: "질감과 분위기가 함께 전해지는 메뉴" },
        ],
      },
      {
        eyebrow: "More Mood",
        title: "음료와 디저트도\n같은 무드로",
        description: "커피 외에도 시즌 음료와 디저트를 함께 즐길 수 있습니다.",
        columns: 2,
        surface: "tint",
        images: [
          { src: "/images/ade.png", alt: "에이드 이미지", title: "Seasonal Drink", description: "커피 외 메뉴도 같은 인상으로 이어집니다" },
          { src: "/images/book.jpg", alt: "디저트와 분위기 이미지", title: "Dessert Mood", description: "공간의 무드와 함께 즐기는 디저트 셀렉션" },
        ],
      },
    ],
    orderSectionId: "menu-order",
    orderForm: {
      title: "주문 문의",
      description: "단체 주문, 행사 주문, 케이터링은 이 폼으로 문의해 주세요. 카페 음료는 방문 시 바로 주문하실 수 있습니다.",
      submitLabel: "문의 보내기",
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
        placeholder: "원하시는 메뉴와 수량, 일정 등을 남겨 주세요.",
      },
    },
  },
  store: {
    metadata: {
      title: "Store | Baracuda",
      description: "원두, 굿즈, 라이프스타일 제품. 바라쿠다 스토어입니다.",
    },
    hero: {
      title: "바라쿠다\n스토어",
      description: "원두, 굿즈, 라이프스타일 제품을 소개합니다. 바라쿠다의 무드를 일상에서도 이어갈 수 있습니다.",
      image: "/images/apollo.png",
      imageAlt: "Baracuda 스토어 대표 이미지",
      ctaHref: "/coffee",
      ctaLabel: "커피 보기",
    },
    gallerySections: [
      {
        eyebrow: "Collections",
        title: "원두부터 굿즈까지\n바라쿠다 컬렉션",
        description: "원두 셀렉션부터 브랜드 굿즈까지, 바라쿠다 무드를 담은 제품들입니다.",
        columns: 3,
        images: [
          { src: "/images/apollo.png", alt: "원두 이미지", title: "Coffee Beans", description: "스토어의 중심이 되는 원두 셀렉션" },
          { src: "/images/goods.png", alt: "굿즈 이미지", title: "Goods", description: "브랜드의 무드를 이어가는 오브젝트" },
          { src: "/images/Parcera.png", alt: "라이프스타일 이미지", title: "Lifestyle", description: "일상 속으로 확장되는 제품 방향" },
        ],
      },
      {
        eyebrow: "Mood",
        title: "바라쿠다의 결을\n담은 제품들",
        description: "제품 구매 문의는 카페 방문 또는 인스타그램으로 가능합니다.",
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
      description: "바라쿠다 방문 정보와 공간 분위기를 함께 소개합니다.",
    },
    hero: {
      title: "BARACUDA\n오시는 길",
      description: "주소, 운영 시간, 주차 정보를 확인하세요.",
      image: "/images/brend-hero.jpg.jpg",
      imageAlt: "Baracuda 방문 대표 이미지",
      ctaHref:
        "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C%2029%20%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%BB%A8%EB%B2%A4%EC%85%98%201%EC%B8%B5",
      ctaLabel: "길찾기",
    },
    gallerySections: [
      {
        eyebrow: "Visit Mood",
        title: "오기 전에\n분위기를 먼저 느껴보세요",
        description: "처음 방문하더라도 편하게 찾아올 수 있습니다. 이태원 로얄파크컨벤션 1층에 있습니다.",
        columns: 3,
        images: [
          { src: "/images/brend-1.jpg", alt: "방문 이미지 1", title: "Arrival", description: "첫 방문의 분위기를 미리 느끼게 하는 장면" },
          { src: "/images/cafe.jpg", alt: "방문 이미지 2", title: "Interior", description: "문을 열고 들어섰을 때 가장 먼저 만나는 실내 분위기" },
          { src: "/images/2.jpg", alt: "방문 이미지 3", title: "View", description: "방문 경험과 자연스럽게 이어지는 시선" },
        ],
      },
    ],
    infoSection: {
      eyebrow: "Visit Info",
      title: "필요한 정보만\n간결하게 확인하세요",
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
