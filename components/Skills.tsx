"use client";

import React from "react";

interface SkillCategory {
  category: string;
  code: string;
  items: string[];
}

const skillGroups: SkillCategory[] = [
  {
    category: "languages",
    code: "01",
    items: ["Java", "JavaScript", "SQL", "C++"],
  },
  {
    category: "web technologies",
    code: "02",
    items: [
      "React.js",
      "Node.js",
      "Spring Boot",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    category: "databases",
    code: "03",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "developer tools",
    code: "04",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "core fundamentals",
    code: "05",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-beige/60">
      {/* Editorial Section Heading */}
      <div className="mb-14 sm:mb-20">
        <span className="text-xs uppercase tracking-widest font-mono text-ink/50 mb-3 block">
          02 / TOOLKIT
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-cherry lowercase tracking-tight leading-none">
          things i work with<span className="text-cherry-dark">.</span>
        </h2>
      </div>

      {/* Editorial Horizontal Rows */}
      <div className="divide-y divide-beige/80 border-y border-beige/80">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group hover:bg-beige/20 transition-colors duration-200 px-2 sm:px-4"
          >
            {/* Category label with index number */}
            <div className="md:col-span-4 flex items-baseline space-x-3">
              <span className="text-xs font-mono text-cherry font-semibold">
                /{group.code}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-ink font-medium lowercase tracking-wide group-hover:text-cherry transition-colors duration-200">
                {group.category}
              </h3>
            </div>

            {/* Editorial flow list of skills */}
            <div className="md:col-span-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              {group.items.map((skill, idx) => (
                <div key={skill} className="flex items-center space-x-5">
                  <span className="text-base sm:text-lg font-sans text-ink/80 hover:text-cherry transition-colors duration-150 cursor-default select-none">
                    {skill}
                  </span>
                  {idx < group.items.length - 1 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cherry/30 select-none" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
