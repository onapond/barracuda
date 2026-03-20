import { CompanyHomepageTemplate } from "@/components/company-homepage-template";
import { Footer } from "@/components/footer";
import { companyHomepageTemplate } from "@/data/site-content";

export default function Home() {
  return (
    <CompanyHomepageTemplate data={companyHomepageTemplate}>
      <Footer />
    </CompanyHomepageTemplate>
  );
}
