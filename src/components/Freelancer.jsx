import React from 'react'
import imgOne from '../images/one free.jpg'
import imgTwo from '../images/two free.jpg'
import imgThree from '../images/three free.jpg'
import imgFour from '../images/four free.jpg'
import imgFive from '../images/five free.jpg'

export default function Freelancer() {
  return (
    <>
    <main className='max-w-[1220px] mx-auto mb-32'>
        <div className='flex justify-between my-8 px-4'>
            <div>
                <h1 className='md:text-4xl text-2xl font-semibold my-3'>Our top Hiring Talents</h1>
                <p className='md:text-base text-sm'>Looking for work ? <a className='text-green-800 underline' href="">Browse freelancers</a></p>
            </div>
            <div className='my-8 px-4'>
                <button className="bg-green-700 hover:bg-green-500 hover:text-black duration-500 px-3 py-2 text-sm md:text-base md:py-2 md:px-5 text-white rounded-full ">See More</button>
            </div>
        </div>

        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 p-8 gap-8'>
            <div className='flex flex-col items-center rounded-3xl p-14 bg-gray-300 md:p-4 border border-slate-300'>
                <img className='rounded-full p-3' src={imgOne} alt="" />
                <h3 className='font-semibold text-lg my-1'>Rohit Mehta</h3>
                <p><i class="fa-solid fa-star mr-1"></i>5.0 <span className='text-slate-700'>(2 Reviews)</span></p>
                <a className='px-5 py-2 hover:text-white rounded-full mt-2 hover:bg-green-700 duration-700' href="">View Profile</a>
            </div>
            <div className='flex flex-col items-center rounded-3xl p-14 bg-gray-300 md:p-4 border border-slate-300'>
                <img className='rounded-full p-3' src={imgTwo} alt="" />
                <h3 className='font-semibold text-lg my-1'>Akriti Choudary</h3>
                <p><i class="fa-solid fa-star mr-1"></i>4.7 <span className='text-slate-700'>(20 Reviews)</span></p>
                <a className='px-5 py-2 hover:text-white rounded-full mt-2 hover:bg-green-700 duration-700' href="">View Profile</a>
            </div>
            <div className='flex flex-col items-center rounded-3xl p-14 bg-gray-300 md:p-4 border border-slate-300'>
                <img className='rounded-full p-3' src={imgThree} alt="" />
                <h3 className='font-semibold text-lg my-1'>Ayush Sharma</h3>
                <p><i class="fa-solid fa-star mr-1"></i>5.0 <span className='text-slate-700'>(75 Reviews)</span></p>
                <a className='px-5 py-2 hover:text-white rounded-full mt-2 hover:bg-green-700 duration-700' href="">View Profile</a>
            </div>
            <div className='flex flex-col items-center rounded-3xl p-14 bg-gray-300 md:p-4 border border-slate-300'>
                <img className='rounded-full p-3' src={imgFour} alt="" />
                <h3 className='font-semibold text-lg my-1'>Aditi Roy</h3>
                <p><i class="fa-solid fa-star mr-1"></i>4.8 <span className='text-slate-700'>(47 Reviews)</span></p>
                <a className='px-5 py-2 hover:text-white rounded-full mt-2 hover:bg-green-700 duration-700' href="">View Profile</a>
            </div>
            <div className='flex flex-col items-center rounded-3xl p-14 bg-gray-300 md:p-4 border border-slate-300'>
                <img className='rounded-full p-3' src={imgFive} alt="" />
                <h3 className='font-semibold text-lg my-1'>Saurav Sahani</h3>
                <p><i class="fa-solid fa-star mr-1"></i>4.9 <span className='text-slate-700'>(23 Reviews)</span></p>
                <a className='px-5 py-2 hover:text-white rounded-full mt-2 hover:bg-green-700 duration-700' href="">View Profile</a>
            </div>
        </div>
    </main>
    </>
  )
}
