import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const ProjectsContent = (props) => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
        console.log(AOS)
    }, [])


    return (
        <div className='mt-8 mb-8 w-1/2 mx-auto'>
            <img src={props.img} alt='img' className="rounded-md" data-aos="zoom-in"></img>
            <div className='flex flex-wrap justify-center text-2xl'>{props.name}</div>
            <div className='flex text-lg text-center justify-center'>{props.description}</div>
            <a className='flex justify-center hover:underline hover:text-blue-800' href={props.url} target="_blank" rel="noopener noreferrer">{props.label}</a>
        </div>
    )
}

export default ProjectsContent