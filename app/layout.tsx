import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { site } from "@/components/content";

import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL("https://sujimathai-unit1-demo.vercel.app"),
  openGraph: {
    title: site.name,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Suji Math AI Unit 1 Demo social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="site-shell">
          <header className="top-nav">
            <Link href="/" className="brand-mark">
              <span className="brand-kicker">Suji Math AI</span>
              <strong>{site.name}</strong>
            </Link>
            <nav className="top-links">
              <Link href="/">Home</Link>
              <Link href="/unit1">Unit 1</Link>
              <Link href="/unit1/proof">Proof</Link>
            </nav>
          </header>
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
