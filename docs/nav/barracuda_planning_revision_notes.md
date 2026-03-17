# Barracuda Planning Revision Notes
Version: 1.0
Date: 2026-03-17

Purpose
This document summarizes planning corrections discovered during implementation of the Barracuda website.
It should be shared with the original planner so future PRDs follow the actual build and deployment rules already established in the project.

This document takes precedence for future page planning unless the implementation rules are explicitly changed by the user.

---

## 1. Why This Revision Is Needed

During implementation, some PRD assumptions conflicted with the actual project rules and deployment stability requirements.

Main examples:
- server actions introduced unnecessary runtime risk
- dynamic behavior caused deployment instability on `/space`
- form submission logic was over-specified for MVP
- build/deploy expectations were sometimes too backend-oriented for a static-first website

As a result, the project direction is now explicitly corrected to:

- static-first pages
- simple implementation
- minimal client interaction only when needed
- no server actions for current MVP scope
- local build first, Vercel deploy only

---

## 2. Final Operational Rules

These are now the active implementation rules for Barracuda.

### 2.1 Rendering Rule
- Prefer static pages for all public routes.
- Avoid dynamic rendering unless the user explicitly asks for it.
- Avoid server-side runtime requirements for ordinary content pages.

### 2.2 Form Rule
- Do not use server actions for MVP forms.
- Do not connect forms to Supabase, API routes, email senders, or databases unless explicitly requested later.
- For now, forms should be implemented as simple UI-level request forms.
- Submit behavior should remain lightweight, such as local success-state feedback only.

### 2.3 Complexity Rule
- Keep implementation simple.
- Avoid building systems when a static layout communicates the same intent.
- Avoid over-architecting menu ordering, space inquiry, reservation, or store flows in MVP.

### 2.4 Deployment Rule
- Build must always happen locally.
- Vercel is for deployment only.
- Preferred flow:
  1. `npm run lint`
  2. `npm run build`
  3. `vercel build --prod`
  4. `vercel deploy --prebuilt --prod --yes --archive=tgz`
- Do not rely on Vercel remote build as the default workflow.

### 2.5 Content Rule
- PRDs should assume placeholder content is acceptable until real copy, address, hours, contact info, and images are provided.
- PRDs must not assume finalized business information already exists unless provided.

---

## 3. PRD Writing Rules Going Forward

Future PRDs should follow these rules.

### 3.1 Public Website Pages
For pages such as:
- `/brand`
- `/coffee`
- `/space`
- `/menu`
- `/store`
- `/visit`

PRDs should describe:
- page goal
- section order
- tone and visual direction
- content blocks
- CTA placement
- placeholder-acceptable fields

PRDs should avoid prescribing:
- backend workflows
- database storage
- admin logic
- submission pipelines
- complex interactivity
- authenticated experiences

### 3.2 Forms in MVP PRDs
If a page includes a form, PRDs should state this explicitly:

Recommended wording:
- "In MVP, this form is a static request UI only."
- "No server action, backend integration, payment flow, or database connection is required."
- "A simple success-state interaction is sufficient."

This wording should replace assumptions like:
- "send email"
- "connect to Supabase"
- "submit inquiry to backend"

unless the user has separately approved that scope.

### 3.3 Menu / Order PRDs
Menu-related PRDs must position the page as:
- editorial menu presentation
- brand-supporting structure
- request intake UI only

They must not drift into:
- delivery app UX
- point-of-sale logic
- checkout logic
- operational order management

### 3.4 Space / Rental PRDs
Space-related PRDs must position the page as:
- venue presentation
- atmosphere-led storytelling
- inquiry invitation

They must not imply:
- booking engine
- reservation management
- calendar logic
- live availability system

### 3.5 Store PRDs
Store-related PRDs must remain preview-only in current MVP unless the user explicitly changes scope.
Do not include:
- cart
- checkout
- payment
- shipping logic
- inventory logic

---

## 4. Specific Corrections to Existing Planning Style

The following planning habits should be corrected.

### Correction 1
Old tendency:
- mention email submission or Supabase connection inside MVP PRD

Corrected rule:
- treat this as future expansion only
- current MVP should stop at static UI and lightweight client feedback

### Correction 2
Old tendency:
- specify interaction models that create dynamic rendering requirements

Corrected rule:
- content pages should remain statically renderable whenever possible

### Correction 3
Old tendency:
- define forms as if they are operational systems

Corrected rule:
- define forms as presentation-layer inquiry/request surfaces only

### Correction 4
Old tendency:
- write PRDs as if real business data is already finalized

Corrected rule:
- PRDs must clearly identify placeholders versus confirmed operational data

### Correction 5
Old tendency:
- assume deployment can depend on Vercel build behavior

Corrected rule:
- implementation must remain compatible with local-first build verification

---

## 5. Recommended PRD Template Language

Future PRDs should reuse phrasing like this.

### For technical scope
- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Deployment: Vercel
- Implementation mode: static-first
- MVP constraint: no server actions, no backend integration unless explicitly requested

### For forms
- This form is for interface-level request capture only in MVP.
- No backend connection is required at this stage.
- A simple client-side success state is sufficient.

### For content
- Placeholder text and placeholder operational information are acceptable until final content is provided.
- Structure should be ready for future content replacement without major refactoring.

### For page intent
- This page should feel like a brand presentation, not an operational tool.

---

## 6. Immediate Instruction for Planner

From this point on, all new Barracuda PRDs should be written with these assumptions:
- static-first implementation
- simple, low-risk frontend structure
- no server actions
- no backend submission logic in MVP
- no hidden expansion of scope through form or booking language
- local build and prebuilt deployment compatibility

If a future page truly requires dynamic behavior, that requirement must be called out as an explicit scope change, not embedded by default inside the PRD.

---

## 7. Summary

Barracuda MVP is a brand website, not an application platform.

Therefore future planning should optimize for:
- clarity
- stability
- static delivery
- editorial structure
- easy content replacement

and should avoid introducing unnecessary runtime, backend, or workflow complexity into ordinary page PRDs.
