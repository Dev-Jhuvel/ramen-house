import { Soup, SquareMenu } from "lucide-react";
import { useEffect, useState } from "react";
import { useBreakpoints } from "../lib/useBreakPoints";
import { navLinks } from "../constants";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const { isDesktop } = useBreakpoints();
  const [hidden, setHidden] = useState(!isDesktop);

  const formatLink = (str) => {
  return str
    .replace(/_/g, " ") // replace underscores with spaces
    .split(" ")         // split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each
    .join(" ");         // join back with spaces
};

  useEffect(() => {
    setHidden((prev) => {
      const shouldHide = !isDesktop;
      return prev !== shouldHide ? shouldHide : prev;
    });
  }, [isDesktop]);
  return (
    <>
      <header className="fixed w-full z-10 bg-black/60 sm:bg-transparent">
        <div className="flex flex-col sm:flex-row sm:items-center p-4">
          <div className="inline-flex items-center justify-between">
            <div
              className="group border bg-gray-500 rounded-full p-1 hover:bg-gray-200"
              data-aos="flip-up"
            >
              <a href="/">
                <Soup
                  size={40}
                  fill="white"
                  className="group-hover:text-red-500 text-shadow-lg group-hover:fill-red-500"
                />
              </a>
            </div>
            <div className="sm:hidden">
              <div>
                <SquareMenu onClick={() => setHidden(!hidden)} size={50} />
              </div>
            </div>
          </div>
          <nav
            className={`flex-1 sm:px-30 overflow-hidden transition-all duration-500 sm:duration-0 ${hidden ? "max-h-0" : "max-h-screen"}`}
          >
            <ul className="flex flex-col sm:flex-row sm:justify-evenly py-2 gap-y-2 border-b-2 sm:border-none">
              {navLinks &&
                navLinks.map((link) => {
                  // TODO: active contact link
                  return (
                    <li key={link} className="cursor-pointer">
                      <ScrollLink
                        to={link}
                        spy={true}
                        hashSpy={true}
                        duration={500}
                        // offset={10}
                        smooth={true}
                        activeClass="!text-red-500 !text-shadow-lg !text-shadow-black border-b-3 !border-red-500"
                        className="text-2xl font-bold hover:!text-red-500 text-shadow-lg text-shadow-black"
                      >
                        {formatLink(link)}
                      </ScrollLink>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
