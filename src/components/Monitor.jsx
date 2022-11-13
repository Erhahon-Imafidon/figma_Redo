import React from 'react'
import Arrow from '../assets/Vector.png'

const Monitor = () => {
    const bgImg = {
        backgroundImage: 'linear-gradient(90deg, #0EB3E4 2.49%, #0E9CD2 100%)',
        boxShadow: '0px 20px 40px rgba(13, 57, 120, 0.21)',
        borderRadius: '2px',
    }

  return (
    <div className='w-full h-screen md:h-1/2  flex flex-col justify-center items-center text-white'>
        <div className='max-w-[44.25rem] px-4 sm:px-10'>
            <h1 className='font-medium text-center md:text-left font-[Manrope] text-[2.813rem] tracking-[-0.01em] leading-[3.688rem]'>
             Monitor your activity as a Merchant & Make decision 
            </h1>
            <p className='font-[Roboto] text-center md:text-left text-xl'>Know how your busines is faring and set thing back to order</p>
        </div>

        <div className='w-[18.125rem] h-[4.563rem] cursor-pointer font-[Roboto] flex justify-around items-center mt-12 pl-6 pr-4 text-[1.125rem] sm:translate-x-[-10.5rem]' style={bgImg}>
            <button>
            Merchant Dashboard
            </button>
            <img src={Arrow} alt="" />
          </div>
    </div>
  )
}

export default Monitor