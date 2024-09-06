import React from 'react'
import Header from '../components/Header'
import loginBg from '../images/login-bg.jpg'
import { NavLink } from 'react-router-dom'
import googleLogo from '../images/google.png'
import linkedinLogo from '../images/Linkedin.png'
import Footer from '../components/Footer'
 
export default function Login() {
  return (
    <>
    <Header/>
    <div>
        <div className="grid md:grid-cols-2">
            <div>
                <img src={loginBg} className='hidden md:block lg:block object-cover h-[100%] w-[100%]'/>
            </div>
            <div className='p-10'>
                <h1 className='text-4xl font-bold'>Login Yourself...</h1>
                <form className="flex flex-col mt-5" action="." method="post">
                    <label className="text-lg font-bold">Mobile or Username</label>
                    <input className='p-2 my-3 border border-stone-900 rounded-xl text-lg w-[100%]' placeholder='Enter your email' type="text" name="email" />
                    <label className="text-lg font-bold"> Password<span>*</span></label>
                    <input className='p-2 my-3 border border-stone-900 rounded-xl text-lg w-[100%]' placeholder="Enter Password" type="password" name="passsword" />
                </form>    
                    <div className='mt-6'>
                        <p className='md:text-lg text-base font-semibold'><NavLink to='/forgot-password' className="text-green-700 underline">Forgot Password ?</NavLink></p>
                        <input className='py-3 w-[100%] bg-green-700 hover:bg-green-600 duration-500 rounded-full text-white font-bold my-5' type="submit" value="Login" />
                        <p className='md:text-lg text-base font-semibold'>Don't have an account in SelfLancer, <NavLink to='/signup' className="text-green-700 underline">Click here</NavLink></p>
                    </div>
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
        </div>
    </div>
    <Footer/>
    </>
  )
}
