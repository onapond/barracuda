import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { businessInfo } from "@/data/site-content";

const visitCopy = {
  eyebrow: "방문",
  title: "방문 전 필요한 정보",
  description: "방문 전에 필요한 핵심 정보만 먼저 확인하세요.",
  details: [
    { label: "주소", value: businessInfo.address },
    { label: "운영 시간", value: businessInfo.openingHours },
    { label: "주차", value: businessInfo.parking },
    { label: "연락처", value: businessInfo.contact },
    { label: "인스타그램", value: businessInfo.instagramHandle },
  ],
  directionsHref: businessInfo.directionsUrl,
  directionsLabel: "길찾기",
  instagramHref: businessInfo.instagramUrl,
  instagramLabel: "인스타그램",
  mapEyebrow: "위치",
  mapTitle: "브랜드의 온도와 공간의 결을 현장에서 직접 확인할 수 있습니다.",
  mapLinkLabel: "지도 열기",
};

export function VisitSection() {
  return (
    <SectionWrapper id="visit">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <SectionHeading eyebrow={visitCopy.eyebrow} title={visitCopy.title} description={visitCopy.description} titleWidth="compact" descriptionWidth="compact" />
            <div className="mt-10 space-y-5">
              {visitCopy.details.map((item) => (
                <div key={item.label} className="flex flex-col gap-2 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{item.label}</span>
                  <span className="text-sm leading-7 sm:max-w-[22rem] sm:text-right">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={visitCopy.directionsHref}>{visitCopy.directionsLabel}</Button>
              <Button href={visitCopy.instagramHref} variant="ghost">{visitCopy.instagramLabel}</Button>
            </div>
          </div>
          <a href={visitCopy.directionsHref} target="_blank" rel="noreferrer" className="group flex min-h-[420px] flex-col justify-between rounded-[2.25rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(222,214,202,0.5))] p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{visitCopy.mapEyebrow}</p>
              <h3 className="mt-6 max-w-[12ch] font-display text-4xl leading-[1.22] tracking-[-0.02em] [word-break:keep-all]">{visitCopy.mapTitle}</h3>
            </div>
            <div className="flex items-center justify-between border-t border-[var(--color-line)] pt-6">
              <span className="text-sm uppercase tracking-[0.24em]">{visitCopy.mapLinkLabel}</span>
              <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </Container>
    </SectionWrapper>
  );
}
