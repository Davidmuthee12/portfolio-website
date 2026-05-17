"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
    >
      <div className="relative aspect-[1.48] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-h-56 flex-col p-5">
        <h3 className="text-base font-black leading-snug text-slate-950">
          {project.title}
        </h3>
        <p className="mt-2 text-xs font-bold text-blue-600">{project.tech}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {project.description}
        </p>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-600 transition hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          {project.label} <ExternalLink className="size-4" aria-hidden />
        </a>
      </div>
    </motion.article>
  );
}
