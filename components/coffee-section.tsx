import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { assetPaths } from "@/data/site-content";

const coffeeCopy = {
  eyebrow: "커피",
  title: "로스터리 기반의 커피를 선보입니다.",
  description: "원두 선택부터 잔의 인상까지, 배러쿠다의 방향이 담긴 커피입니다.",
  image: { src: assetPaths.coffee, alt: "원두와 로스팅 무드를 보여주는 커피 이미지" },
  features: [
    { title: "원두 셀렉션", description: "방향이 분명한 선택" },
    { title: "로스팅 방향", description: "균형이 선명한 맛" },
  ],
  cta: { href: "/coffee", label: "커피 보기" },
};

export function CoffeeSection() {
  return (
    <SectionWrapper id="coffee" className="bg-[var(--color-surface)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
            <Image src={coffeeCopy.image.src} alt={coffeeCopy.image.alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div>
            <SectionHeading eyebrow={coffeeCopy.eyebrow} title={coffeeCopy.title} description={coffeeCopy.description} titleWidth="compact" descriptionWidth="compact" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {coffeeCopy.features.map((feature) => (
                <article key={feature.title} className="rounded-[1.75rem] border border-[var(--color-line)] p-6">
                  <h3 className="font-display text-2xl leading-tight">{feature.title}</h3>
                  <p className="mt-3 max-w-[24ch] text-sm leading-7 text-[var(--color-muted)]">{feature.description}</p>
                </article>
              ))}
            </div>
            <Button href={coffeeCopy.cta.href} className="mt-8">{coffeeCopy.cta.label}</Button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
