"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Details } from './Data/Details'
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
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "upcoming">("all");

  const filteredTabs = Details.filter((w) =>
    activeTab === "all" ? true : w.status.toLowerCase() === activeTab
  );

  return (
    <section className="min-h-screen bg-gray-800 py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
          My Webinars
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12 px-2">
          <div className="flex bg-white/5 backdrop-blur-lg p-1 rounded-xl border border-white/10 overflow-x-auto max-w-full">
            {[
              { label: "All", value: "all" },
              { label: "Completed", value: "completed" },
              { label: "Upcoming", value: "upcoming" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value as typeof activeTab)}
                className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
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
        {/* {loading && (
          <div className="text-center text-gray-400 text-lg">
            Loading webinars...
          </div>
        )} */}

        {/* Grid */}
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTabs.length > 0 ? (
              filteredTabs.map((webinar) => (
                <div
                  key={webinar.id}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                    <Image
                      src={webinar.cover_image}
                      alt={webinar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col justify-between min-h-[220px]">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 break-words">
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

      </div>
    </section>
  );
}