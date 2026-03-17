import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { assetPaths } from "@/data/site-content";

const brandCopy = {
  eyebrow: "브랜드",
  title: "커피와 공간을 한 결로 엮습니다.",
  description: "배러쿠다는 맛과 분위기를 따로 나누지 않습니다.",
  pillars: ["커피", "공간", "무드", "경험"],
  cta: { href: "/brand", label: "브랜드 보기" },
  images: [
    { src: assetPaths.brand[0], alt: "브랜드 무드를 보여주는 첫 번째 이미지" },
    { src: assetPaths.brand[1], alt: "브랜드 무드를 보여주는 두 번째 이미지" },
    { src: assetPaths.brand[2], alt: "브랜드 무드를 보여주는 세 번째 이미지" },
  ],
};

export function BrandSection() {
  return (
    <SectionWrapper id="brand">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={brandCopy.eyebrow} title={brandCopy.title} description={brandCopy.description} titleWidth="compact" descriptionWidth="compact" titleClassName="text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-[1.18] tracking-[-0.03em]" />
            <div className="mt-8 flex flex-wrap gap-3">
              {brandCopy.pillars.map((pillar) => (
                <span key={pillar} className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">{pillar}</span>
              ))}
            </div>
            <Button href={brandCopy.cta.href} variant="ghost" className="mt-8">{brandCopy.cta.label}</Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] sm:row-span-2 sm:min-h-[620px]">
              <Image src={brandCopy.images[0].src} alt={brandCopy.images[0].alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-[2rem]">
              <Image src={brandCopy.images[1].src} alt={brandCopy.images[1].alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-[2rem]">
              <Image src={brandCopy.images[2].src} alt={brandCopy.images[2].alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
