"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="bg-white px-4 pb-0 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500">
        <div className="grid items-center gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_0.95fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-100">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              A little about me
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-blue-50">
              I&apos;m a passionate software developer based in Nairobi, Kenya. I
              enjoy building useful, scalable and user-friendly web applications
              that solve real-world problems.
            </p>
            <Button
              href="/David-Kingori-CV.pdf"
              download
              variant="secondary"
              className="mt-8 border-white/40 bg-transparent text-white hover:bg-white hover:text-blue-700"
            >
              Download CV <Download className="size-4" aria-hidden />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative min-h-[280px]"
          >
            <Image
              src="/illustrations/developer.png"
              alt="Developer working at a desk illustration"
              width={900}
              height={650}
              className="mx-auto w-full max-w-xl object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
