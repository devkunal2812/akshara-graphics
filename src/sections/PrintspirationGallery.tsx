"use client";

import { useMemo, useState } from "react";
import Masonry from "react-masonry-css";

import GalleryCard from "@/components/GalleryCard";
import GalleryFilters from "@/components/GalleryFilters";
import GalleryModal from "@/components/GalleryModal";
import ScrollReveal from "@/components/ScrollReveal";

import { galleryItems, GalleryItem } from "@/data/gallery";

export default function PrintspirationGallery() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = useMemo(
    () => ["All", ...new Set(galleryItems.map((item) => item.category))],
    []
  );

  const filtered = useMemo(() => {
    return galleryItems.filter((item) => {
      const categoryMatch = selected === "All" || item.category === selected;
      const searchMatch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selected, search]);

  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section className="section" id="gallery">
      <div className="container-custom">
        <ScrollReveal className="mb-8 sm:mb-10">
          <p className="eyebrow text-[var(--color-accent)] mb-4">Inspiration</p>

          <h2 className="heading-lg font-bold mb-3 sm:mb-6">
            Printspiration{" "}
            <span className="font-display italic font-normal">Gallery</span>
          </h2>

          <p className="text-[var(--color-text-muted)] text-base sm:text-lg">
            Explore inspiring design and print projects.
          </p>
        </ScrollReveal>

        <input
          type="text"
          placeholder="Search projects..."
          className="w-full border border-[var(--color-border)] rounded-full px-5 sm:px-6 py-3.5 sm:py-4 mb-6 sm:mb-8 bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <GalleryFilters
          categories={categories}
          selected={selected}
          setSelected={setSelected}
        />

        <div className="mt-12">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName=""
          >
            {filtered.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setActiveItem(item)}
              />
            ))}
          </Masonry>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--color-text-muted)] py-12">
              No projects match your search.
            </p>
          )}
        </div>
      </div>

      {activeItem && (
        <GalleryModal item={activeItem} close={() => setActiveItem(null)} />
      )}
    </section>
  );
}
