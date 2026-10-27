import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { testimonialsData } from "@/data/testimonials";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Student Testimonials & Reviews | SKD Group of Institutions Chandigarh",
  description:
    "Read genuine reviews and success stories from ACCA, CA, and US CMA students at SKD Group of Institutions in Chandigarh.",
  alternates: {
    canonical: "/student-testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Student Testimonials" }]} />

      <div className="space-y-16 pb-20">
        <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-14 border-b border-[#E5EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 text-[#D9A441] rounded-full text-xs font-semibold mb-3">
              <Star className="w-3.5 h-3.5 fill-[#D9A441]" />
              <span>Authentic Student Experiences</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10213B] tracking-tight">
              Student Testimonials & Reviews
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              Read authentic feedback from students who attended classroom coaching at Godrej Eternia, Chandigarh and through our live interactive online batches.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="bg-white p-8 rounded-3xl border border-[#E5EBF2] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-[#D9A441]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D9A441]" />
                      ))}
                    </div>
                    <span className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                      Verified Student
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#172B45] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-100">
                    <Image
                      src={t.image || "/assets/images/Teach-Img-2.jpg"}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#10213B]">{t.name}</h4>
                    <p className="text-xs text-[#2457D6] font-semibold">{t.course}</p>
                    <p className="text-[11px] text-[#66758C]">
                      {t.achievement} {t.placedAt ? `• ${t.placedAt}` : ""} • {t.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Testimonials Page" />
        </section>
      </div>
    </>
  );
}
