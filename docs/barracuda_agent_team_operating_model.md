# Barracuda Agent Team Operating Model
Version: 2026-03-17

Purpose
This document defines an orchestrated agent team for Barracuda so copy simplification, brand clarity, and typography consistency can be handled as one coordinated workflow.

Current problem
- The pages carry too much text.
- Brand meaning gets diluted because key messages are buried in long paragraphs.
- As copy length grows, typography and line breaks become inconsistent page by page.
- The site needs shorter Korean-first copy with stronger brand definition and tighter layout discipline.

Non-negotiable project rules
- Keep the public site static-first.
- Keep Korean-first user-facing copy.
- Do not add operational systems while solving copy problems.
- Do not solve weak copy by adding more sections.
- Copy changes should start from `data/site-content.ts`.
- Typography decisions must be validated at `360 / 768 / 1024 / 1440`.

---

## 1. Team Structure

### Orchestrator
Role
- Own the full decision flow.
- Keep all teams aligned to one brand thesis.
- Reject work that is individually strong but inconsistent with the whole site.

Core mission
- Reduce copy volume.
- Increase brand clarity.
- Enforce one typography and line-break system across pages.

Inputs
- `docs/barracuda_codex_handoff_status.md`
- `data/site-content.ts`
- rendered pages and breakpoint QA

Outputs
- page-by-page priority list
- final approved copy direction
- final approved typography constraints
- implementation order

Authority
- can send work back to any team
- can freeze scope when a team starts expanding content instead of simplifying it

Success criteria
- each page can be summarized in one clear sentence
- hero copy is readable without forced interpretation
- long body copy is reduced to only what supports conversion or brand identity
- headlines and paragraphs feel related across all routes

---

### Planning Team
Role
- Convert vague brand ambition into a tight information hierarchy.
- Decide what must remain, what should shrink, and what should disappear.

Mission
- Turn each route into a small set of essential messages.

Questions this team must answer
- What is the single job of this page?
- What must the user understand within 5 seconds?
- Which blocks are repeating the same claim in different words?
- Which sections support brand trust, and which are just filler?

Required outputs per page
- page objective
- primary message
- secondary support message
- optional proof block
- removable blocks
- CTA priority

Rules
- One page should not try to explain brand, product, place, and operations all at once.
- If two sections make the same point, keep the stronger one.
- Prefer fewer sections with clearer meaning.
- Prefer one short paragraph over three soft paragraphs.

Planning deliverable format
- `/`
  - page objective
  - keep
  - compress
  - remove
  - CTA
- `/brand`
- `/coffee`
- `/space`
- `/menu`
- `/store`
- `/visit`

---

### Copy Team
Role
- Write short, brand-specific Korean copy.
- Replace descriptive bulk with precise language.

Mission
- Make Barracuda sound distinct, calm, spatial, and intentional.

Copy principles
- Short first.
- Concrete before abstract.
- Brand voice before category cliches.
- Editorial, but not vague.
- Premium, but not inflated.

Tone rules
- Avoid generic cafe marketing language.
- Avoid explaining the obvious.
- Avoid repeating Barracuda is "not just a cafe" in multiple ways.
- Avoid long emotional prose that weakens the page rhythm.
- Prefer sentence lengths that can survive mobile without awkward breaks.

Page-level copy targets
- Hero title: ideally 1 short phrase, max 2 lines on mobile
- Hero body: 1 to 2 short sentences
- Section heading: 1 sentence or phrase
- Section description: preferably 1 short paragraph
- Card body: 1 to 2 lines
- CTA label: 2 to 5 words

Copy checklist
- Can this be cut by 30% without losing meaning?
- Does this line sound like Barracuda, not any cafe?
- Is the sentence readable on a narrow screen?
- Is the same idea already expressed elsewhere on the page?
- Does the line support the page CTA?

Required outputs
- shortened master copy for each route
- alternative hero lines when needed
- CTA label cleanup
- prohibited phrases list

---

### Design Team
Role
- Translate shorter copy into a consistent visual reading system.
- Standardize headline width, paragraph width, spacing rhythm, and line-break behavior.

Mission
- Make every route feel like the same brand, not separate poster layouts.

Typography responsibilities
- define headline max-width ranges
- define body copy max-width ranges
- define mobile and desktop line-height rules
- define when manual `<br />` is allowed
- define when manual `<br />` is forbidden
- define card text density limits

Design rules
- Use phrase-based line breaks only when necessary.
- Never rely on random wrap behavior for large Korean headlines.
- Do not allow one page to use oversized dramatic copy while another uses dense paragraph blocks.
- Visual hierarchy must be stable across homepage and subpages.

Required outputs
- headline sizing matrix by breakpoint
- paragraph width matrix by breakpoint
- spacing rhythm for hero, section intro, cards, CTA blocks
- line-break policy examples
- list of pages requiring custom responsive breaks

Design QA checklist
- Does the headline break on a natural phrase boundary?
- Does the body width feel intentional, not stretched?
- Does mobile preserve hierarchy without becoming a text wall?
- Do cards hold consistent text density?
- Does the page still feel premium after copy is shortened?

---

### Development Team
Role
- Implement approved copy and typography decisions cleanly and consistently.

Mission
- Apply changes in code without introducing architectural risk.

Implementation responsibilities
- update `data/site-content.ts`
- normalize shared heading behavior
- normalize shared paragraph width behavior
- remove page-level one-off typography drift where possible
- keep pages static-first
- run lint/build
- run breakpoint QA after implementation

Guardrails
- do not invent copy
- do not add logic to compensate for weak content
- do not add new sections unless approved by Orchestrator
- do not hardcode random line breaks across many files
- prefer shared components for typography consistency

Required outputs
- code changes
- verification results
- unresolved UI issues

---

## 2. Operating Workflow

### Phase 1. Planning pass
Owner
- Planning Team

Goal
- shrink the message architecture before any rewriting starts

Deliverable
- route-by-route keep / compress / remove matrix

Gate
- Orchestrator approves a simpler site structure before copy rewrite begins

### Phase 2. Copy pass
Owner
- Copy Team

Goal
- rewrite the approved structure into concise Korean-first brand copy

Deliverable
- one approved copy set per route
- one fallback variant for hero/title-heavy areas

Gate
- Orchestrator confirms the page message is clearer and shorter than before

### Phase 3. Typography pass
Owner
- Design Team

Goal
- map the new shorter copy into a stable reading system

Deliverable
- typography constraints and breakpoint rules

Gate
- Orchestrator approves the type system before code implementation

### Phase 4. Implementation pass
Owner
- Development Team

Goal
- implement approved copy and layout rules

Deliverable
- updated code
- lint/build pass
- breakpoint QA notes

Gate
- Orchestrator verifies that implementation matches approved copy and design intent

### Phase 5. Final QA
Owners
- Orchestrator + Design Team + Development Team

Goal
- verify clarity and consistency on real breakpoints

Checklist
- homepage message is immediately legible
- `/coffee`, `/space`, `/store`, `/visit` feel part of one system
- no page has reverted to text-heavy filler
- CTA rhythm is consistent
- no awkward Korean line wrapping in hero and section headings

---

## 3. Page Priorities

### Highest priority
- `/`
- `/coffee`
- `/store`
- `/visit`

Reason
- these routes currently show the strongest combination of long copy, brand-definition burden, and typography inconsistency risk

### Second priority
- `/brand`
- `/space`
- `/menu`

Reason
- these pages matter, but the homepage and high-traffic editorial pages should establish the system first

---

## 4. Shared Decision Rules

When in doubt:
- cut before adding
- simplify before styling
- define one message before writing three supporting ones
- use typography to strengthen meaning, not to rescue weak copy
- prefer consistency across routes over isolated page-level cleverness

If teams disagree:
1. Orchestrator asks Planning Team what the page must do.
2. Copy Team rewrites only for that job.
3. Design Team adapts layout to the approved message length.
4. Development Team implements only the approved version.

---

## 5. Immediate Next Assignment

Orchestrator should assign the next cycle in this order:
1. Planning Team produces a keep / compress / remove matrix for `/`, `/coffee`, `/store`, `/visit`.
2. Copy Team rewrites those four routes into short Korean-first copy.
3. Design Team defines shared headline, paragraph, and line-break rules for those four routes.
4. Development Team implements the approved system in `data/site-content.ts` and shared components.

Expected outcome of the first cycle
- visibly less text
- clearer brand meaning
- more disciplined Korean line breaks
- one coherent reading system across the most important routes
