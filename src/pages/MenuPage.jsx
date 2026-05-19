import { useMemo, useState } from "react";
import { products } from "../constants";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");

  // CATEGORY BUTTONS
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // SUB CATEGORY BUTTONS
  const subCategories = useMemo(() => {
    const filtered =
      selectedCategory === "All"
        ? products
        : products.filter((p) => p.category === selectedCategory);

    return ["All", ...new Set(filtered.map((p) => p.subCategory))];
  }, [selectedCategory]);

  // FILTER PRODUCTS
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const subCategoryMatch =
      selectedSubCategory === "All" ||
      product.subCategory === selectedSubCategory;

    return categoryMatch && subCategoryMatch;
  });

  // GROUP PRODUCTS
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    const category = product.category;
    const subCategory = product.subCategory;

    if (!acc[category]) {
      acc[category] = {};
    }

    if (!acc[category][subCategory]) {
      acc[category][subCategory] = [];
    }

    acc[category][subCategory].push(product);

    return acc;
  }, {});

  return (
    <div className="p-6">
        <div className="">
            <div className="flex items-center pb-5 sm:pb-0 justify-end my-3">
                <Link to="/" className="bg-red-500 text-sm sm:text-base py-2 font-bold px-4 rounded-sm hover:bg-red-400">VIEW OUR SITE</Link>
            </div>
            <h1 className="text-center text-lg !pt-0">Our Menu</h1> 
        </div>
      {/* CATEGORY BUTTONS */}
      <div className="flex gap-3 mb-4 flex-wrap ml-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedSubCategory("All");
            }}
            className={`px-3 py-1 rounded-lg border text-white text-base sm:text-xl font-semibold transition ${
              selectedCategory === category
                ? "bg-red-500 border-red-500"
                : "bg-black border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
        <hr />
      {/* SUB CATEGORY BUTTONS */}
      <div className="flex gap-3 mt-4 mb-8 flex-wrap ml-5">
        {subCategories.map((subCategory) => (
          <button
            key={subCategory}
            onClick={() => setSelectedSubCategory(subCategory)}
            className={`px-3 py-1 rounded-lg border text-white text-sm sm:text-lg font-semibold transition ${
              selectedSubCategory === subCategory
                ? "bg-red-500 border-red-500"
                : "bg-black border"
            }`}
          >
            {subCategory}
          </button>
        ))}
      </div>

      {/* GROUPED PRODUCTS */}
      <div className="space-y-12 sm:px-10">
        {Object.entries(groupedProducts).map(
          ([category, subCategoryGroups]) => (
            <div key={category}>
              {/* CATEGORY TITLE */}
              <h1 className="text-3xl font-bold mb-6 border-b pb-2">
                {category}
              </h1>

              {/* SUB CATEGORY GROUPS */}
              {Object.entries(subCategoryGroups).map(
                ([subCategory, items]) => (
                  <div key={subCategory} className="mb-10">
                    {/* SUB CATEGORY TITLE */}
                    <h2 className="text-2xl font-semibold mb-5 text-red-500">
                      {subCategory}
                    </h2>

                    {/* PRODUCTS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((product) => (
                        <ProductCard
                          key={product.name}
                          product={product}
                          once={true}
                        />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}