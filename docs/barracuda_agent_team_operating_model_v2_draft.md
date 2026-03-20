# Barracuda Agent Team Operating Model v2 Draft
Version: 2026-03-19
Status: Draft

Purpose
This draft refines the current Barracuda agent team so strategy, copy, typography, implementation, and QA are handled by narrower specialists with clearer handoffs.

Why this version exists
- The current model is directionally correct, but some team responsibilities still overlap.
- Planning, copy, and design can blur into one another when outputs are not tightly scoped.
- Implementation and verification should not be owned by the same team without a separate QA check.
- Barracuda now needs a system that is easier to scale page by page without losing brand discipline.

Design principle of v2
- Narrow team scope before adding more process.
- Separate decision-making from production work.
- Separate system definition from QA validation.
- Separate content intent from UI implementation.
- Make every handoff observable through a required artifact.

Non-negotiable project rules
- Keep the public site static-first.
- Keep Korean-first user-facing copy.
- Do not add operational systems while solving copy problems.
- Do not solve weak copy by adding more sections.
- Copy changes should start from `data/site-content.ts`.
- Typography decisions must be validated at `360 / 768 / 1024 / 1440`.
- No team can approve its own output without a downstream review.

---

## 1. Team Structure

### Orchestrator
Role
- Own the full decision flow.
- Keep all teams aligned to one brand thesis.
- Approve, reject, or return work based on whole-site consistency.

Core mission
- Protect brand clarity across all routes.
- Keep scope tight.
- Prevent specialist teams from optimizing locally while harming the system globally.

Inputs
- route priority context
- outputs from all specialist teams
- breakpoint QA findings

Outputs
- approved page sequence
- approved route-level decisions
- approval or rejection notes
- implementation authorization

Authority
- can send work back to any team
- can freeze scope
- can block implementation until copy and typography are approved

Success criteria
- every route has one dominant job
- every team output is internally complete before handoff
- the site reads as one system instead of isolated page solutions

---

### Information Architecture Team
Role
- Define what each page must do and what content is necessary to support that job.

Mission
- Convert broad brand ambition into route-level information hierarchy.

Team owns
- page objective
- primary message
- secondary support message
- removable blocks
- CTA priority

Team does not own
- sentence writing
- tone exploration
- typography decisions
- component implementation

Required outputs per page
- page objective
- 5-second understanding target
- keep / compress / remove matrix
- proof block decision
- CTA decision

Success criteria
- the page job is obvious
- duplicate sections are removed before rewrite starts
- no route tries to explain everything at once

---

### Brand Voice Team
Role
- Define what makes Barracuda sound like Barracuda.

Mission
- Protect the brand voice so shorter copy becomes sharper, not more generic.

Team owns
- tone rules
- approved phrase patterns
- prohibited phrase list
- brand voice accept/reject judgment

Team does not own
- final page layout
- section removal decisions
- code implementation

Required outputs
- voice principles
- approved lexical patterns
- prohibited phrases list
- route-specific tone guidance when needed

Success criteria
- copy sounds specific to Barracuda
- generic cafe language is consistently rejected
- shorter copy still carries a premium and intentional tone

---

### UX Copy Team
Role
- Write the actual user-facing Korean copy for pages, sections, cards, and CTAs.

Mission
- Produce concise copy that serves page goals and survives mobile layouts.

Team owns
- hero title and body
- section headings
- section descriptions
- card copy
- CTA labels

Team does not own
- route structure
- brand voice policy
- typography rules
- implementation details

Required outputs
- one approved copy set per route
- one fallback variant for title-heavy areas
- CTA cleanup
- length-risk notes for mobile

Success criteria
- copy is shorter and clearer than the previous version
- each line supports page intent
- copy can render on narrow screens without awkward density

---

### Typography System Team
Role
- Define the reading system that all routes must follow.

Mission
- Turn approved copy into stable type, width, spacing, and line-break rules.

Team owns
- headline size ranges
- body width ranges
- line-height rules
- spacing rhythm
- manual `<br />` policy
- text density limits

Team does not own
- writing copy
- route-level strategy
- final implementation

Required outputs
- headline sizing matrix by breakpoint
- paragraph width matrix by breakpoint
- hero and section spacing rules
- line-break policy examples
- exception list for pages that need custom handling

Success criteria
- routes feel like one brand system
- headline breaks look intentional
- shortened copy does not create visual drift

---

### Responsive QA Team
Role
- Validate the typography system and content layout on actual breakpoints.

Mission
- Catch layout failures before implementation is considered complete.

Team owns
- breakpoint review at `360 / 768 / 1024 / 1440`
- awkward wrap detection
- density imbalance detection
- exception reporting

Team does not own
- authoring typography rules
- editing copy
- shipping code changes

Required outputs
- breakpoint QA notes
- issue severity labels
- route-by-route pass/fail report
- screenshots or capture references when available

Success criteria
- mobile preserves hierarchy
- no hero or section heading breaks unnaturally
- cards remain readable and visually balanced

---

### Content Integration Team
Role
- Implement approved content and system rules in code.

Mission
- Apply changes consistently with minimal architectural risk.

Team owns
- `data/site-content.ts` updates
- shared component alignment
- removal of page-level content drift
- implementation of approved line-break handling

Team does not own
- inventing copy
- changing route scope
- redefining typography rules during implementation

Required outputs
- code changes
- implementation notes
- unresolved code constraints

Success criteria
- approved content is reflected accurately in code
- shared components absorb common behavior
- one-off page styling drift is reduced

---

### Frontend QA Team
Role
- Verify that implementation matches approved content and typography decisions.

Mission
- Provide an independent delivery check before sign-off.

Team owns
- lint/build validation
- implementation regression review
- approved-vs-implemented comparison
- final technical pass/fail recommendation

Team does not own
- redefining copy
- redefining design rules
- approving its own fixes without review

Required outputs
- lint/build result
- mismatch report
- regression notes
- sign-off recommendation

Success criteria
- code passes technical verification
- implemented output matches approved artifacts
- known issues are explicit before release

---

## 2. Operating Workflow

### Phase 1. Route Definition
Owner
- Information Architecture Team

Goal
- define what each route must communicate and remove non-essential content before writing starts

Deliverable
- route objective and keep / compress / remove matrix

Gate
- Orchestrator approves route intent and content scope

### Phase 2. Voice Definition
Owner
- Brand Voice Team

Goal
- define the voice constraints the copy must obey

Deliverable
- route-ready tone rules and prohibited phrases list

Gate
- Orchestrator confirms the voice is distinct and usable

### Phase 3. Copy Production
Owner
- UX Copy Team

Goal
- write concise Korean-first copy for the approved route structure

Deliverable
- approved route copy and fallback title variants

Gate
- Orchestrator confirms the route is clearer and shorter than before

### Phase 4. Reading System Definition
Owner
- Typography System Team

Goal
- define how the approved copy should behave across breakpoints

Deliverable
- typography matrices, spacing rules, and line-break policy

Gate
- Orchestrator approves the type system before coding begins

### Phase 5. Code Integration
Owner
- Content Integration Team

Goal
- implement approved copy and system rules in shared code structures

Deliverable
- updated code and implementation notes

Gate
- Frontend QA Team starts validation only after implementation is complete

### Phase 6. Validation
Owners
- Responsive QA Team
- Frontend QA Team

Goal
- verify visual and technical correctness independently

Deliverable
- breakpoint QA report
- lint/build result
- implementation mismatch report

Gate
- Orchestrator issues final sign-off or sends work back

---

## 3. Responsibility Boundaries

If a team wants to cross boundaries:
- Information Architecture Team can identify tone risk, but cannot rewrite copy.
- Brand Voice Team can reject generic language, but cannot remove page sections.
- UX Copy Team can flag layout risk, but cannot define typography policy.
- Typography System Team can request shorter copy, but cannot rewrite it.
- Content Integration Team can report implementation constraints, but cannot rewrite approved strategy.
- QA teams can reject non-compliant output, but cannot silently redefine the approved artifact.

---

## 4. Required Artifacts

Every route should have these artifacts before final sign-off:
- route objective sheet
- keep / compress / remove matrix
- approved voice constraints
- approved route copy
- typography matrix and line-break rules
- implementation note
- breakpoint QA report
- lint/build result

If one artifact is missing:
- the route is not considered complete

---

## 5. Recommended Initial Rollout

Phase A
- split current Copy Team into `Brand Voice Team` and `UX Copy Team`

Reason
- this is the biggest quality gain with the smallest operational change

Phase B
- split current Design Team into `Typography System Team` and `Responsive QA Team`

Reason
- this separates rule creation from rule validation

Phase C
- split current Development Team into `Content Integration Team` and `Frontend QA Team`

Reason
- this prevents self-approval on implementation quality

---

## 6. Immediate Next Assignment

Orchestrator should run the next cycle in this order:
1. Information Architecture Team defines route jobs for `/`, `/coffee`, `/store`, `/visit`.
2. Brand Voice Team updates Barracuda voice rules and prohibited phrase list for those routes.
3. UX Copy Team writes short Korean-first copy for those routes.
4. Typography System Team defines shared reading constraints for those routes.
5. Content Integration Team implements the approved copy and type rules in `data/site-content.ts` and shared components.
6. Responsive QA Team and Frontend QA Team validate the result independently.

Expected outcome
- less overlap between teams
- faster approval decisions
- cleaner handoffs
- stronger brand consistency under shorter copy constraints
