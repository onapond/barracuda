import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TitleWidth = "compact" | "default" | "wide";
type DescriptionWidth = "compact" | "default";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  titleWidth?: TitleWidth;
  descriptionWidth?: DescriptionWidth;
};

const titleWidthClasses: Record<TitleWidth, string> = {
  compact: "max-w-[11ch] sm:max-w-[12ch] lg:max-w-[13ch]",
  default: "max-w-[12ch] sm:max-w-[13ch] lg:max-w-[15ch]",
  wide: "max-w-[14ch] sm:max-w-[15ch] lg:max-w-[17ch]",
};

const descriptionWidthClasses: Record<DescriptionWidth, string> = {
  compact: "max-w-[30ch] sm:max-w-[32ch] lg:max-w-[34ch]",
  default: "max-w-[32ch] sm:max-w-[34ch] lg:max-w-[38ch]",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
  titleWidth = "default",
  descriptionWidth = "default",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">{eyebrow}</p>
      <h2
        className={cn(
          "whitespace-pre-line text-balance font-display text-[clamp(1.875rem,3vw,2.625rem)] font-medium leading-[1.28] tracking-[-0.02em] [overflow-wrap:normal] [word-break:keep-all]",
          titleWidthClasses[titleWidth],
          align === "center" && "mx-auto",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-5 text-base leading-[1.75] tracking-[-0.01em] text-[var(--color-muted)] [overflow-wrap:normal] [word-break:keep-all] sm:text-lg",
          descriptionWidthClasses[descriptionWidth],
          align === "center" && "mx-auto",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </div>
  );
}
