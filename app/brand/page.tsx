import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { assetPaths } from "@/data/site-content";

const brandPage = {
  hero: {
    eyebrow: "브랜드",
    title: "BARACUDA 카페",
    description:
      "컨템포러리한 무드와 도심 녹지 뷰가 어우러지는 프리미엄 카페입니다.",
    image: "/images/brend.jpg",
    imageAlt: "Baracuda 브랜드 대표 이미지",
  },
  story: {
    title: "도심의 뷰와\n차분한 리듬이 머무는 곳",
    lead: "BARACUDA는 피스앤파크 컨벤션 1층에서 커피와 공간의 톤을 함께 전합니다.",
    body: [
      "탁 트인 창 너머의 녹지 뷰와 정제된 인테리어가 잠시 머무는 시간의 결을 만듭니다.",
      "스페셜티 커피와 티, 작은 모임과 비즈니스 미팅까지 자연스럽게 어울리는 장면을 준비합니다.",
    ],
  },
  storyBackground: {
    src: "/images/brend-hero.jpg.jpg",
    alt: "브랜드 문구 배경 이미지",
  },
  gallery: [
    { src: assetPaths.brand[0], alt: "브랜드 무드를 보여주는 첫 번째 이미지" },
    { src: assetPaths.brand[1], alt: "브랜드 무드를 보여주는 두 번째 이미지" },
    { src: assetPaths.brand[2], alt: "브랜드 무드를 보여주는 세 번째 이미지" },
  ],
};

export const metadata: Metadata = {
  title: "Brand | Baracuda",
  description: "BARACUDA의 브랜드 무드와 공간 경험을 간결하게 소개합니다.",
};

export default function BrandPage() {
  return (
    <SiteShell>
      <PageHero
        {...brandPage.hero}
        titleWidth="compact"
        descriptionWidth="compact"
        descriptionClassName="max-w-[36ch] sm:max-w-[40ch] lg:max-w-[44ch]"
      />
      <SectionWrapper className="relative overflow-hidden px-0 py-0">
        <div className="absolute inset-0">
          <Image
            src={brandPage.storyBackground.src}
            alt={brandPage.storyBackground.alt}
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative grid min-h-[520px] place-items-center py-16 sm:min-h-[620px] sm:py-20 lg:min-h-[760px] lg:py-24">
          <div className="mx-auto w-full max-w-[68rem] rounded-[1.9rem] border border-[rgba(255,255,255,0.58)] bg-[rgba(248,245,240,0.92)] px-8 py-10 shadow-[0_28px_100px_rgba(0,0,0,0.14)] backdrop-blur-[4px] sm:px-12 sm:py-14 lg:px-20 lg:py-18">
            <div className="mx-auto max-w-[60rem]">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Brand Story</p>
              <h2 className="mt-5 max-w-[12ch] whitespace-pre-line font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.16] tracking-[-0.035em] [word-break:keep-all]">
                {brandPage.story.title}
              </h2>
              <p className="mt-6 max-w-[32ch] text-base leading-[1.8] tracking-[-0.01em] text-[var(--color-muted)] sm:text-lg lg:text-[1.25rem]">
                {brandPage.story.lead}
              </p>
              <div className="mt-10 grid gap-6 border-t border-[rgba(43,34,24,0.1)] pt-8 lg:grid-cols-2 lg:gap-10 lg:pt-10">
                {brandPage.story.body.map((paragraph) => (
                  <p key={paragraph} className="max-w-[28ch] text-base leading-[1.9] tracking-[-0.01em] text-[var(--color-muted)] sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
      <SectionWrapper className="bg-[var(--color-surface)]">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {brandPage.gallery.map((image) => (
              <div key={image.src} className="relative min-h-[300px] overflow-hidden rounded-[2rem]">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </SiteShell>
  );
}

