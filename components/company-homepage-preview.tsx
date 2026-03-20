import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanyHomepagePreviewData } from "@/lib/company-site";

type CompanyHomepagePreviewProps = {
  data: CompanyHomepagePreviewData;
  reverse?: boolean;
};

export function CompanyHomepagePreview({ data, reverse = false }: CompanyHomepagePreviewProps) {
  const [featured, ...supporting] = data.images;

  return (
    <SectionWrapper className={data.surface === "tint" ? "bg-[var(--color-surface)]" : undefined}>
      <Container>
        <div className={`grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{data.eyebrow}</p>
            <h2 className="mt-4 max-w-[12ch] font-heading text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.04em] whitespace-pre-line sm:text-[3.2rem]">
              {data.title}
            </h2>
            <p className="mt-5 max-w-[34rem] text-base leading-8 text-[var(--color-muted)] sm:text-[1.03rem]">{data.description}</p>
            <Button href={data.cta.href} className="mt-8">
              {data.cta.label}
            </Button>
          </div>

          <div className="grid gap-6">
            {featured ? (
              <article className="overflow-hidden rounded-[2.4rem] border border-[var(--color-line)] bg-white">
                <div className={`relative ${featured.heightClassName ?? "min-h-[22rem] sm:min-h-[30rem]"}`}>
                  <Image src={featured.src} alt={featured.alt} fill className="object-cover" />
                </div>
                {featured.title || featured.description ? (
                  <div className="p-6 sm:p-7">
                    {featured.title ? <h3 className="font-heading text-[1.6rem] font-semibold leading-[1.1] tracking-[-0.03em]">{featured.title}</h3> : null}
                    {featured.description ? <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{featured.description}</p> : null}
                  </div>
                ) : null}
              </article>
            ) : null}

            {supporting.length ? (
              <div className={`grid gap-6 ${supporting.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
                {supporting.map((image) => (
                  <article key={image.src} className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white">
                    <div className={`relative ${image.heightClassName ?? "min-h-[16rem] sm:min-h-[18rem]"}`}>
                      <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    </div>
                    {image.title || image.description ? (
                      <div className="p-6">
                        {image.title ? <h3 className="font-heading text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.03em]">{image.title}</h3> : null}
                        {image.description ? <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{image.description}</p> : null}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
