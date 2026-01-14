"use client";

import { useState } from "react";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  role: string;
  image: any;
  community: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  image,
  community,
}) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative group rounded-3xl p-[2px]"
    >
      {/* Dynamic Light */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 blur-2xl transition group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(168,85,247,0.6), transparent 60%)`,
        }}
      />

      {/* Card */}
      <div className="relative h-[520px] w-[400px] rounded-3xl bg-[#0b0b14] border border-white/10 p-8 text-center backdrop-blur-xl">

        {/* Avatar */}
        <div className="mx-auto relative h-32 w-32 rounded-full overflow-hidden border-4 border-purple-500/40 shadow-lg">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Name */}
        <h3 className="mt-6 text-2xl font-bold text-white tracking-wide">
          {name}
        </h3>

        {/* Role */}
        <p className="mt-1 text-sm text-purple-400 font-medium">
          {role}
        </p>

        {/* Bio */}
        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
          Empowering students and job seekers with guidance, skills, and
          confidence to build successful careers 🚀
        </p>

         <p className="mt-1 text-sm text-purple-400 font-medium">
          {community}
        </p>
        
        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:contact@vairaa.com"
            className="rounded-full bg-purple-600 px-5 py-2 text-sm text-white hover:bg-purple-700 transition"
          >
            Contact
          </a>

          <a
            href="#"
            className="rounded-full border border-purple-500/50 px-5 py-2 text-sm text-purple-400 hover:bg-purple-500/10 transition"
          >
            Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
