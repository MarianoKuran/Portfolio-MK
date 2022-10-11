import React from "react";
import MKlogo from "../images/logoMK.svg"
import { IoMdArrowDropupCircle } from "react-icons/io";
import { MdContactPage } from "react-icons/md";

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
      <div className="fixed top-[480px] right-[105px] flex flex-col items-center justify-center h-fit w-fit">
        <a>
          <MdContactPage size={52} fill="#333" className="fixed" />
        </a>
        <a
          href="https://drive.google.com/file/d/1DmzJ9oNOj4iRMYmL7tFmav-LQzJegWI_/view?usp=sharing"
          target="_blank"
          className="relative opacity-0 top-[5px] right-[-23px] w-fit h-[65px] pt-11 duration-200 hover:opacity-100 cursor-pointer"
        >
          Download CV
        </a>
        <a id="return_top" href="#top">
          <IoMdArrowDropupCircle
            size={55}
            fill="#333"
            className="fixed top-[550px] right-[100px]"
          />
        </a>
      </div>
    </section>
  );
};

export default Main;
