import { useMemo, useState } from "react";
import { products } from "../constants";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import ResponsiveMenu from "../components/ResponsiveMenu";

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
      selectedCategory === "All" || product.category === selectedCategory;

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
    <div className="p-6 h-screen">
      <div className="">
        <div className="flex items-center pb-5 sm:pb-0 justify-end my-3">
          <Link
            to="/"
            className="bg-red-500 text-sm sm:text-base py-2 font-bold px-4 rounded-sm hover:bg-red-400"
          >
            VIEW OUR SITE
          </Link>
        </div>
        <h1 className="text-center text-lg/10 !pt-0">Our Menu</h1>
      </div>
      {/* CATEGORY BUTTONS */}
      <h3 className="ml-5 text-lg font-black mt-2">Categories:</h3>
      <ResponsiveMenu
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSelectedSubCategory={setSelectedSubCategory}
      />
      {/* SUB CATEGORY BUTTONS */}
      <h3 className="ml-5 font-black">Sub Categories</h3>
      <ResponsiveMenu
        categories={subCategories}
        selectedCategory={selectedSubCategory}
        setSelectedCategory={setSelectedSubCategory}
      />

      {/* GROUPED PRODUCTS */}
      <div className="h-screen w-full overflow-scroll scroll-auto scrollbar-thumb-red-500 scrollbar-gutter-auto bg-gray-900/30">
        <div className="space-y-12 sm:px-15">
          {Object.entries(groupedProducts).map(
            ([category, subCategoryGroups]) => (
              <div key={category}>
                {/* CATEGORY TITLE */}
                <h1 className="text-3xl/10 font-bold mb-2 border-b pb-2">
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {items.map((product) => (
                          <div className="flex justify-center items-center">
                            <ProductCard
                              key={product.name}
                              product={product}
                              once={true}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
