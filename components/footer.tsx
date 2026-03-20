import Link from "next/link";
import { ChevronDown, Globe, Instagram, Youtube } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/site-content";

export function Footer() {
  const { footer } = siteContent;

  const socialIcons = {
    Blog: Globe,
    YouTube: Youtube,
    Instagram: Instagram,
  } as const;

  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <Container className="flex flex-col gap-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
          <div className="text-center lg:text-left">
            <div className="mx-auto w-[13rem] lg:mx-0">
              <BrandLogo variant="wordmark" className="w-full" />
            </div>
            <p className="mt-4 text-sm text-[var(--color-muted)]">{footer.statement}</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{footer.subline}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Connect</p>
            <div className="mt-4 flex items-center gap-3">
              {footer.socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons];

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <details className="group w-full max-w-[16rem] rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-muted)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 uppercase tracking-[0.24em] text-[var(--color-foreground)]">
                <span>Family Sites</span>
                <ChevronDown size={16} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 space-y-3 border-t border-[var(--color-line)] pt-4">
                {footer.familySites.map((site) => (
                  <Link
                    key={site.href}
                    href={site.href}
                    className="block hover:text-[var(--color-foreground)]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {site.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>

        <div className="border-t border-[var(--color-line)] pt-6 text-center text-sm text-[var(--color-muted)]">
          <p>{footer.address}</p>
          <p className="mt-2">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
