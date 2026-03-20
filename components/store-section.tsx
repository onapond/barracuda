import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteContent } from "@/data/site-content";

export function StoreSection() {
  const { store } = siteContent;

  return (
    <SectionWrapper id="store">
      <Container>
        <div className="flex flex-col gap-6 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={store.eyebrow}
            title={store.title}
            description={store.description}
            className="max-w-3xl"
            titleWidth="compact"
            descriptionWidth="compact"
          />
          <span className="type-label rounded-full border border-[var(--color-line)] px-4 py-2 text-[var(--color-muted)]">
            {store.note}
          </span>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {store.items.map((item) => (
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
                <span className="type-label text-[var(--color-muted)]">Preview</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
