# Homepage Signature Tabs Integration Notes
Date: 2026-03-24
Owner: Content Integration Team
Status: Complete

Scope
- homepage signature tab area only

Files changed
- `components/company-signature-tabs.tsx`

Files inspected but unchanged
- `app/page.tsx`
- `data/sites/barracuda.ts`

## Implementation Summary

- standardized heading rendering behavior across:
  - wrapper section title
  - tab button titles
  - active panel title
- applied `whitespace-pre-line` to the two signature-tab title surfaces that were missing it

## Copy-Lock Compliance

- no approved copy text changed
- no manual `\n` markers were removed
- no homepage non-signature section was edited

## Justification For Scope

- all required rendering changes were contained within `components/company-signature-tabs.tsx`
- `app/page.tsx` and `data/sites/barracuda.ts` did not require modification because the issue was inconsistent rendering, not missing data

## Residual Notes

- this fix standardizes how manual breaks render
- it does not judge whether the approved breaks are ideal copy; that remains a separate copy-review question if raised later