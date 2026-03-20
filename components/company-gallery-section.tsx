import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

type GalleryItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  heightClassName?: string;
};

type CompanyGallerySectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  images: readonly GalleryItem[];
  columns?: 2 | 3;
  surface?: "white" | "tint";
};

export function CompanyGallerySection({
  eyebrow,
  title,
  description,
  images,
  columns = 3,
  surface = "white",
}: CompanyGallerySectionProps) {
  return (
    <SectionWrapper className={surface === "tint" ? "bg-[var(--color-surface)]" : undefined}>
      <Container>
        <div className="border-b border-[var(--color-line)] pb-8">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{eyebrow}</p>
          <h2 className="mt-4 max-w-[13ch] font-heading text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] whitespace-pre-line sm:text-[3rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-[38rem] text-base leading-8 text-[var(--color-muted)]">{description}</p>
          ) : null}
        </div>

        <div className={`mt-10 grid gap-5 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {images.map((image) => (
            <article key={`${image.src}-${image.alt}`} className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white">
              <div className={`relative ${image.heightClassName ?? "min-h-[320px] sm:min-h-[360px]"}`}>
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
              {image.title || image.description ? (
                <div className="p-6 sm:p-7">
                  {image.title ? <h3 className="font-heading text-[1.6rem] font-semibold leading-[1.1] tracking-[-0.03em]">{image.title}</h3> : null}
                  {image.description ? <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{image.description}</p> : null}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
