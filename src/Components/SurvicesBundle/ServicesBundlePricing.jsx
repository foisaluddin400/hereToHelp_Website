import React from 'react'

export const ServicesBundlePricing = () => {
    const packages = [
        {
          title: "Basic Bundle",
          discount: "10%",
          price: "$3,500",
          savings: "$500",
          services:
            "Services: Structured Cabling (Copper And Fiber) + Device Installation",
          description: "Perfect For Small Businesses Setting Up Their Initial IT Infrastructure.",
          buttonLabel: "Optimize Your Network Today!",
        },
        {
          title: "Pro Bundle",
          discount: "15%",
          price: "$7,500",
          savings: "$1,000",
          services:
            "Structured Cabling + Rack Installation + Device Deployment",
          description: "Ideal For Businesses Scaling Their IT Systems With Precision.",
          buttonLabel: "Scale Seamlessly Now!",
        },
        {
          title: "Custom Maintenance Package",
          discount: null,
          price: "$2,000/year",
          savings: null,
          services:
            "Routine Inspections, Troubleshooting, Priority Support (Annual Subscription)",
          description: "Ensures Your IT Systems Stay Operational With Minimal Downtime.",
          buttonLabel: "Book Your Custom Plan NOW",
        },
      ];
      
  return (
    <div>
        <div className=" text-white py-32">
        <h2 className="text-center text-3xl font-bold mb-10">
        Pricing
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
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
  )
}
