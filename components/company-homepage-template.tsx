"use client";

import Image from "next/image";
import Link from "next/link";
import { CompanyHeader } from "@/components/company-header";
import { Container } from "@/components/ui/container";

export type CompanyHomepageTemplateData = {
  utilityLinks: ReadonlyArray<{ href: string; label: string }>;
  navLinks: ReadonlyArray<{ href: string; label: string }>;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  };
  hero: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    primaryCta: { href: string; label: string };
  };
};

type CompanyHomepageTemplateProps = {
  data: CompanyHomepageTemplateData;
  children?: React.ReactNode;
};

export function CompanyHomepageTemplate({ data, children }: CompanyHomepageTemplateProps) {
  return (
    <main className="min-h-screen bg-white text-[var(--color-foreground)]">
      <CompanyHeader data={data} mobileMenuId="company-home-mobile-menu" />

      <section className="relative overflow-hidden bg-white">
        <div className="relative h-[34rem] sm:h-[46rem] lg:h-[56rem]">
          <Image src={data.hero.image} alt={data.hero.imageAlt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08),rgba(10,10,10,0.38))]" />
          <Container className="relative flex h-full items-end justify-center pb-10 text-center sm:pb-16 lg:pb-24">
            <div className="mx-auto flex max-w-[19rem] flex-col items-center text-white sm:max-w-[26rem] lg:max-w-[34rem]">
              <h1 className="type-wrap-balance max-w-[13rem] pb-[0.14em] font-heading text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-center whitespace-pre-line sm:max-w-[20rem] sm:text-[3.5rem] lg:max-w-[28rem] lg:text-[4.8rem]">
                {data.hero.title}
              </h1>
              <p className="type-wrap-balance mt-4 max-w-[15rem] text-[0.9375rem] leading-[1.7] text-white/90 text-center sm:max-w-[18rem] sm:text-[0.98rem] sm:leading-7 lg:max-w-[21rem] lg:text-[1rem] lg:leading-7">
                {data.hero.description}
              </p>
              <Link
                href={data.hero.primaryCta.href}
                className="mt-7 inline-flex min-w-[9.5rem] items-center justify-center border border-white/80 px-8 py-3 text-sm tracking-[0.2em] text-white transition hover:bg-white hover:text-[var(--color-foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {data.hero.primaryCta.label}
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {children}
    </main>
  );
}

