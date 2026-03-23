import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Order My Phones | Your Trusted Global Phone Distribution Partner",
  description:
    "Global wholesale distributor of new and certified pre-owned smartphones. 30+ years of experience. Reliable inventory, competitive pricing, and 90-day warranty.",
  keywords:
    "wholesale phones, phone distribution, bulk smartphones, certified pre-owned, refurbished phones, global distribution",
  openGraph: {
    title: "Order My Phones | Global Phone Distribution Partner",
    description:
      "Connecting businesses globally to high-quality mobile devices. Seamless, reliable, efficient supply chain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
