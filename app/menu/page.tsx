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
    description: "커피, 티, 병음료와 디저트를 한눈에 볼 수 있게 정리했습니다.",
    image: assetPaths.coffee,
    imageAlt: "Baracuda 메뉴와 커피 무드를 보여주는 이미지",
    ctaHref: "#menu-list",
    ctaLabel: "메뉴 보기",
  },
  subtitle: "카테고리별로 간결하게 정리했습니다.",
  categoryNav: [
    { href: "#coffee-menu", label: "커피" },
    { href: "#tea-menu", label: "티" },
    { href: "#sweet-tea-menu", label: "스위트 티" },
    { href: "#bottle-menu", label: "보틀 음료" },
    { href: "#juice-menu", label: "주스" },
    { href: "#dessert-menu", label: "디저트" },
  ],
  sections: [
    {
      id: "coffee-menu",
      eyebrow: "커피",
      title: "커피",
      groups: [
        {
          title: "커피",
          items: [
            { name: "아메리카노 (Hot / Cold)", price: "5,500" },
            { name: "카페라떼", price: "7,000" },
            { name: "바라쿠다 라떼", price: "7,500", note: "디카페인 +700" },
          ],
        },
      ],
    },
    {
      id: "tea-menu",
      eyebrow: "티",
      title: "티",
      groups: [
        {
          title: "티",
          items: [
            { name: "페퍼민트", price: "7,000" },
            { name: "캐모마일", price: "7,000" },
            { name: "루이보스티", price: "7,000" },
            { name: "히비스커스", price: "7,000" },
          ],
        },
      ],
    },
    {
      id: "sweet-tea-menu",
      eyebrow: "스위트 티",
      title: "스위트 티",
      groups: [
        {
          title: "스위트 티",
          items: [
            { name: "레몬 얼그레이", price: "7,000" },
            { name: "애플 피치 우롱티", price: "7,000" },
            { name: "애플 시나몬 루이보스", price: "7,000" },
            { name: "딸기 피치 루이보스", price: "7,000" },
            { name: "베리썸 히비스커스", price: "7,000" },
            { name: "아이스티 (Ice only)", price: "7,000" },
          ],
        },
      ],
    },
    {
      id: "bottle-menu",
      eyebrow: "보틀 음료",
      title: "보틀 음료",
      groups: [
        {
          title: "보틀",
          items: [
            { name: "분다버그 핑크 자몽", price: "7,500" },
            { name: "레몬에이드", price: "7,500" },
            { name: "진저 비어", price: "8,000" },
          ],
        },
      ],
    },
    {
      id: "juice-menu",
      eyebrow: "주스",
      title: "주스",
      groups: [
        {
          title: "주스",
          items: [{ name: "오렌지 착즙 주스", price: "8,000" }],
        },
      ],
    },
    {
      id: "dessert-menu",
      eyebrow: "디저트",
      title: "디저트",
      groups: [
        {
          title: "디저트",
          items: [{ name: "소금빵", price: "2,000" }],
        },
      ],
    },
  ],
  notice: "1인 1음료를 부탁드립니다.",
} as const;

export const metadata: Metadata = {
  title: "Menu | Baracuda",
  description: "바라쿠다의 메뉴를 카테고리별로 간결하게 정리한 페이지입니다.",
};

export default function MenuPage() {
  return (
    <SiteShell>
      <PageHero {...menuPage.hero} titleWidth="compact" descriptionWidth="compact" />

      <SectionWrapper id="menu-list">
        <Container>
          <div className="flex flex-wrap gap-3 border-b border-[var(--color-line)] pb-8">
            {menuPage.categoryNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)] transition hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="mt-8 max-w-[32ch] text-sm uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-base">
            {menuPage.subtitle}
          </p>
        </Container>
      </SectionWrapper>

      {menuPage.sections.map((section, index) => (
        <SectionWrapper
          key={section.id}
          id={section.id}
          className={index % 2 === 1 ? "bg-[var(--color-surface)]" : undefined}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">
                  {section.eyebrow}
                </p>
                <h2 className="mt-4 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all] sm:text-5xl">
                  {section.title}
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {section.groups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-background)] p-6"
                  >
                    <h3 className="font-display text-3xl leading-tight">{group.title}</h3>
                    <div className="mt-5 space-y-4">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="border-b border-[var(--color-line)] pb-4 last:border-b-0 last:pb-0"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <p className="text-sm leading-7">{item.name}</p>
                            <p className="shrink-0 text-sm leading-7 text-[var(--color-muted)]">
                              {item.price}
                            </p>
                          </div>
                          {"note" in item && item.note ? (
                            <p className="mt-1 text-xs leading-6 text-[var(--color-muted)]">
                              {item.note}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </SectionWrapper>
      ))}

      <SectionWrapper>
        <Container>
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-5 text-center text-sm tracking-[0.16em] text-[var(--color-muted)] sm:text-base">
            {menuPage.notice}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="order-request">
        <Container>
          <MenuOrderForm />
        </Container>
      </SectionWrapper>
    </SiteShell>
  );
}
