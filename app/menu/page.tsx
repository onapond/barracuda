import type { Metadata } from "next";
import { MenuOrderForm } from "@/components/menu-order-form";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { assetPaths } from "@/data/site-content";

const menuPage = {
  hero: {
    eyebrow: "메뉴",
    title: "바라쿠다 메뉴",
    description: "스페셜티 커피를 바탕으로 차분하게 구성한 메뉴를 소개합니다.",
    image: assetPaths.coffee,
    imageAlt: "Barracuda 메뉴와 커피 무드를 보여주는 이미지",
    ctaHref: "#order-request",
    ctaLabel: "주문 요청하기",
  },
  subtitle: "커피와 함께 두기 좋은 구성",
  categoryNav: [
    { href: "#coffee-menu", label: "커피" },
    { href: "#signature-menu", label: "시그니처" },
    { href: "#non-coffee", label: "논커피" },
    { href: "#dessert", label: "디저트" },
  ],
  sections: [
    { id: "coffee-menu", eyebrow: "커피 메뉴", title: "선명하게 준비한 커피", groups: [
      { title: "에스프레소 기반", items: ["에스프레소", "아메리카노", "카푸치노", "라테", "플랫 화이트"] },
      { title: "필터 커피", items: ["핸드드립", "시즈널 싱글 오리진"] },
      { title: "콜드 커피", items: ["콜드브루", "콜드브루 라테"] },
    ] },
    { id: "signature-menu", eyebrow: "시그니처 메뉴", title: "로스팅 톤을 담은 시그니처", description: "차분한 무드와 잘 어울리는 시그니처 음료입니다.", groups: [
      { title: "시그니처", items: ["Barracuda Latte", "Roastery Cream Coffee", "Seasonal Signature Drink"] },
    ] },
    { id: "non-coffee", eyebrow: "논커피", title: "가볍게 고를 수 있는 음료", groups: [
      { title: "음료", items: ["티", "초콜릿", "에이드", "스파클링"] },
    ] },
    { id: "dessert", eyebrow: "디저트", title: "커피와 함께 두기 좋은 디저트", groups: [
      { title: "디저트", items: ["쿠키", "케이크", "시즈널 디저트"] },
    ] },
  ],
};

export const metadata: Metadata = {
  title: "Menu | Barracuda",
  description: "Barracuda의 메뉴 구성과 주문 요청 필드를 정리한 MVP 메뉴 페이지입니다.",
};

export default function MenuPage() {
  return (
    <SiteShell>
      <PageHero {...menuPage.hero} titleWidth="compact" descriptionWidth="compact" />
      <SectionWrapper><Container><div className="flex flex-wrap gap-3 border-b border-[var(--color-line)] pb-8">{menuPage.categoryNav.map((item) => <a key={item.href} href={item.href} className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)] transition hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]">{item.label}</a>)}</div><p className="mt-8 max-w-[28ch] text-sm uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-base">{menuPage.subtitle}</p></Container></SectionWrapper>
      {menuPage.sections.map((section, index) => <SectionWrapper key={section.id} id={section.id} className={index % 2 === 1 ? "bg-[var(--color-surface)]" : undefined}><Container><div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start"><div><p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{section.eyebrow}</p><h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all] sm:text-5xl">{section.title}</h2>{"description" in section && section.description ? <p className="mt-6 max-w-[34ch] text-base leading-[1.75] text-[var(--color-muted)] sm:text-lg">{section.description}</p> : null}</div><div className="grid gap-5 md:grid-cols-2">{section.groups.map((group) => <article key={group.title} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-6"><h3 className="font-display text-3xl leading-tight">{group.title}</h3><ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-muted)]">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></Container></SectionWrapper>)}
      <SectionWrapper id="order-request"><Container><MenuOrderForm /></Container></SectionWrapper>
    </SiteShell>
  );
}
