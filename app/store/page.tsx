import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { assetPaths } from "@/data/site-content";

const storePage = {
  hero: {
    eyebrow: "스토어",
    title: "배러쿠다의 제품 세계를 미리 봅니다.",
    description: "원두와 굿즈, 라이프스타일 제품까지 브랜드의 방향을 간결하게 정리했습니다.",
    image: assetPaths.store[0],
    imageAlt: "Barracuda 스토어 제품 무드를 보여주는 이미지",
    ctaHref: "#collections",
    ctaLabel: "카테고리 보기",
  },
  intro: {
    title: "이 페이지는 판매보다 방향을 보여줍니다.",
    description: "아직은 구매 페이지가 아니라, 배러쿠다가 준비하는 제품 구성을 소개하는 프리뷰입니다.",
    points: ["프리뷰 중심", "카테고리 소개", "결제 기능 없음"],
  },
  collections: [
    { id: "coffee-beans", title: "원두", eyebrow: "Coffee Beans", description: "로스터리 기반의 대표 선택", note: "시그니처 셀렉션", items: ["Barracuda House Blend", "Seasonal Single Origin", "Filter Coffee Selection", "Espresso Blend"] },
    { id: "coffee-products", title: "커피 제품", eyebrow: "Coffee Products", description: "커피 시간을 넓히는 구성", note: "데일리 제품", items: ["Drip Bag", "Coffee Bag", "Cold Brew Bottle", "Capsule Coffee"] },
    { id: "goods", title: "굿즈", eyebrow: "Goods", description: "브랜드 무드를 담은 오브젝트", note: "브랜드 오브젝트", items: ["Mug", "Tumbler", "Glass", "Drip Set", "Barracuda Tote Bag"] },
    { id: "lifestyle", title: "라이프스타일 제품", eyebrow: "Lifestyle", description: "일상으로 이어지는 제품", note: "주변 제품", items: ["Notebook", "Coffee Journal", "Coffee Tools"] },
  ],
  featuredProduct: {
    eyebrow: "Featured Preview",
    title: "Barracuda House Blend",
    description: "배러쿠다의 톤을 가장 또렷하게 보여주는 중심 블렌드입니다.",
    details: ["초콜릿과 고소함 중심", "밀크 음료와 자연스럽게 어울림", "향후 스토어 확장의 기준 제품"],
    image: assetPaths.store[1],
    imageAlt: "Barracuda 하우스 블렌드를 상징하는 스토어 이미지",
  },
  ctaSection: {
    eyebrow: "Store Notice",
    title: "현재는 프리뷰 중심으로 운영합니다.",
    description: "장바구니와 결제 기능은 아직 열려 있지 않습니다.",
    actions: [{ href: "/coffee", label: "커피 보기" }, { href: "/visit", label: "방문 정보" }],
  },
  note: "미리보기",
};

export const metadata: Metadata = {
  title: "Store | Barracuda",
  description: "Barracuda의 원두, 굿즈, 라이프스타일 제품 방향을 보여주는 preview-only 스토어 페이지입니다.",
};

export default function StorePage() {
  return (
    <SiteShell>
      <PageHero {...storePage.hero} titleWidth="compact" descriptionWidth="compact" />
      <SectionWrapper><Container className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start"><div><p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Store Direction</p><h2 className="mt-4 max-w-[12ch] font-display text-[clamp(1.875rem,3vw,2.625rem)] font-medium leading-[1.28] tracking-[-0.02em] [word-break:keep-all]">{storePage.intro.title}</h2><p className="mt-6 max-w-[34ch] text-base leading-[1.75] tracking-[-0.01em] text-[var(--color-muted)] sm:text-lg">{storePage.intro.description}</p></div><div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6"><span className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{storePage.note}</span><div className="mt-6 space-y-4">{storePage.intro.points.map((point) => <div key={point} className="border-t border-[var(--color-line)] pt-4"><p className="text-sm uppercase tracking-[0.22em] text-[var(--color-foreground)]">{point}</p></div>)}</div></div></Container></SectionWrapper>
      <SectionWrapper id="collections" className="bg-[var(--color-surface)]"><Container><div className="flex flex-col gap-4 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Collections</p><h2 className="mt-4 max-w-[12ch] font-display text-[clamp(1.875rem,3vw,2.625rem)] font-medium leading-[1.28] tracking-[-0.02em] [word-break:keep-all]">카테고리 중심의 제품 구성</h2></div><p className="max-w-[34ch] text-sm leading-[1.75] tracking-[-0.01em] text-[var(--color-muted)] sm:text-right sm:text-base">판매 기능보다 제품 방향을 보여주는 프리뷰에 집중합니다.</p></div><div className="mt-10 grid gap-5 lg:grid-cols-2">{storePage.collections.map((collection, index) => <article key={collection.id} id={collection.id} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-6 sm:p-8"><div className="flex items-start justify-between gap-4"><div><p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">{collection.eyebrow}</p><h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{collection.title}</h3></div><span className="font-display text-5xl leading-none text-[var(--color-line)]">{String(index + 1).padStart(2, "0")}</span></div><p className="mt-5 max-w-[28ch] text-base leading-[1.75] tracking-[-0.01em] text-[var(--color-muted)]">{collection.description}</p><p className="mt-4 text-sm uppercase tracking-[0.22em] text-[var(--color-foreground)]">{collection.note}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{collection.items.map((item) => <div key={item} className="rounded-[1.25rem] border border-[var(--color-line)] px-4 py-4 text-sm uppercase tracking-[0.16em]">{item}</div>)}</div></article>)}</div></Container></SectionWrapper>
      <SectionWrapper><Container className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center"><div className="relative min-h-[320px] overflow-hidden rounded-[2rem] sm:min-h-[420px]"><Image src={storePage.featuredProduct.image} alt={storePage.featuredProduct.imageAlt} fill className="object-cover" /></div><div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10"><p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">{storePage.featuredProduct.eyebrow}</p><h2 className="mt-4 max-w-[12ch] font-display text-[clamp(1.875rem,3vw,2.625rem)] font-medium leading-[1.28] tracking-[-0.02em] [word-break:keep-all]">{storePage.featuredProduct.title}</h2><p className="mt-6 max-w-[34ch] text-base leading-[1.75] tracking-[-0.01em] text-[var(--color-muted)]">{storePage.featuredProduct.description}</p><div className="mt-8 space-y-3">{storePage.featuredProduct.details.map((detail) => <div key={detail} className="rounded-[1.25rem] border border-[var(--color-line)] px-4 py-4 text-sm leading-7">{detail}</div>)}</div></div></Container></SectionWrapper>
      <SectionWrapper className="pt-0"><Container><div className="rounded-[2.25rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10 lg:p-12"><p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">{storePage.ctaSection.eyebrow}</p><h2 className="mt-4 max-w-[12ch] font-display text-[clamp(1.875rem,3vw,2.625rem)] font-medium leading-[1.28] tracking-[-0.02em] [word-break:keep-all]">{storePage.ctaSection.title}</h2><p className="mt-6 max-w-[34ch] text-base leading-[1.75] tracking-[-0.01em] text-[var(--color-muted)]">{storePage.ctaSection.description}</p><div className="mt-8 flex flex-wrap gap-3">{storePage.ctaSection.actions.map((action) => <Button key={action.href} href={action.href}>{action.label}</Button>)}</div></div></Container></SectionWrapper>
    </SiteShell>
  );
}
