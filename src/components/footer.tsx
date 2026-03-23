import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const policyLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Accessibility Statement", href: "#" },
  { label: "Shipping Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Refund Policy", href: "#" },
];

const navLinks = [
  { label: "Our Expertise", href: "#expertise" },
  { label: "Products", href: "#products" },
  { label: "Partners", href: "#partner" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Order My Phones"
              width={140}
              height={40}
              className="h-8 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Your trusted global partner for new and certified pre-owned mobile device distribution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/40">
              <p>11816 Inwood Rd</p>
              <p>Dallas, TX 75244, USA</p>
              <a href="tel:+13104036846" className="hover:text-gold transition-colors">310-403-6846</a>
              <a href="mailto:info@ordermyphones.com" className="hover:text-gold transition-colors">info@ordermyphones.com</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Legal</h4>
            <nav className="flex flex-col gap-2.5">
              {policyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Order My Phones. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-xs text-white/25 hover:text-gold transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
