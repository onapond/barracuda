import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const storePage = {
  hero: {
    eyebrow: "스토어",
    title: "바라쿠다 제품 프리뷰",
    description: "원두와 굿즈, 라이프스타일 제품 방향을 먼저 소개합니다.",
    image: "/images/apollo.png",
    imageAlt: "Baracuda 원두 대표 이미지",
    ctaHref: "#collections",
    ctaLabel: "카테고리 보기",
  },
  intro: {
    title: "구매보다 방향을 먼저 보여줍니다",
    description: "스토어가 담아갈 제품의 결을 미리 읽을 수 있도록 구성했습니다.",
    points: ["프리뷰 중심", "카테고리 소개", "결제 기능 없음"],
  },
  collectionsHeading: {
    eyebrow: "컬렉션",
    title: "카테고리 중심의 제품 구성",
    description: "판매 기능보다 제품 방향을 선명하게 보여주는 프리뷰에 집중합니다.",
  },
  collections: [
    { id: "coffee-beans", title: "원두", eyebrow: "원두", description: "로스터리 기반의 중심 셀렉션", note: "시그니처 셀렉션", items: ["Baracuda House Blend", "Seasonal Single Origin", "Filter Coffee Selection", "Espresso Blend"] },
    { id: "coffee-products", title: "커피 제품", eyebrow: "커피 제품", description: "커피 시간을 넓히는 구성", note: "데일리 제품", items: ["Drip Bag", "Coffee Bag", "Cold Brew Bottle", "Capsule Coffee"] },
    { id: "goods", title: "굿즈", eyebrow: "굿즈", description: "브랜드 무드를 담은 오브젝트", note: "브랜드 오브젝트", items: ["Mug", "Tumbler", "Glass", "Drip Set", "Baracuda Tote Bag"] },
    { id: "lifestyle", title: "라이프스타일", eyebrow: "라이프스타일", description: "일상으로 이어지는 제품", note: "주변 제품", items: ["Notebook", "Coffee Journal", "Coffee Tools"] },
  ],
  featuredProduct: {
    eyebrow: "추천 프리뷰",
    title: "Baracuda House Blend",
    description: "바라쿠다의 인상을 가장 또렷하게 보여주는 중심 블렌드입니다.",
    details: ["초콜릿과 고소함 중심", "밀크 음료와 자연스럽게 어울림", "스토어 확장의 기준 제품"],
    image: "/images/goods.png",
    imageAlt: "Baracuda 굿즈 대표 이미지",
  },
  ctaSection: {
    eyebrow: "안내",
    title: "현재는 프리뷰 중심으로 운영합니다",
    description: "장바구니와 결제 기능은 아직 열려 있지 않습니다.",
    actions: [{ href: "/coffee", label: "커피 보기" }, { href: "/visit", label: "방문 정보" }],
  },
  note: "Preview",
} as const;

export const metadata: Metadata = {
  title: "Store | Baracuda",
  description: "바라쿠다의 원두, 굿즈, 라이프스타일 제품 방향을 보여주는 프리뷰 페이지입니다.",
};

export default function StorePage() {
  return (
    <SiteShell>
      <PageHero {...storePage.hero} titleWidth="compact" descriptionWidth="compact" />

      <SectionWrapper>
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div>
            <SectionHeading title={storePage.intro.title} eyebrow="스토어 방향" description={storePage.intro.description} titleWidth="compact" descriptionWidth="compact" />
          </div>
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
            <span className="type-label rounded-full border border-[var(--color-line)] px-4 py-2 text-[var(--color-muted)]">{storePage.note}</span>
            <div className="mt-6 space-y-4">
              {storePage.intro.points.map((point) => (
                <div key={point} className="border-t border-[var(--color-line)] pt-4">
                  <p className="type-label text-[var(--color-foreground)]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="collections" className="bg-[var(--color-surface)]">
        <Container>
          <div className="flex flex-col gap-4 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={storePage.collectionsHeading.eyebrow}
              title={storePage.collectionsHeading.title}
              description={storePage.collectionsHeading.description}
              titleWidth="compact"
              descriptionWidth="compact"
            />
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {storePage.collections.map((collection, index) => (
              <article key={collection.id} id={collection.id} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="type-label text-[var(--color-muted)]">{collection.eyebrow}</p>
                    <h3 className="type-card-title type-wrap-balance mt-3 sm:text-[2.25rem]">{collection.title}</h3>
                  </div>
                  <span className="font-display text-5xl leading-none text-[var(--color-line)]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="type-body-md mt-5 max-w-[28ch] text-[var(--color-muted)]">{collection.description}</p>
                <p className="type-label mt-4 text-[var(--color-foreground)]">{collection.note}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {collection.items.map((item) => (
                    <div key={item} className="type-label rounded-[1.25rem] border border-[var(--color-line)] px-4 py-4 text-[var(--color-foreground)]">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] sm:min-h-[420px]">
            <Image src={storePage.featuredProduct.image} alt={storePage.featuredProduct.imageAlt} fill className="object-cover" />
          </div>
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
            <SectionHeading
              eyebrow={storePage.featuredProduct.eyebrow}
              title={storePage.featuredProduct.title}
              description={storePage.featuredProduct.description}
              titleWidth="compact"
              descriptionWidth="compact"
            />
            <div className="mt-8 space-y-3">
              {storePage.featuredProduct.details.map((detail) => (
                <div key={detail} className="type-body-sm rounded-[1.25rem] border border-[var(--color-line)] px-4 py-4">
                  {detail}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <Container>
          <div className="rounded-[2.25rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow={storePage.ctaSection.eyebrow}
              title={storePage.ctaSection.title}
              description={storePage.ctaSection.description}
              titleWidth="compact"
              descriptionWidth="compact"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {storePage.ctaSection.actions.map((action) => (
                <Button key={action.href} href={action.href}>
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </SiteShell>
  );
}

