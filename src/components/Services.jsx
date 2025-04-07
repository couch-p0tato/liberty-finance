import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='bg-cover bg-[url("/hero-bg.png")] rounded-4xl px-3.5 py-10 lg:py-16 flex flex-col gap-4'>
        <h4 className='text-sm header-txt font-bold tracking-widest text-center lg:text-left'>OUR SERVICES</h4>

        <div className='flex flex-col lg:flex-row justify-between'>
          <h3 className='txt-main text-4xl lg:text-5xl text-center lg:text-left font-semibold leading-tight'>Your business goals are our priority</h3>
          <p className='txt-minor text-base font-normal w-full lg:w-[70%] lg:pt-3 mt-4 lg:mt-0'>We provide tailored financial services to help you achieve your goals. Need a quick cash boost? Get fast, low-interest personal loans with flexible repayment options, or fuel your business growth with customized loan solutions designed for entrepreneurs.</p>
        </div>

        <div className='mt-2.5 h-fit flex flex-col lg:flex-row gap-7 justify-between'>
            <div className='bg-cover bg-[url("/service-img-1.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex justify-center items-end pb-7'>
              <p className='text-xl font-semibold text-white z-10'>Debt Consolidation</p>
            </div>

            <div className='bg-cover bg-[url("/service-img-2.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex justify-center items-end pb-7'>
              <p className='text-xl font-semibold text-white z-10'>Personal Loans</p>
            </div>

            <div className='bg-cover bg-[url("/service-img-3.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex justify-center items-end pb-7'>
              <p className='text-xl font-semibold text-white z-10'>Business Loans</p>
            </div>
        </div>

        <Link to="/services" className='flex self-center mt-10'>
          <button className='flex items-center gap-3.5 cursor-pointer bg-primary px-4 py-2 rounded-lg text-white'>
            View All Services
            <img src={assets.arrow_icon} alt="" />
          </button>
        </Link>
    </div>
  )
}

export default Services