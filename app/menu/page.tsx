import type { Metadata } from "next";
import { CompanyCoffeeMenuSection } from "@/components/company-coffee-menu-section";
import { MenuOrderForm } from "@/components/menu-order-form";
import { CompanyGallerySection } from "@/components/company-gallery-section";
import { CompanyPageHero } from "@/components/company-page-hero";
import { CompanySiteShell } from "@/components/company-site-shell";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/data/site";
import type { CompanyCoffeeMenuSectionData } from "@/lib/company-site";

const menuBoardSection = (
  siteConfig.menu as typeof siteConfig.menu & {
    menuBoardSection?: CompanyCoffeeMenuSectionData;
  }
).menuBoardSection;

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
      {menuBoardSection ? <CompanyCoffeeMenuSection data={menuBoardSection} /> : null}
      <SectionWrapper id={siteConfig.menu.orderSectionId}>
        <Container>
          <MenuOrderForm />
        </Container>
      </SectionWrapper>
    </CompanySiteShell>
  );
}
