import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

type CompanyMenuShowcaseProps = {
  eyebrow: string;
  title: string;
  description?: string;
  featureImage: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  };
  fullMenuImage: {
    src: string;
    alt: string;
  };
};

export function CompanyMenuShowcase({
  eyebrow,
  title,
  description,
  featureImage,
  fullMenuImage,
}: CompanyMenuShowcaseProps) {
  return (
    <SectionWrapper className="bg-[var(--color-surface)]">
      <Container>
        <div className="border-b border-[var(--color-line)] pb-8">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{eyebrow}</p>
          <h2 className="mt-4 max-w-[13ch] font-heading text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] whitespace-pre-line sm:text-[3rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-[42rem] text-base leading-8 text-[var(--color-muted)]">{description}</p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <article className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white">
            <div className="relative min-h-[320px] sm:min-h-[420px]">
              <Image src={featureImage.src} alt={featureImage.alt} fill className="object-cover" />
            </div>
            {featureImage.title || featureImage.description ? (
              <div className="p-6 sm:p-7">
                {featureImage.title ? <h3 className="font-heading text-[1.6rem] font-semibold leading-[1.1] tracking-[-0.03em]">{featureImage.title}</h3> : null}
                {featureImage.description ? <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{featureImage.description}</p> : null}
              </div>
            ) : null}
          </article>

          <article className="rounded-[2rem] border border-[var(--color-line)] bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--color-line)] pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Full Menu</p>
                <h3 className="mt-2 font-heading text-[1.6rem] font-semibold leading-[1.1] tracking-[-0.03em]">스크롤로 전체 메뉴 보기</h3>
              </div>
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-muted)]">Scroll</p>
            </div>

            <div className="mt-5 max-h-[44rem] overflow-y-auto rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-3 sm:p-4">
              <Image src={fullMenuImage.src} alt={fullMenuImage.alt} width={1400} height={2200} className="h-auto w-full rounded-[1rem]" />
            </div>
          </article>
        </div>
      </Container>
    </SectionWrapper>
  );
}