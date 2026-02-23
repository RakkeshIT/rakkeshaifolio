"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import Me from '../../assets/Profile.png'
import Me2 from '../../assets/vaishali.png'
const owners = [
  {
    name: "Vaishali S",
    role: "Business Analyst & CEO of Vairaa Coders",
    image: Me2,
    bio: "Strategic Business Analyst driving vision, partnerships, and growth at Vairaa Coders. She specializes in requirement analysis, product strategy, and aligning technology solutions with real-world student and industry needs.",
    linkedin: "https://www.linkedin.com/in/vaishaliit/",
    email: "mailto:vairaacoders@gmail.com",
  },
  {
    name: "Rakkesh Kumar J",
    role: "Full Stack Developer & Founder of Vairaa Coders",
    image: Me,
    bio: "Full Stack Developer and technical architect behind Vairaa Coders. Passionate about building scalable platforms, AI-driven solutions, and empowering students through practical, industry-focused technology exposure.",
    linkedin: "https://www.linkedin.com/in/rakkeshit/",
    email: "mailto:vairaacoders@gmail.com",
  }
];

export default function OwnersSection() {
  return (
    <section className="relative py-28 px-6 text-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[160px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Meet The <span className="text-orange-500">Founders</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          The visionaries behind Vairra Community — building a student-first
          ecosystem powered by technology and innovation.
        </p>

        {/* Owners Grid */}
        <div className="grid md:grid-cols-2 gap-20 md:gap-16">

          {owners.map((owner, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500 transition duration-300"
            >
              
              {/* Image */}
              <div className="relative w-50 h-50 mx-auto mb-6">
                <Image
                  src={owner.image}
                  alt={owner.name}
                  fill
                  className="rounded-full border-4 object-fill border-orange-500/30 group-hover:border-orange-500 transition"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold">{owner.name}</h3>
              <p className="text-orange-400 mt-1">{owner.role}</p>

              {/* Bio */}
              <p className="text-gray-400 text-sm mt-4 px-4">
                {owner.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href={owner.linkedin}
                  className="p-3 bg-white/10 rounded-full hover:bg-orange-500/20 transition"
                >
                  <Linkedin size={20} className="text-orange-500" />
                </a>

                <a
                  href={owner.email}
                  className="p-3 bg-white/10 rounded-full hover:bg-orange-500/20 transition"
                >
                  <Mail size={20} className="text-orange-500" />
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}