import React from 'react';
import Navbar from '../Components/Navbar';
import AboutIMG from '../assets/media/about.jpg';
import GridMap from '../Components/GridMap';

const AboutMe = () => {
  return (
    <div>
      <Navbar />

      <section className='block bg-[#cfc9c9] w-full h-auto p-8'>
        <h1 className=' text-2xl'>About Me!</h1>
      </section>

      <div className='flex flex-col items-center h-screen w-full bg-gradient-to-r from-[#505a66] to-[#171b20]'>
        <div className='bg-[#d1cccc] w-2/3 h-1/2 rounded-xl mt-9'>
          <img className='h-[300px] rounded-tl-xl rounded-bl-xl ' src={AboutIMG} alt='about me'></img>

        </div>
        <GridMap />

      </div>

    </div>
  )
}

export default AboutMe