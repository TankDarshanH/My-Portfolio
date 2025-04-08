import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/50 backdrop-blur-md text-gray-300 p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="w-full px-10 flex justify-between items-center">
        {/* Brand Name */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-3xl font-extrabold text-white tracking-wide animate-pulse cursor-pointer"
        >
          Darshan Tank
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg">
          {["Home", "About", "Projects", "Skills", "Contact"].map(
            (item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-white transition duration-300 relative after:block after:content-[''] after:h-0.5 after:w-full after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md absolute top-16 left-0 w-full flex flex-col items-center py-4 space-y-4">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-white text-lg cursor-pointer hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Heading;
