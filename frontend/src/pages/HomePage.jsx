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
import community from "../assets/images/community.png";
import wave1 from "../assets/images/wave1.png";
import wave2 from "../assets/images/wave2.png";
import luv from "../assets/images/luv.jpg";
import aryan from "../assets/images/aryan.jpg";
import aaryan from "../assets/images/aaryan.png";
import swayam from "../assets/images/swayam.jpg";
import digibijay from "../assets/images/digibijay.jpg";
import mukul from "../assets/images/mukul.jpg";
import kunj from "../assets/images/kunj.jpg";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function HomePage() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Luv Kansal",
      designation: "Product Manager at TechFlow",
      src: luv,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Aaryan Singh",
      designation: "CTO at InnovateSphere",
      src: aaryan,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Aryan Gupta",
      designation: "Operations Director at CloudScale",
      src: aryan,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Digibijay Sahu",
      designation: "Engineering Lead at DataPro",
      src: digibijay,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Kunj Vipul Goyal",
      designation: "VP of Technology at FutureNet",
      src: kunj,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Swayam Patel",
      designation: "VP of Technology at FutureNet",
      src: swayam,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Mukul Rawat",
      designation: "VP of Technology at FutureNet",
      src: mukul,
    },
  ];

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
          className='text-7xl font-lgothic md:text-6xl absolute items-center justify-center top-25 left-[30%] right-[20%]'
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

      <div className='w-screen h-screen gradient bg-gradient-to-l to-[#FF1F01] from-[#FFC700] pt-0 xl:pt-4 flex flex-col items-center px-14 xl:px-19 gap-1 md:gap-3 xl:gap-7' id="about">
        <motion.p 
          className='font-lgothic text-7xl'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >ABOUT US</motion.p>
        <div className='flex w-full gap-20'>
          <motion.div 
            className='font-outfit text-lg xl:text-xl text-[#FFFFFF] w-[50%] font-semibold text-justify'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            At InstEd, we believe that learning thrives when it’s collaborative, engaging, and rewarding. Our platform is built to transform the way students and educators interact, making doubt-solving a dynamic and enriching experience. Whether you're struggling with a complex concept or eager to help others by sharing your knowledge, our community-driven approach ensures that every question finds an answer.
<br/> <div className='hidden xl:flex'><br/></div>
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
          className='font-outfit text-[#FFFFFF]  text-lg xl:text-xl font-semibold text-justify'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          But learning isn’t just about competition—it’s about connection. Our platform fosters meaningful interactions through personalized profiles, chat rooms, and a mentorship system, allowing users to build networks, follow experts, and track their progress.<div className='hidden lg:flex'><br/></div>
          Whether you’re a curious seeker, an aspiring scholar, or a seasoned mentor, InstEd is designed to support and celebrate your growth. Join us in making knowledge more accessible, collaborative, and fun! 
        </motion.p>
      </div>

      <div className='w-screen gradient bg-gradient-to-l to-[#FF1F01] from-[#FFC700]'>
        <img src={rectangle} className='w-200'/>
      </div>
      <div id='community' className='w-screen h-[89vh] gradient bg-white flex justify-center items-center px-8'>
        <div className='w-[50%] p-8 flex flex-col justify-center items-center gap-5 '>
          
          <motion.p 
            className='font-outfit text-7xl text-[#666666] self-start'
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            viewport={{ once: true }}
          >
            Community
          </motion.p>

          <motion.p 
            className='font-outfit text-7xl text-[#474343] font-semibold self-start'
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
            viewport={{ once: true }}
          >
            FOR LEARNERS
          </motion.p>

          <motion.p 
            className='font-outfit text-base text-[#474343] text-justify'
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} 
            viewport={{ once: true }}
          >
            At InstEd, our community is the heart of the learning experience. Here, knowledge isn’t just shared—it’s celebrated. 
            Connect with like-minded learners, engage in real-time discussions, and collaborate to solve doubts together.
            Whether you're seeking help, offering guidance, or climbing the leaderboards, every contribution makes our 
            community stronger. Join us in building a supportive and dynamic space where learning never stops!
          </motion.p>

          <motion.div 
            className='self-start'
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }} 
            viewport={{ once: true }}
          >
            <button className='font-outfit text-base text-[#000000] border-[0.5px] border-[#000000] px-4 py-1 rounded-full flex hover:bg-[#000000] hover:border-[0.5px] hover:text-[#FFFFFF] hover:border-[#000000] transition duration-200 ease-in-out'>
              Explore
            </button>
          </motion.div>

        </div>
        <motion.div 
          className='w-[50%]'
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} 
          viewport={{ once: true }}
        >
          <img src={community} />
        </motion.div>
      </div>

      <div className='w-screen h-screen gradient bg-gradient-to-l to-[#FF1F01] from-[#FFC700] flex-col justify-center items-center'>
        <div id="contact-us">
         <AnimatedTestimonials testimonials={testimonials} />
        </div>      
        <footer className="flex items-center justify-center font-outfit  text-white p-10">
      <div className="grid grid-cols-5 gap-8 w-[70%]">
        <div className="font-bold text-2xl">INSTED</div>

        <div>
          <h3 className=" font-bold text-xl mb-3">InstEd</h3>
          <ul className="text-md space-y-2 font-roboto">
            <li>Home</li>
            <li>About</li>
            <li>Community</li>
          </ul>
        </div>

        <div>
          <h3 className="font-outfit font-bold text-xl mb-3">Resources</h3>
          <ul className="space-y-2 font-roboto text-base">
            <li>Profile</li>
            <li>Feed</li>
            <li>Leaderboard</li>
          </ul>
        </div>

        <div>
          <h3 className="font-outfit font-bold text-xl mb-3">Contact</h3>
          <ul className="space-y-2 font-roboto text-base">
            <li>Email</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div>
          <h3 className="font-outfit font-bold text-nowrap text-xl mb-3">Join Our Newsletter</h3>
          <div className="flex items-center bg-white rounded-full py-1">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow p-2 text-black outline-none rounded-full"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </footer>
      </div>
    </div>
  );
}
