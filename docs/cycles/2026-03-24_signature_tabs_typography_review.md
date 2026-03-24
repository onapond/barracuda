# Homepage Signature Tabs Typography Review
Date: 2026-03-24
Owner: Typography System Team
Status: Complete

Scope
- homepage signature tab area only

Files reviewed
- `app/page.tsx`
- `components/company-signature-tabs.tsx`
- `data/sites/barracuda.ts`

## Heading Surface Inventory

1. signature wrapper title
- source: `app/page.tsx`
- current copy contains manual `\n`
- rendering surface: `h2` in `components/company-signature-tabs.tsx`
- behavior after review: honors manual line breaks via `whitespace-pre-line`

2. signature tab button titles
- source: `data/sites/barracuda.ts`
- some titles contain manual `\n`
- rendering surface: tab button `p` in `components/company-signature-tabs.tsx`
- behavior before fix: did not explicitly honor manual line breaks
- behavior after fix: honors manual line breaks via `whitespace-pre-line`

3. signature active panel title
- source: `data/sites/barracuda.ts`
- same title strings as tab buttons
- rendering surface: active panel `h3` in `components/company-signature-tabs.tsx`
- behavior before fix: did not explicitly honor manual line breaks
- behavior after fix: honors manual line breaks via `whitespace-pre-line`

## Root Cause

- approved homepage signature copy contains intentional manual `\n`
- only the wrapper title surface had `whitespace-pre-line`
- tab button titles and active panel title used normal whitespace behavior
- result: one content convention, three different rendering treatments

## Decision

- keep approved copy unchanged
- standardize rendering to support manual line breaks across all three heading surfaces in the signature tab area

## Approved Rendering Rule

- wrapper title: `whitespace-pre-line`
- tab button titles: `whitespace-pre-line`
- active panel title: `whitespace-pre-line`

## Reasoning

- removing `\n` would be a copy change and would reopen approved homepage copy
- this issue can be corrected as typography/rendering alignment first
- the line-break policy remains local to the signature tab headings in this cycle

## Out of Scope

- changing signature tab copy
- removing manual `\n`
- changing non-signature homepage sections