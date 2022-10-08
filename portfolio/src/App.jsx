import React from 'react'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App = () => {

  window.onload = () =>{
      const logo = document.querySelector('#logo')
      const textMain = document.querySelector('#text-main')

      logo.style.position = "relative"
      textMain.style.position = "relative"

      window.addEventListener('scroll', ()=>{
        console.log(window.scrollY)
        let scroll = window.scrollY

        logo.style.left = `${scroll}px`;
        textMain.style.right = `${scroll}px`;
      })
  }

  return (
    <>
      <Navbar/>
      <Main />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App