"use client";

import React from "react";

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    value: "9.65",
    label: "CGPA",
    sublabel: "Academic excellence at CBIT",
  },
  {
    value: "1800+",
    label: "LeetCode contest rating",
    sublabel: "Consistent algorithmic problem solver",
  },
  {
    value: "97.7%",
    label: "Intermediate",
    sublabel: "State board foundation",
  },
];

export default function Achievements() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-beige/60">
      {/* Editorial Section Heading */}
      <div className="mb-14 sm:mb-20">
        <span className="text-xs uppercase tracking-widest font-mono text-ink/50 mb-3 block">
          05 / MILESTONES
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-cherry lowercase tracking-tight leading-none">
          little things i&apos;m proud of<span className="text-cherry-dark">.</span>
        </h2>
      </div>

      {/* Large Typography Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-beige/80">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`pt-8 md:pt-0 ${
              idx !== 0 ? "md:pl-10" : ""
            } flex flex-col justify-between group`}
          >
            <div>
              {/* Massive Cherry Red Number */}
              <div className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light text-cherry tracking-tight leading-none mb-4 group-hover:scale-[1.02] transition-transform origin-left">
                {stat.value}
              </div>

              {/* Stat Label */}
              <h3 className="text-lg sm:text-xl font-serif font-medium text-ink lowercase tracking-wide mb-1">
                {stat.label}
              </h3>
            </div>

            <p className="text-xs sm:text-sm font-sans text-ink/60 mt-3">
              {stat.sublabel}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
