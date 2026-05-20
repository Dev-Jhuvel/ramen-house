import { useBreakpoints } from "../lib/useBreakPoints";

export default function ResponsiveMenu({
  categories,
  selectedCategory,
  setSelectedCategory,
  setSelectedSubCategory = null,
}) {
  const { isDesktop } = useBreakpoints();

  return (
    <>
      {isDesktop ? (
        <div className="flex gap-0 flex-wrap mx-5 border-b">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                if (setSelectedSubCategory) setSelectedSubCategory("All");
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
      ) : (
        <div className="mb-3">
          <select
            name="category"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubCategory("All");
            }}
            className="bg-black font-bold ml-5 border py-2 px-4 rounded-lg"
          >
            {categories.map((category) => (
              <option
                key={category}
                className={`px-3 py-1 text-base sm:text-lg transition ${
                  selectedCategory === category ? "text-red-500" : ""
                }`}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}
