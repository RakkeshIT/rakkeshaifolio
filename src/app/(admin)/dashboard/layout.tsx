"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed h-screen lg:static z-50 top-0 left-0 h-full w-64 bg-white/80 backdrop-blur-lg border-r border-gray-200 shadow-lg transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h1 className="text-lg font-bold text-gray-800">
            Admin Panel
          </h1>

          {/* Close button mobile */}
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="p-4 space-y-2 text-sm">

          <Link
            href="/dashboard"
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/create/webinar"
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
          >
            Create Webinar
          </Link>

          <Link
            href="/create/course"
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
          >
            Create Course
          </Link>

          {/* Dropdown */}
          <div>
            <button
              onClick={() => setViewOpen(!viewOpen)}
              className="w-full flex justify-between items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
            >
              View
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  viewOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {viewOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <Link
                  href="/view/webinars"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  View Webinars
                </Link>

                <Link
                  href="/view/courses"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  View Courses
                </Link>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar (Mobile Menu Button) */}
        <header className="lg:hidden bg-white border-b p-4 shadow-sm">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
        </header>

        <main className="p-6 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}