# Company Homepage Template

Version: 2026-03-20
Status: Active

Purpose
- Reusable company-standard homepage template based on the approved Hwagyeonsu-style structure.
- Intended for repeated rollout across many brand sites with content-only swaps.

Template structure
1. Large white header block
2. Utility links at top-right
3. Centered logo block
4. Horizontal navigation under the logo on desktop
5. Hamburger + utility links on mobile
6. Single full-width hero image
7. Centered hero copy and one primary CTA
8. Optional footer or downstream blocks after hero

Current implementation
- Template component: `components/company-homepage-template.tsx`
- Current Barracuda config: `companyHomepageTemplate` in `data/site-content.ts`
- Current homepage entry: `app/page.tsx`

Required content slots
- utility links
- primary navigation links
- logo image and caption
- hero image
- hero title
- hero description
- primary CTA

Reuse rule
- For new client sites, keep the layout component unchanged whenever possible.
- Replace only the `companyHomepageTemplate` data first.
- Add custom downstream sections only after the base header/hero structure is approved.

Mobile rules
- Left: hamburger menu
- Right: utility links
- Center: large logo block remains visually dominant
- Hero copy stays centered and condensed

Design rules
- White header background
- Large vertical logo presence
- Low-noise navigation
- One dominant hero image
- One dominant CTA only
- Do not turn the homepage into a dense section stack unless explicitly requested
