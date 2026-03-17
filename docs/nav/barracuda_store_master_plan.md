
# Barracuda Store Master Plan
Version: 1.0

이 문서는 Barracuda 웹사이트의 Store 전략 및 개발 구조를 정리한 문서이다.
Barracuda Store는 단순 쇼핑몰이 아니라 **Coffee Brand Shop** 역할을 수행한다.

목표
- Barracuda 커피 브랜드 구축
- 원두 및 커피 제품 판매 기반 마련
- 브랜드 굿즈 및 라이프스타일 제품 소개
- 향후 온라인 커머스 확장

---

# 1. Store 제품 구조

Barracuda Store는 다음 네 가지 카테고리로 구성된다.

Coffee Beans  
Coffee Products  
Goods  
Lifestyle

---

# 2. Coffee Beans (핵심 제품)

대표 제품 예시

Barracuda House Blend  
Seasonal Single Origin  
Filter Coffee Selection  
Espresso Blend

패키지 단위

200g  
500g  
1kg

목적
- 로스터리 기반 커피 브랜드 구축
- Barracuda 대표 제품 형성

---

# 3. Coffee Products

로스터리 기반 제품

Drip Bag  
Coffee Bag  
Cold Brew Bottle  
Capsule Coffee

목적
- 홈카페 사용자 대상 제품
- 브랜드 경험 확장

---

# 4. Goods

브랜드 굿즈

Mug  
Tumbler  
Glass  
Drip Set  
Barracuda Tote Bag

목적
- 브랜드 정체성 강화
- 방문 고객 경험 확장

---

# 5. Lifestyle

라이프스타일 확장 제품

Notebook  
Coffee Journal  
Coffee Tools

목적
- Barracuda 라이프스타일 브랜드 확장

---

# 6. Store UX 전략

Barracuda Store는 일반 쇼핑몰 UI가 아니라
**브랜드 매거진 스타일**을 따른다.

디자인 방향

Minimal  
Premium  
Editorial

구성

- 큰 제품 이미지
- 간결한 제품 설명
- 커피 스토리 중심 콘텐츠

피해야 할 스타일

배달앱 스타일 UI  
과도한 카드 레이아웃  
프랜차이즈 카페 느낌

---

# 7. 사용자 흐름

Homepage  
↓  
Coffee  
↓  
Store  
↓  
문의 / 구매

---

# 8. MVP 판매 방식

초기 운영 방식

1. 문의 폼 기반 주문
2. 스마트스토어 연결
3. 자체 결제 시스템

추천 방식

Website → SmartStore

이유
- 결제 및 배송 시스템 이미 존재
- 네이버 트래픽 확보 가능

---

# 9. Store 기술 구조

MVP

Next.js  
TypeScript  
TailwindCSS  
Vercel

확장

Supabase  
Stripe  
Inventory System

---

# 10. Store 페이지 구조

/store

Store Hero  
Coffee Beans Section  
Coffee Products Section  
Goods Section  
Lifestyle Section  
Featured Product  
CTA Section

---

# 11. Featured Product

대표 상품

Barracuda House Blend

설명
CNC Tech Roastery에서 로스팅한 Barracuda 시그니처 블렌드

---

# 12. CTA

Explore Coffee  
Visit Barracuda  
Contact for Orders

---

# 13. 성공 기준

원두 판매 증가  
브랜드 인지도 상승  
카페 방문 증가

---

# 14. Barracuda 사이트 전체 구조

/

Hero  
Brand  
Coffee  
Space  
Menu  
Store  
Visit

---

# 15. 비즈니스 우선순위

1. Space Rental  
2. Coffee Brand  
3. Beans Store  
4. Cafe Menu

Barracuda는 단순 카페가 아니라

**공간 + 커피 브랜드 플랫폼**이다.
