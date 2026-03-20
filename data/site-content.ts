import { siteConfig } from "@/data/site";

export const homeUtilityLinks = siteConfig.homepage.utilityLinks;

export const navLinks = siteConfig.homepage.navLinks.map((link) => ({
  homeHref: link.href,
  pageHref: link.href,
  label: link.label,
}));

export const companyHomepageTemplate = siteConfig.homepage;

export const siteContent = {
  hero: {
    image: siteConfig.homepage.hero.image,
    imageAlt: siteConfig.homepage.hero.imageAlt,
    eyebrow: "Roastery & Cafe",
    title: siteConfig.homepage.logo.caption ?? "BARACUDA",
    subtitle: "로스터리와 공간의 감도가 한 장면으로 머무는 곳",
    description: siteConfig.homepage.hero.description,
    primaryCta: {
      href: siteConfig.homepage.hero.primaryCta.href,
      label: "Visit Barracuda",
    },
    secondaryCta: {
      href: "/coffee",
      label: "Explore Coffee",
    },
  },
  brand: {
    eyebrow: "Brand",
    title: "커피와 공간, 문화의 밀도를\n조용하게 쌓아갑니다",
    description: "바라쿠다는 한 잔의 커피를 넘어 머무는 장면과 취향의 분위기까지 함께 설계하는 브랜드입니다.",
    lead: "설명보다 인상으로 먼저 기억되는 공간. 그 차분한 결이 바라쿠다의 기준입니다.",
    cta: { href: "/brand", label: "브랜드 더 보기" },
    image: { src: "/images/brend-1.jpg", alt: "바라쿠다 브랜드 무드를 보여주는 이미지" },
  },
  coffee: {
    eyebrow: "Coffee",
    title: "로스터리 기반의 신뢰를\n과장 없이 전합니다",
    description: "원두 셀렉션과 로스팅, 브루잉의 흐름을 바라쿠다의 감도로 정리했습니다.",
    image: { src: "/images/roastery.png", alt: "바라쿠다 로스터리 무드를 보여주는 이미지" },
    features: [
      { title: "Beans", description: "계절의 결에 맞춰 선명하게 고른 원두 셀렉션" },
      { title: "Roasting", description: "과시하지 않고 오래 남는 균형의 로스팅" },
    ],
    cta: { href: "/coffee", label: "커피 보기" },
  },
  space: {
    eyebrow: "Space",
    title: "카페를 넘어\n장면이 머무는 공간",
    description: "일상의 방문부터 작은 모임, 브랜드 이벤트까지 한 공간 안에서 자연스럽게 이어집니다.",
    highlight: "Cafe, event, experience. 바라쿠다는 분위기와 쓰임이 함께 설계된 공간입니다.",
    items: [
      {
        title: "Cafe",
        description: "조용히 머무르며 커피의 리듬을 느끼는 메인 공간",
        src: "/images/cafe.jpg",
        alt: "바라쿠다 카페 공간 이미지",
        height: "min-h-[520px]",
      },
      {
        title: "Event",
        description: "브랜드와 모임이 자연스럽게 어울리는 장면",
        src: "/images/event.jpg",
        alt: "바라쿠다 이벤트 공간 이미지",
        height: "min-h-[300px]",
      },
      {
        title: "Experience",
        description: "공간의 결을 직접 체감하는 브랜드 경험",
        src: "/images/experience.jpg",
        alt: "바라쿠다 경험 이미지",
        height: "min-h-[360px]",
      },
    ],
  },
  store: {
    eyebrow: "Store",
    title: "바라쿠다의 제품 방향을\n미리 살펴봅니다",
    description: "원두와 굿즈, 라이프스타일 제품으로 이어질 확장 가능성을 미리보기 형식으로 담았습니다.",
    note: "Preview",
    items: [
      { title: "Coffee Beans", src: "/images/apollo.png", alt: "바라쿠다 원두 제품 이미지", fit: "contain" },
      { title: "Goods", src: "/images/goods.png", alt: "바라쿠다 굿즈 이미지", fit: "cover" },
      { title: "Lifestyle", src: "/images/Parcera.png", alt: "바라쿠다 라이프스타일 제품 이미지", fit: "contain" },
    ],
  },
  visit: {
    eyebrow: "Visit",
    title: "방문 전 필요한 정보를\n빠르게 확인하세요",
    description: "주소, 운영 시간, 주차, 연락처를 한 화면에서 정리했습니다.",
    details: [
      { label: "주소", value: "서울특별시 용산구 이태원로 29, 로얄파크컨벤션 1층" },
      { label: "운영 시간", value: "매주 월요일 휴무 / 10:00-19:00" },
      { label: "주차", value: "지상 및 지하 주차장 이용 가능" },
      { label: "연락처", value: "02-501-4527" },
      { label: "인스타그램", value: "@baracuda.cafe" },
    ],
    directionsHref: "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C%2029%20%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%BB%A8%EB%B2%A4%EC%85%98%201%EC%B8%B5",
    directionsLabel: "길찾기",
    instagramHref: "https://www.instagram.com/baracuda.cafe",
    instagramLabel: "인스타그램",
    mapLinkLabel: "지도 열기",
  },
  footer: siteConfig.footer,
} as const;

export const subpageContent = {
  space: {
    inquiryForm: siteConfig.space.inquiryForm,
  },
  menu: {
    orderForm: siteConfig.menu.orderForm,
  },
} as const;

export const businessInfo = {
  brandName: "BARACUDA",
  koreanName: siteConfig.footer.subline,
  address: siteConfig.footer.address,
  openingHours: "매주 월요일 휴무 / 10:00-19:00",
  parking: "지상 및 지하 주차장 이용 가능",
  contact: "02-501-4527",
  instagramHandle: "@baracuda.cafe",
  instagramUrl: "https://www.instagram.com/baracuda.cafe",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C%2029%20%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%BB%A8%EB%B2%A4%EC%85%98%201%EC%B8%B5",
} as const;

export const companySiteConfig = siteConfig;

