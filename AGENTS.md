# Barracuda Agent Operating Rules

Status: Active

## Default Operating Structure

- All substantive work runs through the Orchestrator by default.
- The Orchestrator coordinates the specialist agent team and produces observable artifacts.
- The main agent does not bypass the Orchestrator as the default workflow.

## Main Agent Role

- Review the validity of the Orchestrator's team output against the current codebase, docs, and approval gates.
- Separate approved, provisional, revise, and blocked judgments clearly.
- Consolidate findings and disagreements with the user before issuing follow-up direction.
- Return the agreed decision and next command structure back to the Orchestrator.

## Required Sequence

1. The Orchestrator runs the agent-team workflow.
2. The main agent reviews the Orchestrator output.
3. The user and main agent align on judgment and next action.
4. The main agent sends the refined command structure back to the Orchestrator.

## Approval Rules

- No missing approval gate can be treated as implicitly passed.
- If required QA, validation, or artifact evidence is missing, the status must remain `revise` or `blocked`.
- Technical checks alone do not justify final approval when visual or downstream review gates are still open.
- Teams must not approve their own output without the downstream review defined in the operating model.

## Barracuda-Specific Interpretation

- Use the Barracuda agent-team operating model in `docs/barracuda_agent_team_operating_model.md`.
- Treat the Orchestrator as the owner of team execution and scope control.
- Treat the main agent as the reviewer, user-facing synthesizer, and re-instruction layer.
