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
- Latest known production deployment: `https://barracuda-im3feddvu-onaponds-projects.vercel.app`

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
- the site is no longer using the older multi-section editorial homepage direction as the primary homepage shell
- homepage and subpages were shifted toward a Hwagyeonsu-style structure requested by the user
- white header block + centered logo + restrained navigation + single dominant hero image are now the base pattern
- subpages were also simplified into gallery-first layouts so the site reads more through imagery than dense explanation

Major completed work in the current cycle:
- current pre-renewal state was preserved as `v1-homepage-snapshot`
- homepage was rebuilt into a reusable company-standard template shell
- reusable homepage template component added: `components/company-homepage-template.tsx`
- reusable subpage shell/header/hero/gallery components added
- `/brand`, `/coffee`, `/space`, `/menu`, `/store`, `/visit` were converted to gallery-first page structures
- menu page text corruption was replaced with a clean image-led layout using `public/images/ba_menu.jpg`
- production deployment was completed successfully after the gallery-first conversion
- local lint/build verification passed after the latest changes

Important current reality:
- the site now prioritizes layout consistency and image-led presentation over long route-specific text blocks
- the homepage and subpages are much closer to a repeatable company template than before
- the biggest remaining work is visual QA / fine-tuning, not architecture

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
- Homepage should use:
  - large white header block
  - centered logo block
  - restrained horizontal nav on desktop
  - hamburger + utility links on mobile
  - one dominant hero image
  - one dominant CTA
- Subpages should follow the same family of layout behavior and feel image-first.
- Do not drift back into long text-heavy stacked layouts unless the user asks.
- Gallery-first sections are preferred over explanation-heavy blocks.

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
- `components/company-site-header.tsx`
- `components/company-site-shell.tsx`
- `components/company-page-hero.tsx`
- `components/company-gallery-section.tsx`
- `components/footer.tsx`

Current route files:
- `app/brand/page.tsx`
- `app/coffee/page.tsx`
- `app/space/page.tsx`
- `app/menu/page.tsx`
- `app/store/page.tsx`
- `app/visit/page.tsx`

Current content / config source:
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

## 4. Template System Summary

### Homepage
Homepage now uses the company-standard reusable template.
Current entry:
- `app/page.tsx` -> `CompanyHomepageTemplate`

The current site-specific homepage config lives in:
- `companyHomepageTemplate` inside `data/site-content.ts`

This is the intended reuse pattern for future sites:
- keep `components/company-homepage-template.tsx` stable
- swap site-specific config in `data/site-content.ts`
- only change the template component when the company-wide standard itself changes

### Subpages
Subpages now use a parallel family of reusable pieces:
- `CompanySiteHeader`
- `CompanySiteShell`
- `CompanyPageHero`
- `CompanyGallerySection`

Interpretation:
- the site now has a repeatable visual system for both landing and subpages
- future sites can reuse the same structure with different data and imagery

---

## 5. Page Notes

### `/`
- Hwagyeonsu-style homepage shell is active
- large white header block with centered brand presentation
- dominant single hero image
- footer still exists, unlike the reference, because it remains useful for the Barracuda site
- if the user wants a closer 1:1 reference match, footer simplification/removal is a likely next adjustment

### `/brand`
- converted into gallery-first brand page
- large hero + brand gallery + short brand note
- reads through imagery more than text now

### `/coffee`
- converted into image-led coffee page
- roastery / roasting / brewing / menu mood are now presented through gallery sections
- less technical explanation than before

### `/space`
- converted into gallery-heavy page
- strongest image density among subpages
- still includes the inquiry form at the bottom

### `/menu`
- previous corrupted / unstable text-heavy menu page was replaced with a gallery-first menu presentation
- uses `public/images/ba_menu.jpg`
- still includes the order request form at the bottom

### `/store`
- now behaves more like a visual preview page than a category explanation page
- keeps preview-only direction and no ecommerce behavior

### `/visit`
- now mixes light gallery presentation with compact info cards
- still contains operational info blocks, but much less text-heavy than before

---

## 6. Content / Asset Status

Content still provisional in some areas:
- utility links on template header are placeholder-style (`#`) links
- some business details may still need final confirmation
- final approved brand photography set is still not guaranteed complete
- final brand copy may still be tightened after visual QA

Current important asset note:
- `public/images/ba_menu.jpg` is now part of the actual site and should not be treated as a temp artifact

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
- latest known deploy URL: `https://barracuda-im3feddvu-onaponds-projects.vercel.app`

Important deployment caution from this session:
- one deploy failed because `vercel build` and `vercel deploy --prebuilt` were triggered too close together / in parallel
- successful resolution was simply to rerun `vercel deploy --prebuilt --prod --yes --archive=tgz` after the build had fully completed

---

## 8. Git / Change History Notes

Important commits in the current branch history:
- `f9e115c` `chore: snapshot homepage v1 before v2 renewal`
- `1b90b58` `feat: renew homepage for v2 direction`
- `607ca04` `feat: adopt hwagyeonsu-style homepage structure`
- `e5647ba` `feat: generalize company homepage template`
- `de07b7b` `docs: add homepage production workflow guides`
- `9913e01` `feat: convert subpages to gallery-first template`

Meaning:
- `v1` snapshot exists
- homepage was first renewed, then converted to the Hwagyeonsu pattern, then generalized into a company template
- subpages were later aligned to the same family of layout

---

## 9. Recommended Next Work

Priority next steps:
1. visually QA all routes on real desktop and mobile breakpoints
2. decide whether footer should remain or be simplified further to match the reference more closely
3. replace placeholder utility links if the user wants real auth/member links or remove them entirely
4. verify FormSubmit activation and actual email delivery for `/space` and `/menu`
5. decide whether the temp analysis files should be deleted from the working tree
6. if the company truly wants 100 similar sites, consider extracting `companyHomepageTemplate` into a dedicated config module or generator workflow instead of keeping all config in one site file

---

## 10. Handoff Summary

Barracuda is now running on a Hwagyeonsu-inspired, image-led site system rather than the older multi-section editorial homepage direction.

The homepage has been converted into a reusable company-standard template, subpages have been converted into gallery-first layouts, deployment is live on production, and lint/build are passing.

The remaining work is mainly visual refinement, operational content cleanup, form delivery verification, and possibly broader production tooling for repeating the same template across many future client sites.
