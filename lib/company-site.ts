import type { CompanyHomepageTemplateData } from "@/components/company-homepage-template";

export type SiteMetadata = {
  title: string;
  description: string;
};

export type CompanyGalleryItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  heightClassName?: string;
};

export type CompanyMediaItem = {
  src: string;
  alt: string;
  type?: "image" | "video";
  posterSrc?: string;
};

export type CompanyGallerySectionData = {
  eyebrow: string;
  title: string;
  description?: string;
  images: readonly CompanyGalleryItem[];
  columns?: 2 | 3;
  surface?: "white" | "tint";
};

export type CompanyPageHeroData = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export type CompanyActionLink = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type CompanyMenuShowcaseData = {
  eyebrow: string;
  title: string;
  description?: string;
  featureImage: CompanyGalleryItem;
  fullMenuImage: {
    src: string;
    alt: string;
  };
};

export type CompanyInfoSectionData = {
  eyebrow: string;
  title: string;
  items: readonly { label: string; value: string }[];
  links: readonly CompanyActionLink[];
  surface?: "white" | "tint";
};

export type CompanyNoteSectionData = {
  eyebrow: string;
  body: string;
};

export type CompanyFormField = {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "date" | "number" | "time";
  placeholder?: string;
};

export type CompanyMessageField = {
  name: string;
  label: string;
  placeholder: string;
};

export type SpaceInquiryFormConfig = {
  title: string;
  description: string;
  submitLabel: string;
  successMessage: string;
  subject: string;
  fields: readonly CompanyFormField[];
  messageField: CompanyMessageField;
};

export type MenuOrderFormConfig = {
  title: string;
  description: string;
  submitLabel: string;
  successMessage: string;
  subject: string;
  orderTypes: readonly string[];
  fields: readonly CompanyFormField[];
  messageField: CompanyMessageField;
};

export type CompanyFooterData = {
  logo?: CompanyHomepageTemplateData["logo"];
  statement: string;
  subline: string;
  address: string;
  familySites: readonly { href: string; label: string }[];
  socialLinks: readonly { href: string; label: "Blog" | "YouTube" | "Instagram" }[];
  copyright: string;
};

export type CompanyStandardPageData = {
  metadata: SiteMetadata;
  hero: CompanyPageHeroData;
  gallerySections: readonly CompanyGallerySectionData[];
};

export type CompanyHomepageIntroData = {
  eyebrow: string;
  title: string;
  description: string;
  cta: CompanyActionLink;
  primaryImage: CompanyGalleryItem;
  secondaryImages: readonly CompanyGalleryItem[];
};

export type CompanySignatureTab = {
  key: string;
  label: string;
  title: string;
  description: string;
  cta: CompanyActionLink;
  featuredMedia: CompanyMediaItem;
  gallery: readonly CompanyGalleryItem[];
};

export type CompanyHomepagePreviewData = {
  eyebrow: string;
  title: string;
  description: string;
  cta: CompanyActionLink;
  images: readonly CompanyGalleryItem[];
  surface?: "white" | "tint";
};

export type CompanySiteConfig = {
  siteKey: string;
  homepage: CompanyHomepageTemplateData;
  homepageIntro: CompanyHomepageIntroData;
  homepageSignatureTabs: readonly CompanySignatureTab[];
  homepagePreviews: {
    spaceExperience: CompanyHomepagePreviewData;
    brand: CompanyHomepagePreviewData;
    coffee: CompanyHomepagePreviewData;
    menu: CompanyHomepagePreviewData;
    visit: CompanyHomepagePreviewData;
  };
  footer: CompanyFooterData;
  brand: CompanyStandardPageData & {
    noteSection?: CompanyNoteSectionData;
  };
  coffee: CompanyStandardPageData & {
    menuShowcase?: CompanyMenuShowcaseData;
    actionLinks?: readonly CompanyActionLink[];
  };
  space: CompanyStandardPageData & {
    inquirySectionId: string;
    inquiryForm: SpaceInquiryFormConfig;
  };
  menu: CompanyStandardPageData & {
    orderSectionId: string;
    orderForm: MenuOrderFormConfig;
  };
  store: CompanyStandardPageData & {
    actionLinks?: readonly CompanyActionLink[];
  };
  visit: CompanyStandardPageData & {
    infoSection: CompanyInfoSectionData;
  };
  contact: {
    formRecipientEmail: string;
  };
};
