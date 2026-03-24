import { CompanyHomepageTemplate } from "@/components/company-homepage-template";
import { CompanyHomepageIntro } from "@/components/company-homepage-intro";
import { CompanyHomepagePreview } from "@/components/company-homepage-preview";
import { CompanySignatureTabs } from "@/components/company-signature-tabs";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <CompanyHomepageTemplate data={siteConfig.homepage}>
      <CompanyHomepageIntro data={siteConfig.homepageIntro} />
      <CompanySignatureTabs
        eyebrow="SIGNATURE"
        title={"머무는 방식마다\n다르게 남는 장면"}
        description="모임도, 기념도, 브랜드도, 일상도. 네 장면이 한 공간에 있습니다."
        tabs={siteConfig.homepageSignatureTabs}
      />
      <CompanyHomepagePreview data={siteConfig.homepagePreviews.spaceExperience} />
      <CompanyHomepagePreview data={siteConfig.homepagePreviews.brand} reverse />
      <CompanyHomepagePreview data={siteConfig.homepagePreviews.coffee} />
      <CompanyHomepagePreview data={siteConfig.homepagePreviews.menu} reverse />
      <CompanyHomepagePreview data={siteConfig.homepagePreviews.visit} />
      <Footer />
    </CompanyHomepageTemplate>
  );
}

