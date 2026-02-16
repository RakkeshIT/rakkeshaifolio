import React from "react";
import icons from "../../Data/icons.json";
import { skillIcons, toolsIcon, platformIcons } from "../IconMapper";
import { IconGrid } from "../layouts/IconGrid";
const Skill = () => {
  return (
    <div className="min-h-screen w-full px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
          My <span className="text-indigo-500">Skills & Tools</span>
        </h1>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Skills
          </h2>
          <IconGrid
            data={icons.skills}
            iconMap={skillIcons}
            bg="bg-pink-100 dark:bg-pink-900"
          />
        </section>

        {/* Tools Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Tools
          </h2>
          <IconGrid
            data={icons.tools}
            iconMap={toolsIcon}
            bg="bg-indigo-100 dark:bg-indigo-900"
          />
        </section>

        {/* Platforms Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Platforms
          </h2>
          <IconGrid
            data={icons.platforms}
            iconMap={platformIcons}
            bg="bg-yellow-100 dark:bg-yellow-900"
          />
        </section>
      </div>
    </div>
  );
};

export default Skill;
