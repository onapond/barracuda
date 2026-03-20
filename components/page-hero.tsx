import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type HeroTitleWidth = "compact" | "default" | "wide";
type HeroDescriptionWidth = "compact" | "default";
type HeroTone = "default" | "inverse";

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
  tone?: HeroTone;
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
  tone = "default",
}: PageHeroProps) {
  const isInverse = tone === "inverse";

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <Container className="grid gap-8 py-14 sm:py-18 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-14 lg:py-24">
        <div className={cn(isInverse && "text-white")}>
          <p
            className={cn(
              "type-eyebrow mb-4",
              isInverse ? "text-white/72" : "text-[var(--color-muted)]",
            )}
          >
            {eyebrow}
          </p>
          <h1
            className={cn(
              "type-hero-title type-wrap-balance whitespace-pre-line",
              titleWidthClasses[titleWidth],
              isInverse ? "text-white" : "text-[var(--color-foreground)]",
              titleClassName,
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "type-body-lg type-wrap-balance mt-6 whitespace-pre-line",
              descriptionWidthClasses[descriptionWidth],
              isInverse ? "text-white/82" : "text-[var(--color-muted)]",
              descriptionClassName,
            )}
          >
            {description}
          </p>
          {ctaHref && ctaLabel ? (
            <Button href={ctaHref} className="mt-8" variant={isInverse ? "primary" : "secondary"}>
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

