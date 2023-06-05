import React from 'react';
import Navbar from '../Components/Navbar';
import ProjectsContent from '../Components/ProjectsContent';
import Footer from '../Components/Footer';
import SideNavBar from '../Components/SideNavBar';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <SideNavBar/>
      <header className='block bg-[#cfc9c9] w-full h-auto p-8'>
        <h1 className=' text-2xl'>Projects</h1>
      </header>
      <ProjectsContent />
      <Footer/>
    </div>
  )
}

export default Projects