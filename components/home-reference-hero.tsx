import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { companyHomepageTemplate } from "@/data/site-content";

export function HomeReferenceHero() {
  const { hero } = companyHomepageTemplate;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[25rem] sm:h-[32rem] lg:h-[41rem]">
        <Image src={hero.image} alt={hero.imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.1),rgba(10,10,10,0.32))]" />
        <Container className="relative flex h-full items-end justify-center pb-10 text-center sm:pb-14 lg:pb-20">
          <div className="max-w-[48rem] text-white">
            <h1 className="font-display text-[2.35rem] font-medium leading-[1.02] tracking-[-0.04em] whitespace-pre-line sm:text-[3.5rem] lg:text-[5rem]">
              {hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-[34rem] text-sm leading-7 text-white/92 sm:text-base sm:leading-8 lg:text-[1.18rem] lg:leading-9">
              {hero.description}
            </p>
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              className="mt-8 border-white/65 bg-transparent px-8 hover:bg-white hover:text-[var(--color-foreground)]"
            >
              {hero.primaryCta.label}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
