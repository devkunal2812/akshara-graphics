"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-3 md:py-4">

        {/* Real logo */}
        <a href="#" aria-label="Akshara Graphics home">
          <Image
            src="/logo.png"
            alt="Akshara Graphics logo"
            width={160}
            height={64}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-block px-5 py-2.5 lg:px-6 lg:py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-semibold hover:opacity-90 transition"
        >
          Get Free Quote
        </a>

        {/* Mobile/tablet toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-current" />
          <span className="w-6 h-0.5 bg-current" />
          <span className="w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile/tablet menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border)]">
          <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-6 py-3 rounded-full bg-[var(--color-accent)] text-white text-center font-semibold"
            >
              Get Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
