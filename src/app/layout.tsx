import type { Metadata } from "next";
import { Dela_Gothic_One, DotGothic16, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const display = Dela_Gothic_One({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const pixel = DotGothic16({ subsets: ["latin"], weight: "400", variable: "--font-pixel" });
const sans = Zen_Kaku_Gothic_New({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });

const title = "Cyberlounge | Nicholas Perry";
const description =
  "Nicholas Perry builds apps and websites: two cookout card games, a reading journal, and an app that pays you to poop.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberlounge.net"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://cyberlounge.net",
    siteName: "Cyberlounge",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Cyberlounge, the quest log of Nicholas Perry" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-cover.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${pixel.variable} ${sans.variable}`}>
      <body className="paper antialiased">
        <SmoothScroll />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
