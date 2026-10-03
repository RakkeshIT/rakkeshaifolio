"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag, User } from "lucide-react";

import { blogPosts } from "@/app/components/pages/Blogs/Data";
import { formatDate } from "@/app/components/pages/Blogs/utils";
import BlogContent from "@/app/components/pages/Blogs/BlogContent";
import BlogKits from "@/app/components/pages/Blogs/BlogKits";
import BlogReactions from "@/app/components/pages/Blogs/BlogReactions";

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.slug === id || String(p.id) === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-6">
        <p className="text-slate-500 mb-4">Blog post not found.</p>
        <Link
          href="/blogs"
          className="text-[#2563eb] font-medium hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-[#07142d] text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 pb-6 sm:pb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition"
          >
            ← Back to Blogs
          </Link>

          <span className="inline-block mt-5 sm:mt-6 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#2563eb]/20 text-[#93c5fd]">
            {post.category}
          </span>

          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight break-words">
            {post.title}
          </h1>

          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {post.author.name} · {post.author.role}
            </span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-5 sm:mt-7">
        <div className="relative h-44 sm:h-64 md:h-80 lg:h-96 w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
          {post.description}
        </p>

        {post.content.map((block, i) => (
          <BlogContent key={i} block={block} />
        ))}

        <BlogKits kits={post.kits} />

        <BlogReactions />

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500"
            >
              <Tag size={11} />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#2563eb] font-medium hover:underline"
          >
            ← Back to all blogs
          </Link>
        </div>
      </article>
    </div>
  );
}
