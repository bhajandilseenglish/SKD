import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { coursesData } from "@/data/courses";
import Breadcrumb from "@/components/Breadcrumb";
import { BookOpen, Clock, Compass, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Professional Accounting & Finance Courses in Chandigarh | SKD Group",
  description:
    "Explore professional finance qualifications at SKD Group of Institutions: ACCA, CA Foundation, CA Intermediate, CA Final, US CMA, and US CPA with expert faculty and CBE testing.",
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Professional Courses" }]} />

      <div className="space-y-16 pb-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-12 border-b border-[#E5EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-[#2457D6] rounded-full text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>International & National Qualifications</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10213B] tracking-tight">
              Professional Finance & Accounting Courses
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              Accelerate your accounting career with premier qualifications recognized by top multinational enterprises, Big 4 firms, and statutory regulatory bodies.
            </p>
          </div>
        </section>

        {/* All Courses Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course) => (
              <div
                key={course.slug}
                className="bg-white rounded-2xl border border-[#E5EBF2] overflow-hidden card-shadow card-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={course.cardImage}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#10213B]/90 backdrop-blur-md text-white text-[11px] font-bold rounded-lg border border-white/20">
                        {course.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h2 className="text-lg font-bold text-[#10213B] leading-snug">
                      {course.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#66758C] line-clamp-3 leading-relaxed">
                      {course.overview}
                    </p>

                    <div className="pt-2 border-t border-gray-100 space-y-1.5 text-xs text-[#172B45]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#66758C] flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1.5 text-[#2457D6]" /> Duration:
                        </span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#66758C] flex items-center">
                          <Compass className="w-3.5 h-3.5 mr-1.5 text-[#D9A441]" /> Mode:
                        </span>
                        <span className="font-semibold">{course.modes.split("&")[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/${course.slug}`}
                    className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl bg-[#2457D6] hover:bg-[#1B45B3] text-white font-bold text-xs sm:text-sm transition-colors group"
                  >
                    <span>View Complete Syllabus & Exam Pattern</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admissions Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Courses Directory Page" />
        </section>
      </div>
    </>
  );
}
