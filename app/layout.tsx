import Link from "next/link";
import { ReactNode } from "react";

import { site } from "@/components/content";

import "./globals.css";

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
      </body>
    </html>
  );
}
