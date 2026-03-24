# Orchestrator Copy Sign-off: Homepage (`/`)
Date: 2026-03-24
Status: Sign-off (copy only)

This document records Orchestrator sign-off for homepage copy only.
It does not approve typography, line breaks, responsive layout, or final visual release.

## Approved inputs (required evidence)
- IA sheet:
  - `docs/cycles/2026-03-24_homepage_ia_sheet.md`
- Brand voice rules:
  - `docs/cycles/2026-03-24_brand_voice_korean_rules.md`
- UX copy candidate pack:
  - `docs/cycles/2026-03-24_homepage_copy_candidates.md`
- KCE approvals and rejects (sentence-level):
  - `docs/cycles/2026-03-24_homepage_copy_approved.md`
  - `docs/cycles/2026-03-24_homepage_copy_rejects.md`

## Approved scope (homepage only)
The following homepage targets are approved for integration verbatim (no paraphrase):
- Hero: title, description, primary CTA label, image alt
- Intro (Space): eyebrow, title, description, CTA label, primary image alt
- Signature section header: eyebrow, title, description
- Signature tabs (4): per-tab title, description, CTA label, featured media alt (tab labels remain as category UI names)
- Previews (5): eyebrow, title, description, CTA label
- Footer (homepage-visible): statement, subline

Reserved decision (non-blocking for integration):
- Nav labels remain as category UI names (English) for this cycle.

## Deferred scope
- Any subpage copy (`/brand`, `/coffee`, `/space`, `/menu`, `/store`, `/visit`)
- Typography system changes, manual line-break policy changes, spacing rhythm changes
- Responsive QA and final visual sign-off

## Sign-off conditions (enforced)
- Content Integration Team may begin now.
- Integration must copy approved strings exactly. Any change, even minor, must return to KCE for re-approval.
- Do not introduce new copy outside the approved sheet.
- Typography/Responsive QA work remains post-integration only.

## Next execution command (integration only)
Start Content Integration for homepage copy:
- Update:
  - `data/sites/barracuda.ts`
  - `app/page.tsx` (only strings that remain outside site config)
- Produce:
  - `docs/cycles/2026-03-24_content_integration_notes.md`
- Verification after integration:
  - `npm run lint`
  - `npm run qa:homepage`

