import React, { useState } from 'react';
import { data } from '../assets/projectsData';
import ProjectMatter from '../Pages/ProjectMatter';

const ProjectsContent = (props) => {

  const [projects, setProjects] = useState(data)

  return (
    <div>

      {/* <header className='block  bg-gradient-to-r from-[#5095f0] to-[#164888] w-full h-auto p-8'>
        <h1 className=' text-3xl text-center pt-[80px]'>Projects</h1>
      </header> */}

      <main className='flex flex-col items-center w-full bg-gradient-to-r from-[#5095f0] to-[#164888]'>
      <div className='flex flex-col justify-center items-center text-center'>
        {projects.map((project) => {
          return (
            <ProjectMatter
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
    </main>


    </div >
  )
}

export default ProjectsContent