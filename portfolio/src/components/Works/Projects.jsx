import React from 'react'
import Works from "../../images/Works.png"
import wikidogs from "../../images/wikidogs.png";
import mundiapp from "../../images/Mundiapp-img.png";
import ProjectCard from './ProjectCard';


const Projects = () => {

  return (
    <section id="Works" className="flex flex-col items-center w-full h-fit p-5">
      
      <div className="flex flex-col items-start w-[70%] h-[220px] mt-14">
        <img src={Works} alt="Works" className="relative z-0 h-[50%] w-[25%] drop-shadow-xl mx-auto" />        
      </div>

      {/* CARD */}
      <ProjectCard 
        title="Wikidogs"
        img={wikidogs}
        description="La idea general del proyecto es crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando una API externa y a partir de ella poder, entre otras cosas, buscar razas de perros, filtrarlas, ordenarlas y agregar nuevas razas de perros y sus respectivas caracteristicas"
        tools={[ "HTML","CSS", "React", "Redux", "Nodejs", "Express", "PostgreSQL", "sequelize" ]}
        github="https://github.com/MarianoKuran/PI-Dogs-main"
        deploy="https://wikidogs-indol.vercel.app"
      />
      <ProjectCard 
        title="Mundiapp"
        img={mundiapp}
        description="El proyecto consta en una aplicación en la cual se pueda ver y comprar distintos productos del mundial de Qatar2022 junto con información relevante de las mismos y del mundial. Actualmente cuenta con ciertas funcionalidades tales como: registro e inicio de sesión de usuarios con auth0, listado. ordenamiento, búsqueda y filtrado de productos, personalización del perfil personal del usuario gracias a Cloudinary y Formik, lista de deseos/favoritos, comentarios y puntuación de productos y pasarela de pago (Mercado pago)."
        tools={[ "HTML", "React", "Redux", "Tailwind", "Nodejs", "Express", "MongoDB(atlas)", "Mongoose" ]}
        github="https://github.com/MarianoKuran/mundial-app"
        deploy="https://www.mundi-app.tk"
      />
    </section>
  )
}

export default Projects