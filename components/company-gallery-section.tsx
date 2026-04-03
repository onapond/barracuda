import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { CompanyGalleryCardItem, CompanyGalleryImageGroup, CompanyGallerySectionData } from "@/lib/company-site";
import { BLUR_DATA_URL } from "@/lib/image-blur";

function renderGalleryCard(image: CompanyGalleryCardItem) {
  const cardKey = image.src ?? `${image.title ?? "untitled"}-${image.assetFileName ?? image.alt}`;
  const inner = (
    <>
      <div className={`relative ${image.heightClassName ?? "min-h-[320px] sm:min-h-[360px]"}`}>
        {image.src ? (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(50vw - 2.5rem), 380px"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover"
            />
            {image.href ? (
              <div className="absolute inset-0 flex items-end bg-black/0 p-6 transition duration-300 group-hover:bg-black/40">
                <span className="translate-y-1 text-[0.8rem] font-medium tracking-[0.06em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.hoverLabel ?? "자세히 알아보기 →"}
                </span>
              </div>
            ) : null}
          </>
        ) : (
          <div className="flex h-full min-h-[320px] flex-col justify-between bg-[linear-gradient(135deg,var(--color-surface)_0%,#f7f4ee_100%)] p-6 sm:min-h-[360px] sm:p-7">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[var(--color-muted)]">Image Pending</p>
              {image.assetFileName ? <p className="mt-4 font-mono text-sm text-[var(--color-foreground)]">{image.assetFileName}</p> : null}
            </div>
            <div className="space-y-2 text-sm text-[var(--color-muted)]">
              {image.recommendedSize ? <p>권장 크기: {image.recommendedSize}</p> : null}
              <p>이미지 준비 전까지 파일명 규칙만 고정합니다.</p>
            </div>
          </div>
        )}
      </div>
      {image.title || image.description ? (
        <div className="p-6 sm:p-7">
          {image.title ? <h3 className="font-heading text-[1.6rem] font-semibold leading-[1.1] tracking-[-0.03em]">{image.title}</h3> : null}
          {image.description ? <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--color-muted)]">{image.description}</p> : null}
        </div>
      ) : null}
    </>
  );

  return image.href ? (
    <a
      key={cardKey}
      href={image.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white"
    >
      {inner}
    </a>
  ) : (
    <article key={cardKey} className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white">
      {inner}
    </article>
  );
}

function renderImageGrid(images: readonly CompanyGalleryCardItem[], columns: 2 | 3) {
  return <div className={`grid gap-5 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>{images.map(renderGalleryCard)}</div>;
}

function renderImageGroup(group: CompanyGalleryImageGroup, columns: 2 | 3) {
  return (
    <div key={group.label} className="space-y-5">
      <div className="border-b border-[var(--color-line)] pb-3">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-[var(--color-muted)]">{group.label}</p>
      </div>
      {renderImageGrid(group.images, columns)}
    </div>
  );
}

export function CompanyGallerySection({
  eyebrow,
  title,
  description,
  footerNote,
  images,
  imageGroups,
  columns = 3,
  surface = "white",
}: CompanyGallerySectionData) {
  const hasGroups = Boolean(imageGroups?.length);

  return (
    <SectionWrapper className={surface === "tint" ? "bg-[var(--color-surface)]" : undefined}>
      <Container>
        <div className="border-b border-[var(--color-line)] pb-8">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-muted)]">{eyebrow}</p>
          <h2 className="mt-4 whitespace-pre-line font-heading text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[3rem]">{title}</h2>
          {description ? <p className="mt-5 max-w-[38rem] text-base leading-8 text-[var(--color-muted)]">{description}</p> : null}
        </div>

        <div className={hasGroups ? "mt-10 space-y-10" : "mt-10"}>
          {hasGroups ? imageGroups!.map((group) => renderImageGroup(group, columns)) : renderImageGrid(images, columns)}
        </div>
        {footerNote ? <p className="mt-8 text-sm leading-7 text-[var(--color-muted)]">{footerNote}</p> : null}
      </Container>
    </SectionWrapper>
  );
}
