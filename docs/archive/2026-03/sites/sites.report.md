# PDCA Completion Report — sites

> **Feature**: sites (Barracuda Web v2 리뉴얼)
> **완료일**: 2026-03-26
> **배포 URL**: https://barracudaweb.vercel.app
> **브랜치**: v2-renewal

---

## 1. 요약

바라쿠다 카페 웹사이트 v2 리뉴얼 전 과정 완료.
랜딩 + 6개 서브페이지 (brand, coffee, menu, space, store, visit) 의 컴포넌트 구조, 카피, 이미지, 이미지 최적화까지 전체 사이클을 완료하고 프로덕션 배포.

---

## 2. 세션별 작업 내역

### Session 1 — 구조 및 컴포넌트 (커밋 9개)
| 작업 | 결과 |
|------|------|
| 홈페이지 → Space-first 미디어 랜딩으로 전환 | `company-homepage-template.tsx` |
| 서브페이지 gallery-first 템플릿 전환 | `company-page-hero.tsx`, `company-gallery-section.tsx` |
| 시그니처 탭 구조 정비 + Brand & Goods 탭 추가 | `company-signature-tabs.tsx` |
| Noto Sans KR 웹폰트 도입, 타이포그래피 정리 | `app/globals.css`, `app/layout.tsx` |
| Coffee 페이지 메뉴 섹션 개선 | `company-coffee-menu-section.tsx` (신규) |

### Session 2 — 카피 리라이트 (커밋 3개)
| 작업 | 결과 |
|------|------|
| 전 페이지 카피 전면 재작성 | `data/sites/barracuda.ts` |
| 이미지 alt 텍스트 개선 (brand, coffee) | `data/sites/barracuda.ts` |
| `/menu` 페이지 외부 링크 제거 | `app/menu/page.tsx` |

### Session 3 — 실제 이미지 교체 (커밋 10개)
| 작업 | 결과 |
|------|------|
| 랜딩 히어로/인트로/탭 이미지 교체 | `public/images/landing/` (전체) |
| 랜딩 프리뷰 5개 섹션 실제 이미지 적용 | `public/images/landing/previews/` |
| Brand, Coffee 페이지 이미지 교체 | `public/images/brand/`, `public/images/coffee/` |
| Space 이미지 전체 교체 | `public/images/space/` |
| Store 이미지 전체 교체 | `public/images/store/` |
| Visit 이미지 전체 교체 | `public/images/visit/` |
| IMAGE_SPEC.md 작성 | `public/images/IMAGE_SPEC.md` |

### Session 4 (현재) — 이미지 최적화 + 배포
| 작업 | 결과 |
|------|------|
| `next.config.ts` AVIF/WebP formats 추가 | ✅ |
| 전 컴포넌트 `sizes` prop 추가 (7개 컴포넌트) | ✅ |
| 빌드 검증 (에러 0) | ✅ |
| Vercel 프로덕션 배포 | ✅ |

---

## 3. 수정된 주요 파일

```
app/
  globals.css              — 타이포그래피, CSS 변수
  layout.tsx               — Noto Sans KR 웹폰트
  page.tsx                 — 홈페이지 구조

components/
  company-homepage-template.tsx   — 히어로 (sizes 추가)
  company-homepage-intro.tsx      — 인트로 (sizes 추가)
  company-homepage-preview.tsx    — 프리뷰 (sizes 추가)
  company-signature-tabs.tsx      — 탭 (sizes 추가)
  company-gallery-section.tsx     — 갤러리 (sizes 추가)
  company-page-hero.tsx           — 페이지 히어로 (sizes 추가)
  company-menu-showcase.tsx       — 메뉴 쇼케이스 (sizes 추가)
  company-coffee-menu-section.tsx — 신규 생성

data/sites/
  barracuda.ts             — 전체 카피 + 이미지 경로

public/images/             — 실제 이미지 133개 교체/추가

next.config.ts             — AVIF/WebP formats 추가
```

---

## 4. 이미지 최적화 개선사항

| 항목 | Before | After |
|------|--------|-------|
| `sizes` prop | 누락 (전체 100vw 요청) | 컨텍스트별 정확한 크기 지정 |
| AVIF 포맷 | 미지원 | ✅ 활성화 |
| WebP 포맷 | 기본값만 | ✅ 명시 활성화 |
| 히어로 priority | ✅ 이미 적용 | ✅ 유지 |

**효과**: 모바일(375px) 기준 갤러리 이미지 요청 크기 ~50% 감소 예상

---

## 5. 배포 정보

- **Production URL**: https://barracudaweb.vercel.app
- **Inspect**: https://vercel.com/onaponds-projects/barracuda_web
- **빌드**: Next.js 16.1.6 (Turbopack), 11페이지 정상 생성
- **배포 시각**: 2026-03-26

---

## 6. 잔여 작업 (다음 세션)

- [ ] `coffee-section.tsx`, `brand-section.tsx`, `store-section.tsx`, `space-section.tsx` `sizes` 추가
- [ ] `blurDataURL` placeholder 적용 (LCP 개선)
- [ ] OG 이미지 메타 태그 설정
- [ ] `/menu` 실제 메뉴판 이미지 업데이트
