"use client";
import ProjectCard from "../layouts/Card";
import { ProjectMaper } from "@/app/Data/projectData";
import { useRouter } from "next/navigation";
const Projects = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full px-4 py-10">
      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ProjectMaper.map((items, index) => (
          <ProjectCard
            key={index}
            liveLink={items.liveLink}
            image={items.image}
            title={items.title}
            techStack={items.desc}
            gitHubView={items.gitHubCode}
            href={`/project/${items.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
