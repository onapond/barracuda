# Batch 1 Content Integration Notes: `/brand`, `/coffee`
Date: 2026-03-24
Owner: Content Integration Team
Status: Complete

Scope
- `/brand`
- `/coffee`

Files changed
- `data/sites/barracuda.ts`

Approved inputs used
- `docs/cycles/2026-03-24_batch1_copy_approved_brand_coffee.md`
- `docs/cycles/2026-03-24_batch1_orchestrator_signoff_brand_coffee.md`

Copy-lock compliance
- all approved strings were integrated verbatim
- no approved string was softened, shortened, paraphrased, or expanded during integration
- no homepage or Batch 2/3 route field was edited in this step

## Exact Field Mapping Summary

### `/brand`
- `brand.metadata.description`
- `brand.hero.title`
- `brand.hero.description`
- `brand.gallerySections[0].eyebrow`
- `brand.gallerySections[0].title`
- `brand.gallerySections[0].description`
- `brand.gallerySections[1].eyebrow`
- `brand.gallerySections[1].title`
- `brand.gallerySections[1].description`
- `brand.noteSection.eyebrow`
- `brand.noteSection.body`

### `/coffee`
- `coffee.metadata.description`
- `coffee.hero.title`
- `coffee.hero.description`
- `coffee.gallerySections[0].eyebrow`
- `coffee.gallerySections[0].title`
- `coffee.gallerySections[0].description`
- `coffee.gallerySections[1].eyebrow`
- `coffee.gallerySections[1].title`
- `coffee.gallerySections[1].description`
- `coffee.menuShowcase.eyebrow`
- `coffee.menuShowcase.title`
- `coffee.menuShowcase.description`
- `coffee.actionLinks[0].label`
- `coffee.actionLinks[1].label`

## Excluded Unmapped Fields

The following field classes were intentionally left unchanged because they were not explicitly approved in the Batch 1 copy sheet:
- image `alt`
- image `title`
- image-level `description`
- route metadata `title`
- hero `imageAlt`
- menu showcase `featureImage.title`
- menu showcase `featureImage.description`

## Out-of-Config String Check

- `app/brand/page.tsx`: no out-of-config Batch 1 copy discovered
- `app/coffee/page.tsx`: no out-of-config Batch 1 copy discovered

## Unresolved Constraints

- image-related copy for `/brand` and `/coffee` remains unmapped and still requires a later route-level decision if the team wants full alignment
- this integration completes only the approved Batch 1 text fields, not all presentational copy on those routes
