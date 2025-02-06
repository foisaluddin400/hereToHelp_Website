import img from "../../assets/careers/img.png";
import img1 from "../../assets/careers/img1.png";

export const BuildFuture = () => {
  return (
    <div className="md:pt-28 px-4 lg:px-0">
      <div className="md:grid grid-cols-2 max-w-[1600px] m-auto">
        <div>
          <div className="bg-[#ffffff23] inline-flex md:text-4xl text-3xl md:px-8 px-4 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-2 rounded-xl">
            Build Your Future with BETS
          </div>
          <div className="bg-[#ffffff23] max-w-2xl  md:px-8 px-4 border-2 border-gray-500 mt-11 backdrop-blur-sm text-white md:py-8 py-4 rounded-xl">
            Join a team that's shaping the future of IT innovation. At BETS,
            your skills and passion drive meaningful projects, endless growth
            opportunities, and a career that matters. Discover your potential
            with us.
          </div>
        </div>
        <div className="hidden md:block">
          <div className="mt-28">
            <img className="w-full" src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto">
        <div className="bg-[#ffffff23] md:text-4xl text-2xl inline-flex md:px-8 px-4 border-2 border-gray-500 mt-7 backdrop-blur-sm text-white py-2 rounded-xl">
          Build Your Future with BETS
        </div>
        <div className="bg-[#ffffff23]  md:px-8 px-4 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white md:py-8 py-4 rounded-xl">
          Join a team that's shaping the future of IT innovation. At BETS, your
          skills and passion drive meaningful projects, endless growth
          opportunities, and a career that matters. Discover your potential with
          us.
        </div>
      </div>
      <div className="md:px-20 mt-20 md:mt-0">
        <div className="hidden md:block">
          <img className="w-96 mt-20" src={img1} alt="" />
        </div>
        <div className="text-end md:-mt-20">
          <span className="lg:text-8xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Advance with Every <br /> Project
          </span>
          <p className="mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            At BETS, each project is an opportunity for growth. Expand your
            skills and <br /> accelerate your career progression with every task
            you tackle.
          </p>
        </div>

        <div className=" mt-16 md:mt-0">
          <span className="lg:text-8xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Work and Thrive
          </span>
          <p className="mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Thrive in a dynamic environment where innovation and excellence are{" "}
            <br />
            standard. At BETS, every day is a chance to excel and innovate
            within a <br /> supportive team.
          </p>
        </div>

        <div className="flex justify-center md:mt-20 mt-16 ">
          <div className=" ">
            <span className="lg:text-8xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Crafting Tomorrow's Technology, Today
            </span>
            <p className="mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            BETS is shaping the future of IT solutions. From humble beginnings,
              standard. At BETS, every day is a chance to excel and innovate
              within a <br /> we've grown into leaders driven by innovation and excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto mt-36">
        <div className="bg-[#ffffff15] px-16 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8  text-center  rounded-xl">
          <h1 className="lg:text-8xl md:text-5xl text-4xl font-bold mb-4">
            Ready to make an impact?
          </h1>
          At BETS, we're more than just a company; we're a team united by a
          shared vision of innovation and reliability. Our journey from a small
          startup to a leader in IT solutions is fueled by the collective
          passion and dedication of our team members. Here's where we share our
          story of growth and the values that drive us.
        </div>
      </div>
    </div>
  );
};
