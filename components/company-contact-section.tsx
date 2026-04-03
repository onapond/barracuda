import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanyContactSectionData } from "@/lib/company-site";

type CompanyContactSectionProps = {
  data: CompanyContactSectionData;
  id?: string;
};

export function CompanyContactSection({ data, id }: CompanyContactSectionProps) {
  return (
    <SectionWrapper id={id} className={data.surface === "tint" ? "bg-[var(--color-surface)]" : undefined}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{data.eyebrow}</p>
            <h2 className="mt-4 whitespace-pre-line font-heading text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[3.4rem]">
              {data.title}
            </h2>
            <p className="mt-5 max-w-[34rem] text-base leading-8 text-[var(--color-muted)]">{data.description}</p>
            {data.note ? <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">{data.note}</p> : null}
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">{data.checklistTitle}</p>
              <div className="mt-5 grid gap-4">
                {data.checklist.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{item.label}</p>
                    <p className="mt-2 text-base leading-7 text-[var(--color-foreground)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">{data.methodsTitle}</p>
              <div className="mt-5 grid gap-4">
                {data.methods.map((method) => (
                  <div key={`${method.href}-${method.label}`} className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-background)] px-5 py-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{method.label}</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{method.detail}</p>
                    <div className="mt-4">
                      <Button href={method.href} variant={method.variant}>
                        {method.label}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
