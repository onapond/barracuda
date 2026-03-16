# Barracuda Execution Architecture

## 1. Planning Agent Output

### Product Goal
Build a premium, brand-first homepage for Barracuda that emphasizes roastery identity, spatial atmosphere, and future brand expansion rather than menu-style cafe information.

### MVP Scope
- Single homepage only
- Ordered sections: Header, Hero, Brand, Coffee, Space, Store, Visit, Footer
- Responsive navigation with mobile menu
- Placeholder business data and imagery
- Expandable component structure for future subpages

### Non-Goals
- No CMS, cart, login, reservations, blog, or admin
- No multi-language support
- No real store logic

### Experience Priorities
1. Strong first visual impression
2. Editorial composition with large imagery
3. Calm premium tone through spacing and typography
4. Mobile readability and clean section collapse
5. Maintainable structure for later page extraction

## 2. Design Agent Output

### Technical Architecture
- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Rendering model: Mostly Server Components
- Client Components: Header and mobile menu only

### Information Architecture
- Fixed homepage section IDs: `brand`, `coffee`, `space`, `store`, `visit`
- Header links smooth-scroll to section anchors
- Section wrappers keep consistent spacing and future portability

### Component Architecture
- `app/layout.tsx`: metadata and global shell
- `app/page.tsx`: homepage composition only
- `components/header.tsx`: sticky transparent-to-solid header
- `components/mobile-menu.tsx`: mobile navigation panel
- `components/hero-section.tsx`
- `components/section-heading.tsx`
- `components/brand-section.tsx`
- `components/coffee-section.tsx`
- `components/space-section.tsx`
- `components/store-section.tsx`
- `components/visit-section.tsx`
- `components/footer.tsx`
- `components/ui/button.tsx`
- `components/ui/container.tsx`
- `components/ui/section-wrapper.tsx`

### Styling System
- Neutral palette using CSS variables in `globals.css`
- Serif-forward display treatment through standard font stacks
- Large section paddings and restrained borders
- Subtle motion only: hover zoom, opacity transitions, header transition

### Content Strategy
- Use editable content arrays within components where repetition exists
- Keep placeholder copy close to spec wording
- Keep business placeholders centralized in the visit/footer sections

## 3. Implementation Agent Plan

### Phase 1
- Create minimal Next.js project files and dependency manifests
- Set up Tailwind and base global styles

### Phase 2
- Build reusable UI primitives and shared section heading
- Implement responsive header and mobile menu behavior

### Phase 3
- Implement homepage sections in required order
- Add local placeholder SVG assets under `public/images`

### Phase 4
- Add metadata, accessibility attributes, and smooth-scroll behavior
- Verify build and check for spec mismatches

## 4. Gap Agent Checklist

- Homepage only
- Correct section order
- Brand-first tone, not menu-first
- Space section visually emphasized
- No backend or commerce logic
- Mobile menu keyboard accessible
- Placeholder values easy to replace

## 5. Quality Agent Standards

- Prefer simple props and flat composition
- Avoid unnecessary client state outside navigation
- Keep sections independently portable to future routes
- Use semantic sections and consistent heading hierarchy

## 6. Bug Check Agent Validation

- `npm run build`
- `npm run lint`
- Manual check for missing assets and broken imports

## 7. Execution Status Update

### Completed
- Next.js 16 App Router project scaffold created
- Tailwind CSS v4 and base global styling configured
- Homepage implemented in required section order
- Reusable components split by section and shared UI primitives
- Local placeholder SVG assets added under `public/images`
- Sticky header and mobile menu implemented
- Basic SEO metadata and semantic section structure added
- Homepage copy converted from English to Korean

### Current Runtime Status
- Local development server available at `http://localhost:3000`
- Production build passes
- ESLint passes
- Homepage renders as a static route

## 8. Encoding Issue Log

### Problem
Korean copy initially appeared as `????` in some environments during iterative text replacement.

### Root Cause
- Windows shell/code page output caused misleading console rendering
- A prior replacement pass temporarily wrote corrupted placeholder text into files
- The dev server needed a full restart to reflect corrected source content consistently

### Resolution
- Korean copy was rewritten into source files in UTF-8
- Metadata shell was updated to use `lang="ko"`
- Explicit `<meta charSet="utf-8" />` was added in the root layout
- Dev server was restarted and HTML response was checked directly

### Verification
- Source files contain Korean text when read as UTF-8
- SSR HTML output includes Korean navigation labels such as `브랜드`, `커피`, `방문`
- `npm run build` passed after the encoding fix

## 9. Gap Review Result

### Spec Alignment
- Brand-first homepage direction preserved
- Section order matches the original build spec
- Space section remains visually emphasized
- Store section is preview-only and contains no commerce logic
- Visit section uses placeholder operational information only

### Known Tradeoffs
- Placeholder visuals are abstract SVGs, not real brand photography
- Korean copy is functional but still placeholder-grade, not final brand copywriting
- Footer copyright line remains in mixed language style by design choice, not by bug

## 10. Recommended Next Work

### Highest Priority
- Replace placeholder imagery with real Barracuda photography
- Replace placeholder address, hours, parking, and contact details with real business info
- Refine Korean copy tone to feel less literal and more brand-authored

### After That
- Tune typography and spacing against real content length
- Add OG metadata and favicon assets
- Prepare data extraction so content can later move into a simple content config


## 11. Session Closure Update

### Work Completed In This Session
- Barracuda homepage MVP was implemented in Next.js App Router, TypeScript, and Tailwind CSS
- Homepage sections were split into reusable components
- Placeholder SVG assets were added for all major sections
- Korean-first homepage copy was applied across the page structure
- A centralized content source was introduced at `data/site-content.ts`
- Business info, image paths, and section copy are now editable from one file

### Verified State
- `npm run lint` passes
- `npm run build` passes
- Dev server was used to verify rendered HTML structure
- Current architecture is ready for real content replacement without structural rewrites

### Remaining Work For Next Session
- Replace placeholder business information with real Barracuda operating data
- Replace placeholder imagery with real photography assets
- Refine Korean copy from placeholder-grade wording to final brand-quality wording
- Review visual balance after real content is inserted

### Primary File To Edit Next
- `data/site-content.ts`

### Recommended Next Starting Point
Start with these inputs before editing code again:
- exact address
- opening hours
- parking/contact/Instagram details
- final Korean brand copy
- real image files and filenames
