import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanyHomepagePreviewData } from "@/lib/company-site";

type CompanyHomepagePreviewProps = {
  data: CompanyHomepagePreviewData;
  reverse?: boolean;
};

export function CompanyHomepagePreview({ data }: CompanyHomepagePreviewProps) {
  const [featured, ...supporting] = data.images;

  return (
    <SectionWrapper className={`${data.surface === "tint" ? "bg-[var(--color-surface)] " : ""}py-14 sm:py-18 lg:py-20`}>
      <Container>
        <div className="border-b border-[var(--color-line)] pb-7">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{data.eyebrow}</p>
          <h2 className="type-wrap-balance mt-4 max-w-[14rem] pb-[0.14em] font-heading text-[1.85rem] font-semibold leading-[1.14] tracking-[-0.04em] whitespace-pre-line sm:max-w-[17rem] sm:text-[2.6rem] lg:max-w-[19rem] lg:text-[3rem]">
            {data.title}
          </h2>
          <p className="type-wrap-balance mt-4 max-w-[15rem] text-sm leading-6 text-[var(--color-muted)] sm:max-w-[18rem] sm:text-[0.96rem] sm:leading-7 lg:max-w-[19rem]">{data.description}</p>
          <Button href={data.cta.href} className="mt-7">
            {data.cta.label}
          </Button>
        </div>

        <div className="mt-8 grid gap-5">
          {featured ? (
            <article className="overflow-hidden rounded-[2.4rem] border border-[var(--color-line)] bg-white">
              <div className={`relative ${featured.heightClassName ?? "min-h-[30rem] sm:min-h-[42rem] lg:min-h-[52rem]"}`}>
                <Image src={featured.src} alt={featured.alt} fill className="object-cover" />
              </div>
            </article>
          ) : null}

          {supporting.length ? (
            <div className={`grid gap-5 ${supporting.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
              {supporting.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white">
                  <div className={`relative ${image.heightClassName ?? "min-h-[24rem] sm:min-h-[28rem] lg:min-h-[32rem]"}`}>
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </SectionWrapper>
  );
}

