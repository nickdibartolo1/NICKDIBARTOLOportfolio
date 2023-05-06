import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Navbar from '../Components/Navbar';
import HomeBG from '../assets/media/pexels-fauxels-3183198.jpg'
import HomeHeadshot from '../assets/media/headshot.jpg'
import Footer from '../Components/Footer';
import { SocialMedia } from '../assets/constants';
import AboutMeHomePage from '../Components/AboutMeHomePage';
import ProjectsHomePage from '../Components/ProjectsHomePage';
import ResumeHomePage from '../Components/ResumeHomePage';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
            <div className='relative flex justify-start items-center flex-col h-screen'>
                <img
                    src={HomeBG}
                    className="absolute w-full h-full object-cover z-0"
                    alt="background"
                />
                <div className='bg-blackOverlay absolute w-full h-full object-cover z-0' />
                <img
                    src={HomeHeadshot}
                    className='absolute flex flex-col justify-center items-center z-1 h-[225px] w-[225px] object-cover rounded-full top-[180px] lg:w-[350px] lg:h-[350px] lg:top-[50px]'
                    alt="headshot"
                />
            </div>

            <div className='absolute w-full flex flex-col items-center top-[420px] z-1 sm:top-[520px]'>
                <h2 className='text-[#141516] xl:text-3xl text-2xl'>Hi! My name is</h2>
                <h1 className='xl:text-6xl text-4xl '>Nick DiBartolo</h1>
                <h2 className='xl:text-3xl text-2xl'>Front-End Developer</h2>
                <SocialMedia />
            </div>
            <div>
             <AboutMeHomePage/>
             <ProjectsHomePage/>
             <ResumeHomePage/>

            </div>
            <Footer />
        </div>

    )
}

export default Home