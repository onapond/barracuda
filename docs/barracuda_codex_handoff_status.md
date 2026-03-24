# Barracuda Codex Handoff Status
Version: 2026-03-24
Status: Active

Purpose
This document is the current handoff reference for the Barracuda website.
Use it before making further homepage, subpage, or deployment changes.

Operating rule reference
- Default agent workflow is governed by `AGENTS.md` at the repo root.
- Barracuda work should run through the Orchestrator-first structure unless the user explicitly overrides it.
- The main agent reviews Orchestrator outputs, aligns judgment with the user, and then returns refined instructions to the Orchestrator.

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
- homepage is image-heavy and space-first
- Barracuda should read as a private-feeling place as well as a cafe
- copy quality is being refined in explicit route batches rather than broad silent rewrites

Important current reality:
- homepage approved copy remains active
- `/brand` and `/coffee` now use revised Batch 1 copy aligned to `특별한 카페` / `우리들만의 프라이빗 공간`
- homepage signature tab line-break rendering is now consistent across all signature heading surfaces

---

## 2. Active Rules

These rules should be treated as current unless the user explicitly changes them.

### Workflow rules
- Run substantive Barracuda work through the Orchestrator-first structure.
- Keep approval boundaries explicit.
- No missing gate can be treated as implicitly passed.

### Rendering / scope rules
- Prefer static pages for all public routes.
- Do not introduce server actions into public pages unless the user explicitly requests it.
- Do not turn public inquiry flows into operational systems unless explicitly requested.
- Keep implementations simple and low-risk.

### Copy / approval rules
- Homepage approved copy remains locked unless a specific line returns to KCE.
- Batch 1 approved route copy for `/brand` and `/coffee` remains locked within the approved integration map.
- Batch 2 is not yet open.
- Image `alt`, `title`, and image-level `description` fields for `/brand` and `/coffee` are still outside approved Batch 1 mapping.

### Signature-tab rule
- Approved homepage signature tab copy still contains manual `\n`.
- Rendering now supports those breaks consistently.
- Removing those manual breaks is a separate copy-return decision, not a rendering tweak.

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

Primary route content source:
- `data/sites/barracuda.ts`

Primary cycle docs from current session:
- `docs/cycles/2026-03-24_batch1_copy_approved_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_frontend_qa_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_orchestrator_post_integration_brand_coffee.md`
- `docs/cycles/2026-03-24_signature_tabs_responsive_qa.md`
- `docs/cycles/2026-03-24_signature_tabs_orchestrator_post_qa.md`

Main session handoff:
- `docs/barracuda_handoff_2026-03-24_batch1_and_signature_tabs.md`

---

## 4. Content / Asset Status

Current content status:
- homepage copy approval remains valid for homepage scope
- revised Batch 1 copy for `/brand` and `/coffee` is integrated and technically approved
- Batch 1 concept axis is now `특별한 카페` / `우리들만의 프라이빗 공간`
- `/brand` and `/coffee` image-related text fields remain unresolved outside the approved mapping
- Batch 2 routes `/space` and `/menu` are not yet opened for copy work
- Batch 3 routes `/store` and `/visit` are not yet opened for copy work

Current homepage visual / typography status:
- homepage signature tab `\n` rendering issue is resolved
- homepage signature tab responsive QA passes at `360 / 768 / 1024 / 1440`
- broader homepage visual sign-off is still open

---

## 5. Verification Status

Latest confirmed checks passed:
- `npm run lint`
- `npm run build`
- `npm run qa:homepage`

Interpretation:
- Batch 1 integrated fields for `/brand` and `/coffee` are technically approved
- homepage signature tab rendering fix is technically and responsively approved
- this does not authorize Batch 2 or release approval by itself

---

## 6. Recommended Next Work

Priority next steps:
1. open Batch 2 route copy cycle for `/space` and `/menu`
2. optionally open a small follow-up cycle for `/brand` and `/coffee` image text alignment if full consistency is needed
3. keep homepage work limited to clearly scoped issues rather than broad silent polish
4. complete broader homepage visual sign-off only when the user wants it explicitly

---

## 7. Handoff Summary

Barracuda now has:
- approved homepage copy for homepage scope
- approved and integrated Batch 1 route copy for `/brand` and `/coffee`
- resolved homepage signature tab line-break rendering behavior

The next meaningful work is Batch 2, not reopening already approved Batch 1 work by default.