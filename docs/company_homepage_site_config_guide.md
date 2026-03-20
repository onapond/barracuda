# Company Homepage Site Config Guide

Version: 2026-03-20
Status: Active

Purpose
- Fast guide for creating a new homepage from the standard template by editing data only.

## File To Edit
- `data/site-content.ts`

## Required Object
- `companyHomepageTemplate`

## Fields
```ts
companyHomepageTemplate = {
  utilityLinks: [
    { href: "#", label: "로그인" },
    { href: "#", label: "회원가입" },
  ],
  navLinks: [
    { href: "/brand", label: "Brand" },
    { href: "/coffee", label: "Coffee" },
  ],
  logo: {
    src: "/images/logo-wordmark-gold.png",
    alt: "Brand wordmark logo",
    width: 1390,
    height: 338,
    caption: "B A R A C U D A",
  },
  hero: {
    image: "/images/hero.jpg",
    imageAlt: "Brand hero image",
    title: "글로벌 로스터리 카페\n바라쿠다",
    description: "브랜드 설명 문장",
    primaryCta: {
      href: "/visit",
      label: "방문 정보",
    },
  },
}
```

## What To Change First For A New Site
1. Replace logo asset.
2. Replace hero image.
3. Replace title and description.
4. Replace nav labels and links.
5. Replace CTA.
6. Replace utility links if the client actually uses them.

## What Not To Change By Default
- `components/company-homepage-template.tsx`
- `app/page.tsx`

Reason
- These are now the standard company shell.
- Client work should start from configuration, not layout rewrites.

## When Template Changes Are Allowed
- Header proportions are wrong across multiple client sites.
- Mobile menu behavior is failing repeatedly.
- The company changes the standard layout direction.
- A global typography or spacing rule must be improved for all sites.

## Recommended Workflow
1. Copy new brand assets into `public/images/`.
2. Update `companyHomepageTemplate`.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Capture desktop and mobile screenshots.
6. Get approval.
7. Commit and deploy.
