# Barracuda Web

Barracuda is currently implemented as a static-first brand website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Current Routes
- `/`
- `/brand`
- `/coffee`
- `/space`
- `/menu`
- `/store`
- `/visit`

## Working Rules
- Prefer static pages for all public routes.
- Do not use server actions for current MVP scope.
- Public forms currently submit directly to FormSubmit from the browser.
- Keep implementations simple and low-risk.
- User-facing copy is Korean-first.
- Navigation may remain English.
- Build locally. Use Vercel for deployment only.

## Form Delivery
- `/space` and `/menu` currently post directly to FormSubmit.
- Current recipient is `4everlll@naver.com`.
- If FormSubmit has not been activated before, the first live submission may trigger an activation email.
- The current setup is intentionally simple and should be replaced later if higher reliability is needed.

## Deployment Flow
```powershell
npm run lint
npm run build
vercel build --prod
vercel deploy --prebuilt --prod --yes --archive=tgz
```

## Source Of Truth
- Content: `data/site-content.ts`
- Images: `public/images/`
- Current handoff: `docs/barracuda_codex_handoff_status.md`
- Planning corrections: `docs/nav/barracuda_planning_revision_notes.md`

## Notes
- `/store` is still preview-only.
- Placeholder operating information still exists and should be replaced later.
- Do not assume older PRDs override the current rules above.
