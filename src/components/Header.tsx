import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Modern icon library

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg py-3 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="main" smooth={true}>
          <div className="group cursor-pointer">
            <div className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-1">
              LESTER
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 group-hover:scale-[2] transition-transform duration-300"></span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                spy
                offset={-100}
                activeClass="bg-white text-indigo-600 shadow-sm"
                className="px-5 py-2 text-xs font-bold text-slate-500 hover:text-slate-900 rounded-full cursor-pointer transition-all duration-300 uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            to="contact"
            smooth
            className="bg-indigo-600 text-white px-7 py-3 rounded-full text-xs font-bold hover:bg-slate-900 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-[0_10px_20px_-10px_rgba(79,70,229,0.5)]"
          >
            HIRE ME
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 h-screen w-full bg-white transition-all duration-500 ease-in-out md:hidden z-[-1] ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              smooth
              className={`text-4xl font-black text-slate-900 transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-indigo-600 text-white px-10 py-4 rounded-full text-lg font-bold"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
