export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  accreditation: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  contact: {
    primaryPhone: string;
    primaryPhoneRaw: string;
    secondaryPhone: string;
    secondaryPhoneRaw: string;
    alternatePhone: string;
    alternatePhoneRaw: string;
    email: string;
    whatsappNumber: string;
    whatsappMessage: string;
  };
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
    youtube: string;
  };
  stats: {
    label: string;
    value: string;
    desc: string;
  }[];
  hiringPartners: {
    name: string;
    logo: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "SKD Group of Institutions",
  shortName: "SKD Group",
  tagline: "Your Ambition. Our Expertise. Your Global Future.",
  subTagline:
    "Build your future in accounting, finance and global business with professional ACCA, CA, US CMA and US CPA training at SKD Group of Institutions.",
  accreditation: "Approved ACCA Silver Learning Partner",
  address: {
    line1: "Unit E5M, 5th Floor, Tower B, Godrej Eternia",
    line2: "Plot No. 70, Industrial & Business Park, Phase 1",
    line3: "Chandigarh",
    city: "Chandigarh",
    state: "Chandigarh (UT)",
    pincode: "160002",
    country: "India",
    full: "Godrej Eternia, Plot No. 70, Industrial Business Park, Phase 1, Tower B, 5th Floor, Unit E5M, Chandigarh – 160002, India",
  },
  contact: {
    primaryPhone: "+91 80548 11313",
    primaryPhoneRaw: "918054811313",
    secondaryPhone: "+91 92167 76076",
    secondaryPhoneRaw: "919216776076",
    alternatePhone: "+91 85918 18500",
    alternatePhoneRaw: "918591818500",
    email: "info.skdaccaglobal@gmail.com",
    whatsappNumber: "918054811313",
    whatsappMessage: "Hi SKD Team, I would like to enquire about finance & accounting courses.",
  },
  socials: {
    instagram: "https://instagram.com/skdgroupofinstitutions",
    linkedin: "https://linkedin.com/company/skd-group-of-institutions",
    facebook: "https://facebook.com/skdgroupofinstitutions",
    youtube: "https://youtube.com/@skdgroupofinstitutions",
  },
  stats: [
    {
      label: "ACCA Status",
      value: "Silver Partner",
      desc: "Approved ACCA Learning Partner institution",
    },
    {
      label: "Global Pass Rate",
      value: "85%+",
      desc: "Consistently higher than ACCA worldwide averages",
    },
    {
      label: "Mentorship",
      value: "100%",
      desc: "Direct guidance by qualified CAs, ACCAs & CMAs",
    },
    {
      label: "Career Support",
      value: "100% Placement",
      desc: "Resume prep, mock interviews & corporate drives",
    },
  ],
  hiringPartners: [
    { name: "Deloitte", logo: "/assets/images/deloitte-logo.png" },
    { name: "KPMG", logo: "/assets/images/kpmg-logo.webp" },
    { name: "Citibank", logo: "/assets/images/citibank-logo.webp" },
    { name: "Barclays", logo: "/assets/images/barclays-logo.webp" },
    { name: "Capgemini", logo: "/assets/images/capgemini-logo.webp" },
    { name: "Atos", logo: "/assets/images/atos-logo.webp" },
    { name: "Axis Bank", logo: "/assets/images/axis-logo.webp" },
    { name: "HDFC Bank", logo: "/assets/images/hdfc-logo.webp" },
    { name: "Genpact", logo: "/assets/images/genpact.webp" },
    { name: "Tech Mahindra", logo: "/assets/images/techm-logo.webp" },
  ],
};
