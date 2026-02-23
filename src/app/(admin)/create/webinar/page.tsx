"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  shortDescription: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  locationType: string;
  location: string;
  venue: string;
  status: string;
  agendaLink: string;
  registrationLink: string;
  speakerName: string;
  speakerRole: string;
  speakerLinkedIn: string;
  speakerPortfolio: string;
}

export default function CreateWebinarPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Props>({
    title: "",
    shortDescription: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    duration: "",
    locationType: "Online",
    location: "",
    venue: "",
    status: "Upcoming",
    agendaLink: "",
    registrationLink: "",
    speakerName: "",
    speakerRole: "",
    speakerLinkedIn: "",
    speakerPortfolio: "",
  });

  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!coverImage) {
      alert("Please upload cover image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      formData.append("coverImage", coverImage);

      const res = await fetch("/api/webinar", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert("Webinar created successfully!");
      router.push("/admin/webinars");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto bg-neutral-900 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8">Create Webinar</h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* BASIC INFO */}
          <section>
            <h2 className="text-xl font-semibold mb-6 border-b border-neutral-700 pb-2">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">Title</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">Cover Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm text-neutral-400">
                  Short Description
                </label>
                <textarea
                  name="shortDescription"
                  value={form.shortDescription}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm text-neutral-400">
                  Full Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </section>

          {/* DATE & TIME */}
          <section>
            <h2 className="text-xl font-semibold mb-6 border-b border-neutral-700 pb-2">
              Date & Time
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  value={form.startTime}
                  onChange={handleChange}
                  required
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>End Time</label>
                <input
                  type="time"
                  name="endTime"
                  value={form.endTime}
                  onChange={handleChange}
                  required
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Duration</label>
                <input
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                />
              </div>
            </div>
          </section>
          {/* LOCATION */}
          <section>
            <h2 className="text-xl font-semibold mb-6 border-b border-neutral-700 pb-2">
              Location
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">
                  Location Type
                </label>
                <select
                  name="locationType"
                  value={form.locationType}
                  onChange={handleChange}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                >
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">Location</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">Venue</label>
                <input
                  name="venue"
                  value={form.venue}
                  onChange={handleChange}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </section>

          {/* EXTERNAL LINKS */}
          <section>
            <h2 className="text-xl font-semibold mb-6 border-b border-neutral-700 pb-2">
              External Links
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">Agenda Link</label>
                <input
                  name="agendaLink"
                  value={form.agendaLink}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">
                  Registration Link
                </label>
                <input
                  name="registrationLink"
                  value={form.registrationLink}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3"
                />
              </div>
            </div>
          </section>

          {/* SPEAKER DETAILS */}
          <section>
            <h2 className="text-xl font-semibold mb-6 border-b border-neutral-700 pb-2">
              Speaker Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">Speaker Name</label>
                <input
                  name="speakerName"
                  value={form.speakerName}
                  onChange={handleChange}
                  required
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">Speaker Role</label>
                <input
                  name="speakerRole"
                  value={form.speakerRole}
                  onChange={handleChange}
                  required
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">
                  LinkedIn Profile
                </label>
                <input
                  name="speakerLinkedIn"
                  value={form.speakerLinkedIn}
                  onChange={handleChange}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-400">
                  Portfolio / Website
                </label>
                <input
                  name="speakerPortfolio"
                  value={form.speakerPortfolio}
                  onChange={handleChange}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 rounded-xl font-semibold hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Webinar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
