export interface Testimonial {
  id: string;
  name: string;
  course: string;
  achievement: string;
  placedAt?: string;
  city: string;
  image?: string;
  quote: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Amanpreet Kaur",
    course: "ACCA (Strategic Professional)",
    achievement: "Cleared SBR & SBL in 1st Attempt",
    placedAt: "Deloitte India",
    city: "Chandigarh",
    image: "/assets/images/Teach-Img-2.jpg",
    quote:
      "Studying at SKD Group for my ACCA papers was the best decision for my career. The faculty at Godrej Eternia gave me personal attention, cleared every single doubt, and the computer-based exam mock tests gave me huge confidence on exam day.",
    verified: true,
  },
  {
    id: "t2",
    name: "Rohan Malhotra",
    course: "US CMA",
    achievement: "Cleared Both Parts in 7 Months",
    placedAt: "Genpact Global Services",
    city: "Mohali",
    image: "/assets/images/cmaaa.jpg",
    quote:
      "The US CMA curriculum can feel daunting if you don't have the right guidance. SKD's faculty simplified cost concepts and FP&A budgeting, and the Prometric test engine interface made the real exam feel like just another mock test.",
    verified: true,
  },
  {
    id: "t3",
    name: "Simranjit Singh",
    course: "CA Intermediate",
    achievement: "Both Groups Cleared",
    placedAt: "Top CA Firm Articleship",
    city: "Panchkula",
    image: "/assets/images/event12.png",
    quote:
      "The taxation and law lectures by SKD mentors are extraordinary. The faculty teaches with practical case studies and updated amendments rather than rote memorization. The regular chapter tests kept me accountable throughout the 9 months.",
    verified: true,
  },
  {
    id: "t4",
    name: "Neha Sharma",
    course: "US CPA",
    achievement: "Passed 4/4 Sections",
    placedAt: "KPMG Global Services",
    city: "Chandigarh",
    image: "/assets/images/a17.jpg",
    quote:
      "Navigating the 120-credit requirement and NASBA evaluation was very overwhelming before I met the counselors at SKD. They handled the paperwork smoothly and the Task-Based Simulation coaching was spot-on for the actual exam.",
    verified: true,
  },
];

export interface ExamResultRecord {
  id: string;
  examSession: string;
  qualification: string;
  passPercentage: string;
  highlight: string;
  topScorers: {
    paper: string;
    studentName: string;
    score: string;
  }[];
}

export const resultsData: ExamResultRecord[] = [
  {
    id: "res-1",
    examSession: "Recent ACCA Exam Window",
    qualification: "ACCA Global Examination",
    passPercentage: "86.4% Batch Pass Rate",
    highlight: "Significantly outperformed the global average of 51% across Applied Skills and Strategic Professional papers.",
    topScorers: [
      { paper: "Financial Reporting (FR)", studentName: "Divya M.", score: "84 Marks" },
      { paper: "Performance Management (PM)", studentName: "Karan S.", score: "79 Marks" },
      { paper: "Strategic Business Reporting (SBR)", studentName: "Pooja G.", score: "76 Marks" },
      { paper: "Audit and Assurance (AA)", studentName: "Harsh V.", score: "81 Marks" },
    ],
  },
  {
    id: "res-2",
    examSession: "US CMA Examination Window",
    qualification: "US CMA (IMA)",
    passPercentage: "88.2% Pass Rate",
    highlight: "Students completed both parts within an average duration of 7.5 months.",
    topScorers: [
      { paper: "Part 1 (Financial Planning & Analytics)", studentName: "Ankit R.", score: "430 / 500" },
      { paper: "Part 2 (Strategic Financial Management)", studentName: "Sneha B.", score: "420 / 500" },
    ],
  },
  {
    id: "res-3",
    examSession: "ICAI CA Intermediate Session",
    qualification: "Chartered Accountancy",
    passPercentage: "74% Group Clearance Rate",
    highlight: "High marks attained in Advanced Accounting and Corporate Laws with zero syllabus backlogs.",
    topScorers: [
      { paper: "Advanced Accounting", studentName: "Gurpreet K.", score: "82 Marks (Exemption)" },
      { paper: "Corporate and Other Laws", studentName: "Rahul T.", score: "77 Marks (Exemption)" },
    ],
  },
];
