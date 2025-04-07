import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Planning = () => {
  return (
    <div className='bg-cover bg-[url("/hero-bg.png")] rounded-4xl py-10 lg:py-16 flex flex-col lg:flex-row px-3.5 gap-5 my-12'>
        <div className='w-full lg:w-1/2'>
            <img src={assets.company_planning_img} alt="" />
        </div>

        <div className='w-full lg:w-1/2 flex flex-col justify-center gap-3'>
            <h4 className='text-sm header-txt font-bold tracking-widest text-center lg:text-left'>FINANCIAL PLANNING</h4>

            <div className='flex flex-col justify-between gap-3'>
                <h3 className='txt-main text-4xl lg:text-5xl font-semibold leading-tight text-center lg:text-left'>Thorough planning services ensuring compliance and financial security</h3>
                <p className='txt-minor text-base font-normal mt-4'>Plan your financial future with confidence. Our expert strategies and personalized solutions help you achieve stability and long-term success.</p>
            </div>

            <div className='flex flex-col gap-5 mt-4'>
                <div className='flex flex-row gap-4 items-center'>
                    <img src={assets.tick_icon} className='w-5' alt="" />
                    <p className='txt-minor text-base font-normal'>Goal-Oriented Startegies</p>
                </div>

                <div className='flex flex-row gap-4 items-center'>
                    <img src={assets.tick_icon} className='w-5' alt="" />
                    <p className='txt-minor text-base font-normal'>Optimized Investments</p>
                </div>

                <div className='flex flex-row gap-4 items-center'>
                    <img src={assets.tick_icon} className='w-5' alt="" />
                    <p className='txt-minor text-base font-normal'>Financial Security</p>
                </div>
            </div>

            <Link to="/contact" className='flex mt-5'>
                <button className='flex items-center gap-3.5 cursor-pointer bg-primary px-4 py-2 rounded-lg text-white'>
                    Get Started
                    <img src={assets.arrow_icon} alt="" />
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Planning