import React from 'react'
import Header from '../components/Header'
import main from '../images/main.jpeg'
import one from '../images/one free.jpg'
import { NavLink } from 'react-router-dom'
import five from '../images/five free.jpg'
import main2 from '../images/main2.jpg'

export default function Discover() {
  return (
    <>
        <Header/>
        <section className='mt-2 max-w-7xl mx-auto min-h-[100vh]'>
            <div className='grid grid-cols-1 md:grid-cols-[30%,65%] lg:grid-cols-[20%,48%,20%] gap-[2%]'>
                <div className='p-5 order-3 relative top-0 left- h-[60vh] rounded-3xl border border-gray-400'>
                    <h4 className='text-xl font-bold'>Trending topics</h4>
                    <div className='mt-4'>
                        <div className='my-2 border rounded-xl p-2'>
                            <h2 className='text-lg font-semibold'>AI & Services</h2>
                            <p className='text-sm text-gray-400'>#Ai #Artificial Intelligence</p>
                        </div>
                        <div className='my-2 border rounded-xl p-2'>
                            <h2 className='text-lg font-semibold'>Graphic Desiging</h2>
                            <p className='text-sm text-gray-400'>#Graphics #Art</p>
                        </div>
                        <div className='my-2 border rounded-xl p-2'>
                            <h2 className='text-lg font-semibold'>Finance</h2>
                            <p className='text-sm text-gray-400'>#accounts #crypto</p>
                        </div>
                        <div className='my-2 border rounded-xl p-2'>
                            <h2 className='text-lg font-semibold'>System Design</h2>
                            <p className='text-sm text-gray-400'>#models #softwaredesign</p>
                        </div>
                    </div>
                </div>
                <div className='px-5 order-2 relative top-0 left-0 h-[200vh] rounded-3xl'>
                    <div className='p-5 rounded-2xl border border-gray-400'>
                        <div className='add flex items-center gap-4'>
                            <img src={one} className='rounded-full w-[8%] '/>
                            <input type="text" placeholder='Add a post' className='w-[92%] border border-gray-400 p-2 rounded-2xl'/>
                        </div>
                        <div>
                            <div className='mt-10 flex justify-between'>
                                <button className='py-2 px-5 md:px-12 lg:px-12 rounded-xl hover:bg-blue-600 hover:text-white duration-500'>Media</button>
                                <button className='py-2 px-5 md:px-12 lg:px-12 rounded-xl hover:bg-orange-600 hover:text-white duration-500'>Event</button>
                                <button className='py-2 px-5 md:px-12 lg:px-12 rounded-xl hover:bg-green-600 hover:text-white duration-500'>Article</button>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 mt-4 rounded-2xl border border-gray-400'>
                        <div className='flex justify-between'>
                            <div className='flex items-center flex-col'>
                                <div className='flex items-center gap-3'>
                                    <img src={five} className='w-12 rounded-full'/>
                                    <h2 className='text-base font-bold'>Vivek Rana</h2>
                                    <span className='py-0.5 px-2 text-gray-700 bg-yellow-500 rounded-2xl'>321</span>
                                </div>
                                <div className='mt-[-12px] ml-2'>
                                    <p className='text-sm text-gray-400'>Software Engineer</p>
                                    <p className='text-sm text-gray-400'>17h.</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-green-600 font-bold'>+ Connnect</h2>
                            </div>        
                        </div>

                        <div className='my-3'>
                            <img src={main2} className='rounded-xl'/>
                        </div>

                        <div className='mt-10 flex justify-between'>
                                <button className='py-2 px-5 md:px-12 lg:px-12'><i class="fa-regular fa-thumbs-up"></i> Like</button>
                                <button className='py-2 px-5 md:px-12 lg:px-12'><i class="fa-regular fa-comment"></i>Comment</button>
                                <button className='py-2 px-5 md:px-12 lg:px-12'><i class="fa-solid fa-share"></i>Share</button>
                            </div>
                    </div>

                    <div className='p-5 mt-4 rounded-2xl border border-gray-400'>
                        <div className='flex justify-between'>
                            <div className='flex items-center flex-col'>
                                <div className='flex items-center gap-3'>
                                    <img src={five} className='w-12 rounded-full'/>
                                    <h2 className='text-base font-bold'>Vivek Rana</h2>
                                    <span className='py-0.5 px-2 text-gray-700 bg-yellow-500 rounded-2xl'>321</span>
                                </div>
                                <div className='mt-[-12px] ml-2'>
                                    <p className='text-sm text-gray-400'>Software Engineer</p>
                                    <p className='text-sm text-gray-400'>17h.</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-green-600 font-bold'>+ Connnect</h2>
                            </div>        
                        </div>

                        <div className='my-3'>
                            <img src={main} className='rounded-xl w-full'/>
                        </div>

                        <div className='mt-10 flex justify-between'>
                                <button className='py-2 px-5 md:px-12 lg:px-12'><i class="fa-regular fa-thumbs-up"></i> Like</button>
                                <button className='py-2 px-5 md:px-12 lg:px-12'><i class="fa-regular fa-comment"></i>Comment</button>
                                <button className='py-2 px-5 md:px-12 lg:px-12'><i class="fa-solid fa-share"></i>Share</button>
                            </div>
                    </div>

                </div>
                <div className='px-5 order-1 static top-0 left-0'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Let's Discover</h1>
                    <div className='rounded-xl mt-3 border border-gray-400'>
                        <div className='bg'>
                            <img src={main} className='rounded-t-xl object-cover h-[90px] w-full'/>
                        </div>
                        <div className='rounded-full px-4 pb-2 hover:cursor-pointer'>
                            <img src={one} className='rounded-full w-16 md:w-20 lg:w-24 mt-[-40px] border border-black'/>
                            <NavLink>
                                <h4 className='font-bold text-lg'>Rohit Patel</h4>
                                <p className='text-sm '>I am a Software Developer | HTML | CSS | JS | React JS | Tailwind CSS | Node JS | Mongo DB</p>
                                <span className='text-sm text-gray-500'>Kolkata, West Bengal</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className='rounded-xl mt-3 border p-4 py-5 md:py-2  border-gray-400'>
                        <span className='text-gray-500 text-sm'>Get Exciting Offers</span>
                        <NavLink className="flex items-center" to="/premium"><i class="fa-solid fa-crown mr-1 text-base md:text-xl text-yellow-500"></i><p>Get premium at just ₹499</p></NavLink>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}
