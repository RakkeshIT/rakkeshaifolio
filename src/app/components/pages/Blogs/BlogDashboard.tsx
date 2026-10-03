"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  Mail,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { blogPosts } from "./Data";
import { formatDate } from "./utils";
import heroIllustration from "../../assets/blog-ui-assets-complete/hero/developer-laptop-hero.png";
import gridPattern from "../../assets/blog-ui-assets-complete/backgrounds/grid.svg";
import glowBlue from "../../assets/blog-ui-assets-complete/backgrounds/glow-orb-blue.svg";
import glowPurple from "../../assets/blog-ui-assets-complete/backgrounds/glow-orb-purple.svg";

const PAGE_SIZE = 6;

const CATEGORY_COLORS: Record<string, string> = {
  "Web Development": "bg-blue-100 text-blue-700",
  JavaScript: "bg-yellow-100 text-yellow-700",
  React: "bg-cyan-100 text-cyan-700",
  Python: "bg-emerald-100 text-emerald-700",
  AI: "bg-purple-100 text-purple-700",
  Career: "bg-orange-100 text-orange-700",
  Others: "bg-slate-100 text-slate-700",
};

type BlogPost = (typeof blogPosts)[number];

const BlogDashboard = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const set = new Set(blogPosts.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogPosts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();

    const result = blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesSearch =
        !term ||
        post.title.toLowerCase().includes(term) ||
        post.description.toLowerCase().includes(term) ||
        post.tags.some((tag) => tag.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });

    return [...result].sort((a, b) => {
      const diff =
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      return sortOrder === "newest" ? -diff : diff;
    });
  }, [activeCategory, search, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const latestPosts = useMemo(
    () =>
      [...blogPosts]
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
        .slice(0, 5),
    []
  );

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#2563eb] transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#07142d] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <Image
            src={gridPattern}
            alt=""
            fill
            className="object-cover opacity-20 pointer-events-none select-none"
          />
          <Image
            src={glowBlue}
            alt=""
            width={400}
            height={400}
            className="absolute -top-20 -right-10 sm:right-10 opacity-60 pointer-events-none select-none"
          />
          <Image
            src={glowPurple}
            alt=""
            width={350}
            height={350}
            className="absolute bottom-[-60px] left-1/3 opacity-50 pointer-events-none select-none"
          />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#22d3ee] uppercase mb-3">
                My Blogs
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Thoughts, Learnings &{" "}
                <span className="bg-gradient-to-r from-[#6366f1] to-[#7c3aed] bg-clip-text text-transparent">
                  Tech Journey
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                I write about web development, AI, productivity and my
                learning journey. Here you&apos;ll find practical tips,
                tutorials, notes and personal experiences.
              </p>
            </div>

            <div className="relative hidden sm:block">
              <div className="relative w-full aspect-[1536/580] rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src={heroIllustration}
                  alt="Developer workspace illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                activeCategory === category
                  ? "bg-[#2563eb] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#2563eb]/40 hover:text-[#2563eb]"
              }`}
            >
              {category}
            </button>
          ))}

          <div className="ml-auto relative">
            <select
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(e.target.value as "newest" | "oldest")
              }
              className="appearance-none pl-3 pr-8 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-slate-200 text-slate-600 cursor-pointer focus:outline-none focus:border-[#2563eb]/40"
            >
              <option value="newest">Latest First</option>
              <option value="oldest">Oldest First</option>
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Posts Grid */}
          <div>
            {paginatedPosts.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-2xl border border-slate-100">
                <p className="text-slate-500">
                  No blog posts match your search yet.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 disabled:opacity-40 hover:border-[#2563eb]/40"
                >
                  <ChevronLeft size={16} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition ${
                        n === currentPage
                          ? "bg-[#2563eb] text-white"
                          : "text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      {n}
                    </button>
                  )
                )}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 disabled:opacity-40 hover:border-[#2563eb]/40"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 sm:space-y-6">
            {/* Search */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search blogs..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#2563eb]/40"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-4">
                <Tag size={16} className="text-[#2563eb]" />
                Categories
              </h3>
              <ul className="space-y-2.5">
                {Object.keys(categoryCounts).map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="w-full flex items-center justify-between text-sm text-slate-600 hover:text-[#2563eb] transition"
                    >
                      <span>{category}</span>
                      <span className="text-xs font-semibold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                        {categoryCounts[category]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-4">
                <Clock size={16} className="text-[#2563eb]" />
                Latest Posts
              </h3>
              <ul className="space-y-4">
                {latestPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-700 line-clamp-2 group-hover:text-[#2563eb] transition">
                          {post.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {formatDate(post.publishedAt)}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Let's Connect */}
            <div className="bg-[#07142d] rounded-2xl p-5 text-white">
              <h3 className="flex items-center gap-2 text-sm font-semibold mb-2">
                <Mail size={16} className="text-[#22d3ee]" />
                Let&apos;s Connect
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Have a project in mind or just want to say hi? Feel free to
                reach out!
              </p>
              <a
                href="mailto:rakkeshit@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-[#07142d] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full hover:bg-slate-100 transition"
              >
                Contact Me
                <ArrowRight size={14} />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

function BlogCard({ post }: { post: BlogPost }) {
  const badgeClass =
    CATEGORY_COLORS[post.category] || "bg-slate-100 text-slate-700";

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <span
          className={`self-start text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3 ${badgeClass}`}
        >
          {post.category}
        </span>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#2563eb] transition">
          {post.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">
          {post.description}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {post.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogDashboard;
