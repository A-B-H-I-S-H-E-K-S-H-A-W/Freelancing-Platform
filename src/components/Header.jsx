import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Toggle function
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
        setIsVisible(prevState => !prevState);
    };
  return (
    <div className='max-w-[100vw]'>
      <header className='md:h-32'>
        <nav className='flex shadow-lg bg-green-600 text-white justify-around items-center'>
            
            <div className="logo flex items-center gap-3 py-3">
            <button onClick={toggleMenu} className='menu-toggle'><i className={`fa ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} fa-solid fa-bars text-2xl toggleIcon cursor-pointer md:block lg:hidden`} id='toggleIcon'></i></button>
                <NavLink to="/" className='text-white text-2xl font-bold '>SelfLancer</NavLink>
            </div>

            <div className={`${isVisible ? 'top-[8%]' : 'top-[-100%]'} flex-col justify-center z-20 nav-links lg:h-16 md:block h-[40%] bg-green-600 w-full lg:w-auto lg:min-h-fit absolute lg:static duration-500 top-[-100%]`}>
                <ul className='flex lg:flex-row flex-col h-16 text-sm md:text-base items-center md:gap-5 gap-8 py-5 lg:p-0' >
                    <li><NavLink to='/freelancer-page' className='hover:text-green-200 text-white duration-500' href="">Find-Freelancer</NavLink> </li>
                    <li><NavLink className='hover:text-green-200 text-white duration-500' href="">Find-Work</NavLink> </li>
                    <li><NavLink className='hover:text-green-200 text-white duration-500' href="">Why-Selflancer</NavLink></li>
                    <li><NavLink className='hover:text-green-200 text-white duration-500' to="/jobs">Find Job</NavLink></li>
                    <li><NavLink className='hover:text-green-200 text-white duration-500' href="">Start-ups Plan</NavLink></li>
                </ul>
            </div>

            <div className="nav-elements flex items-center gap-5 -auto">
                
                <form action="">
                    <input type="search" className='border border-black p-1 px-2 md:p-1.5 md:px-4 w-[160px] rounded-full' placeholder="Search" />
                    <button className='button pl-2 hover:text-green-700 duration-300'><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <NavLink to="/premium"><i class="fa-solid fa-crown mr-1 text-base md:text-xl text-yellow-500 hover:text-black p-1 md:p-1.5  bg-black hover:bg-yellow-500 duration-500 rounded-full"></i></NavLink>
                <NavLink to="/login" className='hover:text-green-200 duration-500 hidden md:block font-semibold hover:border-black '>Login</NavLink>
                <NavLink to='/signup' className='px-5 py-2 bg-black rounded-2xl text-white hidden md:block hover:bg-white hover:text-green-700 font-semibold duration-500'>Sign-Up</NavLink>
                
            </div>
        </nav>

        <div className='mx-auto hidden md:block px-2 '>
            <div className='md:py-4 text-sm lg:text-base'>
                <ul className='flex items-center sm: md:ml-20 gap-1 py-1'>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-base font-semibold text-gray-900 ring-0 ring-inset hover:text-green-500">
                        Services
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute left-0 z-20 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="py-1">
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            IT & Development
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            AI Services
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Design & Creative
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Sales & Marketing
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Programming
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Video Animation
                            </a>
                        </MenuItem>
                        
                        </div>
                    </MenuItems>
                </Menu>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-base font-semibold text-gray-900 ring-0 ring-inset hover:text-green-500">
                        Explore
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute left-0 z-20 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="py-1">
                        <MenuItem>
                            <NavLink
                            to="/discover"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Discover
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Community
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Workshops
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Learn
                            </a>
                        </MenuItem>        
                        </div>
                    </MenuItems>
                </Menu>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-base font-semibold text-gray-900 ring-0 ring-inset hover:text-green-500">
                        Languages
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute left-0 z-20 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="py-1">
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            English
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Hindi
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Italiano
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            French
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            Netherlands
                            </a>
                        </MenuItem>       
                        </div>
                    </MenuItems>
                </Menu>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-base font-semibold text-gray-900 ring-0 ring-inset hover:text-green-500">
                        Currency
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute left-0 z-20 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="py-1">
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            ₹ INR
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                            $ USD
                            </a>
                        </MenuItem>      
                        </div>
                    </MenuItems>
                </Menu>
                </ul>
            </div>
        </div>
      </header>
    </div>
  )
}
