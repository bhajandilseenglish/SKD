import fs from "fs";
import path from "path";
import { siteConfig } from "@/data/siteData";
import { coursesData, CourseDetail } from "@/data/courses";
import { facultyData, FacultyMember } from "@/data/faculty";
import { testimonialsData, Testimonial } from "@/data/testimonials";
import { blogPostsData, BlogPost } from "@/data/blog";

export interface Enquiry {
  id: string;
  name: string;
  mobile: string;
  email: string;
  city: string;
  course: string;
  mode: "Classroom (Chandigarh)" | "Live Interactive Online" | "Flexible Hybrid";
  message?: string;
  status: "New" | "Contacted" | "In-Progress" | "Enrolled" | "Closed";
  notes?: string;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  createdAt: string;
}

export interface AppDatabase {
  enquiries: Enquiry[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  faculty: FacultyMember[];
  siteSettings: typeof siteConfig;
}

const DB_PATH = path.join(process.cwd(), "src", "data", "database.json");

function getInitialDatabase(): AppDatabase {
  return {
    enquiries: [
      {
        id: "enq-101",
        name: "Gurpreet Singh",
        mobile: "9876543210",
        email: "gurpreet.s@example.com",
        city: "Chandigarh",
        course: "ACCA Coaching in Chandigarh",
        mode: "Classroom (Chandigarh)",
        message: "Interested in the March exam window for Applied Skills. Have completed B.Com.",
        status: "Contacted",
        notes: "Called on 25th Oct. Scheduled face-to-face counselling at Godrej Eternia for Saturday.",
        source: "Homepage Hero CTA",
        utmSource: "google",
        utmMedium: "cpc",
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      },
      {
        id: "enq-102",
        name: "Pooja Verma",
        mobile: "9812345678",
        email: "pooja.v@example.com",
        city: "Panchkula",
        course: "US CMA Coaching",
        mode: "Live Interactive Online",
        message: "Working professional in finance. Need weekend batch timings and Gleim material details.",
        status: "New",
        notes: "",
        source: "US CMA Course Page",
        utmSource: "direct",
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      },
      {
        id: "enq-103",
        name: "Vikramjit Chawla",
        mobile: "9988776655",
        email: "vikram.c@example.com",
        city: "Mohali",
        course: "CA Intermediate Coaching",
        mode: "Classroom (Chandigarh)",
        message: "Passed CA Foundation with 260 marks. Looking for Both Groups preparation.",
        status: "Enrolled",
        notes: "Enrolled in morning batch starting next week.",
        source: "Admissions Form",
        utmSource: "organic",
        createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
      },
    ],
    blogPosts: blogPostsData,
    testimonials: testimonialsData,
    faculty: facultyData,
    siteSettings: siteConfig,
  };
}

export function readDatabase(): AppDatabase {
  try {
    if (!fs.existsSync(DB_PATH)) {
      const initial = getInitialDatabase();
      writeDatabase(initial);
      return initial;
    }
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error reading database, falling back to initial data:", error);
    return getInitialDatabase();
  }
}

export function writeDatabase(data: AppDatabase): void {
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing database:", error);
  }
}

// Helper methods
export function addEnquiry(enquiry: Omit<Enquiry, "id" | "createdAt" | "status">): Enquiry {
  const db = readDatabase();
  const newEnquiry: Enquiry = {
    ...enquiry,
    id: `enq-${Date.now()}`,
    status: "New",
    createdAt: new Date().toISOString(),
  };
  db.enquiries.unshift(newEnquiry);
  writeDatabase(db);
  return newEnquiry;
}

export function updateEnquiryStatus(
  id: string,
  status: Enquiry["status"],
  notes?: string
): Enquiry | null {
  const db = readDatabase();
  const index = db.enquiries.findIndex((e) => e.id === id);
  if (index === -1) return null;
  db.enquiries[index].status = status;
  if (notes !== undefined) {
    db.enquiries[index].notes = notes;
  }
  writeDatabase(db);
  return db.enquiries[index];
}

export function deleteEnquiry(id: string): boolean {
  const db = readDatabase();
  const initialLen = db.enquiries.length;
  db.enquiries = db.enquiries.filter((e) => e.id !== id);
  if (db.enquiries.length !== initialLen) {
    writeDatabase(db);
    return true;
  }
  return false;
}
