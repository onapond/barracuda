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
            <div className="max-w-[58rem] text-white">
              <h1 className="font-heading text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.05em] whitespace-pre-line sm:text-[4.5rem] lg:text-[6.6rem]">
                {data.hero.title}
              </h1>
              <p className="mx-auto mt-4 max-w-[32rem] text-sm leading-7 text-white/90 sm:text-base sm:leading-8 lg:text-[1.05rem] lg:leading-8">
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