import React from 'react'
import profile from '../assets/images/profile.png'
import cart from '../assets/images/cart.png'

const Navbar = () => {
  return (
    
    <>
        <div className="navbar shadow-md flex align-middle gap-6 text-xl p-2 text-gray-800 bg-green-100 fixed top-0 left-0 w-full z-50 mb-5">
            <div className="logo">
            <img className='w-24 flex align-middle' src="https://dcassetcdn.com/design_img/1200001/475470/475470_6320527_1200001_a4311f57_image.png" alt="" />
            </div>

            <div className="nav-items flex gap-5 items-center justify-start mr-auto">
            <h3 className=' hover:text-green-500 hover:-translate-y-0.5 font-semibold cursor-pointer'>Offers</h3>
            <h3 className=' hover:text-green-500 hover:-translate-y-0.5 font-semibold cursor-pointer'>Help</h3>
            <h3 className=' hover:text-green-500 hover:-translate-y-0.5 font-semibold cursor-pointer'>Contact us</h3>
            </div>
            <div className='flex items-center   font-semibold cursor-pointer ml-auto'>
            <img src={cart} className='w-6 h-6'/>
            <h3 className=' hover:text-green-500 pr-7 pl-1'>Cart</h3>
            <img src={profile} className='w-6 h-6'/>
            <h3 className=' pr-4 pl-1  hover:text-green-500'>Sign out</h3>
           </div>
        </div>
            
           
    </>
  )
}

export default Navbar
