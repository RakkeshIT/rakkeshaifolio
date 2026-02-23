"use client";

import {
  GraduationCap,
  Rocket,
  BrainCircuit,
  Users,
  Sparkles,
  Target,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-28 px-6 text-black overflow-hidden">
      
      {/* Soft Glow Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[180px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-orange-400 font-semibold tracking-wide uppercase">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Building the Future of{" "}
            <span className="text-orange-500">Student Tech Communities</span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            Vairra Community is a student-first ecosystem connecting learners,
            developers, and industry leaders through impactful tech programs.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side – Vision Story */}
          <div className="space-y-8">

            <div className="flex gap-5">
              <div className="p-4 bg-orange-500/10 rounded-xl">
                <Target className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-gray-400 mt-2">
                  Empower students with real-world tech exposure and
                  practical learning experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="p-4 bg-orange-500/10 rounded-xl">
                <Sparkles className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Our Vision</h3>
                <p className="text-gray-400 mt-2">
                  Create a global student-driven innovation ecosystem
                  powered by collaboration and AI.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="p-4 bg-orange-500/10 rounded-xl">
                <Users className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Community Impact</h3>
                <p className="text-gray-400 mt-2">
                  Supporting thousands of students through free guidance
                  programs and expert sessions.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side – Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-orange-500 transition duration-300">
              <GraduationCap className="text-orange-500 mb-4 group-hover:scale-110 transition" />
              <h4 className="font-semibold text-lg">
                Free Student Webinars
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Beginner-friendly sessions designed for college learners.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-orange-500 transition duration-300">
              <Rocket className="text-orange-500 mb-4 group-hover:scale-110 transition" />
              <h4 className="font-semibold text-lg">
                Premium Industry Talks
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Advanced paid sessions with real-world professionals.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-orange-500 transition duration-300">
              <BrainCircuit className="text-orange-500 mb-4 group-hover:scale-110 transition" />
              <h4 className="font-semibold text-lg">
                AI Support
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                AI-powered guidance for faster learning and product building.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-orange-500 transition duration-300">
              <Users className="text-orange-500 mb-4 group-hover:scale-110 transition" />
              <h4 className="font-semibold text-lg">
                Developer Network
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Collaborative ecosystem to build and launch tech products.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}