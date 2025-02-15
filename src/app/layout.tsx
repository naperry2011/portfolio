import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyberlounge.net | Software & Cloud Development",
  description: "Professional software and cloud development services powered by AI",
  openGraph: {
    title: 'Cyberlounge.net | Software & Cloud Development',
    description: 'Professional software and cloud development services powered by AI',
    url: 'https://cyberlounge.net',
    siteName: 'Cyberlounge',
    images: [
      {
        url: '/cyberpunk-profile.jpg', // Update to your new image name
        width: 1200,
        height: 630,
        alt: 'CyberCap - Professional Software Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyberlounge.net | Software & Cloud Development',
    description: 'Professional software and cloud development services powered by AI',
    images: ['/cyberpunk-profile.jpg'], // Same image as OG
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
