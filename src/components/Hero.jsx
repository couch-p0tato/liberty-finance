import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='bg-cover bg-[url("/hero-bg.png")] rounded-4xl flex flex-col lg:flex-row items-center justify-center lg:justify-between px-3.5 py-10 lg:py-16'>
      <div className='w-[90%] lg:w-[45%] flex flex-col items-center lg:items-start gap-7'>
        <h3 className='txt-main text-4xl lg:text-5xl text-center lg:text-left font-semibold'>Fast & Reliable Credit Solutions for Your Financial Growth</h3>
        <p className='txt-minor text-base font-normal'>Unlock financial freedom with our flexible loan options, expert financial advice, and seamless approval process</p>

        <a href="#" className='flex'>
          <button className='flex items-center gap-3.5 cursor-pointer bg-primary px-4 py-2 rounded-lg text-white'>
            Get Started
            <img src={assets.arrow_icon} alt="" />
          </button>
        </a>
      </div>

      <div className='mt-6 lg:mt-0'>
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero