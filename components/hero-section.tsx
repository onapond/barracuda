import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image src={hero.image} alt={hero.imageAlt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-[var(--color-overlay)]" />
      <Container className="relative flex min-h-screen items-end pb-20 pt-32 sm:pb-24">
        <div className="max-w-[40rem] text-white">
          <p className="type-eyebrow mb-5 text-white/72">{hero.eyebrow}</p>
          <h1 className="type-hero-title max-w-[8ch] text-white">{hero.title}</h1>
          <p className="mt-6 font-heading text-sm uppercase tracking-[0.28em] text-white/72 sm:text-base">
            {hero.subtitle}
          </p>
          <p className="type-body-lg type-wrap-balance mt-6 max-w-[30ch] text-white/82 sm:max-w-[32ch] lg:max-w-[34ch]">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="primary" className="border-white/20 bg-transparent">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
