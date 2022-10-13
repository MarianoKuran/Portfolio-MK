import React from "react";
import {BiCodeAlt} from "react-icons/bi"
import {GiBoltEye} from "react-icons/gi"

const ProjectCard = ({ title, img, description, tools, github, deploy }) => {
  return (
    <div className="flex items-center  w-[70%] h-fit p-4 rounded-sm shadow-md">
      
      <div className="flex items-center h-fit w-[30%] shadow-md">
        <img src={img} alt="Work picture" />
      </div>
      
      <div className="flex flex-col items h-full w-[60%] p-4 mx-5 border-r-2 border-[#eee]">
        <h3 className="mt-2 font-semibold text-[#333] border-b-2 border-[#ddd]">
          {title}
        </h3>
        <p className="mt-2 text-[#333] italic text-justify">
          {description}
        </p>
        <div className="flex flex-col items-start h-fit mt-2">
          <div>
            <p className="w-fit mb-2 text-[#333] font-semibold italic border-b-[1px] border-[#333]">
              Tecnologias utilizadas
            </p>
          </div>
          <div>
            {tools && tools.map( (tool, i) => {
              return (
                <span key={i}>{tool}</span>
              )
            })}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-around h-full w-[5%]">
        <a href={github} target="_blank">
          <div
            id="icon-code-1"
            className="flex items-center justify-center p-1 h-[50px] w-[50px] rounded-[50%] bg-[#f6f6f6] shadow-md"
          >
            <BiCodeAlt size={35} fill={"#333"} />
          </div>
        </a>
        <a href={deploy} target="_blank">
          <div
            id="icon-code-1"
            className="flex items-center justify-center p-1 h-[50px] w-[50px] rounded-[50%] bg-[#f6f6f6] shadow-md"
          >
            <GiBoltEye size={35} fill={"#333"} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
