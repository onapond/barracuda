# Batch 1 Copy Audit: `/brand`, `/coffee`
Date: 2026-03-24
Owner: Orchestrator
Status: Revised

Purpose
- reopen Batch 1 after main-agent review and user correction
- re-audit `/brand` and `/coffee` against the corrected concept axis
- treat all current lines as unapproved candidate material only

Corrected concept axis
- `우리들만의 프라이빗 공간`
- `특별한 카페`

Review note
- the previous Batch 1 direction over-centered abstract words such as `장면`, `리듬`, `기준`, `무드`, `결`
- that direction is rejected as the primary framing for Batch 1

Scope
- `/brand`
- `/coffee`

Source reviewed
- `data/sites/barracuda.ts`

---

## Route Audit: `/brand`

### Route job required by corrected axis
- explain why Barracuda is both a private space for us and a cafe that feels meaningfully different from an ordinary cafe

### Current route sections found
- metadata description
- hero title
- hero description
- gallery section 1: `Brand Gallery`
- gallery section 2: `Story`
- note section: `Brand Note`

### Candidate meaning worth retaining only as raw material
- `바라쿠다는 커피를 마시는 곳을 넘어 ...`
  - classification: `candidate retain`
  - reason: useful because it tries to distinguish Barracuda from a normal cafe

### Rewrite-required lines
- all current `/brand` headings and descriptions
  - classification: `rewrite required`
  - reason: they present Barracuda as an image-led mood brand instead of clarifying the private-space and special-cafe proposition

### Reject-on-sight lines
- any line centered on `장면`
  - reason: too indirect for the clarified proposition
- any line centered on `리듬`
  - reason: atmospheric but not legible enough
- any line that explains the page through images, layout, or editorial pacing
  - reason: does not answer what Barracuda is
- any line that says only `분위기`, `무드`, or `결`
  - reason: abstract prestige wording without proposition clarity

### Route-level quality failure summary
- current `/brand` copy does not answer why Barracuda is special
- the private-space identity appears too late or not at all
- the cafe identity is treated as background tone instead of a clear part of the proposition

---

## Route Audit: `/coffee`

### Route job required by corrected axis
- support the idea that Barracuda is a special cafe experience, not just a disciplined roastery or a generic coffee page

### Current route sections found
- metadata description
- hero title
- hero description
- gallery section 1: `Coffee Process`
- gallery section 2: `Menu Mood`
- menu showcase section: `Full Menu`
- action links

### Candidate meaning worth retaining only as raw material
- `원두에서 한 잔까지`
  - classification: `candidate retain`
  - reason: useful as a support idea, but no longer valid as the central framing on its own

### Rewrite-required lines
- all current `/coffee` headings and descriptions
  - classification: `rewrite required`
  - reason: they center abstract continuity and roastery discipline more than the special cafe experience

### Reject-on-sight lines
- any line using `기준` as the main proposition
  - reason: too internal and technical for this route job
- any line using `결`, `무드`, or `흐름` as coffee identity shorthand
  - reason: vague and non-distinctive
- any line that explains menu layout, image flow, or editorial packaging
  - reason: not customer-facing meaning

### Route-level quality failure summary
- current `/coffee` copy is too proud of process language
- the route fails to connect coffee to `특별한 카페` early enough
- the private-space / special-cafe dual identity is not reinforced

---

## Cross-Route Audit Findings

### Core correction
- Barracuda must be legible earlier as:
  - our private space
  - a special cafe

### Shared failure patterns
- abstract framing words used as if they were propositions
- indirect mood-writing where direct identity writing is required
- editorial self-description replacing customer-facing meaning

### Orchestrator decision after revised audit
- previous Batch 1 concept direction is rejected
- both routes return to IA and Brand Voice under the corrected axis
- no current code line is approved for direct reuse
