# Barracuda Codex Handoff Status
Version: 2026-03-17

Purpose
This document summarizes the current implementation state of the Barracuda website so the next operator can continue work without re-discovering the project rules.

Project basics
- Workspace: `C:\dev\barracuda_web`
- GitHub: `https://github.com/onapond/barracuda.git`
- Vercel project: `onaponds-projects/barracuda_web`
- Production URL: `https://barracudaweb.vercel.app`
- Latest known production deploy: `https://barracuda-f3djzknaa-onaponds-projects.vercel.app`

---

## 1. Current State

Current public routes implemented:
- `/`
- `/brand`
- `/coffee`
- `/space`
- `/menu`
- `/store`
- `/visit`

Implemented stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- static-first public pages
- FormSubmit for lightweight client-side inquiry forms

Major completed work:
- homepage MVP built and expanded into multi-page IA
- `/brand`, `/coffee`, `/space`, `/menu`, `/store`, `/visit` all implemented as static public pages
- homepage and subpages rewritten toward shorter Korean-first brand copy
- shared typography system tightened in `components/page-hero.tsx` and `components/section-heading.tsx`
- headline width, body width, and Korean line-break handling improved across priority routes
- breakpoint screenshot QA run at `360 / 768 / 1024 / 1440`
- `/space` and `/menu` forms send through FormSubmit to `4everlll@naver.com`
- local lint/build verification passed repeatedly
- prebuilt Vercel deployment completed successfully

Important current reality:
- the live experience is significantly cleaner and shorter than before
- the strongest remaining issue is not routing or implementation, but operational verification and content hygiene

---

## 2. Active Rules

These rules override older PRD assumptions.

### Rendering / scope rules
- Prefer static pages for all public routes.
- Do not introduce server actions for current MVP scope unless the user explicitly requests it.
- Do not introduce dynamic runtime behavior unless the user explicitly requests it.
- Keep implementations simple and low-risk.

### Form rules
- Current public forms are lightweight email relay forms, not operational systems.
- `/space` and `/menu` submit through FormSubmit from the client.
- Current recipient: `4everlll@naver.com`
- No DB storage, no Supabase, no admin dashboard, no order-management flow.
- Avoid turning request forms into a full booking / ordering system unless explicitly requested.
- Important: FormSubmit requires first-time email activation. The recipient inbox must confirm the initial activation email once before production submissions will arrive.

### Deployment rules
- Build must happen locally.
- Vercel is for deployment only.
- Do not rely on Vercel remote build as the main workflow.
- Use prebuilt deployment.

Preferred deployment flow:
```powershell
npm run lint
npm run build
vercel build --prod
vercel deploy --prebuilt --prod --yes --archive=tgz
```

Important notes:
- plain `vercel deploy --prebuilt --prod` had upload/path issues in this project
- `--archive=tgz` has been the reliable path
- do not run `vercel build` and `vercel deploy --prebuilt` in parallel; deploy should happen after prebuilt output is complete

### Copy / typography rules
- User-facing copy should be Korean-first.
- Navigation may remain English.
- Prefer short, brand-specific copy over long explanatory prose.
- Avoid awkward automatic line breaks in hero copy and large section headings.
- If a manual line break is needed, break only at a natural phrase boundary.
- Prefer `word-break: keep-all`, controlled max-width, and phrase-based responsive breaks over random balancing.
- Use shared typography behavior before adding one-off page exceptions.

---

## 3. Important Files

Core app files:
- `app/layout.tsx`
- `app/page.tsx`
- `app/brand/page.tsx`
- `app/coffee/page.tsx`
- `app/space/page.tsx`
- `app/menu/page.tsx`
- `app/store/page.tsx`
- `app/visit/page.tsx`

Shared components:
- `components/header.tsx`
- `components/footer.tsx`
- `components/page-hero.tsx`
- `components/section-heading.tsx`
- `components/site-shell.tsx`
- `components/menu-order-form.tsx`
- `components/space-inquiry-form.tsx`
- `components/brand-section.tsx`
- `components/coffee-section.tsx`
- `components/store-section.tsx`
- `components/visit-section.tsx`
- `components/hero-section.tsx`

Content / planning docs:
- `data/site-content.ts`
- `docs/barracuda_agent_team_operating_model.md`
- `docs/barracuda_planning_matrix_cycle_1.md`
- `docs/barracuda_copy_team_cycle_1.md`
- `docs/barracuda_design_team_cycle_1.md`
- `docs/barracuda_codex_prd_v3.md`
- `docs/deployment_rules.md`
- `docs/nav/barracuda_planning_revision_notes.md`

---

## 4. Page Notes

### `/`
- homepage now reads more like a brand index and less like an essay page
- hero copy was shortened and CTA labels were simplified
- homepage still carries the strongest visual presence
- if more polish is needed, homepage hero height and image composition are the next likely refinement points

### `/brand`
- copy was shortened substantially
- page now acts as a compact brand statement rather than a long philosophy page
- values grid is concise and scan-friendly

### `/coffee`
- Barracuda-first page, not a CNC Tech clone
- CNC Tech remains as proof of roasting credibility
- copy was shortened and structured into faster proof blocks
- page now reads as a concise trust page

### `/space`
- static venue-presentation page
- no server actions
- inquiry form posts via FormSubmit and should email `4everlll@naver.com`
- copy was shortened, but the page still has more content density than homepage/store/visit because it needs venue use-case coverage

### `/menu`
- static editorial menu page
- order request form posts via FormSubmit and should email `4everlll@naver.com`
- page is shorter and easier to scan than before
- avoid drifting into delivery-app or order-system UX

### `/store`
- static preview-only page
- no checkout, no cart, no payment logic
- page now behaves more clearly as a restrained preview page
- product category blocks and featured product copy were shortened

### `/visit`
- static informational visit page
- copy was shortened aggressively and now behaves like a utility page
- still uses placeholder address / hours / parking / contact / Instagram values
- this is the shortest page in the public set and should stay that way

---

## 5. Content Status

Real operating content is still incomplete.
Placeholder or provisional content remains in these areas:
- full address
- finalized opening hours
- parking details
- final contact information
- final Instagram URL/handle confirmation
- final brand photography
- final business copy for confirmed operations

Important content caveat:
- `data/site-content.ts` still exists as the broad content repository
- however, because of repeated text corruption / encoding instability in that file, several priority pages now use local page-level copy constants to stabilize rendered output
- if future operators want to re-centralize all copy, do it carefully and verify encoding plus rendered output immediately

Primary replacement points now:
- text: route files plus `data/site-content.ts`
- images: `public/images/`

---

## 6. Verification Status

Most recent local checks passed:
- `npm run lint`
- `npm run build`

Most recent visual QA completed:
- screenshot QA run at `360 / 768 / 1024 / 1440`
- routes checked: `/`, `/brand`, `/coffee`, `/space`, `/menu`, `/store`, `/visit`

Most recent deployment status:
- prebuilt output generated successfully
- production deployment completed successfully
- production alias points to `https://barracudaweb.vercel.app`
- latest known production deployment URL: `https://barracuda-f3djzknaa-onaponds-projects.vercel.app`

Current QA conclusion:
- no major layout breakage was found in the public routes
- Korean line breaking is substantially more controlled than before
- homepage hero may still deserve additional polish if the user wants a stronger first-screen composition

---

## 7. Known Constraints / Cautions

- Do not reintroduce server actions into public Barracuda pages unless the user explicitly changes the rule.
- Do not turn request forms into operational systems.
- Do not change Store into an ecommerce flow without explicit approval.
- Do not assume PRDs override the newer operational rules; the user rule set is now the priority.
- Existing docs in `docs/` may contain older assumptions. Check against `docs/nav/barracuda_planning_revision_notes.md` before implementing.
- `data/site-content.ts` is no longer a perfectly safe source of truth for every visible string because of prior corruption / encoding problems.
- If editing `data/site-content.ts`, verify the rendered output immediately after editing.
- FormSubmit is an external dependency. If email delivery matters, verify activation and run a real submission test after deployment.
- The current FormSubmit setup is client-side and intentionally simple. It is not appropriate for sensitive workflows or spam-heavy traffic.

---

## 8. Open Issues

Priority open issues now:
1. FormSubmit activation and real inbox delivery are still not manually verified
2. real operating information is still placeholder in `/visit` and shared business info
3. `data/site-content.ts` still needs cleanup if the team wants clean centralized content management
4. homepage hero could still receive one more visual polish pass if the user wants a stronger first impression

What is currently true:
- the text-heavy feel was reduced significantly
- the worst headline line-break issues were reduced
- `components/page-hero.tsx` and `components/section-heading.tsx` now enforce tighter width defaults
- actual breakpoint QA has now been completed in this environment

Likely next approach:
1. submit one real `/space` form and one real `/menu` form from production
2. confirm FormSubmit activation and inbox delivery at `4everlll@naver.com`
3. replace placeholder business information
4. replace placeholder imagery
5. optionally normalize centralized content so page-level copy constants can be reduced later

---

## 9. Recommended Next Work

Priority order:
1. confirm FormSubmit activation email and live delivery
2. replace placeholder business information in visit/shared business info
3. replace placeholder imagery in `public/images/`
4. decide whether homepage hero needs one more polish pass
5. clean up `data/site-content.ts` encoding/content centralization only after the user-facing business data is real

---

## 10. Git / Working Tree Note

The working tree is not clean.
There are many uncommitted changes related to route implementation, copy refactor, typography adjustments, and handoff docs.
Do not assume the tree is clean.
Do not revert unrelated changes unless the user explicitly asks.

---

## 11. Handoff Summary

Barracuda is currently a static-first brand site with all planned public routes implemented, Korean-first user copy substantially shortened, shared heading typography improved, simple email-relay request forms in place, real breakpoint QA completed, and a local-build / Vercel-prebuilt deployment workflow confirmed.

The immediate unresolved work is now operational and editorial rather than structural:
- confirm real form-email delivery
- replace placeholder business information
- replace placeholder imagery
- decide whether homepage hero needs one more visual pass
- optionally clean up centralized content management after the live copy direction is settled

Any future implementation should protect:
- static rendering
- simple architecture
- editorial presentation
- low deployment risk
- easy content replacement
- disciplined Korean typography

## 12. Form Activation / Test Procedure

Use this after deployment if the form inbox has not been verified yet.

Activation steps:
1. Open the production site.
2. Submit one test request from `/space` or `/menu`.
3. Check `4everlll@naver.com` for the initial FormSubmit activation email.
4. Open the activation email and click the confirmation link.
5. Submit the form again from production.
6. Confirm that the actual inquiry email arrives in the inbox.

Recommended live test data:
- `/space`
  - name: `테스트 사용자`
  - phone: `010-1111-2222`
  - email: a real reply-to address you can check
  - eventType: `테스트 행사`
  - eventDate: any future date
  - expectedGuests: `10`
  - message: `프로덕션 폼 발송 테스트입니다.`
- `/menu`
  - name: `테스트 사용자`
  - phone: `010-1111-2222`
  - email: a real reply-to address you can check
  - orderType: `카페 주문`
  - pickupDate: any future date
  - pickupTime: any future time
  - orderDetails: `프로덕션 주문 폼 발송 테스트입니다.`

What success looks like:
- first submission triggers activation email if the address is not activated yet
- post-activation submissions arrive as normal inquiry emails
- reply-to should use the email entered in the form when provided

If delivery fails:
1. re-check whether the activation email was confirmed
2. check spam/junk in `4everlll@naver.com`
3. submit again from production, not localhost
4. if reliability becomes important, replace FormSubmit with a first-party email provider flow such as Resend

---

## 13. 2026-03-18 Codex Handoff Update

### Production status

- Production alias is live at `https://barracudaweb.vercel.app`
- Latest successful production deployment from this session:
  - `https://barracuda-qc1vpi9x5-onaponds-projects.vercel.app`
- Standard local deploy flow is working again with:
  - `vercel deploy --prod --yes`
- The local project was re-linked to:
  - Vercel team: `onaponds-projects`
  - Vercel project: `barracuda_web`

### What changed in this session

#### Visit page

- Replaced placeholder visit content on `/visit` with verified venue information:
  - address: `서울특별시 용산구 이태원로 29, 로얄파크컨벤션 1층`
  - phone: `02-501-4527`
  - parking: ground and underground parking details, fees, and inquiry phone
  - subway access: Samgakji / Namyeong walking times
- Converted the page from placeholder paragraph blocks to cleaner grouped information sections:
  - `Address / Contact`
  - `Parking`
  - `Public Transit`
- Connected the directions CTA to a real Google Maps query URL

#### Footer

- Removed the footer navigation because it was visually noisy
- Added a right-aligned `Family Sites` dropdown
- Added centered social icon links for:
  - Blog
  - YouTube
  - Instagram
- Moved address and copyright to a dedicated bottom line under social

#### Menu

- Replaced the previous placeholder-ish menu layout with the user-provided menu on `/menu`
- Added categories for:
  - `Coffee`
  - `Tea`
  - `Sweet Tea`
  - `Bottle`
  - `Juice`
  - `Dessert`
- Added prices and the note:
  - `디카페인 +700`
- Added the operating notice:
  - `1인 1음료 주문 부탁드립니다`
- Fixed a TypeScript narrowing issue in `app/menu/page.tsx` that blocked production build

#### Homepage / Brand section

- Changed the landing-page brand image area from a three-tile composition to a single large image
- This now matches the simpler visual direction requested from the brand tab

#### Brand spelling

- User-facing brand spelling was updated from `Barracuda` to `Baracuda` / `BARACUDA`
- This was applied to visible UI strings, metadata, alt text, and mail subjects
- Important:
  - internal identifiers were intentionally not renamed in this session
  - examples:
    - Vercel project: `barracuda_web`
    - production domain: `barracudaweb.vercel.app`
    - package name: `barracuda-web`

#### Image handling

- Homepage hero was switched from the old SVG placeholder to a real image asset
- Current homepage hero path:
  - `public/images/hero.jpg`
- The previous placeholder file `public/images/hero.svg` is deleted in the working tree
- Additional uncommitted image assets now exist in `public/images/`:
  - `ade.png`
  - `ame.png`
  - `latte.png`
  - `latte.webp`
  - `tea.png`
- These additional drink images are not yet wired into the UI in this handoff

### Files most affected in this session

- `app/menu/page.tsx`
- `app/visit/page.tsx`
- `components/footer.tsx`
- `components/brand-section.tsx`
- `components/header.tsx`
- `components/hero-section.tsx`
- `data/site-content.ts`
- `app/layout.tsx`
- `app/brand/page.tsx`
- `app/coffee/page.tsx`
- `app/space/page.tsx`
- `app/store/page.tsx`
- `app/api/forms/menu-order/route.ts`
- `app/api/forms/space-inquiry/route.ts`

### Working tree note

The working tree is still not clean after this session.

Relevant current changes include:
- route/page copy updates
- footer redesign
- menu rewrite
- visit page rewrite
- brand spelling updates
- hero image replacement
- newly added image assets in `public/images/`

Do not assume these changes are committed.
Do not revert the added local image files unless the user explicitly asks.

### Recommended next work

Priority order:
1. visually QA the live production site after the brand spelling update
2. decide whether internal identifiers should also be renamed from `barracuda` to `baracuda`
3. integrate the newly added drink/menu image assets if the user wants richer product visuals
4. replace remaining placeholder SVG/image assets beyond the homepage hero
5. optionally normalize text encoding / central content management in `data/site-content.ts`

---

## 14. 2026-03-18 Codex Handoff Update 2

### Last command executed

- `vercel deploy --prod --yes --scope onaponds-projects`

### Latest production deployment from this session

- deployment URL: `https://barracuda-f0cmubkpr-onaponds-projects.vercel.app`
- production alias: `https://barracudaweb.vercel.app`

### What changed in this pass

- Updated homepage/store imagery:
  - beans card -> `public/images/apollo.png`
  - goods card -> `public/images/goods.png`
  - lifestyle card -> `public/images/Parcera.png`
- Replaced several route hero images to reuse recent landing-page images.
- Simplified visit page and visit-section copy.
- Updated shared business info to:
  - `매주 월요일 휴무 / 10:00-19:00`
- Rebuilt `data/site-content.ts` into a clean UTF-8 file because the previous version had repeated encoding/string corruption.
- Added brand-page story background image support using:
  - `public/images/brend-hero.jpg.jpg`

### Important unresolved issue

Brand tab image changes were reported by the user as not correctly reflected after deployment.

Current code reality in `app/brand/page.tsx`:
- hero image: `/images/brend.jpg`
- story background image: `/images/brend-hero.jpg.jpg`
- bottom gallery is still effectively wrong for the requested state:
  - first image is `/images/brend.jpg`
  - second and third images still resolve through `assetPaths.brand[1]` and `assetPaths.brand[2]`
  - those values currently come from `data/site-content.ts`, not directly from `brend-2.jpg` and `brend-3.jpg` in the route file

User expectation that is NOT yet confirmed on live site:
- bottom gallery should use:
  - `public/images/brend-1.jpg`
  - `public/images/brend-2.jpg`
  - `public/images/brend-3.jpg`
- middle brand-copy block background should visibly use the uploaded hero background image

### Files to inspect first next session

- `app/brand/page.tsx`
- `data/site-content.ts`
- `public/images/brend-1.jpg`
- `public/images/brend-2.jpg`
- `public/images/brend-3.jpg`
- `public/images/brend-hero.jpg.jpg`

### Recommended first action next session

1. Open `app/brand/page.tsx` and explicitly hardcode the gallery array to `brend-1/2/3` only.
2. Confirm the brand story background image is visible enough and not washed out by the overlay.
3. Run `npm run build`.
4. Redeploy.
5. Visually verify `/brand` on production before reporting completion.

---

## 15. 2026-03-18 Codex Handoff Update 3

### Latest production deployment from this pass

- deployment URL: `https://barracuda-6491xvisb-onaponds-projects.vercel.app`
- production alias: `https://barracudaweb.vercel.app`

### What changed in this pass

- Brand page:
  - bottom gallery was aligned to the uploaded `brend-1/2/3` asset set
  - the middle story area was converted into a full-section background image layout using:
    - `public/images/brend-hero.jpg.jpg`
  - the story panel was re-centered and enlarged
  - the story copy was rewritten into a more slot-fit structure:
    - title
    - lead
    - two short body paragraphs
- Coffee page:
  - `로스팅 방향` image -> `public/images/roasting.png`
  - `브루잉` image -> `public/images/brew.png`
- Menu page:
  - hero image -> `public/images/menu.png`
- Space page:
  - `이용 장면` images were replaced with the requested image set:
    - `event.jpg`
    - `fation.jpg`
    - `book.jpg`
    - `experience.jpg`
    - `showcase.jpg`
    - `creator.jpg`
  - lower gallery was replaced with:
    - `hero.jpg`
    - `brend-hero.jpg.jpg`
    - `brend-4.jpg`
    - `brend-1.jpg`
    - `brend-2.jpg`
    - `brend-3.jpg`
- Visit page:
  - hero image -> `public/images/brend-hero.jpg.jpg`
- Navigation:
  - `Store` was removed from shared nav visibility for now
  - active visible tabs are:
    - `Brand`
    - `Coffee`
    - `Space`
    - `Menu`
    - `Visit`

### Current important reality

- The latest visual/image pass is deployed to production.
- However, these latest local changes are still not committed in the working tree.
- Do not assume the deployed state and the latest git `HEAD` are the same.

### Current working tree note

Current modified code files include:

- `app/brand/page.tsx`
- `app/coffee/page.tsx`
- `app/menu/page.tsx`
- `app/space/page.tsx`
- `app/visit/page.tsx`
- `data/site-content.ts`

Current uncommitted image additions include:

- `public/images/brend-4.jpg`
- `public/images/brew.png`
- `public/images/creator.jpg`
- `public/images/menu.png`
- `public/images/roasting.png`
- `public/images/showcase.jpg`

Current uncommitted image deletions include:

- `public/images/coffee-1.svg`
- `public/images/map-preview.svg`
- `public/images/space-1.svg`
- `public/images/space-2.svg`
- `public/images/space-3.svg`
- `public/images/store-1.svg`
- `public/images/store-2.svg`
- `public/images/store-3.svg`
- `public/images/tea.png`

### Recommended first action next session

1. Visually QA `/brand`, `/coffee`, `/menu`, `/space`, and `/visit` on production.
2. If approved, commit and push the current image/layout pass.
3. Decide whether the temporary hidden `Store` tab should remain route-accessible or be explicitly closed.
