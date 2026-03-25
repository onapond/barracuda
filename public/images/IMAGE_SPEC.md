# IMAGE_SPEC.md — 바라쿠다 이미지 스펙 가이드

> 마지막 업데이트: 2026-03-25
> 실제 구현 기준으로 작성. `data/sites/barracuda.ts`의 `src` 필드와 1:1 대응.

---

## 컨테이너 사이즈 기준

| 슬롯 유형 | 모바일 높이 | LG 높이 | 권장 크기 |
|---------|----------|--------|---------|
| 랜딩 히어로 (full-bleed) | 34rem = 544px | 56rem = 896px | **1920 × 900px** |
| 페이지 히어로 | 24rem = 384px | 38rem = 608px | **1920 × 700px** |
| 시그니처탭 피처드 (1-col) | 32rem = 512px | 54rem = 864px | **1400 × 1000px** |
| 인트로 메인 (1-col) | 26rem = 416px | 34rem = 544px | **1400 × 900px** |
| 프리뷰 피처드 | 22rem = 352px | 30rem = 480px | **1400 × 700px** |
| 2-col 서브 이미지 | 24rem = 384px | 32rem = 512px | **800 × 640px** |
| 3-col 갤러리 | 320px | 360px | **600 × 500px** |
| 메뉴 아이템 카드 (3-col) | 320px | 360px | **600 × 500px** |

---

## 랜딩 페이지 (`landing/`)

### 히어로
```
landing/intro/hero.jpg — 1920×900px  ← 현재 적용 중
  바라쿠다 공간 전경. 어두운 감성 조명.
  주피사체를 하단 60%에 배치 (상단은 헤드라인 영역)
```

### 인트로 (`landing/intro/`)
```
main.jpg  — 1400×900px  ← 현재 적용 중
sub-1.png — 800×640px   ← 현재 적용 중
sub-2.jpg — 800×640px   ← 현재 적용 중
```

### 시그니처 탭 — Private Scene (`landing/tabs/private-scene/`)
```
main.jpg  — 1400×1000px  ← 현재 적용 중
sub-1.jpg — 800×640px    ← 현재 적용 중
sub-2.jpg — 800×640px    ← 현재 적용 중
```

### 시그니처 탭 — Celebration (`landing/tabs/celebration/`)
```
main.jpg  — 1400×1000px  ← 현재 적용 중
sub-1.jpg — 800×640px    ← 현재 적용 중
sub-2.jpg — 800×640px    ← 현재 적용 중
```

### 시그니처 탭 — Cafe & Lounge (`landing/tabs/cafe-lounge/`)
```
main.jpg  — 1400×1000px  ← 현재 적용 중
sub-1.jpg — 800×640px    ← 현재 적용 중
sub-2.jpg — 800×640px    ← 현재 적용 중
```

### 시그니처 탭 — Brand & Goods (`landing/tabs/brand-goods/`)
```
main.png  — 1400×1000px  ← 현재 적용 중
sub-1.png — 800×640px    ← 현재 적용 중
sub-2.png — 800×640px    ← 현재 적용 중
  굿즈 연출샷. 머그, 텀블러, 원두 패키지 등.
```

### 프리뷰 섹션 (`landing/previews/`)
```
space-featured.jpg  — 1400×700px  ← 현재 적용 중
space-sub-1.jpg     — 800×640px   ← 현재 적용 중
space-sub-2.jpg     — 800×640px   ← 현재 적용 중

brand-featured.png  — 1400×700px  ← 현재 적용 중
brand-sub-1.jpg     — 800×640px   ← 현재 적용 중
brand-sub-2.png     — 800×640px   ← 현재 적용 중

coffee-featured.png — 1400×700px  ← 현재 적용 중
coffee-sub-1.png    — 800×640px   ← 현재 적용 중
coffee-sub-2.png    — 800×640px   ← 현재 적용 중

menu-featured.png   — 1400×700px  ← 현재 적용 중
menu-sub-1.png      — 800×640px   ← 현재 적용 중
menu-sub-2.png      — 800×640px   ← 현재 적용 중

visit-featured.jpg  — 1400×700px  ← 현재 적용 중
visit-sub-1.png     — 800×640px   ← 현재 적용 중
visit-sub-2.jpg     — 800×640px   ← 현재 적용 중
visit-sub-3.jpg     — 800×640px   ← 현재 적용 중
```

---

## 브랜드 페이지 (`brand/`)

```
brand/hero.jpg — 1920×700px  ← 현재 적용 중
  브랜드 공간 대표 전경.
```

### 갤러리 1 (`brand/gallery-1/`)
```
mood-1.jpg — 600×500px  ← 현재 적용 중  시그니처 인테리어 무드
mood-2.jpg — 600×500px  ← 현재 적용 중  차분한 실내 디테일
mood-3.jpg — 600×500px  ← 현재 적용 중  커피와 대화 장면
```

### 갤러리 2 (`brand/gallery-2/`)
```
story.jpg  — 800×640px  ← 현재 적용 중  외관 또는 전경 스토리샷
detail.jpg — 800×640px  ← 현재 적용 중  브랜드 디테일 클로즈업
```

---

## 커피 페이지 (`coffee/`)

```
coffee/hero.png — 1920×700px  ← 현재 적용 중
  로스터리 또는 브루잉 대표 장면.
```

### Coffee Process (3-col 갤러리)
> 경로 미정비 — 추후 `coffee/process/` 폴더로 이전 권장
```
roastery.png  — 600×500px  (임시 경로: /images/roastery.png)
roasting.png  — 600×500px  (임시 경로: /images/roasting.png)
brew.png      — 600×500px  (임시 경로: /images/brew.png)
```

### Menu Mood — 개별 메뉴 이미지 (`coffee/menu/`)
> ⚠️ 전 메뉴 개별 이미지 필요. 현재 임시 이미지 사용 중.
> 실제 촬영본 준비되면 `coffee/menu/` 폴더에 넣고 barracuda.ts 경로 교체.

| 파일명 | 메뉴 | 권장 크기 | 현재 상태 |
|--------|------|---------|---------|
| americano.jpg | 아메리카노 | 600×500px | 임시 (ame.png) |
| caffe-latte.jpg | 카파라떼 | 600×500px | 임시 (latte.webp) |
| vanilla-latte.jpg | 바닐라 라떼 | 600×500px | 임시 (latte.webp) |
| peppermint.jpg | 페퍼민트 | 600×500px | 임시 (brew.png) |
| chamomile.jpg | 캐모마일 | 600×500px | 임시 (brew.png) |
| rooibos.jpg | 루이보스티 | 600×500px | 임시 (brew.png) |
| hibiscus.jpg | 히비스커스 | 600×500px | 임시 (brew.png) |
| lemon-earl-grey.jpg | 레몬 얼그레이 | 600×500px | 임시 (ade.png) |
| apple-peach-oolong.jpg | 애플 피치 우롱티 | 600×500px | 임시 (ade.png) |
| apple-peach-cinnamon.jpg | 애플 피치 시나몬 루이보스 | 600×500px | 임시 (ade.png) |
| strawberry-peach.jpg | 딸기 피치 루이보스 | 600×500px | 임시 (ade.png) |
| berry-hibiscus.jpg | 베리썸 히비스커스 | 600×500px | 임시 (ade.png) |
| iced-tea.jpg | 아이스티 | 600×500px | 임시 (ade.png) |
| lemon-ade.jpg | 레몬에이드 | 600×500px | 임시 (ade.png) |
| green-grape-ade.jpg | 청포도에이드 | 600×500px | 임시 (ade.png) |
| grapefruit-ade.jpg | 자몽에이드 | 600×500px | 임시 (ade.png) |
| bundaberg.jpg | 분다버그 | 600×500px | 임시 (ade.png) |
| orange-juice.jpg | 오렌지 착즙 주스 | 600×500px | 임시 (ade.png) |
| salt-bread.jpg | 소금빵 | 600×500px | 임시 (ba_menu.jpg) |

**촬영 가이드:**
- 배경: 바라쿠다 공간 또는 중립 다크 톤
- 구도: 음료는 위에서 30° 사선 또는 정면, 디저트는 사선 클로즈업
- 조명: 자연광 또는 소프트박스. 반사광 최소화.
- 공통 톤: 채도 낮고 차분한 무드. 과도한 보정 금지.

---

## 공간 페이지 (`space/`)
> 경로 미정비 — 현재 임시 경로 사용 중. 추후 `space/` 폴더로 이전 권장.

```
hero: /images/cafe.jpg (임시)
gallery: /images/cafe.jpg, event.jpg, experience.jpg, book.jpg, fation.jpg, showcase.jpg, 1~6.jpg (임시)
```

---

## 메뉴 페이지 (`menu/`)
> ⚠️ Full Menu 이미지 섹션 제거됨. 별도 메뉴판 이미지 불필요.
> 메뉴 페이지는 텍스트/폼 중심 구성.

---

## 스토어 페이지 (`store/`)
> 경로 미정비 — 현재 임시 경로 사용 중.

```
hero: /images/goods.png (임시)
gallery: /images/apollo.png, goods.png, Parcera.png 등 (임시)
```

---

## 방문 페이지 (`visit/`)
> 경로 미정비 — 현재 임시 경로 사용 중.

---

## 공통 (`common/`)
공통으로 사용되는 이미지 (로고, 배경 텍스처 등)

---

## 이미지 교체 우선순위

| 우선순위 | 항목 | 상태 |
|--------|------|------|
| ✅ 완료 | 랜딩 전체 (히어로/인트로/탭/프리뷰) | 적용됨 |
| ✅ 완료 | 브랜드 페이지 전체 | 적용됨 |
| ✅ 완료 | 커피 히어로 | 적용됨 |
| 🔴 필요 | 커피 메뉴 19개 개별 이미지 | 임시 사용 중 |
| 🔴 필요 | 커피 프로세스 3장 (roastery/roasting/brew) | 임시 사용 중 |
| 🟡 권장 | 공간 페이지 이미지 | 임시 사용 중 |
| 🟡 권장 | 스토어 페이지 이미지 | 임시 사용 중 |
| 🟡 권장 | 방문 페이지 이미지 | 임시 사용 중 |
