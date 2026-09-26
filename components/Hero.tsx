"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 px-6 sm:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Subtle realistic 3D cherry accent at top right */}
      <div className="absolute top-24 right-4 sm:right-16 pointer-events-none select-none hidden sm:block">
        <Image
          src="/images/stickers/cherry.webp"
          alt="Realistic cherry accent"
          width={76}
          height={76}
          className="rotate-12 transition-transform duration-700 hover:rotate-6 drop-shadow-md"
          priority
        />
      </div>

      {/* Main Editorial Hero Content */}
      <div className="my-auto max-w-4xl pt-6">
        {/* Editorial Masthead Bar */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 text-xs font-mono text-ink/60">
          <span className="tracking-wider uppercase text-cherry font-medium">
            HYDERABAD, INDIA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cherry/40 inline-block" />
          <span className="tracking-wider text-ink/50">
            CBIT CSE &apos;28
          </span>
        </div>

        {/* Main Heading: Editorial Serif, Lowercase with period */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.75rem] font-serif font-normal text-ink leading-[1.02] tracking-tight mb-8">
          hi, i&apos;m{" "}
          <span className="text-cherry italic font-serif relative inline-block">
            mokshitha.
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-cherry/35"
              viewBox="0 0 260 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M 2 8 C 60 2 180 12 258 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Supporting statement */}
        <p className="text-lg sm:text-2xl md:text-2xl text-ink/80 font-sans font-light leading-relaxed max-w-2xl mb-12">
          computer science engineering student
          <br className="hidden sm:inline" /> building thoughtful web experiences
          <br className="hidden sm:inline" /> and solving real-world problems.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#work"
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-cherry hover:bg-cherry-dark text-cream font-medium text-sm sm:text-base tracking-wide rounded-full shadow-sm hover:shadow-editorial transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>view my work</span>
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-beige/40 text-ink hover:text-cherry font-medium text-sm sm:text-base tracking-wide rounded-full border border-ink/20 hover:border-cherry/40 transition-all duration-300"
          >
            let&apos;s talk
          </a>
        </div>
      </div>

      {/* Hero Bottom Editorial Metadata Footer */}
      <div className="pt-8 border-t border-beige/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-ink/60">
        <div>
          <span className="text-ink/40 uppercase block mb-0.5">Focus</span>
          <span className="text-ink/80 font-medium">Web Development · DSA · Software Engineering</span>
        </div>
        <div>
          <span className="text-ink/40 uppercase block mb-0.5">Education</span>
          <span className="text-ink/80 font-medium">B.E. CSE @ CBIT (9.65 CGPA)</span>
        </div>
        <div className="sm:text-right flex sm:flex-col sm:items-end justify-between items-center">
          <span className="text-ink/40 uppercase block mb-0.5">Status</span>
          <div className="inline-flex items-center space-x-1.5 text-cherry font-medium">
            <span className="w-2 h-2 rounded-full bg-cherry animate-pulse" />
            <span>Open for collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
