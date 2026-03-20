# Barracuda Handoff
Date: 2026-03-20
Status: Active

## Purpose

This document captures the latest Barracuda landing-page refresh work so the next session can continue without re-discovery.

---

## Summary

This session focused on three user-requested changes:

1. Make the top Barracuda logo return to the home / landing page.
2. Add the menu into the `coffee` flow so users can see a full menu image inside the coffee page.
3. Reduce landing-page text density and rework the homepage so images occupy more of the screen with less empty left/right layout space.

The homepage is now more image-led than before.
Text blocks were shortened, several split layouts were flattened, and image rows/cards were expanded to fill width more aggressively.

---

## What Changed

### 1. Header logo now links to home

The centered header logo block in the shared company header is now clickable and routes to `/`.

Updated file:

- `components/company-header.tsx`

Implementation note:

- The logo image + caption block is wrapped in `Link`.
- Added focus-visible styling and `aria-label` for accessibility.

### 2. Coffee page now includes full menu showcase

The `coffee` page now renders a dedicated menu showcase section under the existing coffee gallery content.

Updated files:

- `app/coffee/page.tsx`
- `components/company-menu-showcase.tsx`
- `data/sites/barracuda.ts`
- `lib/company-site.ts`

Behavior:

- `MENU MOOD` remains in the coffee gallery flow.
- A new `Full Menu` section appears below it.
- The new section shows:
  - one featured menu-related image
  - one scrollable full menu image panel

Data source:

- Config is stored in `siteConfig.coffee.menuShowcase`.

### 3. Homepage copy was compressed

Homepage copy was shortened so each major block reads closer to:

- section label
- title
- brief supporting sentence

The goal was to stop the landing page from feeling too text-heavy.

Updated file:

- `data/sites/barracuda.ts`

Examples of direction:

- hero copy shortened
- intro copy shortened
- homepage preview descriptions shortened
- signature tab descriptions shortened

### 4. Homepage layout was rebuilt to remove empty split-space

The user specifically called out that some sections, especially `Scene` and `Brand`, left too much empty space on one side while images below remained too narrow.

To fix this, homepage section layouts were changed to follow a shared pattern:

- text block at the top
- large primary image below
- wider supporting image row below that

This replaced earlier left/right editorial split layouts in the homepage body.

Updated files:

- `components/company-homepage-template.tsx`
- `components/company-homepage-intro.tsx`
- `components/company-homepage-preview.tsx`
- `components/company-signature-tabs.tsx`

Result:

- larger hero
- less empty whitespace
- wider image usage across all homepage sections
- `Scene`, `Brand`, and other homepage sections now use more horizontal space
- signature tabs keep the tab controls, but the active media now spans the section width more aggressively

---

## Current Homepage Structure

Current homepage route:

- `/`

Current order:

1. shared company header
2. hero
3. homepage intro
4. signature tabs
5. space preview
6. brand preview
7. coffee preview
8. menu preview
9. visit preview
10. footer

Current homepage behavior notes:

- text is intentionally shorter than before
- images are intentionally larger than before
- homepage sections no longer rely on narrow left/right split composition
- the current direction is closer to a stacked editorial gallery rhythm

---

## Current Coffee Page Notes

Route:

- `/coffee`

Current order:

1. coffee hero
2. coffee gallery sections
3. full menu showcase
4. action links

Important note:

- The full menu inside `/coffee` currently uses a scrollable menu image panel, not a structured text menu list.
- If the user later wants a fully typed-out menu system, that will require a new structured data model rather than just image-based rendering.

---

## Files Touched In This Session

- `app/coffee/page.tsx`
- `components/company-header.tsx`
- `components/company-homepage-intro.tsx`
- `components/company-homepage-preview.tsx`
- `components/company-homepage-template.tsx`
- `components/company-menu-showcase.tsx`
- `components/company-signature-tabs.tsx`
- `data/sites/barracuda.ts`
- `lib/company-site.ts`

---

## Verification

Local checks completed successfully during this session:

- `npm run lint`

Production deployment completed successfully.

Latest production details from this session:

- production alias: `https://barracudaweb.vercel.app`
- latest deployment URL: `https://barracuda-knz7qskpi-onaponds-projects.vercel.app`
- latest inspect URL: `https://vercel.com/onaponds-projects/barracuda_web/8rfkpLg2mkvc7mfxGCaLn2J4s2Q9`

---

## Working Tree Notes

There are still untracked temp reference artifacts in the workspace:

- `tmp-ref1*`
- `tmp-ref2*`

These are analysis leftovers and not product assets.

There are also active uncommitted source edits reflecting the latest deployed state.
Do not assume the worktree is clean.

---

## Recommended Next Steps

1. Visually QA the homepage on desktop and mobile after the full-width image changes.
2. Check whether any section now feels too tall after the stacked-layout change.
3. Decide whether the homepage preview CTA buttons should remain in every section or be reduced further.
4. Decide whether `/coffee` should keep the full menu as an image panel or move to structured menu data later.
5. Clean up `tmp-ref1*` and `tmp-ref2*` if they are no longer needed.

---

## Handoff Close

At handoff time, Barracuda is live with:

- clickable header logo to home
- full menu showcase inside `/coffee`
- shorter landing-page copy
- larger, fuller-width homepage imagery
- reduced empty split-space across homepage sections

The most likely next work is visual refinement rather than structural rebuild.
