"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CodeXml,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tech = ["React", "Next.js", "TypeScript", "Python", "Golang", "Git"];

function TechLogo({ name }: { name: string }) {
  const className = "size-5 shrink-0";

  switch (name) {
    case "React":
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" aria-hidden>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g fill="none" stroke="#61dafb" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="11" fill="#000" />
          <path
            d="M8 7.6h2.1l6 8.9V7.6H18v8.8"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path d="M7.9 16.5V7.6" stroke="#fff" strokeLinecap="round" strokeWidth="1.6" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="3" fill="#3178c6" />
          <path
            d="M6 11.1V9.2h8.4v1.9h-3v8H9.1v-8H6Zm9 7.2v-2.2c.4.4.9.7 1.5.9.6.2 1.1.4 1.6.4.5 0 .9-.1 1.1-.3.3-.2.4-.4.4-.8 0-.3-.1-.5-.4-.7-.3-.2-.8-.5-1.5-.8-.9-.4-1.6-.8-2-1.3-.4-.5-.6-1.1-.6-1.8 0-.9.3-1.6 1-2.1.7-.5 1.6-.8 2.7-.8.9 0 1.8.2 2.7.6v2.1c-.8-.6-1.7-.9-2.6-.9-.4 0-.8.1-1 .3-.3.2-.4.4-.4.7 0 .3.1.5.4.7.3.2.7.4 1.4.7 1 .4 1.7.9 2.1 1.4.4.5.6 1.1.6 1.9 0 .9-.4 1.7-1.1 2.2-.7.5-1.7.8-2.9.8-1.2 0-2.2-.3-3-.9Z"
            fill="#fff"
          />
        </svg>
      );
    case "Python":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12.2 2.2c-4.6 0-4.3 2-4.3 2v2.1h4.4v.7H6.2s-2.9-.3-2.9 4.3 2.6 4.4 2.6 4.4h1.6v-2.3s-.1-2.6 2.5-2.6h4.4s2.5 0 2.5-2.4V4.5s.4-2.3-4.7-2.3Z"
            fill="#3776ab"
          />
          <path
            d="M11.8 21.8c4.6 0 4.3-2 4.3-2v-2.1h-4.4V17h6.1s2.9.3 2.9-4.3-2.6-4.4-2.6-4.4h-1.6v2.3s.1 2.6-2.5 2.6H9.6s-2.5 0-2.5 2.4v3.9s-.4 2.3 4.7 2.3Z"
            fill="#ffd43b"
          />
          <circle cx="10" cy="4.9" r=".8" fill="#fff" />
          <circle cx="14" cy="19.1" r=".8" fill="#fff" />
        </svg>
      );
    case "Golang":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden>
          <path d="M2 9.4h7M1 12h7M3 14.6h6" stroke="#00add8" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M12.5 7.5c3.8 0 6.6 2.2 6.6 5.1 0 2.8-2.8 5.1-6.6 5.1-3.7 0-6.5-2.3-6.5-5.1 0-2.9 2.8-5.1 6.5-5.1Zm0 2.1c-2.3 0-4 1.3-4 3s1.7 3 4 3c2.4 0 4.1-1.3 4.1-3s-1.7-3-4.1-3Z"
            fill="#00add8"
          />
          <circle cx="12.7" cy="12.6" r="1.4" fill="#fff" />
          <path d="M17.5 9.1 21 7.7" stroke="#00add8" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "Git":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2.4" fill="#f05032" transform="rotate(45 12 12)" />
          <path d="M9.3 8.6 12 11.3m0 0 2.7 2.7M12 11.3v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="9.3" cy="8.6" r="1.3" fill="#fff" />
          <circle cx="12" cy="15.7" r="1.3" fill="#fff" />
          <circle cx="14.7" cy="14" r="1.3" fill="#fff" />
        </svg>
      );
    default:
      return <CodeXml className="size-5 shrink-0 text-blue-500" aria-hidden />;
  }
}

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
                <TechLogo name={item} />
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
              width={700}
              height={700}
              priority
              className="aspect-square rounded-full object-contain"
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
