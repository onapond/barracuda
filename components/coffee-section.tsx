import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteContent } from "@/data/site-content";

export function CoffeeSection() {
  const { coffee } = siteContent;

  return (
    <SectionWrapper id="coffee" className="bg-[var(--color-surface)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
            <Image
              src={coffee.image.src}
              alt={coffee.image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={coffee.eyebrow}
              title={coffee.title}
              description={coffee.description}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {coffee.features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-[1.75rem] border border-[var(--color-line)] p-6"
                >
                  <h3 className="font-display text-2xl">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
            <Button href={coffee.cta.href} className="mt-8">
              {coffee.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
