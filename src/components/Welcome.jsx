import React from 'react'
import { assets } from '../assets/assets'

const Welcome = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center my-12 px-3.5 gap-4 lg:gap-8'>
        <div>
            <img src={assets.about_us_hero} alt="" />
        </div>

        <div className='w-full lg:w-[50%]'>
            <div className='flex flex-col justify-between'>
                <h3 className='txt-main text-4xl lg:text-5xl text-center lg:text-left font-semibold leading-tight'>Welcome to our company</h3>
                <p className='txt-minor text-base font-normal w-full lg:pt-3 mt-4 lg:mt-0'>Our mission is to empower individuals and businesses with reliable credit and financial solutions, offering expert guidance, tailored services, and innovative tools to help you achieve financial success</p>
            </div>

            <div className='flex flex-col gap-6 mt-5'>
                <div className='flex flex-row gap-4'>
                    <div className='w-[60%] lg:w-[20%]'>
                        <img src={assets.quality_icon} alt="" />
                    </div>

                    <div>
                        <h4 className='txt-main text-[1.2rem] lg:text-[1.4rem] font-semibold leading-tight'>Best Quality Services</h4>
                        <p className='txt-minor text-[0.9rem] font-normal mt-2'>Experience top-tier financial services designed for reliability, transparency, and success to help you achieve your financial goals.</p>
                    </div>
                </div>

                <hr className='text-[#DBDFEA] self-center w-[95%]' />

                <div className='flex flex-row gap-4'>
                    <div className='w-[60%] lg:w-[20%]'>
                        <img src={assets.prof_icon} alt="" />
                    </div>

                    <div>
                        <h4 className='txt-main text-[1.2rem] lg:text-[1.4rem] font-semibold leading-tight'>Professional Agents</h4>
                        <p className='txt-minor text-[0.9rem] font-normal mt-2'>Our team of experienced financial experts is committed to providing personalized solutions and expert guidance.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome