import { ArrowUp } from "lucide-react";

const links = ["Home", "Projects", "Experience", "Skills", "About", "Contact"];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <p className="text-sm text-blue-50">
          © 2026 David Kingori. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-blue-50 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#home"
          aria-label="Back to top"
          className="grid size-11 place-items-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
        >
          <ArrowUp className="size-5" aria-hidden />
        </a>
      </div>
    </footer>
  );
}
