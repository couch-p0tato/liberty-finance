import React from 'react'

const MoreServices = () => {
  return (
    <div className='flex flex-col px-3.5 gap-4 my-12'>
        <div className='mt-2.5 h-fit flex flex-col flex-wrap lg:flex-row gap-7 justify-between'>
            <div className='bg-cover bg-[url("/service-img-1.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex justify-center items-end pb-7'>
              <p className='text-xl font-semibold text-white z-10'>Debt Consolidation</p>
            </div>

            <div className='bg-cover bg-[url("/service-img-2.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex justify-center items-end pb-7'>
              <p className='text-xl font-semibold text-white z-10'>Personal Loans</p>
            </div>

            <div className='bg-cover bg-[url("/service-img-3.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex justify-center items-end pb-7'>
              <p className='text-xl font-semibold text-white z-10'>Business Loans</p>
            </div>

            <div className='bg-cover bg-[url("/service-img-4.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex justify-center items-end pb-7'>
              <p className='text-xl font-semibold text-white z-10'>Business Loans</p>
            </div>

            <div className='bg-cover bg-[url("/service-img-5.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex justify-center items-end pb-7'>
              <p className='text-xl font-semibold text-white z-10'>Business Loans</p>
            </div>

            <div className='bg-cover bg-[url("/service-img-6.png")] gradient-bg h-96 w-full lg:w-[30%] rounded-4xl flex justify-center items-end pb-7'>
              <p className='text-xl font-semibold text-white z-10'>Business Loans</p>
            </div>
        </div>
    </div>
  )
}

export default MoreServices