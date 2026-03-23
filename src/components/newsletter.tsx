"use client";

import { useState } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles, Check, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const sectionRef = useRevealOnScroll();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, rgba(197,165,90,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium">
              Exclusive Deals
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get The <span className="text-gold">Smart Deal</span>
          </h2>
          <p className="text-white/50 mb-12 max-w-lg mx-auto text-lg leading-relaxed">
            Be the first to know about new inventory, exclusive pricing, and market insights.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-12 py-6 bg-white/[0.08] border-white/[0.15] text-white placeholder:text-white/30 rounded-full focus:border-gold focus:ring-gold hover:bg-white/[0.12] transition-colors"
              />
            </div>
            <Button
              type="submit"
              disabled={submitted}
              className={`font-semibold px-8 py-6 rounded-full transition-all duration-500 shrink-0 group ${
                submitted
                  ? "bg-emerald-500 hover:bg-emerald-500 text-white"
                  : "bg-gold hover:bg-gold-light text-navy-dark hover:shadow-lg hover:shadow-gold/30"
              }`}
            >
              {submitted ? (
                <>
                  <Check className="w-5 h-5 mr-1" />
                  Subscribed!
                </>
              ) : (
                <>
                  Sign Up
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          <p className="text-white/20 text-xs mt-6">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
