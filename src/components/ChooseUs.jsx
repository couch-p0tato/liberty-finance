import React from 'react'
import { assets } from '../assets/assets'

const ChooseUs = () => {
  return (
    <div className='bg-cover bg-[url("/hero-bg.png")] rounded-4xl px-3.5 py-10 lg:py-16 mb-3.5 flex flex-col gap-4'>
        <h4 className='text-sm header-txt font-bold tracking-widest text-center lg:text-left'>WHY CHOOSE US</h4>

        <div className='flex flex-col lg:flex-row justify-between'>
          <h3 className='txt-main text-4xl lg:text-5xl text-center lg:text-left font-semibold leading-tight'>The work process of financial solutions</h3>
          <p className='txt-minor text-base font-normal w-full lg:w-[70%] lg:pt-3 mt-4 lg:mt-0'>We provide tailored financial services to help you achieve your goals. Need a quick cash boost? Get fast, low-interest personal loans with flexible repayment options, or fuel your business growth with customized loan solutions designed for entrepreneurs.</p>
        </div>

        <div className='mt-2.5 flex flex-col lg:flex-row justify-between gap-8'>
            <div className='bg-white rounded-4xl px-6 py-10 flex flex-col gap-3'>
                <img src={assets.insight_icon} className='w-15' alt="" />

                <h4 className='txt-main text-[1.2rem] lg:text-[1.4rem] font-semibold leading-tight'>Better Financial Insights</h4>

                <p className='txt-minor text-[0.9rem] font-normal mt-2'>Gain deeper financial understanding with expert insights, real-time data, and smart tools to help you make informed decisions.</p>
            </div>

            <div className='bg-white rounded-4xl px-6 py-10 flex flex-col gap-3'>
                <img src={assets.ops_icon} className='w-15' alt="" />

                <h4 className='txt-main text-[1.2rem] lg:text-[1.4rem] font-semibold leading-tight'>Streamlined Operations</h4>

                <p className='txt-minor text-[0.9rem] font-normal mt-2'>Effortlessly manage your finances with our seamless, efficient, and hassle-free solutions designed for your convenience.</p>
            </div>

            <div className='bg-white rounded-4xl px-6 py-10 flex flex-col gap-3'>
                <img src={assets.confirm_icon} className='w-15' alt="" />

                <h4 className='txt-main text-[1.2rem] lg:text-[1.4rem] font-semibold leading-tight'>Secure Approvals</h4>

                <p className='txt-minor text-[0.9rem] font-normal mt-2'>Get quick and secure approvals with our transparent and efficient verification process, ensuring a smooth financial experience.</p>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs