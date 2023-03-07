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
            <div className='flex justify-start items-center flex-col h-screen z-10'>
                <img className="w-full h-full object-cover" src={HomeBG} alt="background"></img>
            </div>
            <div>
                <img src={HomeHeadshot}
                    alt="headshot"
                    className='h-[300px]'
                ></img>
                <h2>Hi! My Name is</h2>
                <h1>Nick DiBartolo</h1>
                <h2>Front-End Developer</h2>
            </div>

        </div>
    )
}

export default Home