import React from 'react'
import Ellipse from '../assets/Ellipse1.png'

const Ellipses = () => {
const trans = {
  transform: 'rotate(10deg)',
}

  return (
    <div className='relative'>
        <div style={trans} className=''>
        <img src={Ellipse} alt="" className='absolute' />
    </div>
    </div>
  )
}

export default Ellipses