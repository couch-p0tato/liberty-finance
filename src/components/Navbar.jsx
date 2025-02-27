import React, { useState } from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 sm:px-12 font-medium'>

        <a href='#'>
          <img src={assets.logo} className='w-36' alt="" />
        </a>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <a href='#' className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </a>

            <a href='#' className='flex flex-col items-center gap-1'>
                <p>Services</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </a>

            <a href='#' className='flex flex-col items-center gap-1'>
                <p>About Us</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </a>

            <a href='#' className='flex flex-col items-center gap-1'>
                <p>Contact Us</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </a>
        </ul>

        <div className='flex items-center gap-6'>
          <a href="#" className='hidden sm:flex'>
            <button className='flex items-center gap-3.5 cursor-pointer bg-primary px-4 py-2 rounded-lg text-white'>
              Get Started
              <img src={assets.arrow_icon} alt="" />
            </button>
          </a>

          <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        {/* Sidebar menu for small screens */}

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>

            <a onClick={() => setVisible(false)} href='#' className='py-2 pl-6 border-b-2'>Home</a>
            <a onClick={() => setVisible(false)} href='#' className='py-2 pl-6 border-b-2'>Services</a>
            <a onClick={() => setVisible(false)} href='#' className='py-2 pl-6 border-b-2'>About Us</a>
            <a onClick={() => setVisible(false)} href='#' className='py-2 pl-6 border-b-2'>Contact Us</a>
          </div>
        </div>

    </div>
  )
}

export default Navbar;