import ramenVideo from "../videos/ramenVideo.mp4";
import Wave from "react-wavify";
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-cover bg-bottom sm:bg-center bg-no-repeat sm:bg-fixed flex flex-col justify-center bg-blend-overlay bg-black/30 relative"
      // sm:bg-red-300  md:bg-blue-300  lg:bg-green-300  xl:bg-purple-300

      // style={{ backgroundImage: `url(${heroImage})` }}
    >
       <video 
          src={ramenVideo} 
          muted 
          autoPlay
          loop
          preload="auto"
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />
      <div className="flex flex-col grow items-center justify-center text-center px-4 z-1">
        <div className="">
          <h3
            className="font-bold text-center text-red-600 text-[clamp(80px,15vw,350px)] md:leading-56 text-shadow-sm text-shadow-black my-5"
            data-aos="fade-up"
            data-aos-delay={1000}
          >
            ラーメン
          </h3>
          <h3
            className="font-bold text-[clamp(18px,5vw,30px)] my-2 text-shadow-sm text-shadow-black"
            data-aos="fade-up"
            data-aos-delay={1300}
          >
            Bold flavors that define authentic Japanese dining.
          </h3>
          <p
            className="font-semibold text-[clamp(16px,5vw,20px)] text-base sm:text-xl m-1 mb-5 text-shadow-black text-shadow-sm"
            data-aos="fade-up"
            data-aos-delay={1400}
          >
            Fresh ingredients, clean flavors, and rolls that don’t miss.
          </p>
          <Link to="/menu" className="bg-red-500 text-xl font-bold py-2 px-4 rounded-sm hover:bg-red-400 my-5">
            VIEW ALL MENU
          </Link>
        </div> 
      </div>
      <Wave
        fill="#4c0d10"
        paused={false}
        style={{ display: "flex", height: "50px" }}
        className="m-0 mt-auto z-2"
        options={{
          height: 1,
          amplitude: 20,
          speed: 0.15,
          points: 5,
        }}
      />
    </section>
  );
}
