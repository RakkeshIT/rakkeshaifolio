import React from 'react'
import Image from 'next/image'
import Laravel1 from "../assets/Projects/Laravel1.png"
import ProjectCard from '../layouts/Card'
const Projects = () => {
  return (
 <div className="h-screen w-full px-4 py-10">
  {/* Card Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <ProjectCard
      image={Laravel1}
      title='RBAC Project'
      techStack='Laravel - React js - Bootstrap - Inertia'
    />
    <ProjectCard
      image={Laravel1}
      title='RBAC Project'
      techStack='Laravel - React js - Bootstrap - Inertia'
    />
    <ProjectCard
      image={Laravel1}
      title='RBAC Project'
      techStack='Laravel - React js - Bootstrap - Inertia'
    />
    <ProjectCard
      image={Laravel1}
      title='RBAC Project'
      techStack='Laravel - React js - Bootstrap - Inertia'
    />
    <ProjectCard
      image={Laravel1}
      title='RBAC Project'
      techStack='Laravel - React js - Bootstrap - Inertia'
    />
  </div>
</div>

  )
}

export default Projects