import React from 'react';

const ProjectsContent = (props) => {
    return (
        <div className='mt-8 mb-8 w-1/2 mx-auto'>
            <img src={props.img} alt='img' className='rounded-md'></img>
            <div className='flex flex-wrap justify-center text-2xl'>{props.name}</div>
            <div className='flex text-lg text-center justify-center'>{props.description}</div>
            <a className='flex justify-center hover:underline hover:text-blue-800' href={props.url} target="_blank" rel="noopener noreferrer">{props.label}</a>
        </div>
    )
}

export default ProjectsContent