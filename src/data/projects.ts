export type Project = {
  title: string;
  tech: string;
  href: string;
  image: string;
  description: string;
  label: string;
  ownership: "Company project" | "Personal project";
};

export const projects: Project[] = [
  {
    title: "African AI Network Website",
    tech: "React + Vite, Sanity CMS",
    href: "https://africanainetwork.com",
    image: "/projects/african-ai-network.png",
    description:
      "Company-owned website for African AI Network. I contributed to the organization website revamp and Sanity CMS integration.",
    label: "africanainetwork.com",
    ownership: "Company project",
  },
  {
    title: "African AI Network LMS System",
    tech: "Next.js, Tailwind CSS, shadcn",
    href: "https://lms.africanainetwork.com",
    image: "/projects/african-ai-lms.png",
    description:
      "Company-owned LMS product for African AI Network with chat, referrals and learning tools.",
    label: "lms.africanainetwork.com",
    ownership: "Company project",
  },
  {
    title: "Yohpal App",
    tech: "Next.js, TypeScript, Firebase",
    href: "https://yohpal.com",
    image: "/projects/yohpal-web.png",
    description:
      "Company-owned video streaming product for Yohpal International, built for content creators.",
    label: "yohpal.com",
    ownership: "Company project",
  },
  {
    title: "Ride Sharing Project",
    tech: "Full-stack web app, APIs, realtime workflows",
    href: "https://github.com/Davidmuthee12/ride-sharing",
    image: "/projects/ride-sharing.png",
    description:
      "Personal mobility project focused on ride requests, matching workflows and backend-ready application structure.",
    label: "GitHub Repository",
    ownership: "Personal project",
  },
  {
    title: "Kicker App",
    tech: "TypeScript, app architecture, frontend workflows",
    href: "https://github.com/Davidmuthee12/kicker-app",
    image: "/projects/kicker-app.png",
    description:
      "Personal application project with modern frontend structure and product-style user flows.",
    label: "GitHub Repository",
    ownership: "Personal project",
  },
  {
    title: "Socials API",
    tech: "Backend APIs, authentication, service design",
    href: "https://github.com/Davidmuthee12/socials-api",
    image: "/projects/socials-api.png",
    description:
      "Personal backend API project for social application features and reusable service patterns.",
    label: "GitHub Repository",
    ownership: "Personal project",
  },
  {
    title: "Eazy Market Backend",
    tech: "Backend APIs, commerce workflows, database design",
    href: "https://github.com/Davidmuthee12/eazymarket-backend",
    image: "/projects/eazymarket-backend.png",
    description:
      "Personal commerce backend project for product, marketplace and API-driven application flows.",
    label: "GitHub Repository",
    ownership: "Personal project",
  },
];
