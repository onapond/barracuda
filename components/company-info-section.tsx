import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanyInfoSectionData } from "@/lib/company-site";

type CompanyInfoSectionProps = {
  data: CompanyInfoSectionData;
};

export function CompanyInfoSection({ data }: CompanyInfoSectionProps) {
  return (
    <SectionWrapper className={data.surface === "tint" ? "bg-[var(--color-surface)]" : undefined}>
      <Container>
        <div className="border-b border-[var(--color-line)] pb-8">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{data.eyebrow}</p>
          <h2 className="mt-4 max-w-[12ch] font-heading text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] whitespace-pre-line sm:text-[3rem]">
            {data.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item) => (
            <article key={item.label} className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">{item.label}</p>
              <p className="mt-4 text-sm leading-7">{item.value}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          {data.links.map((link) => (
            <Button key={`${link.href}-${link.label}`} href={link.href} variant={link.variant}>
              {link.label}
            </Button>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}

