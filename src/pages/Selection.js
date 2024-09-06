import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import { NavLink } from 'react-router-dom'

export default function Selection() {
  return (
    <>
      <Header/>
      <div className='max-w-[1220px] mx-auto'>
        <div className='flex flex-col md:mt-6 mt-16 items-center justify-center'>
            <h2 className='text-3xl font-bold px-10'>Select your field of expertise.</h2>
            <div className='grid grid-cols-2 md:grid-cols-2 gap-10 mt-12 mx-auto px-8'>
                <NavLink to="/profile-client" className='h-52 px-3 md:px-5 py-10 bg-white border rounded-3xl shadow-gray-950 shadow-lg hover:bg-green-700 duration-500 hover:text-white'>
                    <i class="fa-solid fa-user text-4xl md:text-5xl hover:text-white"></i>
                    <h4 className='mt-5 font-bold  text-sm md:text-xl lg:text-2xl hover:text-white '>I'm a Client, hiring for a Project</h4>
                </NavLink>
                <NavLink to="/profile-freelancer" className='h-52 px-3 md:px-5 py-10 bg-white border rounded-3xl shadow-gray-950 shadow-lg hover:bg-green-700 duration-500 hover:text-white'>
                    <i class="fa-solid fa-user-pen text-4xl md:text-5xl hover:text-white"></i>
                    <h4 className='mt-5 font-bold text-sm md:text-xl lg:text-2xl hover:text-white '>I'm a Freelancer, looking for work</h4>
                </NavLink>
            </div>

            <p className='my-20 txet-base md:text-lg'> Already have an account ? <NavLink to='/login' className="text-green-700 underline hover:text-green-950 duration-500"> Login</NavLink></p>

        </div>
      </div>

      <Footer/>
    </>
  )
}
