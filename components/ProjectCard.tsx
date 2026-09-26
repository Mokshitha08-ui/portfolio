"use client";

import React from "react";
import { GithubIcon } from "./Icons";

export interface ProjectData {
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
}

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <article className="group relative py-12 sm:py-16 border-b border-beige/80 last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">

        {/* Left: Number + Period */}
        <div className="md:col-span-3 space-y-1 pt-1">
          <span className="text-xs font-mono font-bold text-cherry tracking-widest uppercase block">
            Project {project.number}
          </span>
          <span className="text-xs font-mono text-ink/45 lowercase block">
            {project.tagline}
          </span>
        </div>

        {/* Right: All project content */}
        <div className="md:col-span-9 space-y-5">
          {/* Title */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink tracking-tight font-medium group-hover:text-cherry transition-colors duration-300 leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-ink/75 font-sans leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {project.techStack.map((tech, i) => (
              <React.Fragment key={tech}>
                <span className="text-xs font-mono text-ink/65">{tech}</span>
                {i < project.techStack.length - 1 && (
                  <span className="text-xs font-mono text-ink/25">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Key features */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink/35 block">
              key features
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start space-x-2 text-sm font-sans text-ink/70">
                  <span className="text-cherry font-serif font-bold text-base leading-none mt-[-1px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GitHub link — only link shown */}
          {project.githubUrl && (
            <div className="pt-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-mono font-semibold text-cherry hover:text-ink transition-colors duration-200 group/link"
              >
                <GithubIcon className="w-4 h-4" />
                <span>view on github ↗</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
