import React from 'react'
import DstvLarge from '../assets/dstv-large.png'
import Angle from '../assets/angle-down.png'



const DocBg = {
  backgroundImage: 'linear-gradient(55.13deg, #05041A -14.22%, #110E2F 19.11%, #110E2F 58.19%, #03000B 110.12%)'
}

const Document = () => {
  const subscription = [
    {
        label: 'Packages',
        icon: Angle,
        content: 'ASIA',
    },
    {
        label: 'Dstv Smart Card Number',
        content: '3838 3883 8838 8862',
    },
    {
        label: 'Amount ',
        content: '6,200',
    },
 ]


  return (
    <section className=' w-full min-h-[90rem] md:min-h-[60rem] md:my-auto px-6 md:px-0 flex justify-center items-center text-white'style={DocBg}>
      <div className='grid grid-cols-1 gap-10  md:grid-cols-2'>
          <div className='flex flex-col justify-between'>
            <div className='max-w-[20.73rem] h-[18.875rem] rounded-[0.327rem] bg-[#1AA7E8] grid place-content-center'>
              <div className='bg-white w-[16.224rem] h-[16.224rem] rounded-full grid place-content-center'>
                  <img src={DstvLarge} alt="" />
              </div>
            </div>

              <div className='w-[9.5rem] py-2 border-b-[0.313rem] mt-4 border-[#0C76B2] '>
                  <p>Product Description</p>
              </div>

              <div className='max-w-[20rem] md:max-w-[24.938rem] mt-5 font-[Roboto] text-base leading-[1.438rem]'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lacus sagittis velit erat odio habitasse. At euismod ac sit augue quis posuere elit. Enim rutrum tristique nunc gravida at. In turpis enim eu nunc quis. Dictumst lorem sollicitudin volutpat neque. </p>
              </div>
          </div>

                            {/* Subscription Section */}
          <div className='flex flex-col justify-around items-start'>
              <div>
                <p className='text-[0.875rem]'>CABLE SUBSCRITPION</p>
                <h1 className='text-[1.75rem]'>Dstv Cable Subscription</h1>
              </div>

              <div className='flex flex-col justify-center'>
                {
                  subscription.map((item, index) => (
                    <div key={index} className='my-4'>
                        <p>{item.label}</p>
                        <div className='w-[15rem] sm:w-[22.813rem] h-[3.188rem] border border-[#CDCDCD] rounded-[0.25rem] flex justify-between items-center bg-white text-[#252B33] px-3'>
                            {item.content}
                            <img src={item.icon} alt="" /> 
                        </div>
                    </div>
                  ))
                }
                <div className='w-[15rem] sm:w-[22.813rem] h-[3.188rem] flex justify-center items-center cursor-pointer my-5 bg-[#1AA7E8]'>
                        <button>PROCEED</button>
                    </div>

                    <div className='w-[15rem] sm:w-[22.813rem] h-[3.188rem] flex justify-center items-center cursor-pointer my-5 text-[#1AA7E8] bg-white border border-[#1AA7E8]'>
                        <button>BACK TO PACKAGES</button>
                    </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Document