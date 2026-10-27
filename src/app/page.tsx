import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  Users,
  BookOpen,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Calendar,
  Building,
  Target,
  FileCheck,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";
import { coursesData } from "@/data/courses";
import { facultyData } from "@/data/faculty";
import { testimonialsData, resultsData } from "@/data/testimonials";
import { blogPostsData } from "@/data/blog";
import { galleryData } from "@/data/gallery";
import EnquiryForm from "@/components/EnquiryForm";

export default function HomePage() {
  const featuredBlogPosts = blogPostsData.slice(0, 3);
  const galleryPreview = galleryData.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* SECTION B: HIGH-IMPACT HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-white to-white pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-[#E5EBF2]">
        {/* Subtle Background Glow Accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-50/50 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Institutional Credibility Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#10213B] text-white rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                <Award className="w-4 h-4 text-[#D9A441]" />
                <span className="text-[#D9A441]">Approved ACCA Silver Learning Partner</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-200">Chandigarh</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#10213B] tracking-tight leading-[1.15]">
                Your Ambition. <br className="hidden sm:inline" />
                Our Expertise. <br className="hidden sm:inline" />
                <span className="text-[#2457D6] bg-gradient-to-r from-[#2457D6] to-[#1B45B3] bg-clip-text text-transparent">
                  Your Global Future.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#66758C] leading-relaxed max-w-2xl">
                Build your future in accounting, finance and global business with professional{" "}
                <strong className="text-[#172B45] font-semibold">ACCA, CA, US CMA</strong> and{" "}
                <strong className="text-[#172B45] font-semibold">US CPA</strong> training at SKD Group of Institutions in Chandigarh.
              </p>

              {/* Key Highlights Quick Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#172B45] font-medium pt-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2457D6] shrink-0" />
                  <span>Approved CBE Exam Practice Platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2457D6] shrink-0" />
                  <span>Classroom at Godrej Eternia & Live Online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2457D6] shrink-0" />
                  <span>Mentorship by Qualified CAs, ACCAs & CMAs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2457D6] shrink-0" />
                  <span>Dedicated Big 4 & Corporate Placement Cell</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Link
                  href="/courses"
                  className="inline-flex justify-center items-center px-7 py-4 bg-[#2457D6] hover:bg-[#1B45B3] text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all text-base group"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/admissions"
                  className="inline-flex justify-center items-center px-7 py-4 bg-white hover:bg-gray-50 text-[#10213B] font-bold rounded-xl border border-[#E5EBF2] hover:border-[#2457D6] transition-all text-base shadow-sm"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-[#D9A441]" />
                  <span>Book Free Counselling</span>
                </Link>
              </div>

              {/* Fast Direct Call Bar */}
              <div className="pt-2 flex items-center space-x-3 text-xs sm:text-sm text-[#66758C]">
                <span>Immediate enquiry?</span>
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  className="font-bold text-[#10213B] hover:text-[#2457D6] flex items-center underline"
                >
                  <Phone className="w-3.5 h-3.5 mr-1 text-[#2457D6]" />
                  Call {siteConfig.contact.primaryPhone}
                </a>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Photo Container */}
                <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/assets/images/Teach-Img-2.jpg"
                    alt="Indian students in professional finance lecture at SKD Group Chandigarh"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10213B]/80 via-transparent to-transparent" />

                  {/* Overlay Bottom Banner */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#E5EBF2]">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-blue-50 text-[#2457D6] rounded-xl shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-[#66758C] font-medium">Campus Location</p>
                        <h4 className="text-sm font-bold text-[#10213B]">
                          Godrej Eternia, Phase 1, Chandigarh
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Trust Card Top Right */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#E5EBF2] hidden sm:flex items-center space-x-3 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-[#D9A441] shrink-0 font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#66758C] uppercase font-bold tracking-wider block">
                      Accreditation
                    </span>
                    <span className="text-xs font-bold text-[#10213B]">
                      ACCA Silver Partner
                    </span>
                  </div>
                </div>

                {/* Floating Metric Card Bottom Left */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-[#E5EBF2] hidden sm:flex items-center space-x-3 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2457D6] shrink-0 font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-lg font-extrabold text-[#10213B] leading-none block">
                      85%+
                    </span>
                    <span className="text-[11px] text-[#66758C]">
                      Batch Pass Percentage
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: TRUST & CREDENTIALS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10213B] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2457D6]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#183155]">
            <div className="pt-4 md:pt-0 md:px-4 text-center">
              <span className="block text-2xl sm:text-4xl font-extrabold text-[#D9A441] mb-1">
                Silver Partner
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-white">
                Approved ACCA Status
              </span>
              <span className="block text-[11px] text-gray-400 mt-1">
                Audited & verified learning partner
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 text-center">
              <span className="block text-2xl sm:text-4xl font-extrabold text-white mb-1">
                85%+
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-white">
                Consistent Pass Rate
              </span>
              <span className="block text-[11px] text-gray-400 mt-1">
                Higher than ACCA global averages
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 text-center">
              <span className="block text-2xl sm:text-4xl font-extrabold text-white mb-1">
                100%
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-white">
                Qualified Mentors
              </span>
              <span className="block text-[11px] text-gray-400 mt-1">
                Taught by practicing CAs, ACCAs & CMAs
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 text-center">
              <span className="block text-2xl sm:text-4xl font-extrabold text-[#D9A441] mb-1">
                100%
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-white">
                Placement Support
              </span>
              <span className="block text-[11px] text-gray-400 mt-1">
                Big 4 & corporate interview drives
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: OUR PROFESSIONAL PROGRAMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-[#2457D6] rounded-full text-xs font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Career-Focused Curriculum</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10213B] tracking-tight">
              Our Professional Programs
            </h2>
            <p className="text-sm sm:text-base text-[#66758C] mt-2 max-w-2xl">
              From global credentials (ACCA, US CMA, US CPA) to Indian Chartered Accountancy (CA), explore courses designed for serious finance leadership.
            </p>
          </div>

          <Link
            href="/courses"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-[#2457D6] hover:text-[#1B45B3] group"
          >
            <span>View All Programs & Syllabus</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.slug}
              className="bg-white rounded-2xl border border-[#E5EBF2] overflow-hidden card-shadow card-shadow-hover flex flex-col justify-between"
            >
              <div>
                {/* Course Card Image with Badges */}
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={course.cardImage}
                    alt={`${course.title} at SKD Group Chandigarh`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-[#10213B]/90 backdrop-blur-md text-white text-[11px] font-bold rounded-lg border border-white/20">
                      {course.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-gray-200 block">
                      Awarded by: {course.awardingBody}
                    </span>
                  </div>
                </div>

                {/* Course Card Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#10213B] group-hover:text-[#2457D6] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#66758C] line-clamp-3 leading-relaxed">
                    {course.overview}
                  </p>

                  <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-[#172B45]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#66758C] flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1.5 text-[#2457D6]" />
                        Duration:
                      </span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#66758C] flex items-center">
                        <Compass className="w-3.5 h-3.5 mr-1.5 text-[#D9A441]" />
                        Learning Mode:
                      </span>
                      <span className="font-semibold">Classroom & Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <Link
                  href={`/${course.slug}`}
                  className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl bg-[#F5F8FC] hover:bg-[#2457D6] text-[#10213B] hover:text-white font-bold text-xs sm:text-sm border border-[#E5EBF2] hover:border-transparent transition-all group"
                >
                  <span>Explore Course & Syllabus</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION E: WHY CHOOSE SKD? */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 border-y border-[#E5EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-100 text-[#2457D6] rounded-full text-xs font-semibold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Institutional Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10213B] tracking-tight">
              Why Students Choose SKD Group of Institutions
            </h2>
            <p className="text-sm sm:text-base text-[#66758C] mt-2">
              We combine academic rigor with genuine mentorship, providing students in Chandigarh and across India with a reliable launchpad to global accounting careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#E5EBF2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2457D6] flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10213B] mb-2">
                Expert Accounting & Finance Mentors
              </h3>
              <p className="text-sm text-[#66758C] leading-relaxed">
                Learn directly from qualified Chartered Accountants, ACCA members, and US CMAs with extensive industry and teaching experience.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E5EBF2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D9A441] flex items-center justify-center mb-5">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10213B] mb-2">
                Classroom & Live Interactive Online
              </h3>
              <p className="text-sm text-[#66758C] leading-relaxed">
                Attend face-to-face sessions at Godrej Eternia, Phase 1 Chandigarh, or join interactive live online classes with full lecture backups.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E5EBF2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10213B] mb-2">
                Structured CBE Exam Preparation
              </h3>
              <p className="text-sm text-[#66758C] leading-relaxed">
                Practice on computer-based exam simulator software replicating the official ACCA and Prometric testing environments.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E5EBF2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10213B] mb-2">
                Personalized 1-on-1 Student Guidance
              </h3>
              <p className="text-sm text-[#66758C] leading-relaxed">
                Never get lost in crowded batches. Enjoy dedicated 1-on-1 doubt clinics, custom study plans, and continuous progress diagnostics.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E5EBF2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2457D6] flex items-center justify-center mb-5">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10213B] mb-2">
                Industry-Oriented Learning
              </h3>
              <p className="text-sm text-[#66758C] leading-relaxed">
                Beyond textbook theory, master real-world IFRS balance sheets, Ind AS transitions, financial modeling in Excel, and tax computations.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E5EBF2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D9A441] flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10213B] mb-2">
                Career & Placement Assistance
              </h3>
              <p className="text-sm text-[#66758C] leading-relaxed">
                Resume enhancement, technical mock interviews, and corporate connections targeting Big 4 and MNC financial capability centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: LEARNING EXPERIENCE & EDITORIAL SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-[#2457D6] rounded-full text-xs font-semibold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Experience</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10213B] tracking-tight">
              Where Rigorous Pedagogy Meets Real-World Practice
            </h2>

            <p className="text-sm sm:text-base text-[#66758C] leading-relaxed">
              At SKD Group of Institutions, we believe professional examinations cannot be cracked through passive video watching. Our classroom environment fosters active debate, line-by-line financial statement dissection, and real-time problem solving.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-blue-50 text-[#2457D6] mt-1 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#10213B]">
                    Faculty-Led Interactive Workshops
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66758C]">
                    Engage directly with experienced faculties during live sessions to solve complex multi-disciplinary scenarios.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-blue-50 text-[#2457D6] mt-1 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#10213B]">
                    Dedicated Finance Computer Lab
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66758C]">
                    High-speed workstations equipped with official CBE software for realistic exam rehearsals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-blue-50 text-[#2457D6] mt-1 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#10213B]">
                    100-Mark Pre-Exam Diagnostic Mocks
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66758C]">
                    Timed simulated examinations corrected by faculties with comprehensive rubric feedback before every exam window.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center text-sm font-bold text-[#2457D6] hover:text-[#1B45B3] group"
              >
                <span>Discover More About Our Campus & Philosophy</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/images/Teach-Img-4.jpg"
                  alt="Faculty mentoring student at SKD"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 250px"
                />
              </div>
              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/images/event12.png"
                  alt="SKD student seminar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 250px"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/images/cmaaa.jpg"
                  alt="Finance classroom learning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 250px"
                />
              </div>
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/images/cpa-1.jpg"
                  alt="US CPA lecture at SKD Chandigarh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 250px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: RESULTS & STUDENT ACHIEVEMENTS */}
      <section className="bg-[#10213B] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#183155] text-[#D9A441] rounded-full text-xs font-semibold mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Performance Track Record</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                SKD Results: Proof, Not Promises
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-2xl">
                Every exam window, our students consistently exceed global pass benchmarks through disciplined preparation and expert feedback.
              </p>
            </div>

            <Link
              href="/results"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-[#D9A441] hover:text-white group"
            >
              <span>View Verified Results Archive</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resultsData.map((res) => (
              <div
                key={res.id}
                className="bg-[#183155] rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-[#D9A441] font-bold uppercase tracking-wider">
                      {res.examSession}
                    </span>
                    <span className="px-2.5 py-1 bg-[#2457D6] text-white text-[11px] font-bold rounded-full">
                      {res.passPercentage}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {res.qualification}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                    {res.highlight}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      Subject Top Scorers:
                    </p>
                    {res.topScorers.map((scorer, i) => (
                      <div key={i} className="flex justify-between items-center text-xs">
                        <span className="text-gray-200">{scorer.paper}</span>
                        <span className="font-bold text-[#D9A441]">{scorer.score}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/results"
                    className="text-xs font-semibold text-gray-300 hover:text-white flex items-center"
                  >
                    <span>Read session analysis</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 text-[#D9A441]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: CAREER OPPORTUNITIES & GLOBAL PATHWAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-[#2457D6] rounded-full text-xs font-semibold mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>High-Demand Finance Roles</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10213B] tracking-tight">
            Career Pathways After Professional Certification
          </h2>
          <p className="text-sm sm:text-base text-[#66758C] mt-2">
            Global qualifications unlock leadership opportunities across top audit firms, multinational capability centres, and corporate finance departments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#E5EBF2] hover:border-[#2457D6] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2457D6] flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#10213B] mb-1.5">
              Statutory & Global Audit
            </h3>
            <p className="text-xs text-[#66758C] leading-relaxed">
              Evaluating financial statements under IFRS and US GAAP, verifying internal control structures in Big 4 and global assurance practices.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E5EBF2] hover:border-[#2457D6] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D9A441] flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#10213B] mb-1.5">
              FP&A & Financial Modeling
            </h3>
            <p className="text-xs text-[#66758C] leading-relaxed">
              Driving corporate forecasting, strategic budgeting, quarterly variance analysis, and executive management dashboards.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E5EBF2] hover:border-[#2457D6] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#10213B] mb-1.5">
              International Tax & Transfer Pricing
            </h3>
            <p className="text-xs text-[#66758C] leading-relaxed">
              Managing cross-border tax compliance, bilateral treaty relief, and transfer pricing benchmarks for multinational corporations.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E5EBF2] hover:border-[#2457D6] transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#10213B] mb-1.5">
              Global Financial Leadership
            </h3>
            <p className="text-xs text-[#66758C] leading-relaxed">
              Progress from senior analyst to corporate controller, finance director, and Chief Financial Officer (CFO).
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/placements"
            className="inline-flex items-center px-6 py-3 bg-[#F5F8FC] hover:bg-[#2457D6] text-[#10213B] hover:text-white font-bold text-xs sm:text-sm rounded-xl border border-[#E5EBF2] transition-colors group"
          >
            <span>Explore Placement Assistance & Alumni Career Support</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* SECTION I: FACULTY & MENTORS */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 border-y border-[#E5EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-100 text-[#2457D6] rounded-full text-xs font-semibold mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Academic Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10213B] tracking-tight">
                Meet Our Expert Mentors
              </h2>
              <p className="text-sm sm:text-base text-[#66758C] mt-2 max-w-2xl">
                Our faculty members are practicing professionals with qualifications from ICAI, ACCA UK, and IMA USA.
              </p>
            </div>

            <Link
              href="/faculty"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-[#2457D6] hover:text-[#1B45B3] group"
            >
              <span>View All Faculty Members</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.map((f) => (
              <div
                key={f.id}
                className="bg-white rounded-2xl border border-[#E5EBF2] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-100">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 250px"
                    />
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-bold text-[#2457D6] uppercase tracking-wider block">
                      {f.qualifications}
                    </span>
                    <h3 className="text-base font-bold text-[#10213B] leading-tight">
                      {f.name}
                    </h3>
                    <p className="text-xs text-[#66758C] font-medium">{f.designation}</p>

                    <div className="pt-2 text-[11px] text-[#172B45] space-y-1">
                      <p className="text-gray-500">{f.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href="/faculty"
                    className="text-xs font-semibold text-[#2457D6] hover:underline flex items-center"
                  >
                    <span>View full bio</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION J: STUDENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 text-[#D9A441] rounded-full text-xs font-semibold mb-2">
            <Star className="w-3.5 h-3.5 fill-[#D9A441]" />
            <span>Authentic Student Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10213B] tracking-tight">
            What Our Students Say About SKD
          </h2>
          <p className="text-sm sm:text-base text-[#66758C] mt-2">
            Real feedback from candidates who studied at our Chandigarh campus and through our live interactive online batches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E5EBF2] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-[#D9A441] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D9A441]" />
                  ))}
                  <span className="text-xs font-bold text-gray-700 ml-2">Verified Student</span>
                </div>

                <p className="text-sm sm:text-base text-[#172B45] leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <h4 className="text-sm font-bold text-[#10213B]">{t.name}</h4>
                  <p className="text-xs text-[#2457D6] font-medium">{t.course}</p>
                  <p className="text-[11px] text-gray-500">
                    {t.achievement} {t.placedAt ? `• Placed at ${t.placedAt}` : ""}
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION K: CAMPUS LIFE & GALLERY PREVIEW */}
      <section className="bg-[#F5F8FC] py-16 sm:py-20 border-y border-[#E5EBF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-100 text-[#2457D6] rounded-full text-xs font-semibold mb-2">
                <Building className="w-3.5 h-3.5" />
                <span>Campus Culture</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10213B] tracking-tight">
                Life at SKD Group of Institutions
              </h2>
              <p className="text-sm sm:text-base text-[#66758C] mt-2 max-w-2xl">
                Glimpses into our lectures, computer lab sessions, student celebrations, and workshops at Godrej Eternia, Chandigarh.
              </p>
            </div>

            <Link
              href="/gallery"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-[#2457D6] hover:text-[#1B45B3] group"
            >
              <span>View Full Photo Gallery</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreview.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden shadow-sm bg-white border border-[#E5EBF2] h-64"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A441] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION L: LATEST SEO ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 text-[#2457D6] rounded-full text-xs font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Student Resource Hub</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10213B] tracking-tight">
              Latest Insights & Finance Guides
            </h2>
            <p className="text-sm sm:text-base text-[#66758C] mt-2 max-w-2xl">
              In-depth articles covering ACCA eligibility, course fee breakdowns, career prospects, and exam strategies.
            </p>
          </div>

          <Link
            href="/blog"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-[#2457D6] hover:text-[#1B45B3] group"
          >
            <span>Browse All Articles</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-[#E5EBF2] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-[#10213B]/90 backdrop-blur-md text-white text-[11px] font-bold rounded-lg border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-[#66758C]">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#10213B] hover:text-[#2457D6] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#66758C] line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-[#2457D6] hover:text-[#1B45B3] group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION M: ADMISSIONS CTA & EMBEDDED FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#10213B] via-[#162C4E] to-[#10213B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Accents */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#2457D6]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left CTA Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#183155] text-[#D9A441] rounded-full text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions Open for Upcoming Batches</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Build Your Career in Global Finance?
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Talk to our academic counsellors and find the right professional qualification for your goals. Visit our campus at Godrej Eternia, Chandigarh or join an interactive live session.
              </p>

              <div className="space-y-3 pt-2 text-sm text-gray-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Free eligibility & exemption evaluation for college graduates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Special discount waivers on ACCA Global registration fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Flexible weekend batches for working articles and professionals</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  className="inline-flex justify-center items-center px-6 py-3.5 bg-white text-[#10213B] font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#2457D6]" />
                  <span>Direct Call: {siteConfig.contact.primaryPhone}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Embedded Enquiry Form */}
            <div className="lg:col-span-6">
              <EnquiryForm source="Homepage Bottom CTA" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
