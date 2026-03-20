import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TitleWidth = "compact" | "default" | "wide";
type DescriptionWidth = "compact" | "default";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
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
      <p className="type-eyebrow mb-4 text-[var(--color-muted)]">{eyebrow}</p>
      <h2
        className={cn(
          "type-section-title type-wrap-balance whitespace-pre-line",
          titleWidthClasses[titleWidth],
          align === "center" && "mx-auto",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "type-body-lg type-wrap-balance mt-5",
            descriptionWidthClasses[descriptionWidth],
            align === "center" && "mx-auto",
            "text-[var(--color-muted)]",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

