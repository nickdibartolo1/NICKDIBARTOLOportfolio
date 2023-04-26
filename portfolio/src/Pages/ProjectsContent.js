import React from 'react';

const ProjectsContent = (props) => {
  return (
    <div className='mt-8 mb-8'>
        <img src={props.img} alt='img' className=''></img>
        <div>{props.name}</div>
        <div>{props.description}</div>
        <div>{props.link}</div>

    </div>
  )
}

export default ProjectsContent