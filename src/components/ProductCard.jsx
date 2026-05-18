import ramen from "../images/products/ramen.png";

export default function ProductCard({ product, once = false }) {
  const fontSize = product.name.length > 17 ? "sm:text-sm" : "sm:text-lg";
  return (
    <div
      id="card"
      className="border bg-black w-full p-3 rounded-2xl transition-transform duration-500 ease-in-out hover:scale-106 shadow-2xl hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:bg-gray-500/50"
      data-aos="fade-right"
      data-aos-once={once}
      data-aos-delay={500}
    >
      <div className="flex justify-center">
        <figure>
          <img
            className="size-full md:max-w-55"
            src={product.image ?? ramen}
            alt=""
          />
        </figure>
      </div>
      <div className="flex flex-col h-45">
        <div className="text-left flex justify-between items-center h-13 sm:h-auto">
          <h3 className={`text-xs ${fontSize} font-bold`}>{product.name}</h3>
          {product.badge && (
            <span className="text-[8px] sm:text-sm bg-red-500 px-2 py-1 rounded-2xl">
              {product.badge}
            </span>
          )}
        </div>
        <div className="py-2 h-20 sm:h-auto">
          <p className="text-[clamp(8pt,2vw,14pt)] sm:text-sm">
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
                    className={`text-[7pt] sm:text-sm ${colorMap[key]} px-1 sm:px-2 py-1 rounded-2xl`}
                  >
                    {tag}
                  </span>
                );
              })}
          </div>
          <div className="mt-3">
            <span className="text-base bg-red-300/10 px-2 py-1 rounded-2xl">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
