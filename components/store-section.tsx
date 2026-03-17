import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { assetPaths } from "@/data/site-content";

const storeCopy = {
  eyebrow: "스토어",
  title: "배러쿠다의 제품 세계를 미리 봅니다.",
  description: "원두와 굿즈, 라이프스타일 제품까지 브랜드의 방향을 간결하게 정리했습니다.",
  note: "미리보기",
  items: [
    { title: "원두", src: assetPaths.store[0], alt: "원두 제품을 암시하는 이미지" },
    { title: "굿즈", src: assetPaths.store[1], alt: "브랜드 굿즈를 암시하는 이미지" },
    { title: "라이프스타일 제품", src: assetPaths.store[2], alt: "라이프스타일 제품을 암시하는 이미지" },
  ],
};

export function StoreSection() {
  return (
    <SectionWrapper id="store">
      <Container>
        <div className="flex flex-col gap-6 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={storeCopy.eyebrow} title={storeCopy.title} description={storeCopy.description} className="max-w-3xl" titleWidth="compact" descriptionWidth="compact" />
          <span className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{storeCopy.note}</span>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {storeCopy.items.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem]">
                <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight">{item.title}</h3>
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">미리보기</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
