export const navLinks = [
  { href: "/brand", label: "Brand" },
  { href: "/coffee", label: "Coffee" },
  { href: "/space", label: "Space" },
  { href: "/menu", label: "Menu" },
  { href: "/store", label: "Store" },
  { href: "/visit", label: "Visit" },
] as const;

export const businessInfo = {
  brandName: "BARACUDA",
  koreanName: "바라쿠다 로스터리 & 카페",
  address: "서울특별시 용산구 이태원로 29, 로얄파크컨벤션 1층",
  openingHours: "매주 월요일 휴무 / 10:00-19:00",
  parking: "지상 및 지하 주차장 이용 가능",
  contact: "02-501-4527",
  instagramHandle: "@baracuda.cafe",
  instagramUrl: "https://www.instagram.com/baracuda.cafe",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C%2029%20%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%BB%A8%EB%B2%A4%EC%85%98%201%EC%B8%B5",
} as const;

export const assetPaths = {
  hero: "/images/hero.jpg",
  brand: ["/images/brend-1.jpg", "/images/brend-2.jpg", "/images/brend-3.jpg"],
  coffee: "/images/roastery.png",
  space: ["/images/cafe.jpg", "/images/event.jpg", "/images/experience.jpg"],
  store: ["/images/apollo.png", "/images/goods.png", "/images/Parcera.png"],
} as const;

export const siteContent = {
  hero: {
    image: assetPaths.hero,
    imageAlt: "Baracuda 공간을 담은 대표 이미지",
    eyebrow: "로스터리 카페",
    title: businessInfo.brandName,
    subtitle: "로스팅과 공간의 결이 만나는 곳",
    description: "조용한 분위기 속에서 커피와 머무는 시간이 하나의 경험으로 이어집니다.",
    primaryCta: {
      href: "/visit",
      label: "바라쿠다 방문하기",
    },
    secondaryCta: {
      href: "/coffee",
      label: "커피 살펴보기",
    },
  },
  space: {
    eyebrow: "공간",
    title: "차분한 공간에서 장면이 이어집니다.",
    description: "커피와 모임, 작은 행사가 자연스럽게 이어지는 공간입니다.",
    highlight: "카페, 이벤트, 브랜드 경험을 한 공간 안에서 담아냅니다.",
    items: [
      {
        title: "카페",
        description: "조용히 머무르기 좋은 메인 공간",
        src: assetPaths.space[0],
        alt: "바라쿠다 카페 공간 이미지",
        height: "min-h-[520px]",
      },
      {
        title: "이벤트",
        description: "브랜드와 모임에 어울리는 장면",
        src: assetPaths.space[1],
        alt: "바라쿠다 이벤트 공간 이미지",
        height: "min-h-[300px]",
      },
      {
        title: "브랜드 경험",
        description: "공간의 결을 직접 느끼는 시간",
        src: assetPaths.space[2],
        alt: "바라쿠다 경험 이미지",
        height: "min-h-[360px]",
      },
    ],
  },
  visit: {
    details: [
      { label: "주소", value: businessInfo.address },
      { label: "운영 시간", value: businessInfo.openingHours },
      { label: "주차", value: businessInfo.parking },
      { label: "연락처", value: businessInfo.contact },
      { label: "인스타그램", value: businessInfo.instagramHandle },
    ],
  },
  footer: {
    statement: "커피와 공간, 그리고 경험을 차분하게 이어가는 브랜드",
    subline: businessInfo.koreanName,
    address: businessInfo.address,
    instagramHref: businessInfo.instagramUrl,
    instagramLabel: "인스타그램",
    familySites: [
      { href: "http://www.peacenpark.com/", label: "Peace N Park" },
      { href: "https://royalpark.kr/", label: "Royal Park" },
      { href: "https://cnctechlab.co.kr/", label: "CNC Tech Lab" },
    ],
    socialLinks: [
      { href: "https://blog.naver.com/baracudacafe", label: "Blog" },
      { href: "https://www.youtube.com/@barancuda", label: "YouTube" },
      { href: businessInfo.instagramUrl, label: "Instagram" },
    ],
    copyright: "© 2026 Baracuda. All rights reserved.",
    links: navLinks,
  },
} as const;

export const subpageContent = {
  space: {
    inquiryForm: {
      title: "행사 문의",
      description: "대관 및 공간 사용 가능 여부를 먼저 확인하는 문의 폼입니다.",
      submitLabel: "문의 보내기",
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
      successMessage: "문의가 접수되었습니다. 확인 후 연락드리겠습니다.",
    },
  },
  menu: {
    orderForm: {
      title: "주문 요청",
      description: "카페 주문과 단체 주문 가능 여부를 먼저 확인하는 요청 폼입니다.",
      submitLabel: "주문 요청 보내기",
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
      successMessage: "주문 요청이 접수되었습니다. 확인 후 연락드리겠습니다.",
    },
  },
} as const;
