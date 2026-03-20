# Company Homepage Site Config Guide

Version: 2026-03-20
Status: Active

Purpose
- Fast guide for creating a new homepage from the standard template by editing data only.
- The active site now resolves through `data/site.ts`.

## Files To Edit
- New site config: `data/sites/<site-key>.ts`
- Active site pointer: `data/site.ts`

## Active Export
- `siteConfig`

## Workflow For A New Site
1. Copy `data/sites/barracuda.ts` to `data/sites/<new-site>.ts`.
2. Replace homepage logo, hero image, nav, and CTA.
3. Replace subpage metadata, hero content, galleries, action links, and form labels.
4. Update `data/site.ts` to export the new site config.
5. Replace or add image assets in `public/images/`.
6. Run `npm run lint`.
7. Run `npm run build`.
8. Capture desktop and mobile screenshots.
9. Get approval.
10. Commit and deploy.

## What Not To Change By Default
- `components/company-homepage-template.tsx`
- `components/company-site-header.tsx`
- `components/footer.tsx`
- page route files under `app/`

Reason
- These now render from the active `siteConfig`.
- New client work should begin from config duplication, not layout rewrites.

## When Template Changes Are Allowed
- Header proportions are wrong across multiple client sites.
- Mobile menu behavior is failing repeatedly.
- The company changes the standard layout direction.
- A global typography or spacing rule must be improved for all sites.
