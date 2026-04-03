# Barracuda Handoff
Date: 2026-04-03
Status: Active

## Purpose

This handoff records the current Barracuda state after three product-facing updates:

1. `/coffee` menu grouping and related image assets were updated
2. `/space` inquiry UI was converted from a form-based flow to a static contact section
3. store tab image paths were corrected so `Coffee Beans` and `Goods` render again

Use this document before making the next Barracuda route, copy, or deployment change.

---

## Operating Priority

When Barracuda operating documents conflict, follow this order:

1. `AGENTS.md`
2. `docs/barracuda_agent_team_operating_model.md`
3. session handoff documents such as this one

This handoff is a session reference. It does not override higher-priority operating rules.

---

## Session Summary

This session chain resulted in three shipped commits on `v2-renewal`:

- `ba0297b` `Update coffee menu grouping and assets`
- `0cf0194` `Make space contact section static`
- `6b7b205` `Fix store tab image paths`

Latest production deployment:

- production alias: `https://barracudaweb.vercel.app`
- latest production deployment: `https://barracuda-51i8ux6dg-onaponds-projects.vercel.app`

Latest technical verification completed in this session:

- `npm run build` -> pass
- `vercel deploy --prod` -> pass

---

## What Changed

### 1. `/coffee` menu state changed from the older 2026-03-27 handoff

Important update:

- the older handoff `docs/barracuda_handoff_2026-03-27_coffee_menu_followup.md` is no longer sufficient as the latest menu-content reference
- the user confirmed that the newer menu change is the intended state

Current implementation direction for `/coffee`:

- grouped menu presentation remains inside the existing `Menu Mood` gallery section
- no separate coffee-only category section is rendered under `/coffee`
- grouped image rendering remains active in `components/company-gallery-section.tsx`
- the current grouping/content in `data/sites/barracuda.ts` reflects the newer menu work, including newly added menu images and revised category content

Important interpretation:

- treat the current codebase as the latest menu truth for implementation
- do not rely on the 2026-03-27 handoff for exact category naming or board-image interpretation without re-validating against the current code and current menu source image

### 2. `/space` now uses a static contact section

The former inquiry form flow was removed from `/space`.

Current implementation behavior:

- `app/space/page.tsx` renders a static `CompanyContactSection`
- the former `SpaceInquiryForm` component was removed
- the former `app/api/forms/space-inquiry/route.ts` route was removed
- `data/sites/barracuda.ts` now stores static contact data instead of a form configuration
- the hero CTA now points to `#space-contact`

Current UX intent:

- keep the public route static-first
- reduce operational complexity for space inquiries
- guide users to direct contact methods instead of form submission

Current visible contact copy includes:

- title: `편하게 문의해 주세요`
- phone action: `전화 문의하기`
- phone detail: `02-501-4527`

### 3. Store tab image path fix shipped

The store tab had broken image references for `Coffee Beans` and `Goods`.

Current implementation behavior:

- `data/sites/barracuda.ts` now points those entries to:
  - `/images/store/collections/beans.png`
  - `/images/store/collections/goods.png`

Important interpretation:

- the issue was a data-path mismatch, not a component bug
- current production should now render both store tab images correctly

---

## Current Product-Facing Files

Files directly relevant to the current shipped state:

- `app/space/page.tsx`
- `components/company-gallery-section.tsx`
- `components/company-contact-section.tsx`
- `data/site-content.ts`
- `data/sites/barracuda.ts`
- `lib/company-site.ts`

Removed in this session chain:

- `components/space-inquiry-form.tsx`
- `app/api/forms/space-inquiry/route.ts`

---

## Approval Status

### Approved

- `/space` contact area is now implemented as a static contact section in code
- store tab image-path mismatch for `Coffee Beans` and `Goods` is corrected in code
- latest local build passed
- latest production deployment completed successfully

### Provisional

- current `/coffee` grouped menu implementation reflects the user-confirmed newer menu state
- current `/space` contact copy and static layout are implemented and live
- current store tab image rendering fix is deployed

### Revise

- visual downstream review remains needed for:
  - `/coffee` grouped menu presentation
  - `/space` static contact section typography, spacing, and CTA rhythm
  - store tab image balance after path correction
- if the next session updates menu grouping again, it must start from the current code and current source image, not from the older 2026-03-27 handoff assumptions
- if Barracuda wants a single canonical handoff again, `docs/barracuda_codex_handoff_status.md` should be refreshed because it is now behind the current shipped state

### Blocked

- no final design approval should be inferred from build success or deployment success alone
- copy/typography/image changes still require downstream review artifacts under Barracuda operating rules

---

## Current Working-Tree Notes

At handoff time, the git worktree still contains many unrelated local artifacts and non-product outputs.

Treat these as outside the current product approval scope unless explicitly requested:

- `.chrome-*`
- `.qa-*`
- `test-results/`
- `tmp-ref*`
- `docs/.pdca-status.json`
- `docs/.bkit-memory.json`

There are also many local image deletions and untracked files still present in the worktree outside the three shipped commits above.
Do not assume those unrelated local changes are approved product changes without explicit review.

---

## Recommended Next Step

Next session should do this in order:

1. Review this handoff first.
2. Treat the current codebase as the latest implementation truth for `/coffee`, `/space`, and store-tab image paths.
3. Run visual review at required breakpoints for:
   - `/coffee`
   - `/space`
   - homepage store tab
4. Decide whether the current `/coffee` grouped menu and `/space` static contact section can move from `provisional` to `approved`.
5. Refresh the canonical status document if the team wants one current document instead of multiple session handoffs.

Implementation guardrails:

- do not reintroduce the `/space` inquiry form unless explicitly requested
- keep public routes static-first by default
- do not use the 2026-03-27 coffee handoff as the sole source of truth for exact menu grouping
- do not treat deployment success as final sign-off

---

## Next Session Start Command

Use this command structure at the start of the next Barracuda cycle:

```text
Review `docs/barracuda_handoff_2026-04-03_space_static_store_and_menu_state.md` first.

Current status:
- approved: `/space` static contact implementation, store tab image-path fix, latest build/deploy pass
- provisional: current `/coffee` grouped menu state, `/space` contact copy/layout, store tab rendering after fix
- revise: downstream visual review and canonical handoff refresh
- blocked: final approval until Barracuda downstream review artifacts exist

Immediate task:
1. review `/coffee`, `/space`, and homepage store tab visually
2. validate typography and spacing at `360 / 768 / 1024 / 1440`
3. confirm whether current UI can move from `provisional` to `approved`
4. if needed, update `docs/barracuda_codex_handoff_status.md` to match the current shipped state

Guardrails:
- keep `/space` static-first
- do not reintroduce a space inquiry form without explicit approval
- use the current codebase, not the 2026-03-27 coffee handoff alone, as the active menu reference
```
