import React from 'react'

const MiniHero = (props) => {
  return (
    <div className='bg-cover bg-[url("/mini-hero-bg.png")] rounded-4xl flex flex-col items-center justify-center lg:justify-between px-3.5 py-16 lg:py-28'>
      <div className='w-[90%] lg:w-[45%] flex flex-col items-center gap-4 lg:gap-7'>
        <h3 className='txt-main text-4xl lg:text-5xl text-center lg:text-left font-semibold'>{props.name}</h3>

        <a href="#" className='flex'>
          <button className='flex items-center gap-3.5 bg-primary px-4 py-2 rounded-lg text-white'>
            Home <span>/</span> {props.name}
          </button>
        </a>
      </div>
    </div>
  )
}

export default MiniHero