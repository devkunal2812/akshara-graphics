"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  category: string;
  alt?: string;
}

export default function ProjectCard({ image, title, category, alt }: Props) {
  return (
    <motion.div whileHover={{ y: -10 }} className="min-w-[300px] md:min-w-[380px]">
      <div className="overflow-hidden rounded-[30px] relative h-[400px] md:h-[500px]">
        <Image
          src={`${image}?auto=format&fit=crop&w=800&q=80`}
          alt={alt ?? `${title} — ${category} by Akshara Graphics`}
          fill
          className="object-cover transition duration-700 hover:scale-105"
          sizes="(max-width: 768px) 80vw, 400px"
        />
      </div>

      <p className="mt-4 text-sm text-[var(--color-text-muted)]">{category}</p>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </motion.div>
  );
}
