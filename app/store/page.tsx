import type { Metadata } from "next";
import { CompanyActionPanel } from "@/components/company-action-panel";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.store.metadata.title,
  description: siteConfig.store.metadata.description,
};

export default function StorePage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...siteConfig.store.hero} />
      {siteConfig.store.gallerySections.map((section) => (
        <CompanyGallerySection key={`${section.eyebrow}-${section.title}`} {...section} />
      ))}
      {siteConfig.store.actionLinks ? <CompanyActionPanel links={siteConfig.store.actionLinks} /> : null}
    </CompanySiteShell>
  );
}

