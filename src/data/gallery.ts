export interface GalleryItem {
  id: string;
  title: string;
  category: "Classroom" | "Seminars & Events" | "Campus Life" | "Corporate Workshops";
  image: string;
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "ACCA Computer-Based Training Session",
    category: "Classroom",
    image: "/assets/images/Teach-Img-2.jpg",
    caption: "Students practicing CBE simulations in our interactive finance lab at Godrej Eternia, Chandigarh.",
  },
  {
    id: "g2",
    title: "Annual Student Orientation & Rankers Felicitation",
    category: "Seminars & Events",
    image: "/assets/images/event12.png",
    caption: "Celebrating student clearances and welcoming new cohorts of ACCA and CA aspirants.",
  },
  {
    id: "g3",
    title: "1-on-1 Faculty Mentorship & Doubt Clinic",
    category: "Classroom",
    image: "/assets/images/Teach-Img-4.jpg",
    caption: "Direct post-class doubt resolution and strategy review with qualified senior mentors.",
  },
  {
    id: "g4",
    title: "US CMA Active Cohort Classroom",
    category: "Classroom",
    image: "/assets/images/cma-students-1920x750-1.webp",
    caption: "Focused management accounting lectures covering planning, budgeting, and performance metrics.",
  },
  {
    id: "g5",
    title: "Financial Analytics & Case Study Presentation",
    category: "Corporate Workshops",
    image: "/assets/images/h2.jpg",
    caption: "Students presenting real-world corporate financial models and valuation frameworks.",
  },
  {
    id: "g6",
    title: "US CPA & Global Licensure Workshop",
    category: "Seminars & Events",
    image: "/assets/images/cpa-1.jpg",
    caption: "Guidance on AICPA exam structure, Task-Based Simulations, and NASBA evaluations.",
  },
  {
    id: "g7",
    title: "Interactive Commerce Lecture",
    category: "Classroom",
    image: "/assets/images/cmaaa.jpg",
    caption: "Engaging classroom dialogue on accounting standards, tax planning, and audit controls.",
  },
  {
    id: "g8",
    title: "Graduating Batch & Corporate Placement Drive",
    category: "Campus Life",
    image: "/assets/images/group-1.jpg",
    caption: "Placement preparation cohorts celebrating Big 4 and corporate selections.",
  },
];
