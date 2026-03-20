import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const coffeePage = {
  hero: {
    eyebrow: "커피",
    title: "바라쿠다 커피",
    description: "로스터리의 기준 위에 바라쿠다의 톤을 얹은 커피를 소개합니다.",
    image: "/images/roastery.png",
    imageAlt: "Baracuda 로스터리 대표 이미지",
    ctaHref: "#beans-preview",
    ctaLabel: "원두 미리 보기",
  },
  subtitle: "선명하고 차분한 한 잔.",
  intro: {
    title: "커피는 바라쿠다를 가장 먼저 보여줍니다",
    description: "첫 향과 마지막 인상이 같은 방향을 가리키도록 한 잔의 균형을 맞춥니다.",
  },
  roasteryIntro: {
    eyebrow: "CNC Tech 로스터리",
    title: "로스터리의 기준 위에서 준비합니다",
    description: "안정적인 로스팅 기반 위에 바라쿠다의 맛 방향을 더합니다.",
    points: ["로스터리 기반 운영", "스페셜티 중심", "일관된 균형"],
    externalHref: "https://cnctechlab.co.kr/",
    externalLabel: "CNC Tech 보기",
  },
  roastingPhilosophy: {
    eyebrow: "로스팅 방향",
    title: "선명함과 균형을 먼저 봅니다",
    description: "강한 자극보다 오래 남는 단맛과 깨끗한 마무리를 우선합니다.",
    pillars: ["선명한 향", "균형 있는 바디", "깔끔한 마무리"],
    image: { src: "/images/roasting.png", alt: "로스팅 방향을 보여주는 이미지" },
  },
  coffeeSelection: {
    eyebrow: "셀렉션",
    title: "바라쿠다의 인상을 만드는 원두 셀렉션",
    cards: [
      { title: "싱글 오리진", name: "에티오피아 구지", origin: "에티오피아", notes: ["복숭아", "플로럴", "허니"] },
      { title: "시즈널 커피", name: "콜롬비아 시즈널 로트", origin: "콜롬비아", notes: ["붉은 사과", "카라멜", "시트러스"] },
      { title: "시그니처 블렌드", name: "바라쿠다 하우스 블렌드", origin: "브라질 / 콜롬비아", notes: ["초콜릿", "고소함", "균형 잡힌 단맛"] },
    ],
  },
  brewingExperience: {
    eyebrow: "브루잉",
    title: "질감과 온도를 세심하게 맞춥니다",
    description: "편안하게 마시되 인상은 또렷하게 남도록 준비합니다.",
    image: { src: "/images/brew.png", alt: "브루잉 경험을 보여주는 이미지" },
  },
  beansPreview: {
    id: "beans-preview",
    eyebrow: "원두",
    title: "스토어로 이어질 원두를 먼저 소개합니다",
    items: [
      { title: "바라쿠다 하우스 블렌드", description: "에스프레소와 밀크 음료에 자연스럽게 어울리는 기준 블렌드" },
      { title: "시즈널 싱글 오리진", description: "시기마다 달라지는 밝고 깨끗한 시즌 셀렉션" },
      { title: "필터 커피 셀렉션", description: "느린 추출에 어울리는 여유로운 한 잔의 구성" },
    ],
    ctaHref: "/store",
    ctaLabel: "원두 보기",
  },
  ctaSection: {
    eyebrow: "다음으로 이어가기",
    title: "커피에서 다른 경험으로 이어가 보세요",
    actions: [
      { href: "/visit", label: "방문 정보" },
      { href: "/space", label: "공간 보기" },
      { href: "/menu", label: "메뉴 보기" },
    ],
  },
} as const;

export const metadata: Metadata = {
  title: "Coffee | Baracuda",
  description: "바라쿠다의 로스터리 기반 커피 철학과 원두, 로스팅, 브루잉 방향을 간결하게 소개합니다.",
};

export default function CoffeePage() {
  return (
    <SiteShell>
      <PageHero {...coffeePage.hero} titleWidth="compact" descriptionWidth="compact" />

      <SectionWrapper>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
            <div>
              <SectionHeading eyebrow="커피" title={coffeePage.intro.title} titleWidth="compact" />
            </div>
            <div>
              <p className="type-eyebrow text-[var(--color-muted)]">{coffeePage.subtitle}</p>
              <p className="type-body-lg mt-6 max-w-[34ch] text-[var(--color-muted)]">{coffeePage.intro.description}</p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--color-surface)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <SectionHeading
                eyebrow={coffeePage.roasteryIntro.eyebrow}
                title={coffeePage.roasteryIntro.title}
                description={coffeePage.roasteryIntro.description}
                titleWidth="compact"
                descriptionWidth="compact"
              />
              <Link
                href={coffeePage.roasteryIntro.externalHref}
                target="_blank"
                rel="noreferrer"
                className="type-label mt-8 inline-flex border-b border-current pb-1 text-[var(--color-foreground)] hover:opacity-60"
              >
                {coffeePage.roasteryIntro.externalLabel}
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {coffeePage.roasteryIntro.points.map((point) => (
                <article key={point} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-6">
                  <p className="type-card-title type-wrap-balance">{point}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={coffeePage.roastingPhilosophy.eyebrow}
                title={coffeePage.roastingPhilosophy.title}
                description={coffeePage.roastingPhilosophy.description}
                titleWidth="compact"
                descriptionWidth="compact"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {coffeePage.roastingPhilosophy.pillars.map((pillar) => (
                  <span key={pillar} className="type-label rounded-full border border-[var(--color-line)] px-4 py-2 text-[var(--color-muted)]">
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[340px] overflow-hidden rounded-[2rem]">
              <Image src={coffeePage.roastingPhilosophy.image.src} alt={coffeePage.roastingPhilosophy.image.alt} fill className="object-cover" />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--color-surface)]">
        <Container>
          <div className="border-b border-[var(--color-line)] pb-8">
            <SectionHeading eyebrow={coffeePage.coffeeSelection.eyebrow} title={coffeePage.coffeeSelection.title} titleWidth="compact" />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {coffeePage.coffeeSelection.cards.map((card) => (
              <article key={card.name} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-6">
                <p className="type-label text-[var(--color-muted)]">{card.title}</p>
                <h3 className="type-card-title type-wrap-balance mt-4">{card.name}</h3>
                <p className="type-label mt-3 text-[var(--color-muted)]">{card.origin}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {card.notes.map((note) => (
                    <span key={note} className="type-label rounded-full border border-[var(--color-line)] px-3 py-1 text-[var(--color-muted)]">
                      {note}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="relative min-h-[340px] overflow-hidden rounded-[2rem]">
              <Image src={coffeePage.brewingExperience.image.src} alt={coffeePage.brewingExperience.image.alt} fill className="object-cover" />
            </div>
            <div>
              <SectionHeading
                eyebrow={coffeePage.brewingExperience.eyebrow}
                title={coffeePage.brewingExperience.title}
                description={coffeePage.brewingExperience.description}
                titleWidth="compact"
                descriptionWidth="compact"
              />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id={coffeePage.beansPreview.id} className="bg-[var(--color-surface)]">
        <Container>
          <div className="flex items-end justify-between gap-6 border-b border-[var(--color-line)] pb-8">
            <SectionHeading eyebrow={coffeePage.beansPreview.eyebrow} title={coffeePage.beansPreview.title} titleWidth="compact" />
            <Button href={coffeePage.beansPreview.ctaHref}>{coffeePage.beansPreview.ctaLabel}</Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {coffeePage.beansPreview.items.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-6">
                <h3 className="type-card-title type-wrap-balance">{item.title}</h3>
                <p className="type-body-md mt-4 max-w-[24ch] text-[var(--color-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <div className="rounded-[2.25rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10 lg:p-12">
            <SectionHeading eyebrow={coffeePage.ctaSection.eyebrow} title={coffeePage.ctaSection.title} titleWidth="wide" />
            <div className="mt-8 flex flex-wrap gap-4">
              {coffeePage.ctaSection.actions.map((action, index) => (
                <Button key={action.href} href={action.href} variant={index === 0 ? "secondary" : "ghost"}>
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </SiteShell>
  );
}

