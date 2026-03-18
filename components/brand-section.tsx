import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { assetPaths } from "@/data/site-content";

const brandCopy = {
  eyebrow: "브랜드",
  title: "BARACUDA 카페",
  description:
    "컨템포러리한 무드와 도심 녹지 뷰가 어우러지는 프리미엄 카페입니다. 피스앤파크 컨벤션 1층에서 차분한 여유와 휴식을 전합니다.",
  lead: "도심을 바라보며 잠시 쉬어가고, 자연스럽게 모일 수 있는 공간입니다.",
  cta: { href: "/brand", label: "브랜드 보기" },
  image: { src: assetPaths.brand[0], alt: "바라쿠다 브랜드 무드를 보여주는 이미지" },
};

export function BrandSection() {
  return (
    <SectionWrapper id="brand">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={brandCopy.eyebrow} title={brandCopy.title} description={brandCopy.description} titleWidth="compact" descriptionWidth="compact" titleClassName="text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-[1.18] tracking-[-0.03em]" />
            <p className="mt-8 max-w-[30ch] text-base leading-[1.8] text-[var(--color-muted)] sm:text-lg">{brandCopy.lead}</p>
            <Button href={brandCopy.cta.href} variant="ghost" className="mt-8">{brandCopy.cta.label}</Button>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] sm:min-h-[560px] lg:min-h-[620px]">
            <Image
              src={brandCopy.image.src}
              alt={brandCopy.image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
