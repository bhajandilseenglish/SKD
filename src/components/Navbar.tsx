"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Award,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [pathname]);

  const courseLinks = [
    {
      name: "ACCA (Global Chartered Accountant)",
      href: "/acca-coaching-chandigarh",
      badge: "Silver Partner",
      desc: "UK qualification recognized in 180+ countries",
    },
    {
      name: "CA Foundation",
      href: "/ca-foundation-coaching-chandigarh",
      badge: "ICAI Entry",
      desc: "Comprehensive 4-subject entry foundation",
    },
    {
      name: "CA Intermediate",
      href: "/ca-intermediate-coaching-chandigarh",
      badge: "Both Groups",
      desc: "In-depth corporate accounting & taxation",
    },
    {
      name: "CA Final",
      href: "/ca-final-coaching-chandigarh",
      badge: "Advanced",
      desc: "Final frontier mastery for fellow CAs",
    },
    {
      name: "US CMA",
      href: "/us-cma-coaching",
      badge: "6-9 Months",
      desc: "Fastest global finance & FP&A credential",
    },
    {
      name: "US CPA",
      href: "/us-cpa-coaching",
      badge: "AICPA USA",
      desc: "Gold standard American accounting license",
    },
    {
      name: "Corporate Training",
      href: "/corporate-training",
      badge: "Enterprise",
      desc: "Customized IFRS & financial workshops",
    },
  ];

  return (
    <>
      {/* Top Credibility & Contact Bar */}
      <div className="bg-[#10213B] text-white text-xs border-b border-[#183155] py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center text-[#D9A441] font-semibold tracking-wide">
              <Award className="w-3.5 h-3.5 mr-1.5 text-[#D9A441]" />
              Approved ACCA Silver Learning Partner
            </span>
            <span className="text-gray-400">|</span>
            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="inline-flex items-center text-gray-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 mr-1 text-[#2457D6]" />
              {siteConfig.contact.primaryPhone}
            </a>
            <span className="text-gray-400">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center text-gray-200 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 mr-1 text-[#2457D6]" />
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-gray-300">
              <MapPin className="w-3 h-3 mr-1 text-[#D9A441]" />
              Godrej Eternia, Phase 1, Chandigarh
            </span>
            <Link
              href="/admin"
              className="text-gray-400 hover:text-white text-[11px] underline ml-2"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-4 border-b border-[#E5EBF2]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-36 h-12 sm:w-44 sm:h-14">
              <Image
                src="/assets/brand/logo.png"
                alt="SKD Group of Institutions"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 144px, 176px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-[14px] text-[#172B45]">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-[#2457D6] font-semibold bg-[#F5F8FC]"
                  : "hover:text-[#2457D6] hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/about-us"
                  ? "text-[#2457D6] font-semibold bg-[#F5F8FC]"
                  : "hover:text-[#2457D6] hover:bg-gray-50"
              }`}
            >
              About Us
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`px-3 py-2 rounded-lg inline-flex items-center space-x-1 transition-colors ${
                  pathname.includes("coaching") || pathname === "/courses"
                    ? "text-[#2457D6] font-semibold bg-[#F5F8FC]"
                    : "hover:text-[#2457D6] hover:bg-gray-50"
                }`}
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {/* Dropdown Menu */}
              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#E5EBF2] p-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-2 border-b border-gray-100 mb-1 flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#66758C] uppercase tracking-wider">
                      Professional Programs
                    </span>
                    <Link
                      href="/courses"
                      className="text-xs text-[#2457D6] font-semibold hover:underline"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {courseLinks.map((course) => (
                      <Link
                        key={course.href}
                        href={course.href}
                        className="block p-2.5 rounded-lg hover:bg-[#F5F8FC] transition-colors group"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-[#172B45] group-hover:text-[#2457D6]">
                            {course.name}
                          </span>
                          <span className="text-[10px] font-medium bg-blue-50 text-[#2457D6] px-2 py-0.5 rounded-full border border-blue-100">
                            {course.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#66758C] mt-0.5 line-clamp-1">
                          {course.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/results"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/results"
                  ? "text-[#2457D6] font-semibold bg-[#F5F8FC]"
                  : "hover:text-[#2457D6] hover:bg-gray-50"
              }`}
            >
              Results
            </Link>

            <Link
              href="/placements"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/placements"
                  ? "text-[#2457D6] font-semibold bg-[#F5F8FC]"
                  : "hover:text-[#2457D6] hover:bg-gray-50"
              }`}
            >
              Placements
            </Link>

            <Link
              href="/faculty"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/faculty"
                  ? "text-[#2457D6] font-semibold bg-[#F5F8FC]"
                  : "hover:text-[#2457D6] hover:bg-gray-50"
              }`}
            >
              Faculty
            </Link>

            <Link
              href="/gallery"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/gallery"
                  ? "text-[#2457D6] font-semibold bg-[#F5F8FC]"
                  : "hover:text-[#2457D6] hover:bg-gray-50"
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-[#2457D6] font-semibold bg-[#F5F8FC]"
                  : "hover:text-[#2457D6] hover:bg-gray-50"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact-us"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/contact-us"
                  ? "text-[#2457D6] font-semibold bg-[#F5F8FC]"
                  : "hover:text-[#2457D6] hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="inline-flex items-center px-3.5 py-2 text-sm font-semibold text-[#10213B] bg-[#F5F8FC] border border-[#E5EBF2] rounded-lg hover:border-[#2457D6] hover:text-[#2457D6] transition-all"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#2457D6]" />
              Call Mentors
            </a>

            <Link
              href="/admissions"
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-[#2457D6] hover:bg-[#1B45B3] rounded-lg shadow-sm hover:shadow-md transition-all group"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="p-2 text-[#2457D6] bg-blue-50 rounded-lg"
              aria-label="Call SKD"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#172B45] hover:bg-gray-100 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#10213B]" />
              ) : (
                <Menu className="w-6 h-6 text-[#10213B]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E5EBF2] shadow-2xl px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
            {/* Accreditation Badge */}
            <div className="bg-[#10213B] text-white p-3 rounded-xl flex items-center justify-between text-xs">
              <span className="flex items-center text-[#D9A441] font-semibold">
                <Award className="w-4 h-4 mr-1.5 text-[#D9A441]" />
                ACCA Silver Learning Partner
              </span>
              <span className="text-gray-300 text-[11px]">Chandigarh</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 font-medium text-sm">
              <Link
                href="/"
                className="px-3 py-2.5 rounded-lg bg-gray-50 text-[#172B45] hover:bg-blue-50 hover:text-[#2457D6]"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="px-3 py-2.5 rounded-lg bg-gray-50 text-[#172B45] hover:bg-blue-50 hover:text-[#2457D6]"
              >
                About Us
              </Link>
              <Link
                href="/courses"
                className="px-3 py-2.5 rounded-lg bg-gray-50 text-[#172B45] hover:bg-blue-50 hover:text-[#2457D6]"
              >
                All Courses
              </Link>
              <Link
                href="/results"
                className="px-3 py-2.5 rounded-lg bg-gray-50 text-[#172B45] hover:bg-blue-50 hover:text-[#2457D6]"
              >
                Results & Ranks
              </Link>
              <Link
                href="/placements"
                className="px-3 py-2.5 rounded-lg bg-gray-50 text-[#172B45] hover:bg-blue-50 hover:text-[#2457D6]"
              >
                Placements
              </Link>
              <Link
                href="/faculty"
                className="px-3 py-2.5 rounded-lg bg-gray-50 text-[#172B45] hover:bg-blue-50 hover:text-[#2457D6]"
              >
                Faculty
              </Link>
              <Link
                href="/student-testimonials"
                className="px-3 py-2.5 rounded-lg bg-gray-50 text-[#172B45] hover:bg-blue-50 hover:text-[#2457D6]"
              >
                Testimonials
              </Link>
              <Link
                href="/gallery"
                className="px-3 py-2.5 rounded-lg bg-gray-50 text-[#172B45] hover:bg-blue-50 hover:text-[#2457D6]"
              >
                Campus Life
              </Link>
              <Link
                href="/scholarships"
                className="px-3 py-2.5 rounded-lg bg-gray-50 text-[#172B45] hover:bg-blue-50 hover:text-[#2457D6]"
              >
                Scholarships
              </Link>
              <Link
                href="/blog"
                className="px-3 py-2.5 rounded-lg bg-gray-50 text-[#172B45] hover:bg-blue-50 hover:text-[#2457D6]"
              >
                Blog
              </Link>
            </div>

            {/* Course Shortcuts */}
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-bold text-[#66758C] uppercase tracking-wider mb-2">
                Flagship Qualifications
              </p>
              <div className="space-y-1">
                <Link
                  href="/acca-coaching-chandigarh"
                  className="block px-3 py-2 rounded-lg bg-blue-50/50 text-[#2457D6] font-semibold text-xs flex justify-between items-center"
                >
                  <span>ACCA Coaching Chandigarh</span>
                  <span className="text-[10px] bg-[#2457D6] text-white px-2 py-0.5 rounded">Silver ALP</span>
                </Link>
                <Link
                  href="/us-cma-coaching"
                  className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-[#172B45] font-semibold text-xs"
                >
                  US CMA Coaching (6-9 Months)
                </Link>
                <Link
                  href="/us-cpa-coaching"
                  className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-[#172B45] font-semibold text-xs"
                >
                  US CPA Coaching (AICPA Evolution)
                </Link>
                <Link
                  href="/ca-intermediate-coaching-chandigarh"
                  className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-[#172B45] font-semibold text-xs"
                >
                  CA Intermediate Coaching
                </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Link
                href="/admissions"
                className="w-full inline-flex justify-center items-center py-3 bg-[#2457D6] text-white rounded-xl font-bold text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#D9A441]" />
                Book Free Counselling & Apply Now
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  className="inline-flex justify-center items-center py-2.5 bg-gray-100 text-[#172B45] rounded-xl font-semibold text-xs"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#2457D6]" />
                  Call: {siteConfig.contact.primaryPhoneRaw}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-xs"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
