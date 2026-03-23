"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Package, Globe, ShieldCheck } from "lucide-react";

const partnerReasons = [
  {
    icon: Package,
    title: "Reliable & Consistent Inventory",
    description:
      "Continuous stock of new and certified pre-owned devices. Strong sourcing network for competitive pricing and availability.",
    number: "01",
  },
  {
    icon: Globe,
    title: "Efficient Global Logistics",
    description:
      "Strategic supply chain and trusted logistics partners. Secure, fast, and cost-optimized delivery worldwide for bulk orders.",
    number: "02",
  },
  {
    icon: ShieldCheck,
    title: "90-Day Warranty & Dedicated Support",
    description:
      "90-day warranty for all devices. Responsive and personalized customer support to resolve issues efficiently.",
    number: "03",
  },
];

/* Real brand SVG logos */
const BrandLogos = {
  Apple: () => (
    <svg viewBox="0 0 384 512" fill="currentColor" className="w-10 h-10">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.1 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  ),
  Samsung: () => (
    <svg viewBox="0 0 200 32" fill="currentColor" className="w-16 h-8">
      <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" letterSpacing="3">SAMSUNG</text>
    </svg>
  ),
  Google: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  ),
  Motorola: () => (
    <svg viewBox="0 0 200 32" fill="currentColor" className="w-16 h-8">
      <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" letterSpacing="2">MOTOROLA</text>
    </svg>
  ),
  Xiaomi: () => (
    <svg viewBox="0 0 200 32" fill="currentColor" className="w-14 h-8">
      <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" letterSpacing="2">Xiaomi</text>
    </svg>
  ),
  OnePlus: () => (
    <svg viewBox="0 0 200 32" fill="currentColor" className="w-16 h-8">
      <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" letterSpacing="1">OnePlus</text>
    </svg>
  ),
};

const brands = [
  { name: "Apple", Logo: BrandLogos.Apple },
  { name: "Samsung", Logo: BrandLogos.Samsung },
  { name: "Google", Logo: BrandLogos.Google },
  { name: "Motorola", Logo: BrandLogos.Motorola },
  { name: "Xiaomi", Logo: BrandLogos.Xiaomi },
  { name: "OnePlus", Logo: BrandLogos.OnePlus },
];

export default function PartnerBrands() {
  const sectionRef = useRevealOnScroll();

  return (
    <section id="partner" className="py-16 sm:py-24 bg-navy relative overflow-hidden" ref={sectionRef}>
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Why Partner With Us */}
          <div className="reveal">
            <span className="inline-block text-sm font-semibold text-gold uppercase tracking-widest mb-3">
              Partnership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10">
              Why Partner With Us
            </h2>

            <div className="space-y-5">
              {partnerReasons.map((item, i) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col sm:flex-row gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-gold/30 transition-all duration-500 overflow-hidden"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Number background */}
                  <span className="absolute -right-2 -top-4 text-7xl font-black text-white/[0.03] group-hover:text-gold/[0.08] transition-colors duration-500 select-none">
                    {item.number}
                  </span>

                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold/10 group-hover:scale-110 transition-all duration-500">
                    <item.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Mobile Brands */}
          <div className="reveal">
            <span className="inline-block text-sm font-semibold text-gold uppercase tracking-widest mb-3">
              Brands
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Top Mobile Brands
            </h2>
            <p className="text-white/50 mb-10 leading-relaxed">
              Discover excellence. Curated collection of leading brands focused
              on quality, innovation, and style for every need.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {brands.map((brand, i) => (
                <div
                  key={brand.name}
                  className="group relative aspect-[4/5] sm:aspect-square rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center justify-center gap-2 sm:gap-3 hover:bg-white/[0.08] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="text-white/40 group-hover:text-gold group-hover:scale-110 transition-all duration-500 relative z-10">
                    <brand.Logo />
                  </span>
                  <span className="text-xs font-medium text-white/50 group-hover:text-gold transition-colors duration-300 relative z-10">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider out */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 32L48 37.3C96 43 192 53 288 58.7C384 64 480 64 576 58.7C672 53 768 43 864 40C960 37 1056 43 1152 50.7C1248 59 1344 69 1392 74.7L1440 80V80H0Z" fill="#F5F5F5"/>
        </svg>
      </div>
    </section>
  );
}
