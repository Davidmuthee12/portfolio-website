"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-blue-50/70 to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-eyebrow">Experience</p>
        <h2 className="mt-3 text-3xl font-black text-slate-950">
          My professional journey
        </h2>

        <div className="relative mt-10 grid gap-6 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-0 hidden h-px bg-blue-200 lg:block" />
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-lg border border-slate-200 bg-white p-7 shadow-lg shadow-slate-950/5"
            >
              <span className="absolute -top-[7px] left-0 hidden size-3 rounded-full bg-blue-600 ring-4 ring-blue-100 lg:block" />
              <span className="inline-flex rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-black text-white">
                {item.period}
              </span>
              <div className="mt-6 flex gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-blue-50 text-sm font-black text-blue-700 ring-1 ring-blue-100">
                  {item.initials}
                </span>
                <div>
                  <h3 className="text-xl font-black text-slate-950">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {item.company}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-6 text-slate-700">
                    {item.summary.split(", ").map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
