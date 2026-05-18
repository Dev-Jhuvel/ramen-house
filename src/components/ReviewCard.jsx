import { Star } from "lucide-react";
import { useBreakpoints } from "../lib/useBreakPoints";


export default function ReviewCard({ review }) {
  const { isDesktop } = useBreakpoints();
  const textFontSize = review.priority ? "text-base" : "text-sm";
  const colspan = review.priority ? "md:col-span-6" : "md:col-span-4";
  let animation = review.priority ? "fade-down" : "fade-up";
  animation = isDesktop ? animation :"fade-right";

  return (
    <div
      className={`rounded-2xl border border-red-500 hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]  p-4 bg-gray-700/50 col-span-1 ${colspan}`}
      data-aos={animation}
      data-aos-delay={500}
    >
      <div className="flex gap-4 w-full items-center">
        <div id="profile" className="">
          <div
            className={`profile-container bg-red-500 size-20 overflow-hidden rounded-full border`}
            // className={`profile-container ${review.profileColor} size-20 overflow-hidden rounded-full border`}
          >
            <img src={review.image} className="size-full mx-auto" alt="" />
          </div>
        </div>
        <div className="w-full space-y-2">
          <div className="w-full">
            <h3 className="text-2xl font-bold">{review.author}</h3>
            <div className="flex py-1">
              {Array.from({ length: 5 }).map((_v, key) => {
                if (review.rating > key) {
                  return <Star fill="yellow" color="yellow" key={key} />;
                } else {
                  return <Star fill="white" color="white" key={key} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <p className={`text-base  ${textFontSize}`}>"{review.text}"</p>
      </div>
    </div>
  );
}
