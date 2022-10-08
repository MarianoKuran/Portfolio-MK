import React from "react";
import logo from "../images/logoMK_2_Nuevo.png";

const Main = () => {

  return (
    <section className="flex flex-col justify-center items-center w-[100vw] h-[100vh] overflow-hidden">
      <img id="logo" src={logo} alt="Mariano Kuran logo personal" className="relative z-0 h-[45%] w-[55%] drop-shadow-xl" />
      <h1 id="text-main" className="realative z-0 text-center tracking-tighter text-3xl text-[#444] font-bold drop-shadow-md ">Fullstack Developer</h1>
    </section>
  );
};

export default Main;
