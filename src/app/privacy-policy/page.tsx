import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy | SKD Group of Institutions",
  description: "Privacy policy and student data protection terms for SKD Group of Institutions.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 pb-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#10213B]">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500">Effective Date: October 2026</p>

        <div className="space-y-6 text-sm text-[#172B45] leading-relaxed">
          <p>
            At <strong>{siteConfig.name}</strong>, accessible from https://skdgroupofinstitutions.com, we are committed to protecting the privacy and personal data of prospective students, enrolled candidates, and visitors.
          </p>

          <h2 className="text-xl font-bold text-[#10213B] pt-4">1. Information We Collect</h2>
          <p>
            When you register an admission enquiry, request counselling, or enroll in our courses, we may collect your:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full Name</li>
            <li>Telephone & Mobile Contact Number</li>
            <li>Email Address</li>
            <li>City and State of Residence</li>
            <li>Educational Qualifications & Course of Interest</li>
          </ul>

          <h2 className="text-xl font-bold text-[#10213B] pt-4">2. Purpose of Data Use</h2>
          <p>
            We use your personal data exclusively to provide educational counselling, answer inquiries, schedule trial classes, administer examinations, and inform you of upcoming batch schedules and scholarship deadlines. We never sell, rent, or trade your personal data to third-party marketing companies.
          </p>

          <h2 className="text-xl font-bold text-[#10213B] pt-4">3. Data Security & Storage</h2>
          <p>
            All submitted enquiries are stored in secure databases with restricted administrative access. Our servers implement modern encryption protocols to prevent unauthorized interception.
          </p>

          <h2 className="text-xl font-bold text-[#10213B] pt-4">4. Contact Our Data Desk</h2>
          <p>
            If you have any questions or wish to request the removal of your contact details from our counselling database, please contact our administrative desk at:
          </p>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs">
            <p><strong>{siteConfig.name}</strong></p>
            <p>{siteConfig.address.full}</p>
            <p>Email: {siteConfig.contact.email}</p>
            <p>Phone: {siteConfig.contact.primaryPhone}</p>
          </div>
        </div>
      </div>
    </>
  );
}
