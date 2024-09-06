import React from 'react'
import one from "../images/2.svg"
import two from "../images/five.svg"
import three from "../images/four.svg"
import four from "../images/hghgh.svg"
import five from "../images/one.svg"
import six from "../images/thr.svg"

export default function Category() {


  return (
    <>
    <main className='max-w-[1220px] mx-auto mb-32'>
        <div className={`flex justify-between my-10 px-4`}>
            <div>
                <h1 className='md:text-4xl text-2xl font-semibold my-3'>Browse talent by category</h1>
                <p className='md:text-base text-sm'>Looking for work ? <a className='text-green-800 underline' href="">Browse jobs</a></p>
            </div>
            <div className='my-8 px-4'>
                <button className="bg-green-700 hover:bg-green-500 hover:text-black duration-500 px-3 py-2 text-sm md:text-base md:py-2 md:px-5 text-white rounded-full ">See More</button>
            </div>
        </div>

        <div className='px-4'>
            <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4'>
                <div className="card h-44 w-44 rounded-xl shadow-md bg-gray-300 flex flex-col p-5">
                    <img className='px-6 m-4' src={one} alt="" />
                    <h3 className='font-semibold'>Development & IT</h3>
                    <p className='text-stone-700'>24 skills</p>
                </div>
                <div className="card h-44 w-44 rounded-xl shadow-md bg-gray-300 flex flex-col p-5">
                    <img className='px-6 m-4' src={two} alt="" />
                    <h3 className='font-semibold'>Graphics & Design</h3>
                    <p className='text-stone-700'>11 skills</p>
                </div>
                <div className="card h-44 w-44 rounded-xl shadow-md bg-gray-300 flex flex-col p-5">
                    <img className='px-6 m-4' src={three} alt="" />
                    <h3 className='font-semibold'>Programming</h3>
                    <p className='text-stone-700'>19 skills</p>
                </div>
                <div className="card h-44 w-44 rounded-xl shadow-md bg-gray-300 flex flex-col p-5">
                    <img className='px-6 m-4' src={four} alt="" />
                    <h3 className='font-semibold'>Sales & Marketing</h3>
                    <p className='text-stone-700'>16 skills</p>
                </div>
                <div className="md:hidden lg:block card h-44 w-44 rounded-xl shadow-md bg-gray-300 flex flex-col px-5 py-2">
                    <img className='px-6 m-4' src={five} alt="" />
                    <h3 className='font-semibold'>Photography</h3>
                    <p className='text-stone-700'>6 skills</p>
                </div>
                <div className="md:hidden lg:block card h-44 w-44 rounded-xl shadow-md bg-gray-300 flex flex-col px-5 py-2">
                    <img className='px-6 m-4' src={six} alt="" />
                    <h3 className='font-semibold'>Video Animation</h3>
                    <p className='text-stone-700'>4 skills</p>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}
