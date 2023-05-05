import React from 'react';
import Navbar from '../Components/Navbar';
import AboutMePiece from '../Components/AboutMePiece';


const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <header className='block bg-[#cfc9c9] w-full h-auto p-8'>
        <h1 className=' text-2xl'>About Me!</h1>
      </header>
      <AboutMePiece />
    </div>
  )
}

export default AboutMe