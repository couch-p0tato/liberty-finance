import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {

    const date = new Date().getFullYear();

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
                        <NavLink to="/" className="hover:text-[#a3a6aa]"><p>Home</p></NavLink>
                        <NavLink to="/about" className="hover:text-[#a3a6aa]"><p>About Us</p></NavLink>
                        <NavLink to="/services" className="hover:text-[#a3a6aa]"><p>Services</p></NavLink>
                        <NavLink to="/contact" className="hover:text-[#a3a6aa]"><p>Contact Us</p></NavLink>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-[1.3rem]'>Socials</h5>
                        <a href="#" className="hover:text-[#a3a6aa]"><p>Twitter</p></a>
                        <a href="#" className="hover:text-[#a3a6aa]"><p>Instagram</p></a>
                        <a href="#" className="hover:text-[#a3a6aa]"><p>Facebook</p></a>
                        <a href="#" className="hover:text-[#a3a6aa]"><p>LinkedIn</p></a>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-[1.3rem]'>Say Hello</h5>
                        <a href='mailto:info@libertycreditandfinancialserviceslimited.com' target='_blank' className="hover:text-[#a3a6aa]">info@libertycreditandfin...</a>
                        <a href="tel:+2347062568217" className="hover:text-[#a3a6aa]"><p>+234 706 256 8217</p></a>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-10'>
            <hr className='text-[#FFFFFF30]' />
            <p className='my-8 text-center'>Copyright © {date} Liberty. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer