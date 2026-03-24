# Barracuda Handoff
Date: 2026-03-24
Status: Active

## Purpose

This handoff records two outcomes from the current session:
- Batch 1 route copy integration for `/brand` and `/coffee`
- homepage signature tab line-break rendering cleanup

This document should be used before opening Batch 2 or any broader homepage typography work.

---

## Session Summary

This session did four things:

1. returned Batch 1 route copy to `revise` after user review rejected the earlier abstract concept axis
2. reran the `/brand` and `/coffee` copy cycle through Orchestrator with the corrected concept axis
3. integrated the approved Batch 1 copy into code and completed Frontend QA
4. fixed homepage signature tab line-break rendering so approved `\n` breaks render consistently across all signature heading surfaces

---

## What Was Completed

### 1. Batch 1 concept direction was corrected before integration

The earlier Batch 1 route copy direction was explicitly rejected.

Rejected direction:
- abstract framing around `장면`, `리듬`, `기준`
- image-led mood language that did not make Barracuda's actual proposition legible early enough

Corrected concept axis:
- `우리들만의 프라이빗 공간`
- `특별한 카페`

Important interpretation:
- `/brand` now explains why Barracuda is a special cafe and a private-feeling place
- `/coffee` now supports the special-cafe proposition instead of drifting into inward-facing process language

Key cycle artifacts:
- `docs/cycles/2026-03-24_batch1_copy_audit_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_ia_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_brand_voice_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_copy_candidates_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_copy_approved_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_copy_rejects_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_orchestrator_signoff_brand_coffee.md`

### 2. Batch 1 copy was integrated for `/brand` and `/coffee`

Authorized integration target:
- `data/sites/barracuda.ts`

Approved Batch 1 copy was integrated only into the mapped text fields for:
- `/brand`
- `/coffee`

Important interpretation:
- approved strings were integrated verbatim
- homepage copy was out of scope for this Batch 1 route integration
- image `alt`, `title`, and image-level `description` fields for `/brand` and `/coffee` were intentionally left untouched because they were outside the approved mapping

Key artifacts:
- `docs/cycles/2026-03-24_batch1_content_integration_notes_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_frontend_qa_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_orchestrator_post_integration_brand_coffee.md`

### 3. Batch 1 technical QA passed

Latest checks for Batch 1:
- `npm run lint`
- `npm run build`

Result:
- pass

Important interpretation:
- Batch 1 is approved only for the integrated `/brand` and `/coffee` copy field scope
- this is not a Batch 2 authorization
- this is not a homepage-wide typography approval

### 4. Homepage signature tab line-break rendering was fixed

User review identified that `\n` was still surfacing visibly in the homepage signature area.

Root cause:
- approved manual line breaks existed in homepage signature copy
- rendering treatment was inconsistent across the three signature heading surfaces
- `app/page.tsx` also had a wrapper title string passed as a JSX string literal, so `\n` could remain literal there

Fix applied:
- `components/company-signature-tabs.tsx` now treats wrapper title, tab button titles, and active panel title consistently
- `app/page.tsx` now passes the wrapper title as a real JS string expression so the newline is interpreted correctly
- approved copy text itself was not rewritten

Key artifacts:
- `docs/cycles/2026-03-24_signature_tabs_typography_review.md`
- `docs/cycles/2026-03-24_signature_tabs_integration_notes.md`
- `docs/cycles/2026-03-24_signature_tabs_responsive_qa.md`
- `docs/cycles/2026-03-24_signature_tabs_orchestrator_post_qa.md`

---

## Current Approval Status

### Approved

- revised Batch 1 copy direction for `/brand` and `/coffee`
- Batch 1 copy integration into `data/sites/barracuda.ts`
- Batch 1 Frontend QA
- local `npm run lint`
- local `npm run build`
- homepage signature tab rendering cleanup
- homepage signature tab responsive QA at `360 / 768 / 1024 / 1440`

### Revise

- `/brand` and `/coffee` image-related copy fields outside the approved mapping
- homepage copy quality outside the already approved homepage scope remains unchanged
- all Batch 2 route copy work: `/space`, `/menu`
- all Batch 3 route copy work: `/store`, `/visit`
- homepage-wide typography review outside the signature tab fix

### Deferred

- Batch 2 route copy cycle
- Batch 3 route copy cycle
- homepage-wide final visual sign-off
- release approval

### Blocked

- do not treat Batch 1 approval as permission to touch `/space`, `/menu`, `/store`, `/visit`
- do not remove approved homepage manual `\n` breaks without a copy-return decision and KCE re-approval
- do not widen the signature tab fix into a homepage-wide typography pass by implication

---

## Current Code State

Key implementation files touched in this session:
- `data/sites/barracuda.ts`
- `components/company-signature-tabs.tsx`
- `app/page.tsx`

Batch 1 route copy source of truth:
- `data/sites/barracuda.ts`

Homepage signature wrapper strings still outside config:
- `app/page.tsx`

Cycle evidence folder:
- `docs/cycles/`

QA output folder:
- `.qa-homepage/`

---

## Next Session Definition

The next session should not reopen `/brand` and `/coffee` copy unless the user explicitly wants another concept change.

Primary next options:
1. open Batch 2 route copy cycle for `/space` and `/menu`
2. run a separate image-copy alignment cycle for `/brand` and `/coffee` if full text consistency is required
3. perform broader homepage typography / visual review only if the user wants homepage polish beyond the signature tab fix

Required interpretation:
- keep Batch boundaries explicit
- keep copy-lock rules active on approved strings
- do not silently convert unresolved image fields into approved copy

---

## Handoff Close

Batch 1 is complete for `/brand` and `/coffee` within the approved integration map and technical QA scope.

The homepage signature tab `\n` rendering issue was also resolved without reopening approved copy.

The next session should start from Batch 2 planning or a clearly scoped follow-up, not from re-litigating the work completed here.