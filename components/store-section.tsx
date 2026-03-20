import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const storeCopy = {
  eyebrow: "스토어",
  title: "바라쿠다의 제품 방향을 먼저 봅니다",
  description: "원두와 굿즈, 라이프스타일 제품을 브랜드의 결에 맞춰 미리 소개합니다.",
  note: "Preview",
  items: [
    { title: "원두", src: "/images/apollo.png", alt: "바라쿠다 원두 제품 이미지", fit: "contain" },
    { title: "굿즈", src: "/images/goods.png", alt: "바라쿠다 굿즈 이미지", fit: "cover" },
    { title: "라이프스타일", src: "/images/Parcera.png", alt: "바라쿠다 라이프스타일 제품 이미지", fit: "contain" },
  ],
} as const;

export function StoreSection() {
  return (
    <SectionWrapper id="store">
      <Container>
        <div className="flex flex-col gap-6 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={storeCopy.eyebrow}
            title={storeCopy.title}
            description={storeCopy.description}
            className="max-w-3xl"
            titleWidth="compact"
            descriptionWidth="compact"
          />
          <span className="type-label rounded-full border border-[var(--color-line)] px-4 py-2 text-[var(--color-muted)]">
            {storeCopy.note}
          </span>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {storeCopy.items.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(245,239,230,0.9),rgba(233,226,214,0.9))]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={item.fit === "contain" ? "object-contain p-5 transition-transform duration-500 hover:scale-[1.03]" : "object-cover transition-transform duration-500 hover:scale-105"}
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <h3 className="type-card-title type-wrap-balance">{item.title}</h3>
                <span className="type-label text-[var(--color-muted)]">미리보기</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}

