import React from 'react'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App = () => {
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