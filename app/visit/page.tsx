import type { Metadata } from "next";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const visitPage = {
  hero: {
    title: "BARACUDA\n오시는 길",
    description: "방문 정보도 이미지와 핵심 정보 카드 위주로 단순하게 정리했습니다.",
    image: "/images/brend-hero.jpg.jpg",
    imageAlt: "Baracuda 방문 대표 이미지",
    ctaHref: "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C%2029%20%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%BB%A8%EB%B2%A4%EC%85%98%201%EC%B8%B5",
    ctaLabel: "길찾기",
  },
  gallery: [
    { src: "/images/brend-1.jpg", alt: "방문 이미지 1", title: "Arrival", description: "첫 방문의 분위기를 만드는 장면" },
    { src: "/images/cafe.jpg", alt: "방문 이미지 2", title: "Interior", description: "머무는 동안 가장 먼저 만나는 실내 분위기" },
    { src: "/images/2.jpg", alt: "방문 이미지 3", title: "View", description: "방문 경험과 연결되는 시선" },
  ],
  info: [
    { label: "주소", value: "서울특별시 용산구 이태원로 29, 로얄파크컨벤션 1층" },
    { label: "운영 시간", value: "매주 월요일 휴무 / 10:00-19:00" },
    { label: "연락처", value: "02-501-4527" },
    { label: "주차", value: "지상 및 지하 주차장 이용 가능" },
  ],
};

export const metadata: Metadata = {
  title: "Visit | Baracuda",
  description: "바라쿠다 방문 정보와 공간 이미지를 간결하게 보여주는 페이지입니다.",
};

export default function VisitPage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...visitPage.hero} />

      <CompanyGallerySection
        eyebrow="Visit Mood"
        title="방문 전에도\n분위기를 먼저 느끼도록"
        description="위치 안내 페이지도 정보만 나열하지 않고, 공간의 분위기가 먼저 읽히도록 구성했습니다."
        images={visitPage.gallery}
        columns={3}
      />

      <SectionWrapper className="bg-[var(--color-surface)]">
        <Container>
          <div className="border-b border-[var(--color-line)] pb-8">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">Visit Info</p>
            <h2 className="mt-4 max-w-[12ch] font-heading text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] whitespace-pre-line sm:text-[3rem]">
              필요한 정보만\n빠르게 확인하세요
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {visitPage.info.map((item) => (
              <article key={item.label} className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">{item.label}</p>
                <p className="mt-4 text-sm leading-7">{item.value}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={visitPage.hero.ctaHref}>길찾기</Button>
            <Button href="https://www.instagram.com/baracuda.cafe" variant="ghost">인스타그램</Button>
          </div>
        </Container>
      </SectionWrapper>
    </CompanySiteShell>
  );
}
