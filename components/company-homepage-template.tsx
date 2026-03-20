"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

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
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[var(--color-foreground)]">
      <header className="relative border-b border-[var(--color-line)] bg-white">
        <Container className="relative py-6 sm:py-8 lg:py-10">
          <div className="flex items-start justify-between md:hidden">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="company-home-mobile-menu"
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center text-[var(--color-muted)]"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-4 pt-2 text-sm text-[var(--color-muted)]">
              {data.utilityLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-[var(--color-foreground)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden justify-end gap-5 text-sm text-[var(--color-muted)] md:flex">
            {data.utilityLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[var(--color-foreground)]">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-[19rem] flex-col items-center sm:mt-10 sm:max-w-[23rem] lg:mt-3 lg:max-w-[31rem]">
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={data.logo.width}
              height={data.logo.height}
              priority
              className="h-auto w-full"
            />
            {data.logo.caption ? (
              <p className="mt-4 text-[0.78rem] tracking-[0.62em] text-[var(--color-muted)] sm:text-[0.85rem]">
                {data.logo.caption}
              </p>
            ) : null}
          </div>

          <nav className="mt-10 hidden items-center justify-center gap-10 text-[0.98rem] text-[var(--color-muted)] md:flex lg:mt-12 lg:gap-12">
            {data.navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[var(--color-foreground)]">
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            id="company-home-mobile-menu"
            className={cn(
              "overflow-hidden transition-all duration-300 md:hidden",
              open ? "mt-6 max-h-96 border-t border-[var(--color-line)] pt-5 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <nav className="flex flex-col gap-4 pb-2 text-base text-[var(--color-muted)]">
              {data.navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="hover:text-[var(--color-foreground)]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="relative h-[26rem] sm:h-[34rem] lg:h-[43rem]">
          <Image src={data.hero.image} alt={data.hero.imageAlt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12),rgba(10,10,10,0.34))]" />
          <Container className="relative flex h-full items-end justify-center pb-10 text-center sm:pb-14 lg:pb-20">
            <div className="max-w-[52rem] text-white">
              <h1 className="font-heading text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.04em] whitespace-pre-line sm:text-[3.7rem] lg:text-[5.35rem]">
                {data.hero.title}
              </h1>
              <p className="mx-auto mt-5 max-w-[38rem] text-sm leading-7 text-white/92 sm:text-base sm:leading-8 lg:text-[1.15rem] lg:leading-9">
                {data.hero.description}
              </p>
              <Link
                href={data.hero.primaryCta.href}
                className="mt-8 inline-flex min-w-[9.5rem] items-center justify-center border border-white/80 px-8 py-3 text-sm tracking-[0.2em] text-white transition hover:bg-white hover:text-[var(--color-foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
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
