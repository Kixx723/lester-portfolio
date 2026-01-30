const About = () => {
  return (
    <section className="py-48 lg:py-24 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Bold Heading with Accent */}
          <div className="relative">
            {/* The same accent box style from your Main component */}
            <div className="absolute inset-0 bg-indigo-50 rounded-[2.5rem] -translate-x-3 translate-y-3 -z-10" />

            <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                Beyond <br />
                <span className="text-indigo-600">the Code.</span>
              </h2>
            </div>
          </div>

          {/* Right Side: Simple Clean Text */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                I am a Full Stack Software Engineer with experience designing
                and implementing scalable software solutions.
              </p>
              <div className="h-1 w-20 bg-indigo-600 rounded-full" />{" "}
              {/* Subtle Divider */}
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              I have a strong background in software engineering and database
              design, and I work effectively both independently and
              collaboratively within a team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
