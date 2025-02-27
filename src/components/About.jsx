import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col px-3.5 gap-4 my-12'>
        <h4 className='text-sm header-txt font-bold tracking-widest text-center lg:text-left'>ABOUT US</h4>

        <div className='flex flex-col lg:flex-row justify-between'>
            <h3 className='txt-main text-4xl lg:text-5xl text-center lg:text-left font-semibold leading-tight'>Your trusted partner for financial solutions</h3>
            <p className='txt-minor text-base font-normal w-full lg:w-[70%] lg:pt-3 mt-4 lg:mt-0'>Our mission is to empower individuals and businesses with reliable credit and financial solutions, offering expert guidance, tailored services, and innovative tools to help you achieve financial success</p>
        </div>

        <div className='mt-2.5'>
            <img src={assets.about_us_img} alt="" />
        </div>

        <div className='flex flex-col lg:flex-row mt-4 gap-6'>
            <div>
                <img src={assets.hand_icon} alt="" />
                <p className='text-xl font-semibold mt-3'>We prioritize building long-term relationships with our clients and always put their needs first</p>
            </div>

            <div>
                <img src={assets.customer_icon} alt="" />
                <p className='text-xl font-semibold mt-3'>Every client is unique, and we tailor our services to fit your individual circumstances and goals</p>
            </div>

            <div>
                <img src={assets.pc_icon} alt="" />
                <p className='text-xl font-semibold mt-3'>We leverage cutting-edge technology and software to streamline processes</p>
            </div>
        </div>
    </div>
  )
}

export default About