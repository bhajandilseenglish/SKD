import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { facultyData } from "@/data/faculty";
import { Users, Award, BookOpen, CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Faculty & Mentors | SKD Group of Institutions Chandigarh",
  description:
    "Meet our qualified Chartered Accountants, ACCA members, and US CMAs. Learn from experienced industry faculties at SKD Group Chandigarh.",
  alternates: {
    canonical: "/faculty",
  },
};

export default function FacultyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Faculty & Mentors" }]} />

      <div className="space-y-16 pb-20">
        <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-14 border-b border-[#E5EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-[#2457D6] rounded-full text-xs font-semibold mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Qualified Accounting & Finance Educators</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10213B] tracking-tight">
              Our Faculty & Mentors
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              We believe great mentors make difficult professional concepts effortless. Every faculty member at SKD brings genuine subject mastery, statutory credentials, and a passion for teaching.
            </p>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyData.map((f) => (
              <div
                key={f.id}
                className="bg-white rounded-3xl border border-[#E5EBF2] p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden shrink-0 shadow-md bg-slate-100">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <span className="text-xs font-bold text-[#2457D6] uppercase tracking-wider block mb-1">
                      {f.qualifications}
                    </span>
                    <h3 className="text-xl font-bold text-[#10213B]">{f.name}</h3>
                    <p className="text-xs font-semibold text-[#66758C]">{f.designation}</p>
                    <p className="text-xs text-amber-600 font-medium mt-0.5">{f.experience}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#172B45] leading-relaxed">
                    {f.bio}
                  </p>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Subject Specializations:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {f.expertise.map((exp, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 bg-[#F5F8FC] border border-[#E5EBF2] text-[11px] font-medium text-[#172B45] rounded-full"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Faculty Page" />
        </section>
      </div>
    </>
  );
}
