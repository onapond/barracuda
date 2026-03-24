# Barracuda Handoff
Date: 2026-03-24
Status: Active

## Purpose

This handoff records the homepage QA recovery outcome and defines the next cycle focus.
The next cycle should move away from typography recovery and into a full Korean copy rewrite pass.

---

## Session Summary

This session did four things:

1. recovered a committed homepage QA harness in the repo
2. reran homepage breakpoint QA at `360 / 768 / 1024 / 1440`
3. fixed homepage heading overflow so automated breakpoint QA now passes
4. clarified that the next major problem is copy quality, not layout breakage

---

## What Was Confirmed

### 1. Homepage breakpoint QA is now reproducible in-repo

A committed Playwright-based homepage QA harness now exists.

Files added or updated for that flow:
- `package.json`
- `playwright.config.ts`
- `tests/homepage-breakpoint.spec.ts`

Runnable command:
- `npm run qa:homepage`

Artifacts written to:
- `.qa-homepage/homepage-360.png`
- `.qa-homepage/homepage-768.png`
- `.qa-homepage/homepage-1024.png`
- `.qa-homepage/homepage-1440.png`
- `.qa-homepage/homepage-breakpoint-report.json`

### 2. Homepage breakpoint QA currently passes

Latest local verification in this session:
- `npm run qa:homepage`
- `npm run lint`

Result:
- pass

Important interpretation:
- the immediate homepage wrap / overflow failure is no longer the main blocker
- the next quality problem is content quality and Korean naturalness

### 3. The current copy quality is not release-final

Current homepage and site copy should not be treated as final approved Korean copy.

Main issue:
- much of the current Korean reads like translated English rather than native Korean writing
- sentence rhythm is awkward
- phrase choices are unnatural
- tone is trying to sound premium, but often lands as stiff or synthetic
- English-first naming patterns are still shaping Korean sentence structure too heavily

Important interpretation:
- this is no longer a minor polish issue
- the next cycle should be a full copy rewrite pass, not isolated line edits

---

## Current Code State

### Product-facing files changed in working tree

Homepage code and QA changes remain in:
- `app/page.tsx`
- `components/company-header.tsx`
- `components/company-homepage-template.tsx`
- `components/company-homepage-intro.tsx`
- `components/company-signature-tabs.tsx`
- `components/company-homepage-preview.tsx`
- `package.json`
- `package-lock.json`
- `playwright.config.ts`
- `tests/homepage-breakpoint.spec.ts`

Content source still central to the next cycle:
- `data/sites/barracuda.ts`

Docs changed or newly added:
- `docs/barracuda_codex_handoff_status.md`
- `docs/barracuda_handoff_2026-03-23_recovery_followup.md`
- `docs/barracuda_handoff_2026-03-24_copy_rewrite_next_cycle.md`

### Temporary / analysis artifacts still present

Runtime or temp browser folders:
- `.chrome-cdp/`
- `.chrome-shot/`
- `.chrome-qa-runtime/`
- `.chrome-qa-runtime-2/`

QA artifact folder intentionally produced in this cycle:
- `.qa-homepage/`

Other temp artifacts still present:
- `_newfile_test.txt`
- `_write_test.txt`
- `tmp-ref1*`
- `tmp-ref2*`

---

## Approval Status

### Approved

- homepage QA rerun path now exists in-repo
- homepage breakpoint QA currently passes
- local lint currently passes
- homepage overflow recovery is no longer the primary problem

### Revise

- homepage copy quality
- route copy quality in `data/sites/barracuda.ts`
- Korean naturalness across homepage and subpages
- English-first phrase patterns that were translated too literally

### Blocked

- final release approval should not be assumed from passing layout QA
- human visual sign-off is still open
- copy approval is not complete

---

## Next Cycle Definition

The next cycle should be a copy rewrite cycle, not a typography cycle.

Primary objective:
- rewrite Barracuda user-facing copy into natural Korean that sounds written in Korean first

Required interpretation:
- do not treat the current copy as near-final
- do not try to solve this with micro-edits
- do not preserve awkward English-origin sentence structure just because it already exists in config

Priority rewrite targets:
1. homepage hero
2. homepage intro
3. homepage signature tab title / description / active panel copy
4. homepage preview section titles and descriptions
5. footer statement if needed
6. then the remaining route copy in `data/sites/barracuda.ts`

Required quality bar:
- Korean should feel native, not translated
- phrases should be shorter and more decisive
- premium tone should come from restraint and clarity, not abstract wording
- section titles should survive mobile layouts without depending on awkward phrasing
- English labels may remain where strategically useful, but Korean body and headline writing should not sound like English syntax

Suggested team order for the next cycle:
1. Information Architecture Team confirms what each homepage section actually needs to say
2. Brand Voice Team defines what premium Barracuda Korean should and should not sound like
3. UX Copy Team rewrites homepage copy in Korean-first form
4. Typography System Team checks whether revised copy still fits the existing reading system
5. Content Integration Team updates `data/sites/barracuda.ts`
6. Responsive QA Team reruns homepage QA if line length changed materially

---

## Recommended Next Steps

1. Start a dedicated Barracuda Korean copy rewrite cycle.
2. Treat `data/sites/barracuda.ts` as the main source of truth for the rewrite.
3. Rewrite homepage copy first before touching secondary route refinements.
4. After homepage rewrite, rerun `npm run qa:homepage`.
5. Only after copy approval should final visual review and release approval continue.

---

## Handoff Close

The homepage is no longer blocked by missing QA tooling or by the earlier overflow failures.

The next major issue is copy quality.
Barracuda now needs a Korean-first rewrite pass because the current copy often reads like translated English rather than natural Korean.

The next session should begin from copy strategy and rewrite execution, not from layout recovery.
