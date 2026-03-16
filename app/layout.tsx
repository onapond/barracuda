import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barracuda Roastery & Cafe",
  description:
    "Barracuda is a specialty coffee roastery and cafe space built around coffee, atmosphere, and brand experience.",
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
