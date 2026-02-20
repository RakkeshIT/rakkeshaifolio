"use client";
import React, { use, useState } from "react";
import ProjectsData from "../../Data/ProjectDetails/Projects.json";
import { ProjectProps } from "@/app/Data/ProjectTypes";
import ProjectCarousel from "@/app/components/layouts/ProjectCarousel";
import ProjectGithunDialog from "@/components/shadcn-studio/dialog/dialog-02";
type Props = {
  params: Promise<{ id: string }>;
};
const Project = ({
  params,
}: {
  params: Props;
}) => {
  const { id } = use(params);
  const [openModel, setOpenModel] = useState(false);

  const handleClose = () => setOpenModel(false);

  // Find project by id
  const project: ProjectProps | undefined = (
    ProjectsData as ProjectProps[]
  ).find((p) => p.id === Number(id));

  console.log("Projects: ", project);
 const handleOpen = () => {
  if (!project) return;

  const gitHubCode = project.links.gitHubCode;

  if (typeof gitHubCode === "string") {
    window.open(gitHubCode, "_blank");
  } else {
    setOpenModel(true);
  }
};



  if (!project) return <div>Project not found</div>;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h2>

          <p className="mt-4 max-w-2xl text-white/70">{project.tagline}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="
        relative inline-flex items-center justify-center
        rounded-full p-[1.5px]
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        hover:from-pink-500 hover:to-indigo-500
        transition-all duration-300
        shadow-lg hover:shadow-pink-500/30
      "
              >
                <span
                  className="
          px-4 py-1.5 rounded-full
          bg-black/80 backdrop-blur-md
          text-sm font-semibold tracking-wide
          text-white
          hover:scale-105 transition-transform duration-300
        "
                >
                  {tech}
                </span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a
              href={project.links.live}
              className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black"
            >
              Live Demo
            </a>
            <button
              onClick={handleOpen}
              className="rounded-lg border border-white/20 px-5 py-2 text-sm font-medium cursor-pointer"
            >
              GitHub Repo
            </button>
          </div>
        </div>
      </section>

      {/* ================= PROJECT PREVIEW ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="aspect-video w-full flex items-center justify-center text-white/40">
          <ProjectCarousel folder={project.preview.image} />
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <h4 className="mt-4 text-red-400">Problem</h4>
            <p className="text-white/70 leading-relaxed">
              {project.overview.problem}
            </p>
            <h4 className="mt-4 text-green-500">Solution</h4>

            <p className="text-white/70 leading-relaxed">
              {project.overview.solution}
            </p>
            <h4 className="mt-4 text-blue-600">Goal</h4>

            <p className="text-white/70 leading-relaxed">
              {project.overview.goal}
            </p>
          </div>

          {/* Project Info */}
          <div className="rounded-xl border border-white/10 p-6">
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-white/50">Role</span>
                <span className="font-medium">{project.projectInfo.role}</span>
              </li>
              <li>
                <span className="block text-white/50">Duration</span>
                <span className="font-medium">
                  {project.projectInfo.duration}
                </span>
              </li>
              <li>
                <span className="block text-white/50">Status</span>
                <span className="font-medium">
                  {project.projectInfo.status}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Key Features</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-white/10 p-6"
              >
                <p className="font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Challenges & Learnings</h2>

        <p className="mt-4 max-w-3xl text-white/70">
          The main challenges involved optimizing performance and managing
          complex state. These were solved using efficient rendering patterns,
          modular architecture, and strict TypeScript typing.
        </p>
      </section>

      {/* ================= FUTURE IMPROVEMENTS ================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Future Improvements</h2>

          <ul className="mt-4 list-inside list-disc space-y-2 text-white/70">
            <li>Add caching and analytics</li>
            <li>Improve accessibility (WCAG)</li>
            <li>Introduce admin dashboard</li>
          </ul>
        </div>
      </section>

      {openModel && (
        <ProjectGithunDialog
          showDialog={openModel}
          close={handleClose}
          title={project.title}
          server={project.links.gitHubCode.server}
          client={project.links.gitHubCode.client}
        />
      )}
    </main>
  );
};

export default Project;
