"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CodeXml, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-4 pb-0 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-b-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-6 py-12 sm:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-100">
              Get In Touch
            </p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Let&apos;s work together
            </h2>
            <div className="mt-7 space-y-4 text-blue-50">
              <a className="contact-line" href="mailto:mutheedavid12@gmail.com">
                <Mail className="size-5" aria-hidden />
                mutheedavid12@gmail.com
              </a>
              <a className="contact-line" href="tel:+254791387154">
                <Phone className="size-5" aria-hidden />
                0791 387 154
              </a>
              <p className="contact-line">
                <MapPin className="size-5" aria-hidden />
                Nairobi, Kenya
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="https://github.com/Davidmuthee12"
                target="_blank"
                rel="noreferrer"
                className="size-12 px-0"
                aria-label="GitHub profile"
              >
                <CodeXml className="size-5" aria-hidden />
              </Button>
              <Button
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="size-12 px-0"
                aria-label="LinkedIn profile"
              >
                <BriefcaseBusiness className="size-5" aria-hidden />
              </Button>
              <Button
                href="mailto:mutheedavid12@gmail.com"
                className="size-12 px-0"
                aria-label="Email David Kingori"
              >
                <Mail className="size-5" aria-hidden />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white p-8 text-center shadow-2xl shadow-blue-950/20"
          >
            <span className="mx-auto grid size-20 place-items-center rounded-full bg-blue-100 text-blue-600">
              <Send className="size-9" aria-hidden />
            </span>
            <p className="mx-auto mt-7 max-w-56 text-lg font-black leading-7 text-slate-950">
              I&apos;m open to new opportunities.
            </p>
            <Button
              href="mailto:mutheedavid12@gmail.com"
              variant="secondary"
              className="mt-8 w-full"
            >
              Say Hello
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
