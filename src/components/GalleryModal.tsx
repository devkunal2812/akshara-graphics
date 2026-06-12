"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem } from "@/data/gallery";

interface Props {
  item: GalleryItem;
  close: () => void;
}

export default function GalleryModal({ item, close }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={close}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={`${item.image}?auto=format&fit=crop&w=1200&q=80`}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <p className="text-sm text-[var(--color-text-muted)]">{item.category}</p>
          <h2 className="text-3xl font-bold mt-2">{item.title}</h2>

          <button
            onClick={close}
            className="mt-6 px-6 py-3 rounded-full border border-[var(--color-border)] font-medium hover:bg-[var(--color-light-gray)] transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
