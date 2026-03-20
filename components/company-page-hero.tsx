import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

type CompanyPageHeroProps = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function CompanyPageHero({ image, imageAlt, title, description, ctaHref, ctaLabel }: CompanyPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[24rem] sm:h-[30rem] lg:h-[38rem]">
        <Image src={image} alt={imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12),rgba(10,10,10,0.36))]" />
        <Container className="relative flex h-full items-end justify-center pb-10 text-center sm:pb-14 lg:pb-18">
          <div className="max-w-[46rem] text-white">
            <h1 className="font-heading text-[2.2rem] font-semibold leading-[1.03] tracking-[-0.04em] whitespace-pre-line sm:text-[3.4rem] lg:text-[4.75rem]">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-[36rem] text-sm leading-7 text-white/92 sm:text-base sm:leading-8 lg:text-[1.08rem] lg:leading-9">
              {description}
            </p>
            {ctaHref && ctaLabel ? (
              <Link
                href={ctaHref}
                className="mt-8 inline-flex min-w-[9.5rem] items-center justify-center border border-white/80 px-8 py-3 text-sm tracking-[0.2em] text-white transition hover:bg-white hover:text-[var(--color-foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {ctaLabel}
              </Link>
            ) : null}
          </div>
        </Container>
      </div>
    </section>
  );
}
