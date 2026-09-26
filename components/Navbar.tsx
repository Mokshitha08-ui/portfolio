"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "work", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "about", href: "#about" },
    { name: "work", href: "#work" },
    { name: "skills", href: "#skills" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-beige/60 py-4 shadow-sm"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand name */}
        <Link
          href="#"
          className="group text-xl sm:text-2xl font-serif font-bold tracking-tight text-ink hover:text-cherry transition-colors duration-200"
        >
          mokshitha<span className="text-cherry font-normal">.</span>
        </Link>

        {/* Right: Navigation items */}
        <nav className="flex items-center space-x-6 sm:space-x-10" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = activeSection === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm tracking-wide lowercase transition-colors duration-200 font-sans ${
                  isActive
                    ? "text-cherry font-medium"
                    : "text-ink/80 hover:text-cherry"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cherry rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
