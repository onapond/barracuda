# Barracuda Orchestrator Command Package
Date: 2026-03-24
Cycle: Homepage Korean-Original Copy (Rewrite-From-Scratch)
Status: Active

This package is executable. It defines the next cycle scope, role responsibilities, artifacts, approval gates, and reject conditions.

Non-negotiables for this cycle
- The primary deliverable is Korean-original copy quality, not line-break polish.
- Copy must be rewritten from scratch in Korean. Do not edit-in-place existing English-first lines.
- Korean Copy Editor (KCE) has sentence-level veto/approval authority.
- Typography System Team and Responsive QA may not begin until KCE approval is complete.
- Content Integration Team may not rewrite, soften, or paraphrase approved copy during code integration.

Route scope
- Primary: `/` (homepage)
- Reserved (do not start until homepage copy is approved): `/brand`, `/coffee`, `/space`, `/menu`, `/store`, `/visit`

Source of truth for implementation after approval
- `data/sites/barracuda.ts`
- `app/page.tsx` (homepage-only wrapper strings, if any remain outside config)

---

## Operating Model Changes

Add the following role to the cycle workflow:

### Korean Copy Editor (KCE)
- Authority: sentence-level accept / reject. KCE can block the cycle.
- Scope: homepage hero + section headings + short descriptions first.
- Output: approved exact strings sheet + reject list with reasons.

Integration rule
- Content Integration Team is prohibited from changing any KCE-approved string.
- If integration requires a string change (layout constraints, naming, legal), it must be returned to KCE for re-approval.

---

## Approval Gates

Gate 0: Orchestrator kickoff approved
- Evidence artifact: `docs/cycles/2026-03-24_homepage_copy_cycle_kickoff.md`
- Must include:
  - homepage section list
  - the single job of the homepage (one sentence)
  - the definition of "Korean-originalness" as the primary bar

Gate 1: Information Architecture (IA) complete
- Evidence artifact: `docs/cycles/2026-03-24_homepage_ia_sheet.md`
- Must include (one sentence each):
  - hero: what must be understood in 5 seconds
  - intro: what the intro must prove
  - signature tabs: what each tab must differentiate
  - previews: what each preview must do (space/brand/coffee/menu/visit)
  - CTA hierarchy: primary vs secondary

Gate 2: Brand Voice constraints complete
- Evidence artifact: `docs/cycles/2026-03-24_brand_voice_korean_rules.md`
- Must include:
  - 7 voice principles (Korean-first)
  - approved patterns (at least 10)
  - prohibited translated-English patterns (at least 15)
  - "reject on sight" phrase list (at least 15)

Gate 3: UX Copy rewrite pack complete (homepage)
- Evidence artifact: `docs/cycles/2026-03-24_homepage_copy_candidates.md`
- Must include for every homepage text target:
  - Title candidates: `short / balanced / bold` (3 variants)
  - Description candidates: `1-sentence / 2-sentence` (2 variants)
  - Tag per line: `brand / proof / cta / filler`
  - Note: what was deleted vs prior copy (no edit-in-place; track meaning only)

Gate 4: Korean Copy Editor approval complete (hard gate)
- Evidence artifacts:
  - `docs/cycles/2026-03-24_homepage_copy_approved.md` (approved exact strings only)
  - `docs/cycles/2026-03-24_homepage_copy_rejects.md` (rejected lines + reasons)
- Must include:
  - approved exact strings (final chosen variants)
  - per-line notes if meaning is ambiguous
  - explicit "copy lock" note: integration may not paraphrase
- Exit criteria:
  - KCE marks the homepage copy as `approve` (not provisional)

Gate 5: Orchestrator copy sign-off
- Evidence artifact: `docs/cycles/2026-03-24_orchestrator_copy_signoff.md`
- Must include:
  - list of approved sections
  - list of deferred sections (if any)
  - explicit statement: typography/line-break work can now begin

Gate 6: Content Integration complete (no paraphrase)
- Evidence artifacts:
  - PR-style integration note: `docs/cycles/2026-03-24_content_integration_notes.md`
  - Git diff evidence: `git diff -- data/sites/barracuda.ts app/page.tsx` attached as text excerpt
- Required checks:
  - every approved string appears exactly in code (match exact punctuation and spacing)
  - no additional copy was introduced outside the approved sheet

Gate 7: Typography + Responsive QA (post-copy)
- Evidence artifacts:
  - `docs/cycles/2026-03-24_typography_review_notes.md`
  - `.qa-homepage/homepage-breakpoint-report.json` and screenshots
- Required checks:
  - line-break issues are solved by adjusting copy only if KCE approves the updated line
  - otherwise, adjust layout widths / type system within the allowed rules

Gate 8: Human visual sign-off
- Evidence artifact: `docs/cycles/2026-03-24_visual_signoff.md`
- Must include:
  - screenshots/notes for `360 / 768 / 1024 / 1440`
  - explicit pass/fail per breakpoint

---

## Reject Conditions

KCE reject on sight (translation smell)
- any sentence that reads like English logic translated into Korean
- overuse of abstract nouns without concrete image or action
- `~을/를 통해`, `~중심으로`, `~을 담다`, `~로 이어지다` as structural crutches
- premium-by-adjective: `정제된`, `프리미엄한`, `감도`, `인상`, `경험` only as vague claims
- meaning stacking: more than one claim per sentence
- filler that can be removed with no meaning loss

Orchestrator reject conditions (system consistency)
- homepage sections repeat the same claim with different words
- the site reads like a generic cafe/service brochure
- CTA hierarchy is unclear or conflicts with the “space-first” positioning

Integration reject conditions (no paraphrase)
- any approved line is changed in code without a return to KCE
- new copy is introduced without appearing in the approved sheet

Typography/QA reject conditions (post-copy)
- if fixing line breaks requires rewriting approved copy, it must go back to KCE
- do not "solve" awkward wrap by adding manual `<br />` unless Typography Team documents an exception and Orchestrator approves it

---

## Next Cycle Command Package

Orchestrator kickoff message (send to team)
1. Route scope: homepage only (`/`)
2. Primary objective: Korean-original copy rewrite (rewrite-from-scratch)
3. Hard constraint: KCE approval is required before any typography/line-break work
4. Artifacts and due order: IA sheet -> voice rules -> copy candidates -> KCE approval -> copy sign-off -> integration -> typography/QA
5. Prohibited behavior:
  - edit-in-place of existing copy
  - paraphrasing during integration
  - starting typography/QA before KCE approval

---

## Immediate Execution Order

1. Create kickoff artifact: `docs/cycles/2026-03-24_homepage_copy_cycle_kickoff.md`
2. IA Team produces `docs/cycles/2026-03-24_homepage_ia_sheet.md`
3. Brand Voice Team produces `docs/cycles/2026-03-24_brand_voice_korean_rules.md`
4. UX Copy Team produces `docs/cycles/2026-03-24_homepage_copy_candidates.md`
5. Korean Copy Editor produces approvals:
  - `docs/cycles/2026-03-24_homepage_copy_approved.md`
  - `docs/cycles/2026-03-24_homepage_copy_rejects.md`
6. Orchestrator produces `docs/cycles/2026-03-24_orchestrator_copy_signoff.md`
7. Content Integration updates `data/sites/barracuda.ts` and `app/page.tsx` and produces `docs/cycles/2026-03-24_content_integration_notes.md`
8. Typography + Responsive QA run after copy approval and produce their notes + `.qa-homepage/` artifacts
9. Human visual sign-off completes last

