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
    <SectionWrapper className="bg-[var(--color-surface)]">
      <Container>
        <div className="border-b border-[var(--color-line)] pb-8">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{eyebrow}</p>
          <h2 className="mt-4 max-w-[12ch] font-heading text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.04em] whitespace-pre-line sm:text-[3.3rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-[42rem] text-base leading-8 text-[var(--color-muted)] sm:text-[1.04rem]">{description}</p>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[16rem_minmax(0,1fr)]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {tabs.map((tab) => {
              const active = tab.key === activeTab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveKey(tab.key)}
                  className={`rounded-[1.75rem] border px-5 py-5 text-left transition ${active ? "border-[var(--color-foreground)] bg-white text-[var(--color-foreground)]" : "border-[var(--color-line)] bg-transparent text-[var(--color-muted)] hover:bg-white/70"}`}
                >
                  <span className="text-xs uppercase tracking-[0.24em]">{tab.label}</span>
                  <p className="mt-4 font-heading text-[1.5rem] font-semibold leading-[1.08] tracking-[-0.03em]">{tab.title}</p>
                  <p className="mt-3 text-sm leading-7">{tab.description}</p>
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <div className="overflow-hidden rounded-[2.4rem] border border-[var(--color-line)] bg-black">
              <div className="relative min-h-[24rem] sm:min-h-[32rem]">
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
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08),rgba(10,10,10,0.35))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/72">Featured Scene</p>
                  <h3 className="mt-3 max-w-[12ch] font-heading text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] sm:text-[2.8rem]">
                    {activeTab.title}
                  </h3>
                  <p className="mt-4 max-w-[28rem] text-sm leading-7 text-white/86 sm:text-base sm:leading-8">
                    {activeTab.description}
                  </p>
                  <Button href={activeTab.cta.href} className="mt-6">
                    {activeTab.cta.label}
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {activeTab.gallery.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white">
                  <div className={`relative ${image.heightClassName ?? "min-h-[16rem] sm:min-h-[18rem]"}`}>
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </div>
                  {image.title || image.description ? (
                    <div className="p-6">
                      {image.title ? <h3 className="font-heading text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.03em]">{image.title}</h3> : null}
                      {image.description ? <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{image.description}</p> : null}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
