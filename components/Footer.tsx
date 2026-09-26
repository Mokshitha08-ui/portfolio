"use client";

import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-beige/80 py-16 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand / Logo */}
        <div>
          <Link
            href="#"
            className="text-2xl font-serif font-bold text-ink hover:text-cherry transition-colors"
          >
            mokshitha<span className="text-cherry">.</span>
          </Link>
          <p className="text-xs sm:text-sm font-sans text-ink/60 mt-1">
            built with curiosity &amp; too much coffee ☕
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 text-sm font-mono text-ink/70">
          <a
            href="https://github.com/Mokshitha08-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cherry transition-colors inline-flex items-center space-x-1.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sai-mokshitha-gali-54143837a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cherry transition-colors inline-flex items-center space-x-1.5"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:mokshitagali@gmail.com"
            className="hover:text-cherry transition-colors inline-flex items-center space-x-1.5"
          >
            <MailIcon className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono text-ink/50">
          &copy; 2026 Mokshitha Gali
        </div>
      </div>
    </footer>
  );
}
