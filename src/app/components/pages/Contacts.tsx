"use client";
import React from "react";
import ProfileCard from "../../../components/ProfileCard";
import Me from "../assets/ME.png";
import Link from "next/link";
const Contacts = () => {
  return (
    <>
      <div className="min-h-screen bg-black px-4 py-10 flex flex-col md:flex-row items-center justify-around gap-10 text-white">

  {/* LEFT — PROFILE */}
  <div>
    <ProfileCard
      name="Rakkesh Kumar K"
      role="Full Stack Developer"
      community="Founder - Vairaa Student Community"
      image={Me}
    />
  </div>

  {/* RIGHT — CONTACT CARD */}
  <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">

    <h1 className="text-2xl font-bold text-center">Get In Touch</h1>
    <p className="text-center text-gray-300 text-sm mt-1">
      You can use these links or send me a message
    </p>

    {/* LINKS */}
    <div className="mt-6 space-y-3 text-sm">
      <Link href="" className="flex justify-between bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl transition">
        <span>📞 Phone</span>
        <span className="text-blue-400">Call</span>
      </Link>

      <Link href="" className="flex justify-between bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl transition">
        <span>📧 Email</span>
        <span className="text-blue-400">Send</span>
      </Link>

      <Link href="" className="flex justify-between bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl transition">
        <span>💼 LinkedIn</span>
        <span className="text-blue-400">Visit</span>
      </Link>

      <Link href="" className="flex justify-between bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl transition">
        <span>🐙 GitHub</span>
        <span className="text-blue-400">Repo</span>
      </Link>
    </div>

    {/* CONTACT FORM */}
    <div className="mt-6 space-y-3">
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-blue-500"
      />

      <textarea
        rows={3}
        placeholder="Your Message"
        className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-blue-500 resize-none"
      />

      <button
        className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
      >
        Send Message
      </button>
    </div>
  </div>

</div>

    </>
  );
};

export default Contacts;
