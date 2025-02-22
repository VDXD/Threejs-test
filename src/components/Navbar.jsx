import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = ({ setAnimationName }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name, animation }) => (
        <li
          key={id}
          className="nav-li"
          onClick={() => setAnimationName(animation)}
          // onPointerOver={() => setAnimationName(animation.toLowerCase())}
          // onPointerOut={() => setAnimationName("fighting")}
        >
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = ({ setAnimationName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center py-5 mx-auto c-space">
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems setAnimationName={setAnimationName} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems setAnimationName={setAnimationName} />
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
