import React from 'react';
import Navbar from '../Components/Navbar';
import ProjectsContent from '../Components/ProjectsContent';

const Projects = (props) => {

  return (
    <div>
      <Navbar />
      <header className='block bg-[#cfc9c9] w-full h-auto p-8'>
        <h1 className=' text-2xl'>Projects</h1>
      </header>
      <ProjectsContent />
    </div>
  )
}

export default Projects