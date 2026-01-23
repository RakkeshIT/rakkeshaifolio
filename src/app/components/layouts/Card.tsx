'use client'
import ProjectGithunDialog from "@/components/shadcn-studio/dialog/dialog-02";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectCard = ({
  image,
  title,
  techStack,
  liveLink,
  href,
  gitHubView,
}: {
  image: any;
  title: string;
  liveLink?: string;
  techStack: string;
  href?: string;
  gitHubView?: string | {client: string, server: string};
}) => {
  const [openModel, setOpenModel] = useState(false)
  const handleViewCode = () => {
    if(typeof gitHubView == 'string'){
      window.open(gitHubView, '_blank')
    }else {
      setOpenModel(true)
    }
  }
  const handleClose = () => {
    setOpenModel(false)
  }
  
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
        <p className="mt-1 text-sm text-gray-200">{techStack}</p>

        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-2">
            <button
              onClick={handleViewCode}
              className="mt-4 w-fit rounded-lg bg-white px-4 py-1 text-sm font-medium text-black hover:bg-gray-200 cursor-pointer"
            >
              View Project
            </button>
            {href && (
              <Link
                href={href}
                className="mt-4 w-fit rounded-lg px-4 py-1 text-sm font-medium text-white border-1 border-white cursor-pointer"
              >
                More Details
              </Link>
            )}
          </div>
          {
            liveLink && (
               <Link href={liveLink} className="mt-3" target="_blank">
            <Link2 />
          </Link>
            )
          }
         
        </div>
      </div>

      {openModel && gitHubView && typeof gitHubView !== 'string' && (
        <ProjectGithunDialog showDialog={openModel} close={handleClose} title={title} server={gitHubView.server} client={gitHubView.client}/>
      )}
    </div>
  );
};

export default ProjectCard;
