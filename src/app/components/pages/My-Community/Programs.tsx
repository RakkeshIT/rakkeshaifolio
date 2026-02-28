"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Monitor,
  Mic,
  Briefcase,
  Code,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Free Courses",
    description:
      "High-quality beginner to advanced full-stack development courses.",
    icon: GraduationCap,
  },
  {
    title: "Live Webinars",
    description:
      "Industry-ready sessions on AI, MERN stack, career strategy & real-world architecture.",
    icon: Mic,
  },
  {
    title: "College Projects",
    description:
      "Final year project mentoring with scalable architecture guidance.",
    icon: Code,
  },
  {
    title: "Industry Projects",
    description: "Real production-level application development training.",
    icon: Briefcase,
  },
  {
    title: "AP Learning Programs",
    description: "Advanced Placement learning paths for serious developers.",
    icon: Rocket,
  },
  {
    title: "College Training Programs",
    description:
      "Hands-on workshops for engineering students with live coding.",
    icon: Monitor,
  },
];


export default function Programs() {

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Community Explore Programs
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
          Empowering developers through industry-focused learning, AI-driven
          innovation, and real-world mentorship programs.
        </p>
      </motion.div>

             {/* Social Media Links */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@VairaaCoders"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 
               hover:scale-110 transition duration-300"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.4 3.5-6.4 3.5Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/vairaacoders/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 
               hover:scale-110 transition duration-300"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24">
              <defs>
                <linearGradient
                  id="instagramGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#feda75" />
                  <stop offset="25%" stopColor="#fa7e1e" />
                  <stop offset="50%" stopColor="#d62976" />
                  <stop offset="75%" stopColor="#962fbf" />
                  <stop offset="100%" stopColor="#4f5bd5" />
                </linearGradient>
              </defs>
              <path
                fill="url(#instagramGradient)"
                d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 7A2.5 2.5 0 1 1 14.5 12 2.5 2.5 0 0 1 12 14.5Zm4.8-7.8a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"
              />
            </svg>
          </a>
        </div>

      {/* Main Action Buttons */}
      <div className="mt-12 flex justify-center gap-6 flex-wrap">
        {/* Courses Button */}
        <Link
          href="/course"
          className="relative inline-flex items-center justify-center px-8 py-3 
               overflow-hidden text-base font-semibold border border-orange-500 
               rounded-full group"
        >
          <span
            className="absolute inset-0 bg-orange-600 
                     translate-y-full group-hover:translate-y-0 
                     transition-transform duration-500 ease-out"
          />
          <span
            className="relative text-orange-500 
                     group-hover:text-white transition-colors duration-300"
          >
            Courses
          </span>
        </Link>

        {/* Webinars Button */}
        <Link
          href="/webinar"
          className="relative inline-flex items-center justify-center px-8 py-3 
               overflow-hidden text-base font-semibold border border-orange-500 
               rounded-full group"
        >
          <span
            className="absolute inset-0 bg-orange-600 
                     translate-y-full group-hover:translate-y-0 
                     transition-transform duration-500 ease-out"
          />
          <span
            className="relative text-orange-500 
                     group-hover:text-white transition-colors duration-300"
          >
            Webinars
          </span>
        </Link>
      </div>

      {/* PROGRAM GRID */}
      <div className="mt-20 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {programs.map((program, index) => {
          const Icon = program.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-neutral-900 border border-neutral-800 
                         rounded-2xl p-8 transition-all duration-300 
                         hover:border-orange-500 hover:shadow-xl 
                         hover:shadow-orange-600/20 overflow-hidden"
            >
              {/* Glow Background */}
              <div
                className="absolute inset-0 bg-orange-600/10 
                              opacity-0 group-hover:opacity-100 
                              transition duration-300 rounded-2xl blur-xl"
              />

              <div className="relative z-10">
                <Icon className="text-orange-500 mb-6" size={40} />

                <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
