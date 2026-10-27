export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualifications: string;
  expertise: string[];
  experience: string;
  bio: string;
  image: string;
  coursesTaught: string[];
}

export const facultyData: FacultyMember[] = [
  {
    id: "f1",
    name: "CA & ACCA Lead Mentor",
    designation: "Academic Director & Senior Faculty",
    qualifications: "FCA, ACCA Member, B.Com (Hons)",
    expertise: ["Financial Reporting (Ind AS / IFRS)", "Strategic Business Reporting", "Audit & Assurance"],
    experience: "14+ Years in Professional Accountancy Education",
    bio: "Having mentored over 3,500+ successful ACCA and CA candidates across North India, our lead faculty brings deep practical expertise in international accounting standards, audit methodology, and exam technique.",
    image: "/assets/images/Teach-Img-4.jpg",
    coursesTaught: ["ACCA SBR", "ACCA FR", "CA Final Financial Reporting", "CA Inter Accounting"],
  },
  {
    id: "f2",
    name: "Senior Financial Management Mentor",
    designation: "Lead Faculty - Corporate Finance & Management Accounting",
    qualifications: "ACCA, US CMA, MBA (Finance)",
    expertise: ["Advanced Financial Management", "Performance Management", "Financial Planning & Analysis"],
    experience: "11+ Years Corporate & Teaching Experience",
    bio: "Former corporate FP&A leader who transitioned to full-time pedagogy. Specializes in translating intricate financial math, derivatives, and valuation models into crystal-clear conceptual frameworks.",
    image: "/assets/images/Teach-Img-2.jpg",
    coursesTaught: ["ACCA FM", "ACCA AFM", "US CMA Part 1 & 2", "CA Inter FM"],
  },
  {
    id: "f3",
    name: "Taxation & Legal Systems Specialist",
    designation: "Senior Faculty - Direct & Indirect Taxation",
    qualifications: "Chartered Accountant, LL.B.",
    expertise: ["Direct Tax Laws", "GST & Customs", "Corporate Laws"],
    experience: "12+ Years Professional Tax Practice & Academia",
    bio: "Practicing advocate and Chartered Accountant with specialized mastery over domestic and international tax frameworks. Renowned for analytical case-solving and structured exam presentations.",
    image: "/assets/images/event12.png",
    coursesTaught: ["ACCA TX", "CA Inter Taxation", "CA Final Direct & Indirect Taxes"],
  },
  {
    id: "f4",
    name: "US CPA & Audit Practice Lead",
    designation: "Director - US CPA & International Programs",
    qualifications: "US CPA, CA, B.Com",
    expertise: ["US GAAP", "AICPA Auditing & Attestation (AUD)", "US Corporate Tax (REG)"],
    experience: "10+ Years (ex-Big 4 US Practice)",
    bio: "Ex-Big 4 US Audit specialist with extensive practical experience in PCAOB audits and SEC reporting. Guides CPA candidates through NASBA evaluation, state board selection, and Task-Based Simulations.",
    image: "/assets/images/a17.jpg",
    coursesTaught: ["US CPA AUD", "US CPA FAR", "US CPA REG"],
  },
];
