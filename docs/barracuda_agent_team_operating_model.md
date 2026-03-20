# Barracuda Agent Team Operating Model
Version: 2026-03-19
Status: Active

Purpose
This document defines the active Barracuda agent team model so strategy, copy, typography, implementation, and QA are handled through narrower specialist roles with explicit handoffs.

Why this model exists
- The site needs shorter Korean-first copy with stronger brand definition and tighter layout discipline.
- Team responsibilities should be narrow enough to reduce overlap and approval ambiguity.
- Implementation and verification should be separated so quality checks remain independent.
- Barracuda needs a system that can scale route by route without losing brand consistency.

Operating principle
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

---

## 7. Assignment Map

This section defines the default working assignment for the active Barracuda agent team.

### Orchestrator
Primary responsibility
- overall route priority
- cross-team conflict resolution
- final approval or rejection

Primary inputs
- `docs/barracuda_codex_handoff_status.md`
- outputs from all specialist teams

Approval gate owned
- route start approval
- copy approval
- typography approval
- final sign-off

---

### Information Architecture Team
Primary responsibility
- define route job and content hierarchy

Assigned routes first
- `/`
- `/coffee`
- `/store`
- `/visit`

Primary artifacts
- route objective sheet
- keep / compress / remove matrix
- CTA priority sheet

Handoff to
- Brand Voice Team
- UX Copy Team

---

### Brand Voice Team
Primary responsibility
- define brand-language constraints for approved routes

Assigned scope first
- homepage hero and section voice
- `/coffee` editorial tone
- `/store` product voice
- `/visit` utility copy tone guardrails

Primary artifacts
- voice principles
- approved phrase patterns
- prohibited phrase list

Handoff to
- UX Copy Team

---

### UX Copy Team
Primary responsibility
- write all user-facing Korean route copy

Assigned routes first
- `/`
- `/coffee`
- `/store`
- `/visit`

Primary artifacts
- hero copy set
- section headings
- section descriptions
- CTA labels
- fallback title variants

Source of truth to update
- `data/site-content.ts`

Handoff to
- Typography System Team
- Content Integration Team

---

### Typography System Team
Primary responsibility
- define shared reading constraints for approved copy

Assigned files first
- `components/page-hero.tsx`
- `components/section-heading.tsx`
- `app/globals.css`
- shared layout wrappers when needed

Primary artifacts
- headline sizing matrix
- paragraph width matrix
- line-break policy
- spacing rhythm rules

Handoff to
- Content Integration Team
- Responsive QA Team

---

### Responsive QA Team
Primary responsibility
- validate visual behavior at approved breakpoints

Assigned checks
- `360 / 768 / 1024 / 1440`
- hero wraps
- section heading wraps
- paragraph density
- card density consistency

Primary artifacts
- breakpoint QA report
- issue list with severity

Handoff to
- Orchestrator
- Content Integration Team when fixes are required

---

### Content Integration Team
Primary responsibility
- implement approved copy and typography rules in code

Assigned files first
- `data/site-content.ts`
- `components/page-hero.tsx`
- `components/section-heading.tsx`
- route section components

Primary artifacts
- code changes
- implementation notes
- unresolved constraint notes

Handoff to
- Frontend QA Team
- Responsive QA Team

---

### Frontend QA Team
Primary responsibility
- verify the build and confirm code matches approved artifacts

Assigned checks
- `npm run lint`
- `npm run build`
- approved-vs-implemented comparison
- regression check on shared typography behavior

Primary artifacts
- lint result
- build result
- mismatch report
- technical sign-off recommendation

Handoff to
- Orchestrator

---

## 8. Route Ownership Matrix

Default lead team by route:
- `/`: Information Architecture -> UX Copy -> Typography System -> Content Integration
- `/brand`: Information Architecture -> Brand Voice -> UX Copy -> Typography System
- `/coffee`: Information Architecture -> Brand Voice -> UX Copy -> Typography System
- `/space`: Information Architecture -> UX Copy -> Content Integration -> Frontend QA
- `/menu`: Information Architecture -> UX Copy -> Content Integration -> Frontend QA
- `/store`: Information Architecture -> Brand Voice -> UX Copy -> Typography System
- `/visit`: Information Architecture -> UX Copy -> Typography System -> Content Integration

Default interpretation rule:
- routes with stronger editorial or brand-definition burden should involve Brand Voice Team earlier
- routes with stronger utility burden can move from Information Architecture to UX Copy faster

---

## 9. Cycle Execution Checklist

Use this checklist at the start and end of every route cycle.

### Before a cycle starts
- Orchestrator selects target routes.
- Information Architecture Team confirms the page job for each selected route.
- Orchestrator confirms whether Brand Voice Team is required early for the route.
- Previous unresolved QA issues are reviewed before new copy work begins.
- The source of truth files are identified before implementation starts.

### Before copy is approved
- route objective is written in one sentence
- keep / compress / remove matrix exists
- prohibited phrase list is available for the route group
- hero and CTA intent are explicit
- no route is trying to explain more than one primary job

### Before typography is approved
- hero title length is stable on mobile
- section headings fit the intended reading rhythm
- paragraph density is consistent with route priority
- manual `<br />` usage follows the policy
- no one-off type behavior is introduced without an exception note

### Before implementation is approved
- approved copy exists
- approved typography matrix exists
- target files are identified
- implementation constraints are documented
- no team is inventing new content during code work

### Before final sign-off
- Responsive QA Team has completed breakpoint review
- Frontend QA Team has run lint/build verification
- approved-vs-implemented comparison is complete
- open issues are either fixed or explicitly accepted by Orchestrator
- final route status is marked `approved`, `revise`, or `blocked`

---

## 10. Team Task Templates

Use the following templates when opening a new cycle or assigning work to a specialist team.

### Orchestrator task template
Route scope
- `[route list]`

Reason for priority
- `[why this route group is next]`

Expected outcome
- `[what should be clearer, shorter, or more consistent after this cycle]`

Approval conditions
- `[what must be true before the route can move to the next phase]`

---

### Information Architecture Team template
Route
- `[route]`

Page objective
- `[one-sentence page job]`

5-second understanding target
- `[what a user must understand immediately]`

Keep
- `[sections to preserve]`

Compress
- `[sections to shrink]`

Remove
- `[sections to cut]`

CTA priority
- `[primary CTA / secondary CTA]`

---

### Brand Voice Team template
Route group
- `[route list]`

Voice goal
- `[how Barracuda should sound here]`

Approved language patterns
- `[phrases or tonal patterns to encourage]`

Prohibited language patterns
- `[phrases or patterns to reject]`

Tone risk notes
- `[where the route may drift into generic language]`

---

### UX Copy Team template
Route
- `[route]`

Hero title
- `[title]`

Hero body
- `[body]`

Section headings
- `[heading list]`

Section descriptions
- `[description list]`

CTA labels
- `[CTA list]`

Fallback variants
- `[optional alternate hero/title lines]`

---

### Typography System Team template
Route group
- `[route list]`

Headline sizing rule
- `[breakpoint rule]`

Paragraph width rule
- `[breakpoint rule]`

Line-break policy
- `[allowed / forbidden behavior]`

Spacing rhythm
- `[hero / section / card / CTA spacing rules]`

Exceptions
- `[pages or components requiring custom handling]`

---

### Responsive QA Team template
Route
- `[route]`

Breakpoint status
- `360: [pass/fail]`
- `768: [pass/fail]`
- `1024: [pass/fail]`
- `1440: [pass/fail]`

Issues
- `[issue list]`

Severity
- `[low / medium / high]`

Recommended return target
- `[Typography System Team / Content Integration Team / Orchestrator]`

---

### Content Integration Team template
Route group
- `[route list]`

Files to update
- `[file list]`

Approved inputs received
- `[copy / typography / exceptions]`

Implementation notes
- `[what changed in code]`

Constraints
- `[technical issues or follow-up items]`

---

### Frontend QA Team template
Route group
- `[route list]`

Lint result
- `[pass/fail]`

Build result
- `[pass/fail]`

Mismatch notes
- `[approved vs implemented differences]`

Regression notes
- `[shared component or route-level regressions]`

Recommendation
- `[approve / revise / block]`

---

## 11. Copy Clinic

This phase exists because route-level copy approval is too coarse when the real problem is awkward Korean phrasing, repeated meaning, and unstable line breaks.

### Goal
- reduce copy awkwardness before layout tuning begins
- identify filler before implementation
- prepare shorter alternatives that survive mobile wraps

### Required method
- every hero title must have 3 candidates
  - short version
  - balanced version
  - compressed fallback
- every hero body must be reduced into:
  - one-line meaning
  - two-sentence version
  - delete-if-possible candidate
- every section description must be tagged:
  - `brand`
  - `proof`
  - `cta`
  - `filler`

### Reject conditions
- the sentence repeats the same claim already made in the hero
- the sentence uses abstract emotional language without proof
- the sentence can be cut by 30 percent with no loss of meaning
- the sentence becomes awkward on mobile unless a forced break is added

### Required outputs
- candidate headline sheet
- compressed body sheet
- filler removal notes
- final accept/reject list per route

---

## 12. Korean Line-Break QA

This phase exists because Korean readability problems should not be treated as minor CSS polish.

### Goal
- make Korean copy read naturally at real breakpoints
- remove awkward wraps before final sign-off

### Required checks
- do not break immediately before or after a core phrase if it weakens meaning
- do not split headline rhythm into unnatural short fragments
- hero titles should stay within 2 lines on mobile unless explicitly approved
- first supporting paragraph should stay within 3 lines on mobile when possible
- if wrapping looks awkward, shorten copy first and adjust width second
- manual `<br />` is allowed only when approved in the typography exception list

### Reject conditions
- a headline depends on random browser wrapping to look correct
- a page needs repeated manual line breaks across multiple sections
- the same route uses different headline widths for no documented reason
- paragraph width is increased only to hide weak copy density

### Required outputs
- route-by-route break review
- approved exception list
- return notes for Copy Clinic or Typography System Team

---

## 13. Font Governance

This phase exists because typography consistency is currently weakened by page-level one-off classes and incomplete font-role rules.

### Goal
- create one font system that all routes inherit
- stop pages from defining their own headline behavior without review

### Font roles
- `display`
  - hero titles
  - major section titles
  - premium emphasis points
- `heading`
  - sub-section titles
  - cards requiring emphasis
- `body`
  - descriptions
  - detail text
  - utility and operational copy

### Governance rules
- font family decisions belong in global tokens, not route files
- weight, tracking, and line-height must be defined per role
- shared components should own title and body behavior before route files add overrides
- a route-level font exception requires an explicit note and QA review

### Required outputs
- typography token table
- route exception list
- one-off override audit
- consolidation plan for shared components
