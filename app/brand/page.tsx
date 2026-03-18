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
  story: [
    "BARACUDA는 피스앤파크 컨벤션 1층에 자리한 프리미엄 카페입니다. 탁 트인 유리창 너머의 도심 녹지 뷰와 세련된 인테리어가 차분한 여유를 만듭니다.",
    "스페셜 티와 커피, 감각적인 시그니처 메뉴는 물론 소중한 모임과 비즈니스 미팅에도 자연스럽게 어울립니다. 바쁜 일상 속 잠시 머무르기 좋은 공간입니다.",
  ],
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
        <Container className="relative py-20 sm:py-24 lg:py-32">
          <div className="flex min-h-[460px] items-center justify-center sm:min-h-[560px] lg:min-h-[680px]">
            <div className="w-full max-w-4xl rounded-[1.75rem] border border-[rgba(255,255,255,0.55)] bg-[rgba(248,245,240,0.9)] px-8 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-[3px] sm:px-12 sm:py-12 lg:px-16 lg:py-16">
              <div className="space-y-8">
                {brandPage.story.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-[1.95] tracking-[-0.01em] text-[var(--color-muted)] sm:text-xl">
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

