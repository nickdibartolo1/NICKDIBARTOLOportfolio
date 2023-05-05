import React from 'react';
import Navbar from '../Components/Navbar';
import ResumePiece from '../Components/ResumePiece';

const Resume = () => {
  return (
    <div>
      <Navbar />

      <header className='block bg-[#cfc9c9] w-full h-auto p-8'>
        <h1 className=' text-2xl'>Resume</h1>
      </header>

      <ResumePiece/>

    </div>
  )
}

export default Resume