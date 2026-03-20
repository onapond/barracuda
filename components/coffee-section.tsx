import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const coffeeCopy = {
  eyebrow: "커피",
  title: "로스터리 기반의 커피를 전합니다",
  description: "원두 선택부터 한 잔의 마무리까지 바라쿠다의 리듬으로 다듬었습니다.",
  image: { src: "/images/roastery.png", alt: "바라쿠다 로스터리 무드를 보여주는 이미지" },
  features: [
    { title: "원두 셀렉션", description: "계절에 맞춰 선명하게 고른 구성" },
    { title: "로스팅 방향", description: "과하지 않고 오래 남는 균형" },
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
            <SectionHeading
              eyebrow={coffeeCopy.eyebrow}
              title={coffeeCopy.title}
              description={coffeeCopy.description}
              titleWidth="compact"
              descriptionWidth="compact"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {coffeeCopy.features.map((feature) => (
                <article key={feature.title} className="rounded-[1.75rem] border border-[var(--color-line)] p-6">
                  <h3 className="type-card-title type-wrap-balance">{feature.title}</h3>
                  <p className="type-body-sm mt-3 max-w-[24ch] text-[var(--color-muted)]">{feature.description}</p>
                </article>
              ))}
            </div>
            <Button href={coffeeCopy.cta.href} className="mt-8">
              {coffeeCopy.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

