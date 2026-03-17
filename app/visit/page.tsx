import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { assetPaths, businessInfo } from "@/data/site-content";

const visitPage = {
  hero: { eyebrow: "방문", title: "방문 전 필요한 정보", description: "주소, 운영 시간, 연락처와 같은 핵심 정보만 먼저 확인하세요.", image: assetPaths.space[2], imageAlt: "Barracuda 방문 경험을 보여주는 이미지", ctaHref: "#visit-info", ctaLabel: "방문 정보 보기" },
  infoSection: { eyebrow: "Visit Info", title: "먼저 확인할 기본 정보", description: "방문 전에 필요한 항목을 한곳에 모았습니다." },
  details: [
    { label: "주소", value: businessInfo.address },
    { label: "운영 시간", value: businessInfo.openingHours },
    { label: "주차", value: businessInfo.parking },
    { label: "연락처", value: businessInfo.contact },
    { label: "인스타그램", value: businessInfo.instagramHandle },
  ],
  guideCards: [
    { title: "위치", description: "주소와 이동 동선을 먼저 확인하세요." },
    { title: "운영 시간", description: "방문 전 운영 시간을 확인하세요." },
    { title: "주차 및 이동", description: "차량 방문 여부를 먼저 살펴보세요." },
  ],
  noticeSection: { eyebrow: "Before You Go", title: "변경 가능성이 있는 항목", items: ["상세 주소", "최종 운영 시간", "주차 안내", "연락처 및 인스타그램 링크"] },
  ctaSection: { eyebrow: "Visit Action", title: "다음 동선으로 바로 이어집니다.", description: "길 찾기와 인스타그램, 그리고 메뉴와 공간 페이지로 이동할 수 있습니다.", actions: [{ href: businessInfo.directionsUrl, label: "길찾기" }, { href: businessInfo.instagramUrl, label: "인스타그램" }, { href: "/menu", label: "메뉴 보기" }, { href: "/space", label: "공간 보기" }] },
};

export const metadata: Metadata = { title: "Visit | Barracuda", description: "Barracuda의 위치, 운영 시간, 주차, 연락처, 인스타그램 등 방문 정보를 정리합니다." };

export default function VisitPage() {
  return (
    <SiteShell>
      <PageHero {...visitPage.hero} titleWidth="compact" descriptionWidth="compact" />
      <SectionWrapper id="visit-info"><Container className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start"><div><p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">{visitPage.infoSection.eyebrow}</p><h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all] sm:text-5xl">{visitPage.infoSection.title}</h2><p className="mt-6 max-w-[34ch] text-base leading-[1.75] text-[var(--color-muted)] sm:text-lg">{visitPage.infoSection.description}</p></div><div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-8"><div className="space-y-5">{visitPage.details.map((detail) => <div key={detail.label} className="flex flex-col gap-2 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:items-start sm:justify-between"><span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{detail.label}</span><span className="text-sm leading-7 sm:max-w-[24rem] sm:text-right">{detail.value}</span></div>)}</div></div></Container></SectionWrapper>
      <SectionWrapper className="bg-[var(--color-surface)]"><Container><div className="flex flex-col gap-4 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Visit Guide</p><h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all] sm:text-5xl">방문 전 확인할 핵심 안내</h2></div><p className="max-w-[34ch] text-sm leading-[1.75] text-[var(--color-muted)] sm:text-right">가장 먼저 확인할 항목만 짧게 보여줍니다.</p></div><div className="mt-10 grid gap-5 lg:grid-cols-3">{visitPage.guideCards.map((card) => <article key={card.title} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-6"><h3 className="font-display text-3xl leading-tight">{card.title}</h3><p className="mt-5 max-w-[24ch] text-base leading-[1.75] text-[var(--color-muted)]">{card.description}</p></article>)}</div></Container></SectionWrapper>
      <SectionWrapper><Container className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start"><div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10"><p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">{visitPage.noticeSection.eyebrow}</p><h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all] sm:text-5xl">{visitPage.noticeSection.title}</h2><div className="mt-8 space-y-3">{visitPage.noticeSection.items.map((item) => <div key={item} className="rounded-[1.25rem] border border-[var(--color-line)] px-4 py-4 text-sm leading-7">{item}</div>)}</div></div><div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-8 sm:p-10"><p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">{visitPage.ctaSection.eyebrow}</p><h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all] sm:text-5xl">{visitPage.ctaSection.title}</h2><p className="mt-6 max-w-[34ch] text-base leading-[1.75] text-[var(--color-muted)]">{visitPage.ctaSection.description}</p><div className="mt-8 flex flex-wrap gap-3">{visitPage.ctaSection.actions.map((action, index) => <Button key={action.href} href={action.href} variant={index === 0 ? "secondary" : "ghost"}>{action.label}</Button>)}</div></div></Container></SectionWrapper>
    </SiteShell>
  );
}
