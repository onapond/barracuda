# Barracuda Content Integration Brief v1

## 1. Purpose

This document defines the next implementation phase for the Barracuda website.
The current homepage structure is already built.
The next step is to replace placeholder assets and placeholder copy with real brand content.

This is a content-application brief, not a rebuild brief.

---

## 2. Current Project State

The following are already implemented:

- Next.js App Router project setup
- responsive homepage
- header / hero / brand / coffee / space / store / visit / footer sections
- reusable component structure
- placeholder imagery
- Korean UI copy

This means the next phase should focus on **content replacement and refinement**, not structural redesign unless a clear issue is found.

---

## 3. Primary Goal

Turn the current prototype homepage into a more credible Barracuda brand homepage by applying:

1. real photography
2. real business information
3. refined Korean copywriting
4. final tone adjustments

---

## 4. Scope of This Phase

### In Scope

- replace placeholder images with real brand assets
- replace placeholder address / hours / contact / Instagram data
- improve Korean headlines and body copy
- review section-by-section tone consistency
- adjust spacing or typography only if needed after content insertion

### Out of Scope

- adding backend
- adding CMS
- adding shopping features
- adding multilingual support
- creating full subpages
- major information architecture redesign

---

## 5. Required Content Inputs

Before finalizing this phase, the following real content should be provided.

### Brand Information

- short brand description
- one-line positioning statement
- tone keywords if available
- whether Barracuda prefers more minimal tone or more emotional/editorial tone

### Business Information

- exact address
- opening hours
- closed days if any
- parking guidance
- phone number or contact channel
- Instagram URL
- Google Maps URL

### Photography / Visual Assets

- hero image
- brand section images
- coffee section image
- space section images
- store preview images
- logo asset if text wordmark will later be replaced

Preferred image direction:

- large, clean, editorial photography
- interior atmosphere
- coffee / roasting details
- materials / objects / spatial mood

---

## 6. Content Priorities by Section

### 6.1 Hero

Highest impact section.

Needs:

- strongest available brand image
- final Korean subheadline
- final primary CTA wording

Recommended focus:

- emotional first impression
- concise copy
- high visual confidence

### 6.2 Brand

Needs:

- real brand story summary
- 2-4 sentence Korean copy that feels authored, not generic

Recommended focus:

- what Barracuda is beyond a cafe
- how coffee, space, and brand relate

### 6.3 Coffee

Needs:

- real coffee positioning
- whether Barracuda wants to emphasize beans, roasting, brewing, signatures, or sourcing

Recommended focus:

- credibility
- restraint
- avoid technical overload

### 6.4 Space

Needs:

- strongest interior photographs
- if relevant, any positioning around gathering, event, or culture

Recommended focus:

- this remains the most important differentiator section
- keep visually dominant

### 6.5 Store

Needs:

- real product categories if available
- whether Barracuda currently sells beans, merchandise, or other branded objects

Recommended focus:

- preview only
- clean presentation

### 6.6 Visit

Needs:

- exact practical information
- final CTA destinations

Recommended focus:

- clean and useful
- no clutter

---

## 7. Korean Copywriting Direction

Current Korean copy is structurally usable, but should be refined into brand-quality writing.

### Tone Goals

- calm
- premium
- spatial
- modern
- restrained

### Avoid

- promotional language
- overly literal translation style
- crowded explanatory copy
- franchise or cafe-menu tone

### Prefer

- short sentences
- editorial rhythm
- high signal wording
- lines that feel intentional and curated

Example direction:

- less “information-heavy explanation”
- more “brand statement with atmosphere”

---

## 8. Implementation Guidance for Next Phase

When applying real content:

1. preserve the current component architecture
2. replace repeated hardcoded content with simple content objects if it improves maintainability
3. keep image usage optimized through `next/image`
4. re-check line breaks and spacing after inserting real Korean copy
5. keep mobile readability as a priority

If content becomes longer than expected:

- tighten copy first
- increase width only if necessary
- do not allow sections to become text-heavy

---

## 9. Suggested Content Data Shape

If the next pass introduces centralized content data, a lightweight structure like this is recommended:

```ts
export const siteContent = {
  hero: {
    eyebrow: "",
    title: "",
    description: "",
    primaryCta: "",
    secondaryCta: "",
    image: "",
  },
  brand: {
    eyebrow: "",
    title: "",
    description: "",
    images: [],
  },
  coffee: {
    eyebrow: "",
    title: "",
    description: "",
    features: [],
    image: "",
  },
  space: {
    eyebrow: "",
    title: "",
    description: "",
    items: [],
  },
  store: {
    eyebrow: "",
    title: "",
    description: "",
    items: [],
  },
  visit: {
    eyebrow: "",
    title: "",
    description: "",
    details: [],
    mapUrl: "",
    instagramUrl: "",
  },
};
```

This is optional, but recommended if content will keep changing.

---

## 10. Acceptance Criteria for This Phase

This phase is successful if:

- all placeholder business data is removed
- all visible placeholder imagery is replaced
- homepage Korean copy feels intentional and brand-appropriate
- no section feels generic or unfinished
- mobile layout still reads cleanly after real content insertion
- `npm run build` and `npm run lint` still pass

---

## 11. Recommended Execution Order

1. collect final text and business info
2. collect and optimize image assets
3. apply content to existing components
4. tune layout for final copy length
5. verify mobile and desktop
6. final QA pass

---

## 12. Immediate Next Task

The most practical next task is:

**Create a centralized content file and prepare the homepage so real Barracuda text and assets can be swapped in with minimal code edits.**

This should happen before repeated manual copy edits across multiple components.
