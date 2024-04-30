import PROFILE from "../assets/profile-lester2.jpg";
import LINKEDIN from "../assets/linked-in.png";
import GITHUB from "../assets/github.png";

const Main = () => {
  return (
    <main className="md:flex mt-[10%] gap-20 justify-center">
      <div className="flex justify-center">
        <img src={PROFILE} alt="Profile" className="h-80 rounded-[50%]" />
      </div>
      <div className="flex flex-col gap-1 text-center mt-16">
        <span className="text-lg font-normal">Hello, I'm</span>
        <span className="text-3xl font-bold">John Lester Regalado</span>
        <span className="text-2xl font-normal">Full Stack Developer</span>
        <div className="flex gap-3 mt-3 justify-center">
          <button className="border-2 border-black p-3 rounded-3xl text-sm font-bold hover:bg-black hover:text-white">
          <a href="https://drive.google.com/file/d/1qKo6Yi5xr9eV6lo6peovkXE045JaZdaE/view?usp=drive_link" target="_blank" download="Lester-Resume.pdf">
            Download CV
          </a>
          </button>
          <div className="flex gap-2 mt-2">
            <a
              href="https://www.linkedin.com/in/john-lester-regalado/"
              target="_blank"
            >
              <img
                src={LINKEDIN}
                alt="linked-in"
                className="h-8 cursor-pointer"
              />
            </a>
            <a href="https://github.com/Kixx723" target="_blank">
              <img src={GITHUB} alt="github" className="h-8 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
