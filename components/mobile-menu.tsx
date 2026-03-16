import Link from "next/link";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  open: boolean;
  links: { href: string; label: string }[];
  onNavigate: () => void;
};

export function MobileMenu({ open, links, onNavigate }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 top-full overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-surface)] transition-all duration-300 md:hidden",
        open ? "max-h-80 opacity-100" : "pointer-events-none max-h-0 opacity-0",
      )}
    >
      <nav className="flex flex-col px-5 py-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className="border-t border-[var(--color-line)] py-4 text-sm uppercase tracking-[0.24em] text-[var(--color-foreground)] first:border-t-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
