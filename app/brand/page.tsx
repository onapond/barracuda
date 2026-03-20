import type { Metadata } from "next";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyNoteSection } from "@/components/company-note-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.brand.metadata.title,
  description: siteConfig.brand.metadata.description,
};

export default function BrandPage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...siteConfig.brand.hero} />
      {siteConfig.brand.gallerySections.map((section) => (
        <CompanyGallerySection key={`${section.eyebrow}-${section.title}`} {...section} />
      ))}
      {siteConfig.brand.noteSection ? <CompanyNoteSection data={siteConfig.brand.noteSection} /> : null}
    </CompanySiteShell>
  );
}

