"use client";

import React from "react";
import MyCommunityBg3D from "./MyCommunity";

const CommunityHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      
      {/* 🌌 3D Background */}
      <MyCommunityBg3D />

      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur z-10" />

      {/* 📝 Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-orange-500">Vairra Community</span>
        </h1>

        <p className="mt-6 max-w-2xl text-gray-300 text-lg">
          Empowering students through free webinars, college tech talks,
          premium industry sessions, product development support,
          and AI-driven assistance.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold transition">
            Join Community
          </button>

          <button className="px-8 py-3 border border-white/30 hover:border-orange-500 rounded-xl transition">
            Explore Programs
          </button>
        </div>

      </div>
    </section>
  );
};

export default CommunityHero;