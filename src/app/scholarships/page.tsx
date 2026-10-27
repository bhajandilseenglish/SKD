import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { Award, CheckCircle2, Sparkles, GraduationCap } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Scholarships & Fee Concessions | SKD Group of Institutions Chandigarh",
  description:
    "Explore merit-based scholarships and fee waivers for ACCA and finance qualifications at SKD Group of Institutions Chandigarh.",
  alternates: {
    canonical: "/scholarships",
  },
};

export default function ScholarshipsPage() {
  const scholarships = [
    {
      title: "Class 12th Board Merit Scholarship",
      discount: "Up to 25% Tuition Fee Waiver",
      eligibility: "Students scoring 90%+ aggregate marks in 10+2 CBSE, ICSE, or State Board examinations.",
      description: "Encouraging high-achieving high school graduates to pursue international finance early.",
    },
    {
      title: "ACCA Global Approved Partner Concession",
      discount: "Discounted Official Registration & Exemption Fees",
      eligibility: "Available to all students enrolling via SKD as an Approved Silver Learning Partner.",
      description: "Special institutional campaign waivers reducing expensive UK Pound fees.",
    },
    {
      title: "CA Inter Fast-Track Scholarship",
      discount: "Up to 30% Course Fee Waiver",
      eligibility: "Candidates who have cleared Single Group or Both Groups of ICAI CA Intermediate.",
      description: "Fast-track your global qualification with credit exemptions and customized pricing.",
    },
    {
      title: "College Rank Holder Scholarship",
      discount: "Up to 20% Tuition Fee Waiver",
      eligibility: "Top 3 rankers in B.Com, BBA, or M.Com from recognized universities across Punjab, Haryana & Chandigarh.",
      description: "Recognizing academic excellence in commerce degree programs.",
    },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "Scholarships" }]} />

      <div className="space-y-16 pb-20">
        <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-14 border-b border-[#E5EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 text-[#D9A441] rounded-full text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Merit-Based Financial Support</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10213B] tracking-tight">
              Scholarships & Fee Concessions
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              SKD Group of Institutions believes financial constraints should never limit ambitious students from achieving global credentials.
            </p>
          </div>
        </section>

        {/* Scholarship Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarships.map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#E5EBF2] shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-[#D9A441] bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                      Merit Award
                    </span>
                    <span className="text-xs font-extrabold text-[#2457D6] bg-blue-50 px-3 py-1 rounded-full">
                      {s.discount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#10213B]">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-[#66758C] leading-relaxed">
                    {s.description}
                  </p>

                  <div className="p-4 bg-[#F5F8FC] rounded-xl border border-[#E5EBF2] text-xs text-[#172B45]">
                    <strong className="block text-[#10213B] font-bold mb-1">Eligibility Criteria:</strong>
                    {s.eligibility}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs text-[#2457D6] font-semibold">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
                  <span>Verified upon marksheet verification during admission</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Scholarships Page" />
        </section>
      </div>
    </>
  );
}
