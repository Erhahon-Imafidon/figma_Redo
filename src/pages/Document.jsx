import React from 'react'
const DocBg = {
  backgroundImage: 'linear-gradient(55.13deg, #05041A -14.22%, #110E2F 19.11%, #110E2F 58.19%, #03000B 110.12%)'
}

const Document = () => {
  return (
    <div className='text-white w-full min-h-screen flex justify-center items-center'style={DocBg}>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='flex flex-col justify-between'>
            <div className='w-[20.73rem] h-[18.875rem] rounded-[0.327rem] bg-[#1AA7E8] grid place-content-center'>
              <div className='bg-white'>

              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Document