import React from 'react'
import { useState } from 'react';
import owlImage from "../assets/images/owl3.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google from "../assets/images/google_icon.png";
import phone from "../assets/images/phone_icon.png";
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='bg-[#FFFFFF] w-screen h-[91.2vh] flex pt-12 pb-11 gap-55 pl-20'>
      <div className='flex flex-col justify-center items-center text-center'>       
        <img src={owlImage} className='size-79'/>
        <p className='font-chunkfive text-5xl'>Welcome back !</p>
      </div>
      <div className='bg-[#A5A5A538] w-180 border-[#000000] border-[0.1px] rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-9 px-10 flex flex-col items-center'>
        <div className='mb-6 flex flex-col items-center'>
          <h2 className="font-worksans text-3xl font-semibold text-[#3C3C3C]">Log in or Sign in</h2>
          <p className='font-poppins text-[#666666] text-xs'>use your email or other services to continue with us</p>
        </div>
        <button className="bg-[#FFFFFF] flex items-center justify-center text-[#333333] border-[0.2px] font-outfit font-normal border-[#333333] rounded-full px-28 py-2.5 mb-4">
          <img src={google} className='size-4 mr-3'/>
          Continue with Google
        </button>
        <button className="bg-[#FFFFFF] flex items-center justify-center text-[#333333] border-[0.2px] font-outfit font-normal border-[#333333] rounded-full px-28 py-2.5 mb-4">
          <img src={phone} className='size-4 mr-3'/>
          Continue with Phone
        </button>
        <div className='flex justify-center items-center gap-4 my-3'>
          <div className='bg-[#5656563f] h-[2px] w-42'></div>
          <p className='text-[#5656568d] text-base'>OR</p>
          <div className='bg-[#5656563f] h-[2px] w-42'></div>
        </div>

        <form className='gap-y-0.1'>

          <label className='font-poppins text-[#666666] text-sm'>Username / Phone no.</label>
          <input type="text" className="w-full py-2 px-3 mb-4 border border-[#66666659] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1F01]" />

          <label className='font-poppins text-[#666666] text-sm'>Password</label>
          <div className="relative w-full">
            <input 
              type={showPassword ? "text" : "password"} 
              className="w-full py-2 px-3 mb-1 border border-[#66666659] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1F01]" 
            />
            <button 
              type="button" 
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            <p className='font-poppins text-[11px] text-[#666666] mt-0.1'><a href="#" className='underline hover:text-blue-500'>Forgot password?</a></p>
          </div>
          <div className='flex items-center mt-7 gap-4'>
            <div className="bg-[#FF1F01] border-2 border-[#FFFFFFE0] text-black px-4 py-2 rounded-full text-sm font-worksans font-bold self-start hover:bg-white hover:border-2 hover:border-[#FF1F01] transition duration-550 transition-discrete ease-in-out">
              LOG IN
            </div>
            <p className='font-poppins text-xs'>Don’t have an account? <a href="#" className='underline hover:text-blue-500'>Sign up</a></p>
          </div>
        </form>                
      </div>
    </div>
  )
}
