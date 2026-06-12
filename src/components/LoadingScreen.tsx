"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F7F5F2]"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display italic px-4 text-center"
          >
            Akshara <span className="text-[var(--color-accent)] not-italic">Graphics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-3 eyebrow text-[var(--color-text-muted)] text-center px-4"
          >
            Creative Design &amp; Printing Solutions
          </motion.p>

          {/* CMYK loading bar */}
          <motion.div className="mt-8 flex gap-2">
            {["#06B6D4", "#D946EF", "#FACC15", "#0F172A"].map((color, i) => (
              <motion.span
                key={color}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
