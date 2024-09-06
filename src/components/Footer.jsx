import React from 'react'
import download1 from '../images/download1.svg'
import download2 from '../images/download2.svg'

export default function Footer() {
  return (
    <footer className='mt-20 bg-slate-950 pt-8'>
        <div className='max-w-[1280px] mx-auto'>
            <div className='grid md:grid-cols-2 gap-20 border-b-2 p-4'>
                <div className=''>
                    <h1 className='text-green-600 text-5xl font-bold '>SelfLancer</h1>
                    <p className='text-white mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, sunt, 
                        quisquam quae, nostrum eos officia eius enim voluptate quibusdam alias 
                        at eum maxime!?
                    </p>
                </div>
                <div className=''>
                    <h2 className='text-3xl font-bold text-white'>Subscribe to Our Newsletter</h2>
                    <p className='text-white'>Lorem ipsum, sit amet consectetur adipisicing elit. Optio atque hic unde</p>
                    <form className='flex items-center justify-between my-8 w-[100%] h-16 border border-slate-400 rounded-full' action="">
                        <input placeholder='Enter your Email...' className='bg-slate-700 text-white w-[70%] h-12 m-2 rounded-full text-xl px-5' type="search" name="" id="" />
                        <button className='px-3 py-3 lg:px-5 lg:py-3 bg-green-600 rounded-full m-2 text-sm md:text-base text-white font-bold'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-4'>
                <div className='mt-8'>
                    <h4 className='text-white font-bold text-xl md:text-2xl'>Contact Us</h4>
                    <ul className='text-white text-lg my-4 flex flex-col gap-5'>
                        <li><i class="fa-solid fa-envelope"></i> Email: example.mail@gmail.com</li>
                        <li><i class="fa-solid fa-phone"></i> Mobile: +1 1234567890</li>
                        <li><p>Address:</p></li>
                    </ul>
                    <h4 className='text-white font-bold text-xl md:text-2xl mt-6'>Download App</h4>
                    <div className='flex gap-3 mt-10'>
                        <img src={download1} alt="" />
                        <img src={download2} alt="" />
                    </div>
                </div>

                <div className='mt-8'>
                    <h4 className='text-white font-bold text-xl md:text-2xl'>Category</h4>
                    <ul className='text-white text-lg flex flex-col gap-3 my-3'>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Graphic Design</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Digital Marketing</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Writing & Translate</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Video Animation</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Music & Audio</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Developing & IT</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Programming</a></li>
                    </ul>
                </div>

                <div className='mt-8'>
                    <h4 className='text-white font-bold text-xl md:text-2xl'>About</h4>
                    <ul className='text-white text-lg flex flex-col gap-3 my-3'>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">About Us</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Press & News</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Pricing Plan</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Privacy Policy</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Terms & Services</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">FAQ's</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Blog's</a></li>
                    </ul>
                </div>

                <div className='mt-8'>
                    <h4 className='text-white font-bold text-xl md:text-2xl'>Help & Support</h4>
                    <ul className='text-white text-lg flex flex-col gap-3 my-3'>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Help & Support</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Trust & Security</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Getting of SelfLancer</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Buying on SelfLancer</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Work zones Guide</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">WorkSpace</a></li>
                        <li className='flex items-center gap-2'><i class="fa-solid fa-arrow-right"></i><a href="">Reviews</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-slate-900 h-20 flex items-center justify-between px-10 gap-3'>
            <div>
                <h5 className='text-white text-sm md:text-base font-bold'>Copyright © 2024 SelfLancer All Rights Reserved.</h5>
            </div>
            <div className='flex gap-4 '>
                <a className='text-slate-700 hover:text-white duration-500' href=""><i class="fa-brands fa-twitter"></i></a>
                <a className='text-slate-700 hover:text-white duration-500' href=""><i class="fa-brands fa-facebook"></i></a>
                <a className='text-slate-700 hover:text-white duration-500' href=""><i class="fa-brands fa-instagram"></i></a>
                <a className='text-slate-700 hover:text-white duration-500' href=""><i class="fa-brands fa-linkedin"></i></a>
                <a className='text-slate-700 hover:text-white duration-500' href=""><i class="fa-brands fa-pinterest"></i></a>
            </div>
        </div>
    </footer>
  )
}
