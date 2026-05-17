export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn UI", "jQuery"],
  },
  {
    title: "Backend",
    items: ["Golang", "Python", "RESTful APIs", "WebSockets"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "CI/CD"],
  },
];
