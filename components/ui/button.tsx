import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border border-white/55 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[var(--color-foreground)]",
  secondary:
    "border border-[var(--color-foreground)]/20 bg-[var(--color-foreground)] text-[var(--color-background)] hover:bg-transparent hover:text-[var(--color-foreground)]",
  ghost:
    "border-b border-current px-0 py-0 text-[var(--color-foreground)] hover:opacity-60",
};

export function Button({
  href,
  children,
  variant = "secondary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm tracking-[0.24em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
