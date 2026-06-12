"use client";

import { useMemo, useState } from "react";
import Masonry from "react-masonry-css";

import GalleryCard from "@/components/GalleryCard";
import GalleryFilters from "@/components/GalleryFilters";
import GalleryModal from "@/components/GalleryModal";

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
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <section className="section" id="gallery">
      <div className="container-custom">
        <h2 className="text-5xl font-bold mb-6">Printspiration Gallery</h2>

        <p className="text-[var(--color-text-muted)] mb-10">
          Explore inspiring design and print projects.
        </p>

        <input
          type="text"
          placeholder="Search projects..."
          className="w-full border border-[var(--color-border)] rounded-full px-6 py-4 mb-8 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
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
