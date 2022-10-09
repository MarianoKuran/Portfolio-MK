import React from 'react'
import Works from "../images/Works.png";
import {BiCodeAlt} from "react-icons/bi"
import {GiBoltEye} from "react-icons/gi"

const Projects = () => {


  return (
    <section className="flex flex-col items-center w-full h-[100vh] p-5">
      
      <div className="flex flex-col items-start w-[70%] h-[220px] mt-14">
        <img id="Works" src={Works} alt="Works" className="relative z-0 h-[50%] w-[25%] drop-shadow-xl mx-auto" />        
      </div>

      {/* CARD */}
      <div className='flex items-center  w-[70%] h-[250px] p-4 rounded-sm shadow-md'>
        {/* IMAGE */}
        <div className='flex items-center h-full w-[30%] shadow-md'>
          <img src="" alt="Work picture" />
        </div>
        {/* INFO  */}
        <div className='flex flex-col items-center h-full w-[50%] mx-14 border-r-2 border-[#eee]'>
          <h3 className='mt-2 font-semibold border-b-2 border-[#ddd]'>PORYECTO 1</h3>
          <p className='mt-5 text-[#222] italic'>descripcion del proyecto</p>
        </div>
        {/* BUTTONS */}
        <div className='flex flex-col justify-around h-full w-[10%]'>
          <a href="https://github.com/MarianoKuran" target="_blank">
            <div id='icon-code-1' className='flex items-center justify-center p-1 h-[50px] w-[50px] rounded-[50%] bg-[#f6f6f6] shadow-md'>
                <BiCodeAlt size={35} fill={"#333"}/> 
            </div>
          </a>
          <a href="https://github.com/MarianoKuran" target="_blank">
            <div id='icon-code-1' className='flex items-center justify-center p-1 h-[50px] w-[50px] rounded-[50%] bg-[#f6f6f6] shadow-md'>
                <GiBoltEye size={35} fill={"#333"}/> 
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects