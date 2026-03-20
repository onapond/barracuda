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
            <SectionHeading
              eyebrow={brand.eyebrow}
              title={brand.title}
              description={brand.description}
              titleWidth="compact"
              descriptionWidth="compact"
            />
            <p className="type-body-lg mt-8 max-w-[30ch] text-[var(--color-muted)]">{brand.lead}</p>
            <Button href={brand.cta.href} variant="ghost" className="mt-8">
              {brand.cta.label}
            </Button>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] sm:min-h-[560px] lg:min-h-[620px]">
            <Image
              src={brand.image.src}
              alt={brand.image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
