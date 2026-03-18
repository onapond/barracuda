import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteContent } from "@/data/site-content";

const homeSpaceImages = [
  { src: "/images/cafe.jpg", alt: "바라쿠다 카페 공간 이미지" },
  { src: "/images/event.jpg", alt: "바라쿠다 이벤트 공간 이미지" },
  { src: "/images/experience.jpg", alt: "바라쿠다 경험을 보여주는 이미지" },
] as const;

export function SpaceSection() {
  const { space } = siteContent;
  const items = space.items.map((item, index) => ({
    ...item,
    src: homeSpaceImages[index]?.src ?? item.src,
    alt: homeSpaceImages[index]?.alt ?? item.alt,
  }));

  return (
    <SectionWrapper id="space" className="bg-[var(--color-surface)]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <SectionHeading eyebrow={space.eyebrow} title={space.title} description={space.description} />
          <p className="max-w-xl justify-self-end border-t border-[var(--color-line)] pt-6 text-sm uppercase tracking-[0.22em] text-[var(--color-muted)] sm:text-base">
            {space.highlight}
          </p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <article>
            <div className={`relative overflow-hidden rounded-[2.25rem] ${items[0].height}`}>
              <Image
                src={items[0].src}
                alt={items[0].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-6 border-b border-[var(--color-line)] pb-6">
              <div>
                <h3 className="font-display text-4xl">{items[0].title}</h3>
                <p className="mt-3 max-w-md text-base leading-8 text-[var(--color-muted)]">
                  {items[0].description}
                </p>
              </div>
              <span className="pt-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">01</span>
            </div>
          </article>
          <div className="grid gap-5">
            {items.slice(1).map((item, index) => (
              <article key={item.title} className="rounded-[2rem] border border-[var(--color-line)] p-4">
                <div className={`relative overflow-hidden rounded-[1.5rem] ${item.height}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                  </div>
                  <span className="pt-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">0{index + 2}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
