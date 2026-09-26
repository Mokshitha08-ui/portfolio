"use client";

import React from "react";

interface SkillCategory {
  number: string;
  category: string;
  items: string[];
  fullWidth?: boolean;
}

const skillCategories: SkillCategory[] = [
  {
    number: "01",
    category: "LANGUAGES",
    items: ["Java", "JavaScript", "SQL", "C++"],
  },
  {
    number: "02",
    category: "WEB TECHNOLOGIES",
    items: [
      "React.js",
      "Node.js",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Vue.js",
      "Spring Boot",
    ],
  },
  {
    number: "03",
    category: "DATABASES",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    number: "04",
    category: "DEVELOPER TOOLS",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    number: "05",
    category: "CORE CONCEPTS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS"],
    fullWidth: true,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills & Technologies"
      className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-beige/80"
    >
      {/* Editorial Section Heading */}
      <div className="mb-14 sm:mb-20">
        <span className="text-xs uppercase tracking-widest font-mono text-ink/50 mb-3 block">
          02 / TOOLKIT
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-cherry lowercase tracking-tight leading-none">
          things i work with<span className="text-cherry-dark">.</span>
        </h2>
      </div>

      {/* Rectangular Bordered Cards Grid (2-column on desktop, 1-column on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {skillCategories.map((group) => (
          <div
            key={group.number}
            className={`group bg-[#F4EFE6]/70 border border-ink/15 hover:border-cherry rounded-[20px] sm:rounded-[22px] p-7 sm:p-9 transition-all duration-300 ease-out hover:-translate-y-1 ${
              group.fullWidth ? "md:col-span-2" : ""
            }`}
          >
            {/* Small Category Heading */}
            <div className="flex items-center space-x-2.5 pb-5 mb-5 border-b border-beige/70">
              <span className="font-mono text-xs sm:text-sm font-semibold text-cherry tracking-wider">
                {group.number}
              </span>
              <span className="w-3 h-[1px] bg-cherry/40" />
              <h3 className="font-mono text-xs sm:text-sm tracking-widest text-ink/65 uppercase">
                {group.category}
              </h3>
            </div>

            {/* Vertical Skills List */}
            <ul
              className={
                group.fullWidth
                  ? "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
                  : "space-y-2.5 sm:space-y-3"
              }
            >
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="font-sans text-base sm:text-lg text-ink/85 group-hover:text-ink transition-colors duration-200 flex items-center space-x-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cherry/30 group-hover:bg-cherry transition-colors duration-200" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
