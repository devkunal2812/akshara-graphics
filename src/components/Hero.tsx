"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-24">
      {/* Decorative CMYK gradient blobs (lightweight stand-in for the Three.js scene) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[18rem] sm:w-[24rem] lg:w-[28rem] h-[18rem] sm:h-[24rem] lg:h-[28rem] rounded-full bg-[var(--color-cyan)]/20 blur-3xl" />
        <div className="absolute top-1/3 -left-32 sm:-left-40 w-[16rem] sm:w-[20rem] lg:w-[24rem] h-[16rem] sm:h-[20rem] lg:h-[24rem] rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[14rem] sm:w-[18rem] lg:w-[20rem] h-[14rem] sm:h-[18rem] lg:h-[20rem] rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow text-[var(--color-accent)] mb-4 sm:mb-5">
            Design · Print · Inspire
          </p>

          <h1 className="heading-xl font-bold mb-6 sm:mb-8 max-w-2xl">
            Bring Your Brand To Life With{" "}
            <span className="font-display italic font-normal text-[var(--color-accent)]">
              Creative Design
            </span>{" "}
            &amp; Premium Printing Solutions
          </h1>

          <p className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed">
            From logos and brochures to banners and packaging, Akshara
            Graphics transforms ideas into stunning visual experiences.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[var(--color-accent)] text-white font-semibold text-sm sm:text-base hover:opacity-90 transition"
            >
              Get Free Quote
            </a>

            <a
              href="#portfolio"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[var(--color-border)] font-semibold text-sm sm:text-base hover:bg-white transition"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        {/* Floating product mockups (placeholder for Three.js floating objects) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-72 sm:h-96 lg:h-[420px]"
        >
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 left-4 sm:top-6 sm:left-10 w-40 sm:w-48 lg:w-56 h-28 sm:h-32 lg:h-36 rounded-2xl shadow-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-cyan)]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-28 sm:top-36 lg:top-40 right-0 w-44 sm:w-56 lg:w-64 h-32 sm:h-40 lg:h-44 rounded-2xl shadow-2xl bg-white border border-[var(--color-border)]"
          />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-8 sm:left-16 lg:left-20 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 rounded-3xl shadow-2xl bg-gradient-to-br from-[var(--color-accent)] to-yellow-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
