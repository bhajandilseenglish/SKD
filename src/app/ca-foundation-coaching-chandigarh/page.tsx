import React from "react";
import type { Metadata } from "next";
import { coursesData } from "@/data/courses";
import CoursePageTemplate from "@/components/CoursePageTemplate";
import { notFound } from "next/navigation";

const course = coursesData.find((c) => c.slug === "ca-foundation-coaching-chandigarh")!;

export const metadata: Metadata = {
  title: course.metaTitle,
  description: course.metaDescription,
  alternates: {
    canonical: "/ca-foundation-coaching-chandigarh",
  },
  openGraph: {
    title: course.metaTitle,
    description: course.metaDescription,
    url: "https://skdgroupofinstitutions.com/ca-foundation-coaching-chandigarh",
    images: [{ url: course.heroImage, width: 1200, height: 630 }],
  },
};

export default function CaFoundationPage() {
  if (!course) return notFound();
  return <CoursePageTemplate course={course} />;
}
