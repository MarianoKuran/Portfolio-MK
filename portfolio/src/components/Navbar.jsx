import React from 'react'
import logo from "../images/logoMK_2_Nuevo.png";

const Navbar = () => {
  return (
    <header>
      <nav className='flex items-center justify-center w-full h-[70px]'>
        <div className='flex items-center justify-center h-full w-[50%] gap-6'>
          <a href="#" className='flex items-center justify-center w-[50%] h-full text-lg duration-200 hover:border-b-2 hover:border-[#222] hover:font-semibold'><div> About me</div></a>
          <a href="#" className='flex items-center justify-center w-[50%] h-full text-lg duration-200 hover:border-b-2 hover:border-[#222] hover:font-semibold'><div> Projects</div></a>

          <img src={logo} alt="Mariano Kuran logo personal" className='h-full w-[130px] ml-2' />

          <a href="#" className='flex items-center justify-center w-[50%] h-full text-lg duration-200 hover:border-b-2 hover:border-[#222] hover:font-semibold'><div> Skills</div></a>
          <a href="#" className='flex items-center justify-center w-[50%] h-full text-lg duration-200 hover:border-b-2 hover:border-[#222] hover:font-semibold'><div>Contact</div></a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar