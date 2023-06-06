import React from 'react';
import PDF from "../assets/NDresume652023.pdf"

const ResumeHomePage = () => {
    return (
        <div>

            <header className='block  bg-gradient-to-r from-[#5095f0] to-[#164888] w-full h-auto p-8 pt-[100px]'>
                <h1 className='text-3xl text-center'>Resume</h1>
            </header>

            <main className='flex flex-col items-center w-full bg-gradient-to-r from-[#5095f0] to-[#164888]'>
                <a href={PDF}>
                    <button
                        className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 flex justify-center items-center p-3 rounded-full cursor-pointer outline-none mt-6 mb-16'
                    >
                        Get Resume!
                    </button>
                </a>

            </main>
        </div>
    )
}

export default ResumeHomePage