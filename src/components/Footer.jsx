import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer-bg rounded-4xl px-3.5 pt-8 lg:pt-16 flex flex-col gap-4 text-white mb-8'>
        <div className='flex flex-col lg:flex-row justify-between gap-7 lg:gap-0 lg:mx-4'>
            <div className='flex items-center justify-center'>
                <img src={assets.logo_2} alt="" /> 
            </div>

            <div className='w-full lg:w-[60%] flex flex-col gap-6'>
                <h3 className='text-4xl lg:text-5xl font-semibold leading-tight text-center lg:text-left'>Trusted by businesses and individuals across the country</h3>

                <div className='flex flex-col lg:flex-row justify-between gap-7 lg:gap-0 text-center lg:text-left'>
                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-[1.3rem]'>Quick Links</h5>
                        <a href="#"><p>Home</p></a>
                        <a href="#"><p>About Us</p></a>
                        <a href="#"><p>Services</p></a>
                        <a href="#"><p>Contact Us</p></a>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-[1.3rem]'>Socials</h5>
                        <a href="#"><p>Twitter</p></a>
                        <a href="#"><p>Instagram</p></a>
                        <a href="#"><p>Facebook</p></a>
                        <a href="#"><p>LinkedIn</p></a>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-[1.3rem]'>Say Hello</h5>
                        <a href="#"><p>info@libertyfinance.com</p></a>
                        <a href="#"><p>+234 1234 5678 129</p></a>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-10'>
            <hr className='text-[#FFFFFF30]' />
            <p className='my-8 text-center'>Copyright © 2025 wexico. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer