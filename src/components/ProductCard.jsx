import ramen from "../images/products/ramen.png";

export default function ProductCard({ product, once = false }) {
  return (
    <div
      id="card"
      className="border bg-black w-full rounded-2xl transition-transform duration-500 ease-in-out hover:scale-106 shadow-2xl hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:bg-gray-500/50 relative max-w-76 max-h-90 group"
      // data-aos="fade-right"
      data-aos-once={once}
      data-aos-delay={500}
    >
      {product.badge && (
        <div className="absolute bg-red-500 rounded-full size-14 left-15 top-2 border-t-2 z-2">
          <span className="text-[7pt] sm:text-[8pt] font-semibold size-full px-1 text-center flex justify-center items-center">
            {product.badge}
          </span>
        </div>
      )}
      <div className="flex justify-center relative overflow-hidden border-b">
        <figure className="aspect-[4/3] overflow-hidden">
          <img
            className="size-full max-w-50 object-cover object-center"
            src={product.image ?? ramen}
            alt="product-image"
          />
        </figure>
      </div>
      <div className="flex flex-col px-4 py-2 h-50">
        <div className="text-left flex flex-col gap-1">
          <h3 className={`text-lg sm:text-2xl font-bold leading-tight`}>
            {product.name}
          </h3>
          <p className="text-xs sm:text-[14px] leading-tight text-gray-300 line-clamp-3">
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
                    className={`text-[12px] ${colorMap[key]} px-2 py-1 rounded-2xl`}
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
