import React from 'react'
import { assets } from '../assets/assets'

const ContactInfo = () => {
  return (
    <div className='my-8 w-full'>
        <div className='mt-2.5 h-fit flex flex-col lg:flex-row gap-7 justify-between'>
            <div className='bg-cover bg-[url("/location-img.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex items-end pb-9 pl-6'>
                <div className='z-10 w-[95%]'>
                    <img src={assets.location_icon} className='mb-4' alt="" />
                    <p className='text-xl font-semibold text-white'>1st Wing, 3rd floor, Ojimadu Nwaeze House Utako, FCT, Abuja</p>
                </div>
            </div>

            <div className='bg-cover bg-[url("/message-img.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex items-end pb-9 pl-6'>
                <div className='z-10 w-[95%]'>
                    <img src={assets.message_icon} className='mb-4' alt="" />
                    <a href='mailto:info@libertycreditandfinancialserviceslimited.com' target='_blank' className='text-xl font-semibold text-white block'>info@libertycreditandfin...</a>
                    <a href='mailto:info@libertycreditandfinancialserviceslimited.com' target='_blank' className='text-xl font-semibold text-white'>info@libertycreditandfin...</a>
                </div>
            </div>

            <div className='bg-cover bg-[url("/operator-img.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex items-end pb-9 pl-6'>
                <div className='z-10 w-[95%]'>
                    <img src={assets.operator_icon} className='mb-4' alt="" />
                    <p className='text-xl font-semibold text-white'>Debt Consolidation</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo