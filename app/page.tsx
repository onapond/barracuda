import { Footer } from "@/components/footer";
import { HomeReferenceHeader } from "@/components/home-reference-header";
import { HomeReferenceHero } from "@/components/home-reference-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[var(--color-foreground)]">
      <HomeReferenceHeader />
      <HomeReferenceHero />
      <Footer />
    </main>
  );
}
