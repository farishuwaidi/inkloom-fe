import React from 'react'
import logo from '../assets/Sample Logo.png'

const navbar = () => {
  return (
    <div className='flex justify-between items-center text-lightblue shadow-lg font-normal px-6 py-4 sticky top-0 bg-white z-50'>
      <div className='text-lg'>
        <a href="/">
            <img src={logo} alt="logo" className='h-6'/>
        </a>
      </div>
      <div className='w-auto'>
        <ul className='flex gap-3 text-base'>
            <li><a href="http://">Feature</a></li>
            <li><a href="http://">Pricing</a></li>
            <li><a href="http://">Community</a></li>
            <li><a href="http://">Support</a></li>
        </ul>
      </div>
      <div className='flex gap-3'>
        <button className='border-2 border-lightblue px-6 py-2 rounded-lg'>Login</button>
        <button className='bg-lightblue text-white px-6 py-2 rounded-lg'>Register</button>
      </div>
    </div>
  )
}

export default navbar
