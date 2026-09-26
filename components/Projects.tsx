"use client";

import React from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";

const projects: ProjectData[] = [
  {
    number: "01",
    title: "Mana Community Platform",
    tagline: "real-time community management",
    description:
      "A real-time community management platform inspired by MyGate featuring dedicated modules for event coordination, sports registrations, worker logs, and comprehensive resident gate services.",
    highlights: [
      "Event management",
      "Sports registrations",
      "Worker management",
      "Resident services",
      "Role-based workflows",
      "RESTful backend APIs",
    ],
    techStack: ["React.js", "Spring Boot", "PostgreSQL", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/Mokshitha08-ui/mana-community-app",
  },
  {
    number: "02",
    title: "MindBridge",
    tagline: "collaborative mental wellness",
    description:
      "A collaborative mental wellness sanctuary designed for proactive mood tracking, reflective journaling, and supportive peer community Circles.",
    highlights: [
      "Mood tracking",
      "Journals",
      "Support Circles",
      "Authentication",
      "Profiles",
      "Dashboard",
    ],
    techStack: ["Next.js", "React.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/Mokshitha08-ui/MindBridge",
  },
  {
    number: "03",
    title: "TrackHire",
    tagline: "internship & career pipeline",
    description:
      "A full-stack career and internship management platform empowering students to organize applications, track interview stages, and analyze conversion funnels.",
    highlights: [
      "Application tracking",
      "CRUD operations",
      "Filtering & search",
      "Status history",
      "Analytics",
      "Notifications",
    ],
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express", "Chart.js"],
    githubUrl: "https://github.com/Mokshitha08-ui/TrackHire",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-beige/60">
      {/* Section Header */}
      <div className="mb-14 sm:mb-20">
        <span className="text-xs uppercase tracking-widest font-mono text-ink/50 mb-3 block">
          03 / PORTFOLIO
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-cherry lowercase tracking-tight leading-none">
          selected work<span className="text-cherry-dark">.</span>
        </h2>
      </div>

      {/* Projects List */}
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
