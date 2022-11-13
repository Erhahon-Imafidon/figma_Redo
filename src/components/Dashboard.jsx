import React from 'react'
import DashImage from '../assets/Dashboard.jpg'

const Dashboard = () => {
  return (
    <div className='h-screen sm:mt-6 w-full flex flex-col justify-center items-center px-20'>
      <img src={DashImage} alt="" className='mx-auto block' />
    </div>
  )
}

export default Dashboard