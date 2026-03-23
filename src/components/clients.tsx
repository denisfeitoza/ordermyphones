"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Quote, Star } from "lucide-react";

const clientLogos = [
  "Dell",
  "Motorola",
  "T-Mobile",
  "Hyundai",
  "PCG Wireless",
  "The Portables Choice",
  "AT&T",
  "Verizon",
];

export default function Clients() {
  const sectionRef = useRevealOnScroll();

  return (
    <section id="clients" className="py-24 bg-white relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-gold uppercase tracking-widest mb-3">
            Trusted By
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
            Our Clients
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-4 rounded-full" />
        </div>

        {/* Logo Marquee */}
        <div className="reveal overflow-hidden mb-20 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="shrink-0 mx-10 flex items-center justify-center h-20 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="text-2xl font-bold text-gray-200 hover:text-navy transition-colors duration-500 whitespace-nowrap select-none">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial — Premium */}
        <div className="reveal max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-navy via-navy-light to-navy rounded-3xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gold/[0.08] to-transparent" />
              <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-gold/[0.05] to-transparent" />
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle, rgba(197,165,90,0.5) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }} />
            </div>

            <div className="relative z-10 p-8 sm:p-16 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              <Quote className="w-12 h-12 text-gold/20 mx-auto mb-8" strokeWidth={1} />

              <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-10">
                &ldquo;The ease of finding devices at good prices and the
                uncomplicated sourcing process has been{" "}
                <span className="text-gold font-medium">excellent</span> for our
                operations.&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg shadow-gold/20">
                  <span className="text-xl font-bold text-navy-dark">SM</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Sonny M</p>
                  <p className="text-gold/70 text-sm font-medium">PCG Wireless</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
