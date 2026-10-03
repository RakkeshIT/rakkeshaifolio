import type { Metadata } from "next";
import BlogDashboard from "../components/pages/Blogs/BlogDashboard";

export const metadata: Metadata = {
  title: "Blogs | Rakkesh Kumar J",
  description:
    "Thoughts, learnings and tech journey — practical tips, tutorials, notes and personal experiences on web development, AI and career growth.",
};

export default function BlogsPage() {
  return <BlogDashboard />;
}
