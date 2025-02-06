import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export const ContactExplore = () => {
  return (
    <div className="bg-gradient-to-b from-[#2D48B1] to-[#EEF0F9] py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-white md:text-left text-center mb-8">
          Contact Us To <span className='text-black'>Explore</span> IT Service <br /> <span className='text-black '>Opportunities.</span>
        </h2>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left font-semibold">
          {/* Email Section */}
          <div>
            <h3 className="text-lg font-semibold text-black">Email*</h3>
            <p className="text-black">itservice@gmail.com</p>
            <p className="text-black">itservice@gmail.com</p>
          </div>
          
          {/* Contact Number Section */}
          <div>
            <h3 className="text-lg  text-black">Contact Number*</h3>
            <p className="text-black">+99 125 023 1253</p>
            <p className="text-black">+99 125 023 1253</p>
          </div>
          
          {/* Map Section */}
          <div className="flex items-center md:justify-start justify-center">
            <h3 className="text-lg font-semibold text-black mr-2">Map</h3>
            <FaArrowUpRightFromSquare />
          </div>
        </div>
      </div>
    </div>
  );
};
