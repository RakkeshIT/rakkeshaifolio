"use client";

import { Users, Rocket, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CommunityEndSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-white to-orange-50">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[800px] h-[800px] bg-orange-500/10 blur-[180px] rounded-full -z-10"
      />

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-orange-500">Build Your Future?</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Join a student-first tech community where learning meets real-world
          innovation. Grow your skills, build projects, and connect with future
          leaders.
        </p>
        <div className="mt-10 flex justify-center gap-6 flex-wrap mb-16">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@VairaaCoders"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 
               hover:scale-110 transition duration-300"
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FF0000">
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
            <svg className="w-12 h-12" viewBox="0 0 24 24">
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
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="bg-white/60 backdrop-blur-xl border border-orange-100 rounded-2xl p-6 shadow-sm">
            <Users className="mx-auto text-orange-500 mb-3" size={28} />
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-gray-500 text-sm">Active Members</p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl border border-orange-100 rounded-2xl p-6 shadow-sm">
            <Rocket className="mx-auto text-orange-500 mb-3" size={28} />
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-gray-500 text-sm">Projects Built</p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl border border-orange-100 rounded-2xl p-6 shadow-sm">
            <Globe className="mx-auto text-orange-500 mb-3" size={28} />
            <h3 className="text-2xl font-bold">20+</h3>
            <p className="text-gray-500 text-sm">Workshops</p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl border border-orange-100 rounded-2xl p-6 shadow-sm">
            <MessageCircle className="mx-auto text-orange-500 mb-3" size={28} />
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="text-gray-500 text-sm">Community Support</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="mailto:vairaacoders@gmail.com"
            className="px-8 py-4 rounded-full bg-orange-500 text-white font-semibold
            hover:bg-orange-600 transition shadow-lg"
          >
            Join Community
          </Link>

          <Link
            href="mailto:vairaacoders@gmail.com"
            className="px-8 py-4 rounded-full border border-orange-500 text-orange-500 font-semibold
            hover:bg-orange-500 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-28 pt-10 border-t border-orange-100 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Vairaa Coders. All rights reserved.
      </div>
    </section>
  );
}
