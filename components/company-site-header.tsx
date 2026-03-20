import { CompanyHeader } from "@/components/company-header";
import { siteConfig } from "@/data/site";

export function CompanySiteHeader() {
  return <CompanyHeader data={siteConfig.homepage} mobileMenuId="company-site-mobile-menu" />;
}

