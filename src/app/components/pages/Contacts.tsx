"use client";
import React, { useState } from "react";
import ProfileCard from "../../../components/ProfileCard";
import Me from "../assets/ME.png";
import Link from "next/link";
import { coreAPI } from "@/services/coreAPI";
import Spinner from "@/components/shadcn-studio/Spinner";
import AlertDialogDemo from "@/components/shadcn-studio/dialog/dialog-01";

type formProps = {
  email: string;
  message: string;
};
const Contacts = () => {
  const [form, setForm] = useState<formProps>({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Contact Form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Form Data: ", form);
      const res = await coreAPI.post("/api/contact", form);
      if (res.status == 200) {
        setShowDialog(true);
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  // DialogBox Closing
  const handloDialogClose = () => {
    setShowDialog(false);
  };
  return (
    <>
      <div
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
                min-h-screen bg-black px-4 py-10
                flex flex-col md:flex-row items-center justify-around gap-10 text-white"
      >
        {loading && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-md">
            <div className="flex w-100 flex-col items-center gap-4 bg-white/10 border border-white/20 px-10 py-8 rounded-2xl shadow-2xl">
              <Spinner size={36} className="text-white" />

              <h1 className="text-lg font-semibold text-white">
                Sending your message...
              </h1>

              <p className="text-sm text-gray-300 text-center">
                Thanks for reaching out 💙 <br />
                Please wait a moment.
              </p>
            </div>
          </div>
        )}

        {showDialog && !loading && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            <AlertDialogDemo
              showDialog={showDialog}
              close={handloDialogClose}
            />
          </div>
        )}

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
            <Link
              href=""
              className="flex justify-between bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl transition"
            >
              <span>📞 Phone</span>
              <span className="text-blue-400">Call</span>
            </Link>

            <Link
              href=""
              className="flex justify-between bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl transition"
            >
              <span>📧 Email</span>
              <span className="text-blue-400">Send</span>
            </Link>

            <Link
              href=""
              className="flex justify-between bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl transition"
            >
              <span>💼 LinkedIn</span>
              <span className="text-blue-400">Visit</span>
            </Link>

            <Link
              href=""
              className="flex justify-between bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl transition"
            >
              <span>🐙 GitHub</span>
              <span className="text-blue-400">Repo</span>
            </Link>
          </div>

          {/* CONTACT FORM */}
          <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-blue-500"
            />

            <textarea
              rows={3}
              placeholder="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-blue-500 resize-none"
            />

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
