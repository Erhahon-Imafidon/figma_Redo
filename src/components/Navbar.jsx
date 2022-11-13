import React, { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const Links = [
    {name: 'Integration', link: '/'},
    {name: 'Documentation', link: '/document'},
    {name: 'Pricing', link: '/pricing'},
    {name: 'Login', link: '/', font: 'font-[Manrope]'},
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)

      const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else{
          setNavbar(false)
        }
      }

      window.addEventListener('scroll', changeBackground)

    

    const normalStyle = 'w-full fixed top-0 left-0'

    const bckStyle = 'w-full fixed top-0 left-0 transition-all duration-500 ease-in bg-[#110e2f] '

  return (
    <div className='w-full fixed top-0 left-0'>
      <div className='md:flex md:mx-auto md:justify-around justify-between text-white item-center py-4 md:pt-10 px-7 md:px-8'>
        <div className='flex font-[Roboto-Slab] items-center font-bold text-2xl cursor-pointer' onClick={()=> setOpen(!open)}>
            <Link to='/' className='text-[2.151rem]'>Cyberpay</Link>
        </div>
        <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' onClick={()=> setOpen(!open)}>
          {open ? <IoIosCloseCircleOutline /> : <FiMenu />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto
         md:pl-0 pl-9 transition-all duration-500 ease-in justify-center ${open ? 'top-[60px]' : 'top-[-400px]'}`}
        >
            {Links.map((link, index) => (
                <li key={index} className='md:py-2 md:ml-8 md:my-0 my-7' onClick={()=> setOpen(!open)}>
                    <Link to={link.link} className={`hover:opacity-[50%] duration-500 text-base ${link.font}`}>{link.name}</Link>
                </li>
            )  
            )}

        <button className='text-white text-base py-2 px-6 md:ml-8 border border-[#FFFFFF] font-[Manrope] rounded'>
            Sign Up
        </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar