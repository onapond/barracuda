import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanyCoffeeMenuSectionData } from "@/lib/company-site";

type Props = { data: CompanyCoffeeMenuSectionData };

export function CompanyCoffeeMenuSection({ data }: Props) {
  return (
    <SectionWrapper className={data.surface === "tint" ? "bg-[var(--color-surface)]" : undefined}>
      <Container>
        <div className="border-b border-[var(--color-line)] pb-8">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{data.eyebrow}</p>
          <h2 className="mt-4 max-w-[13ch] font-heading text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] whitespace-pre-line sm:whitespace-normal sm:text-[3rem]">
            {data.title}
          </h2>
          {data.description ? (
            <p className="mt-5 max-w-[38rem] text-base leading-8 text-[var(--color-muted)]">{data.description}</p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.categories.map((cat) => (
            <div key={cat.label} className="rounded-[1.6rem] border border-[var(--color-line)] bg-white p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[var(--color-muted)]">{cat.label}</p>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-[0.9375rem] leading-[1.7]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
