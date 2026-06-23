"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem } from "@/data/gallery";

interface Props {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryCard({ item, onClick }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="group cursor-pointer mb-6"
    >
      <div className="overflow-hidden rounded-3xl relative aspect-[4/5]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, 25vw"
        />
      </div>

      <div className="mt-4">
        <p className="text-sm text-[var(--color-text-muted)]">{item.category}</p>
        <h3 className="text-lg font-semibold">{item.title}</h3>
      </div>
    </motion.div>
  );
}
