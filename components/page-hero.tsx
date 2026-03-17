import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type HeroTitleWidth = "compact" | "default" | "wide";
type HeroDescriptionWidth = "compact" | "default";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  titleWidth?: HeroTitleWidth;
  descriptionWidth?: HeroDescriptionWidth;
};

const titleWidthClasses: Record<HeroTitleWidth, string> = {
  compact: "max-w-[10ch] sm:max-w-[11ch] lg:max-w-[12ch]",
  default: "max-w-[11ch] sm:max-w-[12ch] lg:max-w-[13ch]",
  wide: "max-w-[12ch] sm:max-w-[13ch] lg:max-w-[14ch]",
};

const descriptionWidthClasses: Record<HeroDescriptionWidth, string> = {
  compact: "max-w-[28ch] sm:max-w-[30ch] lg:max-w-[32ch]",
  default: "max-w-[30ch] sm:max-w-[32ch] lg:max-w-[34ch]",
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  ctaHref,
  ctaLabel,
  titleClassName,
  descriptionClassName,
  titleWidth = "default",
  descriptionWidth = "default",
}: PageHeroProps) {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <Container className="grid gap-8 py-14 sm:py-18 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-14 lg:py-24">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">{eyebrow}</p>
          <h1
            className={cn(
              "whitespace-pre-line text-balance font-display text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[1.18] tracking-[-0.03em] [overflow-wrap:normal] [word-break:keep-all]",
              titleWidthClasses[titleWidth],
              titleClassName,
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-6 whitespace-pre-line text-base leading-[1.75] tracking-[-0.01em] text-[var(--color-muted)] [overflow-wrap:normal] [word-break:keep-all] sm:text-lg lg:text-[1.25rem]",
              descriptionWidthClasses[descriptionWidth],
              descriptionClassName,
            )}
          >
            {description}
          </p>
          {ctaHref && ctaLabel ? (
            <Button href={ctaHref} className="mt-8">
              {ctaLabel}
            </Button>
          ) : null}
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] sm:min-h-[420px]">
          <Image src={image} alt={imageAlt} fill priority className="object-cover" />
        </div>
      </Container>
    </section>
  );
}
