import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-500/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          <span className="text-white">Avnish</span>
          <span className="text-red-500"> Kumar</span>
        </h1>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-red-500 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menu && (
        <div className="md:hidden bg-[#111] px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="block py-3 cursor-pointer hover:text-red-500"
              onClick={() => setMenu(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;