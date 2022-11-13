import React from 'react'
import Arrow from '../assets/Vector.png'

const MakePay = () => {
  const bgImg = {
    backgroundImage: 'linear-gradient(90deg, #0EB3E4 2.49%, #0E9CD2 100%)',
    boxShadow: '0px 20px 40px rgba(13, 57, 120, 0.21)',
    borderRadius: '2px',
}

  return (
        <section className='flex flex-col justify-center items-center text-center text-white w-full h-screen'>
          <div className='max-w-[41.063rem] mt-20'>
            <h1 className='text-[2.5rem] px-5 md:p-0 md:text-[3.125rem] '>Make payment - Whenever, wherever, with Cyberpay</h1>
          </div>

          <div className='max-w-[28.313rem] mt-3 px-4 sm:px-0'>
            <p className='opacity-[87%] text-[1.125rem] leading-6 font-[Roboto]'>
            Don’t get stranded, Discover Various payment option on our platform.
            </p>
          </div>

          <div className='w-[11.5rem] sm:w-[22.938rem] h-[3.375rem] cursor-pointer font-[Roboto] flex justify-between items-center mt-12 pl-6 pr-4' style={bgImg}>
            <button>
              Learn More
            </button>

            <img src={Arrow} alt="" />
          </div>
        </section>
  )
}

export default MakePay