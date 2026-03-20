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
        eyebrow="Signature"
        title="바라쿠다에서 머무는\n여러 방식"
        description="한 공간 안에서도 시간과 목적에 따라 전혀 다른 장면이 펼쳐집니다. 지금은 이미지 기반으로 구성했고, 영상 파일이 준비되면 같은 탭에서 바로 교체할 수 있습니다."
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
