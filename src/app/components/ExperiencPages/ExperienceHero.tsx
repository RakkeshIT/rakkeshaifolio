"use client";

import Image from "next/image";
import profile from "../assets/Profile1.png";
import { useState } from "react";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Download,
  Mic,
  X,
  LetterText,
} from "lucide-react";
import Link from "next/link";
type Props = {
  industry: React.RefObject<HTMLDivElement>;
  techTalk: React.RefObject<HTMLDivElement>;
};
type ModalType = "experience" | "relieving" | null;

export default function ExperienceHero({ section }: { section: Props }) {
  const [modalType, setModalType] = useState<ModalType>(null);

  const experienceCertificates = [
    {
      role: "Software Trainer & Developer",
      company: "G-TEC Computer Education",
      file: "https://drive.google.com/file/d/1aQ1JA0wUXRCbOobu5UEuDbQADjdX-OqI/view?usp=drive_link"
    },
    // {
    //   role: "MERN Full Stack Developer",
    //   company: "FireSky Technologies",
    //   file: "",
    // },
  ];

  const relievingLetters = [
    {
      role: "Software Trainer & Developer",
      company: "G-TEC Computer Education",
      file: "https://drive.google.com/file/d/1Y6dPdhB_SMggBhWw2wgoZ_FhGmOil4Na/view?usp=sharing",
    },
    // {
    //   role: "MERN Full Stack Developer",
    //   company: "FireSky Technologies",
    //   file: "/certificates/firesky-relieving.pdf",
    // },
  ];

  const scrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden  py-8 md:py-2">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-orange-600/20 blur-[150px] rounded-full top-[-120px] right-[-120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <Link href="/" className="underline">
            Back to Home
          </Link>
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4 mt-5">
            Full Stack Developer with AI
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Rakkesh Kumar J
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            MERN Stack Developer building scalable CRM systems, enterprise
            backend architectures, and mentoring developers through real-world
            tech sessions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-10 mt-12 max-w-lg">
            <div>
              <h2 className="text-4xl font-bold text-orange-500">1.5+</h2>
              <p className="text-gray-400 text-sm mt-2">Years Experience</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-orange-500">5+</h2>
              <p className="text-gray-400 text-sm mt-2">Projects Delivered</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-orange-500">5+</h2>
              <p className="text-gray-400 text-sm mt-2">Tech Talks</p>
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
              href=""
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
              href="https://drive.google.com/file/d/1TcofeEal1XOcUgIXI5gU3GNXAzNMzI8X/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <Download size={16} />
              Resume
            </a>

            <a
              href="https://docs.google.com/document/d/1DNCBzZMfebX7tF5GUOLOHOl8J7bxb7dC/edit?usp=drive_link&ouid=113524210708981357379&rtpof=true&sd=true"
              target="_blank"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <FileText size={16} />
              Cover Letter
            </a>

            <button
              onClick={() => setModalType("experience")}
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <Briefcase size={16} />
              Experience Certificate
            </button>

            <button
              onClick={() => setModalType("relieving")}
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <LetterText size={16} />
              Relieving Letter
            </button>

            <a
              href="https://drive.google.com/file/d/1s-ns5367rc9wAzzJA9KghHJfbkDLiahp/view?usp=drive_link"
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

      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-[95%] max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setModalType(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">
              {modalType === "experience"
                ? "Experience Certificates"
                : "Relieving Letters"}
            </h2>

            <div className="space-y-4">
              {(modalType === "experience"
                ? experienceCertificates
                : relievingLetters
              ).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-neutral-800 p-4 rounded-xl border border-neutral-700"
                >
                  <div>
                    <p className="text-white font-semibold">{item.role}</p>
                    <p className="text-sm text-gray-400">{item.company}</p>
                  </div>

                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600 rounded-full text-sm hover:bg-orange-500 transition"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
