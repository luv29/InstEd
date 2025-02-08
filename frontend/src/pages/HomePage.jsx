import React from 'react';
import { motion } from "framer-motion";
import owlImage from "../assets/images/owl2.png";
import instagram from "../assets/images/instagram_icon.png";
import facebook from "../assets/images/facebook_icon.png";
import linkedin from "../assets/images/linkedin_icon.png";
import different1 from "../assets/images/different1.jpeg";
import different2 from "../assets/images/different2.jpeg";
import different3 from "../assets/images/different3.jpg";
import different4 from "../assets/images/different4.jpg";
import group from "../assets/images/group.png";
import rectangle from "../assets/images/Rectangle 107.png";
import twitter from "../assets/images/twitter_icon.png";
import wave1 from "../assets/images/wave1.png";
import wave2 from "../assets/images/wave2.png";

export default function HomePage() {
  return (
    <div>
      <div className='gradient bg-gradient-to-l to-[#FF1F01] from-[#FFC700] w-screen h-screen'>
        <div className='flex items-center h-[73vh] pl-60 pt-8 gap-x-52 flex-wrap'>
          <div className='flex size-fit flex-col w-2xs'>
            <p className='text-[#FFFFFF] text-8xl font-chunkfive leading-20 mb-6'>SOLVE.<br/>POST.<br/>EARN.<br/>RISE.</p>
            <p className='text-[#FFFFFF] text-base font-yatra'>Master learning like a game with our revolutionizing hub of modern education.</p>
          </div>
          <div className='flex w-150 h-135'>
            <img src={owlImage} className='h-full opacity-60 mix-blend-overlay'></img>
          </div>
          <div className='flex gap-x-5 w-2xs h-8'>
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
            <img src={linkedin} />
          </div>
        </div>
      </div>

      <div className='w-screen h-screen gradient bg-gradient-to-l to-[#FF1F01] from-[#FFC700] flex flex-col relative'>
        <div className='absolute'>
          <img src={wave2} className='top-0 w-screen' />
          <div className='w-screen h-[53vh] bg-white '></div>
          <img src={wave1} className=' bottom-0 w-screen' />    
        </div>    

        <motion.p 
          className='text-7xl font-lgothic absolute items-center justify-center top-25 left-[30%] right-[20%]'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          WHAT MAKES US DIFFERENT ?
        </motion.p>
        <motion.div 
          className='flex gap-18 px-20 absolute h-[110%] w-full justify-center'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[{ img: different1, text: "DOUBT SOLVING ARENA" },
            { img: different2, text: "COMMUNITY LIKE NO OTHER" },
            { img: different3, text: "NEW GENERATION RANKING SYSTEM" },
            { img: different4, text: "GAMIFIED APPROACH TO LEARNING" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className='flex flex-col justify-center items-center gap-4'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={item.img} className='rounded-2xl border-1 shadow-xl' />
              <p className='font-lgothic text-3xl text-center'>{item.text}</p>
              {index !== 2 ? <p><br /></p> : <></>}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className='w-screen h-screen gradient bg-gradient-to-l to-[#FF1F01] from-[#FFC700] pt-4 flex flex-col items-center px-19 gap-7'>
        <motion.p 
          className='font-lgothic text-7xl'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >ABOUT US</motion.p>
        <div className='flex w-full gap-20'>
          <motion.div 
            className='font-outfit text-xl text-[#FFFFFF] w-[50%] font-semibold text-justify'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            At InstEd, we believe that learning thrives when it’s collaborative, engaging, and rewarding. Our platform is built to transform the way students and educators interact, making doubt-solving a dynamic and enriching experience. Whether you're struggling with a complex concept or eager to help others by sharing your knowledge, our community-driven approach ensures that every question finds an answer.
<br/> <br/>
We’ve combined the best aspects of social networking, gamification, and real-time collaboration to create an interactive learning space. Users can post academic doubts, solve them for others, and earn recognition through a structured tier system. As you contribute, you level up, unlocking exclusive achievements and ranking higher on leaderboards.

          </motion.div>
          <motion.div 
            className='w-[39%]'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={group}/>
          </motion.div>
        </div>
        <motion.p 
          className='font-outfit text-xl text-[#FFFFFF] font-semibold text-justify'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          But learning isn’t just about competition—it’s about connection. Our platform fosters meaningful interactions through personalized profiles, chat rooms, and a mentorship system, allowing users to build networks, follow experts, and track their progress.<br/><br/>
          Whether you’re a curious seeker, an aspiring scholar, or a seasoned mentor, InstEd is designed to support and celebrate your growth. Join us in making knowledge more accessible, collaborative, and fun! 
        </motion.p>
      </div>
      <div className='w-screen gradient bg-gradient-to-l to-[#FF1F01] from-[#FFC700]'>
        <img src={rectangle} className='w-200'/>
      </div>
      <div className='w-screen h-screen gradient bg-white flex'>
        <div>
          <p className='font-outfit text-xl text-[#666666]'>Community</p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
