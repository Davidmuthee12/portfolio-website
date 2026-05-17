export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  initials: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Africa AI Network",
    period: "Dec 2025 - Present",
    summary:
      "Built scalable and reusable frontends, integrated REST APIs, participated in code reviews.",
    initials: "AI",
  },
  {
    role: "Frontend Developer",
    company: "Yohpal International Company Limited",
    period: "Apr 2025 - Nov 2025",
    summary:
      "Built reusable React components, integrated APIs, participated in code reviews.",
    initials: "Y",
  },
  {
    role: "Industrial Attachee",
    company: "State Department for Trade and Investment",
    period: "Sep 2024 - Nov 2024",
    summary: "IT support and network maintenance.",
    initials: "KE",
  },
];
