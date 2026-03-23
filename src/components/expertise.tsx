"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { Package, ShieldCheck, Settings2 } from "lucide-react";

const expertiseItems = [
  {
    icon: Package,
    title: "Comprehensive Device Distribution",
    description:
      "Wide range of new and certified pre-owned mobile devices, including smartphones and tablets for diverse market demands.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Quality Assurance",
    description:
      "Each device undergoes rigorous testing and grading to ensure reliability, performance, and customer satisfaction.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Settings2,
    title: "Customized Enterprise Solutions",
    description:
      "Tailored configurations, software integrations, and branding for corporate client requirements across sectors.",
    gradient: "from-purple-500 to-pink-400",
  },
];

export default function Expertise() {
  const sectionRef = useRevealOnScroll();
  const glowRef = useMouseGlow();

  return (
    <section id="expertise" className="py-24 bg-white relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-gold uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
            Our Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-4 rounded-full" />
        </div>

        <div ref={glowRef} className="grid md:grid-cols-3 gap-8">
          {expertiseItems.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative bg-white border border-gray-100 rounded-2xl p-8 text-center hover:border-transparent hover:shadow-2xl hover:shadow-navy/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Mouse-follow glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(197,165,90,0.06), transparent 40%)`,
                }}
              />

              {/* Icon with gradient ring */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-navy/20">
                  <item.icon className="w-9 h-9 text-gold" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-navy-light transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Animated border gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider to navy section */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 72C960 75 1056 69 1152 61.3C1248 53 1344 43 1392 37.3L1440 32V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" fill="#1B2A4A"/>
        </svg>
      </div>
    </section>
  );
}
