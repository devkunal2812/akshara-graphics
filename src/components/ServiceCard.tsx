"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <motion.div
      whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      style={{ transformStyle: "preserve-3d" }}
      className="bg-white rounded-[32px] p-8 border border-[var(--color-border)] shadow-sm"
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-[var(--color-text-muted)]">{description}</p>
    </motion.div>
  );
}
