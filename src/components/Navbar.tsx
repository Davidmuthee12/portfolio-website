"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = ["Home", "Projects", "Experience", "Skills", "About", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          aria-label="David Kingori home"
        >
          <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-xl font-black text-blue-600">
            DM
          </span>
          <span className="text-lg font-black text-slate-950">David Kingori</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link text-sm font-bold text-slate-800 transition hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/David-Kingori-CV.pdf" download>
            Download CV <Download className="size-4" aria-hidden />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-lg border border-blue-100 bg-white text-slate-950 shadow-sm lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-blue-100 bg-white transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-700"
              >
                {link}
              </a>
            ))}
            <Button href="/David-Kingori-CV.pdf" download className="mt-2">
              Download CV <Download className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
