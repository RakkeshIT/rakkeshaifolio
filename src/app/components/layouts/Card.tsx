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
 <div className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl">

  {/* Image Section */}
  <div className="relative h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] w-full overflow-hidden">
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">

    <h3 className="text-base sm:text-lg md:text-xl font-bold line-clamp-1">
      {title}
    </h3>

    <p className="mt-1 text-xs sm:text-sm text-gray-200 line-clamp-2">
      {techStack}
    </p>

    <div className="mt-3 flex flex-wrap gap-2">
      <button
        onClick={handleViewCode}
        className="rounded-lg bg-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-black hover:bg-gray-200"
      >
        View Project
      </button>

      {href && (
        <Link
          href={href}
          className="rounded-lg border border-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-white"
        >
          More Details
        </Link>
      )}
    </div>
  </div>

</div>
  );
};

export default ProjectCard;
