import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mx-[5%] md:mx-[15%] mt-[3%]">
      <div className="flex justify-between h-12">
        <div className="text-3xl">
          <span>Lester</span>
        </div>

        <div className="mt-2 cursor-pointer md:hidden" onClick={isToggle}>
          {isOpen ? (
            <span className="material-symbols-outlined md:hidden">close</span>
          ) : (
            <span className="material-symbols-outlined md:hidden">menu</span>
          )}
        </div>

        <ul className="list-none md:flex text-2xl gap-5 hidden">
          <li className="pb-2 hover:text-purple-400 hover:border-b-4 hover:border-purple-300 cursor-pointer">
            <Link to="about" smooth={true} duration={500} offset={-50}>
              About
            </Link>
          </li>
          <li className="pb-2 hover:text-purple-400 hover:border-b-4 hover:border-purple-300 cursor-pointer">
            <Link to="experience" smooth={true} duration={500} offset={-50}>
              Experience
            </Link>
          </li>
          <li className="pb-2 hover:text-purple-400 hover:border-b-4 hover:border-purple-300 cursor-pointer">
            <Link to="projects" smooth={true} duration={500} offset={-50}>
              Projects
            </Link>
          </li>
          <li className="pb-2 hover:text-purple-400 hover:border-b-4 hover:border-purple-300 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
