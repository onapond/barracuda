import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteContent } from "@/data/site-content";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.24em]">BARRACUDA</p>
          <p className="mt-3 text-sm text-[var(--color-muted)]">{footer.statement}</p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">{footer.subline}</p>
        </div>
        <div className="space-y-4 text-sm text-[var(--color-muted)] lg:text-right">
          <nav className="flex flex-wrap gap-4 lg:justify-end">
            {footer.links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[var(--color-foreground)]">
                {link.label}
              </Link>
            ))}
          </nav>
          <p>{footer.address}</p>
          <p>
            <Link href={footer.instagramHref} className="hover:text-[var(--color-foreground)]">
              {footer.instagramLabel}
            </Link>
          </p>
          <p>{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
