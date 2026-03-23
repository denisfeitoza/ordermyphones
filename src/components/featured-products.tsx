"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import Image from "next/image";
import { Lock, Eye } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const products = [
  { id: 1, name: "iPhone 15 Pro Max", brand: "Apple", grade: "A+", color: "from-blue-500/20 to-purple-500/20" },
  { id: 2, name: "Galaxy S24 Ultra", brand: "Samsung", grade: "New", color: "from-indigo-500/20 to-blue-500/20" },
  { id: 3, name: "Pixel 8 Pro", brand: "Google", grade: "A", color: "from-green-500/20 to-teal-500/20" },
  { id: 4, name: "Moto G Power", brand: "Motorola", grade: "New", color: "from-red-500/20 to-orange-500/20" },
  { id: 5, name: "OnePlus 12", brand: "OnePlus", grade: "A+", color: "from-rose-500/20 to-pink-500/20" },
];

export default function FeaturedProducts() {
  const sectionRef = useRevealOnScroll();

  return (
    <section id="products" className="py-24 bg-light-gray relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-gold uppercase tracking-widest mb-3">
            Inventory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
            Featured Products
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-4 rounded-full" />
        </div>

        {/* Product cards grid */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl p-4 border border-gray-100 hover:border-gold/30 hover:shadow-2xl hover:shadow-navy/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Grade badge */}
              <div className="absolute top-3 right-3 z-10">
                <span
                  className={`px-2.5 py-1 text-[10px] font-bold rounded-full backdrop-blur-sm ${
                    product.grade === "New"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-gold/15 text-gold-dark"
                  }`}
                >
                  {product.grade}
                </span>
              </div>

              <div className={`aspect-[3/4] relative mb-3 rounded-xl overflow-hidden bg-gradient-to-b ${product.color}`}>
                <Image
                  src="/images/featured-phones.png"
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <Eye className="w-4 h-4 text-navy" />
                    <span className="text-xs font-semibold text-navy">View Details</span>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-gold font-semibold uppercase tracking-wider">
                {product.brand}
              </p>
              <h3 className="text-sm font-bold text-navy mt-1 leading-snug group-hover:text-navy-light transition-colors">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Login prompt */}
        <div className="reveal text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-8 py-5 shadow-sm">
            <Lock className="w-5 h-5 text-navy/40" />
            <p className="text-gray-500 text-sm">
              Full catalog available upon{" "}
              <a
                href="#contact"
                className="text-gold font-semibold hover:text-gold-dark transition-colors underline underline-offset-2"
              >
                requesting access
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
