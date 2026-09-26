"use client";

import React from "react";

interface EducationStep {
  stage: string;
  institution: string;
  degree: string;
  period?: string;
  score: string;
}

const educationTimeline: EducationStep[] = [
  {
    stage: "01 — CURRENT",
    institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "2024–2028",
    score: "CGPA: 9.65/10",
  },
  {
    stage: "02 — INTERMEDIATE",
    institution: "Deeksha Junior College",
    degree: "Intermediate (MPC)",
    period: "2022–2024",
    score: "Percentage: 97.7%",
  },
  {
    stage: "03 — SECONDARY SCHOOL",
    institution: "Sanghamitra School",
    degree: "Secondary School Education",
    score: "Percentage: 93%",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      aria-label="Education Journey"
      className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-beige/80"
    >


      {/* Editorial Section Heading */}
      <div className="mb-16 sm:mb-24">
        <span className="text-xs uppercase tracking-widest font-mono text-ink/50 mb-3 block">
          04 / ACADEMIC FOUNDATION
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-cherry lowercase tracking-tight leading-none">
          my journey<span className="text-cherry-dark">.</span>
        </h2>
        <p className="text-sm sm:text-base font-sans text-ink/65 mt-3 max-w-md">
          an editorial record of my academic milestones and educational foundation.
        </p>
      </div>

      {/* 
        Polished Vertical Timeline Container:
        - Continuous timeline line running from above the first node to below the last node.
        - Desktop: Alternating cards around central timeline line.
        - Mobile: Clean single-sided vertical timeline on left.
      */}
      <div className="relative max-w-5xl mx-auto">
        {/* Continuous Timeline Line (Runs from -top-6 to -bottom-6 with caps) */}
        <div
          aria-hidden="true"
          className="absolute left-4 sm:left-6 md:left-1/2 -top-6 -bottom-6 w-[2px] bg-gradient-to-b from-cherry/20 via-cherry/40 to-cherry/20 -translate-x-1/2 rounded-full pointer-events-none"
        >
          {/* Top start cap */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cherry/40" />
          {/* Bottom end cap */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cherry/40" />
        </div>

        {/* Timeline Entries List */}
        <div className="space-y-12 sm:space-y-16 relative">
          {educationTimeline.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.stage}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center group"
              >
                {/* 
                  Timeline Node (Centered on desktop, left on mobile):
                  Sits directly on the continuous timeline line.
                */}
                <div
                  aria-hidden="true"
                  className="absolute left-4 sm:left-6 md:left-1/2 top-7 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-5 h-5 rounded-full bg-cream border-[3px] border-cherry flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-125 group-hover:border-cherry-dark">
                    <div className="w-1.5 h-1.5 rounded-full bg-cherry transition-colors duration-300 group-hover:bg-cherry-dark" />
                  </div>
                </div>

                {/* Left Column Content Slot (Desktop only: shows on even items) */}
                <div
                  className={`hidden md:block ${
                    isEven ? "pr-4" : "pointer-events-none"
                  }`}
                >
                  {isEven && (
                    <div className="relative group/card bg-[#F4EFE6]/70 border border-ink/15 hover:border-cherry rounded-[18px] p-7 transition-all duration-300 ease-out hover:-translate-y-1 shadow-xs">
                      {/* Horizontal connector line linking to center timeline node */}
                      <div className="absolute -right-14 top-1/2 -translate-y-1/2 w-14 h-[1px] bg-cherry/35 pointer-events-none" />

                      {/* Card Content */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-mono text-xs font-semibold text-cherry tracking-widest uppercase">
                            {item.stage}
                          </span>
                          {item.period && (
                            <span className="font-mono text-xs text-ink/55">
                              {item.period}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-serif font-medium text-ink group-hover/card:text-cherry transition-colors duration-200 leading-snug">
                          {item.institution}
                        </h3>

                        <p className="text-sm sm:text-base font-sans text-ink/75">
                          {item.degree}
                        </p>

                        <div className="pt-1">
                          <span className="inline-block font-mono text-xs font-semibold text-cherry px-2.5 py-1 bg-cherry/10 rounded-sm border border-cherry/20">
                            {item.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column Content Slot (Desktop odd items, Mobile all items) */}
                <div
                  className={`pl-11 sm:pl-14 md:pl-4 ${
                    !isEven ? "" : "md:hidden"
                  }`}
                >
                  <div className="relative group/card bg-[#F4EFE6]/70 border border-ink/15 hover:border-cherry rounded-[18px] p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 shadow-xs">
                    {/* Horizontal connector line on desktop */}
                    <div className="hidden md:block absolute -left-14 top-1/2 -translate-y-1/2 w-14 h-[1px] bg-cherry/35 pointer-events-none" />

                    {/* Horizontal connector line on mobile */}
                    <div className="md:hidden absolute -left-7 top-7 -translate-y-1/2 w-7 h-[1px] bg-cherry/35 pointer-events-none" />

                    {/* Card Content */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-xs font-semibold text-cherry tracking-widest uppercase">
                          {item.stage}
                        </span>
                        {item.period && (
                          <span className="font-mono text-xs text-ink/55">
                            {item.period}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-medium text-ink group-hover/card:text-cherry transition-colors duration-200 leading-snug">
                        {item.institution}
                      </h3>

                      <p className="text-sm sm:text-base font-sans text-ink/75">
                        {item.degree}
                      </p>

                      <div className="pt-1">
                        <span className="inline-block font-mono text-xs font-semibold text-cherry px-2.5 py-1 bg-cherry/10 rounded-sm border border-cherry/20">
                          {item.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
