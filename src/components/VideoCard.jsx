import React from 'react'
import videoSrc from '../videos/hh34.mp4'
import { NavLink } from 'react-router-dom'
import main from '../images/main.jpeg'
import main2 from '../images/main2.jpg'

export default function VideoCard() {
  return (
    <>

    <div className='max-w-[1220px] mx-auto'>
            <div className='relative p-3'>
            <video
            className="w-full h-[440px] object-cover rounded-lg shadow-lg filter brightness-50"
            controls
            autoPlay
            muted
            loop
            src={videoSrc} // Use the imported video file
          >
            Your browser does not support the video tag.
          </video>
                <div class="absolute inset-0 flex flex-col md:flex-row md:justify-between justify-around items-center text-white bg-opacity-50 p-4">
                    <div className='w-full md:w-[60%] flex flex-col gap-2 p-5'>
                        <h1 class=" text-2xl md:text-5xl font-bold mb-2">Find the talent needed to get your business growing.</h1>
                        <p class="text-base md:text-lg">Your paragraph text goes here.</p>
                        <button className='md:w-[30%] text-base md:text-base lg:text-lg bg-blue-500 hover:bg-blue-600 duration-500 rounded-2xl py-2 px-3 md:px-5 md:py-3'>Get Started</button>
                    </div>
                    <div className='w-full md:w-[50%] flex flex-row md:flex-col justify-center items-center gap-5'>
                        <img className='w-[45%] md:[68%] rounded-lg' src={main} alt="" />
                        <img className='w-[45%] md:[68%] rounded-lg' src={main2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
