import React from 'react'
import Works from "../images/Works.png";
import wikidogs from "../images/wikidogs.png";
import {BiCodeAlt} from "react-icons/bi"
import {GiBoltEye} from "react-icons/gi"

const Projects = () => {


  return (
    <section id="Works" className="flex flex-col items-center w-full h-[100vh] p-5">
      
      <div className="flex flex-col items-start w-[70%] h-[220px] mt-14">
        <img src={Works} alt="Works" className="relative z-0 h-[50%] w-[25%] drop-shadow-xl mx-auto" />        
      </div>

      {/* CARD */}
      <div className='flex items-center  w-[70%] h-fit p-4 rounded-sm shadow-md'>
        {/* IMAGE */}
        <div className='flex items-center h-fit w-[30%] shadow-md'>
          <img src={wikidogs} alt="Work picture" />
        </div>
        {/* INFO  */}
        <div className='flex flex-col items h-full w-[60%] p-4 mx-5 border-r-2 border-[#eee]'>
          <h3 className='mt-2 font-semibold text-[#333] border-b-2 border-[#ddd]'>WIKIDOGS</h3>
          <p className='mt-2 text-[#333] italic text-justify'>Es una aplicación en la cual se pueden ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa the dog api y a partir de ella poder, entre otras cosas: Buscar perros / Filtrarlos / Ordenarlos / Agregar nuevos perros</p>
          <div className='flex flex-col items-start h-fit mt-2'>
            <div><p className='w-fit mb-2 text-[#333] font-semibold italic border-b-[1px] border-[#333]'>Tecnologias utilizadas</p></div>
            <div>
              <span className='h-fit mx-1 pr-2 border-r-[1px] border-[#ddd] font-bold text-[#444]'>React</span> 
              <span className='h-fit mx-1 pr-2 border-r-[1px] border-[#ddd] font-bold text-[#444]'>CSS</span> 
              <span className='h-fit mx-1 pr-2 border-r-[1px] border-[#ddd] font-bold text-[#444]'>Express</span> 
              <span className='h-fit mx-1 pr-2 border-r-[1px] border-[#ddd] font-bold text-[#444]'>PostgreSQL</span> 
              <span className='h-fit mx-1 pr-2 border-r-[1px] border-[#ddd] font-bold text-[#444]'>Sequelize</span>
            </div>
          </div>
        </div>
        {/* BUTTONS */}
        <div className='flex flex-col items-center justify-around h-full w-[5%]'>
          <a href="https://github.com/MarianoKuran/PI-Dogs-main" target="_blank">
            <div id='icon-code-1' className='flex items-center justify-center p-1 h-[50px] w-[50px] rounded-[50%] bg-[#f6f6f6] shadow-md'>
                <BiCodeAlt size={35} fill={"#333"}/> 
            </div>
          </a>
          <a href="https://wikidogs-indol.vercel.app/" target="_blank">
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