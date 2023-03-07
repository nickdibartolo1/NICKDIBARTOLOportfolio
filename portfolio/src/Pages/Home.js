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
                    className='absolute flex flex-col justify-center items-center h-[300px] z-10'
                    alt="headshot"
                />
                <div className='z-10'>
                    <h2>Hi! My Name is</h2>
                    <h1>Nick DiBartolo</h1>
                    <h2>Front-End Developer</h2>
                </div>
            </div>
        </div>
    )
}

export default Home