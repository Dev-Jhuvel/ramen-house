import Navbar from "../components/Navbar.jsx";
import Home from "../sections/Home.jsx";
import Products from "../sections/Products.jsx";
import Reviews from "../sections/Reviews.jsx";
import Contacts from "../sections/Contacts.jsx";
import About from "../sections/About.jsx";

export default function HomePage() {
  const year = new Date().getFullYear();
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <About />
      <Reviews />
      <Contacts />
      <footer className="bg-black py-2">
          <h4 className="text-center font-semibold text-white">&copy; {year} Jhuvel Colina | All Right Reserved</h4>
        </footer>
    </div>
  );
}
