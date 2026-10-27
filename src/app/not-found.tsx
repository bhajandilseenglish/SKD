import React from "react";
import Link from "next/link";
import { Home, BookOpen, Phone, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-[#F5F8FC] to-white">
      <div className="max-w-xl w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-[#E5EBF2] shadow-xl">
        <span className="text-6xl sm:text-7xl font-extrabold text-[#2457D6] tracking-tight block">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#10213B]">
          Page Not Found
        </h1>

        <p className="text-sm text-[#66758C] leading-relaxed">
          The page you are looking for may have been updated, relocated, or does not exist. Please explore our primary educational programs or return to the homepage.
        </p>

        <div className="p-4 bg-[#F5F8FC] rounded-2xl border border-[#E5EBF2] text-left space-y-2">
          <p className="text-xs font-bold text-[#10213B] uppercase tracking-wider">
            Popular Destinations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <Link
              href="/acca-coaching-chandigarh"
              className="text-[#2457D6] hover:underline font-semibold flex items-center"
            >
              • ACCA Coaching Chandigarh
            </Link>
            <Link
              href="/us-cma-coaching"
              className="text-[#2457D6] hover:underline font-semibold flex items-center"
            >
              • US CMA Coaching
            </Link>
            <Link
              href="/ca-intermediate-coaching-chandigarh"
              className="text-[#2457D6] hover:underline font-semibold flex items-center"
            >
              • CA Intermediate Coaching
            </Link>
            <Link
              href="/contact-us"
              className="text-[#2457D6] hover:underline font-semibold flex items-center"
            >
              • Contact Campus & Directions
            </Link>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 bg-[#2457D6] text-white rounded-xl text-sm font-bold shadow-md hover:bg-[#1B45B3] transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 bg-gray-100 text-[#172B45] rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors"
          >
            <BookOpen className="w-4 h-4 mr-2 text-[#2457D6]" />
            <span>Browse All Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
