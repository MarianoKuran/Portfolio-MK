import React from 'react'
import logo from "../images/logoMK_2_Nuevo.png";

const Navbar = () => {
  return (
    <header className='w-[100vw]'>
      <nav className='flex items-center justify-center w-full h-[70px] shadow-sm'>
        <div className='sticky top-0  flex items-center justify-center h-full w-[50%] gap-6'>
          <a href="#" className='flex items-center justify-center w-[50%] h-full text-lg text-[#555] tracking-wider duration-200 hover:border-b-2 hover:border-[#666] hover:font-semibold hover:drop-shadow-sm'>
            <div> About me</div>
          </a>
          <a href="#" className='flex items-center justify-center w-[50%] h-full text-lg text-[#555] tracking-wider duration-200 hover:border-b-2 hover:border-[#666] hover:font-semibold hover:drop-shadow-sm'>
            <div> Projects</div>
          </a>

          <img src={logo} alt="Mariano Kuran logo personal" className='h-full w-[130px] ml-2' />

          <a href="#" className='flex items-center justify-center w-[50%] h-full text-lg text-[#555] tracking-wider duration-200 hover:border-b-2 hover:border-[#666] hover:font-semibold hover:drop-shadow-sm'>
            <div> Skills</div>
          </a>
          <a href="#" className='flex items-center justify-center w-[50%] h-full text-lg text-[#555] tracking-wider duration-200 hover:border-b-2 hover:border-[#666] hover:font-semibold hover:drop-shadow-sm'>
            <div>Contact</div>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar