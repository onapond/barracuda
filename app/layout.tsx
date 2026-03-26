import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: false,
  variable: "--font-noto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barracudaweb.vercel.app"),
  title: "Baracuda Roastery & Cafe",
  description:
    "Baracuda is a brand-first roastery and cafe space shaped by coffee, atmosphere, and quiet cultural experience.",
  openGraph: {
    title: "Baracuda Roastery & Cafe",
    description:
      "Baracuda is a brand-first roastery and cafe space shaped by coffee, atmosphere, and quiet cultural experience.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Baracuda Roastery & Cafe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baracuda Roastery & Cafe",
    description:
      "Baracuda is a brand-first roastery and cafe space shaped by coffee, atmosphere, and quiet cultural experience.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
