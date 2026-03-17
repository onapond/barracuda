import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <Header />
      <main className="bg-[var(--color-background)] pt-20 text-[var(--color-foreground)]">{children}</main>
      <Footer />
    </>
  );
}
