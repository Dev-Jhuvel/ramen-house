export default function InlineMenu({
  categories,
  selectedCategory,
  setSelectedCategory,
  setSelectedSubCategory,
}) {
  return (
    <div className="flex gap-0 flex-wrap mx-5 border-b">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => {
            setSelectedCategory(category);
            setSelectedSubCategory("All");
          }}
          className={`px-3 py-1 text-white text-base sm:text-lg transition hover:border-b-3 hover:border-white hover:font-bold ${
            selectedCategory === category
              ? "border-b-3 border-red-500 font-semibold"
              : "bg-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
