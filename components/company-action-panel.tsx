import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanyActionLink } from "@/lib/company-site";

type CompanyActionPanelProps = {
  links: readonly CompanyActionLink[];
};

export function CompanyActionPanel({ links }: CompanyActionPanelProps) {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-wrap justify-center gap-4 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10">
          {links.map((link) => (
            <Button key={`${link.href}-${link.label}`} href={link.href} variant={link.variant}>
              {link.label}
            </Button>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}

