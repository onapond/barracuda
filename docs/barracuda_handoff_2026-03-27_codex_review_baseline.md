# Barracuda Handoff
Date: 2026-03-27
Status: Active

## Purpose

This handoff records the current Codex review baseline before any new implementation work begins.

This document should be used to:
- understand which recent work is trustworthy
- distinguish approved scope from provisional scope
- avoid mistaking runtime artifacts for product changes
- keep future Codex work in observation mode until the user assigns implementation work

---

## Session Summary

This session did three things:

1. audited the Claude-attributed work already present in the repository
2. separated approved, provisional, and incomplete-review scopes under the active Barracuda operating model
3. recorded Codex review rules in `AGENTS.md` so future work does not inherit ambiguous session-level exceptions

Important boundary:
- this session did not intentionally change product implementation behavior
- work focused on reading, judging, and documenting the current repository state

---

## What Was Confirmed

### 1. 2026-03-24 is the most reliable approved baseline

The clearest approval chain currently visible is the 2026-03-24 cycle.

Confirmed approved artifacts include:
- `docs/cycles/2026-03-24_orchestrator_copy_signoff.md`
- `docs/cycles/2026-03-24_batch1_frontend_qa_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_orchestrator_post_integration_brand_coffee.md`
- `docs/cycles/2026-03-24_signature_tabs_orchestrator_post_qa.md`

Interpretation:
- homepage copy sign-off exists with explicit limits
- `/brand` and `/coffee` Batch 1 integration has technical QA and post-integration Orchestrator review
- homepage signature tab rendering cycle has its own approved QA closure

This is the safest approved baseline for future Codex work.

### 2. 2026-03-25 and 2026-03-26 work is real but not fully approval-complete

Recent work clearly exists in commits including:
- `2369797`
- `d8e4fda`
- `1b18aa6`
- `26d3c9b`
- `f71d423`
- `dd13f7c`
- `d991550`
- `87ed5be`

Observed scope:
- real image rollout across routes
- image optimization and conversion
- blur placeholders and `sizes` rollout
- Open Graph / Twitter metadata additions
- Korean line-break related component changes

Interpretation:
- the code and commit history are real
- the work is not fully signed off under `AGENTS.md` + `docs/barracuda_agent_team_operating_model.md`
- missing approval artifacts mean this scope should remain `provisional` or `revise`

### 3. Current workspace noise is mostly generated artifacts

Tracked modified files:
- `docs/.pdca-status.json`
- `docs/.bkit-memory.json`

Untracked artifact categories include:
- `.chrome-*`
- `.qa-homepage/`
- `test-results/`
- `tmp-ref*`
- `docs/.pdca-snapshots/`
- `public/images.zip`
- `.claude/settings.local.json`
- scratch files such as `_newfile_test.txt`, `_write_test.txt`

Interpretation:
- these should not be treated as pending product implementation work
- they should be separated from source review and approval discussions

### 4. Technical verification currently passes

Local checks run during this review:
- `npm run build`
- `npm run lint`

Result:
- pass

Interpretation:
- the current branch is technically runnable
- this does not override missing approval gates for visual or content changes

---

## Risks Still Open

### 1. Operating rule conflict across documents

Current conflict:
- `AGENTS.md` and `docs/barracuda_agent_team_operating_model.md` require explicit approval gates
- `docs/barracuda_codex_handoff_status.md` contains a session-level note that copy can bypass the KCE gate

Codex working interpretation:
- use `AGENTS.md`
- then `docs/barracuda_agent_team_operating_model.md`
- treat handoff notes as lower-priority session references

### 2. Brand spelling is not locked

`Barracuda` and `Baracuda` are both present across runtime content and docs.

Until the user confirms the canonical spelling:
- do not bulk-normalize naming
- do not silently "fix" metadata, alt text, titles, or subject lines

### 3. OG image metadata path is incomplete

`app/layout.tsx` references:
- `/images/og-image.jpg`

Current status:
- file not present in `public/images/`

Interpretation:
- metadata path exists in code
- asset preparation is still incomplete

### 4. Korean line-break policy is not globally settled

Recent fixes improved specific surfaces, especially some company components.

However:
- shared `type-wrap-balance` behavior still exists
- some shared heading surfaces still rely on `text-wrap: balance`

Interpretation:
- do not assume the line-break problem is globally solved
- any future typography work must re-check shared heading surfaces

---

## Codex Rule Update Recorded This Session

`AGENTS.md` was updated to make the following explicit:
- document priority when Barracuda workflow docs conflict
- brand spelling should not be normalized automatically
- runtime/generated artifacts must be separated from product changes
- `build` / `lint` pass is not final approval
- shared typography review must cover common heading surfaces, not only one local component

This update is procedural and intended to prevent future review ambiguity.

---

## Files Added Or Updated In This Session

Added:
- `docs/barracuda_codex_review_2026-03-27_claude_work_audit.md`
- `docs/barracuda_handoff_2026-03-27_codex_review_baseline.md`

Updated:
- `AGENTS.md`

No product feature implementation was intentionally added in this session.

---

## Next Working Mode

Until the user gives a concrete implementation task:
- stay in analysis and record mode
- avoid broad cleanup or normalization work
- avoid treating provisional March 25-26 work as already approved

If future implementation begins, start from this order:
1. confirm the applicable approval rule path
2. confirm canonical brand spelling if naming is touched
3. separate generated artifacts from product files
4. only then edit the requested product scope

---

## Related References

- `AGENTS.md`
- `docs/barracuda_agent_team_operating_model.md`
- `docs/barracuda_codex_handoff_status.md`
- `docs/barracuda_codex_review_2026-03-27_claude_work_audit.md`
