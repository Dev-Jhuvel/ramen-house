import { FaFacebook, FaTwitter, FaSpotify, FaInstagram, FaFacebookMessenger } from "react-icons/fa";
import { MailIcon, PhoneCall } from "lucide-react";
import { restaurant } from "../constants";

export default function Contacts() {
  const phone_number = restaurant.phone_number.replace(/\s+/g, "");
  return (
    <section id="contact" className="min-h-screen w-full bg-red-500/50">
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-center text-lg">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 text-center lg:text-left ">
          <div className="p-4">
            <h3 className="text-3xl font-semibold">Visit our Restaurant</h3>
            <a className="text-lg lg:pr-5" href={restaurant.gmap} target="_blank">{restaurant.address}</a>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-semibold mb-3">Contact Us</h3>
            <div className="flex justify-center lg:justify-start items-center gap-3 mb-2">
              <PhoneCall /> <a href={`tel:${phone_number}`} target="_blank">{restaurant.phone_number}</a>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-3">
              <MailIcon /> <a href={`mailto:${restaurant.email}`} target="_blank"> {restaurant.email}</a>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-semibold mb-3">Store Hours</h3>
            <div className="mb-3">
              <p className="text-lg/3"> Weekdays</p>
              <h3 className="text-2xl font-semibold">8:30 AM - 10:00 PM</h3>
            </div>
            <div>
              <p className="text-lg/3"> Weekends</p>
              <h3 className="text-2xl font-semibold">9:30 AM - 11:00 PM</h3>
            </div>
          </div>
          <div className="p-4 mx-auto">
            <h3 className="text-3xl font-semibold mb-3">Socials</h3>
            <div className="flex justify-center lg:justify-start items-center gap-4 mb-1">
              <a href={restaurant.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
              <a href={restaurant.messenger} target="_blank"><FaFacebookMessenger size={30} /></a>
              <a href={restaurant.instagram} target="_blank"><FaInstagram size={30} /></a>
            </div>
          </div>
        </div>
        <div className="h-30 flex items-center justify-center py-5">
           <h3
            className="font-bold text-center text-white text-[clamp(80px,15vw,350px)] text-shadow-md text-shadow-black my-2"
            // data-aos="fade-up"
            // data-aos-delay={1000}
          >
            ラーメン
          </h3>
        </div>
      </div>
    </section>
  );
}
