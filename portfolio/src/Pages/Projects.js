import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { data } from '../assets/projectsData';

const Projects = (props) => {

const [projects, setProjects] = useState(data)

  return (
    <div>
      <Navbar/>
     
      <div className=''>
            {projects.map((project) => {
              console.log(project);
              return (
                <div
                key={project.id}
                name={project.name}
                description={project.description}
                img={project.img}
                link={project.link}
                >
                </div>
              )
            })}
        </div>

      </div>
  )
}

export default Projects