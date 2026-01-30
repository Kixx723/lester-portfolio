import { Link } from "react-scroll";
import { Mail, Linkedin, ArrowUp, Github } from "lucide-react";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white pt-24 pb-12 border-t border-slate-100"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Contact Heading Section */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs">
            Connect
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Get In <span className="text-indigo-600">Touch.</span>
          </h2>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-24">
          <a
            href="mailto:janjanregalado1@gmail.com"
            className="group w-full max-w-sm p-6 bg-slate-50 border border-slate-100 rounded-3xl flex items-center gap-4 hover:bg-white hover:shadow-xl hover:shadow-indigo-50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-3 bg-white rounded-2xl text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Email Me
              </p>
              <p className="text-slate-900 font-bold">
                janjanregalado1@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/john-lester-regalado-147847271/"
            target="_blank"
            rel="noreferrer"
            className="group w-full max-w-sm p-6 bg-slate-50 border border-slate-100 rounded-3xl flex items-center gap-4 hover:bg-white hover:shadow-xl hover:shadow-indigo-50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-3 bg-white rounded-2xl text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Linkedin size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                LinkedIn
              </p>
              <p className="text-slate-900 font-bold">John Lester Regalado</p>
            </div>
          </a>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="pt-12 border-t border-slate-100 flex flex-col items-center gap-10">
          {/* Quick Links */}
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {["about", "experience", "projects"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-500 font-bold uppercase tracking-widest text-sm hover:text-indigo-600 cursor-pointer transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              {/* Scroll to top link */}
              <Link
                to="main"
                smooth={true}
                className="text-indigo-600 font-bold uppercase tracking-widest text-sm cursor-pointer flex items-center gap-1"
              >
                Top <ArrowUp size={14} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
