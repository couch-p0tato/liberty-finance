import React from 'react'
import { assets } from '../assets/assets'

const Choose = () => {
  return (
    <div className='flex flex-col lg:flex-row-reverse px-3.5 gap-5 my-12'>
        <div className='w-full lg:w-1/2 flex flex-col justify-center gap-3'>
            <h4 className='text-sm header-txt font-bold tracking-widest text-center lg:text-left'>WHY CHOOSE US</h4>

            <div className='flex flex-col justify-between gap-3'>
                <h3 className='txt-main text-4xl lg:text-5xl font-semibold leading-tight text-center lg:text-left'>Why choose us as your trusted financial partner?</h3>
                <p className='txt-minor text-base font-normal'>We are committed to providing reliable, personalized financial solutions that empower you to make informed decisions. With our expert guidance, transparent services, and customer-first approach, we help you achieve financial stability and success with confidence.</p>
            </div>

            <div className='flex flex-row gap-5'>
                <div>
                    <h4 className='txt-main text-3xl font-bold'>253+</h4>
                    <p>successful audits</p>
                </div>

                <div>
                    <h4 className='txt-main text-3xl font-bold'>49%</h4>
                    <p>on-time filing rate</p>
                </div>
            </div>
        </div>

        <div className='w-full lg:w-1/2'>
            <img src={assets.employee_img} alt="" />
        </div>
    </div>
  )
}

export default Choose