import React from 'react';
import PDF from "../assets/NDRes.pdf"

const ResumeContent = () => {
    return (
        <div>
            <main className='flex flex-col items-center w-full h-screen bg-gradient-to-r from-[#5095f0] to-[#164888]'>
                <a href={PDF}>
                    <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 flex justify-center items-center p-3 rounded-full cursor-pointer outline-none mt-14'>
                        Get Resume!
                    </button>
                </a>
            </main>
        </div>
    )
}

export default ResumeContent
