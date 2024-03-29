import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import landingVideo from '../assets/media/Pexels-Videos-2278095.mp4'
import fallbackimg from '../assets/media/fallback.jpg'

const Landing = () => {

    const [isMoblie, setIsMoblie] = useState(false);

    useEffect(() => {
        const mobileCheck = () => {
            setIsMoblie(window.innerWidth <= 480);
        }

        mobileCheck();

        window.addEventListener('resize', mobileCheck);
        return () => {
            window.removeEventListener('resize', mobileCheck)
        }
    }, [])



    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            {isMoblie ? (<img className='w-full h-full object-cover' src={fallbackimg} alt='background'></img>) : (<video
                src={landingVideo}
                type="video/mp4"
                loop
                controls={false}
                muted
                autoPlay
                className='w-full h-full object-cover'
            />
            )}
            <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                <Link to="/home">
                    <button
                        className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 flex justify-center items-center p-3 rounded-full cursor-pointer outline-none'
                    >
                        Enter Portfolio!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Landing