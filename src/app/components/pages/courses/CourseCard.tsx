"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";
import { Courses } from "./Data/Details";
import { useRouter } from "next/navigation";
interface Course {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  price: number;
  duration: string;
  level: string;
  status: "Completed" | "Upcoming" | "Ongoing";
}

interface CourseApi {
    message: string;
    data: Course[];
}
const tabs = ["All", "Completed", "Upcoming", "Ongoing"];

export default function CourseCard() {
  const [activeTab, setActiveTab] = useState("All");
  const router = useRouter()
  const filteredCourses =
    activeTab === "All"
      ? Courses
      : Courses.filter((c) => c.status === activeTab);

  return (
    <section className="relative py-24 px-6 lg:px-20 bg-gradient-to-br from-black via-neutral-900 to-black text-white">
      
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Explore Our <span className="text-orange-500">Courses</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Master future-ready skills with premium learning experience.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black shadow-lg"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>


      {/* Course Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="relative group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Status Badge */}
              <span className="absolute top-4 left-4 bg-orange-500 text-xs px-3 py-1 rounded-full font-semibold">
                {course.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-orange-400 transition">
                {course.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-2">
                {course.short_description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={16} /> {course.level}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-lg font-bold text-orange-400">
                 {course.price ? `₹${course.price}` : "Free"}
                </span>

                <button onClick={() => router.push(`/course/${course.id}`)} className="cursor-pointer bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
                  View Course
                </button>
              </div>
            </div>

            {/* Glow Border Effect */}
            <div className="absolute inset-0 rounded-3xl border border-orange-500 opacity-0 group-hover:opacity-40 transition pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}