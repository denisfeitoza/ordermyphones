"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Our Expertise", href: "#expertise" },
  { label: "Inventory", href: "#products" },
  { label: "Trade Smarter", href: "#partner" },
  { label: "About Us", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/images/logo.png"
            alt="Order My Phones"
            width={160}
            height={45}
            className="h-8 sm:h-10 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-3/4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="p-2 text-white/70 hover:text-white transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            )}
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden p-2 text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy border-navy-light w-80" showCloseButton={false}>
            <div className="flex flex-col h-full pt-8">
              <div className="flex justify-between items-center mb-8 px-2">
                <Image
                  src="/images/logo.png"
                  alt="Order My Phones"
                  width={140}
                  height={40}
                  className="h-8 w-auto brightness-0 invert"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-base font-medium text-white/80 hover:text-gold hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto pb-8 px-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold rounded-full py-6 text-center"
                  )}
                >
                  Get Quote
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
