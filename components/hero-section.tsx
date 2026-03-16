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
        <div className="max-w-4xl text-white">
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-white/72">{hero.eyebrow}</p>
          <h1 className="font-display text-6xl leading-none sm:text-7xl lg:text-[7rem]">{hero.title}</h1>
          <p className="mt-6 max-w-2xl text-sm uppercase tracking-[0.24em] text-white/68 sm:text-base">
            {hero.subtitle}
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/82 sm:text-lg">
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
