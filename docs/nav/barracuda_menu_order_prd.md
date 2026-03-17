
# Barracuda Menu / Order System — Codex PRD
Version: 1.0

목적
이 문서는 Barracuda 웹사이트의 메뉴 및 주문 요청 페이지를 구현하기 위한 개발 명세서이다.
Codex가 추가 질문 없이 구현할 수 있도록 작성되었다.

Barracuda의 메뉴 페이지는 단순 메뉴판이 아니라 다음 역할을 수행한다.

• 카페 메뉴 소개
• 브랜드 경험 유지
• 사전 주문 / 단체 주문 요청 접수
• 향후 온라인 주문 시스템 확장 기반

이번 MVP에서는 결제 시스템은 포함하지 않는다.

---

# 1. 페이지 URL

/menu

---

# 2. 페이지 목표

1. Barracuda 카페 메뉴 소개
2. 브랜드 분위기를 유지하는 메뉴 구성
3. 단체 주문 / 사전 주문 요청 접수

이 페이지는 배달앱 스타일 메뉴판이 아니라
브랜드 경험 중심의 메뉴 페이지로 구성해야 한다.

---

# 3. 페이지 구조

Menu Hero
Menu Categories
Coffee Menu
Signature Menu
Non Coffee
Dessert
Order Request Form

---

# 4. Menu Hero

Title
Barracuda Menu

Subtitle
Coffee, atmosphere, and simple good things.

Description
Barracuda serves specialty coffee roasted by CNC Tech Roastery,
along with a curated selection of drinks and desserts.

---

# 5. Menu Categories

Coffee
Signature
Non Coffee
Dessert

각 카테고리는 스크롤 이동으로 연결된다.

---

# 6. Coffee Menu

Espresso
Americano
Cappuccino
Latte
Flat White

Filter Coffee

Hand Drip
Seasonal Single Origin

Cold Coffee

Cold Brew
Cold Brew Latte

---

# 7. Signature Menu

Barracuda Latte
Roastery Cream Coffee
Seasonal Signature Drink

설명
Barracuda의 로스팅 스타일에서 영감을 받은 시그니처 음료

---

# 8. Non Coffee

Tea
Chocolate
Ade
Sparkling

---

# 9. Dessert

Cookie
Cake
Seasonal Dessert

---

# 10. Order Request Form

Fields

Name
Phone
Email
Order Type
Pickup Date
Pickup Time
Order Details

Order Type 옵션

Cafe Order
Group Order
Event Order
Catering

Submit Button

Send Order Request

---

# 11. MVP 동작 방식

Option 1
Email 전송

Option 2
Supabase 저장

MVP에서는 이메일 방식으로도 충분하다.

---

# 12. 디자인 원칙

스타일

Minimal
Premium
Calm

금지

배달앱 스타일 UI
과도한 카드 디자인
밝은 색상 남용

---

# 13. 기술 스택

Framework
Next.js

Language
TypeScript

Styling
TailwindCSS

Deployment
Vercel

Future Backend
Supabase

---

# 14. 성공 기준

• 단체 주문 문의 증가
• 이벤트 주문 증가
• 메뉴 탐색 시간 증가
