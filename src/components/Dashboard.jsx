import React from 'react'
import DashImage from '../assets/Dashboard.jpg'

const Dashboard = () => {
  return (
    <div className='h-[30rem] sm:[h-50rem]  w-full flex flex-col justify-center items-center px-20'>
      <img src={DashImage} alt="" className='mx-auto block' />
    </div>
  )
}

export default Dashboard