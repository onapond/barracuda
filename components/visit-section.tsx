import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteContent } from "@/data/site-content";

export function VisitSection() {
  const { visit } = siteContent;

  return (
    <SectionWrapper id="visit">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <SectionHeading
              eyebrow={visit.eyebrow}
              title={visit.title}
              description={visit.description}
            />
            <div className="mt-10 space-y-5">
              {visit.details.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:items-start sm:justify-between"
                >
                  <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {item.label}
                  </span>
                  <span className="text-sm leading-7 sm:max-w-[22rem] sm:text-right">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={visit.directionsHref}>{visit.directionsLabel}</Button>
              <Button href={visit.instagramHref} variant="ghost">
                {visit.instagramLabel}
              </Button>
            </div>
          </div>
          <a
            href={visit.directionsHref}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[420px] flex-col justify-between rounded-[2.25rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(222,214,202,0.5))] p-8"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">
                {visit.mapEyebrow}
              </p>
              <h3 className="mt-6 font-display text-4xl leading-tight">{visit.mapTitle}</h3>
            </div>
            <div className="flex items-center justify-between border-t border-[var(--color-line)] pt-6">
              <span className="text-sm uppercase tracking-[0.24em]">{visit.mapLinkLabel}</span>
              <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </Container>
    </SectionWrapper>
  );
}
