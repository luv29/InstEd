import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google from "../assets/images/google_icon.png";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <>
        <h2 className="font-worksans text-2xl font-semibold mb-6 text-[#3C3C3C] self-start">Sign Up Now</h2>

        <button className="bg-[#FFFFFF] flex items-center justify-center text-[#333333] border-[0.2px] font-outfit font-normal border-[#333333] rounded-full px-28 py-2.5 mb-4">
          <img src={google} className='size-4 mr-3'/>
          Sign up with Google
        </button>
        
        <div className='flex justify-center items-center gap-4 my-3'>
          <div className='bg-[#5656563f] h-[2px] w-60'></div>
          <p className='text-[#5656568d] text-base'>OR</p>
          <div className='bg-[#5656563f] h-[2px] w-60'></div>
        </div>

        <form className='self-start gap-y-0.1'>
          <div className='flex gap-5'>
            <div>
              <label className='font-poppins text-[#666666] text-sm'>First Name</label>
              <input type="text" className="w-full py-2 px-3 mb-4 border border-[#66666659] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1F01]" />
            </div>
            <div>
              <label className='font-poppins text-[#666666] text-sm'>Last Name</label>
              <input type="text" className="w-full py-2 px-3 mb-4 border border-[#66666659] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1F01]" />
            </div>
          </div>

          <label className='font-poppins text-[#666666] text-sm'>Phone number</label>
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
            <p className='font-poppins text-[10px] text-[#666666] mt-0.1'>use 8 or more characters with a mix of letters, numbers and symbols.</p>
          </div>
        </form>
        <div className='flex self-start items-center mt-7 gap-4'>
          <div className="bg-[#FF1F01] border-2 border-[#FFFFFFE0] text-black px-4 py-2 rounded-full text-sm font-worksans font-bold self-start hover:bg-white hover:border-2 hover:border-[#FF1F01] transition duration-550 transition-discrete ease-in-out">
            SIGN UP
          </div>
          <p className='font-poppins text-xs'>Already have an account? <a href="#" className='underline hover:text-blue-500'>Log in</a></p>
        </div>
      </>
  );
}
