import type { Metadata } from "next";
import { SpaceInquiryForm } from "@/components/space-inquiry-form";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.space.metadata.title,
  description: siteConfig.space.metadata.description,
};

export default function SpacePage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...siteConfig.space.hero} />
      {siteConfig.space.gallerySections.map((section) => (
        <CompanyGallerySection key={`${section.eyebrow}-${section.title}`} {...section} />
      ))}
      <SectionWrapper id={siteConfig.space.inquirySectionId}>
        <Container>
          <SpaceInquiryForm />
        </Container>
      </SectionWrapper>
    </CompanySiteShell>
  );
}

