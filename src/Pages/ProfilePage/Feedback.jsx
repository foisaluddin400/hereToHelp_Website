import { Button, Input } from 'antd'
import React from 'react'

export const Feedback = () => {
  return (
    <div>
        <div className="flex text-white justify-center items-center min-h-screen bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95">
      <div className=" p-8  rounded-lg w-[600px] ">
        {/* Profile Section */}
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full  mr-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold ">Henry Jenkins</h3>
            <p className="">Location: UK London</p>
          </div>
        </div>
        {/* Feedback Section */}
        <div className="flex flex-col">
          <label className="text-sm font-medium pb-4">Feedback</label>
          <textarea className='bg-transparent border border-white h-48' name="" id=""></textarea>
          <button
            type="primary"
            className="mt-4 w-full  text-white hover:bg-gray-800"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
