import type { Metadata } from "next";
import { Dela_Gothic_One, DotGothic16, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import RevealObserver from "@/components/RevealObserver";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, pageMeta, personJsonLd } from "@/lib/seo";

const display = Dela_Gothic_One({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const pixel = DotGothic16({ subsets: ["latin"], weight: "400", variable: "--font-pixel" });
const sans = Zen_Kaku_Gothic_New({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta(
    "/",
    "Nicholas Perry | Apps and websites | Cyberlounge",
    "Nicholas Perry builds apps and websites: two cookout card games, a reading journal, and an app that pays you to poop.",
  ),
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    personJsonLd,
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en",
      publisher: { "@id": personJsonLd["@id"] },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${pixel.variable} ${sans.variable}`}>
      <body className="paper antialiased">
        <SmoothScroll />
        <RevealObserver />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <JsonLd data={siteJsonLd} />
      </body>
    </html>
  );
}
