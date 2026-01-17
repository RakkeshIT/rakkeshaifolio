import React from 'react'
import Image from 'next/image'
import Laravel1 from "../assets/Projects/Laravel1.png"
import ProjectCard from '../layouts/Card'
import { ProjectMaper } from '@/app/Data/projectData'
const Projects = () => {
  return (
 <div className="min-h-screen w-full px-4 py-10">
  {/* Card Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {
      ProjectMaper.map((items, index) => (
        <ProjectCard
      liveLink={items.liveLink}
      image={items.image}
      title={items.title}
      techStack={items.desc}
      
    />
      ))
    }
    
  </div>
</div>

  )
}

export default Projects