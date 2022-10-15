import React from 'react'
import MKlogo from "../images/logoMK.svg"

const Navbar = () => {

  function clickHandler(e) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const section = document.querySelector(href)
    const offsetTop = section.offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth"
    }); 
  }

  return (
    <header id='top' className='w-[100vw]'>
      <nav className='flex items-center justify-center w-full h-[95px] 2xl:h-[150px] shadow-sm'>
        <div className='sticky top-0 flex items-center justify-center h-full w-[70%] gap-6'>
          <a onClick={ e => clickHandler(e)} href="#About_me" className='flex items-center justify-center w-[20%] h-full text-lg 2xl:text-4xl text-[#555] tracking-wider duration-200 hover:border-b-2 hover:border-[#666] hover:font-semibold hover:drop-shadow-sm'>
             About me
          </a>
          <a onClick={ e => clickHandler(e)} href="#Works" className='flex items-center justify-center w-[20%] h-full text-lg 2xl:text-4xl text-[#555] tracking-wider duration-200 hover:border-b-2 hover:border-[#666] hover:font-semibold hover:drop-shadow-sm'>
             Works
          </a>

          <img src={MKlogo} alt="Mariano Kuran logo personal" className='h-[140px] 2xl:h-[240px] w-[20%] ml-2' />

          <a onClick={ e => clickHandler(e)} href="#Skills" className='flex items-center justify-center w-[20%] h-full text-lg 2xl:text-4xl text-[#555] tracking-wider duration-200 hover:border-b-2 hover:border-[#666] hover:font-semibold hover:drop-shadow-sm'>
             Skills
          </a>
          <a onClick={ e => clickHandler(e)} href="#Contact" className='flex items-center justify-center w-[20%] h-full text-lg 2xl:text-4xl text-[#555] tracking-wider duration-200 hover:border-b-2 hover:border-[#666] hover:font-semibold hover:drop-shadow-sm'>
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar