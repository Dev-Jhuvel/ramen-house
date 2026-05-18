import ramen from "../images/products/ramen.png";

export default function ProductCard({ product, once = false }) {
  const fontSize = product.name.length > 17 ? "sm:text-sm" : "sm:text-lg";

  return (
    <div
      id="card"
      className="border bg-black w-full p-3 pt-1 rounded-2xl transition-transform duration-500 ease-in-out hover:scale-106 shadow-2xl hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:bg-gray-500/50 relative"
      data-aos="fade-right"
      data-aos-once={once}
      data-aos-delay={500}
    >
      {product.badge && (
        <div className="absolute bg-red-500 rounded-full size-14 right-[-5px] top-[-4px] border-t-2">
          <span className="text-[7pt] sm:text-[8pt] font-semibold size-full px-1 text-center flex justify-center items-center">
            {product.badge}
          </span>
        </div>
      )}
      <div className="flex justify-center">
        <figure>
          <img
            className="size-full md:max-w-55"
            src={product.image ?? ramen}
            alt="product-image"
          />
        </figure>
      </div>
      <div className="flex flex-col h-auto sm:h-45">
        <div className="text-left flex justify-between items-center h-13 sm:h-auto">
          <h3 className={`text-lg sm:text-xl font-bold leading-tight`}>
            {product.name}
          </h3>
        </div>
        <div className="py-2 h-24 sm:h-auto">
          <p className="text-sm sm:text-base leading-tight text-gray-300 line-clamp-3">
            {product.description}
          </p>
        </div>
        <div className="mt-auto">
          <div className="space-x-1">
            {product.tags &&
              product.tags.map((tag, key) => {
                const colorMap = ["bg-red-700", "bg-red-600", "bg-red-500"];
                return (
                  <span
                    key={key}
                    className={`text-xs sm:text-sm ${colorMap[key]} px-2 py-1 rounded-2xl`}
                  >
                    {tag}
                  </span>
                );
              })}
          </div>
          <div className="mt-3">
            <span className="block mt-3 text-sm sm:text-base font-semibold">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
