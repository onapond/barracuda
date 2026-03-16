import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      <p className="mb-4 text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
