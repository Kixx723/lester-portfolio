const Experience = () => {
  return (
    <div className="h-screen" id="experience">
      <div className="flex flex-col text-center gap-1">
        <span className="text-md font-medium text-purple-800">Discover My</span>
        <span className="text-4xl">Experience</span>
      </div>

      <div className="flex flex-col md:flex-row gap-5 justify-center mt-[3%] md:mx-[15%] text-center h-auto mx-4">
        <div className="w-full border-2 border-black rounded-3xl py-4 md:h-auto h-64">
          <span className="text-xl font-bold">Frontend Development</span>
          <div className="my-4 flex flex-wrap justify-start gap-2 mx-[15%]">
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">HTML</span>
                <span className="text-xs text-gray-500">Experience</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">CSS</span>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">Tailwind CSS</span>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">JavaScript</span>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">React JS</span>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">TypeScript</span>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">Next.js</span>
                <span className="text-xs text-gray-500">Basic</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-black rounded-3xl py-4 md:h-auto h-64">
          <span className="text-xl font-bold">Backend Development</span>
          <div className="my-4 flex flex-wrap justify-start gap-2 mx-[15%]">
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">MongoDB</span>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">PostgreSQL</span>
                <span className="text-xs text-gray-500">Basic</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">Node JS</span>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">Express Js</span>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">Git</span>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
            </div>
            <div className="flex gap-2 w-[calc(50%-0.5rem)]">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">Nest JS</span>
                <span className="text-xs text-gray-500">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
