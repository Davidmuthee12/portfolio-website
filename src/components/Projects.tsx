"use client";

import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="section-eyebrow">Featured Projects</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Things I&apos;ve built
            </h2>
          </div>
          <a
            href="https://github.com/Davidmuthee12"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-sm font-black text-blue-600 hover:text-blue-800 sm:inline-flex"
          >
            View all projects <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
