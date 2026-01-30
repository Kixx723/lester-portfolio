import { Monitor, Database, Cloud, Layers, CheckCircle2 } from "lucide-react";

const Skills = () => {
  const stack = [
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind", "TypeScript"],
      icon: <Monitor className="text-indigo-600" size={24} />,
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "Python", "PostgreSQL"],
      icon: <Database className="text-indigo-600" size={24} />,
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      title: "Cloud & DevOps",
      items: ["Docker", "AWS", "CI/CD", "Terraform"],
      icon: <Cloud className="text-indigo-600" size={24} />,
      gradient: "from-sky-500/20 to-blue-500/20",
    },
    {
      title: "Architecture",
      items: ["Microservices", "REST"],
      icon: <Layers className="text-indigo-600" size={24} />,
      gradient: "from-violet-500/20 to-fuchsia-500/20",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section with centered alignment for mobile */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              My <span className="text-indigo-600">Experience.</span>
            </h2>
          </div>
        </div>

        {/* Grid Section - Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stack.map((group) => (
            <div key={group.title} className="relative group h-full">
              {/* Background Glow Effect on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${group.gradient} rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />

              <div className="h-full p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 flex flex-col">
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 bg-indigo-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    {group.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">
                  {group.title}
                </h3>

                <ul className="space-y-4 ">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-slate-600 text-sm flex items-center gap-3 font-medium"
                    >
                      <CheckCircle2 className="text-indigo-400" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
