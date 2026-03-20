import type { Metadata } from "next";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyInfoSection } from "@/components/company-info-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.visit.metadata.title,
  description: siteConfig.visit.metadata.description,
};

export default function VisitPage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...siteConfig.visit.hero} />
      {siteConfig.visit.gallerySections.map((section) => (
        <CompanyGallerySection key={`${section.eyebrow}-${section.title}`} {...section} />
      ))}
      <CompanyInfoSection data={siteConfig.visit.infoSection} />
    </CompanySiteShell>
  );
}

