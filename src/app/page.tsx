

import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Posts from './components/Post';
import './globals.css';


export default function Page() {
  return (
    <>
      <div className="flex flex-col  md:items-start items-center">

        <div>
          <h1 className='text-4xl mb-2'>Psicóloga Infantil</h1>
        </div>
        <div className='flex flex-row '>
          <h5 className='md:basis-10/12 md:text-lg text-sm font-thin'>Especializada em crianças e adolescentes, com formação em Análise do Comportamento aplicada ao Transtorno do Espectro Autista e Deficiência pela CBI of Miami. Atendo em Jundiaí e região, oferecendo acompanhamento psicológico para crianças, adolescentes e orientação de pais.</h5>
        </div>
        <div className='flex flex-row mt-2'>
          <a className='mr-2' href="https://api.whatsapp.com/send?phone=5511914175676"
            title="Whatsapp">
            <FaWhatsapp className='text-3xl text-pink-500' />
          </a>
          <a className='mr-2' href="https://www.instagram.com/psicamilasamogim/"
            title="Instagram">
            <FaInstagram className='text-3xl text-pink-500' />
          </a>
          <a className='mr-2' href="https://www.linkedin.com/in/camila-samogim-740928163/"
            title="Linkedin">
            <FaLinkedin className='text-3xl text-pink-500' />
          </a>
        </div>
      </div>
      <Posts />

    </>
  )
}

