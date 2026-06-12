interface Props {
  categories: string[];
  selected: string;
  setSelected: (v: string) => void;
}

export default function GalleryFilters({ categories, selected, setSelected }: Props) {
  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-5 py-3 rounded-full border border-[var(--color-border)] transition text-sm font-medium ${
            selected === category
              ? "bg-[var(--color-accent)] text-white border-transparent"
              : "bg-white hover:bg-[var(--color-light-gray)]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
