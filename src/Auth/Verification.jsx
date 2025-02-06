import React, { useState } from 'react'
import OtpInput from "react-otp-input";
import authBackground from '../assets/auth/auth.png';
import { Link } from 'react-router-dom';
export const Verification = () => {
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    // const data = {
    //   email: localStorage.getItem("email"),
    //   resetCode: Number(otp),
    // };

    // console.log(data);
    // try {
    //   const response = await verifyOtp(data).unwrap();
    //   console.log(response);
    //   const token = response.data;
    //   localStorage.setItem("accessToken", token);
    //   alert("Success");
    //   navigate("/reset");
    // } catch (error) {
    //   console.error(error?.data?.message);
    // }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${authBackground})` }}
    >
      <div className="bg-[#DBE3EA14] bg-opacity-30 backdrop-blur-lg md:p-14 p-4 m-2 md:m-0 md:py-28 py-20 rounded-[20px]  w-full max-w-[600px]">

        <h1 className="text-3xl font-semibold text-center text-white mb-6">Verification Code</h1>
        <div className="flex justify-center mb-5">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="md:mx-3 mx-1"></span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-16 h-16 text-center text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  style={{ width: "50px", height: "50px" }}
                />
              )}
            />
          </div>
          <Link to={'/auth/update-password'}><button
            onClick={handleVerify}
            className="w-full py-2 bg-[#2E4CB9] text-white rounded-md mb-4"
          >
            {"Verify OTP"}
          </button></Link>

          <span className="flex justify-center text-white">
            You have not received the email?{" "}
            <span className="text-blue-500 pl-2">Resend</span>
          </span>
        
      </div>
    </div>
  )
}
