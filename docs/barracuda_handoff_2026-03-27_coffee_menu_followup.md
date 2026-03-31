# Barracuda Handoff
Date: 2026-03-27
Status: Active

## Purpose

This handoff records the current coffee menu work state after correcting the earlier category-section misinterpretation.
Use it before making the next `/coffee` menu presentation change.

---

## Session Summary

This follow-up session did four things:

1. confirmed that the previous implementation direction was wrong for the user request
2. removed the standalone category-section approach from `/coffee`
3. moved coffee menu categorization into the existing `Menu Mood` gallery section
4. re-verified the codebase with `npm run build`

---

## What Was Corrected

### 1. The main requirement is category grouping inside the existing menu image section

The user direction is now explicit:
- do not add a separate category section below the coffee gallery
- keep the work focused on classifying menu images by category
- show the category grouping inside the existing menu section

Important interpretation:
- the previous standalone `coffeeMenuSection` approach was incorrect
- the current implementation now follows the narrower direction

### 2. `BARACUDA MENU.jpg` remains the source of truth for grouping

The active grouping used in code is still based on `public/images/BARACUDA MENU.jpg`:
- `COFFEE ALL ESPRESSO BASED`
- `TRADITIONAL TEA`
- `TEA`
- `SWEET TEA`
- `JUICE`
- `CHOCO`
- `ADE`
- `DESSERT`
- `BOTTLE (BUNDABERG)`

Important content interpretation retained from the earlier review:
- `Green Plum Tea` exists on the board image used for this task
- `Citron Tea` is not shown on that board image
- `JUICE` and `CHOCO` are separate groups
- `BOTTLE (BUNDABERG)` is its own group
- the visible board does not justify reintroducing the earlier smoothie grouping

### 3. `/coffee` now expresses grouping in the intended structural place

Current implementation behavior:
- the existing `Menu Mood` section now supports grouped image rendering
- category labels render above grouped image-card clusters inside that section
- image-missing entries still render as `Image Pending` cards with filename and recommended size
- the separate coffee-only category section is no longer rendered on `/coffee`

Important interpretation:
- this resolves the main structural misunderstanding from the prior pass
- technical completion does not yet equal final visual approval under Barracuda rules

### 4. Technical state is healthy after the correction

Latest local verification in this session:
- `npm run build`

Result:
- pass

---

## Current Working-Tree State

### Files changed for this coffee menu correction

Product-facing files currently changed:
- `app/coffee/page.tsx`
- `components/company-gallery-section.tsx`
- `data/sites/barracuda.ts`
- `lib/company-site.ts`

Other related files still present in the broader session state:
- `app/menu/page.tsx`
- `components/company-coffee-menu-section.tsx`
- `package.json`
- `README.md`
- `scripts/start-dev.ps1`
- `scripts/status-dev.ps1`
- `scripts/stop-dev.ps1`

### What the current coffee changes do

- `app/coffee/page.tsx`
  - removes rendering of the separate `CompanyCoffeeMenuSection` block
- `components/company-gallery-section.tsx`
  - keeps optional-image support for gallery cards
  - renders grouped gallery blocks when `imageGroups` is provided
  - preserves `Image Pending` placeholder behavior for menus without assets yet
- `data/sites/barracuda.ts`
  - rewrites the `/coffee` `Menu Mood` section to use category-based `imageGroups`
  - removes the prior standalone `coffeeMenuSection` from the coffee route state
- `lib/company-site.ts`
  - extends gallery section typing to support grouped image rendering

### What remains outside the coffee correction scope

- `/menu` still contains synchronized full-menu category work from the earlier session
- `components/company-coffee-menu-section.tsx` still exists in the repository because it is used by `/menu`
- no broader copy, typography-system, or sitewide menu refactor was performed in this pass

---

## Approval Status

### Approved

- the earlier structural misunderstanding has been corrected on `/coffee`
- `BARACUDA MENU.jpg` remains the operative grouping reference for this task
- `npm run build` passes after the correction

### Provisional

- grouped menu imagery inside the existing `Menu Mood` section is implemented
- `Image Pending` placeholder cards remain usable for missing assets

### Revise

- `/coffee` still needs downstream visual review before final approval
- Korean line-break and grouped-section readability should still be checked at real breakpoints
- `/menu` synchronization should be re-evaluated only after the user confirms the `/coffee` result is visually correct

### Blocked

- no final approval should be assumed from build success alone
- Barracuda downstream review gates are still open for this UI change

---

## Recommended Next Step

Next session should do this in order:

1. Visually review `/coffee` with focus on grouped menu presentation inside `Menu Mood`.
2. Check category heading rhythm and card density at the required breakpoints.
3. Confirm whether the `/menu` route should keep, revise, or drop its separate synchronized category section.
4. Only after visual confirmation, decide final approval status for the coffee menu UI.

Implementation guardrail:
- keep `public/images/BARACUDA MENU.jpg` as the grouping reference before any further layout change
- do not widen this into sitewide menu restructuring without explicit user approval

---

## Handoff Close

At handoff time, the core correction requested by the user has been applied:
- category grouping stays
- the separate `/coffee` category section is removed
- the existing `Menu Mood` section now carries the grouping structure

The main open issue is no longer structural misunderstanding.
The remaining open issue is approval:
- technical verification passed
- visual review is still required before this can be treated as fully approved

---

## Next Session Start Command

Use this command structure at the start of the next Barracuda cycle:

```text
Review `docs/barracuda_handoff_2026-03-27_coffee_menu_followup.md` first.
Current status for `/coffee` is:
- approved: structural correction from separate category section to grouped `Menu Mood` section
- provisional: grouped image presentation and image-pending placeholders
- revise: downstream visual review at required breakpoints, plus `/menu` follow-up decision after `/coffee` review
- blocked: final approval until visual review artifacts exist

Immediate task:
1. review the current `/coffee` UI visually
2. validate grouped menu readability at `360 / 768 / 1024 / 1440`
3. report whether `/coffee` can move from `provisional` to `approved` or must remain `revise`
4. only then decide what to do with `/menu` synchronization

Guardrails:
- use `public/images/BARACUDA MENU.jpg` as the source of truth for menu grouping
- do not reintroduce a separate category section under `/coffee`
- do not widen scope into sitewide menu refactoring without user approval
```
