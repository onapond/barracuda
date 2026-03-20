"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { CompanyHomepageTemplateData } from "@/components/company-homepage-template";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type CompanyHeaderProps = {
  data: Pick<CompanyHomepageTemplateData, "utilityLinks" | "navLinks" | "logo">;
  mobileMenuId: string;
};

export function CompanyHeader({ data, mobileMenuId }: CompanyHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-[var(--color-line)] bg-white">
      <Container className="relative py-6 sm:py-8 lg:py-10">
        <div className="flex items-start justify-between md:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={mobileMenuId}
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
          <Image src={data.logo.src} alt={data.logo.alt} width={data.logo.width} height={data.logo.height} priority className="h-auto w-full" />
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
          id={mobileMenuId}
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            open ? "mt-6 max-h-96 border-t border-[var(--color-line)] pt-5 opacity-100" : "max-h-0 opacity-0"
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
  );
}

