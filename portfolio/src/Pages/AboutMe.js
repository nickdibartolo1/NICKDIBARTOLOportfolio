import { React } from 'react';
import Navbar from '../Components/Navbar';
import AboutMeContent from '../Components/AboutMeContent';
import Footer from '../Components/Footer';
import SideNavBar from '../Components/SideNavBar';


const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <SideNavBar/>
      <header className='block bg-[#cfc9c9] w-full h-auto p-8'>
        <h1 className=' text-2xl'>About Me!</h1>
      </header>
      <AboutMeContent />
      <Footer/>
    </div>
  )
}

export default AboutMe