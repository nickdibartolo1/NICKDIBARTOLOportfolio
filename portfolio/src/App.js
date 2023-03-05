import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
// import Navbar from './Components/Navbar';
import AboutMe from './Pages/AboutMe';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';


const App = () => {
    return (
        <div className="">
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path="/home//*" element={<Home />}></Route>
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </div>
    )
}

export default App