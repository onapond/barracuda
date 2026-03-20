import type { Metadata } from "next";
import { MenuOrderForm } from "@/components/menu-order-form";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.menu.metadata.title,
  description: siteConfig.menu.metadata.description,
};

export default function MenuPage() {
  return (
    <CompanySiteShell>
      <CompanyPageHero {...siteConfig.menu.hero} />
      {siteConfig.menu.gallerySections.map((section) => (
        <CompanyGallerySection key={`${section.eyebrow}-${section.title}`} {...section} />
      ))}
      <SectionWrapper id={siteConfig.menu.orderSectionId}>
        <Container>
          <MenuOrderForm />
        </Container>
      </SectionWrapper>
    </CompanySiteShell>
  );
}

