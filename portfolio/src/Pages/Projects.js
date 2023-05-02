import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { data } from '../assets/projectsData';
// import { links } from '../assets/projectsData';
import ProjectsContent from './ProjectsContent';

const Projects = (props) => {

  const [projects, setProjects] = useState(data)

  return (
    <div>
      <Navbar />

      <header className='block bg-[#cfc9c9] w-full h-auto p-8'>
        <h1 className=' text-2xl'>Projects</h1>
      </header>

      <div className='flex flex-col justify-center items-center'>
        {projects.map((project) => {
          return (
            <ProjectsContent
              key={project.id}
              name={project.name}
              description={project.description}
              img={project.img}
              label={project.label}
              url={project.url}
            />
          )
        })}
      </div>

    </div>
  )
}

export default Projects