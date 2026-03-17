"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MobileMenu } from "@/components/mobile-menu";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/data/site-content";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || open || !isHome
          ? "border-b border-[var(--color-line)] bg-[var(--color-surface)]/95 text-[var(--color-foreground)] backdrop-blur"
          : "bg-transparent text-white",
      )}
    >
      <Container className="relative">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-display text-2xl tracking-[0.24em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            BARRACUDA
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase tracking-[0.26em] hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
                    active && "opacity-55",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/20 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <div id="mobile-menu">
          <MobileMenu open={open} links={[...navLinks]} onNavigate={() => setOpen(false)} />
        </div>
      </Container>
    </header>
  );
}

