import React from "react";
import logo from "../images/logoMK_2_Nuevo.png";

const Main = () => {

  return (
    <section className="flex flex-col justify-center items-center h-[90vh]">
      <img id="logo" src={logo} alt="Mariano Kuran logo personal" className="h-[45%] w-[55%] drop-shadow-xl" />
      <div id="text-main" className="text-center tracking-tighter text-3xl text-[#444] font-bold drop-shadow-md ">Fullstack Developer</div>
    </section>
  );
};

export default Main;
