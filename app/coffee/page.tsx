import type { Metadata } from "next";
import { CompanyActionPanel } from "@/components/company-action-panel";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.coffee.metadata.title,
  description: siteConfig.coffee.metadata.description,
};

export default function CoffeePage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...siteConfig.coffee.hero} />
      {siteConfig.coffee.gallerySections.map((section) => (
        <CompanyGallerySection key={`${section.eyebrow}-${section.title}`} {...section} />
      ))}
      {siteConfig.coffee.actionLinks ? <CompanyActionPanel links={siteConfig.coffee.actionLinks} /> : null}
    </CompanySiteShell>
  );
}

