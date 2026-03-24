# Barracuda Orchestrator Command Package
Date: 2026-03-24
Cycle: Route Copy Quality Follow-up
Status: Active

This package defines the next Barracuda copy-quality cycle after homepage copy sign-off.

Primary interpretation
- The homepage Korean-original copy cycle is complete for homepage scope only.
- The core unresolved quality issue is now route copy quality outside homepage scope.
- Do not treat existing subpage copy edits in `data/sites/barracuda.ts` as approved.

Scope
- Primary: `/brand`, `/coffee`, `/space`, `/menu`, `/store`, `/visit`
- Reserved: homepage lines only if typography review proves a real copy change is required and KCE re-approval is needed

Non-negotiables
- Copy quality is the primary deliverable.
- Rewrite in Korean first. Do not preserve awkward English-origin structure for convenience.
- KCE keeps sentence-level veto authority.
- Content Integration Team may not paraphrase approved strings during code integration.
- No route is approved until artifacts and QA evidence match the documented scope.

Required sequence
1. Orchestrator confirms per-route job and order.
2. IA Team defines route objective and keep/compress/remove decisions.
3. Brand Voice Team defines route-ready Korean voice constraints.
4. UX Copy Team rewrites route copy from scratch in Korean.
5. KCE approves or rejects exact strings at the sentence level.
6. Orchestrator signs off route copy scope.
7. Content Integration Team updates `data/sites/barracuda.ts`.
8. Frontend QA validates approved-vs-implemented match.

Required outputs
- one artifact set per route or route group under `docs/cycles/`
- approved exact strings sheet
- reject log with reasons
- integration note with explicit scope
- QA recommendation that distinguishes `approved`, `revise`, and `blocked`

Immediate execution order
1. Audit the current subpage copy already present in `data/sites/barracuda.ts`.
2. Mark which lines can be retained as candidates and which should be discarded before formal rewrite.
3. Run the copy-quality cycle in this order:
   - `/brand`
   - `/coffee`
   - `/space`
   - `/menu`
   - `/store`
   - `/visit`
4. Keep homepage outside this cycle unless typography review forces a targeted KCE return.
