import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { data } from '../assets/projectsData';
import ProjectsContent from './ProjectsContent';

const Projects = (props) => {

  const [projects, setProjects] = useState(data)

  return (
    <div>
      <Navbar />

      <div className='flex flex-col justify-center items-center'>
        {projects.map((project) => {
          return (
            <ProjectsContent
              key={project.id}
              name={project.name}
              description={project.description}
              img={project.img}
              link={project.link}
            />
          )
        })}
      </div>

    </div>
  )
}

export default Projects