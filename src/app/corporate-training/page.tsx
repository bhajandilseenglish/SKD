import React from "react";
import type { Metadata } from "next";
import { coursesData } from "@/data/courses";
import CoursePageTemplate from "@/components/CoursePageTemplate";
import { notFound } from "next/navigation";

const course = coursesData.find((c) => c.slug === "corporate-training")!;

export const metadata: Metadata = {
  title: course.metaTitle,
  description: course.metaDescription,
  alternates: {
    canonical: "/corporate-training",
  },
  openGraph: {
    title: course.metaTitle,
    description: course.metaDescription,
    url: "https://skdgroupofinstitutions.com/corporate-training",
    images: [{ url: course.heroImage, width: 1200, height: 630 }],
  },
};

export default function CorporateTrainingPage() {
  if (!course) return notFound();
  return <CoursePageTemplate course={course} />;
}
