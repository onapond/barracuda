# Barracuda Agent Team Operating Model Summary
Version: 2026-03-19
Status: Active Summary

Purpose
This is the one-page summary of the active Barracuda agent operating model.
Use this file when a fast alignment check is needed before a route cycle starts.

Source of truth
- detailed model: `docs/barracuda_agent_team_operating_model.md`

Core principle
- narrow team scope
- keep Korean-first copy
- reduce text before adding design treatment
- separate approval from production
- separate implementation from QA

Non-negotiable rules
- keep the public site static-first
- do not add operational systems while solving copy problems
- copy changes start from `data/site-content.ts`
- typography decisions must be checked at `360 / 768 / 1024 / 1440`
- no team approves its own output without downstream review

---

## 1. Team Map

### Orchestrator
- owns priority, approval, rejection, and scope control

### Information Architecture Team
- defines page job, content hierarchy, keep / compress / remove decisions, and CTA priority

### Brand Voice Team
- defines tone rules, approved language patterns, and prohibited phrases

### UX Copy Team
- writes hero, section, card, and CTA copy in concise Korean-first form

### Typography System Team
- defines headline width, body width, spacing rhythm, and line-break policy

### Responsive QA Team
- validates breakpoint behavior at `360 / 768 / 1024 / 1440`

### Content Integration Team
- implements approved copy and typography rules in code

### Frontend QA Team
- runs lint/build checks and verifies approved-vs-implemented output

---

## 2. Default Workflow

1. Information Architecture Team defines the route job.
2. Brand Voice Team defines voice constraints when needed.
3. UX Copy Team writes the route copy.
4. Typography System Team defines reading behavior.
5. Content Integration Team implements approved changes.
6. Responsive QA Team and Frontend QA Team validate independently.
7. Orchestrator signs off or returns the work.

---

## 3. Approval Gates

Route definition gate
- the page objective is clear
- keep / compress / remove matrix exists

Copy gate
- the route is shorter, clearer, and aligned to voice rules

Typography gate
- headline, paragraph, spacing, and line-break behavior are approved

Implementation gate
- approved inputs are implemented without unauthorized changes

Final QA gate
- breakpoint QA is complete
- lint/build passes
- mismatch report is clear

---

## 4. Priority Routes

First cycle priority
- `/`
- `/coffee`
- `/store`
- `/visit`

Reason
- these routes carry the heaviest brand, copy, and typography burden

---

## 5. Required Artifacts

Every route needs:
- route objective sheet
- keep / compress / remove matrix
- voice constraints when applicable
- approved route copy
- typography rules
- implementation note
- breakpoint QA report
- lint/build result

If one artifact is missing:
- the route is not complete

---

## 6. Default Route Ownership

- `/`: IA -> UX Copy -> Typography -> Integration
- `/brand`: IA -> Brand Voice -> UX Copy -> Typography
- `/coffee`: IA -> Brand Voice -> UX Copy -> Typography
- `/space`: IA -> UX Copy -> Integration -> Frontend QA
- `/menu`: IA -> UX Copy -> Integration -> Frontend QA
- `/store`: IA -> Brand Voice -> UX Copy -> Typography
- `/visit`: IA -> UX Copy -> Typography -> Integration

Interpretation rule
- editorial and brand-heavy routes involve Brand Voice earlier
- utility-heavy routes move faster from IA to UX Copy

---

## 7. Cycle Start Prompt

Before opening a cycle, Orchestrator should define:
- target routes
- reason for priority
- expected improvement
- approval conditions
