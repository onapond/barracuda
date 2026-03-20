# Barracuda Codex Handoff Status
Version: 2026-03-20
Status: Active

Purpose
This document is the current handoff reference for the Barracuda website.
Use it before making further homepage, subpage, or deployment changes.

Project basics
- Workspace: `C:\dev\barracuda_web`
- GitHub: `https://github.com/onapond/barracuda.git`
- Active branch at handoff time: `v2-renewal`
- Vercel project: `onaponds-projects/barracuda_web`
- Production URL: `https://barracudaweb.vercel.app`
- Latest production deployment: `https://barracuda-5ngt0fi84-onaponds-projects.vercel.app`
- Latest deployment inspect URL: `https://vercel.com/onaponds-projects/barracuda_web/2spokVcf1dDXRFNp5NhDyVp2HMJA`

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

Current design direction:
- the homepage is no longer a simple hero-only shell
- homepage follows the approved `화견수` reference direction more closely through image-heavy editorial flow
- homepage is now space-first rather than coffee-first
- the main homepage message is that Barracuda is a place for private scenes, gatherings, celebrations, and brand moments
- coffee remains important, but behaves as a supporting layer that completes the space mood

Major completed work in the current cycle:
- homepage was rebuilt again after review so it no longer stops at hero + footer
- homepage now includes a space-first intro gallery section
- homepage now includes a signature tab section designed to accept image or video media per tab
- homepage now includes sequential preview sections for space, brand, coffee, menu, and visit
- homepage content and copy were rewritten to feel more premium, less direct, and more mood-led
- shared site config was expanded so homepage structure can scale across future sites
- local lint/build verification passed after the latest homepage changes
- production deployment completed successfully after the homepage redesign

Important current reality:
- the site now presents Barracuda primarily as a private-use spatial brand, not just a cafe site
- the homepage is now much closer to the intended Hwagyeonsu-style gallery rhythm
- actual video files are still not present in the workspace, so the signature tabs currently use images as placeholders for future video media

---

## 2. Active Rules

These rules should be treated as current unless the user explicitly changes them.

### Rendering / scope rules
- Prefer static pages for all public routes.
- Do not introduce server actions into public pages unless the user explicitly requests it.
- Do not turn public inquiry flows into operational systems unless explicitly requested.
- Keep implementations simple and low-risk.

### Current design / template rules
- The approved homepage reference direction is the `화견수`-style structure.
- This should be interpreted as:
  - large white header block
  - centered logo block
  - restrained horizontal nav on desktop
  - hamburger + utility links on mobile
  - one strong hero at the top
  - multiple image-led homepage sections after hero
  - one signature tab/media section in the middle of the homepage
  - gallery rhythm matters more than long explanations
- Do not reduce the homepage back to a single-hero landing unless the user explicitly requests it.
- Do not make the homepage feel like a generic service-card grid.
- Space should be the strongest homepage category.
- Copy should feel premium, restrained, and atmospheric rather than direct sales language.

### Homepage positioning rules
- Barracuda should read as a place for:
  - private gatherings
  - celebrations / parties
  - brand moments / showcases
  - cafe + lounge use
- Coffee supports the identity but is not the lead homepage message.
- The homepage CTA hierarchy should favor space discovery over operational cafe browsing.

### Media rules
- Homepage should be image-heavy.
- Signature tabs are designed to support video.
- If real video assets are added later, swap homepage signature tab featured media from `type: "image"` to `type: "video"` in site config.
- Do not overfill sections with long copy once video assets arrive.

### Form rules
- `/space` and `/menu` currently submit through FormSubmit from the client.
- Current recipient: `4everlll@naver.com`
- No DB storage, no Supabase, no admin dashboard, no booking backend, no order-management flow.
- FormSubmit activation and real delivery are still not confirmed in production.

### Deployment rules
- Build locally first.
- Use Vercel prebuilt deployment.
- Preferred flow:
```powershell
npm run lint
npm run build
vercel build --prod
vercel deploy --prebuilt --prod --yes --archive=tgz
```
- Important: do not run `vercel build` and `vercel deploy --prebuilt` in parallel.
  The deploy step must wait until `.vercel/output` is fully generated.

---

## 3. Important Files

Primary homepage / shell files:
- `app/page.tsx`
- `components/company-homepage-template.tsx`
- `components/company-homepage-intro.tsx`
- `components/company-signature-tabs.tsx`
- `components/company-homepage-preview.tsx`
- `components/company-header.tsx`
- `components/footer.tsx`

Shared route shell files:
- `components/company-site-header.tsx`
- `components/company-site-shell.tsx`
- `components/company-page-hero.tsx`
- `components/company-gallery-section.tsx`

Current route files:
- `app/brand/page.tsx`
- `app/coffee/page.tsx`
- `app/space/page.tsx`
- `app/menu/page.tsx`
- `app/store/page.tsx`
- `app/visit/page.tsx`

Current content / config source:
- `data/site.ts`
- `data/sites/barracuda.ts`
- `lib/company-site.ts`

Backward-compatibility content shim:
- `data/site-content.ts`

Production / repetition docs:
- `docs/company_homepage_template.md`
- `docs/company_homepage_production_checklist.md`
- `docs/company_homepage_site_config_guide.md`

Forms:
- `components/menu-order-form.tsx`
- `components/space-inquiry-form.tsx`
- `app/api/forms/menu-order/route.ts`
- `app/api/forms/space-inquiry/route.ts`

---

## 4. Homepage System Summary

### Homepage
Homepage now uses the company-standard shell plus Barracuda-specific space-first content.
Current entry:
- `app/page.tsx`

Active homepage sections in order:
1. `CompanyHomepageTemplate` hero shell
2. `CompanyHomepageIntro`
3. `CompanySignatureTabs`
4. `CompanyHomepagePreview` for space experience
5. `CompanyHomepagePreview` for brand
6. `CompanyHomepagePreview` for coffee
7. `CompanyHomepagePreview` for menu
8. `CompanyHomepagePreview` for visit
9. `Footer`

Current homepage config lives in:
- `barracudaSiteConfig` inside `data/sites/barracuda.ts`

### Signature tab structure
Current homepage signature tabs are:
- `Private Scene`
- `Celebration`
- `Brand Moment`
- `Cafe & Lounge`

Interpretation:
- this is the Barracuda equivalent of the reference site's style / category showcase section
- each tab is designed to support one featured media asset plus supporting gallery images
- current assets are all images because no video files are yet available locally

### Multi-site reuse pattern
The intended reuse pattern for future sites is:
- keep shared components stable
- duplicate a site config module under `data/sites/`
- switch the active export in `data/site.ts`
- only modify shared components if the company-wide standard changes

---

## 5. Page Notes

### `/`
- now behaves as a proper Hwagyeonsu-style editorial landing rather than hero-only landing
- strongest homepage emphasis is space / scene / gathering mood
- copy intentionally avoids overly direct rental-sales wording
- homepage is currently image-led with image placeholders in signature media tabs
- if video files are delivered, homepage should be updated to use real video in signature tabs first

### `/brand`
- gallery-first brand page remains active
- large hero + brand gallery + short brand note

### `/coffee`
- image-led coffee page remains active
- coffee acts as an important supporting credibility layer

### `/space`
- still the strongest operational page
- gallery-heavy structure remains active
- still includes the inquiry form at the bottom

### `/menu`
- menu remains image-led and still includes the order request form
- `public/images/ba_menu.jpg` remains an actual product asset, not a temp file

### `/store`
- still preview-oriented rather than ecommerce-oriented

### `/visit`
- still combines image presentation with compact info cards

---

## 6. Content / Asset Status

Current content status:
- homepage copy was recently shifted toward premium, mood-led space language
- utility links on the template header are still placeholder-style (`#`) links
- some business details may still need final confirmation
- final approved photo set may still need expansion

Current important media reality:
- no local homepage video files are currently present in `public/`
- homepage signature tabs were implemented to support future video, but are currently fed image assets
- the highest-value next content upgrade is real video for the homepage signature tabs

Suggested future media priorities:
1. one strong hero video or alternate hero cut
2. signature tab videos for private scene / celebration / brand moment / cafe & lounge
3. more space usage photography
4. more event / party scene imagery

Current temp analysis artifacts still in working tree and not committed:
- `tmp-ref1*`
- `tmp-ref2*`

These were created for reference analysis only.
They are not part of the product and can be deleted later if desired.

---

## 7. Verification Status

Latest local checks passed:
- `npm run lint`
- `npm run build`

Latest deployment flow completed successfully:
- `vercel build --prod`
- `vercel deploy --prebuilt --prod --yes --archive=tgz`

Latest production result:
- production alias points to `https://barracudaweb.vercel.app`
- latest known deploy URL: `https://barracuda-5ngt0fi84-onaponds-projects.vercel.app`

Important deployment caution from prior sessions:
- one deploy previously failed because `vercel build` and `vercel deploy --prebuilt` were triggered too close together / in parallel
- successful resolution was simply to rerun `vercel deploy --prebuilt --prod --yes --archive=tgz` after the build had fully completed

---

## 8. Git / Change History Notes

Important commits in the current branch history before this latest homepage pass:
- `f9e115c` `chore: snapshot homepage v1 before v2 renewal`
- `1b90b58` `feat: renew homepage for v2 direction`
- `607ca04` `feat: adopt hwagyeonsu-style homepage structure`
- `e5647ba` `feat: generalize company homepage template`
- `de07b7b` `docs: add homepage production workflow guides`
- `9913e01` `feat: convert subpages to gallery-first template`

Meaning:
- v1 snapshot exists
- homepage moved from older editorial stack -> Hwagyeonsu shell -> generalized template -> space-first gallery landing
- subpages remain aligned to the same family of layout behavior

---

## 9. Recommended Next Work

Priority next steps:
1. visually QA the new homepage on real desktop and mobile breakpoints
2. replace homepage signature featured images with real video assets when available
3. decide whether homepage hero itself should remain image-first or move to video-first
4. fine-tune homepage copy density if any section still feels too explanatory
5. verify FormSubmit activation and actual email delivery for `/space` and `/menu`
6. replace placeholder utility links or remove them entirely
7. decide whether temp analysis files should be deleted from the working tree

---

## 10. Handoff Summary

Barracuda is now running on a Hwagyeonsu-inspired, media-heavy, space-first landing system rather than a simple cafe hero site.

The homepage now uses a strong top hero, a space-first intro gallery, a signature tab/media section, and multiple gallery previews that present private scenes, celebrations, brand moments, and cafe lounge mood through imagery.

The remaining work is mainly visual QA, real video asset insertion, optional copy refinement, utility-link cleanup, and form delivery verification.
