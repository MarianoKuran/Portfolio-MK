import React, { useState }  from 'react'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {MdWork, MdContactMail} from 'react-icons/md'
import {GiTechnoHeart} from 'react-icons/gi'

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
  function iconScroll(e) {
    e.preventDefault();
    let href;
    e.target.id ? href =  e.target.id : "cuak"
    e.target.parentNode.id ? href = e.target.parentNode.id : "cuak"
    e.target.parentNode.parentNode.id ? href = e.target.parentNode.parentNode.id : "cuak"

    const section = document.querySelector(href)
    const offsetTop = section.offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth"
    }); 
  }
  
  return (
    <header id='top' className='fixed bottom-0 md:static w-[100vw]  bg-[#f6f6f6]'>
      <nav className='fixed  bottom-0  md:static flex items-center justify-center w-full h-[80px] md:h-[95px] 2xl:h-[150px] shadow-sm bg-[#f6f6f6]'>
        <div className='hidden md:flex md:items-center md:justify-center h-full w-full md:w-[70%] gap-6'>
          <a onClick={ e => clickHandler(e)} href="#About_me" className='header_a'>
            About me
          </a>
          <a onClick={ e => clickHandler(e)} href="#Works" className='header_a'>
            Works
          </a>

          <div className="h-full 2xl:h-[240px] w-[6rem] ml-4 header_logo"></div>

          <a onClick={ e => clickHandler(e)} href="#Skills" className='header_a'>
            Skills
          </a>
          <a onClick={ e => clickHandler(e)} href="#Contact" className='header_a'>
            Contact
          </a>
        </div>
        {/* nav Mobile */}
        <div className='absolute bottom-0 md:hidden flex items-center justify-around h-full w-full border-t-[1px] shadow-2xl'>
          <div id="#About_me"  onClick={ e => iconScroll(e)} className='relative z-50 flex items-center justify-center h-full w-[25%]'>
            <BsFillPersonLinesFill size={40} fill="#222" className="h-full" />
          </div>
          <div id="#Works" onClick={ e => iconScroll(e)} className='relative z-50 flex items-center justify-center h-full w-[25%]'>
            <MdWork size={40}  fill="#222" className="h-full" />
          </div>
          <div id="#Skills" onClick={ e => iconScroll(e)} className='relative z-50 flex items-center justify-center h-full w-[25%]'>
            <GiTechnoHeart size={40}  fill="#222" className="h-full" />
          </div>
          <div id="#Contact" onClick={ e => iconScroll(e)} className='relative z-50 flex items-center justify-center h-full w-[25%]'>
            <MdContactMail size={40} fill="#222" className="h-full" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar