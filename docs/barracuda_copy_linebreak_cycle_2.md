# Barracuda Copy and Line-Break Improvement Cycle 2
Version: 2026-03-19
Status: Planned

Purpose
This document defines the next detailed improvement cycle for the routes with the highest copy, line-break, and typography risk.

Scope
- `/`
- `/coffee`
- `/store`
- `/visit`

Cycle objective
- make copy sound more intentional in Korean
- remove soft and repeated phrasing
- stabilize headline and paragraph behavior at real breakpoints
- reduce font inconsistency by forcing shared typography decisions earlier

Reference inputs
- `docs/barracuda_agent_team_operating_model.md`
- `docs/barracuda_typography_copy_audit_2026-03-19.md`
- `data/site-content.ts`
- route files for `/coffee`, `/store`, `/visit`
- homepage section component files

---

## 1. Orchestrator Brief

Route scope
- `/`
- `/coffee`
- `/store`
- `/visit`

Reason for priority
- these routes carry the heaviest brand-definition and readability burden
- they already contain a mix of shared typography rules and route-level one-off rules
- their current copy has the highest concentration of soft phrasing and wrap risk

Expected outcome
- heroes are shorter and more precise
- section titles fit the same reading system
- body copy is visibly tighter
- mobile wraps look intentional without widespread manual `<br />`

Approval conditions
- each route has one approved hero title and one fallback hero title
- each route has a reduced set of section descriptions
- line-break exceptions are explicit
- shared typography variants are the default path for priority route headings

---

## 2. Team Assignments

### Information Architecture Team
Routes
- `/`
- `/coffee`
- `/store`
- `/visit`

Tasks
- reduce each route to one primary job
- mark sections or blocks that repeat existing meaning
- identify where proof is missing and where filler should be removed

Required output
- route objective sheet
- keep / compress / remove matrix

### Brand Voice Team
Routes
- `/coffee`
- `/store`
- homepage brand-facing sections on `/`

Tasks
- define how Barracuda should sound when describing coffee, products, and atmosphere
- reject generic premium-cafe phrasing
- prepare a prohibited phrase list for this cycle

Required output
- approved phrase patterns
- prohibited phrase list
- route-specific tone notes

### UX Copy Team
Routes
- `/`
- `/coffee`
- `/store`
- `/visit`

Tasks
- write 3 hero candidates per route
- compress section descriptions into shorter proof-led lines
- label every current section description as `brand`, `proof`, `cta`, or `filler`
- create delete candidates for lines that are not carrying essential meaning

Required output
- hero candidate sheet
- compressed section copy
- filler removal list

### Typography System Team
Routes
- `/`
- `/coffee`
- `/store`
- `/visit`

Tasks
- define token roles for `display`, `heading`, `body`, `eyebrow`, and `card title`
- map priority route headings to shared component variants
- identify which current route-level heading styles must be removed

Required output
- typography token table
- shared variant mapping
- route exception list

### Responsive QA Team
Routes
- `/`
- `/coffee`
- `/store`
- `/visit`

Tasks
- review hero title wraps at `360 / 768 / 1024 / 1440`
- review first paragraph density for each major section
- flag routes that still depend on local width hacks

Required output
- breakpoint QA sheet
- issue list with severity

### Content Integration Team
Routes
- `/`
- `/coffee`
- `/store`
- `/visit`

Tasks
- centralize priority route copy into route content objects
- reduce route-level typography overrides
- implement approved shared heading and paragraph rules

Required output
- code changes
- implementation note
- unresolved technical constraints

### Frontend QA Team
Routes
- `/`
- `/coffee`
- `/store`
- `/visit`

Tasks
- run lint/build after integration
- compare approved copy artifacts to implemented output
- flag regressions in shared components

Required output
- lint/build result
- mismatch report
- release recommendation

---

## 3. Route-Level Focus

### `/`
Primary job
- establish Barracuda quickly as a coffee-and-space brand with a calm editorial tone

Main issues to solve
- hero description is too soft
- brand section is too category-like
- homepage sections still overlap in mood language

Copy Clinic target
- rewrite hero body into a sharper one-line meaning
- reduce brand description and lead to non-overlapping roles

Typography target
- compare homepage hero against `PageHero`
- decide whether homepage hero remains a special system or is absorbed into the shared one

### `/coffee`
Primary job
- prove coffee credibility without sounding technical or generic

Main issues to solve
- several sections use long soft titles
- proof and mood language are mixed unevenly
- titles and cards rely on route-local heading classes

Copy Clinic target
- shorten hero and intro language
- make each section title more concrete
- remove low-signal emotional verbs

Typography target
- normalize all major section `h2` blocks
- define one card-title treatment

### `/store`
Primary job
- show product direction as a deliberate preview, not as an unfinished commerce page

Main issues to solve
- "프리뷰" message repeats too often
- language is clear but not distinctive
- local heading scale diverges from shared system

Copy Clinic target
- keep one preview explanation only
- rewrite titles so they feel brand-owned
- cut repeated operational disclaimers

Typography target
- move section titles and CTA title into shared heading behavior
- define one rule for numbered card presentation

### `/visit`
Primary job
- provide fast access to practical visit information with minimal friction

Main issues to solve
- utility headings repeat similar meaning
- route uses multiple local headline patterns
- dense information blocks can feel heavy if not tightly controlled

Copy Clinic target
- compress helper headings
- make CTA copy more direct
- remove near-duplicate framing lines

Typography target
- align utility section headings with one consistent heading role
- define density limit for info cards and parking blocks

---

## 4. External Tool Plan

### Tool A. Screenshot QA
Suggested tool
- Playwright

Execution
- capture `/`, `/coffee`, `/store`, `/visit`
- capture at `360 / 768 / 1024 / 1440`
- store hero, first section, and CTA section screenshots

Success condition
- headline and first-paragraph wraps are readable without manual intervention across most sections

### Tool B. Typography Drift Audit
Suggested method
- run `rg` or a small script over route files and shared components

Measure
- count route-level `font-display` usage
- count route-level headline size overrides
- count eyebrow tracking variants
- count route files bypassing `SectionHeading` or `PageHero`

Success condition
- exception list is explicit before refactoring starts

---

## 5. Deliverables for Cycle Completion

- route objective sheet for 4 routes
- hero candidate sheet for 4 routes
- prohibited phrase list
- typography token table
- route exception list
- screenshot QA report
- implementation note
- lint/build result

---

## 6. Recommended Start Order

1. Copy Clinic on `/`
2. Copy Clinic on `/coffee`
3. Typography token definition for shared headings
4. Copy Clinic on `/store` and `/visit`
5. screenshot QA baseline capture
6. code integration and verification
