import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { assetPaths } from "@/data/site-content";

const heroCopy = {
  eyebrow: "로스터리 카페",
  subtitle: "로스팅의 기준이 공간의 결이 되는 곳",
  description: "커피의 인상과 머무는 분위기를 한 공간에 담았습니다.",
  primaryCta: { href: "/visit", label: "방문 정보" },
  secondaryCta: { href: "/coffee", label: "커피 보기" },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image src={assetPaths.hero} alt="Baracuda 공간을 담은 대표 이미지" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-[var(--color-overlay)]" />
      <Container className="relative flex min-h-screen items-end pb-20 pt-32 sm:pb-24">
        <div className="text-white">
          <p className="type-eyebrow mb-5 text-white/72">{heroCopy.eyebrow}</p>
          <div className="w-[18rem] sm:w-[25rem] lg:w-[34rem]">
            <BrandLogo variant="wordmark" priority className="w-full" />
          </div>
          <p className="type-eyebrow mt-6 max-w-[24ch] text-white/68">{heroCopy.subtitle}</p>
          <p className="type-body-lg type-wrap-balance mt-6 max-w-[30ch] text-white/82 sm:max-w-[32ch] lg:max-w-[34ch]">
            {heroCopy.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={heroCopy.primaryCta.href} variant="primary">
              {heroCopy.primaryCta.label}
            </Button>
            <Button
              href={heroCopy.secondaryCta.href}
              variant="primary"
              className="border-white/20 bg-transparent"
            >
              {heroCopy.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

