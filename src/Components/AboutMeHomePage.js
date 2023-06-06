import React from 'react';
import AboutIMG from '../assets/media/newAbout.png'

const AboutMeHomePage = () => {
    return (
        <div>

            <header className='block  bg-gradient-to-r from-[#5095f0] to-[#164888] w-full h-auto p-8'>
                <h1 className='text-3xl text-center pt-[80px]'>About Me!</h1>
            </header>

            <main className='flex flex-col items-center w-ful bg-gradient-to-r from-[#5095f0] to-[#164888]'>
                <div className='flex-col text-center pl-[50px] pr-[50px] w-full sm:flex sm:items-center bg-[#ffffff] sm:w-2/3 pt-12 sm:pr-8 pb-12 sm:pl-6 h-5/8 rounded-xl mt-[100px]'>
                    <img className='mt-[-100px] mr-0 mb-[30px] ml-0 object-cover w-full h-[300px] rounded-xl md:object-none' src={AboutIMG} alt='about me'></img>

                    <p className='text-sm md:text-md'>I was born and raised in Northern New Jersey and transitioned into coding,
                        web development, and the tech field later in college.
                        I was originally an Education major, but decided to switch as I craved something more challenging.
                        I enrolled in a Full-Stack Web Development Bootcamp at Rutgers University
                        where I recieved a certification in Full-Stack Web Development. I am currently working an internship as a Technician at Strategic Micro Systems,
                        an IT company in Parsippany, New Jersey.
                    </p>

                </div>
            </main>
        </div>
    )
}

export default AboutMeHomePage