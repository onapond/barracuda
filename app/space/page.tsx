import type { Metadata } from "next";
import Image from "next/image";
import { SpaceInquiryForm } from "@/components/space-inquiry-form";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { assetPaths, businessInfo } from "@/data/site-content";

const spacePage = {
  hero: {
    eyebrow: "공간",
    title: "머무는 시간이 인상을 만듭니다.",
    description: "배러쿠다는 커피와 모임, 작은 이벤트가 함께 가능한 공간입니다.",
    image: assetPaths.space[0],
    imageAlt: "Barracuda 공간을 대표하는 이미지",
    ctaHref: "#inquiry",
    ctaLabel: "행사 문의하기",
  },
  overview: {
    title: "차분한 카페에서 장면이 이어집니다.",
    description: "일상적인 방문부터 소규모 모임과 프로그램까지 담아낼 수 있도록 구성했습니다.",
    themes: ["커피 모임", "브랜드 모임", "작은 프로그램"],
  },
  eventTypes: [
    { title: "프라이빗 파티", description: "소규모 모임에 맞는 차분한 분위기", image: assetPaths.space[0], imageAlt: "프라이빗 파티를 상상할 수 있는 공간 이미지" },
    { title: "브랜드 이벤트", description: "소개와 공개 행사에 어울리는 장면", image: assetPaths.space[1], imageAlt: "브랜드 이벤트를 상상할 수 있는 공간 이미지" },
    { title: "북클럽", description: "대화와 집중이 필요한 모임", image: assetPaths.space[2], imageAlt: "북클럽과 소규모 토크를 상상할 수 있는 공간 이미지" },
    { title: "워크숍", description: "유연하게 운영할 수 있는 프로그램", image: assetPaths.space[0], imageAlt: "워크숍 진행을 상상할 수 있는 공간 이미지" },
    { title: "쇼케이스", description: "브랜드 톤을 살리는 발표와 전시", image: assetPaths.space[1], imageAlt: "쇼케이스를 상상할 수 있는 공간 이미지" },
    { title: "크리에이티브 밋업", description: "협업과 네트워킹에 맞는 환경", image: assetPaths.space[2], imageAlt: "크리에이티브 밋업을 상상할 수 있는 공간 이미지" },
  ],
  gallery: [
    { src: assetPaths.space[0], alt: "Barracuda interior gallery image one" },
    { src: assetPaths.space[1], alt: "Barracuda interior gallery image two" },
    { src: assetPaths.space[2], alt: "Barracuda interior gallery image three" },
    { src: assetPaths.space[0], alt: "Barracuda interior gallery image four" },
    { src: assetPaths.space[1], alt: "Barracuda interior gallery image five" },
    { src: assetPaths.space[2], alt: "Barracuda interior gallery image six" },
  ],
  rentalInfo: [
    { label: "수용 인원", value: "소규모 프라이빗 행사 중심으로 운영 예정" },
    { label: "이용 시간", value: "카페 운영 시간 외 또는 일부 시간대 조율" },
    { label: "기본 장비", value: "테이블, 좌석, 전원 환경 중심" },
    { label: "위치", value: businessInfo.address },
  ],
};

export const metadata: Metadata = {
  title: "Space | Barracuda",
  description: "Barracuda의 공간 대관, 이벤트 활용, 문화 프로그램 확장 가능성을 소개합니다.",
};

export default function SpacePage() {
  return (
    <SiteShell>
      <PageHero {...spacePage.hero} titleWidth="compact" descriptionWidth="compact" />
      <SectionWrapper><Container><div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start"><div><p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">공간 소개</p><h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all] sm:text-5xl">{spacePage.overview.title}</h2></div><div><p className="max-w-[34ch] text-base leading-[1.75] text-[var(--color-muted)] sm:text-lg">{spacePage.overview.description}</p><div className="mt-8 flex flex-wrap gap-3">{spacePage.overview.themes.map((theme) => <span key={theme} className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{theme}</span>)}</div></div></div></Container></SectionWrapper>
      <SectionWrapper className="bg-[var(--color-surface)]"><Container><div className="flex items-end justify-between gap-6 border-b border-[var(--color-line)] pb-8"><div><p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">이용 장면</p><h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all] sm:text-5xl">공간에 어울리는 장면들</h2></div></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{spacePage.eventTypes.map((item) => <article key={item.title} className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)]"><div className="relative min-h-[260px]"><Image src={item.image} alt={item.imageAlt} fill className="object-cover" /></div><div className="p-6"><h3 className="font-display text-3xl leading-tight">{item.title}</h3><p className="mt-4 max-w-[24ch] text-sm leading-7 text-[var(--color-muted)]">{item.description}</p></div></article>)}</div></Container></SectionWrapper>
      <SectionWrapper><Container><div className="flex items-end justify-between gap-6 border-b border-[var(--color-line)] pb-8"><div><p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">공간 이미지</p><h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all] sm:text-5xl">분위기로 먼저 전해지는 인상</h2></div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{spacePage.gallery.map((image, index) => <div key={`${image.src}-${index}`} className="relative min-h-[300px] overflow-hidden rounded-[2rem] md:min-h-[360px]"><Image src={image.src} alt={image.alt} fill className="object-cover" /></div>)}</div></Container></SectionWrapper>
      <SectionWrapper className="bg-[var(--color-surface)]"><Container><div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"><div><p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">이용 정보</p><h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all] sm:text-5xl">필요한 정보만 정리했습니다.</h2></div><div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-7"><div className="space-y-5">{spacePage.rentalInfo.map((item) => <div key={item.label} className="flex flex-col gap-2 border-b border-[var(--color-line)] pb-5 last:border-b-0 last:pb-0 sm:flex-row sm:justify-between"><span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{item.label}</span><span className="text-sm leading-7 sm:max-w-[27rem] sm:text-right">{item.value}</span></div>)}</div></div></div></Container></SectionWrapper>
      <SectionWrapper id="inquiry"><Container><SpaceInquiryForm /></Container></SectionWrapper>
    </SiteShell>
  );
}
