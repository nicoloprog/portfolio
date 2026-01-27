"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 glass-nav transition-all duration-300 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10">
            <span className="material-symbols-outlined text-primary">
              image
            </span>
          </div>
          <span className="font-display font-bold text-xl">
            <span className="text-primary"></span>
          </span>
        </a>

        <nav className="hidden md:flex gap-8">
          {["about", "projects", "skills", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              {id}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav className="p-6 flex flex-col gap-4">
          {["about", "projects", "skills", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-white/5"
            >
              {id}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
