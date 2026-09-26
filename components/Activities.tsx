"use client";

import React from "react";

interface Activity {
  title: string;
  roleOrNote: string;
  description: string;
}

const activities: Activity[] = [
  {
    title: "Smart India Hackathon 2025",
    roleOrNote: "National Level Hackathon",
    description:
      "Collaborated intensively to design and prototype technology-driven solutions for real-world governance and civic challenges.",
  },
  {
    title: "Hacktoberfest Contributor",
    roleOrNote: "Open Source Ecosystem",
    description:
      "Active participant in open-source repositories, collaborating via pull requests, issue triaging, and code improvements.",
  },
  {
    title: "Technical Events & Contests",
    roleOrNote: "Campus & Community",
    description:
      "Regular participant and mentor across university coding competitions, workshops, and peer algorithm challenges.",
  },
  {
    title: "CSI Design Team",
    roleOrNote: "Visual Communication & Branding",
    description:
      "Crafted brand identities, visual assets, and UI promotional elements for campus computer society initiatives.",
  },
];

export default function Activities() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-beige/60 overflow-hidden">


      {/* Editorial Section Heading */}
      <div className="mb-14 sm:mb-20">
        <span className="text-xs uppercase tracking-widest font-mono text-ink/50 mb-3 block">
          06 / PURSUITS
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-cherry lowercase tracking-tight leading-none">
          outside the code<span className="text-cherry-dark">.</span>
        </h2>
      </div>

      {/* Editorial Grid of Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {activities.map((item, idx) => (
          <div
            key={item.title}
            className="p-6 sm:p-8 bg-beige/30 rounded-sm border border-beige/70 hover:border-cherry/30 hover:bg-beige/40 transition-all duration-300 relative group"
          >
            {/* Scrapbook corner tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-cherry font-semibold">
                ACT. 0{idx + 1}
              </span>
              <span className="text-[11px] font-mono text-ink/50 uppercase tracking-wider">
                {item.roleOrNote}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-medium text-ink group-hover:text-cherry transition-colors mb-2">
              {item.title}
            </h3>

            <p className="text-sm font-sans text-ink/75 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
