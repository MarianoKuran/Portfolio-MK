import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Works/Projects";
import Skills from "./components/Skills";

const App = () => {
  window.onload = () => {
    const logo = document.querySelector("#logo");
    const textMain = document.querySelector("#text-main");
    const About_me = document.querySelector("#About_me_png");

    
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      logo.style.position = "relative";
      textMain.style.position = "relative";

      /* move main elements */
      logo.style.left = `${scroll }px`;
      textMain.style.right = `${scroll }px`;
      /* blurred main elements */
      if (0 <= scroll && scroll <= 125) {
        logo.style.opacity = `${1 - scroll / 850}`;
        textMain.style.opacity = `${1 - scroll / 850}`;
      } else if (126 <= scroll && scroll <= 250) {
        logo.style.opacity = `${1 - scroll / 750}`;
        textMain.style.opacity = `${1 - scroll / 750}`;
      } else if (251 <= scroll && scroll <= 375) {
        logo.style.opacity = `${1 - scroll / 650}`;
        textMain.style.opacity = `${1 - scroll / 650}`;
      } else {
        logo.style.opacity = `${1 - scroll / 650}`;
        textMain.style.opacity = `${1 - scroll / 650}`;
      }
      /* effects about me section */

      if (165 <= scroll && scroll <= 355) {
        About_me.style.height = `${350 - scroll / 2.7}px`;
        About_me.style.width = `${400 - scroll / 3.7}px`;
      } else if (355 <= scroll && scroll <= 500) {
        About_me.style.height = `${350 - scroll / 2.7}px`;
        About_me.style.width = `${400 - scroll / 3.7}px`;
      } else if (500 <= scroll && scroll <= 750) {
        About_me.style.height = `${320 - scroll / 3.5}px`;
        About_me.style.width = `${370 - scroll / 4.5}px`;
      }
    });
  };

  return (
    <>
      <Navbar />
      <Main />
      <hr className="w-[80%] h-[1px] bg-black" />
      <AboutMe />
      <hr className="w-[80%] h-[1px] bg-black" />
      <Projects />
      <hr className="w-[80%] h-[1px] bg-black" />
      <Skills />
      <hr className="w-[80%] h-[1px] bg-black" />
      <Contact />
    </>
  );
};

export default App;
