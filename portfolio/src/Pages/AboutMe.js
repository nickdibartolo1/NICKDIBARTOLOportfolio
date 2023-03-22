import React from 'react';
import Navbar from '../Components/Navbar';
import AboutIMG from '../assets/media/about.jpg';


const AboutMe = () => {
  return (
    <div>
      <Navbar />

      <header className='block bg-[#cfc9c9] w-full h-auto p-8'>
        <h1 className=' text-2xl'>About Me!</h1>
      </header>

      <main className='flex flex-col items-center h-screen w-full bg-gradient-to-r from-[#a6c7ee] to-[#5095f0]'>
        <div className='flex-col text-center pl-[50px] pr-[50px] w-full sm:flex sm:items-center bg-[#ffffff] sm:w-2/3 pt-12 sm:pr-8 pb-12 sm:pl-6 h-1/2 rounded-xl mt-[100px]'>
          <img className='mt-[-100px] mr-0 mb-[30px] ml-0 object-cover w-full h-[300px] shadow rounded-xl md:object-none' src={AboutIMG} alt='about me'></img>
          <section className=''>
            <p>fhfhjdfgjdfgjfjsfgjsfgj</p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default AboutMe