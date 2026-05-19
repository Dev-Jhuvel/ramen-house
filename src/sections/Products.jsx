import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../constants";

export default function Products() {
  const bestSellers = products.filter(item => item.badge === "Best Seller");

  const groupedProducts = bestSellers.reduce((acc, item) => {
    const { category, subCategory } = item;
    if (!acc[category]) acc[category] = {};
    if (!acc[category][subCategory]) acc[category][subCategory] = [];
    acc[category][subCategory].push(item);
    return acc;
  }, {});


  return (
    <section id="products" className="min-h-screen w-full">
      <div className="flex flex-col bg-blend-overlay bg-red-500/30">
        <div className="container mx-auto pt-6 pb-13 h-full">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between item-center w-full px-10 pt-10">
            <h1 className="text-center text-lg !pt-0">Our Menu</h1> 
            <div className="flex justify-center items-center pb-5 sm:pb-0">
              <Link to="/menu" className="bg-red-500 text-sm sm:text-base py-2 font-bold px-4 rounded-sm hover:bg-red-400">VIEW ALL MENU</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 px-4 py-3">
           {Object.entries(groupedProducts).map(([category, subCats]) => (
            category == "Main" && Object.entries(subCats).slice(0,3).map(([subCategory, items]) => (
              <ProductCard key={subCategory} product={items[0]} />
            ))
           ))}
          </div>
        </div>
      </div>
    </section>
  );
}
