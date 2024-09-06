import React from 'react'
import img from "../images/big-b (1).png";
import user1 from "../images/user1.png"
import user2 from "../images/user2.webp"
import {NavLink} from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';
import '../App.css';
import video from "../videos/hh34.mp4"


export default function Hero() {


  return (
    <div className='relative h-[820px] w-full overflow-hidden md:h-[720px] lg:h-[720px]'>
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-[880px] object-cover brightness-50" // Fixed size for video
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='relative flex-col justify-center w-full text-white z-10  max-w-[1220px] mx-auto grid md:grid-cols-2'>
        <div className=' px-5'>
        
            <div className=' mt-16 lg:mt-28 mb-16 leading-loose text-white lg:text-2xl md:text-2xl text-lg font-semibold'>
              <TypeAnimation
                sequence={[
                  'Find Work That Works.',
                  1000,
                  'Work smart, Not Hard.',
                  1000,
                  'Level Up Your Goals.',
                  1000,
                  "Crafting India's Future.",
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block', lineHeight: '1.2' }}
                repeat={Infinity}
              />
            </div>
            <p className=' font-normal text-lg md:text-xl py-5 text-white'>Lorem ipsum dolor sit dvhvw fsf wdu amet consecur adipisicing elit. Mollitia doloribus voluptatem illum adipisci eveniet.</p>
            <div className='flex items-center gap-3'>
              <NavLink to='/discover' className='mt-8 px-5 py-2 font-bold bg-green-500 rounded-full text-white hover:bg-green-400 duration-500'>Discover</NavLink>
              <NavLink to="/login" className='md:hidden mt-8 px-5 py-2 font-bold bg-green-500 rounded-full text-white hover:bg-green-400 duration-500'>Login</NavLink>
            </div>
        <div className='flex items-center text-lg text-white font-bold mt-10'>
          <div className='flex'>
            <img className="w-6 md:w-10" src={user1} alt="" />
            <img className="w-6 md:w-10 ml-[-10%]" src={user2} alt="" />
            <img className="w-6 md:w-10 ml-[-10%]" src={user1} alt="" />
          </div>
          <h3 className="">64 million Satisfied Users</h3>
        </div>
        
        </div>
        <div className='images mt-2 md:mt-20 px-5'>
            <img className={`transition-transform duration-500 mb-32 size-fit image-responsive`} src={img} alt="" />
        </div>
      </div>
    </div>
  )
}
