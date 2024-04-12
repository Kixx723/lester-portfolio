import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="h-screen lg:mt-0 mt-[110%] flex flex-col items-center justify-evenly" id="contact">
      <div>
        <div className="flex flex-col text-center gap-1">
          <span className="text-md font-medium text-purple-800">
            Get In Touch
          </span>
          <span className="text-4xl">Contact Me</span>
        </div>

        <div className="w-auto border-2 border-slate-900 mt-[10%] p-4 flex justify-center gap-5 rounded-3xl">
          <div className="flex gap-2">
            <span className="material-symbols-outlined text-lg cursor-pointer">
              mail
            </span>
            <span className="text-md font-semibold cursor-pointer">
              janjanregalado1@gmail.com
            </span>
          </div>
          <div className="flex gap-2">
            <span className="material-symbols-outlined text-lg cursor-pointer">
              mail
            </span>
            <span className="text-md font-semibold cursor-pointer">
              LinkedIn
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <ul className="list-none md:flex text-2xl gap-5 hidden h-12">
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
        <span className="text-center">
          Copyright © 2024 John Lester Regalado Portfolio. All Right Reserved
        </span>
      </div>
    </div>
  );
};

export default Contact;
