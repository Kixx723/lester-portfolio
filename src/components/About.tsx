const About = () => {
  return (
    <div className="h-screen" id="about">
      <div className="flex flex-col text-center gap-1 sm:mt-0 mt-[10%]">
        <span className="text-md font-medium text-purple-800">
          Explore What's Unique
        </span>
        <span className="text-4xl">About Me</span>
      </div>

      <div className="flex flex-col mx-4 sm:mx-10 md:mx-[15%] md:my-[3%] mt-[3%] gap-8 md:gap-10 text-center justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-10">
          <div className="border-2 border-black rounded-2xl w-full md:w-96 flex flex-col justify-center items-center p-4">
            <span className="material-symbols-outlined text-lg">
              business_center
            </span>
            <span className="md:text-xl text-lg font-bold">Experience</span>
            <span className="font-semibold">2+ years</span>
            <span className="font-semibold">Full Stack Web Development</span>
          </div>
          <div className="border-2 border-black rounded-2xl w-full md:w-96 flex flex-col justify-center items-center p-4">
            <span className="material-symbols-outlined text-lg">school</span>
            <span className="md:text-xl text-lg font-bold">Education</span>
            <span className="font-semibold">
              Bachelor Science in Information Technology
            </span>
            <span className="font-semibold">
              Holy Trinity College of General Santos City
            </span>
          </div>
        </div>

        <div className="md:mx-[15%] mx-4 sm:mx-8">
          <span className="font-normal">
            As a passionate student, I've embarked on a journey of self-learning
            and discovery. Despite my academic commitments, I've successfully
            completed 3 innovative projects on my own. These experiences have
            not only honed my technical skills but also instilled in me a
            profound appreciation for the power of self-education and
            persistence. From web development to exploring new technologies, my
            journey is a testament to what one can achieve with dedication and a
            love for learning.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
