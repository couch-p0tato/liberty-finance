import React from 'react'
import { assets } from '../assets/assets'

const Affairs = () => {
  return (
    <div className='flex flex-col lg:flex-row px-3.5 gap-4 my-12'>
        <div className='w-full lg:w-[60%] flex flex-col justify-center gap-5'>
            <h4 className='text-sm header-txt font-bold tracking-widest text-center lg:text-left'>STATE OF AFFAIRS</h4>

            <h3 className='txt-main text-4xl lg:text-5xl text-center lg:text-left font-semibold leading-tight'>Keeping you informed on tax laws and financial trends</h3>

            <a href="#" className='flex self-center lg:self-start'>
                <button className='flex items-center gap-3.5 cursor-pointer bg-primary px-4 py-2 rounded-lg text-white'>
                    Contact Us
                    <img src={assets.arrow_icon} alt="" />
                </button>
            </a>
        </div>

        <div className='flex flex-col gap-7'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-7 lg:gap-0'>
                <div className='py-6 lg:py-0 bg-secondary txt-main rounded-4xl h-[90%] w-full lg:w-[27%] text-center px-4 flex flex-col justify-center gap-2 items-center'>
                    <h4 className='txt-main text-3xl font-bold'>697+</h4>
                    <p className='text-sm'>Financial Audits Conducted Annually</p>
                </div>

                <img className='w-full lg:w-[40%]' src={assets.counter_img_1} alt="" />

                <div className='py-6 lg:py-0 bg-secondary txt-main rounded-4xl h-[90%] w-full lg:w-[27%] text-center px-4 flex flex-col justify-center gap-2 items-center'>
                    <h4 className='txt-main text-3xl font-bold'>1416+</h4>
                    <p className='text-sm'>Satisfied Clients and Counting</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center gap-7 lg:gap-0'>
                <img className='w-full lg:w-[27%]' src={assets.counter_img_2} alt="" />

                <div className='lg:w-[40%] bg-secondary txt-main rounded-4xl h-[90%] text-center py-6 lg:py-0 px-4 flex flex-col justify-center gap-2 items-center'>
                    <h4 className='txt-main text-3xl font-bold'>6000+</h4>
                    <p className='text-sm'>Hours Saved for Our Clients through Streamlined Processes</p>
                </div>

                <img className='w-full lg:w-[27%]' src={assets.counter_img_3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Affairs