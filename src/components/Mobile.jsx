import React from 'react'
import ArrowColor from '../assets/VectorColor.png'
import Phone from '../assets/iPhone X.png'
import Google from '../assets/Google Play Badge.png'
import Apple from '../assets/App Store Badge.png'

const Mobile = () => {
    const phoneStyle = {
        filter: 'drop-shadow(10px 15px 30px rgba(41, 41, 42, 0.5))',
    }


  return (
    <section className='w-full lg:h-screen min-h-screen flex flex-col justify-center items-center'>

                            {/* MObile TABLET VIEW */}
        <div className='max-w-[80%] px-8 h-[20rem] lg:hidden flex flex-col items-center justify-center bg-white rounded-lg'>
            <h1 className='text-center text-2xl text-[#2C84C7] font-[Manrope]'>Download Our Mobile App</h1>
            <p className='text-center mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras</p>

            <div className='font-[Red-Hat-Display] flex items-center justify-between w-[6.938rem] mt-4 cursor-pointer'>
                Get Started <img src={ArrowColor} alt="" />
            </div>

            <div className='flex justify-between cursor-pointer items-center space-x-5  mt-3'>
            <img className='w-[120px]' src={Google} alt="" />
            <img className='w-[120px]' src={Apple} alt="" />
         </div>
        </div>

        <div className='h-1/2 mt-8 lg:hidden' style={phoneStyle}>
        <img src={Phone} alt="" />
        </div>
                
                {/* Desktop  */}
        <div className='max-w-[80%] px-20 h-[20rem] hidden lg:flex items-center justify-between bg-white rounded-lg relative'>
            <div className='flex flex-col items-start w-1/2 justify-center'>
            <h1 className='text-left text-2xl text-[#2C84C7] font-[Manrope]'>Download Our Mobile App</h1>
            <p className='text-left mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras</p>

            <div className='font-[Red-Hat-Display] flex items-center justify-between w-[6.938rem] mt-4 cursor-pointer'>
                Get Started <img src={ArrowColor} alt="" />
            </div>

            <div className='flex justify-between items-center space-x-5 w-[40%] mt-3'>
            <img className='w-[120px]' src={Google} alt="" />
            <img className='w-[120px]' src={Apple} alt="" />
         </div>
            </div>

            <div className='h-1/2 mt-8 hidden lg:block absolute right-3 top-[-50%] mr-10' style={phoneStyle}>
                <img src={Phone} alt=""  className='h-[35rem]'/>
            </div>
        </div>

        
    </section>
  )
}

export default Mobile