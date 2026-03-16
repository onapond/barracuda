import { cn } from "@/lib/cn";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("section-fade scroll-mt-24 py-20 sm:py-24 lg:py-32", className)}>
      {children}
    </section>
  );
}
