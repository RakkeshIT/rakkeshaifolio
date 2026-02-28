"use client";

import { Briefcase, Calendar, GraduationCap, LetterText } from "lucide-react";

export default function IndustryExperience() {
  return (
    <section id="industry" className="bg-white text-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Industry Experience
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Professional experience building scalable full-stack applications
            and delivering real-world technical solutions.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative border-l border-gray-200 pl-8 space-y-16">
          {/* FireSky Experience */}
          <div className="relative">
            {/* Dot */}
            <div className="absolute -left-[10px] top-2 w-4 h-4 bg-orange-600 rounded-full" />

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="text-orange-600" size={20} />
                <h3 className="text-xl font-semibold">MERN Stack Developer</h3>
              </div>

              <p className="text-gray-600 font-medium">
                FireSky Technologies Pvt. Ltd.
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 mb-6">
                <Calendar size={16} />
                July 2025 – Present
              </div>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>
                  • Contributing to development of a scalable CRM platform using
                  the MERN stack.
                </li>
                <li>
                  • Designed and implemented secure RESTful APIs with
                  authentication and role-based access control.
                </li>
                <li>
                  • Optimized MongoDB queries and improved backend performance.
                </li>
                <li>
                  • Debugged production issues and enhanced system stability.
                </li>
                <li>
                  • Collaborated with frontend teams for seamless API
                  integration.
                </li>
              </ul>
            </div>
          </div>

          {/* G-TEC Experience */}
          <div className="relative">
            <div className="absolute -left-[10px] top-2 w-4 h-4 bg-orange-600 rounded-full" />

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="text-orange-600" size={20} />
                <h3 className="text-xl font-semibold">
                  Software Trainer & Full Stack Developer
                </h3>
              </div>

              <p className="text-gray-600 font-medium">
                G-TEC Computer Education
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 mb-6">
                <Calendar size={16} />
                May 2024 – May 2025
              </div>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>
                  • Delivered training sessions on Full Stack Development to
                  100+ students.
                </li>
                <li>
                  • Designed project-based curriculum covering authentication,
                  APIs, and database systems.
                </li>
                <li>
                  • Mentored students in building production-ready applications.
                </li>
              </ul>

              <a
                href="https://drive.google.com/file/d/1aQ1JA0wUXRCbOobu5UEuDbQADjdX-OqI/view?usp=drive_link"
                className="flex items-center mt-4 text-blue-700 underline gap-2 hover:text-orange-500 transition"
              >
                <Briefcase size={16} />
                Experience Certificate
              </a>

              <a
                href="https://drive.google.com/file/d/1Y6dPdhB_SMggBhWw2wgoZ_FhGmOil4Na/view?usp=sharing"
                className="flex items-center mt-2 text-blue-700 underline gap-2 hover:text-orange-500 transition"
              >
                <LetterText size={16} />
                Relieving Letter
              </a>
            </div>
          </div>

          {/* Internship */}
          <div className="relative">
            <div className="absolute -left-[10px] top-2 w-4 h-4 bg-orange-600 rounded-full" />

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="text-orange-600" size={20} />
                <h3 className="text-xl font-semibold">
                  Full Stack Developer Intern
                </h3>
              </div>

              <p className="text-gray-600 font-medium">A1IDEAZ</p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 mb-6">
                <Calendar size={16} />
                Apr 2024 - Jun 2024 ·
              </div>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>
                  • Developed and maintained full-stack web applications using
                  Laravel for backend and React.js for frontend.
                </li>
                <li>
                  • Implemented authentication systems, RESTful APIs, and
                  database integration.
                </li>
              </ul>
              <a
                href="https://drive.google.com/file/d/1s-ns5367rc9wAzzJA9KghHJfbkDLiahp/view?usp=drive_link"
                target="_blank"
                className="flex mt-2 text-blue-700 underline items-center gap-2 hover:text-orange-500 transition"
              >
                <GraduationCap size={16} />
                Internship Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
