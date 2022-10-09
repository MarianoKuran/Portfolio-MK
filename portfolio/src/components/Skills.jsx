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
    <section className="flex flex-col items-center w-full h-[100vh] p-5">
      <div className='flex flex-col items-center w-[70%] h-full '>
        <div className="flex items-start w-[70%] h-[100px] my-7">
          <img id="Skills" src={Skills_png} alt="Skills" className="relative z-0 h-full w-[25%] drop-shadow-xl mx-auto" />        
        </div>
        <div className='flex gap-5'>
          <div className='flex flex-wrap items-center justify-center w-[50%] h-[300px] gap-3 p-4 '>
            <p className='flex justify-center w-full py-3 text-4xl text-[#333] font-bolder rounded-md shadow-md'>TechSkills</p>
              {skillsT.map((s)=>{
                return(
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center justify-center h-[60px] w-[60px] shadow-md rounded-md bg-[#f6f6f6]'>
                      {s.icon ? s.icon : null}
                    </div>
                    <p className='text-sm'>{s.name}</p>
                  </div>
                )
              })}
          </div>
          <div className='flex flex-wrap items-center justify-center w-[50%] h-[300px] gap-3 p-4'>
            <p className='flex justify-center w-full py-3 text-4xl text-[#333] font-bolder rounded-md shadow-md'>SoftSkills</p>
            {skillsS.map((s)=>{
                return(
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center justify-center h-[60px] w-[60px] shadow-md rounded-md bg-[#f6f6f6]'>
                      {s.icon ? s.icon : null}
                    </div>
                    <p className='text-sm'>{s.name}</p>
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