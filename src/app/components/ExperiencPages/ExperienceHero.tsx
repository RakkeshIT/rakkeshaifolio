"use client";

import Image from "next/image";
import profile from "../assets/Profile.png";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Download,
  Mic,
} from "lucide-react";
type Props = {
    industry: React.RefObject<HTMLDivElement>,
    techTalk: React.RefObject<HTMLDivElement>
}
export default function ExperienceHero({section}: {section: Props}) {


    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, ref:React.RefObject<HTMLDivElement>) => {
        e.preventDefault()
        ref.current?.scrollIntoView({behavior: "smooth"})
    }
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-orange-600/20 blur-[150px] rounded-full top-[-120px] right-[-120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Full Stack Developer with AI
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Rakkesh Kumar J
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            MERN Stack Developer building scalable CRM systems,
            enterprise backend architectures, and mentoring developers
            through real-world tech sessions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-10 mt-12 max-w-lg">
            <div>
              <h2 className="text-4xl font-bold text-orange-500">1.5+</h2>
              <p className="text-gray-400 text-sm mt-2">
                Years Experience
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-orange-500">5+</h2>
              <p className="text-gray-400 text-sm mt-2">
                Projects Delivered
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-orange-500">5+</h2>
              <p className="text-gray-400 text-sm mt-2">
                Tech Talks
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-6 mt-12 flex-wrap">

            <a
              href="#industry"
              onClick={(e) => scrollTo(e, section.industry)}
              className="flex items-center gap-2 px-8 py-3 bg-orange-600 rounded-full hover:bg-orange-500 transition duration-300 shadow-lg shadow-orange-600/20"
            >
              <Briefcase size={18} />
              Industry Experience
            </a>

            <a
              href="#webinars"
              onClick={(e) => scrollTo(e, section.techTalk)}
              className="relative flex items-center gap-2 px-8 py-3 rounded-full border border-neutral-700 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
                <Mic size={18} />
                Webinars & Talks
              </span>

              <span className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>

          </div>

          {/* Resource Links */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">

            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <Download size={16} />
              Resume
            </a>

            <a
              href="/cover-letter.pdf"
              target="_blank"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <FileText size={16} />
              Cover Letter
            </a>

            <a
              href="/experience-certificate.pdf"
              target="_blank"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <Briefcase size={16} />
              Experience Certificate
            </a>

            <a
              href="/internship-certificate.pdf"
              target="_blank"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <GraduationCap size={16} />
              Internship Certificate
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Accent Layer */}
          <div className="absolute w-[340px] h-[440px] bg-orange-600/20 rounded-3xl rotate-6 blur-md" />

          {/* Image Card */}
          <div className="relative w-[340px] h-[440px] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            <Image
              src={profile}
              alt="Rakkesh Kumar"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

