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
    title: "커피와 공간을 한 결로 엮습니다.",
    description: "배러쿠다는 로스터리의 감도와 공간의 인상을 함께 전하는 브랜드입니다.",
    image: assetPaths.brand[0],
    imageAlt: "Barracuda 브랜드 무드를 보여주는 이미지",
  },
  intro: "배러쿠다는 맛과 분위기를 따로 나누지 않습니다.",
  values: [
    { title: "브랜드", body: "커피와 공간의 인상을 하나의 톤으로 만듭니다." },
    { title: "로스터리", body: "원두 선택과 로스팅 방향이 브랜드의 기준이 됩니다." },
    { title: "공간", body: "여백과 재료감, 동선으로 차분한 인상을 만듭니다." },
    { title: "문화", body: "작은 프로그램과 모임이 자연스럽게 이어질 수 있습니다." },
  ],
  gallery: [
    { src: assetPaths.brand[0], alt: "브랜드 무드를 보여주는 첫 번째 이미지" },
    { src: assetPaths.brand[1], alt: "브랜드 무드를 보여주는 두 번째 이미지" },
    { src: assetPaths.brand[2], alt: "브랜드 무드를 보여주는 세 번째 이미지" },
  ],
};

export const metadata: Metadata = {
  title: "Brand | Barracuda",
  description: "Barracuda의 브랜드 철학과 로스터리, 공간, 문화적 방향을 소개합니다.",
};

export default function BrandPage() {
  return (
    <SiteShell>
      <PageHero {...brandPage.hero} titleWidth="compact" descriptionWidth="compact" />
      <SectionWrapper>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <p className="max-w-[28ch] text-lg leading-[1.75] text-[var(--color-muted)]">{brandPage.intro}</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {brandPage.values.map((item) => (
                <article key={item.title} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
                  <h2 className="font-display text-3xl leading-tight">{item.title}</h2>
                  <p className="mt-4 max-w-[24ch] text-sm leading-7 text-[var(--color-muted)]">{item.body}</p>
                </article>
              ))}
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
