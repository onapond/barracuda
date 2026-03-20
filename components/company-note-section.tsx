import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanyNoteSectionData } from "@/lib/company-site";

type CompanyNoteSectionProps = {
  data: CompanyNoteSectionData;
};

export function CompanyNoteSection({ data }: CompanyNoteSectionProps) {
  return (
    <SectionWrapper>
      <Container>
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 text-center sm:p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{data.eyebrow}</p>
          <p className="mx-auto mt-5 max-w-[44rem] text-base leading-8 text-[var(--color-muted)] sm:text-lg">{data.body}</p>
        </div>
      </Container>
    </SectionWrapper>
  );
}

