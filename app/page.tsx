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
        title={"머무는 방식마다\n다른 장면이 됩니다"}
        description="카페로, 모임으로, 기념으로, 브랜드로. 바라쿠다는 목적에 맞게 자리를 바꿉니다."
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

