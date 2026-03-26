import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/image-blur";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanyHomepageIntroData } from "@/lib/company-site";

type CompanyHomepageIntroProps = {
  data: CompanyHomepageIntroData;
};

export function CompanyHomepageIntro({ data }: CompanyHomepageIntroProps) {
  return (
    <SectionWrapper className="py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="border-b border-[var(--color-line)] pb-7">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{data.eyebrow}</p>
          <h2 className="type-wrap-balance mt-4 max-w-[14rem] pb-[0.14em] font-heading text-[1.85rem] font-semibold leading-[1.14] tracking-[-0.04em] whitespace-pre-line sm:max-w-[17rem] sm:text-[2.7rem] lg:max-w-[19rem] lg:text-[3.1rem]">
            {data.title}
          </h2>
          <p className="type-wrap-balance mt-4 max-w-[15rem] text-[0.9375rem] leading-[1.7] text-[var(--color-muted)] sm:max-w-[18rem] sm:text-[0.96rem] sm:leading-7 lg:max-w-[19rem]">
            {data.description}
          </p>
          <Button href={data.cta.href} className="mt-7">
            {data.cta.label}
          </Button>
        </div>

        <div className="mt-8 grid gap-5">
          <article className="overflow-hidden rounded-[2.5rem] border border-[var(--color-line)] bg-[var(--color-surface)]">
            <div className="relative min-h-[32rem] sm:min-h-[42rem] lg:min-h-[52rem]">
              <Image src={data.primaryImage.src} alt={data.primaryImage.alt} fill sizes="(max-width: 1280px) 100vw, 1200px" placeholder="blur" blurDataURL={BLUR_DATA_URL} className="object-cover" />
            </div>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            {data.secondaryImages.map((image) => (
              <article key={image.src} className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white">
                <div className={`relative ${image.heightClassName ?? "min-h-[24rem] sm:min-h-[28rem] lg:min-h-[32rem]"}`}>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(50vw - 2.5rem), 580px" placeholder="blur" blurDataURL={BLUR_DATA_URL} className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

