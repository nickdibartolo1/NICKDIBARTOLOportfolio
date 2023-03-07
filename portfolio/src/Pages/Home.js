import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Navbar from '../Components/Navbar';
import HomeBG from '../assets/media/pexels-fauxels-3183198.jpg'
import HomeHeadshot from '../assets/media/headshot.jpg'

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
                <img
                    src={HomeHeadshot}
                    className='absolute flex flex-col justify-center items-center z-10 h-[350px] w-[325px] rounded-full object-none object-[%_-4px] top-[180px]'
                    alt="headshot"
                />
            </div>
            <div className='absolute w-full flex flex-col items-center top-[40rem] z-10'>
                    <h2 className='text-white text-3xl'>Hi! My Name is</h2>
                    <h1 className='text-white text-6xl'>Nick DiBartolo</h1>
                    <h2 className='text-white text-3xl'>Front-End Developer</h2>
                </div>
        </div>
    )
}

export default Home