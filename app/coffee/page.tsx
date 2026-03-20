import type { Metadata } from "next";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const coffeePage = {
  hero: {
    title: "BARACUDA\n커피",
    description: "로스터리 기반의 이미지와 질감을 중심으로 바라쿠다 커피의 방향을 보여줍니다.",
    image: "/images/roastery.png",
    imageAlt: "Baracuda 로스터리 대표 이미지",
    ctaHref: "/menu",
    ctaLabel: "메뉴 보기",
  },
  galleryA: [
    { src: "/images/roastery.png", alt: "바라쿠다 로스터리 이미지", title: "Roastery", description: "기준이 되는 로스터리 기반" },
    { src: "/images/roasting.png", alt: "바라쿠다 로스팅 이미지", title: "Roasting", description: "과하지 않고 오래 남는 균형" },
    { src: "/images/brew.png", alt: "바라쿠다 브루잉 이미지", title: "Brewing", description: "질감과 온도를 세심하게 맞춘 한 잔" },
  ],
  galleryB: [
    { src: "/images/ame.png", alt: "아메리카노 이미지", title: "Americano", description: "기본이 가장 또렷하게 드러나는 한 잔" },
    { src: "/images/latte.webp", alt: "라떼 이미지", title: "Latte", description: "부드러운 질감과 균형이 중심이 되는 메뉴" },
    { src: "/images/ade.png", alt: "에이드 이미지", title: "Seasonal Drink", description: "커피 외 음료도 같은 톤으로 이어집니다" },
  ],
};

export const metadata: Metadata = {
  title: "Coffee | Baracuda",
  description: "바라쿠다 커피의 로스터리, 로스팅, 브루잉 이미지를 중심으로 소개합니다.",
};

export default function CoffeePage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...coffeePage.hero} />

      <CompanyGallerySection
        eyebrow="Coffee Process"
        title="원두에서 한 잔까지\n같은 톤으로 이어집니다"
        description="로스터리 기반의 신뢰를 설명보다 이미지와 짧은 문장으로 먼저 전달합니다."
        images={coffeePage.galleryA}
        columns={3}
      />

      <CompanyGallerySection
        eyebrow="Menu Mood"
        title="메뉴 역시\n브랜드의 분위기 안에 있습니다"
        description="단순한 메뉴 설명보다 실제 장면과 질감이 먼저 느껴지도록 구성했습니다."
        images={coffeePage.galleryB}
        columns={3}
        surface="tint"
      />

      <SectionWrapper>
        <Container>
          <div className="flex flex-wrap justify-center gap-4 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
            <Button href="/menu">메뉴 보기</Button>
            <Button href="/store" variant="ghost">스토어 보기</Button>
          </div>
        </Container>
      </SectionWrapper>
    </CompanySiteShell>
  );
}
