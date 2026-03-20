"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanySignatureTab } from "@/lib/company-site";

type CompanySignatureTabsProps = {
  eyebrow: string;
  title: string;
  description: string;
  tabs: readonly CompanySignatureTab[];
};

export function CompanySignatureTabs({ eyebrow, title, description, tabs }: CompanySignatureTabsProps) {
  const [activeKey, setActiveKey] = useState(tabs[0]?.key ?? "");
  const activeTab = tabs.find((tab) => tab.key === activeKey) ?? tabs[0];

  if (!activeTab) {
    return null;
  }

  return (
    <SectionWrapper className="bg-[var(--color-surface)] py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="border-b border-[var(--color-line)] pb-7">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{eyebrow}</p>
          <h2 className="mt-4 max-w-[11ch] font-heading text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.05em] whitespace-pre-line sm:text-[3.6rem] lg:text-[4rem]">
            {title}
          </h2>
          <p className="mt-4 max-w-[34rem] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">{description}</p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {tabs.map((tab) => {
            const active = tab.key === activeTab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveKey(tab.key)}
                className={`rounded-[1.6rem] border px-5 py-4 text-left transition ${active ? "border-[var(--color-foreground)] bg-white text-[var(--color-foreground)]" : "border-[var(--color-line)] bg-transparent text-[var(--color-muted)] hover:bg-white/70"}`}
              >
                <span className="text-xs uppercase tracking-[0.24em]">{tab.label}</span>
                <p className="mt-3 font-heading text-[1.35rem] font-semibold leading-[1.05] tracking-[-0.03em]">{tab.title}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5">
          <div className="overflow-hidden rounded-[2.4rem] border border-[var(--color-line)] bg-black">
            <div className="relative min-h-[32rem] sm:min-h-[42rem] lg:min-h-[54rem]">
              {activeTab.featuredMedia.type === "video" ? (
                <video
                  src={activeTab.featuredMedia.src}
                  poster={activeTab.featuredMedia.posterSrc}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image src={activeTab.featuredMedia.src} alt={activeTab.featuredMedia.alt} fill className="object-cover" />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.03),rgba(10,10,10,0.24))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
                <h3 className="max-w-[10ch] font-heading text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[3.2rem] lg:text-[3.9rem]">
                  {activeTab.title}
                </h3>
                <p className="mt-3 max-w-[24rem] text-sm leading-7 text-white/86 sm:text-base sm:leading-8">
                  {activeTab.description}
                </p>
                <Button href={activeTab.cta.href} className="mt-6">
                  {activeTab.cta.label}
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {activeTab.gallery.map((image) => (
              <article key={image.src} className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white">
                <div className={`relative ${image.heightClassName ?? "min-h-[24rem] sm:min-h-[28rem] lg:min-h-[32rem]"}`}>
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}