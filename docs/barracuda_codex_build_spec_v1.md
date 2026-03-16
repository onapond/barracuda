# Barracuda Cafe Website — Codex Build Spec (v1)

## Document Purpose

This document is written for AI-assisted implementation in Codex.
The goal is to let Codex generate the first working version of the Barracuda Cafe website in a step-by-step manner without needing additional product clarification.

This is **not** a general marketing memo.
This is a **build-ready implementation spec**.

---

## 1. Project Summary

Barracuda is not a typical menu-first cafe website.

Barracuda should be presented as a:

- specialty coffee roastery brand
- lifestyle cafe space
- visually distinctive brand environment
- place that can later expand into event / culture / product storytelling

The website should feel closer to a **premium roastery brand landing page** than a small local cafe homepage.

Core brand keywords:

- Roastery
- Space
- Brand
- Experience
- Minimal
- Premium
- Modern

---

## 2. Build Goal

Build a modern, responsive, visually strong homepage for Barracuda Cafe.

The first implementation should prioritize:

1. strong first impression
2. large photography-based layout
3. clean premium typography
4. simple navigation
5. mobile responsiveness
6. easy future expansion into subpages

The MVP should focus on one excellent homepage first, while leaving room for future pages like Brand, Coffee, Space, Store, and Visit.

---

## 3. Recommended Tech Stack

Codex should build this as:

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**

If needed, use:

- `next/image`
- `lucide-react`

Do **not** add unnecessary backend functionality in v1.

Do **not** build CMS integration yet.

Do **not** add payment, cart, login, admin, or database in v1.

---

## 4. Build Scope

### Required in v1

- homepage only
- responsive header
- hero section
- brand section
- coffee section
- space section
- store section
- visit section
- footer

### Optional but recommended

- smooth scroll navigation
- sticky transparent header that becomes solid on scroll
- subtle hover effects
- fade-in / reveal animation on section entry
- Instagram link placeholder
- Google Maps external link placeholder

### Excluded from v1

- e-commerce
- reservation system
- event booking
- multilingual support
- blog
- admin tools

---

## 5. Site Positioning

Codex must treat the website as a **brand-first homepage**, not a menu board.

Wrong direction:

- crowded cafe menu page
- too many cards
- discount / event popup style
- franchise-like cafe UI
- food-delivery style layout

Correct direction:

- editorial layout
- luxury minimal composition
- photography-led landing page
- premium roastery / concept-store feeling

---

## 6. Visual Direction

### Overall Tone

The visual tone should be:

- minimal
- premium
- quiet
- spacious
- modern
- polished

### Color Palette

Use neutral colors only.

Recommended palette:

- background: off-white or white
- text: near-black
- secondary text: muted gray
- lines / borders: light gray

Avoid bright brand colors.

### Typography

Use a strong premium combination:

- headings: elegant serif or refined display serif feeling
- body: clean sans-serif

If external fonts are not added, use tasteful defaults with Tailwind classes that approximate premium editorial styling.

### Spacing

Use generous white space.
Do not compress sections.

### Imagery

The site should rely heavily on large imagery.
Use placeholder images for now, but structure the layout so real brand photography can be swapped later.

---

## 7. Information Architecture

### Main navigation

Use this top-level navigation:

- Brand
- Coffee
- Space
- Store
- Visit

Header left:

- BARRACUDA wordmark/logo text

Header right:

- navigation links
- mobile menu on small screens

Navigation behavior:

- on homepage, nav links should smooth-scroll to each section
- structure should be future-proof so links can later become separate pages

---

## 8. Page Structure

The homepage should follow this order:

1. Header
2. Hero
3. Brand
4. Coffee
5. Space
6. Store
7. Visit
8. Footer

This order is important.

Reason:

- Hero = emotional first impression
- Brand = identity
- Coffee = roastery credibility
- Space = physical experience
- Store = product extension
- Visit = conversion / practical action

---

## 9. Section-by-Section UI Specification

## 9.1 Header

### Purpose

Provide clean navigation without distracting from the hero image.

### Layout

Desktop:

- left: BARRACUDA logo text
- right: nav links

Mobile:

- left: logo text
- right: hamburger icon
- mobile menu should open as full-width dropdown or slide-down panel

### Behavior

- header initially overlays hero
- header text should contrast correctly on hero image
- after scrolling, header can become solid white with dark text

### Style Notes

- thin, elegant
- not too tall
- subtle transition on scroll

---

## 9.2 Hero Section

### Purpose

Create an immediate premium impression using the cafe space.

### Layout

Use full viewport height if possible.

Structure:

- full-width background image
- dark overlay optional if needed for legibility
- centered or lower-left text block
- primary CTA button

### Content

Headline:

`BARRACUDA`

Subheadline:

`Roastery & Cafe`

Supporting line:

`A specialty coffee space shaped by roasting, atmosphere, and experience.`

Primary CTA:

`Visit Barracuda`

Optional secondary CTA:

`Explore Coffee`

### Design Rules

- keep text minimal
- do not clutter with multiple buttons
- image must dominate
- section should feel cinematic

---

## 9.3 Brand Section

### Purpose

Communicate that Barracuda is more than a cafe.

### Layout

Two-column layout on desktop:

- left: text block
- right: stacked or grid imagery

Single-column on mobile.

### Content

Eyebrow label:

`Brand`

Headline:

`A space for coffee, culture, and experience.`

Body copy:

`Barracuda brings together specialty coffee, roastery craftsmanship, and a refined spatial experience. The brand should feel calm, modern, and intentionally curated.`

CTA text link or button:

`Read Story`

### Imagery Suggestions

Use placeholders for:

- barista moment
- roasting detail
- interior close-up

### Design Notes

- this section should establish tone and identity
- not too much text
- editorial composition preferred

---

## 9.4 Coffee Section

### Purpose

Show that Barracuda has genuine coffee / roastery credibility.

### Layout

Desktop:

- left image, right text or vice versa
- below text, two feature blocks or two CTA cards

Mobile:

- stacked layout

### Content

Eyebrow label:

`Coffee`

Headline:

`Specialty coffee roasted by Barracuda.`

Body copy:

`The coffee section should represent Barracuda as a roastery-backed brand, not only a cafe. Highlight beans, roasting, and brewing as future expandable areas.`

Feature items:

- `Beans`
- `Roasting`

Optional short descriptions:

- `Seasonal selections and signature profiles`
- `Roasting philosophy and process`

Optional CTA:

`Explore Coffee`

### Imagery Suggestions

- roasted bean bag
- brewing detail
- roasting process close-up

---

## 9.5 Space Section

### Purpose

Highlight Barracuda’s strongest differentiator: the physical space.

### Layout

This section should feel visual-first.

Recommended structure:

- section heading and intro text
- 3-column image grid on desktop
- stacked image cards on mobile

Possible card titles:

- `Cafe`
- `Event`
- `Experience`

### Content

Eyebrow label:

`Space`

Headline:

`A cafe space designed to be felt.`

Body copy:

`Barracuda is not only a place to drink coffee. It is a branded environment that can hold atmosphere, gathering, and future cultural programming.`

### Design Notes

- this section should feel immersive
- use image grid with varied heights if visually balanced
- avoid heavy text

---

## 9.6 Store Section

### Purpose

Introduce the idea that Barracuda can extend into products.

### Layout

Simple grid of 2–4 preview items.

Desktop:

- product card row or editorial card layout

Mobile:

- stacked cards or 2-column compact grid

### Content

Eyebrow label:

`Store`

Headline:

`Coffee beans, goods, and brand products.`

Body copy:

`This section is a lightweight preview of products and can expand later into a full store.`

Example items:

- Coffee Beans
- Goods
- Lifestyle Products

### Design Notes

- keep clean and minimal
- do not build real shopping logic
- this is a visual preview section only

---

## 9.7 Visit Section

### Purpose

Provide practical visit information and act as the main conversion section.

### Layout

Desktop:

- left: visit details
- right: map placeholder / map image / link card

Mobile:

- stacked layout

### Content

Eyebrow label:

`Visit`

Headline:

`Visit Barracuda`

Information blocks:

- Address
- Opening Hours
- Parking
- Contact
- Instagram

CTA buttons:

- `Get Directions`
- `Instagram`

Use placeholder values for now if exact info is unavailable.

### Design Notes

- must feel clean and useful
- avoid clutter
- this is the conversion / action section

---

## 9.8 Footer

### Content

Include:

- BARRACUDA
- short one-line brand statement
- address placeholder
- Instagram placeholder
- copyright

Suggested footer line:

`Barracuda Roastery & Cafe`

Suggested short statement:

`Specialty coffee, space, and brand experience.`

---

## 10. Responsive Behavior

The implementation must be fully responsive.

### Mobile Priorities

- hero text stays legible
- section spacing remains generous
- image grids collapse cleanly
- nav converts to hamburger menu
- buttons remain tap-friendly
- typography scales appropriately

### Tablet Behavior

- preserve strong image presence
- avoid overly narrow text columns

---

## 11. Component Architecture

Codex should structure the project into reusable components.

Recommended components:

- `Header`
- `MobileMenu`
- `HeroSection`
- `SectionHeading`
- `BrandSection`
- `CoffeeSection`
- `SpaceSection`
- `StoreSection`
- `VisitSection`
- `Footer`
- `Button`
- `Container`

If useful, create a `SectionWrapper` utility component.

---

## 12. File Structure Recommendation

Suggested file structure:

```txt
app/
  layout.tsx
  page.tsx
  globals.css

components/
  header.tsx
  mobile-menu.tsx
  hero-section.tsx
  section-heading.tsx
  brand-section.tsx
  coffee-section.tsx
  space-section.tsx
  store-section.tsx
  visit-section.tsx
  footer.tsx
  ui/
    button.tsx
    container.tsx

public/
  images/
    hero.jpg
    brand-1.jpg
    brand-2.jpg
    coffee-1.jpg
    coffee-2.jpg
    space-1.jpg
    space-2.jpg
    space-3.jpg
    store-1.jpg
    store-2.jpg
```

Codex may use placeholder images first if real images are not available.

---

## 13. Styling Requirements

Use Tailwind classes primarily.

Styling rules:

- max-width containers for readability
- large vertical padding per section
- strong typography hierarchy
- restrained button styling
- light borders only where helpful
- subtle hover interactions
- smooth transitions

Avoid:

- excessive shadows
- bright gradients
- noisy cards
- overly playful animations
- dashboard-style UI

---

## 14. Motion / Interaction Requirements

Motion should be subtle and premium.

Allowed:

- fade-in on section entry
- image zoom on hover
- nav underline or text opacity change
- button hover state

Avoid:

- flashy motion
- bouncing animation
- parallax overload
- complex carousels in v1

---

## 15. Accessibility Requirements

Codex should include:

- semantic HTML sections
- proper heading order
- alt text for all images
- visible focus states
- sufficient contrast
- keyboard-accessible mobile menu

---

## 16. SEO Basics for v1

Even though this is mainly a visual homepage, include basic SEO structure.

Required:

- page title
- meta description
- semantic headings
- descriptive alt attributes

Suggested metadata:

Title:
`Barracuda Roastery & Cafe`

Description:
`Barracuda is a specialty coffee roastery and cafe space built around coffee, atmosphere, and brand experience.`

---

## 17. Content Placeholders

Use these placeholder values where needed.

### Address
`Yongsan-gu, Seoul, South Korea`

### Opening Hours
`Mon–Sun / 10:00–22:00`

### Contact
`02-0000-0000`

### Instagram
`https://instagram.com/`

These should be easy to replace later.

---

## 18. Non-Functional Requirements

The page should:

- load fast
- use optimized images
- avoid large JS dependencies
- remain maintainable
- be easy to extend into subpages later

---

## 19. Future Expansion Plan

The codebase should be easy to expand into:

- `/brand`
- `/coffee`
- `/space`
- `/store`
- `/visit`
- `/events`
- `/beans`
- `/about`

Do not implement these now unless requested, but keep the architecture expansion-friendly.

---

## 20. Codex Execution Instructions

Use this document as the source of truth.

### Task 1
Create the full Next.js homepage based on this spec.

### Task 2
Split the homepage into reusable components.

### Task 3
Make the layout responsive for desktop, tablet, and mobile.

### Task 4
Use placeholder images and placeholder business data where exact assets are missing.

### Task 5
Make the final result feel like a premium specialty coffee roastery brand site.

### Important implementation note
The output should feel closer to **Momos / premium roastery brand / editorial landing page** than a generic cafe template.

---

## 21. Developer Prompt to Use with Codex

Use the following prompt with Codex after sharing this file:

```txt
Read this entire markdown spec and build the Barracuda Cafe homepage in Next.js with TypeScript and Tailwind CSS.
Follow the layout, section order, design direction, and component structure exactly.
Use reusable components.
Use placeholder images if needed.
The result should feel minimal, premium, editorial, and photography-driven.
Do not add unnecessary backend features.
```

---

## 22. Success Criteria

The build is successful if:

- the homepage feels premium and brand-led
- the hero is visually strong
- the space section feels important
- the coffee section supports roastery credibility
- the layout is clean on mobile
- the implementation is modular enough for future expansion

---

## 23. Final Positioning Reminder

Barracuda is not a normal cafe homepage.

The implementation should communicate:

- premium roastery identity
- spatial atmosphere
- visual brand experience

This must feel like a **brand homepage first** and a **cafe information site second**.
