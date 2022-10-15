import React from "react";
import About_Me from "../images/AboutMe.png"

const AboutMe = () => {
  return (
    <section id="About_me" className="flex flex-col items-center w-full h-[100vh] p-5">
      
      <div className="flex flex-col items-start w-[70%] h-[220px] mt-14 pb-4">
        <img id="About_me_png" src={About_Me} alt="About me" className="relative z-0 h-[50%] w-[25%] drop-shadow-xl mx-auto" />        
        <p id="citado" className="my-4 text-[#888] italic">"Uno no puede elegir sabiamente en la vida a menos que se atreva a escucharse a si mismo, a su propio yo, en cada momento de su vida."</p>
        <p id="author" className="ml-[6em] text-[#888] italic">- A. Maslow</p>
      </div>
      <div className="flex flex-col items-start w-[70%] mt-6 p-4 text-justify text-[#444] text-lg ">
        <div className="flex">
          <p className='text-md'>Soy 
          <a href="#cv" target='_blank' className="mx-1 font-semibold italic"> Desarrollador Web Fullstack </a>  
          con afinidad por el frontend...</p>
        </div>
        <p>Pero aparte de programar, me gusta mucho leer e investigar de diferentes temas, relacionados a la musica, la psicologia, la economia y la politica.</p>
        <p>Me considero y me consideran una persona organizada, que resuelve problemas eficazmente, independiente, con un muy buen sentido del humor y detallista. Me gusta realizar actividades al aire libre con amigos o familia, tocar la guitarra, cantar y amo los perros y los gatos.</p>
        <p>Me gusta participar en proyectos grupales con gente positiva y que aporte valor y experiencias agradables. </p>
        <a href="#Contact" className="font-semibold italic duration-200 hover:text-xl"> ¡Trabajemos juntos! </a>
      </div>
    </section>
  );
};

export default AboutMe;
