"use client";

import React from "react";
import MyCommunityBg3D from "./MyCommunity";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

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
          <LinkIcon/>
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

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
           <a href='mailto:vairaacoders@gmail.com' target="__blank" className="rounded-2xl bg-black px-8 text-lg text-center py-2">
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
