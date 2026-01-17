import { Link2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({image, title, techStack, liveLink, onView }: {image: any, title: string, liveLink:string, techStack: string, onView?: () => void}) => {
  return (
     <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
          
          {/* Image Section */}
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={image}
              alt={image}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
    
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-gray-200">
              {techStack}
            </p>
    
            <div className='flex justify-between items-center'>
            <button onClick={onView} className="mt-4 w-fit rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200">
              View Project
            </button>
            <Link href={liveLink} className='mt-3' target='_blank'>
              <Link2/>
            </Link>
            </div>
          </div>
        </div>
  )
}

export default ProjectCard