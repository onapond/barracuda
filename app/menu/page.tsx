import type { Metadata } from "next";
import { MenuOrderForm } from "@/components/menu-order-form";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const menuPage = {
  hero: {
    title: "BARACUDA\n메뉴",
    description: "메뉴도 텍스트만 나열하지 않고, 음료와 디저트의 이미지를 중심으로 분위기 있게 정리했습니다.",
    image: "/images/menu.png",
    imageAlt: "Baracuda 메뉴 대표 이미지",
    ctaHref: "#menu-order",
    ctaLabel: "주문 문의",
  },
  galleryA: [
    { src: "/images/ba_menu.jpg", alt: "바라쿠다 메뉴 이미지", title: "Menu Board", description: "브랜드 톤 안에서 정리된 실제 메뉴 구성" },
    { src: "/images/ame.png", alt: "아메리카노 이미지", title: "Coffee", description: "기본 메뉴의 균형과 톤" },
    { src: "/images/latte.png", alt: "라떼 이미지", title: "Milk Menu", description: "질감과 분위기가 함께 느껴지는 메뉴" },
  ],
  galleryB: [
    { src: "/images/ade.png", alt: "에이드 이미지", title: "Seasonal Drink", description: "커피 외 메뉴도 같은 인상으로 이어집니다" },
    { src: "/images/book.jpg", alt: "디저트와 분위기 이미지", title: "Dessert Mood", description: "메뉴 페이지도 공간 분위기와 함께 읽히도록 구성" },
  ],
};

export const metadata: Metadata = {
  title: "Menu | Baracuda",
  description: "바라쿠다 메뉴와 음료 이미지를 갤러리 중심으로 보여주는 페이지입니다.",
};

export default function MenuPage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...menuPage.hero} />

      <CompanyGallerySection
        eyebrow="Menu Gallery"
        title="메뉴는\n분위기와 함께 보여줍니다"
        description="카테고리 나열보다 먼저 음료와 메뉴보드 이미지를 통해 인상을 전달합니다."
        images={menuPage.galleryA}
        columns={3}
      />

      <CompanyGallerySection
        eyebrow="More Mood"
        title="음료와 디저트도\n같은 무드로"
        description="메뉴 페이지 역시 공간과 브랜드 톤을 함께 느낄 수 있게 구성했습니다."
        images={menuPage.galleryB}
        columns={2}
        surface="tint"
      />

      <SectionWrapper id="menu-order">
        <Container>
          <MenuOrderForm />
        </Container>
      </SectionWrapper>
    </CompanySiteShell>
  );
}
