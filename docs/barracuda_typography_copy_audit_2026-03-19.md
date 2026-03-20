# Barracuda Typography and Copy Audit
Version: 2026-03-19
Status: Audit

Purpose
This audit reviews the current Barracuda codebase for copy awkwardness, Korean line-break risk, font inconsistency, and typography drift.

Scope
- `/`
- `/coffee`
- `/store`
- `/visit`
- shared typography files

Method
- reviewed `data/site-content.ts`
- reviewed homepage section components
- reviewed route files for `/coffee`, `/store`, `/visit`
- reviewed shared typography files in `app/globals.css`, `components/page-hero.tsx`, and `components/section-heading.tsx`

---

## 1. Executive Diagnosis

The current problem is not only that some copy sounds awkward.
The deeper issue is that copy, line-break behavior, and font rules are being decided in too many places at once.

Current state:
- copy source is split between `data/site-content.ts` and multiple route/component files
- shared heading rules exist, but many route files still define their own heading sizes and spacing
- Korean line breaks depend too much on width tuning and one-off class choices
- font families are defined globally, but `display`, `heading`, and `body` roles are not governed as a strict token system

Result:
- pages feel related, but not disciplined
- copy quality varies by route
- the same heading can look different depending on where it is rendered
- some lines sound compressed while others remain soft or generic

---

## 2. Structural Findings

### Finding A. Copy source is fragmented
Evidence
- homepage hero content exists in [components/hero-section.tsx](/C:/dev/barracuda_web/components/hero-section.tsx)
- homepage brand/store/visit copy exists in route-level section components such as [components/brand-section.tsx](/C:/dev/barracuda_web/components/brand-section.tsx), [components/store-section.tsx](/C:/dev/barracuda_web/components/store-section.tsx), and [components/visit-section.tsx](/C:/dev/barracuda_web/components/visit-section.tsx)
- some copy also lives in [data/site-content.ts](/C:/dev/barracuda_web/data/site-content.ts)
- priority route copy is hardcoded in [app/coffee/page.tsx](/C:/dev/barracuda_web/app/coffee/page.tsx), [app/store/page.tsx](/C:/dev/barracuda_web/app/store/page.tsx), and [app/visit/page.tsx](/C:/dev/barracuda_web/app/visit/page.tsx)

Risk
- copy edits cannot be reviewed from one source of truth
- Copy Clinic output is harder to apply consistently
- duplicated phrasing survives because routes are edited in isolation

Recommendation
- move priority route copy into structured route content objects
- treat `data/site-content.ts` or a route-content module set as the only editable source

### Finding B. Shared typography exists, but route files still bypass it
Evidence
- shared rules exist in [components/page-hero.tsx](/C:/dev/barracuda_web/components/page-hero.tsx) and [components/section-heading.tsx](/C:/dev/barracuda_web/components/section-heading.tsx)
- at least `30` direct typography override patterns still appear across route/component files
- route files repeatedly hardcode `font-display`, `text-4xl`, `sm:text-5xl`, custom `tracking`, and custom `leading`

Risk
- typography drift returns even after system work
- QA must review every route manually because shared guarantees are weak

Recommendation
- reduce route-level heading styling to width and exception flags only
- move size, tracking, and line-height control into shared variants

### Finding C. Font governance is incomplete
Evidence
- global families are defined in [app/globals.css](/C:/dev/barracuda_web/app/globals.css)
- `h1`, `h2`, `h3`, and `.font-display` all inherit the same display family
- no separate token exists for `heading` vs `display`

Risk
- large hero titles, section titles, and smaller card titles all feel too similar
- visual hierarchy depends on size alone instead of role

Recommendation
- define three explicit roles: `display`, `heading`, `body`
- restrict route files from choosing font families directly

---

## 3. Copy Findings by Route

### `/`
Observed in
- [components/hero-section.tsx](/C:/dev/barracuda_web/components/hero-section.tsx)
- [components/brand-section.tsx](/C:/dev/barracuda_web/components/brand-section.tsx)
- [components/store-section.tsx](/C:/dev/barracuda_web/components/store-section.tsx)
- [components/visit-section.tsx](/C:/dev/barracuda_web/components/visit-section.tsx)

Issues
- hero description is soft and generic: "커피와 머무는 시간이 하나의 경험으로 이어집니다."
- brand section description is long and category-like rather than brand-specific
- homepage copy mixes premium mood language with practical utility language without a tighter hierarchy

Copy risk
- the homepage still explains mood more than meaning
- several lines could be cut without losing user understanding

### `/coffee`
Observed in
- [app/coffee/page.tsx](/C:/dev/barracuda_web/app/coffee/page.tsx)

Issues
- multiple lines use soft explanatory structures such as "자연스럽게 이어지도록 준비합니다", "먼저 봅니다", "이어가 보세요"
- some section titles are semantically clear but rhythmically long for mobile
- section copy alternates between specific proof and atmospheric phrasing

Copy risk
- the page voice is not fully stable between product proof and editorial tone
- several titles are long enough to pressure line breaks at narrow widths

### `/store`
Observed in
- [app/store/page.tsx](/C:/dev/barracuda_web/app/store/page.tsx)

Issues
- "프리뷰" framing is repeated across hero, intro, and CTA
- some labels are functional but do not sound brand-owned
- title/body pairs are concise, but not distinctive enough to justify premium tone

Copy risk
- repetition lowers impact
- the page risks sounding like a placeholder rather than a deliberate brand preview

### `/visit`
Observed in
- [app/visit/page.tsx](/C:/dev/barracuda_web/app/visit/page.tsx)
- [components/visit-section.tsx](/C:/dev/barracuda_web/components/visit-section.tsx)

Issues
- utility copy is clearer than other routes, but still contains generic helper phrasing
- multiple headings say nearly the same thing in slightly different ways
- route-level structure is practical, but headline hierarchy is visually inconsistent

Copy risk
- useful information is present, but the route can become visually text-heavy because utility blocks use mixed heading scales

---

## 4. Korean Line-Break Findings

### Shared risk
- `word-break: keep-all` is used widely, which is correct as a baseline, but it is carrying too much responsibility
- `text-balance` is applied in shared headings, but route-level width overrides and long titles still decide the final wrap

### Specific issues
- homepage hero title and subtitle in [components/hero-section.tsx](/C:/dev/barracuda_web/components/hero-section.tsx) use a separate hero system instead of the shared `PageHero`
- brand section uses a custom title override in [components/brand-section.tsx](/C:/dev/barracuda_web/components/brand-section.tsx), which weakens consistency
- `/coffee`, `/store`, and `/visit` repeatedly define raw `h2` headline behavior directly in their route files
- [app/brand/page.tsx](/C:/dev/barracuda_web/app/brand/page.tsx) already shows custom description width and title override pressure, indicating the shared system is not strict enough

### Interpretation
- awkward wrapping is currently being prevented by many local class choices, not by a disciplined copy-plus-token system

---

## 5. Font and Typography Findings

### Current token reality
- body family: `--font-sans`
- display family: `--font-display`
- no explicit heading family token

### Visual drift sources
- homepage hero uses unique size and rhythm separate from `PageHero`
- section titles across routes alternate between shared component usage and raw local `h2`
- card titles often use `font-display text-2xl` or `text-3xl` without a card-heading token
- eyebrow copy uses several tracking values: `0.12em`, `0.24em`, `0.28em`, `0.3em`, `0.34em`

### Severity
- high for consistency
- medium for readability
- high for future maintenance

---

## 6. Recommended External Tools and Skills

### Playwright screenshot QA
Recommended use
- capture `/`, `/coffee`, `/store`, `/visit` at `360 / 768 / 1024 / 1440`
- compare hero, section heading, and card text wraps visually

Why it helps
- makes line-break failures visible immediately
- prevents subjective review from relying on memory

### Typography audit script
Recommended use
- enumerate class patterns for font size, tracking, leading, and `font-display` usage
- produce a route-level exception list

Why it helps
- turns "font inconsistency" into a measurable cleanup target

### Dual-pass copy review
Recommended use
- writer produces 3 headline candidates
- reviewer removes filler and flags mobile wrap risk

Why it helps
- separates invention from compression
- improves Korean rhythm before layout work starts

---

## 7. Priority Fix Order

1. centralize copy for `/`, `/coffee`, `/store`, `/visit`
2. create a typography token table for `display`, `heading`, `body`, `eyebrow`, and `card title`
3. migrate priority route headings to shared component variants
4. run breakpoint screenshot QA
5. rewrite headlines and short descriptions through Copy Clinic

---

## 8. Decision

The next cycle should not begin with implementation polish.
It should begin with:
- stricter copy review
- stricter line-break rules
- stricter font-role governance

Without that, the team will keep producing locally improved pages that still feel inconsistent as a system.
