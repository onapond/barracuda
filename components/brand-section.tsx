import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteContent } from "@/data/site-content";

export function BrandSection() {
  const { brand } = siteContent;

  return (
    <SectionWrapper id="brand">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={brand.eyebrow} title={brand.title} description={brand.description} />
            <div className="mt-8 flex flex-wrap gap-3">
              {brand.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]"
                >
                  {pillar}
                </span>
              ))}
            </div>
            <Button href={brand.cta.href} variant="ghost" className="mt-8">
              {brand.cta.label}
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] sm:row-span-2 sm:min-h-[620px]">
              <Image src={brand.images[0].src} alt={brand.images[0].alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-[2rem]">
              <Image src={brand.images[1].src} alt={brand.images[1].alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-[2rem]">
              <Image src={brand.images[2].src} alt={brand.images[2].alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
