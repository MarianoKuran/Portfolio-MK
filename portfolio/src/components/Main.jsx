import React from "react";
import MKlogo from "../images/logoMK.svg"
import { IoMdArrowDropupCircle, IoLogoGithub } from "react-icons/io";
import { SiLinkedin } from "react-icons/si"
import { MdContactPage } from "react-icons/md";
import cv from "../media/Mariano Kuran - Frontend Developer.pdf"

const Main = () => {
  return (
    <section className="flex flex-col items-center w-[100vw] h-[100vh] overflow-hidden">
      <img
        id="logo"
        src={MKlogo}
        alt="Mariano Kuran personal logo"
        className="relative z-0 h-[500px] w-[1100px] drop-shadow-xl"
      />
      <h1
        id="text-main"
        className="realative z-0 mt-[-40px] text-center tracking-tighter text-4xl text-[#444] font-bold drop-shadow-md "
      >
        Fullstack Developer
      </h1>
      <div className="fixed bottom-[60px] right-[50px] h-fit w-[80px]">
        <div className="relative flex flex-col h-fit w-full bottom-[0px] left-[0px] mb-2">
          <a>
            <SiLinkedin size={40} fill="#333" className="fixed ml-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mariano-kuran-809642236"
            target="_blank"
            className="opacity-0 w-full h-[65px] pt-11 pl-1 duration-200 hover:opacity-100"
          >
            LinkedIn
          </a>
        </div>
        <div className="relative flex flex-col h-fit w-full bottom-[0px] left-[0px] mb-2">
          <a>
            <IoLogoGithub size={48} fill="#333" className="fixed ml-3" />
          </a>
          <a
            href="https://github.com/MarianoKuran"
            target="_blank"
            className="opacity-0 w-full h-[65px] pt-12 pl-[10px] duration-200 hover:opacity-100"
          >
            Github
          </a>
        </div>
        <div className="relative flex flex-col h-fit w-full bottom-[0px] left-[0px] mt-3">
          <a>
            <MdContactPage size={50} fill="#333" className="fixed ml-3" />
          </a>
          <a
            download href={cv}
            target="_blank"
            className="text-center opacity-0 w-full h-[90px] pt-12 duration-200 hover:opacity-100"
          >
            Download cv
          </a>
        </div>
        <div className="relative flex flex-col h-fit w-full bottom-[0px] left-[0px] mt-16">
          <a>
            <IoMdArrowDropupCircle size={52} fill="#333" className="fixed ml-3" />
          </a>
          <a
            href="#top"
            target="_blank"
            className="opacity-0 w-full h-[65px] pl-[15px] pt-12 duration-200 hover:opacity-100"
          >
            To top
          </a>
        </div>
        {/* <a id="return_top" href="#top">
          <IoMdArrowDropupCircle
            size={55}
            fill="#333"
            className="fixed top-[550px] right-[100px]"
          />
        </a> */}
      </div>
    </section>
  );
};

export default Main;
