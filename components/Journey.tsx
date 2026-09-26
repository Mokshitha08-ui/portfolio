"use client";

import React from "react";
import Image from "next/image";

interface EducationStep {
  period: string;
  stage: string;
  institution: string;
  degree: string;
  score?: string;
  highlights: string[];
}

const educationTimeline: EducationStep[] = [
  {
    period: "2024 – Present",
    stage: "01 / Undergraduate",
    institution: "Chaitanya Bharathi Institute of Technology",
    degree: "B.E. Computer Science Engineering",
    score: "9.65 CGPA",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, Object-Oriented Programming, and DBMS",
      "Active participant in technical hackathons, algorithmic contests, and design initiatives",
      "Building full-stack software and distributed web platforms",
    ],
  },
  {
    period: "2022 – 2024",
    stage: "02 / Higher Secondary",
    institution: "Intermediate Education",
    degree: "Mathematics, Physics & Chemistry (MPC)",
    score: "97.7%",
    highlights: [
      "Secured outstanding academic aggregate of 97.7%",
      "Solid theoretical foundations in analytical mathematics and scientific problem solving",
      "Developed early interest in computing logic and structured thinking",
    ],
  },
  {
    period: "2022 and earlier",
    stage: "03 / Secondary",
    institution: "Secondary School Education",
    degree: "High School Curriculum",
    highlights: [
      "Strong fundamental grounding across mathematics, sciences, and languages",
      "Active engagement in academic competitions, foundational logic, and school activities",
    ],
  },
];

export default function Journey() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-beige/80">
      {/* Decorative realistic paperclip accent */}
      <div className="absolute top-24 right-8 sm:right-16 pointer-events-none select-none hidden md:block">
        <Image
          src="/images/stickers/paperclip.webp"
          alt="Realistic paperclip"
          width={65}
          height={95}
          className="rotate-45 drop-shadow-sm opacity-70"
        />
      </div>

      {/* Editorial Section Heading */}
      <div className="mb-14 sm:mb-20">
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

      {/* Editorial Education Timeline: College -> Intermediate -> Schooling */}
      <div className="relative pl-6 sm:pl-10 border-l border-cherry/25 space-y-16 sm:space-y-20">
        {educationTimeline.map((item) => (
          <div key={item.period} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-cream border-2 border-cherry group-hover:bg-cherry group-hover:scale-125 transition-all duration-300" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              {/* Period & Stage */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-xs font-mono text-cherry uppercase tracking-wider block">
                  {item.stage}
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-ink tracking-tight block">
                  {item.period}
                </span>
                {item.score && (
                  <div className="inline-block mt-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-cherry/10 text-cherry rounded-sm border border-cherry/20">
                      Score: {item.score}
                    </span>
                  </div>
                )}
              </div>

              {/* Institution & Details */}
              <div className="md:col-span-8 space-y-2">
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-ink group-hover:text-cherry transition-colors">
                  {item.institution}
                </h3>
                <p className="text-sm sm:text-base font-sans font-medium text-ink/75">
                  {item.degree}
                </p>

                <ul className="pt-3 space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm font-sans text-ink/70 flex items-start space-x-2"
                    >
                      <span className="text-cherry font-serif text-base leading-none">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
