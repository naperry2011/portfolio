import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", axes: ["opsz"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberlounge.net"),
  title: "Cyberlounge | Software & Cloud Consulting",
  description: "Independent software and cloud development for teams that need to ship.",
  openGraph: {
    title: "Cyberlounge | Software & Cloud Consulting",
    description: "Independent software and cloud development for teams that need to ship.",
    url: "https://cyberlounge.net",
    siteName: "Cyberlounge",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Cyberlounge — Software & Cloud Consulting" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberlounge | Software & Cloud Consulting",
    description: "Independent software and cloud development for teams that need to ship.",
    images: ["/og-cover.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        <Grain />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
