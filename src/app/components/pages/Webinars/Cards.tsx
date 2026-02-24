"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

interface Webinar {
  id: string;
  title: string;
  short_description: string;
  cover_image: string;
  date: string;
  status: string; // "completed" | "upcoming"
}

interface WebinarApiResponse {
  message: string;
  data: Webinar[];
}

export default function WebinarCards() {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "upcoming">("all");

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const res = await axios.get<WebinarApiResponse>("/api/webinar");
        setWebinars(res.data.data);
      } catch (err) {
        console.error("Failed to fetch webinars", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  const filteredTabs = webinars.filter((w) =>
    activeTab === "all" ? true : w.status.toLowerCase() === activeTab
  );

  return (
    <section className="min-h-screen bg-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          My Webinars
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/5 backdrop-blur-lg p-1 rounded-xl border border-white/10">
            {[
              { label: "All", value: "all" },
              { label: "Completed", value: "completed" },
              { label: "Upcoming", value: "upcoming" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value as typeof activeTab)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === tab.value
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-400 text-lg">
            Loading webinars...
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTabs.length > 0 ? (
              filteredTabs.map((webinar) => (
                <div
                  key={webinar.id}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={webinar.cover_image}
                      alt={webinar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between h-[220px]">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {webinar.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {webinar.short_description}
                      </p>
                    </div>

                    <div>
                      <p
                        className={`text-sm mb-4 ${
                          webinar.status === "completed"
                            ? "text-green-400"
                            : "text-blue-400"
                        }`}
                      >
                        {new Date(webinar.date).toDateString()} •{" "}
                        {webinar.status}
                      </p>

                      <Link
                        href={`/webinar/${webinar.id}`}
                        className="block text-center py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 text-lg">
                No webinars found.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}