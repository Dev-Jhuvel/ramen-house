import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

export default function Reviews() {
  return (
    <section id="reviews" className="min-h-screen sm:min-h-auto w-full bg-black">
      <div className="container mx-auto px-4 pt-9 pb-20">
        <h1 className="text-center text-lg pt-15 pb-5 sm:pb-0">Customer Stories</h1>
        <div className="grid col-span-1 md:grid-cols-12 gap-4">
          {reviews && reviews.map((review, key) => <ReviewCard key={key} review={review} />)}
        </div> 
      </div>
    </section>
  );
}
