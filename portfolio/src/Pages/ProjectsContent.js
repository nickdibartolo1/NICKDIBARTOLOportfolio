import React from 'react';

const ProjectsContent = (props) => {
    return (
        <div className='mt-8 mb-8'>
            <img src={props.img} alt='img' className=''></img>
            <div className='flex flex-wrap justify-center text-xl'>{props.name}</div>
            <div className='flex text-center justify-center'>{props.description}</div>
            <div className='flex justify-center'>{props.link}</div>
        </div>
    )
}

export default ProjectsContent