"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CodeXml,
  Download,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tech = ["React", "Next.js", "TypeScript", "Python", "Golang", "Git"];

export function Hero() {
  return (
    <section
      id="home"
      className="hero-pattern relative overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-white"
    >
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-xs font-black text-blue-700">
            Software Developer
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m David Kingori.
            <span className="block text-blue-600">
              I build modern web applications.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            I build scalable frontends, backend APIs, and full-stack systems
            using Next.js, React, Golang, Python and modern cloud-ready tools.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#projects">
              View Projects <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href="/David-Kingori-CV.pdf" download variant="secondary">
              Download CV <Download className="size-4" aria-hidden />
            </Button>
            <Button
              href="https://github.com/Davidmuthee12"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
            >
              <CodeXml className="size-5" aria-hidden /> GitHub
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            {tech.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <GitBranch className="size-4 text-blue-500" aria-hidden />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute inset-0 rounded-full bg-blue-200 blur-3xl" />
          <div className="relative rounded-full border-[18px] border-blue-100 bg-gradient-to-br from-blue-400 to-blue-600 p-2 shadow-2xl shadow-blue-500/20">
            <Image
              src="/my-profile.png"
              alt="Portrait of David Kingori"
              width={720}
              height={720}
              priority
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 right-0 flex w-64 items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-950/10 sm:right-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600">
              <BriefcaseBusiness className="size-5" aria-hidden />
            </span>
            <p className="text-sm font-bold leading-5 text-slate-800">
              Available for opportunities
            </p>
            <span className="absolute right-4 top-4 size-2.5 rounded-full bg-emerald-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
