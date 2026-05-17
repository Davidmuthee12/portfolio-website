export type Project = {
  title: string;
  tech: string;
  href: string;
  image: string;
  description: string;
  label: string;
};

export const projects: Project[] = [
  {
    title: "African AI Network Website",
    tech: "React + Vite, Sanity CMS",
    href: "https://africanainetwork.com",
    image: "/projects/african-ai-network.png",
    description: "Organization website revamp with Sanity CMS integration.",
    label: "africanainetwork.com",
  },
  {
    title: "African AI Network LMS System",
    tech: "Next.js, Tailwind CSS, shadcn",
    href: "https://lms.africanainetwork.com",
    image: "/projects/african-ai-lms.png",
    description: "LMS platform with chat, referrals and learning tools.",
    label: "lms.africanainetwork.com",
  },
  {
    title: "Yohpal Web",
    tech: "Next.js, TypeScript, Firebase",
    href: "https://yohpal.com",
    image: "/projects/yohpal-web.png",
    description: "Video streaming platform for content creators.",
    label: "yohpal.com",
  },
  {
    title: "Realtors Web",
    tech: "React, Next.js, Tailwind CSS, shadcn UI, Framer Motion",
    href: "https://realtors-web.vercel.app/",
    image: "/projects/realtors-web.png",
    description: "Construction company landing page with animations.",
    label: "realtors-web.vercel.app",
  },
  {
    title: "JavaScript Weekend Projects",
    tech: "Vanilla JavaScript, HTML, CSS",
    href: "https://github.com/Davidmuthee12/js-weekend-project",
    image: "/projects/js-weekend.png",
    description: "Seven mini projects using vanilla JavaScript and APIs.",
    label: "GitHub Repository",
  },
  {
    title: "Plumbing Web",
    tech: "Next.js, TypeScript",
    href: "https://github.com/Davidmuthee12/PLUMBING_WEB",
    image: "/projects/plumbing-web.png",
    description: "Simple landing page for a plumbing company.",
    label: "GitHub Repository",
  },
];
