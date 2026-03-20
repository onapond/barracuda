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
          <h2 className="mt-4 max-w-[11ch] font-heading text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.05em] whitespace-pre-line sm:text-[3.5rem] lg:text-[4rem]">
            {data.title}
          </h2>
          <p className="mt-4 max-w-[34rem] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">{data.description}</p>
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