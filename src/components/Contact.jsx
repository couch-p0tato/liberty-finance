import React from 'react'
import { assets } from '../assets/assets'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const sendEmail = (e) => {
    emailjs.sendForm('service_u6vop2y', 'template_ycfkm2a', e.target, 'q9NJkJjyewXL7WrCq');
  }

  return (
    <div className='bg-cover bg-[url("/hero-bg.png")] rounded-4xl px-3.5 py-10 lg:py-16 flex flex-col gap-4 my-10'>
        <h4 className='text-sm header-txt font-bold tracking-widest text-center lg:text-left'>GET IN TOUCH</h4>

        <div className='flex flex-col lg:flex-row justify-between'>
            <h3 className='text-4xl lg:text-5xl text-center lg:text-left txt-main font-semibold leading-tight'>Need help? Let's get in touch</h3>
            <p className='txt-minor text-base font-normal w-full lg:w-[60%] lg:pt-3 mt-4 lg:mt-0'>Have questions about our financial services or need expert guidance? Our team is ready to assist you with tailored solutions to meet your needs. Fill out the form below, and we'll get back to you as soon as possible.</p>
        </div>

        <div className='mt-2.5 h-fit flex flex-col lg:flex-row gap-7 justify-between'>
            <form className='w-full grid grid-cols-1 md:grid-cols-2 gap-4' onSubmit={sendEmail}>
                <input type="text" name='fname' placeholder='First Name' className='bg-white w-full col-span-2 lg:col-span-1 rounded-2xl px-5 py-3.5'/>
                <input type="text" name='lname' placeholder='Last Name' className='bg-white w-full col-span-2 lg:col-span-1 rounded-2xl px-5 py-3.5'/>
                <input type="email" name='email' placeholder='Email' className='bg-white w-full col-span-2 lg:col-span-1 rounded-2xl px-5 py-3.5'/>
                <input type="text" name='phone' placeholder='Phone' className='bg-white w-full col-span-2 lg:col-span-1 rounded-2xl px-5 py-3.5'/>

                <textarea placeholder='Write a message' name='message' className='bg-white w-full col-span-2 rounded-2xl px-5 py-3.5 h-40'></textarea>

                
                <button type='submit' className='flex items-center gap-3.5 cursor-pointer bg-primary px-4 py-2 rounded-lg text-white justify-self-center mt-10 col-span-2'>
                  Submit Now
                  <img src={assets.arrow_icon} alt="" />
                </button>
            </form>
        </div>

        
    </div>
  )
}

export default Contact