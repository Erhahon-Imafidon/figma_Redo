import React from 'react'
import Dstv from '../assets/dstv.png'
import Daar from '../assets/daar.png'
import Actv from '../assets/actv.png'
import Gotv from '../assets/gotv.png'
import Iroko from '../assets/iroko.png'
import Startimes from '../assets/startimes.png'

const Cable = () => {
    const cable = [
        {
           icon: Dstv,
           name: 'Dstv',
           background: 'bg-[#FF565E]'
        },
        {
           icon: Gotv,
           name: 'Gotv',
           background: 'bg-[#FFC542]'
        },
        {
           icon: Startimes,
           background: 'bg-[#FF974A]'
        },
        {
           icon: Iroko,
           background: 'bg-[#3DD598]'
        },
        {
           icon: Daar,
           background: 'bg-[#0062FF]'
        },
        {
           icon: Actv,
           background: 'bg-[#0EA2D7]'
        },
    ]

  return (
    <section className='w-full min-h-screen mt-4 sm:h-[50rem] md:mt-[-2rem] place-content-center place-items-center grid gap-y-4 gap-x-2 xl:px-16 2xl:px-60 md:px-38 lg:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        {
            cable.map((item, index) => {
                const { icon, background, name} = item
                return(
                    <div className={`${background} w-[11.875rem] h-[10.813rem] rounded-[0.188rem] grid place-content-center`} key={index}>
                      <div className='bg-white w-24 h-24 rounded-full grid place-content-center'>
                        <img src={icon} alt="" />  
                      </div>
                      <p className='text-white text-center text-base'>{name}</p>
                    </div>
                )
            })
        }
    </section>
  )
}

export default Cable