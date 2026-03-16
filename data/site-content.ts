export const navLinks = [
  { href: "#brand", label: "Brand" },
  { href: "#coffee", label: "Coffee" },
  { href: "#space", label: "Space" },
  { href: "#store", label: "Store" },
  { href: "#visit", label: "Visit" },
] as const;

export const businessInfo = {
  brandName: "BARRACUDA",
  koreanName: "바라쿠다 로스터리 & 카페",
  address: "서울 용산구 한남동 [상세 주소 입력 예정]",
  openingHours: "Mon-Sun / 10:00-22:00",
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

export const siteContent = {
  hero: {
    image: assetPaths.hero,
    imageAlt: "Barracuda 공간을 담은 대표 이미지",
    eyebrow: "Roastery & Cafe",
    title: businessInfo.brandName,
    subtitle: "A spatial brand shaped by roasting, atmosphere, and quiet culture.",
    description: "로스팅의 밀도와 공간의 분위기가 조용하게 이어지는 브랜드 공간.",
    primaryCta: {
      href: "#visit",
      label: "Visit Barracuda",
    },
    secondaryCta: {
      href: "#coffee",
      label: "Explore Coffee",
    },
  },
  brand: {
    eyebrow: "Brand",
    title: "커피와 공간, 그리고 경험을 하나의 결로 엮습니다.",
    description:
      "Barracuda는 단순한 카페가 아니라 로스터리의 감도와 공간의 인상을 함께 전달하는 브랜드입니다. 조용하고 정제된 분위기 안에서 커피, 문화, 만남이 자연스럽게 이어집니다.",
    pillars: ["Coffee", "Space", "Culture", "Experience"],
    cta: {
      href: "#space",
      label: "Space Preview",
    },
    images: [
      { src: assetPaths.brand[0], alt: "브랜드 무드를 보여주는 첫 번째 이미지" },
      { src: assetPaths.brand[1], alt: "브랜드 무드를 보여주는 두 번째 이미지" },
      { src: assetPaths.brand[2], alt: "브랜드 무드를 보여주는 세 번째 이미지" },
    ],
  },
  coffee: {
    eyebrow: "Coffee",
    title: "로스터리 기반의 신뢰를 담은 커피 경험.",
    description:
      "Barracuda의 커피는 한 잔의 메뉴가 아니라 브랜드의 태도를 보여주는 중심축입니다. 원두 셀렉션과 로스팅의 방향성은 앞으로 더 넓은 제품 경험으로 확장될 수 있도록 설계됩니다.",
    image: {
      src: assetPaths.coffee,
      alt: "원두와 로스팅 무드를 보여주는 커피 이미지",
    },
    features: [
      { title: "Beans", description: "계절에 맞춘 셀렉션과 시그니처 프로파일" },
      { title: "Roasting", description: "브랜드 톤을 반영한 정제된 로스팅 방향" },
    ],
    cta: {
      href: "#store",
      label: "Preview Store",
    },
  },
  space: {
    eyebrow: "Space",
    title: "머무는 시간 자체가 브랜드 경험이 되는 공간.",
    description:
      "Barracuda는 커피를 마시는 장소를 넘어, 분위기와 모임과 문화적 장면이 축적될 수 있는 공간을 지향합니다. 카페, 이벤트, 경험이 하나의 무드 안에서 이어지도록 설계합니다.",
    highlight: "Our space is designed for coffee, gathering, and future cultural programs.",
    items: [
      {
        title: "Cafe",
        description: "조용한 밀도와 여백을 중심으로 머무는 공간",
        src: assetPaths.space[0],
        alt: "카페 공간의 무드를 보여주는 이미지",
        height: "min-h-[520px]",
      },
      {
        title: "Event",
        description: "모임과 프로그램으로 확장될 수 있는 장면",
        src: assetPaths.space[1],
        alt: "이벤트와 모임이 가능한 공간 이미지",
        height: "min-h-[300px]",
      },
      {
        title: "Experience",
        description: "브랜드의 결을 직접 체감하게 하는 경험",
        src: assetPaths.space[2],
        alt: "브랜드 경험을 보여주는 공간 이미지",
        height: "min-h-[360px]",
      },
    ],
  },
  store: {
    eyebrow: "Store",
    title: "원두와 굿즈, 그리고 브랜드 제품의 미리보기.",
    description:
      "지금은 가볍게 소개하는 수준에 머무르지만, 이후 Barracuda의 제품군으로 자연스럽게 확장될 수 있는 구조를 염두에 둡니다.",
    note: "Preview only",
    items: [
      { title: "Coffee Beans", src: assetPaths.store[0], alt: "원두 제품을 암시하는 이미지" },
      { title: "Goods", src: assetPaths.store[1], alt: "브랜드 굿즈를 암시하는 이미지" },
      { title: "Lifestyle Products", src: assetPaths.store[2], alt: "라이프스타일 제품을 암시하는 이미지" },
    ],
  },
  visit: {
    eyebrow: "Visit",
    title: "Barracuda를 직접 경험해 보세요.",
    description: "방문 전 필요한 정보를 간결하게 정리했습니다.",
    details: [
      { label: "Address", value: businessInfo.address },
      { label: "Opening Hours", value: businessInfo.openingHours },
      { label: "Parking", value: businessInfo.parking },
      { label: "Contact", value: businessInfo.contact },
      { label: "Instagram", value: businessInfo.instagramHandle },
    ],
    directionsHref: businessInfo.directionsUrl,
    directionsLabel: "Get Directions",
    instagramHref: businessInfo.instagramUrl,
    instagramLabel: "Instagram",
    mapEyebrow: "Location",
    mapTitle: "브랜드의 온도와 공간의 결을 현장에서 직접 확인할 수 있습니다.",
    mapLinkLabel: "Open Map",
  },
  footer: {
    statement: "커피와 공간, 그리고 경험을 조용하게 연결하는 브랜드.",
    subline: businessInfo.koreanName,
    address: businessInfo.address,
    instagramHref: businessInfo.instagramUrl,
    instagramLabel: "Instagram",
    copyright: "© 2026 Barracuda. All rights reserved.",
  },
} as const;
