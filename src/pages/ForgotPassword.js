import React from 'react'
import Header from '../components/Header'
import loginBg from '../images/login-bg.jpg'
import { NavLink } from 'react-router-dom'
import googleLogo from '../images/google.png'
import linkedinLogo from '../images/Linkedin.png'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';

 
export default function ForgotPassword() {
    const [timeLeft, setTimeLeft] = useState(null);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
        let timer = null;
        if (timerActive && timeLeft > 0) {
        timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (timeLeft === 0) {
        setTimerActive(false);
        }
        return () => clearTimeout(timer);
    }, [timeLeft, timerActive]);

    const startTimer = () => {
        setTimeLeft(60);
        setTimerActive(true);
    };
  return (
    <>
    <Header/>
    <div>
        <div className="max-w-[1220px] mx-auto">
            <div className='md:px-32 px-5 py-10 max-w-[840px] mx-auto'>
                <h1 className='text-4xl font-bold'>Forgotton your password...</h1>
                <div className="flex flex-col mt-5">
                    <label className="text-lg font-bold">Enter your email</label>
                    <input className='p-2 my-3 border border-stone-900 rounded-xl text-lg w-[100%]' placeholder='Enter your email' type="text" name="email" />
                    <div className='mt-6'>
                        <p className='md:text-lg text-base font-semibold'>Try aonther way <NavLink to='/signup' className="text-green-700 underline">Click here</NavLink></p>
                        <button onClick={startTimer} className='py-3 w-[100%] bg-green-700 hover:bg-green-600 duration-500 rounded-full text-white font-bold my-5' type="submit" >Send OPT</button>
                    </div>
                </div>   
                <form className="flex flex-col mt-5" action="." method="post">
                    <input className='p-2 my-3 border border-stone-900 rounded-xl text-lg w-[100%]' placeholder='Enter your OTP' type="text" name="email" />
                    <p className='md:text-lg text-base font-semibold'>{timeLeft !== null ? `Time Left: ${timeLeft}s` : ''}</p>
                    <div className='mt-6'>
                        <button  className='py-3 w-[100%] bg-green-700 hover:bg-green-600 duration-500 rounded-full text-white font-bold my-5' type="submit" >Verfy your emaii</button>
                    </div>
                </form>  
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
