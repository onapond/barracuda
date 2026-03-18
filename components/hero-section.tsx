import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { assetPaths } from "@/data/site-content";

const heroCopy = {
  eyebrow: "로스터리 카페",
  title: "BARACUDA",
  subtitle: "로스팅과 공간의 결이 만나는 곳",
  description: "조용한 분위기 속에서 커피와 머무는 시간이 하나의 경험으로 이어집니다.",
  primaryCta: { href: "/visit", label: "바라쿠다 방문하기" },
  secondaryCta: { href: "/coffee", label: "커피 살펴보기" },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image src={assetPaths.hero} alt="Baracuda 공간을 담은 대표 이미지" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-[var(--color-overlay)]" />
      <Container className="relative flex min-h-screen items-end pb-20 pt-32 sm:pb-24">
        <div className="text-white">
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-white/72">{heroCopy.eyebrow}</p>
          <h1 className="max-w-[8ch] font-display text-6xl leading-[0.96] sm:max-w-[9ch] sm:text-7xl lg:max-w-[10ch] lg:text-[7rem]">{heroCopy.title}</h1>
          <p className="mt-6 max-w-[22ch] text-sm uppercase tracking-[0.2em] text-white/68 sm:max-w-[24ch] sm:text-base">{heroCopy.subtitle}</p>
          <p className="mt-6 max-w-[30ch] text-base leading-[1.75] tracking-[-0.01em] text-white/82 [word-break:keep-all] sm:max-w-[32ch] sm:text-lg lg:max-w-[34ch] lg:text-[1.25rem]">{heroCopy.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={heroCopy.primaryCta.href} variant="primary">{heroCopy.primaryCta.label}</Button>
            <Button href={heroCopy.secondaryCta.href} variant="primary" className="border-white/20 bg-transparent">{heroCopy.secondaryCta.label}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
