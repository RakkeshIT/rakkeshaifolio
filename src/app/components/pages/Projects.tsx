"use client";
import ProjectCard from "../layouts/Card";
import { ProjectMaper } from "@/app/Data/projectData";
import { useRouter } from "next/navigation";
import ProjectTabs from "../layouts/ProjectTabs";
import { useState } from "react";
const Projects = () => {
  const router = useRouter();
  const [active, setActive] = useState("All");
  const filterProjectCard =
    active == "All"
      ? ProjectMaper
      : ProjectMaper.filter((p) => p.category === active);
  return (
    <div className="min-h-screen w-full px-12 py-10">
      {/* Card Container */}
      <ProjectTabs active={active} setActive={setActive} />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterProjectCard.map((items, index) => (
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

        {filterProjectCard?.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-gray-400">
            <p className="text-lg font-medium">No Projects Found</p>
            <p className="text-sm mt-2">Try selecting another category</p>
          </div>
        )}
        {filterProjectCard?.length !== 0 && (
        <div
          className="relative w-full max-w-sm p-6 rounded-2xl
                bg-gradient-to-br from-orange-500 to-orange-700
                text-white shadow-xl
                animate-pulse"
        >
          <span
            className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold 
                   bg-black/40 rounded-full"
          >
            🚧 Under Development
          </span>

          <h2 className="text-2xl font-bold mb-3">Future Project</h2>

          <p className="text-sm text-orange-100">
            This project is currently in progress. Stay tuned!
          </p>

          <button
            className="mt-4 px-4 py-2 bg-white text-orange-600 
                     rounded-lg font-semibold"
          >
            Coming Soon
          </button>
        </div> )}
      </div>
    </div>
  );
};

export default Projects;
