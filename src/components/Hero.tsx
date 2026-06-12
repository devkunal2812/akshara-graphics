"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Decorative CMYK gradient blobs (lightweight stand-in for the Three.js scene) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[var(--color-cyan)]/20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[24rem] h-[24rem] rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[20rem] h-[20rem] rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[var(--color-accent)] font-semibold mb-4 tracking-wide">
            DESIGN · PRINT · INSPIRE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Bring Your Brand To Life With Creative Design &amp; Premium
            Printing Solutions
          </h1>

          <p className="text-[var(--color-text-muted)] text-lg max-w-xl mb-10">
            From logos and brochures to banners and packaging, Akshara
            Graphics transforms ideas into stunning visual experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-semibold hover:opacity-90 transition"
            >
              Get Free Quote
            </a>

            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full border border-[var(--color-border)] font-semibold hover:bg-white transition"
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
          className="relative h-[420px] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 left-10 w-56 h-36 rounded-2xl shadow-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-cyan)]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-40 right-0 w-64 h-44 rounded-2xl shadow-2xl bg-white border border-[var(--color-border)]"
          />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-20 w-48 h-48 rounded-3xl shadow-2xl bg-gradient-to-br from-[var(--color-accent)] to-yellow-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
