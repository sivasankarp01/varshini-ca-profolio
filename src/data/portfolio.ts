export const portfolio = {
  name: "Varshini P",
  eyebrow: "CA Intermediate Candidate",
  tagline: "Aspiring Chartered Accountant | Audit, Taxation & GST Compliance",
  intro:
    "CA Intermediate candidate with 3 years of articleship experience in statutory audit, bank audit, taxation, and GST compliance. Seeking an opportunity to apply analytical and accounting skills in a growth-oriented organization.",
  location: "Kallakurichi, Tamil Nadu, India - 606207",
  phone: "9345275021",
  email: "varshup002@gmail.com",
  linkedin: "https://www.linkedin.com/in/varshini-p-35821622a/",
  summary: [
    "3+ Years Articleship Experience",
    "Bank & Statutory Audit",
    "Income Tax & GST Compliance",
    "Financial Analysis",
  ],
  about:
    "I am a CA Intermediate candidate with practical articleship experience across bank audits, statutory audits, income tax compliance, GST accounting, and audit documentation. I have worked with diverse clients and developed a detail-oriented approach to financial reporting, compliance, and audit execution.",
  strengths: [
    "Analytical and detail-oriented",
    "Client communication",
    "Time management during audits",
    "Team collaboration",
    "Compliance handling",
  ],
  experience: {
    company: "V R Nagarajan & Co",
    role: "Article Assistant",
    period: "September 2022 - October 2025",
    responsibilities: [
      "Conducted Bank Statutory Audits and Credit Audits for various branches; verified IRAC norms, NPA classification, and security documentation.",
      "Independently handled income tax computations and filed Income Tax Returns using Winman software for individuals, firms, and small companies.",
      "Managed accounting entries and reconciled data for GST filing through the official GST portal, ensuring timely compliance for diverse clients.",
      "Performed statutory audits for non-corporate entities, focusing on internal controls and financial statement accuracy.",
      "Prepared detailed audit workpapers and assisted in drafting tax audit reports, including Form 3CD.",
    ],
  },
  skills: [
    { title: "Accounting Software", items: ["Tally Prime", "Tally ERP 9"] },
    {
      title: "Tax and Audit",
      items: ["Winman - Income Tax and Audit modules", "Income Tax Portal", "TRACES", "Tax Computation", "Audit Documentation"],
    },
    {
      title: "GST and Compliance",
      items: ["GST Portal", "GST Accounting", "GST Reconciliation", "Compliance Handling"],
    },
    {
      title: "Productivity and Analysis",
      items: ["MS Excel", "VLOOKUP", "Pivot Tables", "Financial Data Analysis", "MS Word"],
    },
  ],
  education: [
    {
      title: "Chartered Accountancy - Intermediate",
      institution: "Institute of Chartered Accountants of India (ICAI)",
      detail: "Status: CA Intermediate Candidate",
    },
    {
      title: "B.Com Professional Accounting",
      institution: "Avinashilingam Institute of Home Science and Higher Education for Women, Coimbatore",
      period: "2019 - 2022",
      detail: "Score: 85.30%",
    },
    { title: "Higher Secondary Certificate (HSC)", period: "2019", detail: "Score: 95%" },
    { title: "Secondary School Leaving Certificate (SSLC)", period: "2017", detail: "Score: 97.6%" },
  ],
  project: {
    title: "Consumer Research Project - Consumer Perception Towards Lakme Skincare Products",
    description:
      "Conducted a survey-based consumer behaviour study to evaluate customer perceptions, preferences, and buying patterns related to Lakme skincare products.",
    tags: ["Consumer Research", "Survey Analysis", "Data Interpretation", "Buying Behaviour"],
  },
  certifications: [
    "ICITSS - ITT & Orientation Programme, ICAI",
    "Advanced Excel Workshop - Accent Techno Soft",
    "Web Designing Certificate",
    "Yoga for Young Empowerment",
  ],
  languages: ["Tamil", "English"],
} as const;

export const navigation = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
] as const;