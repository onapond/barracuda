# Barracuda Codex Handoff Status
Version: 2026-03-24 (세션 2)
Status: Active

Purpose
This document is the current handoff reference for the Barracuda website.
Use it before making further homepage, subpage, or deployment changes.

Operating rule reference
- Default agent workflow is governed by `AGENTS.md` at the repo root.
- **카피 영역은 메인 Claude가 직접 담당한다. 에이전트 팀 KCE 게이트를 거치지 않는다.**
- 에이전트 팀은 QA·구현 등 카피 외 역할에 활용한다.

Project basics
- Workspace: `C:\dev\barracuda_web`
- GitHub: `https://github.com/onapond/barracuda.git`
- Active branch: `v2-renewal`
- Vercel project: `onaponds-projects/barracuda_web`
- Production URL: `https://barracudaweb.vercel.app`
- Latest production deployment: `https://barracuda-690lg6m9m-onaponds-projects.vercel.app`

---

## 1. Current State

Current public routes implemented:
- `/`
- `/brand`
- `/coffee`
- `/space`
- `/menu`
- `/store`
- `/visit`

Implemented stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- static-first public pages
- FormSubmit for lightweight client-side inquiry forms

Current design direction:
- homepage is image-heavy and space-first
- 브랜드 핵심 키워드: `우리들만의 특별한 프라이빗 카페, 공간`
- 비즈니스 구조: 카페 + 공간 대여(대관) 병행
- 카피는 방어적 톤 없이 단호하고 구체적으로

---

## 2. 이번 세션 완료 내용 (2026-03-24 세션 2)

### 카피 전체 재작성 완료

**Brand:**
- 히어로 desc: 방어적 `~도 좋고 ~에도 좋습니다` → 선언형
- Gallery 1 title: `보통 카페와는 다른` → `우리끼리 있는 것처럼 조용한 카페`
- Brand Note: `지향합니다` → `그게 바라쿠다입니다`

**Coffee:**
- 히어로 title: `특별하게 만드는 커피` → `머무는 시간에 맞춘 커피`
- Gallery 2: 방어적 프레이밍 완전 제거 → `공간이 조용하면 커피도 조용합니다`

**Space:**
- 히어로: 대관 사업 전면 노출 (`대관 가능합니다`)
- Use Cases title → `어떤 모임이든 우리끼리의 장소로`
- 폼: `행사 문의` → `공간 대관 문의`

**Menu:**
- 히어로 title: 플레이스홀더 → `메뉴도 바라쿠다답게`
- 폼 copy 정리, 방문/단체 주문 구분 명확화

**Store:**
- `스토어 프리뷰` 내부 언어 제거
- 메타 설명 전부 제품 설명으로 교체

**Visit:**
- 메타 설명 제거, 갤러리 타이틀 정리

### 공간/장소 기준 확정
- 브랜드 태그라인 + 대관 맥락 → **공간**
- 사람이 모이는 목적지 본문 묘사 → **장소**

### 배포
- 빌드: `npm run lint` + `npm run build` 통과
- 배포: `vercel deploy --prod` (원격 빌드)
- 배포 URL: `https://barracuda-690lg6m9m-onaponds-projects.vercel.app`
- 프로덕션: `https://barracudaweb.vercel.app` 반영 완료

### 배포 규칙 업데이트
- prebuilt 방식 → `vercel deploy --prod` 방식으로 전환 (Next.js 16 RSC 호환 이슈)

---

## 3. Active Rules

### 카피 규칙
- `특별한`은 Brand 페이지 히어로에만 사용. 다른 페이지 반복 금지.
- 방어적 프레이밍 금지: `~로 보이고 싶지 않습니다`, `~해야 합니다`
- 메타 설명 금지: 페이지 설계 의도를 사용자에게 설명하는 문장
- 내부 언어 금지: `프리뷰 중심의`, `지금은 결제보다` 류

### Workflow rules
- 카피 작업 → 메인 Claude 직접 담당
- 구현/QA → 에이전트 팀 활용 가능
- Keep approval boundaries explicit.

### Rendering / scope rules
- Prefer static pages for all public routes.
- Do not introduce server actions into public pages unless explicitly requested.
- Keep implementations simple and low-risk.

---

## 4. Important Files

Primary homepage / shell files:
- `app/page.tsx`
- `components/company-homepage-template.tsx`
- `components/company-homepage-intro.tsx`
- `components/company-signature-tabs.tsx`
- `components/company-homepage-preview.tsx`
- `components/company-header.tsx`
- `components/footer.tsx`

Primary route content source:
- `data/sites/barracuda.ts` ← 모든 카피의 단일 소스

Deployment:
- `docs/deployment_rules.md` ← 표준: `lint → build → vercel deploy --prod`

---

## 5. Content / Asset Status

- 전체 7개 라우트 카피 1차 정리 완료 및 배포됨
- 이미지 alt/title/description 필드 정리는 아직 미완 (Brand, Coffee)
- 홈 비주얼 전체 sign-off 아직 미진행

---

## 6. Verification Status

Latest confirmed checks:
- `npm run lint` — pass
- `npm run build` — pass
- `vercel deploy --prod` — pass (barracuda-690lg6m9m)

---

## 7. Recommended Next Work

1. 이미지 alt/description 필드 정리 (Brand, Coffee 중심)
2. 홈 비주얼 전체 사용자 sign-off
3. 필요 시 카피 추가 사이클 (특정 라우트 요청 시)
