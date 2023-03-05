import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Home from './Pages/Home';

const App = () => {
    return (
        <div className="">
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home/*' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App