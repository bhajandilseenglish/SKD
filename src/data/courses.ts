export interface CourseModule {
  level: string;
  papers: {
    code: string;
    name: string;
    description: string;
  }[];
}

export interface CourseDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Flagship" | "Chartered Accountancy" | "Global Certification" | "Corporate";
  badge: string;
  duration: string;
  modes: string;
  awardingBody: string;
  heroImage: string;
  cardImage: string;
  tagline: string;
  overview: string;
  whoShouldEnroll: string[];
  eligibility: string[];
  exemptions: string;
  teachingMethodology: string[];
  curriculum: CourseModule[];
  examStructure: string[];
  studyMaterials: string[];
  careerPathways: {
    role: string;
    description: string;
    employers: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  metaTitle: string;
  metaDescription: string;
}

export const coursesData: CourseDetail[] = [
  {
    slug: "acca-coaching-chandigarh",
    title: "ACCA Coaching in Chandigarh",
    shortTitle: "ACCA (Global Chartered Accountant)",
    category: "Flagship",
    badge: "Official ACCA Silver Learning Partner",
    duration: "18 to 36 Months (Flexible exam sessions)",
    modes: "Face-to-Face Classroom (Godrej Eternia, Chandigarh) & Live Interactive Online",
    awardingBody: "Association of Chartered Certified Accountants (UK)",
    heroImage: "/assets/images/acca-coaching-chandigarh-.png",
    cardImage: "/assets/images/Teach-Img-2.jpg",
    tagline: "Become a Globally Recognised Finance Leader in 180+ Countries",
    overview:
      "SKD Group of Institutions is an Approved ACCA Silver Learning Partner in Chandigarh, offering rigorous, student-centric coaching for all 13 papers of the ACCA qualification. Our program features computer-based exam (CBE) simulation platforms, concept-first lecture delivery, licensed BPP & Kaplan study materials, and direct mentorship by qualified ACCA & CA faculty members. Whether you are stepping out of Class 12 or already working in corporate finance, SKD provides a personalized roadmap to completion.",
    whoShouldEnroll: [
      "Class 12th Commerce & Science graduates aiming for international finance careers right after school.",
      "B.Com, BBA, and M.Com students seeking global credentials and up to 4–5 exemptions.",
      "Semi-qualified CAs (Inter cleared) eligible for up to 9 exemptions to fast-track their global charter.",
      "Finance and accounts professionals wanting promotions in Big 4 and multinational corporations.",
    ],
    eligibility: [
      "Entry Route 1: 10+2 with minimum 65% in Mathematics/Accounts and English, plus 50% in other subjects.",
      "Entry Route 2: Foundation in Accountancy (FIA) for students who do not meet initial direct criteria.",
      "Graduates: B.Com / BBA / MBA graduates qualify for direct entry and subject-specific exemptions.",
    ],
    exemptions:
      "Graduates with B.Com or BBA can claim up to 4 exemptions (Business & Technology, Management Accounting, Financial Accounting, Corporate Law). CA Inter qualified candidates can claim up to 5 to 6 paper exemptions, and fully qualified Chartered Accountants can claim up to 9 paper exemptions.",
    teachingMethodology: [
      "Official CBE (Computer Based Exam) environment practice matching actual ACCA testing platforms.",
      "Live concept lectures with recorded sessions backup for revision and missed classes.",
      "Dedicated subject-matter mentors providing 1-on-1 doubt resolution after class.",
      "Chapter-wise diagnostic tests and full 100-mark pre-exam mock examinations with comprehensive faculty feedback.",
      "Interview grooming, soft skills, and placement support targeting Big 4 and MNC financial hubs.",
    ],
    curriculum: [
      {
        level: "Applied Knowledge (3 Papers)",
        papers: [
          {
            code: "BT (F1)",
            name: "Business and Technology",
            description: "Structure and governance of business, contemporary management systems, ethical standards, and IT.",
          },
          {
            code: "MA (F2)",
            name: "Management Accounting",
            description: "Cost accounting techniques, budgeting, standard costing, and management decision support.",
          },
          {
            code: "FA (F3)",
            name: "Financial Accounting",
            description: "Double-entry principles, trial balance preparation, and financial statements under IFRS.",
          },
        ],
      },
      {
        level: "Applied Skills (6 Papers)",
        papers: [
          {
            code: "LW (F4)",
            name: "Corporate and Business Law",
            description: "Legal frameworks, company law, obligations, contracts, and employment regulations.",
          },
          {
            code: "PM (F5)",
            name: "Performance Management",
            description: "Advanced management accounting, pricing strategies, variance analysis, and performance metrics.",
          },
          {
            code: "TX (F6)",
            name: "Taxation (UK / Variant)",
            description: "Income tax, corporate tax, capital gains, VAT, and national insurance computations.",
          },
          {
            code: "FR (F7)",
            name: "Financial Reporting",
            description: "Preparation of single and group financial statements under IFRS, accounting standards, and financial analysis.",
          },
          {
            code: "AA (F8)",
            name: "Audit and Assurance",
            description: "External audit process, audit planning, internal control evaluation, and audit reports.",
          },
          {
            code: "FM (F9)",
            name: "Financial Management",
            description: "Working capital management, investment appraisal, business valuation, and risk management.",
          },
        ],
      },
      {
        level: "Strategic Professional (4 Papers: 2 Essentials + 2 Options)",
        papers: [
          {
            code: "SBR",
            name: "Strategic Business Reporting",
            description: "Advanced financial reporting concepts, ethical judgments, group reporting, and modern reporting frameworks.",
          },
          {
            code: "SBL",
            name: "Strategic Business Leader",
            description: "Integrated strategic leadership, corporate governance, enterprise risk management, and commercial acumen.",
          },
          {
            code: "AFM / APM / ATX / AAA",
            name: "Two Optional Papers (Specialization)",
            description: "Choose 2 specialized papers from Advanced Financial Management, Advanced Performance Management, Advanced Taxation, or Advanced Audit & Assurance.",
          },
        ],
      },
    ],
    examStructure: [
      "Applied Knowledge: On-demand Computer Based Exams (CBE) available year-round at licensed centres.",
      "Applied Skills: Session CBEs conducted in March, June, September, and December exam windows.",
      "Strategic Professional: Case study-driven session CBEs testing real-world executive scenarios.",
      "Passing Mark: 50% across every paper.",
    ],
    studyMaterials: [
      "Official approved publisher study texts and exam kits (BPP / Kaplan).",
      "Exclusive SKD faculty summary notes, formula books, and revision flashcards.",
      "Comprehensive bank of previous years' exam questions with examiner approach guides.",
    ],
    careerPathways: [
      {
        role: "Financial Analyst & FP&A Specialist",
        description: "Analyze financial trends, forecast operational performance, and prepare executive investment dashboards.",
        employers: "Big 4, Investment Banks, Global Capability Centres (GCCs).",
      },
      {
        role: "Audit & Assurance Associate / Senior",
        description: "Verify corporate compliance, conduct statutory audits, and issue independent opinions on corporate statements.",
        employers: "Deloitte, PwC, EY, KPMG, BDO, Grant Thornton.",
      },
      {
        role: "Management Consultant & Strategy Advisor",
        description: "Advise enterprise executives on M&A, restructuring, capital allocation, and risk management.",
        employers: "McKinsey, Boston Consulting Group, Accenture, Atos.",
      },
      {
        role: "International Tax & Reporting Specialist",
        description: "Navigate cross-border transfer pricing, corporate taxation, and multi-jurisdiction filings.",
        employers: "Citibank, Barclays, Genpact, Tech Mahindra.",
      },
    ],
    faqs: [
      {
        question: "Why should I choose SKD for ACCA coaching in Chandigarh?",
        answer:
          "SKD Group of Institutions is an officially approved ACCA Silver Learning Partner. We provide qualified faculty, verified CBE simulator environments, regular 1-on-1 mentorship, and corporate placement assistance directly in Chandigarh at Godrej Eternia, Industrial Area Phase 1.",
      },
      {
        question: "Can I pursue ACCA right after 12th commerce?",
        answer:
          "Yes, students with 10+2 (with 65% in Mathematics/Accounts and English, plus 50% in other subjects) can directly register for the Applied Knowledge level. Students not meeting this mark can enter through the Foundation in Accountancy (FIA) route without losing time.",
      },
      {
        question: "What exemptions are available for B.Com graduates?",
        answer:
          "Graduates with a recognized B.Com degree typically qualify for up to 4 exemptions (BT, MA, FA, and LW), allowing them to start directly at the Applied Skills level.",
      },
      {
        question: "Does SKD provide placement support after completing ACCA papers?",
        answer:
          "Yes, we have an active career cell that prepares students with resume development, technical mock interviews, and connects students with recruiting partners including Big 4 firms, global banking centres, and corporate finance departments.",
      },
    ],
    metaTitle: "Best ACCA Coaching in Chandigarh | Official Silver Partner - SKD",
    metaDescription:
      "Enroll for the leading ACCA coaching in Chandigarh at SKD Group of Institutions. Approved ACCA Silver Learning Partner with expert faculty, CBE simulation, and 100% placement support.",
  },
  {
    slug: "ca-foundation-coaching-chandigarh",
    title: "CA Foundation Coaching in Chandigarh",
    shortTitle: "CA Foundation",
    category: "Chartered Accountancy",
    badge: "ICAI Focused Preparation",
    duration: "4 to 6 Months Intensive Batch",
    modes: "Classroom (Chandigarh) & Live Online",
    awardingBody: "The Institute of Chartered Accountants of India (ICAI)",
    heroImage: "/assets/images/ca-coaching-chandigarh.png",
    cardImage: "/assets/images/Teach-Img-4.jpg",
    tagline: "Build an Unshakeable Foundation for India's Most Prestigious Finance Credential",
    overview:
      "CA Foundation is the entry-level gateway to becoming a Chartered Accountant in India. SKD Group of Institutions in Chandigarh provides an intensive, results-oriented training program that bridges high school commerce with ICAI expectations. Our experienced faculty ensures thorough conceptual clarity in accounting, legal language formulation, quantitative problem solving, and economic reasoning.",
    whoShouldEnroll: [
      "Class 11 and 12 commerce students preparing early for their first attempt.",
      "Class 12 board pass-out students targeting the May/June or November/December ICAI examination.",
      "Graduates seeking strong fundamentals before entering finance careers.",
    ],
    eligibility: [
      "Candidates who have passed 10+2 examinations conducted by an examining body recognized by the Central Government or equivalent.",
      "Registration with ICAI Board of Studies at least four months prior to the exam month.",
    ],
    exemptions: "Not applicable for entry-level exam.",
    teachingMethodology: [
      "Step-by-step presentation practice for subjective law and accounting papers.",
      "Shortcut techniques and speed-drills for quantitative aptitude and economics.",
      "Weekly chapter tests following the exact ICAI marking scheme.",
      "Comprehensive revision series with ICAI RTPs (Revision Test Papers) and MTPs (Mock Test Papers).",
    ],
    curriculum: [
      {
        level: "CA Foundation Curriculum (4 Papers)",
        papers: [
          {
            code: "Paper 1",
            name: "Accounting",
            description: "Theoretical framework, accounting processes, bank reconciliation, inventories, depreciation, preparation of final accounts, and partnership/company accounts.",
          },
          {
            code: "Paper 2",
            name: "Business Laws",
            description: "Indian Regulatory Framework, Indian Contract Act, Sale of Goods Act, Indian Partnership Act, Limited Liability Partnership Act, and Companies Act.",
          },
          {
            code: "Paper 3",
            name: "Quantitative Aptitude",
            description: "Business Mathematics, Logical Reasoning, and Statistics including permutations, probability, time value of money, and statistical measures.",
          },
          {
            code: "Paper 4",
            name: "Business Economics",
            description: "Microeconomics, consumer behavior, demand/supply, national income determination, fiscal and monetary policies, and global business environment.",
          },
        ],
      },
    ],
    examStructure: [
      "Paper 1 & 2: Subjective descriptive exams (3 hours each, 100 marks each).",
      "Paper 3 & 4: Objective multiple-choice questions with negative marking of 0.25 (2 hours each, 100 marks each).",
      "Passing Criteria: Minimum 40% in each individual paper and 50% aggregate overall.",
    ],
    studyMaterials: [
      "Comprehensive ICAI module coverage with supplementary question bank.",
      "Past 10 attempts question paper solutions and suggested answers.",
      "Quick formula and section reference booklets for rapid revision.",
    ],
    careerPathways: [
      {
        role: "Chartered Accountancy Qualification Track",
        description: "Direct progression to CA Intermediate, followed by statutory articleship training and CA Final.",
        employers: "Leading CA firms, corporate audit divisions, and financial institutions.",
      },
    ],
    faqs: [
      {
        question: "When should I register for CA Foundation coaching?",
        answer:
          "Students should ideally register right after Class 12 board examinations or during Class 12 for integrated preparation, ensuring at least 4 to 6 months of dedicated preparation.",
      },
      {
        question: "Are mock tests included in the coaching fees?",
        answer:
          "Yes, SKD conducts regular unit tests and minimum 3 full-length ICAI pattern mock exams with detailed faculty corrections.",
      },
    ],
    metaTitle: "Best CA Foundation Coaching in Chandigarh | SKD Group",
    metaDescription:
      "Prepare for CA Foundation with premier faculty at SKD Group Chandigarh. Proven test series, personalized doubt sessions, and comprehensive ICAI curriculum coverage.",
  },
  {
    slug: "ca-intermediate-coaching-chandigarh",
    title: "CA Intermediate Coaching in Chandigarh",
    shortTitle: "CA Intermediate",
    category: "Chartered Accountancy",
    badge: "Dual Group & Single Group Batches",
    duration: "8 to 10 Months Comprehensive Training",
    modes: "Classroom (Chandigarh) & Live Online Batches",
    awardingBody: "The Institute of Chartered Accountants of India (ICAI)",
    heroImage: "/assets/images/ca-coaching-chandigarh.png",
    cardImage: "/assets/images/event12.png",
    tagline: "Master Advanced Accounting, Corporate Laws & Taxation with Expert Faculty",
    overview:
      "CA Intermediate is the crucial second tier of the Chartered Accountancy trajectory. SKD Group provides an analytical, application-driven learning program covering both Group 1 and Group 2. With experienced Chartered Accountant mentors, our students build deep proficiency in corporate reporting standards, direct & indirect tax law computations, statutory auditing protocols, and strategic financial decision making.",
    whoShouldEnroll: [
      "Students who have cleared CA Foundation.",
      "Commerce graduates with minimum 55% or non-commerce graduates with 60% entering via the Direct Entry Scheme.",
      "Students preparing for single group or both groups in upcoming ICAI examination sessions.",
    ],
    eligibility: [
      "Passed CA Foundation Examination OR qualified via ICAI Direct Entry Route as an eligible graduate/postgraduate.",
      "Completed required 8 months of study period from the date of ICAI registration.",
    ],
    exemptions: "Paper-wise exemption of 60%+ in previous attempts per ICAI guidelines.",
    teachingMethodology: [
      "Practical case study solving illustrating practical tax filings and accounting treatment.",
      "Regular updates on Finance Act changes and ICAI statutory amendments.",
      "Structured schedule balancing both groups without student burnout.",
      "Articleship readiness sessions and corporate interview preparation.",
    ],
    curriculum: [
      {
        level: "Group 1 (3 Papers)",
        papers: [
          {
            code: "Paper 1",
            name: "Advanced Accounting",
            description: "Application of Accounting Standards, consolidation of financial statements, amalgamation, and accounting for corporate entities.",
          },
          {
            code: "Paper 2",
            name: "Corporate and Other Laws",
            description: "Company Law, management and administration, accounts of companies, audit, Foreign Exchange Management Act (FEMA), and General Clauses Act.",
          },
          {
            code: "Paper 3",
            name: "Taxation",
            description: "Section A: Income Tax Law computations and tax planning. Section B: Goods and Services Tax (GST) provisions, ITC, and levy.",
          },
        ],
      },
      {
        level: "Group 2 (3 Papers)",
        papers: [
          {
            code: "Paper 4",
            name: "Cost and Management Accounting",
            description: "Material, labor, overheads, activity-based costing, marginal costing, standard costing, and budget analysis.",
          },
          {
            code: "Paper 5",
            name: "Auditing and Ethics",
            description: "Nature, objective and scope of audit, audit documentation, internal controls, audit sampling, and professional code of ethics.",
          },
          {
            code: "Paper 6",
            name: "Financial Management and Strategic Management",
            description: "Section A: Financial Management (Capital structure, leverage, investment decisions). Section B: Strategic formulation and execution.",
          },
        ],
      },
    ],
    examStructure: [
      "6 Papers in total divided into 2 groups (3 papers per group).",
      "Each paper is 100 marks with 30% case-scenario based objective questions and 70% descriptive questions.",
      "Passing Criteria: Minimum 40% in each individual paper and 50% overall in aggregate.",
    ],
    studyMaterials: [
      "Exhaustive subject modules with illustrative practical questions.",
      "Taxation amendment handbook updating all recent circulars and notifications.",
      "Question bank incorporating 15+ years of ICAI examination problems.",
    ],
    careerPathways: [
      {
        role: "Chartered Accountant Articleship",
        description: "Qualifies students for 2 years of mandatory practical articleship training with practicing CA firms and Big 4.",
        employers: "Deloitte, PwC, EY, KPMG, BDO, prominent regional firms.",
      },
    ],
    faqs: [
      {
        question: "Should I prepare for both groups together or one group at a time?",
        answer:
          "Both groups allow you to benefit from the aggregate passing set-off rule and save 6 months. Our academic advisors assess your study schedule and provide tailored batch recommendations.",
      },
      {
        question: "How does SKD assist with Articleship placement?",
        answer:
          "SKD organizes CV formatting clinics and connects CA Intermediate cleared candidates with our network of top auditing firms and corporate partners.",
      },
    ],
    metaTitle: "CA Intermediate Coaching in Chandigarh | Top CA Faculty - SKD",
    metaDescription:
      "Join the best CA Intermediate coaching in Chandigarh at SKD Group. Expert faculty for both Group 1 & Group 2, intensive test series, and articleship support.",
  },
  {
    slug: "ca-final-coaching-chandigarh",
    title: "CA Final Coaching in Chandigarh",
    shortTitle: "CA Final",
    category: "Chartered Accountancy",
    badge: "Advanced Professional Mastery",
    duration: "Flexible Modular Batches",
    modes: "Classroom (Chandigarh) & High-Definition Live Online",
    awardingBody: "The Institute of Chartered Accountants of India (ICAI)",
    heroImage: "/assets/images/ca-coaching-chandigarh.png",
    cardImage: "/assets/images/Teach-Img-2.jpg",
    tagline: "Cross the Final Frontier to Become a Fellow Chartered Accountant",
    overview:
      "CA Final demands elite strategic vision, master-level technical knowledge, and an impeccable ability to synthesise corporate law, tax structures, and global financial reporting. SKD Group provides advanced coaching designed specifically for working articles and CA candidates, combining weekend schedules, recorded on-demand access, and case study masterclasses led by veteran industry practitioners.",
    whoShouldEnroll: [
      "Candidates who have passed both groups of CA Intermediate.",
      "Students currently undergoing or completing their mandatory articleship training.",
      "Working candidates preparing for upcoming ICAI CA Final examination attempts.",
    ],
    eligibility: [
      "Cleared both groups of CA Intermediate examination.",
      "Fulfilled prescribed period of articleship training and completed Advanced ICITSS course as stipulated by ICAI.",
    ],
    exemptions: "Paper-wise exemption of 60%+ in previous attempts as per ICAI guidelines.",
    teachingMethodology: [
      "Intensive case-study integration matching the new ICAI syllabus structure.",
      "Flexible timetable adapted to articleship office hours.",
      "In-depth analysis of International Financial Reporting Standards (Ind AS).",
      "Comprehensive answer writing techniques focusing on examiner presentation.",
    ],
    curriculum: [
      {
        level: "Group 1 (3 Papers)",
        papers: [
          {
            code: "Paper 1",
            name: "Financial Reporting",
            description: "Indian Accounting Standards (Ind AS), business combinations, consolidated financial statements, accounting for financial instruments, and integrated reporting.",
          },
          {
            code: "Paper 2",
            name: "Advanced Financial Management",
            description: "Advanced portfolio management, derivatives and risk management, international financial management, and corporate valuation.",
          },
          {
            code: "Paper 3",
            name: "Advanced Auditing, Assurance & Professional Ethics",
            description: "Standards on Auditing (SAs), audit of banks and NBFCs, forensic accounting, ESG reporting assurance, and ICAI Code of Ethics.",
          },
        ],
      },
      {
        level: "Group 2 (3 Papers)",
        papers: [
          {
            code: "Paper 4",
            name: "Direct Tax Laws and International Taxation",
            description: "Corporate taxation, transfer pricing, Double Tax Avoidance Agreements (DTAA), BEPS initiatives, and tax litigation.",
          },
          {
            code: "Paper 5",
            name: "Indirect Tax Laws",
            description: "Advanced GST provisions, Customs Act, Foreign Trade Policy, dispute resolution, and cross-border trade transactions.",
          },
          {
            code: "Paper 6",
            name: "Integrated Business Solutions (Multi-Disciplinary Case Study)",
            description: "Open-book multidisciplinary case study integrating financial reporting, strategic management, corporate laws, taxation, and auditing.",
          },
        ],
      },
    ],
    examStructure: [
      "6 Papers across two groups.",
      "30% case scenario objective questions, 70% descriptive questions.",
      "Paper 6 is an open-book multi-disciplinary case study exam (4 hours duration).",
      "Passing criteria: 40% in each paper and 50% in aggregate.",
    ],
    studyMaterials: [
      "Master question bank containing high-weightage ICAI problems.",
      "Ind AS and International Tax reference digests.",
      "Simulated open-book exam practice sessions.",
    ],
    careerPathways: [
      {
        role: "Chartered Accountant (Associate / Partner)",
        description: "Statutory signing authority, independent practice, corporate leadership, and CFO track.",
        employers: "Big 4 firms, top corporate conglomerates, private equity, and banking.",
      },
    ],
    faqs: [
      {
        question: "How do batch timings accommodate articleship working hours?",
        answer:
          "We offer specialized early-morning, evening, and weekend batches, supported by complete 1080p recorded lectures with 100% doubt-support access.",
      },
    ],
    metaTitle: "CA Final Coaching in Chandigarh | Expert Mentorship - SKD",
    metaDescription:
      "Excel in CA Final with advanced coaching in Chandigarh by SKD Group. Specialized Ind AS, International Taxation, and Multidisciplinary case study training.",
  },
  {
    slug: "us-cma-coaching",
    title: "US CMA Coaching in Chandigarh & India",
    shortTitle: "US CMA (Certified Management Accountant)",
    category: "Global Certification",
    badge: "IMA USA Accredited Curriculum",
    duration: "6 to 9 Months Fast-Track",
    modes: "Classroom (Chandigarh) & Interactive Online Pan-India",
    awardingBody: "Institute of Management Accountants (IMA, USA)",
    heroImage: "/assets/images/cma-students-1920x750-1.webp",
    cardImage: "/assets/images/cmaaa.jpg",
    tagline: "The Fastest Global Credential in Strategic Management Accounting & FP&A",
    overview:
      "The US CMA is a globally recognized professional credential administered by the Institute of Management Accountants (IMA), USA. Designed for finance professionals who drive executive business strategy, cost control, and data-driven decision making, the qualification consists of just two exam parts. SKD Group provides an accelerated training program with an 85%+ pass track record, Gleim/Wiley curriculum materials, and complete exam booking and credentialing guidance.",
    whoShouldEnroll: [
      "B.Com, BBA, BMS, and MBA students wanting a rapid global finance qualification.",
      "Working corporate accountants aiming to transition into Financial Planning & Analysis (FP&A).",
      "Professionals seeking international opportunities in GCCs, US MNCs, and Fortune 500 corporations.",
    ],
    eligibility: [
      "Bachelor's degree from an accredited college or university (or enrolled students who will complete their degree within 7 years of passing exams).",
      "Two continuous years of professional experience in management accounting or financial management (can be fulfilled within 7 years post-exam).",
    ],
    exemptions: "Not applicable; 2 exams must be taken by all candidates.",
    teachingMethodology: [
      "Focus on management accounting, corporate budgeting, variance analysis, and internal controls.",
      "Extensive question bank drills with over 3,000+ retired Prometric questions.",
      "Dedicated essay writing workshops for Section B of each exam part.",
      "Continuous mock testing on Prometric-style test engine interface.",
    ],
    curriculum: [
      {
        level: "Part 1: Financial Planning, Performance, and Analytics",
        papers: [
          {
            code: "Part 1",
            name: "Financial Planning, Performance, and Analytics",
            description: "External Financial Reporting Decisions (15%), Planning, Budgeting, and Forecasting (20%), Performance Management (20%), Cost Management (15%), Internal Controls (15%), and Technology and Analytics (15%).",
          },
        ],
      },
      {
        level: "Part 2: Strategic Financial Management",
        papers: [
          {
            code: "Part 2",
            name: "Strategic Financial Management",
            description: "Financial Statement Analysis (20%), Corporate Finance (20%), Decision Analysis (25%), Risk Management (10%), Investment Decisions (10%), and Professional Ethics (15%).",
          },
        ],
      },
    ],
    examStructure: [
      "Two 4-hour exams conducted at Prometric test centers or remotely proctored.",
      "Each part consists of 100 multiple-choice questions (3 hours) + 2 essay scenarios (1 hour).",
      "Score scale: 0 to 500. Passing score: 360.",
      "Testing windows: January/February, May/June, and September/October.",
    ],
    studyMaterials: [
      "Official approved CMA review textbook suite with comprehensive practice kits.",
      "Prometric simulation test software replicating actual test interface.",
      "Formula summary booklets and quick-reference analytical sheets.",
    ],
    careerPathways: [
      {
        role: "Financial Planning & Analysis (FP&A) Manager",
        description: "Oversee operational budgeting, dynamic forecasting, and capital planning for executive management.",
        employers: "Amazon, Accenture, Dell, Microsoft, American Express.",
      },
      {
        role: "Cost Accountant & Strategic Controller",
        description: "Develop cost accounting architectures, supply chain performance metrics, and profitability audits.",
        employers: "Manufacturing leaders, global logistics hubs, Big 4 advisory.",
      },
      {
        role: "Corporate Finance Specialist",
        description: "Conduct investment appraisals, enterprise risk evaluations, and M&A feasibility studies.",
        employers: "Global Capability Centers (GCCs), investment banking teams.",
      },
    ],
    faqs: [
      {
        question: "Can I complete the US CMA while still in college?",
        answer:
          "Yes! You can sit for and pass both exams while completing your Bachelor's degree. You have 7 years from passing the exam to complete the 2-year work experience requirement.",
      },
      {
        question: "How long does it take to clear US CMA at SKD?",
        answer:
          "Most SKD students complete both exam parts within 6 to 9 months by dedicating 10–12 hours per week to our structured classes and practice drills.",
      },
    ],
    metaTitle: "US CMA Coaching in Chandigarh | 6-9 Month Fast-Track - SKD",
    metaDescription:
      "Become a US CMA in 6–9 months. Top-rated US CMA coaching in Chandigarh by SKD Group. Prometric exam simulation, comprehensive materials, and placement assistance.",
  },
  {
    slug: "us-cpa-coaching",
    title: "US CPA Coaching in Chandigarh & India",
    shortTitle: "US CPA (Certified Public Accountant)",
    category: "Global Certification",
    badge: "AICPA Gold Standard",
    duration: "12 to 18 Months",
    modes: "Classroom (Chandigarh) & Online Pan-India",
    awardingBody: "American Institute of Certified Public Accountants (AICPA) & NASBA",
    heroImage: "/assets/images/cpa-1.jpg",
    cardImage: "/assets/images/a17.jpg",
    tagline: "The Pinnacle of Global Accounting Credentials with US Licensure",
    overview:
      "The US CPA (Certified Public Accountant) is widely recognized as the gold standard in global accounting and auditing. With the CPA exam now administered continuously in Prometric test centers across India, earning your license has never been more accessible. SKD Group provides end-to-end support: from NASBA transcript evaluation and board selection to rigorous conceptual coaching across Core and Discipline subjects.",
    whoShouldEnroll: [
      "Chartered Accountants and CA Inter candidates seeking international practice licensure.",
      "M.Com, MBA Finance, or 16-year education degree holders meeting the 120/150 credit requirement.",
      "Professionals employed in US audit and taxation practices within Big 4 and MNC shared services.",
    ],
    eligibility: [
      "120 credit hours to sit for the CPA examination in most US state boards; 150 credits for full licensure.",
      "Graduates with 3-year degrees (like B.Com) can bridge credits through post-graduate diplomas, M.Com, or specific state board pathways with our guidance.",
    ],
    exemptions: "Not applicable; all four sections must be passed.",
    teachingMethodology: [
      "Comprehensive syllabus coverage aligned with the AICPA CPA Evolution model.",
      "Rigorous Task-Based Simulation (TBS) masterclasses.",
      "Personalized state board selection and NASBA credential evaluation support.",
      "Prometric-style adaptive practice exams with detailed performance analytics.",
    ],
    curriculum: [
      {
        level: "Core Sections (3 Mandatory Exams)",
        papers: [
          {
            code: "AUD",
            name: "Auditing and Attestation",
            description: "Ethics, professional responsibilities, assessing risk and developing a planned response, performing procedures and obtaining evidence, forming conclusions and reporting.",
          },
          {
            code: "FAR",
            name: "Financial Accounting and Reporting",
            description: "Conceptual framework, standard-setting, financial statement accounts, transactions, and state/local government accounting under US GAAP.",
          },
          {
            code: "REG",
            name: "Taxation and Regulation",
            description: "Ethics, professional responsibilities and federal tax procedures, business law, and federal taxation of property transactions, individuals, and entities.",
          },
        ],
      },
      {
        level: "Discipline Sections (Choose 1 of 3)",
        papers: [
          {
            code: "BAR",
            name: "Business Analysis and Reporting",
            description: "Advanced financial statement analysis, technical accounting, revenue recognition, leases, and state and local government accounting.",
          },
          {
            code: "ISC",
            name: "Information Systems and Controls",
            description: "IT governance, system and organization controls (SOC) engagements, data management, and cybersecurity risk frameworks.",
          },
          {
            code: "TCP",
            name: "Tax Compliance and Planning",
            description: "Advanced individual and entity tax compliance, multi-jurisdictional tax planning, and wealth management strategies.",
          },
        ],
      },
    ],
    examStructure: [
      "4 Sections: 3 Core + 1 Discipline of choice.",
      "4 hours per section, administered at Prometric centres in India (Chandigarh, Delhi NCR, Mumbai, etc.).",
      "Passing score: 75 on a scale of 0 to 99.",
      "Rolling 30-month window to clear all 4 sections.",
    ],
    studyMaterials: [
      "Complete AICPA blueprint aligned materials and video lectures.",
      "Extensive Task-Based Simulations (TBS) and multiple-choice practice bank.",
      "Flashcards and high-yield summary memory maps.",
    ],
    careerPathways: [
      {
        role: "US Audit & Assurance Manager",
        description: "Lead audit teams on US SEC registrant clients under PCAOB standards.",
        employers: "Deloitte, PwC, EY, KPMG, Grant Thornton US practices.",
      },
      {
        role: "US Corporate Tax Consultant",
        description: "Prepare and review federal, state, and international corporate tax returns (Form 1120, 1065).",
        employers: "Big 4 US Tax divisions, Fortune 500 in-house tax teams.",
      },
      {
        role: "International Controller & Accounting Director",
        description: "Oversee US GAAP to IFRS reconciliations, SEC reporting (10-K, 10-Q), and global consolidation.",
        employers: "Multinational tech companies, global shared services.",
      },
    ],
    faqs: [
      {
        question: "Can I take the US CPA exams in India?",
        answer:
          "Yes! Prometric testing centres across India administer all sections of the US CPA exam continuously throughout the year.",
      },
      {
        question: "How does SKD assist with the 120/150 credit eligibility?",
        answer:
          "Our admissions team evaluates your university marksheets and guides you toward the optimal state board (such as Guam, Alaska, or Montana) or bridge programs to fulfill credit requirements smoothly.",
      },
    ],
    metaTitle: "US CPA Coaching in Chandigarh | AICPA Evolution Training - SKD",
    metaDescription:
      "Prepare for the US CPA with premier faculty at SKD Group Chandigarh. Complete NASBA evaluation support, Prometric simulation, and Big 4 career opportunities.",
  },
  {
    slug: "corporate-training",
    title: "Corporate Finance & Accounting Training in Chandigarh",
    shortTitle: "Corporate Training",
    category: "Corporate",
    badge: "Enterprise Upskilling",
    duration: "Customized Workshops & Cohorts",
    modes: "On-Premises Corporate Workshops & Hybrid Delivery",
    awardingBody: "SKD Corporate Learning & Development Division",
    heroImage: "/assets/images/h2.jpg",
    cardImage: "/assets/images/group-1.jpg",
    tagline: "Empowering Finance Teams with Cutting-Edge Technical and Analytical Skills",
    overview:
      "In an era of dynamic regulatory frameworks, AI-driven automation, and global accounting standard shifts, high-performing organizations require continuously upskilled finance teams. SKD Group’s Corporate Training division provides bespoke, outcome-focused learning programs for corporations, auditing firms, and financial institutions across Chandigarh, Punjab, Haryana, and pan-India.",
    whoShouldEnroll: [
      "Corporate finance and accounting departments needing IFRS/Ind AS transition training.",
      "Audit firms looking to upskill junior associates in audit methodologies and documentation.",
      "Shared services and GCC teams standardizing cross-border reporting processes.",
    ],
    eligibility: [
      "Open to organizations, enterprises, and professional practices of all sizes.",
    ],
    exemptions: "Customized corporate certification issued upon module completion.",
    teachingMethodology: [
      "Hands-on workshop model built around your enterprise's real balance sheets and ERP data.",
      "Pre-training diagnostic assessment to identify skill gaps across team members.",
      "Post-training efficacy evaluations, project presentations, and implementation reviews.",
      "Flexible delivery: on-site at your corporate offices or live instructor-led virtual sessions.",
    ],
    curriculum: [
      {
        level: "Core Enterprise Modules",
        papers: [
          {
            code: "CORP-101",
            name: "IFRS and Ind AS Practical Implementation",
            description: "Deep-dive into revenue recognition (IFRS 15), leases (IFRS 16), and financial instruments (IFRS 9).",
          },
          {
            code: "CORP-102",
            name: "Advanced Financial Modeling & Valuation in Excel",
            description: "Dynamic 3-statement models, DCF valuation, sensitivity analysis, and executive dashboard building.",
          },
          {
            code: "CORP-103",
            name: "Statutory Audit, Internal Controls & Forensic Screening",
            description: "COSO internal control frameworks, fraud risk indicators, and computer-assisted audit techniques (CAATs).",
          },
          {
            code: "CORP-104",
            name: "Corporate Tax Compliance, GST & Transfer Pricing",
            description: "Navigating direct tax assessments, transfer pricing documentation, and GST audit readiness.",
          },
        ],
      },
    ],
    examStructure: [
      "Continuous case study assessments and final practical capstone project.",
    ],
    studyMaterials: [
      "Customized corporate training manuals and digital reference materials.",
      "Pre-built financial model templates and compliance checklists.",
    ],
    careerPathways: [
      {
        role: "Enhanced Team Productivity & Accuracy",
        description: "Reduces audit adjustments, speeds up financial month-end closing, and improves regulatory compliance.",
        employers: "Participating enterprise organizations.",
      },
    ],
    faqs: [
      {
        question: "Can the training curriculum be customized for our industry?",
        answer:
          "Absolutely. We conduct an initial discovery session with your CFO or L&D head to customize case studies, exercises, and modules specifically for your business domain.",
      },
    ],
    metaTitle: "Corporate Training in Finance & Accounting Chandigarh | SKD Group",
    metaDescription:
      "Transform your corporate finance teams with customized corporate training by SKD Group of Institutions. Specializations in IFRS, Ind AS, Taxation, and Financial Modeling.",
  },
];
