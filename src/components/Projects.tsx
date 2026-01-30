import { ExternalLink, ArrowUpRight } from "lucide-react";
import ETALLY from "../assets/e-tally-htc.png";
import BORROWERSLIP from "../assets/borrower-slip.png";
import MRTANKEE from "../assets/mrtankee-project.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Tally HTC",
      category: "Full Stack / Capstone",
      img: ETALLY,
      link: "https://htc-event-app.onrender.com/",
    },
    {
      title: "Borrower Slip",
      category: "Internship Project",
      img: BORROWERSLIP,
      link: "https://gscwd-borrower-slip-online.vercel.app/",
    },
    {
      title: "MrTankee",
      category: "Internship Project",
      img: MRTANKEE,
      link: "https://mrtankee.vercel.app/",
    },
  ];

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-3">
            <p className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs">
              Portfolio
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Selected <span className="text-indigo-600">Works.</span>
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, i) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="group relative"
            >
              {/* The Accent Box - Shared Design Language */}
              <div className="absolute inset-0 bg-indigo-50 rounded-[2.5rem] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

              <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.img}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={project.title}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="text-slate-900" size={32} />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider rounded-full">
                      {project.category}
                    </span>
                    <ExternalLink
                      size={18}
                      className="text-slate-400 group-hover:text-indigo-600 transition-colors"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
