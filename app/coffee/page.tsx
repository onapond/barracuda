import type { Metadata } from "next";
import { CompanyActionPanel } from "@/components/company-action-panel";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyMenuShowcase } from "@/components/company-menu-showcase";
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
      {siteConfig.coffee.menuShowcase ? <CompanyMenuShowcase {...siteConfig.coffee.menuShowcase} /> : null}
      {siteConfig.coffee.actionLinks ? <CompanyActionPanel links={siteConfig.coffee.actionLinks} /> : null}
    </CompanySiteShell>
  );
}

