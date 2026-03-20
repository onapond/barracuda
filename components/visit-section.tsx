import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteContent } from "@/data/site-content";

const mapEmbedUrl =
  "https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C%2029%20%EB%A1%9C%EC%96%84%ED%8C%8C%ED%81%AC%EC%BB%A8%EB%B2%A4%EC%85%98%201%EC%B8%B5&z=16&output=embed";

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
              titleWidth="compact"
              descriptionWidth="compact"
            />
            <div className="mt-10 space-y-5">
              {visit.details.map((item) => (
                <div key={item.label} className="flex flex-col gap-2 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <span className="type-label text-[var(--color-muted)]">{item.label}</span>
                  <span className="type-body-sm sm:max-w-[22rem] sm:text-right">{item.value}</span>
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
          <div className="relative min-h-[420px] overflow-hidden rounded-[2.25rem] border border-[var(--color-line)] bg-[var(--color-surface)]">
            <iframe
              title="Baracuda location map"
              src={mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(18,18,18,0.12))]" />
            <div className="pointer-events-none relative flex min-h-[420px] items-end justify-end p-6">
              <a
                href={visit.directionsHref}
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto flex items-center justify-between gap-4 rounded-[1.25rem] border border-white/45 bg-white/82 px-5 py-4 backdrop-blur-sm transition-opacity hover:opacity-90"
              >
                <span className="type-label">{visit.mapLinkLabel}</span>
                <ArrowUpRight className="transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
