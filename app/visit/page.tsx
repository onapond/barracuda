import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C%2029%20%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%BB%A8%EB%B2%A4%EC%85%98%201%EC%B8%B5";

const visitPage = {
  hero: {
    eyebrow: "방문",
    title: "오시는 길과 이용 정보",
    description: "주소, 주차, 대중교통 정보를 빠르게 정리했습니다.",
    image: "/images/brend-hero.jpg.jpg",
    imageAlt: "Baracuda 방문 경험을 보여주는 대표 이미지",
    ctaHref: "#visit-info",
    ctaLabel: "이용 정보 보기",
  },
  infoSection: {
    eyebrow: "안내",
    title: "먼저 확인하면 좋은 정보",
    description: "방문 전에 자주 찾는 내용만 모았습니다.",
  },
  infoCards: [
    {
      title: "주소 / 연락처",
      items: [
        { label: "주소", value: "서울특별시 용산구 이태원로 29, 로얄파크컨벤션 1층" },
        { label: "대표 전화", value: "02-501-4527" },
      ],
    },
    {
      title: "주차",
      items: [
        { label: "주차 가능", value: "지상 및 지하 주차장 이용 가능" },
        { label: "주차 문의", value: "02-709-3162~3" },
      ],
    },
    {
      title: "대중교통",
      items: [{ label: "도보 이동", value: "삼각지역과 남영역에서 도보 이동 가능합니다." }],
    },
  ],
  parkingHeading: {
    eyebrow: "주차",
    title: "주차 안내",
    description: "운영 시간과 요금을 구역별로 나눠 정리했습니다.",
  },
  parkingSections: [
    {
      title: "주차 구역",
      items: [
        "지상 주차장 24시간 운영, 총 278대",
        "지하 주차장 06:00-22:00 운영, B1/B2, 총 472대",
        "지하 주차장 이용 가능 차량 높이 2.2m 이하",
      ],
    },
    {
      title: "주차 요금",
      items: [
        "소형 2시간 이내 4,000원 / 추가 30분당 1,500원 / 일 최대 30,000원",
        "대형 2시간 이내 10,000원 / 추가 30분당 4,000원 / 일 최대 60,000원",
        "입차 후 30분 이내 무료 출차 가능",
      ],
    },
  ],
  transitHeading: {
    eyebrow: "대중교통",
    title: "도보 이동 안내",
  },
  transitLines: [
    { line: "6호선", station: "삼각지역 12번 출구", detail: "도보 3분" },
    { line: "4호선", station: "삼각지역 1번 출구", detail: "도보 5분" },
    { line: "1호선", station: "남영역 1번 출구", detail: "도보 7분" },
  ],
  ctaSection: {
    eyebrow: "바로가기",
    title: "필요한 링크만 모았습니다",
    description: "위치 확인과 메뉴, 공간 정보를 바로 열 수 있습니다.",
    actions: [
      { href: mapLink, label: "길찾기" },
      { href: "https://www.instagram.com/baracuda.cafe", label: "인스타그램" },
      { href: "/menu", label: "메뉴 보기" },
      { href: "/space", label: "공간 보기" },
    ],
  },
} as const;

export const metadata: Metadata = {
  title: "Visit | Baracuda",
  description: "바라쿠다의 위치, 주차, 연락처, 대중교통 정보를 정리한 방문 안내 페이지입니다.",
};

export default function VisitPage() {
  return (
    <SiteShell>
      <PageHero {...visitPage.hero} titleWidth="compact" descriptionWidth="compact" />

      <SectionWrapper id="visit-info">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={visitPage.infoSection.eyebrow}
              title={visitPage.infoSection.title}
              description={visitPage.infoSection.description}
              titleWidth="compact"
              descriptionWidth="compact"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={mapLink}>길찾기</Button>
              <Button href="tel:02-501-4527" variant="ghost">
                전화하기
              </Button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {visitPage.infoCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-7"
              >
                <p className="type-label text-[var(--color-muted)]">{card.title}</p>
                <div className="mt-6 space-y-5">
                  {card.items.map((item) => (
                    <div
                      key={item.label}
                      className="border-b border-[var(--color-line)] pb-4 last:border-b-0 last:pb-0"
                    >
                      <p className="type-label text-[var(--color-muted)]">{item.label}</p>
                      <p className="type-body-sm mt-2">{item.value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--color-surface)]">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <article className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-6 sm:p-8">
            <div className="border-b border-[var(--color-line)] pb-6">
              <SectionHeading
                eyebrow={visitPage.parkingHeading.eyebrow}
                title={visitPage.parkingHeading.title}
                description={visitPage.parkingHeading.description}
                titleWidth="compact"
                descriptionWidth="compact"
              />
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {visitPage.parkingSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[1.5rem] border border-[var(--color-line)] p-5"
                >
                  <h3 className="type-card-title type-wrap-balance">{section.title}</h3>
                  <div className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="type-body-sm rounded-[1.25rem] bg-[var(--color-surface)] px-4 py-3"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-6 sm:p-8">
            <SectionHeading eyebrow={visitPage.transitHeading.eyebrow} title={visitPage.transitHeading.title} titleWidth="compact" />
            <div className="mt-8 space-y-4">
              {visitPage.transitLines.map((item) => (
                <div
                  key={`${item.line}-${item.station}`}
                  className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="type-label text-[var(--color-muted)]">{item.line}</p>
                    <p className="type-body-sm text-[var(--color-muted)]">{item.detail}</p>
                  </div>
                  <p className="type-body-md mt-3">{item.station}</p>
                </div>
              ))}
            </div>
          </article>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow={visitPage.ctaSection.eyebrow}
                title={visitPage.ctaSection.title}
                description={visitPage.ctaSection.description}
                titleWidth="compact"
                descriptionWidth="compact"
              />
              <div className="flex flex-wrap gap-3">
                {visitPage.ctaSection.actions.map((action, index) => (
                  <Button
                    key={action.href}
                    href={action.href}
                    variant={index === 0 ? "secondary" : "ghost"}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </SiteShell>
  );
}

