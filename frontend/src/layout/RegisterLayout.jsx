import { Outlet } from "react-router-dom"
import owlImage from "../assets/images/owl3.png";


function RegisterLayout() {
  return (
    <div className='bg-[#FFFFFF] w-screen h-[91.2vh] flex pt-12 pb-11 gap-37 pl-20'>
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='font-chunkfive text-5xl'>Enter The Owl’s Nest</p>
        <img src={owlImage} className='size-79'/>
        <p className='font-worksans text-3xl'>Become A Member Now</p>
      </div>

      <div className='bg-[#A5A5A538] w-180 border-[#000000] border-[0.1px] rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-9 px-10 flex flex-col items-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default RegisterLayout