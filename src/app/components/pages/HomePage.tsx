"use client";
import React from "react";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";
import Image from "next/image";
import Coding from "../assets/coding.png";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";
const HomePage = () => {
  return (
    <>
      <div className="bg-background relative flex h-screen w-full justify-center overflow-hidden rounded-lg">
        {/* Background Grid */}
        <InteractiveGridPattern
          className={cn(
            "absolute inset-0 z-0",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "h-[200%] skew-y-12"
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
            <a
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-muted"
            >
              Contact Me
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
