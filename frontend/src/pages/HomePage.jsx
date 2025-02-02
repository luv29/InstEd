import React from 'react'
import owlImage from "../assets/images/owl2.png";
import instagram from "../assets/images/instagram_icon.png";
import facebook from "../assets/images/facebook_icon.png";
import linkedin from "../assets/images/linkedin_icon.png";
import twitter from "../assets/images/twitter_icon.png";
import {Navbar} from "../components"
export default function HomePage() {
  return (
    <div className='gradient bg-gradient-to-l to-[#FF1F01] from-[#FFC700] w-screen h-screen'>
      <Navbar/>
      <div className='flex items-center w-screen h-[73vh] pl-60 pt-8 gap-x-52 flex-wrap'>
        <div className='flex size-fit flex-col w-2xs'>
          <p className='text-[#FFFFFF] text-8xl font-chunkfive leading-20 mb-6'>SOLVE.<br/>POST.<br/>EARN.<br/>RISE.</p>
          <p className='text-[#FFFFFF] text-base font-yatra'>Master learning like a game with our revolutionizing hub of modern education.</p>
        </div>
        <div className='flex w-200 h-135'>
          <img src={owlImage} className='h-full opacity-60 mix-blend-overlay'></img>
        </div>
        <div className='flex gap-x-5 w-2xs h-8'>
          <img src={facebook} className=''></img>
          <img src={instagram} className=''></img>
          <img src={twitter} className=''></img>
          <img src={linkedin} className=''></img>
        </div>
      </div>
    </div>
  )
}
