"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { companyHomepageTemplate } from "@/data/site-content";
import { cn } from "@/lib/cn";

export function HomeReferenceHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-[var(--color-line)] bg-white text-[var(--color-foreground)]">
      <Container className="relative py-6 sm:py-8 lg:py-10">
        <div className="flex items-start justify-between md:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="home-mobile-menu"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center text-[var(--color-muted)]"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-4 pt-2 text-sm text-[var(--color-muted)]">
            {companyHomepageTemplate.utilityLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[var(--color-foreground)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden justify-end gap-5 text-sm text-[var(--color-muted)] md:flex">
          {companyHomepageTemplate.utilityLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[var(--color-foreground)]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-[20rem] flex-col items-center sm:mt-10 sm:max-w-[24rem] lg:mt-2 lg:max-w-[30rem]">
          <BrandLogo variant="wordmark" priority className="w-full" />
          <p className="mt-4 text-[0.78rem] tracking-[0.62em] text-[var(--color-muted)] sm:text-[0.85rem]">
            {companyHomepageTemplate.logo.caption}
          </p>
        </div>

        <nav className="mt-10 hidden items-center justify-center gap-10 text-[1rem] text-[var(--color-muted)] md:flex lg:mt-12">
          {companyHomepageTemplate.navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[var(--color-foreground)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          id="home-mobile-menu"
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            open ? "mt-6 max-h-96 border-t border-[var(--color-line)] pt-5 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-4 pb-2 text-base text-[var(--color-muted)]">
            {companyHomepageTemplate.navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="hover:text-[var(--color-foreground)]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
