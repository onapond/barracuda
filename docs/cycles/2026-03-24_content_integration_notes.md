# Content Integration Notes: Homepage Copy
Date: 2026-03-24
Scope: homepage only (`/`)
Status: Completed with scope note

## Approved inputs received
- `docs/cycles/2026-03-24_homepage_copy_approved.md`
- `docs/cycles/2026-03-24_orchestrator_copy_signoff.md`

## Files updated
- `data/sites/barracuda.ts`
- `app/page.tsx`

## Integration rule followed
- Approved homepage strings were integrated verbatim.
- No additional homepage copy was introduced.

## Scope note
- Homepage-approved strings were integrated into the homepage targets described in the sign-off artifact.
- The working tree also contains subpage copy edits in `data/sites/barracuda.ts`.
- Those subpage edits are outside this homepage approval scope and must not be treated as KCE-approved under this cycle.
- Subpage copy remains `revise` until it runs through its own Orchestrator + KCE workflow.

## Notes
- `app/page.tsx` still holds the signature section wrapper strings outside site config, so those two approved strings were updated there.
- Homepage-only content fields in `data/sites/barracuda.ts` were aligned to the KCE-approved exact strings.

## Verification run
- `npm run lint`
- `npm run qa:homepage`

## Verification result
- `npm run lint`: pass
- `npm run qa:homepage`: pass
