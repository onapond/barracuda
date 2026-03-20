import type { Metadata } from "next";
import { SpaceInquiryForm } from "@/components/space-inquiry-form";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const spacePage = {
  hero: {
    title: "BARACUDA\n공간",
    description: "카페, 모임, 행사, 브랜드 경험까지 하나의 분위기 안에서 이어지는 공간을 이미지 중심으로 보여줍니다.",
    image: "/images/cafe.jpg",
    imageAlt: "Baracuda 공간 대표 이미지",
    ctaHref: "#space-inquiry",
    ctaLabel: "공간 문의",
  },
  galleryA: [
    { src: "/images/cafe.jpg", alt: "바라쿠다 카페 공간 이미지", title: "Cafe", description: "일상적인 방문이 자연스럽게 이어지는 메인 공간" },
    { src: "/images/event.jpg", alt: "바라쿠다 이벤트 이미지", title: "Event", description: "작은 행사가 어울리는 장면" },
    { src: "/images/experience.jpg", alt: "바라쿠다 경험 이미지", title: "Experience", description: "브랜드 경험과 프로그램이 가능한 분위기" },
  ],
  galleryB: [
    { src: "/images/book.jpg", alt: "북클럽 이미지", title: "Book Club", description: "대화와 집중이 함께하는 시간" },
    { src: "/images/fation.jpg", alt: "브랜드 모임 이미지", title: "Brand Meeting", description: "정제된 무드로 이어지는 소개와 모임" },
    { src: "/images/showcase.jpg", alt: "쇼케이스 이미지", title: "Showcase", description: "브랜드나 제품을 조용히 보여주는 자리" },
  ],
  galleryC: [
    { src: "/images/1.jpg", alt: "바라쿠다 내부 갤러리 1" },
    { src: "/images/2.jpg", alt: "바라쿠다 내부 갤러리 2" },
    { src: "/images/3.jpg", alt: "바라쿠다 내부 갤러리 3" },
    { src: "/images/4.jpg", alt: "바라쿠다 내부 갤러리 4" },
    { src: "/images/5.jpg", alt: "바라쿠다 내부 갤러리 5" },
    { src: "/images/6.jpg", alt: "바라쿠다 내부 갤러리 6" },
  ],
};

export const metadata: Metadata = {
  title: "Space | Baracuda",
  description: "바라쿠다 공간의 분위기와 활용 장면을 갤러리 중심으로 보여주는 페이지입니다.",
};

export default function SpacePage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...spacePage.hero} />

      <CompanyGallerySection
        eyebrow="Main Space"
        title="공간의 기본 장면을\n먼저 보여줍니다"
        description="설명보다 먼저 공간의 결을 느낄 수 있게 대표 장면을 크게 배치했습니다."
        images={spacePage.galleryA}
        columns={3}
      />

      <CompanyGallerySection
        eyebrow="Use Cases"
        title="행사와 모임도\n같은 무드 안에서"
        description="프라이빗 모임, 북클럽, 쇼케이스 등 확장 가능한 장면을 함께 제시합니다."
        images={spacePage.galleryB}
        columns={3}
        surface="tint"
      />

      <CompanyGallerySection
        eyebrow="Full Gallery"
        title="이미지로 먼저 느끼는\n바라쿠다 공간"
        images={spacePage.galleryC}
        columns={3}
      />

      <SectionWrapper id="space-inquiry">
        <Container>
          <SpaceInquiryForm />
        </Container>
      </SectionWrapper>
    </CompanySiteShell>
  );
}
