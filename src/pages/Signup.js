import React from 'react'
import Header from '../components/Header'
import signBg from '../images/signup.jpg'
import { NavLink } from 'react-router-dom'
import googleLogo from '../images/google.png'
import linkedinLogo from '../images/Linkedin.png'
import Footer from '../components/Footer'
 
export default function Signup() {
  return (
    <>
    <Header/>
    <div>
        <div className="grid md:grid-cols-2">
            
            <div className='p-10'>
                <h1 className='text-4xl font-bold'>New Here, Register yourself first</h1>
                <form className="flex flex-col mt-5" action="." method="post">
                    <div className='flex justify-between gap-5'>
                        <div>
                            <label className="text-lg font-bold">First Name</label>
                            <input className='p-2 my-3 border border-stone-900 rounded-xl text-lg w-[100%]' placeholder='Enter first name' type="text" name="first_name" />
                        </div>
                        <div>
                            <label className="text-lg font-bold">Last Name</label>
                            <input className='p-2 my-3 border border-stone-900 rounded-xl text-lg w-[100%]' placeholder='Enter second name' type="text" name="last_name" />
                        </div>
                    </div>
                    <label className="text-lg font-bold">Mobile</label>
                    <input className='p-2 my-3 border border-stone-900 rounded-xl text-lg w-[100%]' placeholder='Enter your mobile' type="number" name="mobile" />
                    <label className="text-lg font-bold">Email</label>
                    <input className='p-2 my-3 border border-stone-900 rounded-xl text-lg w-[100%]' placeholder='Enter your email' type="email" name="email" />
                    <label className="text-lg font-bold">Enter your Password<span>*</span></label>
                    <input className='p-2 my-3 border border-stone-900 rounded-xl text-lg w-[100%]' placeholder="Enter Password" type="password" name="passsword" />
                    <label className="text-lg font-bold">Re-enter Password<span>*</span></label>
                    <input className='p-2 my-3 border border-stone-900 rounded-xl text-lg w-[100%]' placeholder="Enter Password" type="password" name="passsword" />
                    <div className='mt-6 flex flex-col gap-2'>
                        <p className='md:text-lg text-base font-semibold'>Already have an account, <NavLink to='/login' className="text-green-700 underline">Login</NavLink></p>
                        <a href='/signup-selection' className='py-3 my-10 w-[100%] text-center bg-green-700 hover:bg-green-600 duration-500 rounded-full text-white font-bold mt-5' type="submit" value="Sign Up" >Sign Up</a>
                    </div>
                </form>
                    <div className='flex lg:flex-row md:flex-col flex-col justify-around'>
                        <div className='mt-8'>
                        <NavLink className='px-8 py-3 shadow-md shadow-black md:py-3 md:px-8 rounded-xl flex items-center'>
                            <img className='h-10 w-auto' src={googleLogo} alt="Google Logo" />
                            <span className='ml-3'>Login with Google</span>
                        </NavLink>
                        </div>
                        <div className='mt-8'>
                        <NavLink className='px-8 py-3 shadow-md shadow-black md:py-3 md:px-8  rounded-xl flex items-center'>
                            <img className='h-10 w-auto' src={linkedinLogo} alt="Lindedin Logo" />
                            <span className='ml-3'>Login with Linkedin</span>
                        </NavLink>
                        </div>
                    </div>
                
            </div>
            <div>
                <img src={signBg} className='hidden md:block lg:block object-cover h-[100%] w-[100%]'/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
