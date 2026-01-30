import { Download, Github } from "lucide-react";
import PROFILE from "../assets/profile-lester2.jpg";

const Main = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 lg:py-24 px-6 bg-white" id="main">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section - Simplified & Natural */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px]">
            {/* Subtle soft glow behind image */}
            <div className="absolute inset-0 bg-indigo-50 rounded-[2.5rem] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500" />

            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-xl bg-slate-50">
              <img
                src={PROFILE}
                alt="profile"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Text Content - Minimalist & Bold */}
        <div className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-3">
            <p className="text-indigo-600 font-bold tracking-[0.15em] uppercase text-sm">
              Full Stack Engineer
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-tight">
              John Lester <br />
              <span className="text-indigo-600">Regalado</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
            <a
              href="https://drive.google.com/file/d/1LRz5TbFPctLG5A-ysGUtwze3rgRaxVsn/view"
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>

            <a
              href="https://github.com/Kixx723" // Replace with your actual GitHub link
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center gap-2 group"
            >
              <Github
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
