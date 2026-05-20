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
    price: string | number | null;
    discount_price: string | number | null;
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
    register: string;
    created_at: string;
    updated_at: string;
    timings?: {
        day_1: {
            date: string;
            day: string;
            time: string;
            topic: string;
        };
        day_2: {
            date: string;
            day: string;
            time: string;
            topic: string;
        };
        day_3: {
            date: string;
            day: string;
            time: string;
            topic: string;
        };
    };
    tools_covered?: string[];
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

                        {course.register && (
                            <div className="mt-4">
                                <a
                                    href={course.register}
                                    target="_blank"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                                >
                                    Click to Registration
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
                        <DetailCard label="Registration" value={course.register} isLink />
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

                {/* TIMINGS SECTION */}
                {course.timings && (
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">
                            Program Schedule
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* DAY 1 */}
                            <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-[#140b2d] to-[#1d103d] p-6 shadow-2xl hover:scale-105 transition-all duration-300">

                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>

                                <div className="relative z-10">
                                    <span className="inline-block bg-purple-600 text-white text-sm px-4 py-1 rounded-full font-semibold mb-4">
                                        DAY 1
                                    </span>

                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        {course.timings.day_1.topic}
                                    </h2>

                                    <div className="space-y-3 mt-6 text-gray-300">

                                        <div className="flex items-center gap-3">
                                            <div className="bg-purple-500/20 p-2 rounded-xl">
                                                📅
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    Date
                                                </p>

                                                <p className="font-medium">
                                                    {course.timings.day_1.date} - {course.timings.day_1.day}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="bg-purple-500/20 p-2 rounded-xl">
                                                ⏰
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    Timing
                                                </p>

                                                <p className="font-medium">
                                                    {course.timings.day_1.time}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* DAY 2 */}
                            <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-[#071a2d] to-[#0b2747] p-6 shadow-2xl hover:scale-105 transition-all duration-300">

                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>

                                <div className="relative z-10">
                                    <span className="inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full font-semibold mb-4">
                                        DAY 2
                                    </span>

                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        {course.timings.day_2.topic}
                                    </h2>

                                    <div className="space-y-3 mt-6 text-gray-300">

                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-500/20 p-2 rounded-xl">
                                                📅
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    Date
                                                </p>

                                                <p className="font-medium">
                                                    {course.timings.day_2.date} - {course.timings.day_2.day}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-500/20 p-2 rounded-xl">
                                                ⏰
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    Timing
                                                </p>

                                                <p className="font-medium">
                                                    {course.timings.day_2.time}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* DAY 3 */}
                            <div className="relative overflow-hidden rounded-3xl border border-green-500/30 bg-gradient-to-br from-[#061d14] to-[#0d3a2b] p-6 shadow-2xl hover:scale-105 transition-all duration-300">

                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-3xl rounded-full"></div>

                                <div className="relative z-10">
                                    <span className="inline-block bg-green-600 text-white text-sm px-4 py-1 rounded-full font-semibold mb-4">
                                        DAY 3
                                    </span>

                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        {course.timings.day_3.topic}
                                    </h2>

                                    <div className="space-y-3 mt-6 text-gray-300">

                                        <div className="flex items-center gap-3">
                                            <div className="bg-green-500/20 p-2 rounded-xl">
                                                📅
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    Date
                                                </p>

                                                <p className="font-medium">
                                                    {course.timings.day_3.date} - {course.timings.day_3.day}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="bg-green-500/20 p-2 rounded-xl">
                                                ⏰
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    Timing
                                                </p>

                                                <p className="font-medium">
                                                    {course.timings.day_3.time}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

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