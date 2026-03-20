import { Footer } from "@/components/footer";
import { CompanySiteHeader } from "@/components/company-site-header";

type CompanySiteShellProps = {
  children: React.ReactNode;
};

export function CompanySiteShell({ children }: CompanySiteShellProps) {
  return (
    <>
      <CompanySiteHeader />
      <main className="bg-white text-[var(--color-foreground)]">{children}</main>
      <Footer />
    </>
  );
}
