import React from 'react';
import Navbar from '../Components/Navbar';
import ResumePiece from '../Components/ResumeContent';
import Footer from '../Components/Footer';
import SideNavBar from '../Components/SideNavBar';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <SideNavBar />
      <header className='block bg-[#cfc9c9] w-full h-auto p-8'>
        <h1 className=' text-2xl'>Resume</h1>
      </header>
      <ResumePiece />
      <Footer />
    </div>
  )
}

export default Resume