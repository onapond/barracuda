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

## 코덱스 검토 우선순위

- Barracuda 운영 문서끼리 충돌할 경우 아래 우선순위를 따른다.
1. `AGENTS.md`
2. `docs/barracuda_agent_team_operating_model.md`
3. `docs/barracuda_codex_handoff_status.md` 같은 세션 handoff 문서
- 세션 handoff 문서는 운영 참고 문서이며, 상위 규칙 문서를 덮어쓰는 문서로 취급하지 않는다.

## 브랜드 표기 잠금

- `Barracuda` / `Baracuda` 표기는 자동으로 정규화하지 않는다.
- 코드, 메타데이터, 에셋, 문서 사이에서 브랜드 표기가 불일치할 경우, 일괄 수정 전에 반드시 사용자 확인을 받는다.
- 사용자가 정식 표기를 확정하면 아래 범위에 일관되게 적용한다.
- `metadata`
- 라우트 `title` / `description`
- `alt text`
- `form subject`
- 사용자 요청이 있을 때만 user-facing 문서

## 검토 경계

- 상태 판단 전에 제품 변경과 런타임/생성 산출물을 분리한다.
- 사용자가 별도 지시하지 않는 한 아래 항목은 제품 변경이 아닌 산출물로 취급한다.
- `.chrome-*`
- `.qa-*`
- `test-results/`
- `tmp-ref*`
- `docs/.pdca-status.json`, `docs/.bkit-memory.json` 같은 세션 상태 JSON

## 승인 게이트 원칙

- `build`, `lint` 통과는 기술 검증일 뿐 최종 승인으로 간주하지 않는다.
- 이미지, 타이포그래피, 줄바꿈, 시각 콘텐츠 변경은 Barracuda 운영 모델에서 요구하는 downstream review 산출물 없이는 최종 승인할 수 없다.
- 승인 산출물이 누락되면 상태는 `provisional`, `revise`, `blocked` 중 하나로 유지한다.

## 공용 타이포그래피 범위

- 공용 타이포그래피 또는 한국어 줄바꿈 변경은 승인 전에 모든 공용 헤딩 표면에서 검토해야 한다.
- 최소 공용 검토 범위:
- `components/page-hero.tsx`
- `components/section-heading.tsx`
- 관련 `components/company-*` 공용 텍스트 표면
- 한 컴포넌트에서의 국소 수정만으로 전역 타이포그래피 문제가 해결된 것으로 간주하지 않는다.
