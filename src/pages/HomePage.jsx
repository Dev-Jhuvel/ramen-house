import Navbar from "../components/Navbar.jsx";
import Home from "../sections/Home.jsx";
import Products from "../sections/Products.jsx";
import Reviews from "../sections/Reviews.jsx";
import Contacts from "../sections/Contacts.jsx";
import About from "../sections/About.jsx";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <About />
      <Reviews />
      <Contacts />
    </div>
  );
}
