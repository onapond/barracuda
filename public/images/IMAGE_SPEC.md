# IMAGE_SPEC.md — 바라쿠다 이미지 스펙 가이드

## 컨테이너 사이즈 기준

| 슬롯 유형 | 모바일 높이 | LG 높이 | 권장 크기 |
|---------|----------|--------|---------|
| 랜딩 히어로 (full-bleed) | 34rem = 544px | 56rem = 896px | **1920 × 900px** |
| 페이지 히어로 | 24rem = 384px | 38rem = 608px | **1920 × 700px** |
| 섹션 메인 (1-col) | 32rem = 512px | 52rem = 832px | **1400 × 900px** |
| 시그니처탭 피처드 (1-col) | 32rem = 512px | 54rem = 864px | **1400 × 1000px** |
| 프리뷰 피처드 | 22rem = 352px | 30rem = 480px | **1400 × 700px** |
| 2-col 서브 이미지 | 24rem = 384px | 32rem = 512px | **800 × 640px** |
| 3-col 갤러리 | 320px | 360px | **600 × 500px** |
| 메뉴 쇼케이스 피처 | 320px | 420px | **800 × 700px** |

---

## 랜딩 페이지 (`landing/`)

### 히어로
```
hero.jpg — 1920×900px
  바라쿠다 공간 전경. 어두운 감성 조명, 사람 없음 또는 실루엣.
  주피사체를 하단 60%에 배치 (상단은 헤드라인 영역으로 사용됨)
```

### 인트로 (`intro/`)
```
main.jpg — 1400×900px
  공간 내부 전경. 낮 분위기, 자연광 선호.

sub-1.jpg — 800×640px
  공간 디테일 (테이블 질감, 조명, 소품 클로즈업)

sub-2.jpg — 800×640px
  사람이 있는 공간 장면 (2-3명, 대화 중)
```

### 시그니처 탭 — Private Scene (`tabs/private-scene/`)
```
main.jpg — 1400×1000px
  2-4명의 작은 모임 테이블 장면. 조용하고 집중된 분위기.

sub-1.jpg — 800×640px
  테이블 위 커피잔 + 손 클로즈업, 대화 중 분위기

sub-2.jpg — 800×640px
  공간 여백 강조, 소수 인원이 앉아있는 전체 샷
```

### 시그니처 탭 — Celebration (`tabs/celebration/`)
```
main.jpg — 1400×1000px
  저녁 기념 파티 세팅. 꽃, 케이크, 조명. 4-8명.

sub-1.jpg — 800×640px
  조명 아래 저녁 분위기 (After Hours 느낌)

sub-2.jpg — 800×640px
  특별하게 세팅된 테이블 디테일
```

### 시그니처 탭 — Cafe & Lounge (`tabs/cafe-lounge/`)
```
main.jpg — 1400×1000px
  라운지 카페 전경. 여유로운 낮 분위기.

sub-1.jpg — 800×640px
  커피 음료 + 잔 클로즈업 (라이트박스 스타일)

sub-2.jpg — 800×640px
  혼자 앉아 책/노트 보는 장면
```

### 프리뷰 섹션 (`previews/`)
```
space-featured.jpg — 1400×700px   공간 이벤트 전경 또는 대관 장면
space-sub-1.jpg — 800×640px       공간 경험 장면 (체험/프로그램)
space-sub-2.jpg — 800×640px       오픈 레이아웃, 여백 강조

brand-featured.jpg — 1400×700px   브랜드 인테리어 전경
brand-sub-1.jpg — 800×640px       브랜드 첫인상 (입구/현관)
brand-sub-2.jpg — 800×640px       차분한 실내 분위기

coffee-featured.jpg — 1400×700px  로스터리 전경
coffee-sub-1.jpg — 800×640px      로스팅 장면
coffee-sub-2.jpg — 800×640px      브루잉/추출 장면

menu-featured.jpg — 1400×700px    메뉴판 또는 시그니처 음료
menu-sub-1.jpg — 800×640px        라떼 클로즈업
menu-sub-2.jpg — 800×640px        시즌 음료

visit-featured.jpg — 1400×700px   방문 첫인상 (외관 또는 로비)
visit-sub.jpg — 800×640px         내부 첫 시선 장면
```

---

## 브랜드 페이지 (`brand/`)

```
hero.jpg — 1920×700px
  브랜드 공간 대표 전경. 광각, 어두운 감성.
```

### 갤러리 1 (`gallery-1/`)
```
mood-1.jpg — 600×500px   시그니처 인테리어 무드 (입구/바)
mood-2.jpg — 600×500px   차분한 실내 디테일 (테이블, 조명)
mood-3.jpg — 600×500px   커피와 대화 장면
```

### 갤러리 2 (`gallery-2/`)
```
story.jpg — 800×640px    외관 또는 전경 스토리샷
detail.jpg — 800×640px   브랜드 디테일 클로즈업 (로고, 소품)
```

---

## 커피 페이지 (`coffee/`)

```
hero.jpg — 1920×700px
  로스터리 또는 브루잉 대표 장면.
```

### 프로세스 (`process/`)
```
roastery.jpg — 600×500px   로스터리 설비 또는 원두 전경
roasting.jpg — 600×500px   로스팅 과정 (불꽃, 드럼)
brewing.jpg — 600×500px    브루잉/추출 과정
```

### 음료 (`drinks/`)
```
americano.jpg — 600×500px   아메리카노 클로즈업 (배경 어두움)
latte.jpg — 600×500px       라떼 클로즈업 (밀크폼 디테일)
seasonal.jpg — 600×500px    시즌 음료
```

### 메뉴 (`menu/`)
```
feature.jpg — 800×700px    음료 연출샷 (메뉴 쇼케이스용)
board.jpg — 800×900px      메뉴판 전체 (세로 비율)
```

---

## 공간 페이지 (`space/`)

```
hero.jpg — 1920×700px
  공간 전체 전경. 대관 가능성 느껴지는 넓은 구도.
```

### 메인 (`main/`)
```
cafe.jpg — 600×500px        카페 일상 장면
event.jpg — 600×500px       이벤트 세팅 장면
experience.jpg — 600×500px  경험/프로그램 분위기
```

### 이용 사례 (`use-cases/`)
```
book-club.jpg — 600×500px   북클럽 (책과 커피)
meeting.jpg — 600×500px     브랜드 미팅 장면
showcase.jpg — 600×500px    쇼케이스 (제품 진열)
```

### 갤러리 (`gallery/`)
```
01.jpg — 600×500px   정면 전경
02.jpg — 600×500px   테이블 디테일
03.jpg — 600×500px   창문/자연광
04.jpg — 600×500px   바 카운터
05.jpg — 600×500px   저녁 분위기
06.jpg — 600×500px   공간 여백
```

---

## 메뉴 페이지 (`menu/`)

```
hero.jpg — 1920×700px
  메뉴판 또는 음료 연출 대표 장면.
```

### 갤러리 (`gallery/`)
```
board.jpg — 600×500px    메뉴판 (카페 분위기 포함)
coffee.jpg — 600×500px   커피류 대표 샷
milk.jpg — 600×500px     밀크 메뉴 (라떼 계열)
```

### 무드 (`mood/`)
```
ade.jpg — 800×640px       시즌 음료 연출
dessert.jpg — 800×640px   디저트 + 공간 무드
```

---

## 스토어 페이지 (`store/`)

```
hero.jpg — 1920×700px
  원두 또는 굿즈 대표 연출샷.
```

### 컬렉션 (`collections/`)
```
beans.jpg — 600×500px       원두 패키지 (바라쿠다 브랜딩)
goods.jpg — 600×500px       굿즈 (머그, 텀블러 등)
lifestyle.jpg — 600×500px   라이프스타일 소품 배치
```

### 무드 (`mood/`)
```
drink-1.jpg — 800×640px   음료 + 제품 연결 장면
drink-2.jpg — 800×640px   데일리 무드 (집/책상 배경)
```

---

## 방문 페이지 (`visit/`)

```
hero.jpg — 1920×700px
  이태원 건물 외관 또는 입구. 찾아오기 전 분위기 전달.
```

### 무드 (`mood/`)
```
arrival.jpg — 600×500px    첫 방문 분위기 (입구, 로비)
interior.jpg — 600×500px   내부 첫 인상 (문 열고 들어선 시선)
view.jpg — 600×500px       창가 또는 내부 뷰
```

---

## 공통 (`common/`)
공통으로 사용되는 이미지 (로고, 배경 텍스처 등)
