import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPostsData } from "@/data/blog";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Sparkles } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { siteConfig } from "@/data/siteData";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://skdgroupofinstitutions.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPostsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    image: `https://skdgroupofinstitutions.com${post.coverImage}`,
    datePublished: post.publishedDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: "https://skdgroupofinstitutions.com/assets/brand/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://skdgroupofinstitutions.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-20">
        {/* Post Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-blue-50 text-[#2457D6] rounded-full text-xs font-bold">
              {post.category}
            </span>
            <span className="text-xs text-[#66758C] flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {post.publishedDate}
            </span>
            <span className="text-xs text-[#66758C] flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#10213B] tracking-tight leading-[1.2]">
            {post.title}
          </h1>

          <div className="flex items-center space-x-3 pt-2 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#10213B] text-white flex items-center justify-center font-bold text-sm">
              <User className="w-5 h-5 text-[#D9A441]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#10213B]">{post.author.name}</p>
              <p className="text-xs text-[#66758C]">{post.author.role}</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-[#E5EBF2]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Article Summary Lead */}
        <div className="p-6 bg-[#F5F8FC] rounded-2xl border-l-4 border-[#2457D6] text-base sm:text-lg text-[#172B45] font-medium leading-relaxed">
          {post.summary}
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-[#172B45] leading-relaxed">
          {post.content.map((paragraph, idx) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl sm:text-2xl font-bold text-[#10213B] pt-6 pb-2 border-b border-gray-100"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <div key={idx} className="flex items-start space-x-2.5 my-1.5 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2457D6] shrink-0 mt-2.5" />
                  <p className="text-sm sm:text-base leading-relaxed text-[#172B45]">
                    {paragraph.replace("- ", "")}
                  </p>
                </div>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#66758C]">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Embedded Fast Lead CTA */}
        <div className="bg-[#10213B] text-white p-8 rounded-3xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#183155] text-[#D9A441] rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Speak With The Authors</span>
          </div>
          <h3 className="text-2xl font-bold text-white">
            Have Questions About Professional Course Eligibility or Fees?
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Our academic counselors are available to review your marksheets and recommend the optimal qualification path for you.
          </p>
          <div className="pt-2">
            <EnquiryForm source={`Article: ${post.title}`} compact={true} />
          </div>
        </div>

        {/* Related Articles */}
        <div className="pt-12 border-t border-gray-100 space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#10213B]">
            Recommended Finance Guides
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group block p-5 bg-white rounded-2xl border border-[#E5EBF2] hover:border-[#2457D6] transition-all shadow-sm space-y-3"
              >
                <span className="text-[10px] font-bold text-[#2457D6] bg-blue-50 px-2.5 py-0.5 rounded-full inline-block">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-[#10213B] group-hover:text-[#2457D6] transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#66758C] line-clamp-2">
                  {rel.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-bold text-[#2457D6] hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Back to all guides</span>
          </Link>
        </div>
      </article>
    </>
  );
}
