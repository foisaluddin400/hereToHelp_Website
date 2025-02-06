import React from "react";
import img from "../../assets/network/img4.png";
export const NetworkPricing = () => {
  const packages = [
    {
      title: "Basic Bundle",
      discount: "10%",
      price: "$3,500",
      savings: "$500",
      services:
        "Services: Structured Cabling (Copper And Fiber) + Device Installation",
      description:
        "Perfect For Small Businesses Setting Up Their Initial IT Infrastructure.",
      buttonLabel: "Book NOW",
    },
    {
      title: "Pro Bundle",
      discount: "15%",
      price: "$7,500",
      savings: "$1,000",
      services: "Structured Cabling + Rack Installation + Device Deployment",
      description:
        "Ideal For Businesses Scaling Their IT Systems With Precision.",
      buttonLabel: "Book NOW",
    },
  ];
  return (
    <div>
      <div className=" text-white py-32">
        <h2 className="text-center text-3xl font-bold mb-10">
          Special Packages
        </h2>
        <div className="relative ">
          <div className=" flex justify-center ">
            <div className=" grid  grid-cols-1 md:grid-cols-2 gap-6 px-4">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-lg shadow-lg p-6 text-center"
                >
                  <h3 className="text-xl font-bold mb-2">
                    {pkg.title}{" "}
                    {pkg.discount && (
                      <span className="text-sm text-[#2E4CB9]">
                        (Discount: {pkg.discount})
                      </span>
                    )}
                  </h3>
                  <p className="text-lg font-semibold">
                    Starting At {pkg.price}{" "}
                    {pkg.savings && (
                      <span className="text-base">(Save {pkg.savings}!)</span>
                    )}
                  </p>
                  <p className="text-sm my-4">{pkg.services}</p>
                  <p className="text-sm mb-6">{pkg.description}</p>
                  <button className="bg-[#2E4CB9] text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
                    {pkg.buttonLabel}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -z-10  -top-28">
            <div className="flex justify-center ">
              <div className="relative">
                <div className="absolute -top-11 left-0 right-0 h-[400px] bg-gradient-to-b from-blue-700 to-transparent opacity-80 blur-[100px]"></div>

                <img className="w-[400px] " src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
