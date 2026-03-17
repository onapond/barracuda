import { BrandSection } from "@/components/brand-section";
import { CoffeeSection } from "@/components/coffee-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SpaceSection } from "@/components/space-section";
import { StoreSection } from "@/components/store-section";
import { VisitSection } from "@/components/visit-section";

export default function Home() {
  return (
    <main className="bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Header />
      <HeroSection />
      <BrandSection />
      <CoffeeSection />
      <SpaceSection />
      <StoreSection />
      <VisitSection />
      <Footer />
    </main>
  );
}
