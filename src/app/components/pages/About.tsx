"use client";
import React from "react";
import { File, Search, Settings } from "lucide-react";
import { OrbitingCirclesDemo } from "../ui/OrbitingCircles";
const About = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-12">
        {/* Orbiting Tech Circles */}
        <OrbitingCirclesDemo />

        {/* About Card */}
        <div className="mt-20 relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105">
          {/* Header */}
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-indigo-500">Me</span>
          </h2>

          {/* Paragraph */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Hi! I'm{" "}
            <span className="font-semibold text-indigo-500">Rakkesh</span>, a
            passionate full-stack developer specializing in creating
            <span className="text-indigo-500 font-medium"> scalable</span> and
            <span className="text-indigo-500 font-medium">
              {" "}
              modern web applications
            </span>
            . I enjoy learning new technologies and building projects that solve
            real-world problems. My portfolio showcases my skills in{" "}
            <span className="font-semibold text-indigo-500">
              React, Next.js, Node.js, Python, AI integrations
            </span>{" "}
            and more.
          </p>

          {/* Tech Skills Icons */}
          <div className="flex flex-wrap justify-center gap-5 mt-4">
            {["React", "Next.js", "Node.js", "Python", "AI", "Tailwind"].map(
              (tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-50 dark:from-indigo-900 dark:to-indigo-800 text-indigo-600 dark:text-indigo-300 rounded-full font-medium text-sm hover:scale-110 transition-transform shadow-sm"
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* Optional animated accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-200/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default About;
