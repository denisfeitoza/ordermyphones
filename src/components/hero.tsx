"use client";

import { ArrowRight, Handshake } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

function AnimatedStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end, 2500);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="text-2xl sm:text-3xl font-bold text-gold tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-white/60 mt-1">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background with slow zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: "url('/images/new-hero.png')" }}
      />
      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, rgba(197,165,90,0.3) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Floating accent shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 sm:pt-32 sm:pb-40 lg:py-0 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="text-sm text-white/90 font-medium">
              30+ Years of Industry Experience
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Welcome to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]" style={{ backgroundSize: "200% 100%" }}>
                Order My Phones
              </span>
            </span>
            <br />
            <span className="text-xl sm:text-3xl lg:text-4xl font-normal text-white/80 mt-3 block leading-snug">
              Your Trusted Global Phone Distribution Partner
            </span>
          </h1>

          <p className="text-base sm:text-xl text-white/60 mb-8 sm:mb-10 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Seamless, reliable, and efficient supply chain for businesses
            seeking reliable sourcing and competitive pricing on new &amp;
            certified pre-owned devices.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#products"
              className="relative inline-flex items-center justify-center bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base group transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold-light/0 via-white/25 to-gold-light/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Explore Our Inventory
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold group transition-all duration-300 backdrop-blur-sm"
            >
              <Handshake className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              Partner With Us
            </a>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <AnimatedStat end={50} suffix="K+" label="Devices Shipped" />
            <AnimatedStat end={30} suffix="+" label="Countries Served" />
            <AnimatedStat end={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </div>

      {/* Scroll indicator - higher to not overlap wave */}
      <div className="absolute bottom-28 sm:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 80C840 87 960 93 1080 90C1200 87 1320 73 1380 66.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
