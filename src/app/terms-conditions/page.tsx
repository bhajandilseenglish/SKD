import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms & Conditions | SKD Group of Institutions",
  description: "Terms and conditions for enrolling in educational courses at SKD Group of Institutions.",
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Terms & Conditions" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 pb-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#10213B]">
          Terms & Conditions
        </h1>
        <p className="text-xs text-gray-500">Effective Date: October 2026</p>

        <div className="space-y-6 text-sm text-[#172B45] leading-relaxed">
          <p>
            Welcome to <strong>{siteConfig.name}</strong>. By accessing this website or enrolling in our classroom or online coaching batches, you agree to comply with and be bound by the following institutional terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-[#10213B] pt-4">1. Educational Services</h2>
          <p>
            SKD Group of Institutions provides coaching, exam preparation, CBE simulation, and educational mentorship for professional qualifications including ACCA, CA, US CMA, and US CPA. Professional designations and certifications are awarded exclusively by their respective statutory governing bodies (such as ACCA Global, ICAI, IMA USA, and AICPA/NASBA) upon candidates fulfilling all official examination and practical experience requirements.
          </p>

          <h2 className="text-xl font-bold text-[#10213B] pt-4">2. Admissions & Fees</h2>
          <p>
            Tuition fees cover instructional lectures, internal class notes, faculty doubt clinics, and diagnostic mock evaluations as agreed upon enrolment. Official exam registration fees, annual student subscriptions, and exemption evaluation fees charged by external awarding bodies are separate and paid directly to those respective organizations.
          </p>

          <h2 className="text-xl font-bold text-[#10213B] pt-4">3. Academic Conduct & Attendance</h2>
          <p>
            Students are expected to maintain at least 80% attendance, complete assigned chapter test assignments, and behave respectfully towards faculty and fellow students.
          </p>

          <h2 className="text-xl font-bold text-[#10213B] pt-4">4. Intellectual Property</h2>
          <p>
            All course presentations, mock exam question compilations, and proprietary summary notes distributed by SKD Group of Institutions are protected by intellectual property laws and intended solely for personal study by enrolled students.
          </p>
        </div>
      </div>
    </>
  );
}
