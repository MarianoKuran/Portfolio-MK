import React from 'react'
import Contact_png from "../images/Contact.png"
import { SiGmail, SiWhatsapp, SiInstagram, SiLinkedin } from "react-icons/si"

const Contact = () => {
  return (
    <section id="Contact" className="flex flex-col items-center w-full h-fit">
      <div className='flex flex-col items-center w-[70%] h-full '>
        <div className="flex items-start w-[70%] h-[100px] my-7">
          <img src={Contact_png} alt="Skills" className="relative z-0 h-full w-[25%] drop-shadow-xl mx-auto" />        
        </div>
        <div className='flex flex-col items-center h-full w-full'>
          <h4>¡Contactame y hagamos algo grande!</h4>

          <form action="https://formsubmit.co/e848edbccb8aa7e9c2efdc3160874b26" method="POST" className='flex flex-col w-[50%] h-[280px] mt-4'>
            <div className='relative h-[60px] p-2 mb-4'>
              <input type="email" name='email_transmitter' placeholder='Email' className='peer h-full w-full py-1 px-2 border-b-[1px] border-[#ddd] bg-transparent focus:outline-none focus:border-[#333] transition-colors '/>
              <label for="email_transmitter" className='absolute opacity-0 left-3 top-1 cursor-text transition-all peer-focus:text-xs peer-focus:-top-[4px] peer-focus:opacity-100'>Email</label>
            </div>
            <div className='relative py-4 px-2 mb-4'>
              <textarea type="email" name='Subject' placeholder='Hola Mariano. Me interesa trabajar con vos...' className='peer h-full w-full py-1 px-2 border-b-[1px] border-[#ddd] bg-transparent focus:outline-none focus:border-[#333] transition-colors '/>
              <label for="Subject" className='absolute left-3 top-1 opacity-0 cursor-text transition-all peer-focus:text-xs peer-focus:-top-[4px] peer-focus:opacity-100'>Subject</label>
            </div>
            <button type="submit" className='w-[100px] h-[40px] rounded-sm ml-2 border-[1px] border-[#333] hover:bg-[#333] hover:text-[#f6f6f6] duration-200'>Enviar</button>
          </form>
          <hr className="w-[30%] h-[2px] mb-5 bg-[#333]" />
          <p className='mb-3'>Tambien puedes contactarme por alguna de mis redes</p>
          <div className='flex items-center justify-center w-fit h-[80px] gap-10'>
            {/* REDES */}

            {/* SiGmail */}
            <div className='flex flex-col items-center w-[50px]'>
              <SiGmail size={35} fill="#333" className='absolute' />
              <a
                href="mailto:marianokuran6@gmail.com?Subject=Quiero%20contactarte%20para..."
                target="_blank"
                className="relative opacity-0 flex items-end top-0 h-[65px] duration-100 hover:opacity-100"
                >
                Gmail
              </a>
            </div>
            {/* lINKEDIN */}
            <div className='flex flex-col items-center w-[50px]'>
              <SiLinkedin size={35} fill="#333" className='absolute' />
              <a
                href="https://www.linkedin.com/in/mariano-kuran-809642236/"
                target="_blank"
                className="relative opacity-0 flex items-end top-0 h-[65px] duration-100 hover:opacity-100"
                >
                LinkedIn
              </a>
            </div>
            {/* SiInstagram */}
            <div className='flex flex-col items-center w-[50px]'>
              <SiInstagram size={35} fill="#333" className='absolute' />
              <a
                href="https://www.instagram.com/_kvrxn___/"
                target="_blank"
                className="relative opacity-0 flex items-end top-0 h-[65px] duration-100 hover:opacity-100"
                >
                Instagram
              </a>
            </div>
            {/* SiWhatsapp */}
            <div className='flex flex-col w-[50px] items-center '>
              <SiWhatsapp size={35} fill="#333" className='absolute' />
              <a
                href="https://bit.ly/3TpnpKp"
                target="_blank"
                className="relative opacity-0 flex items-end top-0 h-[65px] duration-100 hover:opacity-100"
                >
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact