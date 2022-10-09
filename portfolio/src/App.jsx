import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {IoMdArrowDropupCircle} from "react-icons/io"

const App = () => {
  window.onload = () => {
    const logo = document.querySelector("#logo");
    const textMain = document.querySelector("#text-main");
    const About_me = document.querySelector("#About_me");
    const about_text = document.querySelector("#about_text");
    const return_top = document.querySelector("#return_top");

    return_top.style.display = "none";
    logo.style.position = "relative";
    textMain.style.position = "relative";
    about_text.style.position = "relative";
    about_text.style.left = "1000px";

    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;

      /* move main elements */
      logo.style.left = `${scroll / 2}px`;
      textMain.style.right = `${scroll / 2}px`;
      /* blurred main elements */
      if( 0 <= scroll && scroll <= 125 ){
        logo.style.opacity = `${1 - scroll / 750}`;
        textMain.style.opacity = `${1 - scroll / 750}`;
        return_top.style.display = 'none'
      } else if( 126 <= scroll && scroll <= 250 ){
        logo.style.opacity = `${1 - scroll / 650}`;
        textMain.style.opacity = `${1 - scroll / 650}`;
        return_top.style.display = 'flex'
      } else if( 251 <= scroll && scroll <= 375 ){
        logo.style.opacity = `${1 - scroll / 550}`;
        textMain.style.opacity = `${1 - scroll / 550}`;
        return_top.style.display = 'flex'
      } else{
        logo.style.opacity = `${1 - scroll / 550}`;
        textMain.style.opacity = `${1 - scroll / 550}`;
        return_top.style.display = 'flex'
      }
      /* effects about me section */

      if(165 <= scroll && scroll <= 355 ){
        console.log(scroll);
        About_me.style.height = `${350 - scroll/2.7 }px`
        About_me.style.width = `${400 - scroll/3.7 }px`
      } else if(355 <= scroll && scroll <= 500){
        console.log(scroll);
        About_me.style.height = `${350 - scroll/2.7 }px`
        About_me.style.width = `${400 - scroll/3.7 }px`
        about_text.style.left = `-${scroll / 25}px`;
      }  else if(500 <= scroll && scroll <= 750){
        console.log(scroll);
        About_me.style.height = `${320 - scroll/3.5 }px`
        About_me.style.width = `${370 - scroll/4.5}px`
        about_text.style.left = `-${scroll / 25}px`;
      }
    });
  };

  return (
    <>
      <Navbar />
      <Main />
      <a id="return_top" href="#top"><IoMdArrowDropupCircle size={55} fill='#333' className="fixed top-[550px] right-[100px]"/></a> 
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
