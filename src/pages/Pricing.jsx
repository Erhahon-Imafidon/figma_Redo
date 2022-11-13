import React from 'react'
import Verve from '../assets/Verve.png'
import MasterCard from '../assets/mastercard.png'
import Visa from '../assets/Visa.png'

const Pricing = () => {
  const cards = [
    {
      imageName: Verve,
    },
    {
      imageName: MasterCard,
    },
    {
      imageName: Visa,
    },
  ]

 const priceBg= {
  backgroundImage: 'linear-gradient(55.13deg, #05041A -14.22%, #110E2F 19.11%, #110E2F 58.19%, #03000B 110.12%)'
 }

  return (
    <main className='text-white w-full min-h-screen flex flex-col justify-center items-center' style={priceBg}>
      <div className='flex flex-col justify-between items-center mt-10'>

          <div className='border border-[rgba(151, 151, 151, 0.3)] rounded-[0.25rem] w-[21.625rem] h-[17rem] bg-white'>
              <div className='flex items-center justify-between border-b border-[rgba(49, 65, 75, 0.821569)] p-4 text-[#979797] text-[1.125rem]'>
                  <p>Order Summary</p>
              </div>

              <div className='flex items-center justify-between border-b border-[rgba(49, 65, 75, 0.821569)] p-4 text-[#3C4257] text-[0.938rem]'>
                  <p>Subtotal</p> <p>NGN 6,200.00</p>
              </div>

              <div className='flex items-center justify-between border-b border-[rgba(49, 65, 75, 0.821569)] p-2 py-6 text-[#3C4257] text-[0.938rem]'>
                  <p>Subtotal</p> <span>Asia (Dstv Cable Subscription)</span>
              </div>

              <div className='flex items-center justify-between pt-6  p-4 text-[#3C4257] text-[1.188rem] leading-[1.563rem]'>
                  <p>Total (NGN)</p> <p>NGN 6,200.00</p>
              </div>
          </div>

          <div className='w-[15rem] sm:w-[21.625rem] h-[3.188rem] flex justify-center items-center cursor-pointer my-5 bg-[#1AA7E8]'>
              <button>Make Payment</button>
          </div>

          <div className='w-[15rem] sm:w-[21.625rem] h-[3.188rem] flex justify-center items-center cursor-pointer my-5 text-[#1AA7E8] bg-white border border-[#1AA7E8]'>
              <button>BACK</button>
          </div>

          <div className='flex justify-between items-center'>
              {
                cards.map((icon, index) => (
                  <img src={icon.imageName} alt="" key={index} className='mx-1' />
                ))
              }
          </div>
      </div>
    </main>
  )
}

export default Pricing