import restaurant from "../images/about/restaurant.png";
import restaurantClosed from "../images/about/restaurantClosed.png";
import chef from "../images/about/chef.png";
import chefSmiling from "../images/about/chefSmiling.png";
import ImageHover from "../components/ImageHover";
import {
  BadgeCheck,
  HomeIcon,
  MessageCircleHeart,
  SoupIcon,
} from "lucide-react";
import { useBreakpoints } from "../lib/useBreakPoints";

export default function About() {
  let animation = "fade-up";
  const { isDesktop } = useBreakpoints();

  return (
    <section id="about_us" className="min-h-screen w-full">
      <div className="container mx-auto min-h-full px-2 sm:px-10 pt-5">
        <h1 className="text-center text-lg pt-15">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 w-full py-4">
          <div
            data-aos={isDesktop ? "fade-right" : animation}
            data-aos-delay={1000}
          >
            <ImageHover
              image={restaurantClosed}
              imageHover={restaurant}
              alt="restaurant-photo"
            />
          </div>
          <div className="sm:p-5">
            <h3
              data-aos={isDesktop ? "fade-left" : animation}
              data-aos-delay={1000}
              className="text-center text-4xl font-semibold my-5"
            >
              Our Story
            </h3>
            <p
              data-aos={isDesktop ? "fade-left" : animation}
              data-aos-delay={1500}
              className=" leading-8 px-5 text-justify"
            >
              <strong>Ramen House</strong> began with a simple dream: to bring
              the comforting
              <strong> flavors of Japan closer to home</strong>. What started as
              a small kitchen experiment has grown into a place where friends,
              families, and food lovers gather to enjoy bowls of
              <strong> steaming ramen</strong> crafted with care.
            </p>
            <h3
              data-aos={isDesktop ? "fade-left" : animation}
              data-aos-delay={1500}
              className="text-center text-4xl font-semibold my-5"
            >
              Our Promise
            </h3>
            <div
              className="grid grid-cols-2 gap-2"
              data-aos={isDesktop ? "flip-right" : animation}
              data-aos-delay={1500}
            >
              <div className="flex gap-x-5 items-center text-sm">
                <HomeIcon size={70} className="text-red-500" /> A welcoming
                atmosphere where everyone feels at home
              </div>
              <div className="flex gap-x-5 items-center text-sm">
                <SoupIcon size={80} className="text-red-500" /> Dishes made with
                authentic recipes and a touch of local creativity
              </div>
              <div className="flex gap-x-5 items-center text-sm">
                <BadgeCheck size={70} className="text-red-500" /> A commitment
                to quality, consistency, and unforgettable taste
              </div>
              <div className="flex gap-x-5 items-center text-sm">
                <MessageCircleHeart size={70} className="text-red-500" />{" "}
                Friendly service that treats every guest like family
              </div>
            </div>
          </div>

          <div className="bg-black/80 sm:p-5">
            <h3
              data-aos={isDesktop ? "fade-right" : animation}
              data-aos-delay={1000}
              className="text-center text-4xl font-semibold my-5"
            >
              Our Philosophy
            </h3>
            <p
              className=" leading-8 px-5 text-justify"
              data-aos={isDesktop ? "fade-right" : animation}
              data-aos-delay={1500}
            >
              Our Philosophy We believe ramen is
              <strong> more than just noodles in broth</strong>— it’s a story of
              <strong> tradition, passion, and community.</strong> Every dish we
              serve is prepared with fresh ingredients, slow‑simmered broths,
              and a <strong>dedication to balance and flavor</strong>.
            </p>
            <h3
              data-aos={isDesktop ? "fade-right" : animation}
              data-aos-delay={1000}
              className="text-center text-4xl font-semibold my-5"
            >
              Our Team
            </h3>
            <p
              className=" leading-8 px-5 text-justify"
              data-aos={isDesktop ? "fade-right" : animation}
              data-aos-delay={1500}
            >
              Behind every bowl is a team of
              <strong> passionate chefs and staff</strong> who love what they
              do. From the kitchen to the dining area, we work together to make
              sure every guest leaves with <strong>a smile</strong> — and a
              <strong> craving to come back</strong>.
            </p>
          </div>
          <div>
            <ImageHover
              image={chef}
              imageHover={chefSmiling}
              alt="restaurant-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
