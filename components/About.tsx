"use client";

import React from "react";
import Collage from "./Collage";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRightIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto">
      {/* Editorial Section Heading */}
      <div className="mb-14 sm:mb-20">
        <span className="text-xs uppercase tracking-widest font-mono text-ink/50 mb-3 block">
          01 / INTRO
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-cherry lowercase tracking-tight leading-none">
          about me<span className="text-cherry-dark">.</span>
        </h2>
      </div>

      {/* Two Column Layout: Text on Left, Collage on Right (Top-aligned) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Personal Narrative & Quick Links */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-2 lg:order-1">
          <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-ink/85 font-sans leading-relaxed">
            <p className="font-serif italic text-2xl sm:text-3xl text-ink font-medium">
              hi, i&apos;m mokshitha.
            </p>
            <p>
              i&apos;m a computer science engineering student who enjoys turning ideas into thoughtful, functional web experiences.
            </p>
            <p>
              i&apos;m particularly interested in building web applications, where i enjoy turning ideas into simple, interactive, and useful experiences. i also work with backend technologies and enjoy understanding how the different pieces of an application come together.
            </p>
            <p>
              through college projects, hackathons, and hands-on development, i&apos;ve been exploring different areas of software engineering — from designing interfaces to building APIs and working with databases.
            </p>
            <p>
              currently, i&apos;m learning, building, and looking for opportunities to create things that are useful, well-designed, and a little more interesting than they need to be.
            </p>
          </div>

          {/* Social Links: Clean, minimal badges */}
          <div className="pt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-ink/50 block mb-3">
              connect & collaborate
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Mokshitha08-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white hover:bg-cherry hover:text-cream text-ink text-xs sm:text-sm font-mono rounded-full border border-ink/15 hover:border-cherry transition-all duration-200 shadow-paper group"
              >
                <GithubIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>github</span>
                <ArrowUpRightIcon className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white hover:bg-cherry hover:text-cream text-ink text-xs sm:text-sm font-mono rounded-full border border-ink/15 hover:border-cherry transition-all duration-200 shadow-paper group"
              >
                <LinkedinIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>linkedin</span>
                <ArrowUpRightIcon className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                href="mailto:contact@mokshithagali.dev"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white hover:bg-cherry hover:text-cream text-ink text-xs sm:text-sm font-mono rounded-full border border-ink/15 hover:border-cherry transition-all duration-200 shadow-paper group"
              >
                <MailIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>email</span>
                <ArrowUpRightIcon className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Realistic Scrapbook Collage with Scroll Animation */}
        <div className="lg:col-span-6 flex justify-center order-1 lg:order-2 overflow-visible">
          <Collage />
        </div>
      </div>
    </section>
  );
}
