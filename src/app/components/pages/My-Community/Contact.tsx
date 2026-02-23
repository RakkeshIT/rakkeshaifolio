"use client";

import { Users, Rocket, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CommunityEndSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-white to-orange-50">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[800px] h-[800px] bg-orange-500/10 blur-[180px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-orange-500">Build Your Future?</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Join a student-first tech community where learning meets real-world
          innovation. Grow your skills, build projects, and connect with future leaders.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">

          <div className="bg-white/60 backdrop-blur-xl border border-orange-100 rounded-2xl p-6 shadow-sm">
            <Users className="mx-auto text-orange-500 mb-3" size={28} />
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-gray-500 text-sm">Active Members</p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl border border-orange-100 rounded-2xl p-6 shadow-sm">
            <Rocket className="mx-auto text-orange-500 mb-3" size={28} />
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-gray-500 text-sm">Projects Built</p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl border border-orange-100 rounded-2xl p-6 shadow-sm">
            <Globe className="mx-auto text-orange-500 mb-3" size={28} />
            <h3 className="text-2xl font-bold">10+</h3>
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
            href="/join"
            className="px-8 py-4 rounded-full bg-orange-500 text-white font-semibold
            hover:bg-orange-600 transition shadow-lg"
          >
            Join Community
          </Link>

          <Link
            href="/contact"
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