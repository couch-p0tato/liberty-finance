import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 sm:px-12 font-medium'>

        <Link to='/'>
          <img src={assets.logo} className='w-36' alt="" />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-[#DA1B1C]'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-[#DA1B1C]'>
                <p>About Us</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/services' className='flex flex-col items-center gap-1 hover:text-[#DA1B1C]'>
                <p>Services</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-[#DA1B1C]'>
                <p>Contact Us</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
          <Link to="/contact" className='hidden sm:flex'>
            <button className='flex items-center gap-3.5 cursor-pointer bg-primary px-4 py-2 rounded-lg text-white'>
              Get Started
              <img src={assets.arrow_icon} alt="" />
            </button>
          </Link>

          <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        {/* Sidebar menu for small screens */}

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>

            <NavLink to="/" onClick={() => setVisible(false)} href='#' className='py-2 pl-6 border-b-2'>Home</NavLink>
            <NavLink to="/about" onClick={() => setVisible(false)} href='#' className='py-2 pl-6 border-b-2'>About Us</NavLink>
            <NavLink to="/services" onClick={() => setVisible(false)} href='#' className='py-2 pl-6 border-b-2'>Services</NavLink>
            <NavLink to="/contact" onClick={() => setVisible(false)} href='#' className='py-2 pl-6 border-b-2'>Contact Us</NavLink>
          </div>
        </div>

    </div>
  )
}

export default Navbar;