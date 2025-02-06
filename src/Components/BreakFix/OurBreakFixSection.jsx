import side from "../../assets/break/side.png";
import dd from "../../assets/break/dd.png";
import aa from "../../assets/break/aa.png";
import ddd from "../../assets/break/ddd.png";
import img from "../../assets/break/1.png";
import price from "../../assets/rack/vv.png";
export const OurBreakFixSection = () => {
  const packages = [
    {
      title: "Hourly Rate",
      
    
      services:
        "Services: Structured Cabling (Copper And Fiber) + Device Installation",
      description:
        "Perfect For Small Businesses Setting Up Their Initial IT Infrastructure.",
      buttonLabel: "Book NOW",
    },
    {
      title: "Emergency Rate",
      
      savings: "$1,000",
      services: "Structured Cabling + Rack Installation + Device Deployment",
      description:
        "Ideal For Businesses Scaling Their IT Systems With Precision.",
      buttonLabel: "Book NOW",
    },
    {
      title: "Retainer Packages",
      
      services:
        "Routine Inspections, Troubleshooting, Priority Support (Annual Subscription)",
      description:
        "Ensures Your IT Systems Stay Operational With Minimal Downtime.",
      buttonLabel: "Book NOW",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95 ">
      <div className="lg:grid px-4 lg:px-0 grid-cols-2 relative bg-cover bg-center w-full text-white">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1A348D] via-[#0e68dd] to-[#1A348D] opacity-20"></div> */}
        <div className="text-white lg:p-20 lg:pt-32 pt-11 z-30">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            Why Choose BETS for Your Cabling Needs?
          </h1>
          <p className="mt-4 text-sm ">
            whether you need a full IT team or specialized consultation, BETS
            can help
          </p>
          <div className="">
            <div className=" border-slate-600 py-6 ">
              <h2 className=" text-2xl">Structured Cabling</h2>
              <p className=" py-3">
                Professional installation and management of copper and fiber
                cabling to ensure reliable connectivity and optimized
                performance.
              </p>
            </div>
            <div className=" border-slate-600 py-6">
              <h2 className=" text-2xl">Structured Cabling</h2>
              <p className=" py-3">
                Professional installation and management of copper and fiber
                cabling to ensure reliable connectivity and optimized
                performance.
              </p>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="">
                <div className="flex  gap-5 items-center bg-[#ffffff15] px-5 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8   rounded-xl">
                  <img className="w-[50px]" src={img} alt="" />
                  <p>
                    Hardware Repairs: Quick fixes and replacements for faulty
                    components to ensure optimal performance.
                  </p>
                </div>
                <div className="flex gap-5 items-center bg-[#ffffff15] px-5 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8   rounded-xl">
                  <img className="w-[50px]" src={img} alt="" />
                  <p>
                    Hardware Repairs: Quick fixes and replacements for faulty
                    components to ensure optimal performance.
                  </p>
                </div>
                <div className="flex gap-5 items-center bg-[#ffffff15] px-5 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8   rounded-xl">
                  <img className="w-[50px]" src={img} alt="" />
                  <p>
                    Hardware Repairs: Quick fixes and replacements for faulty
                    components to ensure optimal performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 -z-20">
              <div className="flex justify-center ">
                <div className="relative">
                  <div className="absolute  left-0 right-0 h-[800px] bg-gradient-to-b  bg-blue-950 to-transparent opacity-90 blur-[100px]"></div>

                  <img className=" " src={dd} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="z-30 hidden lg:block">
          <img className="w-full h-[600px]" src={side} alt="" />
        </div>
      </div>

      
      
      <div
        className="relative bg-cover bg-center lg:py-72 py-11 text-white"
        style={{ backgroundImage: `url(${price})` }}
      >
        <div className="flex items-center justify-center">
          <h1 className="md:text-5xl text-2xl font-semibold text-center">
            Ensure{" "}
            <span className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Seamless
            </span>{" "}
            Operations with{" "}
            <span className="bg-gradient-to-r from-blue-200 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Professional
            </span>{" "}
            Rack and Device Installations.
          </h1>
        </div>
      </div>
      <div className=" text-white py-32">
        <h2 className="text-center text-3xl font-bold mb-10">
        Pricing
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
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
      
    </div>
  );
};
