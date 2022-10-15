import React from "react";
import MKlogo from "../images/logoMK.svg"
import { IoMdArrowDropupCircle, IoLogoGithub } from "react-icons/io";
import { SiLinkedin } from "react-icons/si"
import { MdContactPage } from "react-icons/md";
import cv from "../media/Mariano Kuran - Frontend Developer.pdf"

const Main = () => {
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
    <section className="flex flex-col items-center justify-center w-[100vw] h-[90vh] overflow-hidden">
      <img
        id="logo"
        src={MKlogo}
        alt="Mariano Kuran personal logo"
        className="h-[500px] w-[1100px] 2xl:h-[1000px] 2xl:w-[2100px] mt-[-80px] drop-shadow-xl"
      />
      <h1
        id="text-main"
        className="mt-[-40px] text-center tracking-tighter text-4xl 2xl:text-[8rem] text-[#444] font-bold drop-shadow-md "
      >
        Fullstack Developer
      </h1>
      <div className="absolute z-10 xl:bottom-[20%] 2xl:bottom-[30%] right-[50px] 2xl:right-[120px] h-[350px] 2xl:h-[650px] w-[80px]">
        <div className="relative z-10 flex flex-col h-[25%] w-full mb-2 cursor-pointer">
          <a>
            <SiLinkedin size={40} fill="#333" className="fixed ml-4 2xl:h-[90px] 2xl:w-[90px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/mariano-kuran-809642236"
            target="_blank"
            className="fixed opacity-0 w-full h-[65px] pt-11 pl-1 duration-200 hover:opacity-100"
          >
            LinkedIn
          </a>
        </div>
        <div className="relative z-10 flex flex-col h-[25%] w-full mb-2 cursor-pointer">
          <a>
            <IoLogoGithub size={48} fill="#333" className="fixed ml-3 2xl:h-[110px] 2xl:w-[110px]" />
          </a>
          <a
            href="https://github.com/MarianoKuran"
            target="_blank"
            className="fixed opacity-0 w-full h-[65px] pt-12 pl-[10px] duration-200 hover:opacity-100"
          >
            Github
          </a>
        </div>
        <div className="relative z-10 flex flex-col h-[25%] w-full mt-3 cursor-pointer">
          <a>
            <MdContactPage size={50} fill="#333" className="fixed ml-3 2xl:h-[110px] 2xl:w-[110px]" />
          </a>
          <a
            download href={cv}
            target="_blank"
            className="fixed opacity-0 w-full h-[90px] pt-12 ml-[-5px] duration-200 hover:opacity-100"
          >
            Download cv
          </a>
        </div>
        <div className="relative z-10 flex flex-col h-[25%] w-full mt-14 2xl:mt-24 cursor-pointer">
          <a>
            <IoMdArrowDropupCircle size={52} fill="#333" className="fixed ml-3 2xl:h-[110px] 2xl:w-[110px]" />
          </a>
          <a
            onClick={ e => clickHandler(e)}
            href="#top"
            className="fixed opacity-0 w-full h-[65px] pl-[15px] pt-12 duration-200 hover:opacity-100"
          >
            To top
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
