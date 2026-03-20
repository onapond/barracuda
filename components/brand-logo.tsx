import Image from "next/image";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  variant?: "symbol" | "wordmark";
  className?: string;
  priority?: boolean;
};

const logoMap = {
  symbol: {
    src: "/images/logo-symbol-gold.png",
    alt: "Baracuda symbol logo",
    width: 643,
    height: 1073,
  },
  wordmark: {
    src: "/images/logo-wordmark-gold.png",
    alt: "Baracuda wordmark logo",
    width: 1390,
    height: 338,
  },
} as const;

export function BrandLogo({ variant = "wordmark", className, priority = false }: BrandLogoProps) {
  const logo = logoMap[variant];

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={cn("h-auto w-full", className)}
    />
  );
}

