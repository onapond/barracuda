import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baracuda Roastery & Cafe",
  description:
    "Baracuda is a brand-first roastery and cafe space shaped by coffee, atmosphere, and quiet cultural experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
