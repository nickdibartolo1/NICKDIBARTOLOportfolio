import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';

const App = () => {
    return (
        <div className="">
            <Routes>
                <Route path='landing' element={<Landing />} />
                <Route path='/*' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App