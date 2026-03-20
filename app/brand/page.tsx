import type { Metadata } from "next";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const brandPage = {
  hero: {
    title: "BARACUDA\n브랜드 소개",
    description: "도심의 뷰와 차분한 리듬, 그리고 커피가 한 장면으로 남는 바라쿠다의 분위기를 이미지 중심으로 소개합니다.",
    image: "/images/brend.jpg",
    imageAlt: "Baracuda 브랜드 대표 이미지",
  },
  galleryA: [
    { src: "/images/brend-1.jpg", alt: "바라쿠다 브랜드 이미지 1", title: "Signature Mood", description: "브랜드의 첫 인상을 만드는 장면" },
    { src: "/images/brend-2.jpg", alt: "바라쿠다 브랜드 이미지 2", title: "Calm Interior", description: "차분하게 머무는 실내의 결" },
    { src: "/images/brend-3.jpg", alt: "바라쿠다 브랜드 이미지 3", title: "Natural Flow", description: "커피와 대화가 자연스럽게 이어지는 흐름" },
  ],
  galleryB: [
    { src: "/images/brend-hero.jpg.jpg", alt: "바라쿠다 브랜드 배경 이미지", title: "Brand Story", description: "도심 속에서 조용한 감도와 경험을 쌓아가는 공간" },
    { src: "/images/brend-4.jpg", alt: "바라쿠다 브랜드 이미지 4", title: "Detail", description: "디테일에서 드러나는 브랜드 무드" },
  ],
};

export const metadata: Metadata = {
  title: "Brand | Baracuda",
  description: "바라쿠다 브랜드 무드와 공간 이미지를 중심으로 소개하는 페이지입니다.",
};

export default function BrandPage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...brandPage.hero} />

      <CompanyGallerySection
        eyebrow="Brand Gallery"
        title="브랜드의 첫 인상을\n이미지로 보여줍니다"
        description="설명보다 먼저 기억되는 장면과 분위기를 앞세웠습니다."
        images={brandPage.galleryA}
        columns={3}
      />

      <CompanyGallerySection
        eyebrow="Story"
        title="도심의 뷰와\n차분한 리듬"
        description="브랜드 소개 역시 텍스트보다 큰 비주얼과 짧은 문장으로 읽히도록 정리했습니다."
        images={brandPage.galleryB}
        columns={2}
        surface="tint"
      />

      <SectionWrapper>
        <Container>
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 text-center sm:p-10">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">Brand Note</p>
            <p className="mx-auto mt-5 max-w-[44rem] text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              바라쿠다는 커피를 마시는 장소를 넘어, 머무는 분위기와 장면이 함께 기억되는 브랜드를 지향합니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </CompanySiteShell>
  );
}
