import React from "react";
import sideImage from "../../assets/consultation/ddd.png";
import a from "../../assets/consultation/1.png";
import b from "../../assets/consultation/2.png";
import d from "../../assets/consultation/3.png";
import c from "../../assets/consultation/back.png";
import { ConsultationPricing } from "./ConsultationPricing";
export const ConsultationsSection = () => {
  return (
    <div className=" lg:py-16 text-white">
      <div className="lg:mt-20 mt-11 mx-4 lg:mx-0">
      <div className="lg:grid grid-cols-2 gap-5 max-w-7xl m-auto ">
        <div className="bg-[#ffffff15] w-full border-2 text-xl border-gray-500 backdrop-blur-sm text-white p-5 rounded-3xl ">
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
        <div className="flex mt-5 lg:mt-0">
          <img className="rounded-xl" src={sideImage} alt="" />
        </div>
      </div>
      </div>

      {/* Icons Section */}
      <div className="pb-16 lg:pt-96 mx-4 lg:mx-0">
        <div className="lg:relative ">
          <div className="hidden lg:block">
            <img className="w-full" src={c} alt="" />
          </div>
          <div className="lg:pl-32 flex justify-center">
            <div className="  lg:absolute bottom-0 ">
              <div className="">
                <div className="">
                  <div className="flex justify-center py-8">
                  <img className="w-20" src={a} alt="" />
                  </div>
                  <div className="bg-[#ffffff15] border-2 border-gray-500  backdrop-blur-sm text-white max-w-4xl m-auto  p-6 rounded-3xl">
                    <div>
                      <h1 className="font-bold pb-1">Optimal Network Setup</h1>
                      <p>
                        Customized configuration settings to meet specific
                        business requirements, ensuring seamless integration and
                        maximum efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center py-8">
                  <img className="w-20" src={b} alt="" />
                  </div>
                  <div className="bg-[#ffffff15] border-2 border-gray-500  backdrop-blur-sm text-white  max-w-4xl m-auto  p-6 rounded-3xl">
                    <div>
                      <h1 className="font-bold pb-1">Optimal Network Setup</h1>
                      <p>
                        Customized configuration settings to meet specific
                        business requirements, ensuring seamless integration and
                        maximum efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center py-8">
                  <img className="w-20" src={d} alt="" />
                  </div>
                  <div className="bg-[#ffffff15] border-2 border-gray-500  backdrop-blur-sm text-white flex gap-7 items-center max-w-4xl  p-6 rounded-3xl">
                    <div>
                      <h1 className="font-bold pb-1">Optimal Network Setup</h1>
                      <p>
                        Customized configuration settings to meet specific
                        business requirements, ensuring seamless integration and
                        maximum efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
     <div className="pt-20">
     <div
            className="relative bg-cover object-cover bg-center py-72 px-4 lg:px-0 text-white"
            style={{ backgroundImage: `url(${c})` }}
          >
            
      
            <div className="lg:pl-32 flex justify-center">
            <div className="  absolute top-0 ">
              <div className="">
                <div className="">
                  <div className="flex justify-center py-8">
                  <img className="w-20" src={a} alt="" />
                  </div>
                  <div className="bg-[#ffffff15] border-2 border-gray-500  backdrop-blur-sm text-white max-w-4xl m-auto  p-6 rounded-3xl">
                    <div>
                      <h1 className="font-bold pb-1">Optimal Network Setup</h1>
                      <p>
                        Customized configuration settings to meet specific
                        business requirements, ensuring seamless integration and
                        maximum efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center py-8">
                  <img className="w-20" src={b} alt="" />
                  </div>
                  <div className="bg-[#ffffff15] border-2 border-gray-500  backdrop-blur-sm text-white  max-w-4xl m-auto  p-6 rounded-3xl">
                    <div>
                      <h1 className="font-bold pb-1">Optimal Network Setup</h1>
                      <p>
                        Customized configuration settings to meet specific
                        business requirements, ensuring seamless integration and
                        maximum efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center py-8">
                  <img className="w-20" src={d} alt="" />
                  </div>
                  <div className="bg-[#ffffff15] border-2 border-gray-500  backdrop-blur-sm text-white flex gap-7 items-center max-w-4xl  p-6 rounded-3xl">
                    <div>
                      <h1 className="font-bold pb-1">Optimal Network Setup</h1>
                      <p>
                        Customized configuration settings to meet specific
                        business requirements, ensuring seamless integration and
                        maximum efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
     </div> */}
      <ConsultationPricing></ConsultationPricing>
    </div>
  );
};
