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
