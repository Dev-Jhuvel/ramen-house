import ramen from "../images/products/ramen.png";

export default function Home() {
  return (
    <section id="home" className="w-full">
      <div className="container mx-auto text-center relative py-25 sm:py-60">
        <div className="h-20 sm:h-50">
          <h3 
            className="font-bold text-[100px]/10 sm:text-[110px]/10 md:text-[150px]/10 lg:text-[250px]/10  text-center text-red-600 p-0 m-0"
            data-aos="fade-up"
            data-aos-delay={1000}>
            ラーメン
          </h3>
        </div>
        <div className="lg:absolute w-full bottom-25 sm:top-50 m-0">
          <img 
            className="size-60 mx-auto" 
            src={ramen} 
            alt="ramen"
            data-aos="fade-up"
            data-aos-delay={500} />
        </div>
        <div className="px-15">
          <h3 
            className="font-bold text-lg sm:text-3xl my-2"
            data-aos="fade-up"
            data-aos-delay={1300}>
            Bold flavors that define authentic Japanese dining.
          </h3>
          <p 
            className="text-base sm:text-xl m-1"
            data-aos="fade-up"
            data-aos-delay={1400}>
            Fresh ingredients, clean flavors, and rolls that don’t miss.
          </p>
        </div>
        <div className="mt-6">
          <button className="bg-red-500 p-1 rounded-sm hover:bg-red-400">
            <p className="border-3 p-1">Order Now</p>
          </button>
        </div>
      </div>
    </section>
  );
}
