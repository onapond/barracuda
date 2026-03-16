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
          <SectionHeading eyebrow={store.eyebrow} title={store.title} description={store.description} className="max-w-3xl" />
          <span className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            {store.note}
          </span>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {store.items.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
              <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Preview</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
