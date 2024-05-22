import ETALLY from "../assets/e-tally-htc.png";
import BORROWERSLIP from "../assets/borrower-slip.png";
import MRTANKEE from "../assets/mrtankee-project.png";

const Projects = () => {
  return (
    <div className="h-screen" id="projects">
      <div className="flex flex-col text-center gap-1">
        <span className="text-md font-medium text-purple-800">
          Browse My Recent
        </span>
        <span className="text-4xl">Projects</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-auto justify-center mt-[3%] mx-[5%]">
        <div className="border-2 border-black p-10 rounded-2xl w-full">
          <div className="flex flex-col gap-5 text-center items-center">
            <img
              src={ETALLY}
              alt="e-tally"
              className="w-full h-full rounded-2xl border-2 border-black"
            />
            <span className="font-bold text-2xl">1st Project</span>
            <a
              href="https://htc-event-app.onrender.com/"
              target="_blank"
              className="border-2 mx-[30%] py-2 px-4 rounded-3xl border-black font-semibold hover:bg-black hover:text-white cursor-pointer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="border-2 border-black p-10 rounded-2xl w-full">
          <div className="flex flex-col gap-5 text-center items-center">
            <img
              src={BORROWERSLIP}
              alt="borrower-slip"
              className="w-full h-full rounded-2xl border-2 border-black"
            />
            <span className="font-bold text-2xl">2nd Project</span>
            <a
              href="https://gscwd-borrower-slip-online.vercel.app/"
              target="_blank"
              className="border-2 mx-[30%] py-2 px-4 rounded-3xl border-black font-semibold hover:bg-black hover:text-white cursor-pointer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="border-2 border-black p-10 rounded-2xl w-full">
          <div className="flex flex-col gap-5 text-center items-center">
            <img
              src={MRTANKEE}
              alt="mrtankee"
              className="w-full h-full rounded-2xl border-2 border-black"
            />
            <span className="font-bold text-2xl">3rd Project</span>
            <a
              href="https://mrtankee.vercel.app/"
              target="_blank"
              className="border-2 mx-[30%] py-2 px-4 rounded-3xl border-black font-semibold hover:bg-black hover:text-white cursor-pointer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
