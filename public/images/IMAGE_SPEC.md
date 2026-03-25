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
roastery.png  — 600×500px  ← 현재 적용 중 (coffee/process/roastery.png)
roasting.png  — 600×500px  ← 현재 적용 중 (coffee/process/roasting.png)
brewing.png   — 600×500px  ← 현재 적용 중 (coffee/process/brewing.png)
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
> ⚠️ 현재 임시 경로 사용 중. 아래 경로로 교체 필요.

### 히어로
```
space/hero.jpg — 1920×700px
  공간 전체 전경. 대관 가능성이 느껴지는 넓은 구도.
  사람 없이 공간 자체 분위기 중심. 어두운 감성 조명.
  현재: /images/cafe.jpg (임시)
```

### Main Space (`space/main/`) — 3-col 갤러리
```
cafe.jpg       — 600×500px  카페 일상 장면. 자연광, 테이블 세팅.
event.jpg      — 600×500px  이벤트 세팅 장면. 꽃·장식 포함.
experience.jpg — 600×500px  브랜드 경험/프로그램 분위기. 사람 1-2명.
```

### Use Cases (`space/use-cases/`) — 3-col 갤러리 (tint)
```
book-club.jpg    — 600×500px  책과 커피가 함께하는 북클럽 장면.
brand-meeting.jpg — 600×500px  정제된 무드의 소규모 브랜드 모임.
showcase.jpg     — 600×500px  제품이 조용히 진열된 쇼케이스 자리.
```

### Full Gallery (`space/gallery/`) — 3-col 갤러리
```
01.jpg — 600×500px  정면 전경 (입구 또는 카운터 방향)
02.jpg — 600×500px  테이블 디테일 (소품, 질감, 조명 클로즈업)
03.jpg — 600×500px  창문 또는 자연광이 들어오는 장면
04.jpg — 600×500px  바 카운터 또는 커피 준비 장면
05.jpg — 600×500px  저녁 분위기 (조명 아래 공간)
06.jpg — 600×500px  공간 여백 강조 (광각, 사람 없음)
```

**촬영 가이드:**
- 갤러리 6장은 다양한 각도·조명 조건 필수
- 낮 자연광 3장 + 저녁 인공조명 2장 + 디테일 클로즈업 1장 구성 권장
- 공통 톤: 채도 낮고 차분한 무드. 과도한 보정 금지.

---

## 메뉴 페이지 (`menu/`)
> ⚠️ Full Menu 이미지 섹션 제거됨. 별도 메뉴판 이미지 불필요.
> 메뉴 페이지는 텍스트/폼 중심 구성.

---

## 스토어 페이지 (`store/`)
> ⚠️ 현재 임시 경로 사용 중. 아래 경로로 교체 필요.

### 히어로
```
store/hero.jpg — 1920×700px
  원두 패키지 또는 굿즈 연출샷. 바라쿠다 브랜딩이 보이는 구도.
  현재: /images/apollo.png (임시)
```

### Collections (`store/collections/`) — 3-col 갤러리
```
beans.jpg     — 600×500px  원두 패키지 클로즈업. 바라쿠다 브랜딩 강조.
goods.jpg     — 600×500px  머그·텀블러 등 굿즈. 공간 배경 활용.
lifestyle.jpg — 600×500px  라이프스타일 소품 배치. 책상 또는 테이블 위.
```

### Mood (`store/mood/`) — 2-col 갤러리 (tint)
```
drink-1.jpg — 800×640px  음료와 제품(머그/텀블러)이 함께 있는 연출샷.
drink-2.jpg — 800×640px  데일리 무드 (집·책상 배경, 원두 or 굿즈 포함).
```

**촬영 가이드:**
- 배경: 바라쿠다 공간 내부 또는 중립 다크 톤 테이블
- 원두는 패키지 봉투·크래프트지 함께 연출
- 굿즈는 실제 사용 중인 장면으로 촬영 (손 포함 가능)

---

## 방문 페이지 (`visit/`)
> ⚠️ 현재 임시 경로 사용 중. 아래 경로로 교체 필요.

### 히어로
```
visit/hero.jpg — 1920×700px
  이태원 로얄파크컨벤션 건물 외관 또는 입구. 오기 전 첫인상 전달.
  현재: /images/brend-hero.jpg.jpg (임시)
```

### Visit Mood (`visit/mood/`) — 3-col 갤러리
```
arrival.jpg  — 600×500px  첫 방문 분위기. 입구·로비·간판. "여기가 맞구나" 느낌.
interior.jpg — 600×500px  문 열고 들어섰을 때 가장 먼저 보이는 내부 시선.
view.jpg     — 600×500px  창가 또는 앉은 자리에서 보이는 공간 뷰.
```

**촬영 가이드:**
- 외관은 낮 시간대 (건물 파사드·간판이 잘 보이도록)
- 내부 2장은 방문자 시선 높이 (서 있거나 막 들어선 구도)
- 사람이 살짝 포함되어도 무방 (실루엣 또는 뒷모습)

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
| ✅ 완료 | 커피 메뉴 19개 개별 이미지 | 적용됨 |
| ✅ 완료 | 커피 프로세스 3장 (roastery/roasting/brewing) | 적용됨 |
| ✅ 완료 | 공간 페이지 이미지 | 적용됨 |
| ✅ 완료 | 스토어 페이지 이미지 | 적용됨 |
| ✅ 완료 | 방문 페이지 이미지 | 적용됨 |
