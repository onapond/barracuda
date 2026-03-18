# Barracuda Work Log
Date: 2026-03-18

## Scope

This session focused on visual replacement and section-fit refinement across:

- `/brand`
- `/coffee`
- `/menu`
- `/space`
- `/visit`
- shared navigation visibility

This was a content/layout pass, not a routing or backend pass.

---

## What Changed

### 1. Brand page

- Rewired the bottom gallery to use uploaded brand images instead of the previous placeholder-ish mapping.
- Reworked the middle `Brand Story` section into a full-background image section using:
  - `public/images/brend-hero.jpg.jpg`
- Iterated the story panel layout:
  - background image moved from inner-card treatment to full-section treatment
  - panel alignment moved to a true section-centered composition
  - panel size increased to better match section scale
- Rewrote the story copy into a tighter slot-based structure:
  - title
  - lead
  - two shorter body paragraphs

### 2. Coffee page

- Replaced the `로스팅 방향` image with:
  - `public/images/roasting.png`
- Replaced the `브루잉` image with:
  - `public/images/brew.png`

### 3. Menu page

- Replaced the menu hero image with:
  - `public/images/menu.png`

### 4. Space page

- Updated the `이용 장면` cards to use the requested images in this order:
  1. `event.jpg`
  2. `fation.jpg`
  3. `book.jpg`
  4. `experience.jpg`
  5. `showcase.jpg`
  6. `creator.jpg`
- Updated the lower gallery to use:
  1. `hero.jpg`
  2. `brend-hero.jpg.jpg`
  3. `brend-4.jpg`
  4. `brend-1.jpg`
  5. `brend-2.jpg`
  6. `brend-3.jpg`

### 5. Visit page

- Replaced the visit hero image with:
  - `public/images/brend-hero.jpg.jpg`

### 6. Navigation

- Temporarily hid `Store` from shared navigation.
- Active visible tabs are now:
  - `Brand`
  - `Coffee`
  - `Space`
  - `Menu`
  - `Visit`

---

## Verification

Local checks run repeatedly during this session:

- `npm run lint`
- `npm run build`

All passed at the time they were run.

Production deployments completed during this session, including the latest known alias update:

- `https://barracuda-6491xvisb-onaponds-projects.vercel.app`
- production alias: `https://barracudaweb.vercel.app`

---

## Current Working Tree Reality

Important: this session ended with additional local changes that are not yet committed.

Current notable modified files include:

- `app/brand/page.tsx`
- `app/coffee/page.tsx`
- `app/menu/page.tsx`
- `app/space/page.tsx`
- `app/visit/page.tsx`
- `data/site-content.ts`

Current notable image file changes include:

- added:
  - `public/images/brend-4.jpg`
  - `public/images/brew.png`
  - `public/images/creator.jpg`
  - `public/images/menu.png`
  - `public/images/roasting.png`
  - `public/images/showcase.jpg`
- deleted:
  - `public/images/coffee-1.svg`
  - `public/images/map-preview.svg`
  - `public/images/space-1.svg`
  - `public/images/space-2.svg`
  - `public/images/space-3.svg`
  - `public/images/store-1.svg`
  - `public/images/store-2.svg`
  - `public/images/store-3.svg`
  - `public/images/tea.png`

Do not assume these latest changes are committed or pushed.

---

## Recommended Next Check

1. Visually QA `/brand` story section on desktop and mobile.
2. Confirm the brand story panel now feels centered enough at real viewport widths.
3. QA `/coffee`, `/menu`, `/space`, `/visit` for image crop quality.
4. Decide whether the temporary `Store` hide should also be reflected on the homepage or route access level.
5. Commit and push this latest visual pass after final approval.
