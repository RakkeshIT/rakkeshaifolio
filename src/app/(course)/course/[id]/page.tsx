"use client";

import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Courses } from "@/app/components/pages/courses/Data/Details";

interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  price: number | null;
  discount_price: number | null;
  duration: string;
  language: string;
  short_description: string;
  description: string;
  learnings: string;
  requirements: string;
  syllabus_link: string;
  preview_video_link: string;
  resource_link: string;
  thumbnail: StaticImageData;
  instructor_image_url: StaticImageData;
  instructor_name: string;
  instructor_role: string;
  instructor_bio: string;
  instructor_linkedin: string;
  instructor_portfolio: string;
  eligibility?: string; // new field for eligibility
  poster_link?: string; // new field for course poster download
  status: string;
  created_at: string;
  updated_at: string;
}

export default function CourseDetailsPage() {
  const { id } = useParams();
  const course: Course | undefined = Courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Course Not Found
      </div>
    );
  }

  const displayValue = (value: string | null | undefined) => value && value !== "" ? value : "Not Available";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-50">

      {/* HERO SECTION */}
      <div className="relative w-full h-[500px]">
        {course.thumbnail ? (
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover brightness-90"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No Thumbnail Available
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-8 text-white">
            <Link href="/course" className="underline text-sm hover:text-orange-400 transition">
              ← Back to Courses
            </Link>

            <h1 className="text-5xl font-bold mt-4 animate-fadeIn">
              {displayValue(course.title)}
            </h1>

            <p className="mt-4 text-lg text-gray-200 max-w-3xl animate-fadeIn delay-200">
              {displayValue(course.short_description)}
            </p>

            <div className="mt-6">
              <span className="px-4 py-2 bg-orange-500 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                {displayValue(course.level)}
              </span>
            </div>

            {/* Poster Download */}
            {course.poster_link && (
              <div className="mt-4">
                <a
                  href={course.poster_link}
                  download
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Download Course Poster
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-6xl mx-auto px-8 py-16 space-y-16">

        {/* DESCRIPTION */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">About This Course</h2>
          <div className="bg-white shadow-xl rounded-2xl p-10 leading-relaxed text-gray-700 whitespace-pre-line hover:shadow-2xl transition">
            {displayValue(course.description)}
          </div>
        </motion.section>

        {/* COURSE DETAILS */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8">Course Details</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <DetailCard label="Category" value={course.category} />
            <DetailCard label="Level" value={course.level} />
            <DetailCard label="Duration" value={course.duration} />
            <DetailCard label="Language" value={course.language} />
            <DetailCard label="Price" value={course.price ? `₹${course.price}` : "Free"} />
            <DetailCard label="Discount Price" value={course.discount_price ? `₹${course.discount_price}` : "Not Available"} />
            <DetailCard label="Syllabus" value={course.syllabus_link} isLink />
            <DetailCard label="Preview Video" value={course.preview_video_link} isLink />
            <DetailCard label="Resources" value={course.resource_link} isLink />
          </div>
        </motion.section>

        {/* LEARNINGS & REQUIREMENTS */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">What You Will Learn</h2>
              <div className="bg-white shadow-lg rounded-xl p-8 leading-relaxed text-gray-700 whitespace-pre-line hover:shadow-2xl transition">
                {displayValue(course.learnings)}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Requirements</h2>
              <div className="bg-white shadow-lg rounded-xl p-8 leading-relaxed text-gray-700 whitespace-pre-line hover:shadow-2xl transition">
                {displayValue(course.requirements)}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ELIGIBILITY SECTION */}
        {course.eligibility && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Eligibility</h2>
            <div className="bg-white shadow-lg rounded-xl p-8 leading-relaxed text-gray-700 whitespace-pre-line hover:shadow-2xl transition">
              {course.eligibility}
            </div>
          </motion.section>
        )}

        {/* INSTRUCTOR SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">Instructor</h2>
          <div className="bg-white shadow-2xl rounded-3xl p-10 grid md:grid-cols-2 gap-8 items-center hover:scale-105 transition-transform duration-500">
            <div className="relative w-full h-80 md:h-100 lg:h-[600px]">
              {course.instructor_image_url ? (
                <Image
                  src={course.instructor_image_url}
                  alt={course.instructor_name}
                  fill
                  className="object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-2xl">
                  No Image Available
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-semibold">{displayValue(course.instructor_name)}</h3>
              <p className="text-gray-600 mt-2">{displayValue(course.instructor_role)}</p>
              <p className="mt-4 text-gray-700 whitespace-pre-line">{displayValue(course.instructor_bio)}</p>

              <div className="mt-6 space-y-2">
                {course.instructor_linkedin ? (
                  <a href={course.instructor_linkedin} target="_blank" className="text-blue-600 underline block">
                    LinkedIn Profile
                  </a>
                ) : (
                  <p className="text-gray-400">LinkedIn Not Available</p>
                )}

                {course.instructor_portfolio ? (
                  <a href={course.instructor_portfolio} target="_blank" className="text-blue-600 underline block">
                    Portfolio Website
                  </a>
                ) : (
                  <p className="text-gray-400">Portfolio Not Available</p>
                )}
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

function DetailCard({ label, value, isLink }: { label: string; value: string | number | null; isLink?: boolean }) {
  const display = value && value !== "" ? value : "Not Available";
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px rgba(0,0,0,0.1)" }}
      className="bg-white shadow-md rounded-xl p-6 transition cursor-pointer"
    >
      <p className="text-sm text-gray-500 mb-2">{label}</p>
      {isLink && typeof value === "string" ? (
        <a href={value} target="_blank" className="text-blue-600 font-medium break-all underline">
          {display}
        </a>
      ) : (
        <p className="font-semibold text-gray-800">{display}</p>
      )}
    </motion.div>
  );
}