import React from "react";
import cover from "../../assets/siteSurvey/bb.png";
import cover1 from "../../assets/siteSurvey/ee.png";
import back from "../../assets/siteSurvey/cc.png";
export const SiteSurveySection = () => {
  return (
    <div className="px-4 lg:px-0">
      <div className="lg:grid grid-cols-2 gap-5 max-w-7xl m-auto mt-20">
        <div className="flex ">
          <img className="rounded-3xl" src={cover} alt="" />
        </div>

        <div className="bg-[#ffffff15] mt-5 lg:mt-0 w-full border-2 text-xl border-gray-500 backdrop-blur-sm text-white p-5 rounded-3xl ">
          <h1 className="text-4xl font-bold pb-5">Site Surveys</h1>
          <li>In-depth evaluation of current network setups.</li>
          <li>
            Tailored recommendations for expansion, optimization, or upgrades.
          </li>
          <div className="flex gap-4">
            <p className="text-lg font-semibold">Description:</p>
            <p>
              On-site assessments to identify the current infrastructure status,
              providing recommendations for improvements or expansions. This
              includes evaluating network layout, hardware, and cabling systems
              to ensure they meet business needs and future scalability.
            </p>
          </div>
          <div className="flex gap-4 py-8">
            <p className="text-lg font-semibold">Detailed Reports:</p>
            <p>
              Customized solutions tailored to meet unique business
              requirements.
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-lg font-semibold">Professional Assessments:</p>
            <p>
              Conducted by experienced technicians to ensure accuracy and
              reliability.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div>
          <div className="">
            <div className="flex justify-start ml-16 -mt-11">
              <div className="relative">
                <div className="absolute left-0 right-0 h-[400px] bg-gradient-to-b from-blue-400 to-transparent opacity-100 blur-[100px]"></div>

                <img style={{ transform: "rotate(-20deg)" }} className="w-40 " src={cover1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-20">
          <h1 className="text-white font-bold text-4xl text-center">
            We Provide detailed surveys
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="lg:relative">
          <div className="hidden lg:block">
          <div className="flex justify-center">
            <img
              style={{ transform: "rotate(-20deg)" }}
              className="w-96"
              src={back}
              alt=""
            />
          </div>
          </div>


          <div className="lg:absolute top-0 ">
            
          <div className="lg:hidden block">
          <h1 className=" text-center text-white font-bold text-3xl mt-20 pb-3">We Provide detailed surveys
          </h1>
          </div>
            <div className="lg:grid grid-cols-3 gap-12 space-y-4 lg:space-y-0 lg:mt-32 ">
              {/* Feature 1 */}
              <div className="bg-[#ffffff15] lg:px-16 border-2 border-gray-500  backdrop-blur-sm text-white py-8  text-center  rounded-3xl">
                <div className="flex justify-center mb-6">
                  <span className="text-blue-400 text-6xl">
                    {/* Shield Icon */}
                    &#x1F6E1;
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Certified & Experienced Technicians
                </h3>
                <p className="text-gray-300">
                  Our team comprises industry-certified professionals with years
                  of experience, ensuring top-quality service and expertise you
                  can rely on.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#ffffff15] lg:px-16 border-2 border-gray-500  backdrop-blur-sm text-white py-8  text-center  rounded-3xl">
                <div className="flex justify-center mb-6">
                  <span className="text-yellow-400 text-6xl">
                    {/* Lightbulb Icon */}
                    &#x1F4A1;
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Tailored Solutions For Your Needs
                </h3>
                <p className="text-gray-300">
                  We don’t believe in one-size-fits-all. We design and implement
                  customized IT solutions that align perfectly with your unique
                  business requirements and goals.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#ffffff15] lg:px-16 border-2 border-gray-500  backdrop-blur-sm text-white py-8  text-center  rounded-3xl">
                <div className="flex justify-center mb-6">
                  <span className="text-pink-400 text-6xl">
                    {/* Clock Icon */}
                    &#x23F3;
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Fast & Efficient Service
                </h3>
                <p className="text-gray-300">
                  We understand that time is money. Our streamlined processes
                  and dedicated team ensure prompt, efficient service to
                  minimize downtime and maximize productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
