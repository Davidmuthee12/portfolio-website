"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers3, Wrench } from "lucide-react";
import { skills } from "@/data/skills";

const icons = [Layers3, Code2, Database, Wrench];

export function Skills() {
  return (
    <section id="skills" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-eyebrow">Skills</p>
        <h2 className="mt-3 text-3xl font-black text-slate-950">
          Technologies I work with
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-black text-slate-950">{group.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
