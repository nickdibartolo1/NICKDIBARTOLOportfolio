import React from 'react';
import Navbar from '../Components/Navbar';
import AboutIMG from '../assets/media/about.jpg';
import GridMap from '../Components/GridMap';

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center h-screen w-full bg-gradient-to-r from-[#505a66] to-[#171b20]'>
        <h1 className='mb-3 text-2xl text-white'>About Me!</h1>
        <div className='bg-white w-2/3 h-1/2 rounded-xl'>
          <img className='h-[300px] mt-1 ml-1 rounded-tl-xl' src={AboutIMG} alt='about me'></img>

        </div>
        <GridMap />

      </div>

    </div>
  )
}

export default AboutMe