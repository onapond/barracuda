import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/image-blur";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";

type GalleryItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  heightClassName?: string;
  href?: string;
  hoverLabel?: string;
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
          <h2 className="mt-4 max-w-[13ch] font-heading text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] whitespace-pre-line sm:whitespace-normal sm:text-[3rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-[38rem] text-base leading-8 text-[var(--color-muted)]">{description}</p>
          ) : null}
        </div>

        <div className={`mt-10 grid gap-5 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {images.map((image) => {
            const inner = (
              <>
                <div className={`relative ${image.heightClassName ?? "min-h-[320px] sm:min-h-[360px]"}`}>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(50vw - 2.5rem), 380px" placeholder="blur" blurDataURL={BLUR_DATA_URL} className="object-cover" />
                  {image.href ? (
                    <div className="absolute inset-0 flex items-end bg-black/0 p-6 transition duration-300 group-hover:bg-black/40">
                      <span className="translate-y-1 text-[0.8rem] font-medium tracking-[0.06em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {image.hoverLabel ?? "자세히 알아보기 →"}
                      </span>
                    </div>
                  ) : null}
                </div>
                {image.title || image.description ? (
                  <div className="p-6 sm:p-7">
                    {image.title ? <h3 className="font-heading text-[1.6rem] font-semibold leading-[1.1] tracking-[-0.03em]">{image.title}</h3> : null}
                    {image.description ? <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{image.description}</p> : null}
                  </div>
                ) : null}
              </>
            );

            return image.href ? (
              <a
                key={`${image.src}-${image.alt}`}
                href={image.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white"
              >
                {inner}
              </a>
            ) : (
              <article key={`${image.src}-${image.alt}`} className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white">
                {inner}
              </article>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
