"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-deep3/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg border border-teal/40 flex items-center justify-center font-display font-medium text-sm text-teal">
            U
          </span>
          <span className="font-display font-medium text-ink text-[15px]">Uneeb</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[13px] text-muted2">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-ink text-deep3 font-medium text-[13px] rounded-lg px-5 py-2.5 hover:bg-teal transition-colors"
        >
          Contact me
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink p-2"
        >
          <div className="w-5 h-px bg-ink mb-1.5" />
          <div className="w-5 h-px bg-ink" />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-muted2 bg-deep3 border-b border-line">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-teal transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
