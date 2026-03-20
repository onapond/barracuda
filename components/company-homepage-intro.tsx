import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanyHomepageIntroData } from "@/lib/company-site";

type CompanyHomepageIntroProps = {
  data: CompanyHomepageIntroData;
};

export function CompanyHomepageIntro({ data }: CompanyHomepageIntroProps) {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div className="relative min-h-[24rem] overflow-hidden rounded-[2.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] sm:min-h-[32rem]">
            <Image src={data.primaryImage.src} alt={data.primaryImage.alt} fill className="object-cover" />
          </div>
          <div className="grid gap-6 lg:grid-rows-[auto_1fr]">
            <div className="rounded-[2.2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{data.eyebrow}</p>
              <h2 className="mt-4 max-w-[12ch] font-heading text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.04em] whitespace-pre-line sm:text-[3.3rem]">
                {data.title}
              </h2>
              <p className="mt-5 max-w-[34rem] text-base leading-8 text-[var(--color-muted)] sm:text-[1.04rem]">
                {data.description}
              </p>
              <Button href={data.cta.href} className="mt-8">
                {data.cta.label}
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {data.secondaryImages.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white">
                  <div className={`relative ${image.heightClassName ?? "min-h-[18rem] sm:min-h-[20rem]"}`}>
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </div>
                  {image.title || image.description ? (
                    <div className="p-6">
                      {image.title ? <h3 className="font-heading text-[1.45rem] font-semibold leading-[1.12] tracking-[-0.03em]">{image.title}</h3> : null}
                      {image.description ? <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{image.description}</p> : null}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
