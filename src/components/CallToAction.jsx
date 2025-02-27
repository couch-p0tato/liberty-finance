import React from 'react'
import { assets } from '../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between bg-primary mx-[-4] sm:mx-[-1.5vw] lg:mx-[-2vw] my-5 px-4.5 py-2.5'>
        <div className='w-[60%]'>
            <h3 className='text-white text-5xl font-semibold leading-tight'>Take the First Step Toward Financial Freedom!</h3>
        </div>

        <div>
            <a href="#" className='flex'>
                <button className='flex items-center gap-3.5 cursor-pointer bg-white px-4 py-2 rounded-lg header-txt'>
                    Get Started
                    <img src={assets.arrow_icon_2} alt="" />
                </button>
            </a>
        </div>
    </div>
  )
}

export default CallToAction