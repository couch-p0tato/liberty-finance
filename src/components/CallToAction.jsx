import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between bg-primary my-20 mx-[-5vw] sm:mx-[-1.5vw] lg:mx-[-2vw] px-4.5 py-10 gap-8 lg:gap-0'>
        <div className='lg:w-[60%]'>
            <h3 className='text-white text-[2rem] lg:text-[2.6rem] font-semibold leading-tight'>Take the First Step Toward Financial Freedom!</h3>
        </div>

        <div>
            <Link to="/contact" className='flex'>
                <button className='flex items-center gap-3.5 cursor-pointer font-bold bg-white px-4 py-2 rounded-lg header-txt'>
                    Get Started
                    <img src={assets.arrow_icon_2} alt="" />
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CallToAction