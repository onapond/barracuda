# Barracuda Planning Matrix Cycle 1
Version: 2026-03-17

Purpose
This is the first Planning Team deliverable under the orchestrated agent model.
It defines what to keep, compress, and remove before copy rewriting begins.

Scope
- `/`
- `/coffee`
- `/store`
- `/visit`

Planning objective
- Reduce text volume.
- Make Barracuda legible as a brand within a few seconds.
- Stop each page from repeating the same message in multiple sections.
- Prepare shorter copy that can support more disciplined Korean typography.

Shared planning rule
- Every page needs one primary message.
- Every section must either prove that message or lead to the CTA.
- If a section repeats the page premise, it should be compressed or removed.

---

## `/`

Page objective
- Introduce Barracuda as a calm, roastery-backed, spatial brand.

Primary message
- Barracuda is a brand built around coffee, space, and atmosphere.

Secondary support message
- Visitors can move from brand understanding to coffee or visit information quickly.

Keep
- hero
- brand section
- coffee section
- space section
- visit section

Compress
- hero body
  - reduce to one short brand statement
- brand description
  - keep one clear line instead of layered explanation
- coffee description
  - keep only the credibility signal and one future-facing note
- space description
  - keep only the spatial differentiator
- visit description
  - reduce to practical visit framing

Remove
- redundant abstract language that repeats "coffee + space + experience"
- any sentence that explains Barracuda as more than a cafe in a second or third variation
- low-signal supporting phrases that do not change user understanding

CTA
- primary: visit
- secondary: coffee

Planning note
- The homepage should not try to fully explain all subpages.
- It should act as a sharp brand index, not a long editorial essay.

---

## `/coffee`

Page objective
- Build trust in Barracuda coffee with a short, brand-specific story.

Primary message
- Barracuda coffee is grounded in roastery credibility and prepared with a clear taste direction.

Secondary support message
- CNC Tech supports the roasting foundation, but the page remains Barracuda-first.

Keep
- hero
- one intro block
- one roastery credibility block
- one taste/philosophy block
- one bean preview block
- final CTA block

Compress
- intro section
  - one short explanation only
- roastery intro
  - one proof paragraph plus 2 to 3 proof points
- roasting philosophy
  - one heading and one short paragraph
- bean preview cards
  - shorten descriptions to one line each
- final CTA section
  - keep title short and direct

Remove
- any block that restates coffee as "part of the Barracuda experience" after that point is already clear
- any over-explaining of extraction, balance, or mood if it does not introduce a new distinction
- excess card detail that belongs to a future product page

CTA
- primary: view bean preview or store preview
- secondary: visit or menu

Planning note
- This page should feel precise, not expansive.
- The current information architecture is directionally good, but it contains too many similar explanatory paragraphs.

---

## `/store`

Page objective
- Present store as a brand product preview, not a shopping flow.

Primary message
- The store page previews how Barracuda extends into products.

Secondary support message
- Coffee beans remain the strongest anchor within that product world.

Keep
- hero
- short intro
- category overview
- featured product
- store notice CTA

Compress
- hero copy
  - shorten to one clear preview statement
- intro block
  - reduce points to the minimum needed to explain preview-only status
- category descriptions
  - one sentence each
- featured product copy
  - keep product identity and 2 short supporting details
- store notice
  - simplify the explanation that checkout is not live

Remove
- repeated mentions that the store is not active yet
- excessive category explanation that feels speculative
- product-language that sounds like a full ecommerce catalog

CTA
- primary: coffee page
- secondary: visit page

Planning note
- The page should feel curated and restrained.
- It should preview a product system, not narrate future commerce at length.

---

## `/visit`

Page objective
- Deliver visit essentials with minimal reading friction.

Primary message
- Here is the core information needed before visiting Barracuda.

Secondary support message
- Some operating details are still provisional, but the page should remain useful and calm.

Keep
- hero
- visit details card
- one guide section
- one notice block
- one action block

Compress
- hero
  - shorten title and body into practical language
- info section intro
  - keep one short sentence only
- guide cards
  - shorten each card to one practical line
- notice block
  - reduce to a short list of provisional items
- action block
  - keep only the next-step actions

Remove
- repeated reminders that information is placeholder
- long explanations about future replacement of address, hours, or parking details
- any paragraph that talks about the page structure instead of visit action

CTA
- primary: directions
- secondary: Instagram
- tertiary: menu or space

Planning note
- This page must become the shortest page in the priority set.
- It is an operational page, not an editorial page.

---

## Cross-Page Removals

These patterns should be reduced across all four routes.

- repeating that Barracuda is "not just a cafe"
- repeating "coffee, space, and experience" without adding a sharper distinction
- long paragraphs that mainly restate mood
- CTA sections with titles longer than the value they deliver
- card descriptions that explain the obvious

---

## Copy Team Brief

Copy Team should use this matrix to rewrite the next version with these rules.

- Shorten every major paragraph first.
- Give each page one sentence that can stand as its core idea.
- Write Korean that survives narrow mobile widths without forced phrasing.
- Prefer phrases over explanatory blocks.
- Preserve brand specificity by staying calm, spatial, and precise.

---

## Design Team Brief

Design Team should assume the next copy pass will reduce text count significantly.

- Homepage and subpage heroes should support 1 short title plus 1 short paragraph.
- Long section intros should no longer be the default layout assumption.
- Cards should assume 1 title plus 1 short supporting line.
- The typography system should be based on shorter copy, not on accommodating dense paragraphs.

---

## Orchestrator Decision

Approved direction for Cycle 1
- Homepage becomes a sharper brand index.
- Coffee becomes a concise trust page.
- Store becomes a restrained preview page.
- Visit becomes a compact practical page.

Next handoff
1. Copy Team rewrites `/`, `/coffee`, `/store`, `/visit` using this matrix.
2. Design Team defines shared title/body/line-break constraints for the shortened copy.
3. Development Team applies the approved rewrite in `data/site-content.ts` and shared components.
