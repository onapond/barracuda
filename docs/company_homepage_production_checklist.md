# Company Homepage Production Checklist

Version: 2026-03-20
Status: Active

Purpose
- Checklist for producing new sites with the company-standard homepage template.
- Use this before launch for every new client site.

## 1. Content Input
- Confirm brand name in local language and English.
- Confirm final navigation labels.
- Confirm utility links are real or intentionally disabled.
- Confirm final logo image file, dimensions, and caption.
- Confirm hero image file and alt text.
- Confirm hero title is short enough for mobile.
- Confirm hero description fits within 2 to 3 lines on desktop.
- Confirm primary CTA destination and label.

## 2. Asset Preparation
- Save logo assets in `public/images/`.
- Save hero image in `public/images/`.
- Use production-ready file names.
- Avoid temporary names like `final-final-2.jpg`.
- Prefer consistent width and quality across client sites.

## 3. Template Wiring
- Update `companyHomepageTemplate` in `data/site-content.ts`.
- Do not change `components/company-homepage-template.tsx` unless the template itself is being improved for all sites.
- Keep homepage entry in `app/page.tsx` pointed at the template.

## 4. Mobile QA
- Check header at 390px width.
- Verify hamburger is visible and clickable.
- Verify utility links still fit on the top row.
- Verify centered logo block still feels visually dominant.
- Verify hero title does not wrap awkwardly.
- Verify CTA remains visible without crowding.

## 5. Desktop QA
- Check at 1440px width.
- Verify white header block has enough top and bottom breathing room.
- Verify nav line does not feel crowded.
- Verify hero image remains the dominant visual.
- Verify title and description stay centered and balanced.

## 6. Technical Verification
- Run `npm run lint`.
- Run `npm run build`.
- Confirm no unintended changes outside template config.

## 7. Launch Gate
- Confirm content approval from company.
- Confirm logo, hero image, and CTA are final.
- Confirm no placeholder links remain.
- Commit changes with a site-specific message.
- Deploy only after the template QA is complete.
