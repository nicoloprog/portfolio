"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Compétences", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="md:max-w-[65.5%] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative size-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
            <div className="material-symbols-outlined text-primary pb-1">
              {"</>"}
            </div>
          </div>
          <div className="font-display font-bold text-xl tracking-tight">
            <div className="text-primary"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:hidden md:flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-background-dark font-display font-bold text-sm tracking-wide hover:bg-gray-700/30 transition-colors glow-effect">
            CV
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center md:hidden text-white p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6H40M4 15H40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`absolute inset-x-0 h-[100svh] bg-gray-900/98  md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-slate-100 hover:text-white py-3"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
