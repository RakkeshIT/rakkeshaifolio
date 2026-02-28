"use client";

import React from "react";
import MyCommunityBg3D from "./MyCommunity";
import Link from "next/link";
import { LinkIcon, Youtube, Instagram } from "lucide-react";

const CommunityHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* 🌌 3D Background */}
      <MyCommunityBg3D />

      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 z-10" />

      {/* 📝 Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <div className="">
          <Link
            href="/"
            className="flex gap-2 text-white underline tracking-widest text-xl font-bold"
          >
            <LinkIcon />
            <span>Visit Full Site</span>
          </Link>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-orange-500">Vairra Community</span>
        </h1>

        <p className="mt-6 max-w-2xl text-gray-300 text-lg">
          Empowering students through free webinars, college tech talks, premium
          industry sessions, product development support, and AI-driven
          assistance.
        </p>

        {/* Social Media Links */}
        <div className="mt-10 flex gap-6">
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
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="mailto:vairaacoders@gmail.com"
            target="__blank"
            className="rounded-2xl bg-black px-8 text-lg text-center py-2"
          >
            Join Community
          </a>

          <button className="px-8 py-3 border border-white/30 hover:border-orange-500 rounded-xl transition">
            Explore Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
