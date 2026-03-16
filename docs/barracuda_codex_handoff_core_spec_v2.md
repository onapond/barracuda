# Barracuda Homepage MVP — Codex Handoff Core Spec
버전: v2  
목적: Codex가 추가 질의 없이 Barracuda 홈페이지 MVP를 바로 구현할 수 있도록 하는 단일 핵심 문서

---

## 0. 이 문서의 역할

이 문서는 **기획 보고서가 아니라 구현 지시서**다.  
Codex는 이 문서를 소스 오브 트루스로 사용하여 Barracuda 홈페이지 MVP를 구현한다.

이번 범위는 **홈페이지 1개**다.  
예약 시스템, 결제, 관리자, 쇼핑몰 로직, CMS, 다국어는 이번 작업에 포함하지 않는다.

---

## 1. 프로젝트 맥락

Barracuda는 일반적인 카페 홈페이지가 아니다.  
Barracuda는 아래 성격을 동시에 가진다.

- 로스터리 기반 카페 브랜드
- 공간 경험을 파는 라이프스타일 공간
- “우리들만의 공간”이라는 개념의 대여형 공간 브랜드
- 향후 문화 프로그램, 북클럽, 파티, 패션쇼, 브랜드 모임으로 확장 가능한 공간 플랫폼

또한 Barracuda는 로얄파크 생태계 안에 존재한다.  
즉 사이트 톤은 **단순 메뉴형 카페**가 아니라,  
**프리미엄 공간 브랜드 + 로스터리 감도 + 조용한 문화 공간**이어야 한다.

핵심 방향은 다음과 같다.

- 브랜드 우선
- 공간 우선
- 메뉴판 스타일 금지
- 배달앱/프랜차이즈 느낌 금지
- 사진 중심
- 여백 중심
- 차분하고 고급스러운 톤
- 향후 서브페이지 확장이 쉬운 구조

이 방향은 기존 Barracuda 관련 문서의 MVP 범위, 섹션 순서, 기술 스택, 확장성 요구사항과 일치한다. fileciteturn4file1turn4file4

---

## 2. 이번 작업의 목표

이번 MVP의 목표는 아래 5가지다.

1. Barracuda를 브랜드 중심 홈페이지로 재구성한다.
2. Barracuda를 공간성 있는 카페로 보이게 만든다.
3. CNC Tech 로스터리 기반 브랜드라는 인상을 준다.
4. 향후 공간 대여/문의 시스템으로 확장 가능한 구조를 만든다.
5. 실제 브랜드 사진과 문구를 나중에 쉽게 교체할 수 있게 만든다.

초기 개발 우선순위는 Barracuda 브랜드 사이트, 원두 판매 소개, 공간 대여 소개다. fileciteturn4file0

---

## 3. 구현 범위

### 포함
- 홈페이지 1개
- 반응형 헤더
- Hero
- Brand
- Coffee
- Space
- Store
- Visit
- Footer
- 모바일 메뉴
- 부드러운 스크롤
- 기본 SEO 메타데이터
- 추후 콘텐츠 교체가 쉬운 중앙 content 파일

### 제외
- 예약 시스템
- 문의 DB 저장
- 쇼핑몰 결제
- 로그인
- 관리자
- 블로그
- 다국어
- 백엔드 기능

이번 MVP는 홈페이지만 구현하고, 실예약/이커머스/관리도구는 제외하는 것이 기존 구현 스펙과 같다. fileciteturn4file4turn4file6

---

## 4. 기술 스택

반드시 아래 스택으로 구현한다.

- Next.js App Router
- TypeScript
- Tailwind CSS
- next/image 사용
- lucide-react는 필요 시만 사용

기본 방향:
- 대부분 Server Component
- Header / Mobile Menu만 Client Component 허용
- 불필요한 상태관리 금지
- 외부 라이브러리 최소화

이 구조는 기존 실행 아키텍처 문서와 동일하다. fileciteturn4file1turn4file9

---

## 5. 사이트 포지셔닝

Codex는 이 사이트를 절대 아래처럼 만들면 안 된다.

### 금지 방향
- 메뉴판 중심 카페 사이트
- 카드가 많은 프랜차이즈형 UI
- 할인/이벤트 팝업 스타일
- 복잡한 대시보드 느낌
- 음식 배달앱 느낌
- 화려한 컬러 중심 디자인
- 과도한 그림자/그라데이션
- 과한 애니메이션

### 허용 방향
- 사진 중심 에디토리얼 레이아웃
- 조용하고 프리미엄한 타이포그래피
- 고급 공간 브랜드 같은 구성
- 로스터리 기반 브랜드 랜딩페이지
- 공간이 느껴지는 여백과 비율
- 미니멀하고 정제된 UI

이 사이트는 브랜드 우선 홈페이지여야 하며, 메뉴 보드가 되어서는 안 된다. fileciteturn4file4turn4file6

---

## 6. 정보구조(IA)

홈페이지 섹션 순서는 반드시 아래와 같다.

1. Header
2. Hero
3. Brand
4. Coffee
5. Space
6. Store
7. Visit
8. Footer

이 순서는 감정적 첫인상 → 브랜드 정체성 → 로스터리 신뢰 → 공간 차별점 → 제품 확장 → 방문 전환의 흐름을 만든다. fileciteturn4file4turn4file6

### 헤더 네비게이션
- Brand
- Coffee
- Space
- Store
- Visit

좌측:
- BARRACUDA 워드마크 텍스트

우측:
- 네비게이션 링크
- 모바일에서는 햄버거 메뉴

네비는 같은 페이지 내 smooth-scroll로 연결하되,  
나중에는 `/brand`, `/coffee`, `/space`, `/store`, `/visit`로 분리할 수 있게 구조를 짠다. fileciteturn4file5

---

## 7. 페이지별 상세 구현 명세

## 7.1 Header

### 목적
Hero 위에 얇고 우아하게 올라가는 헤더

### 요구사항
- 초기에는 투명 또는 반투명 오버레이
- 스크롤 후 흰색 배경 + 어두운 텍스트로 전환
- 높이는 과하지 않게 슬림
- transition 부드럽게
- 모바일 메뉴는 키보드 접근 가능하게 구현

### UI 포인트
- 브랜드 워드마크만으로도 충분히 고급스럽게 보일 것
- 버튼 남발 금지

---

## 7.2 Hero

### 목적
Barracuda의 첫 인상을 결정하는 가장 중요한 구간

### 레이아웃
- 가능하면 100vh
- 큰 배경 이미지
- 텍스트는 중앙 또는 좌하단 정렬
- CTA 1~2개 이하

### 기본 콘텐츠
- Title: BARRACUDA
- Subtitle: Roastery & Cafe
- Description: roasting, atmosphere, experience를 느끼게 하는 한 줄
- Primary CTA: Visit Barracuda
- Secondary CTA: Explore Coffee (선택)

### 추가 지시
- 텍스트는 짧고 강하게
- 이미지가 주인공이어야 함
- 배경 이미지 교체가 쉬워야 함
- 실제 사진 없으면 placeholder 사용

Hero는 가장 강한 브랜드 이미지를 사용해야 한다. fileciteturn4file12

---

## 7.3 Brand Section

### 목적
Barracuda가 단순 카페가 아니라는 점을 설명

### 레이아웃
- 데스크톱: 2열
- 모바일: 1열
- 텍스트 + 감도 있는 이미지 조합

### 핵심 메시지
- coffee
- space
- culture
- experience

### 문체 방향
- 짧고 조용한 문장
- 설명문보다 브랜드 문장
- 번역투 금지
- 프랜차이즈 카페 문체 금지

한국어 카피는 calm / premium / spatial / restrained 톤으로 작성해야 한다. fileciteturn4file12turn4file13

---

## 7.4 Coffee Section

### 목적
Barracuda가 로스터리 기반 브랜드라는 신뢰를 형성

### 레이아웃
- 이미지 1개 + 텍스트
- 아래 feature 2개 정도 허용

### 필수 포인트
- 단순 카페가 아니라 roastery-backed brand라는 인상
- 원두 / 로스팅 / 브루잉 확장 가능성을 보여줄 것
- 너무 기술적이면 안 됨
- 신뢰는 주되 과설명은 금지

### 권장 feature
- Beans
- Roasting

Coffee 섹션은 로스터리 신뢰를 전달하는 역할이다. fileciteturn4file11

---

## 7.5 Space Section

### 목적
Barracuda의 가장 중요한 차별점인 “공간성”을 보여준다.

### 중요도
이 섹션은 반드시 강하게 보여야 한다.  
Barracuda는 단순히 커피를 마시는 곳이 아니라,  
분위기와 모임과 경험이 일어나는 공간이라는 점을 전달해야 한다.

### 레이아웃
- 시각 우선
- 3열 이미지 그리드 가능
- 모바일에서는 세로 스택
- 텍스트보다 이미지 비중이 높아야 함

### 허용 카드 타이틀 예시
- Cafe
- Event
- Experience

### 문구 방향
- “우리들만의 공간” 느낌
- 조용하지만 개성 있는 문화 공간
- 향후 파티/북클럽/쇼/모임이 가능한 공간이라는 뉘앙스

Space 섹션은 가장 중요한 차별점이며 시각적으로 우선되어야 한다. fileciteturn4file11turn4file12

---

## 7.6 Store Section

### 목적
향후 상품 판매로 확장될 수 있음을 가볍게 보여주는 미리보기 구간

### 구성
- 2~4개의 preview card
- 실제 쇼핑 기능 금지
- 소개 수준만 유지

### 예시 카테고리
- Coffee Beans
- Goods
- Lifestyle Products

### 주의
- 절대 쇼핑몰처럼 복잡하게 만들지 말 것
- “곧 확장될 브랜드 제품 소개” 느낌

Store는 preview only다. 실커머스 로직은 이번 범위가 아니다. fileciteturn4file10

---

## 7.7 Visit Section

### 목적
실제 방문 행동으로 전환시키는 실용 정보 구간

### 구성
- Address
- Opening Hours
- Parking
- Contact
- Instagram

### 버튼
- Get Directions
- Instagram

### 레이아웃
- 데스크톱 2열
- 모바일 1열

### 주의
- 깔끔하고 명확해야 함
- 지저분한 정보 나열 금지
- 지도 임베드 대신 외부 링크 카드도 허용

방문 정보는 실용적이어야 하며 최종 CTA 역할을 한다. fileciteturn4file10turn4file11

---

## 7.8 Footer

### 포함 요소
- BARRACUDA
- 짧은 브랜드 한 줄
- 주소 placeholder
- Instagram placeholder
- copyright

---

## 8. 스타일 시스템

### 톤
- minimal
- premium
- quiet
- spacious
- modern
- polished

### 컬러
- off-white / white background
- near-black text
- muted gray secondary text
- light gray borders
- 포인트 컬러 거의 없음

### 타이포
- 헤드라인: serif 느낌 또는 refined display 느낌
- 본문: 깨끗한 sans-serif
- 과한 장식 금지

### 간격
- 섹션 간 여백 크게
- 압축된 느낌 금지

### 모션
허용:
- fade-in
- hover zoom
- 텍스트 opacity 변화
- 버튼 hover

금지:
- bounce
- flashy parallax
- 복잡한 carousel
- 시끄러운 인터랙션

스타일 규칙과 모션 제약은 기존 Codex 빌드 스펙을 따른다. fileciteturn4file4turn4file10

---

## 9. 반응형 요구사항

### 모바일 최우선 체크
- Hero 텍스트 가독성 유지
- 이미지 그리드가 자연스럽게 붕괴
- 네비는 햄버거 메뉴 전환
- 버튼 탭 영역 충분
- 타이포 스케일 자연스러움
- 텍스트 칼럼 너무 좁아지지 않기

### 태블릿
- 이미지 존재감 유지
- 텍스트 폭 과도하게 좁아지지 않기

---

## 10. 접근성 / SEO 요구사항

반드시 포함:
- semantic HTML
- proper heading order
- alt text
- visible focus state
- keyboard accessible mobile menu
- 충분한 명도 대비
- page title
- meta description
- semantic headings
- descriptive alt

### metadata 기본값
- title: Barracuda Roastery & Cafe
- description: Barracuda is a specialty coffee roastery and cafe space built around coffee, atmosphere, and brand experience.

접근성/SEO 요구는 기존 스펙과 동일하다. fileciteturn4file5

---

## 11. 파일 구조

다음 구조를 권장한다.

```txt
app/
  layout.tsx
  page.tsx
  globals.css

components/
  header.tsx
  mobile-menu.tsx
  hero-section.tsx
  section-heading.tsx
  brand-section.tsx
  coffee-section.tsx
  space-section.tsx
  store-section.tsx
  visit-section.tsx
  footer.tsx

components/ui/
  button.tsx
  container.tsx
  section-wrapper.tsx

data/
  site-content.ts

public/
  images/
    hero.jpg
    brand-1.jpg
    brand-2.jpg
    coffee-1.jpg
    space-1.jpg
    space-2.jpg
    space-3.jpg
    store-1.jpg
    store-2.jpg
```

중앙 content 파일 구조를 두면 이후 실제 문구/이미지 교체가 쉬워진다. fileciteturn4file12turn4file13

---

## 12. content 데이터 구조

Codex는 반복 문자열을 각 컴포넌트에 직접 하드코딩하지 말고  
가능하면 `data/site-content.ts`에서 관리한다.

예시:

```ts
export const siteContent = {
  hero: {
    title: "BARRACUDA",
    subtitle: "Roastery & Cafe",
    description: "A specialty coffee space shaped by roasting, atmosphere, and experience.",
    primaryCta: "Visit Barracuda",
    secondaryCta: "Explore Coffee",
    image: "/images/hero.jpg",
  },
  brand: {
    eyebrow: "Brand",
    title: "A space for coffee, culture, and experience.",
    description: "Barracuda brings together specialty coffee, roastery craftsmanship, and a refined spatial experience.",
    images: ["/images/brand-1.jpg", "/images/brand-2.jpg"],
  },
  coffee: {
    eyebrow: "Coffee",
    title: "Specialty coffee roasted by Barracuda.",
    description: "Barracuda should feel like a roastery-backed brand, not only a cafe.",
    features: [
      { title: "Beans", description: "Seasonal selections and signature profiles" },
      { title: "Roasting", description: "Roasting philosophy and process" }
    ],
    image: "/images/coffee-1.jpg",
  },
  space: {
    eyebrow: "Space",
    title: "A cafe space designed to be felt.",
    description: "A branded environment that can hold atmosphere, gathering, and future cultural programming.",
    items: [
      { title: "Cafe", image: "/images/space-1.jpg" },
      { title: "Event", image: "/images/space-2.jpg" },
      { title: "Experience", image: "/images/space-3.jpg" }
    ],
  },
  store: {
    eyebrow: "Store",
    title: "Coffee beans, goods, and brand products.",
    description: "A lightweight preview of products that can expand later into a full store.",
    items: [
      { title: "Coffee Beans", image: "/images/store-1.jpg" },
      { title: "Goods", image: "/images/store-2.jpg" },
      { title: "Lifestyle Products", image: "/images/store-2.jpg" }
    ],
  },
  visit: {
    eyebrow: "Visit",
    title: "Visit Barracuda",
    details: [
      { label: "Address", value: "Yongsan-gu, Seoul, South Korea" },
      { label: "Opening Hours", value: "Mon–Sun / 10:00–22:00" },
      { label: "Contact", value: "02-0000-0000" },
      { label: "Instagram", value: "https://instagram.com/" },
    ],
    mapUrl: "#",
    instagramUrl: "https://instagram.com/",
  },
};
```

중앙 content 파일은 이미 다음 단계 권장사항으로 제시되어 있다. fileciteturn4file7turn4file12

---

## 13. 실제 구현 지시

Codex는 아래 순서대로 작업한다.

### Task 1
Next.js App Router 기반으로 홈페이지를 구성한다.

### Task 2
페이지를 재사용 가능한 컴포넌트로 분리한다.

### Task 3
Tailwind로 고급스럽고 절제된 스타일을 구현한다.

### Task 4
`data/site-content.ts`를 만들어 텍스트/이미지 경로를 중앙관리한다.

### Task 5
placeholder 이미지가 없으면 간단한 로컬 placeholder를 넣되, 나중에 실제 사진으로 쉽게 교체되게 만든다.

### Task 6
`npm run build`, `npm run lint`를 통과시킨다.

### Task 7
UTF-8 인코딩을 유지하고, `lang="ko"`와 문자셋 문제를 점검한다.

기존 실행 문서상 UTF-8 / 한국어 깨짐 이슈가 있었으므로, 인코딩은 반드시 확인해야 한다. fileciteturn4file7

---

## 14. 완료 기준

아래가 모두 만족되면 완료다.

- 홈페이지가 브랜드 중심으로 보인다.
- 메뉴판 사이트처럼 보이지 않는다.
- Hero가 강하다.
- Space 섹션이 중요하게 보인다.
- Coffee 섹션이 로스터리 신뢰를 준다.
- Store는 preview 수준으로 절제되어 있다.
- Visit가 깔끔하다.
- 모바일 레이아웃이 무너지지 않는다.
- 구조가 추후 `/brand`, `/coffee`, `/space`, `/store`, `/visit`로 확장 가능하다.
- `npm run build` 통과
- `npm run lint` 통과

---

## 15. Codex에 바로 붙여넣을 프롬프트

```txt
Read this markdown file fully and use it as the single source of truth.

Build the Barracuda homepage MVP in Next.js App Router with TypeScript and Tailwind CSS.

Requirements:
- homepage only
- reusable components
- responsive header with mobile menu
- sections in this exact order: Header, Hero, Brand, Coffee, Space, Store, Visit, Footer
- create a centralized data/site-content.ts file for editable content
- premium, minimal, editorial, photography-led design
- brand-first homepage, not a menu board
- no backend, no CMS, no cart, no reservation system, no admin
- semantic HTML, accessibility, SEO basics
- use placeholder images where needed
- keep the codebase easy to expand into future subpages

Important:
- emphasize Barracuda as a roastery-backed spatial brand
- make the Space section visually important
- keep Store preview-only
- preserve clean mobile responsiveness
- ensure UTF-8 safe Korean rendering

After implementation:
1. show the resulting file structure
2. list created/edited files
3. run build/lint checks
4. explain any assumptions briefly
```

---

## 16. 마지막 주의사항

이번 단계는 **기획 확장**이 아니라 **빠른 MVP 개발**이다.  
그러므로 Codex는 아래를 하지 않는다.

- 이벤트 예약 시스템 구현
- DB 설계
- 결제 구현
- 복잡한 대여 폼 구현
- Megastation 전체 구조 추가 개발
- CNC Tech 별도 서브사이트 구현

지금은 **Barracuda 홈페이지 MVP를 고급스럽게, 빠르게, 확장 가능하게 구현하는 것**만 목표다.

---

## 17. 참고 근거

- Barracuda는 브랜드 사이트 + 원두 판매 소개 + 공간 대여 소개가 초기 우선순위다. fileciteturn4file0
- MVP 범위는 홈페이지 단일 구조이며, Header / Hero / Brand / Coffee / Space / Store / Visit / Footer 순서를 따른다. fileciteturn4file1turn4file4
- 기술 스택은 Next.js App Router + TypeScript + Tailwind CSS가 권장된다. fileciteturn4file1turn4file4
- 이번 단계는 콘텐츠 교체와 톤 보정이 중심이며, 구조 전체를 다시 뜯어고치는 단계는 아니다. fileciteturn4file8
- 실제 사진, 실제 영업 정보, 한국어 브랜드 카피는 이후 쉽게 교체 가능해야 한다. fileciteturn4file12turn4file13
