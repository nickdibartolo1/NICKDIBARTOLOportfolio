import React from 'react';

const ProjectsContent = (props) => {
    return (
        <div className='mt-8 mb-8'>
            <img src={props.img} alt='img' className=''></img>
            <div className='flex flex-wrap justify-center text-xl'>{props.name}</div>
            <div className='flex text-center justify-center'>{props.description}</div>
            <a className='flex justify-center text-blue-500 hover:underline hover:text-blue-700' href={props.url} target="_blank" rel="noopener noreferrer">{props.label}</a>
        </div>
    )
}

export default ProjectsContent