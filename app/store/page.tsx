import type { Metadata } from "next";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const storePage = {
  hero: {
    title: "BARACUDA\n스토어 프리뷰",
    description: "원두와 굿즈, 라이프스타일 제품 방향을 이미지 중심의 프리뷰 페이지로 정리했습니다.",
    image: "/images/apollo.png",
    imageAlt: "Baracuda 스토어 대표 이미지",
    ctaHref: "/coffee",
    ctaLabel: "커피 보기",
  },
  galleryA: [
    { src: "/images/apollo.png", alt: "원두 이미지", title: "Coffee Beans", description: "스토어의 중심이 되는 원두 셀렉션" },
    { src: "/images/goods.png", alt: "굿즈 이미지", title: "Goods", description: "브랜드의 무드를 이어가는 오브젝트" },
    { src: "/images/Parcera.png", alt: "라이프스타일 이미지", title: "Lifestyle", description: "일상 속으로 확장되는 제품 방향" },
  ],
  galleryB: [
    { src: "/images/latte.png", alt: "라떼 이미지", title: "Drink Objects", description: "음료와 제품 이미지의 연결감" },
    { src: "/images/ame.png", alt: "아메리카노 이미지", title: "Brand Daily", description: "데일리 무드로 이어지는 상품 감도" },
  ],
};

export const metadata: Metadata = {
  title: "Store | Baracuda",
  description: "바라쿠다 스토어 방향을 갤러리 중심 프리뷰로 보여주는 페이지입니다.",
};

export default function StorePage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...storePage.hero} />

      <CompanyGallerySection
        eyebrow="Collections"
        title="카테고리도\n먼저 장면으로 보여줍니다"
        description="스토어는 설명보다 제품 이미지와 오브젝트 분위기가 먼저 읽히도록 구성했습니다."
        images={storePage.galleryA}
        columns={3}
      />

      <CompanyGallerySection
        eyebrow="Preview"
        title="프리뷰 중심의\n제품 방향"
        description="현재는 결제보다 제품 감도와 카테고리 방향을 미리 보여주는 역할에 집중합니다."
        images={storePage.galleryB}
        columns={2}
        surface="tint"
      />

      <SectionWrapper>
        <Container>
          <div className="flex flex-wrap justify-center gap-4 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
            <Button href="/coffee">커피 보기</Button>
            <Button href="/visit" variant="ghost">방문 정보</Button>
          </div>
        </Container>
      </SectionWrapper>
    </CompanySiteShell>
  );
}
