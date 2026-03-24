# Batch 1 Orchestrator Sign-off: `/brand`, `/coffee`
Date: 2026-03-24
Owner: Orchestrator
Status: Revised copy sign-off only

This artifact records the revised Batch 1 copy-cycle sign-off for `/brand` and `/coffee`.
It does not authorize code integration by itself.

Scope
- `/brand`
- `/coffee`

Required inputs reviewed
- `docs/cycles/2026-03-24_batch1_copy_audit_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_ia_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_brand_voice_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_copy_candidates_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_copy_approved_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_copy_rejects_brand_coffee.md`

---

## Previous Direction: Rejected

- the earlier Batch 1 direction is rejected by main-agent review and user decision
- rejected concept axis:
  - abstract framing centered on `장면`, `리듬`, `기준`, and similar mood-language
- correction applied:
  - `우리들만의 프라이빗 공간`
  - `특별한 카페`

Reason for correction
- the earlier route set did not make privacy, distinctiveness, and the dual identity legible early enough
- `/brand` drifted into image-led mood branding
- `/coffee` drifted into inward-facing roastery discipline

---

## Approved

- Batch 1 route scope: `/brand`, `/coffee`
- IA route jobs for both routes under the corrected concept axis
- Brand Voice rules with concrete accept/reject examples per route
- Brand Voice deprioritization / bans for `장면`, `리듬`, `기준`, and overly abstract `무드`, `결`
- revised KCE-approved exact strings for `/brand`
- revised KCE-approved exact strings for `/coffee`
- copy-lock rule preventing paraphrase during future integration

## Revise

- implementation-ready mapping from approved strings to exact fields in `data/sites/barracuda.ts`
- any image caption or alt-field review not explicitly covered in the approved copy sheet
- any route section not explicitly listed in the KCE approval artifact
- final user preference check on how direct `프라이빗 공간` should remain in live copy

## Blocked

- code/content integration
- typography review for these routes
- Batch 2 kickoff

Block reason
- implementation remains blocked until a follow-up Orchestrator instruction explicitly opens Content Integration for Batch 1
- this sign-off approves copy scope only, not code work

---

## Orchestrator Decision

Decision
- Batch 1 copy quality workflow is complete for review
- `/brand` and `/coffee` have revised approved copy scope at the sentence level
- future integration may start only after the next command package explicitly opens integration work

Reasoning
- the revised audit established that the previous Batch 1 concept axis was wrong
- IA and Brand Voice were rerun under the corrected concept axis
- UX Copy produced replacement candidates that foreground privacy and distinctiveness earlier
- KCE explicitly approved the revised exact strings and logged the earlier direction as rejected

Next command condition
- do not open integration from this document alone
- the main agent and user must align on revised Batch 1 review first
- after that, Orchestrator may issue a dedicated Content Integration package for `/brand` and `/coffee`
