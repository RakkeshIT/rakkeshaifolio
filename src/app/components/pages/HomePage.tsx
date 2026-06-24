"use client";
import React, { useRef, useState } from "react";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";
import Image from "next/image";
import Coding from "../assets/coding.png";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { Download, Mic, Mail, Phone, User, X } from "lucide-react";
import { Micro_5_Charted } from "next/font/google";
interface Props {
  contactRef: React.RefObject<HTMLDivElement>
}
const HomePage = ({section}: {section: Props}) => {
  const [open, setOpen] = useState(false);
  
  const scrollTo = (e: React.ChangeEvent<HTMLButtonElement>, ref: React.RefObject<HTMLDivElement>) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <>
      <div className="bg-background relative flex h-screen w-full justify-center overflow-hidden rounded-lg">
        {/* Background Grid */}
        <InteractiveGridPattern
          className={cn(
            "absolute inset-0 z-0",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "h-[200%] skew-y-12",
          )}
        />

        {/* Foreground Content */}
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center">
          {/* Animation Wrapper */}
          <div className="relative flex h-[100px] w-[100px] items-center justify-center">
            {/* Outer dotted ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute h-full w-full rounded-full border border-dashed border-zinc-400/60"
            />

            {/* Inner solid ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute h-[70px] w-[70px] rounded-full border border-zinc-300/60"
            />

            {/* Center Logo */}
            <div className="relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-background shadow-md">
              <Image
                src={Coding}
                width={42}
                height={42}
                alt="Logo"
                className="object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-5xl">
            Building Modern, Scalable Web Applications
          </h1>

          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            I’m Rakkesh Kumar, a full-stack developer specializing in MERN &
            Next.js. I craft fast, secure, and production-ready web experiences
            with clean architecture and smooth animations.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1TcofeEal1XOcUgIXI5gU3GNXAzNMzI8X/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full 
               bg-indigo-600 px-6 py-3 text-sm font-semibold 
               text-white shadow-md transition-all duration-300 
               hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1"
            >
              <Download size={18} />
              Download Resume
            </a>

            {/* College Booking Button */}
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full 
             border border-gray-300 bg-white px-6 py-3 
             text-sm font-semibold text-gray-800 shadow-sm 
             transition-all duration-300 
             hover:bg-gray-100 hover:shadow-md hover:-translate-y-1"
            >
              <Mic size={18} />
              Invite Me as College Resource Person
            </button>
          </div>
        </section>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[92%] max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold text-gray-900">
                Rakkesh Kumar
              </h2>

              <p className="mt-1 text-sm text-indigo-600 font-medium">
                Full-Stack Developer | AI & Modern Web Speaker
              </p>

              {/* Contact Info */}
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>rakkeshit@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>+91 9025377342</span>
                </div>
              </div>

              {/* Expertise Section */}
              <div className="mt-6 border-t pt-5">
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                  Expertise & Session Topics
                </h3>

                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>
                    • AI & Generative AI for Developers.
                  </li>
                  <li>• Building Scalable Apps with Modern Technologies</li>
                  <li>• Modern System Design Fundamentals</li>
                  <li>• Cloud Deployment & Production Architecture</li>
                  <li>• Industry-Ready Project Development</li>
                  <li>• Smart Job Strategy & Career Growth (2026 Market)</li>
                </ul>
              </div>

              {/* Format Section */}
              <div className="mt-6 border-t pt-5">
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                  Session Format
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Interactive workshops with real-time coding demos, practical
                  AI use cases, career guidance, and Q&A sessions designed for
                  engineering students.
                </p>
              </div>

              {/* CTA */}
              <a
                href="mailto:rakkeshit@gmail.com"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                <Mail size={18} />
                Contact for Booking
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
