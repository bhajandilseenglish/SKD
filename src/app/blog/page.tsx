import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPostsData } from "@/data/blog";
import { BookOpen, Clock, Calendar, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "ACCA & Finance Education Blog | SKD Group of Institutions Chandigarh",
  description:
    "Read comprehensive student guides on ACCA eligibility, course fees in India, exam structures, CA vs ACCA, and global finance careers.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog & Resource Guides" }]} />

      <div className="space-y-16 pb-20">
        <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-14 border-b border-[#E5EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-[#2457D6] rounded-full text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Expert Finance Guides & Research</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10213B] tracking-tight">
              SKD Knowledge Hub
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              In-depth research, syllabus breakdowns, exam strategies, and career blueprints written by our senior finance educators.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-[#E5EBF2] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#10213B]/90 backdrop-blur-md text-white text-[11px] font-bold rounded-lg border border-white/20">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-xs text-[#66758C]">
                      <span>{post.publishedDate}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-lg font-bold text-[#10213B] hover:text-[#2457D6] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#66758C] line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <User className="w-3.5 h-3.5 text-[#2457D6]" />
                    <span>{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#2457D6] hover:text-[#1B45B3] group"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
