import React from 'react'
import Skills_png from "../images/Skills.png"
import {DiGit} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {FiFigma} from 'react-icons/fi'
import {SiTailwindcss, SiRedux, SiExpress, SiPostman, SiPostgresql, SiSequelize, SiReact} from 'react-icons/si'
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'

const Skills = () => {

  const skillsT = [
    {name:"Git", icon:<DiGit size={40}/>}, 
    {name:"HTML", icon:<AiFillHtml5  size={40}/>}, 
    {name:"CSS", icon:<FaCss3Alt size={40}/>}, 
    {name:"Javascript", icon:<IoLogoJavascript size={40}/>}, 
    {name:"Figma", icon:<FiFigma size={40}/>}, 
    {name:"Tailwind", icon:<SiTailwindcss size={40}/>}, 
    {name:"React", icon:<SiReact size={40}/>}, 
    {name:"Redux", icon:<SiRedux size={40}/>}, 
    {name:"Express", icon:<SiExpress size={40}/>}, 
    {name:"Postman", icon:<SiPostman size={40}/>}, 
    {name:"Nodejs", icon:<IoLogoNodejs size={40}/>}, 
    {name:"PostgreSQL", icon:<SiPostgresql size={40}/>}, 
    {name:"Sequelize", icon:<SiSequelize size={40}/>},
  ]
  const skillsS = [
    {name:"Git", icon:<DiGit size={40}/>}, 
    {name:"HTML", icon:<AiFillHtml5  size={40}/>}, 
    {name:"CSS", icon:<FaCss3Alt size={40}/>}, 
    {name:"Javascript", icon:<IoLogoJavascript size={40}/>}, 
    {name:"Figma", icon:<FiFigma size={40}/>}, 
    {name:"Tailwind", icon:<SiTailwindcss size={40}/>}, 
    {name:"React", icon:<SiReact size={40}/>}, 
    {name:"Redux", icon:<SiRedux size={40}/>}, 
    {name:"Express", icon:<SiExpress size={40}/>}, 
    {name:"Postman", icon:<SiPostman size={40}/>}, 
    {name:"Nodejs", icon:<IoLogoNodejs size={40}/>}, 
    {name:"PostgreSQL", icon:<SiPostgresql size={40}/>}, 
    {name:"Sequelize", icon:<SiSequelize size={40}/>},
  ]

  return (
    <section id="Skills" className="flex flex-col items-center w-full h-fit p-5">
      <div className='flex flex-col items-center w-full h-fit '>
        <div className="flex items-start w-full md:w-[70%] md:h-[100px] md:my-7">
          <p className="md:hidden pl-6 pr-3 text-2xl font-bolder border-r-[1px] border-[#333]">SKILLS</p>
          <img  src={Skills_png} alt="Skills" className="hidden md:block relative z-0 h-full w-[25%] drop-shadow-xl mx-auto" />        
        </div>
        <div className='flex items-center justify-center h-fit'>
          <div className='flex flex-wrap items-center justify-center md:w-[60%] h-fit gap-3 py-6 md:p-4'>
            <p className='hidden md:flex justify-center w-full py-3 text-4xl text-[#333] font-bolder rounded-md shadow-md'>HardSkills</p>
              {skillsT.map((s)=>{
                return(
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center justify-center h-[80px] w-[80px] shadow-md rounded-md bg-[#f6f6f6] cursor-pointer'>
                      {s.icon ? s.icon : null}
                    </div>
                    <p className='text-sm mt-2'>{s.name}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills