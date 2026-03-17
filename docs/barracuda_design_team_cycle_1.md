# Barracuda Design Team Cycle 1
Version: 2026-03-17

Purpose
This is the first Design Team deliverable for Barracuda.
It defines the shared typography, width, spacing, and line-break system for the shortened Korean-first copy.

Scope
- `/`
- `/coffee`
- `/store`
- `/visit`
- shared hero and section-heading patterns

Design objective
- Make the shorter copy feel intentional, not empty.
- Keep Korean line breaks controlled and natural.
- Make all four priority routes read like one brand system.

Design principle
- The site should feel edited.
- Shorter copy does not mean smaller presence.
- Typography should create calm authority, not dramatic inconsistency.

---

## 1. Shared Reading System

### Hierarchy model
- Hero title: strongest statement on the page
- Hero body: one supporting clarification
- Section title: one message per section
- Section body: one concise explanation
- Card body: one proof line
- CTA: direct navigation language

### Density target
- No section should rely on a long paragraph to feel complete.
- Visual weight should come from spacing, width, and contrast, not from text volume.

### Korean line-break principle
- Break by phrase, never by word fragments.
- Favor natural noun phrase boundaries.
- Avoid stacked short lines that make the page feel jittery.
- Avoid wide full-length lines that make Korean look loose and mechanical.

---

## 2. Width Rules

### Hero title width
Default
- mobile: `max-width` around `9ch` to `11ch`
- tablet and up: `max-width` around `11ch` to `13ch`

Reason
- Korean hero titles need a narrow enough measure to feel editorial, but not so narrow that they fracture into many short lines.

Implementation guidance
- Current shared hero title width should be tightened from a broad generic cap to a route-aware cap.
- Use a shared default in `PageHero`, then opt into narrower or wider variants sparingly.

### Hero body width
Default
- mobile: `max-width` around `26ch` to `30ch`
- tablet and up: `max-width` around `30ch` to `34ch`

Reason
- Hero copy should read as one compact supporting block, not a mini article.

### Section title width
Default
- mobile: `max-width` around `10ch` to `13ch`
- desktop: `max-width` around `12ch` to `15ch`

Reason
- Most shortened section titles should fit in 1 to 2 lines.

### Section body width
Default
- mobile: `max-width` around `28ch` to `34ch`
- desktop: `max-width` around `32ch` to `38ch`

Reason
- Section descriptions should support the title, not visually compete with it.

### Card body width
Default
- do not stretch card text to full card width if the card is visually wide
- keep body measure around `22ch` to `28ch`

Reason
- compact cards hold rhythm better and are easier to scan

---

## 3. Type Scale Rules

### Hero title scale
Target
- mobile: visually bold but controlled
- desktop: large enough to anchor the page without creating poster-level drama

Guideline
- keep hero titles within a stable scale family across the four pages
- no single subpage should be visually louder than the homepage unless intentionally approved

Recommended behavior
- homepage hero can be the largest
- subpage heroes should stay one step below or visually equivalent, never larger

### Hero body scale
Guideline
- use one consistent body scale across the four priority routes
- avoid oversized hero descriptions that feel like a second headline

### Section title scale
Guideline
- maintain one shared scale in `SectionHeading`
- use route-specific overrides only for extreme cases

### Section body scale
Guideline
- section body should not exceed the visual authority of the title
- line-height should feel open but not airy to the point of weakness

---

## 4. Line-Height Rules

### Hero title line-height
- mobile: tight enough to feel strong
- desktop: slightly relaxed, but still compact
- avoid extra vertical looseness on 2-line Korean headlines

### Hero body line-height
- keep comfortable reading rhythm
- do not let 2 short sentences look like a long editorial paragraph

### Section title line-height
- slightly tighter than body
- strong enough to keep stacked titles cohesive

### Section body line-height
- use generous but restrained spacing
- avoid long soft paragraph texture

### Card text line-height
- compact
- cards should read as fast proof points, not small essays

---

## 5. Manual Line-Break Policy

### Manual `<br />` is allowed when
- a hero title breaks poorly at `360px`
- a Korean phrase needs one stable editorial break across breakpoints
- the homepage or one flagship section needs a highly intentional phrase break

### Manual `<br />` is not allowed when
- it is used to compensate for long unfocused copy
- it appears in multiple body paragraphs
- each page starts inventing its own break pattern
- a shared width adjustment could solve the issue instead

### Approval rule
- Only hero titles and rare flagship section titles may use responsive manual breaks.
- Section descriptions, card bodies, notices, and practical info blocks should not rely on manual breaks.

### Preferred order of fixes
1. shorten the sentence
2. tighten or widen width constraint
3. adjust font size or line-height
4. use a responsive manual break only if the phrase still fails

---

## 6. Spacing Rhythm

### Hero block
- eyebrow to title: compact
- title to body: moderate
- body to CTA: deliberate, not crowded

Goal
- The hero should read as one coherent cluster, not three disconnected blocks.

### Section intro block
- eyebrow to title: compact
- title to body: moderate
- intro block to following content: generous

Goal
- Section intros should feel editorial and calm, with enough air to separate them from cards and images.

### Card grid spacing
- keep grid gaps consistent across related blocks
- avoid one section using airy spacing and the next using dense spacing

### CTA block spacing
- CTA titles should not feel as large or as long as hero titles
- CTA buttons should sit close enough to feel actionable

---

## 7. Component-Level Guidance

### `PageHero`
Current direction
- already uses controlled width and `keep-all`
- still needs a more explicit route-aware title width strategy

Required refinement
- support 3 title modes:
  - `hero-compact`
  - `hero-default`
  - `hero-wide`
- support 2 body modes:
  - `body-default`
  - `body-compact`

Why
- this avoids per-page ad hoc typography overrides while keeping enough control for Korean titles

### `SectionHeading`
Current direction
- already centralizes title/body behavior
- should become stricter as copy shortens

Required refinement
- support 2 title modes:
  - `section-default`
  - `section-compact`
- support 2 description modes:
  - `description-default`
  - `description-compact`

Why
- many sections can now use narrower description widths and tighter title caps

---

## 8. Route-Specific Typography Notes

### `/`
Priority
- keep the homepage visually strongest but still disciplined

Rules
- hero remains the boldest composition
- brand section title may allow one intentional phrase break if needed
- coffee and space sections should feel like short index entries, not mini landing pages

High-risk lines
- 커피와 공간을 한 결로 엮습니다.
- 머무는 시간이 인상을 만듭니다.

### `/coffee`
Priority
- make the page precise and trust-driven

Rules
- titles should be shorter and firmer than on the homepage
- proof points should do more work than long explanations
- bean preview cards should feel compact and structured

High-risk line
- 로스터리의 기반, 배러쿠다의 결

### `/store`
Priority
- make the page restrained and preview-oriented

Rules
- avoid oversized hero drama
- category cards should read quickly
- featured product block can hold more visual weight than the category grid

High-risk line
- 배러쿠다의 제품 세계를 미리 봅니다.

### `/visit`
Priority
- make this the cleanest and shortest reading experience

Rules
- practical information should dominate, not editorial language
- guide cards must remain one-line or near one-line
- notice and action sections should stay compact

High-risk line
- 방문 전 필요한 정보

Note
- this route should need the fewest typography exceptions

---

## 9. Breakpoint Matrix

### `360px`
Goals
- hero titles within 1 to 2 lines whenever possible
- no card becomes a text wall
- no title breaks at awkward noun fragments

Checks
- homepage hero
- `/coffee` hero
- `/store` hero
- homepage brand section title

### `768px`
Goals
- titles should open up without becoming too wide
- cards should retain equal density

Checks
- hero-to-image balance
- section intro widths
- CTA cluster spacing

### `1024px`
Goals
- page rhythm should feel editorial, not empty
- line lengths should remain controlled in two-column layouts

Checks
- hero text column width
- visit info and card grid balance
- store featured product balance

### `1440px`
Goals
- typography should still feel curated
- no block should become overly stretched

Checks
- max-width discipline
- paragraph length drift
- section hierarchy consistency

---

## 10. Design QA Checklist

- Is the hero title readable in one glance?
- Does the title break on a phrase boundary?
- Is the hero body short enough to support the title instead of competing with it?
- Do section descriptions feel shorter and more controlled than before?
- Do cards keep a stable density across routes?
- Does `/visit` read like a utility page instead of an essay page?
- Does `/store` feel like a preview, not a store catalog?
- Does the homepage still feel like the strongest brand statement?

---

## 11. Implementation Handoff

Development Team should implement these design decisions in this order.

1. tighten shared width defaults in `PageHero`
2. tighten shared width defaults in `SectionHeading`
3. add small shared variants instead of page-by-page one-off overrides
4. apply responsive manual breaks only to approved high-risk titles
5. verify at `360 / 768 / 1024 / 1440`

Implementation warning
- Do not scatter manual `<br />` decisions across content data without a rule.
- Keep line-break control attached to the design system, not to random page exceptions.

Orchestrator decision
- Approved for Development Team implementation after the copy rewrite is applied.
