"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";

// Three.js scene is client-only and fairly heavy — load it lazily, no SSR.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-eyebrow]", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from("[data-hero-line]", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.1,
      });

      gsap.from("[data-hero-sub]", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from("[data-hero-cta]", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.5,
      });

      gsap.from("[data-hero-scene]", {
        opacity: 0,
        scale: 0.92,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-screen min-h-[640px] flex flex-col overflow-hidden"
    >
      {/* Decorative CMYK gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[16rem] sm:w-[20rem] lg:w-[26rem] h-[16rem] sm:h-[20rem] lg:h-[26rem] rounded-full bg-[var(--color-cyan)]/20 blur-3xl" />
        <div className="absolute top-1/3 -left-32 sm:-left-40 w-[14rem] sm:w-[18rem] lg:w-[22rem] h-[14rem] sm:h-[18rem] lg:h-[22rem] rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[12rem] sm:w-[16rem] lg:w-[18rem] h-[12rem] sm:h-[16rem] lg:h-[18rem] rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
      </div>

      <div className="container-custom flex-1 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center pt-20 sm:pt-24 pb-6">
        <div className="min-w-0">
          <p
            data-hero-eyebrow
            className="eyebrow text-[var(--color-accent)] mb-3 sm:mb-4"
          >
            Design · Print · Inspire
          </p>

          <h1 className="font-bold mb-4 sm:mb-6 leading-[1.05] text-[clamp(1.875rem,5.5vw,3.75rem)]">
            <span data-hero-line className="block">
              Bring Your Brand To Life
            </span>
            <span data-hero-line className="block">
              With{" "}
              <span className="font-display italic font-normal text-[var(--color-accent)]">
                Creative Design
              </span>
            </span>
            <span data-hero-line className="block">
              &amp; Premium Printing
            </span>
          </h1>

          <p
            data-hero-sub
            className="text-[var(--color-text-muted)] text-sm sm:text-base lg:text-lg max-w-md sm:max-w-lg mb-6 sm:mb-8 leading-relaxed"
          >
            From logos and brochures to banners and packaging, Akshara
            Graphics transforms ideas into stunning visual experiences.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              data-hero-cta
              href="#contact"
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[var(--color-accent)] text-white font-semibold text-sm sm:text-base hover:opacity-90 transition"
            >
              Get Free Quote
            </a>

            <a
              data-hero-cta
              href="#portfolio"
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border border-[var(--color-border)] font-semibold text-sm sm:text-base hover:bg-white transition"
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* 3D floating print products */}
        <div
          data-hero-scene
          className="relative h-[220px] sm:h-[320px] lg:h-[420px] hidden md:block"
        >
          <HeroScene />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-text-muted)] text-xs eyebrow">
        <span>Scroll</span>
        <span className="w-px h-6 bg-[var(--color-border)]" />
      </div>
    </section>
  );
}
