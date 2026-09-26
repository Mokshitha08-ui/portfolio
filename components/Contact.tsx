"use client";

import React, { useState } from "react";
import { MailIcon, GithubIcon, LinkedinIcon, ArrowRightIcon, CheckIcon } from "./Icons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Frontend-only handler: construct a mailto link and show delightful confirmation
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:mokshitagali@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-beige/60">
      {/* Editorial Section Heading */}
      <div className="mb-14 sm:mb-20">
        <span className="text-xs uppercase tracking-widest font-mono text-ink/50 mb-3 block">
          07 / CONTACT
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-cherry lowercase tracking-tight leading-none">
          let&apos;s talk<span className="text-cherry-dark">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Editorial message & direct reach-outs */}
        <div className="lg:col-span-5 space-y-8">
          <p className="text-xl sm:text-2xl font-serif text-ink/90 leading-snug">
            have a project, opportunity,
            <br /> or just want to say hello?
          </p>

          <p className="text-sm sm:text-base font-sans text-ink/70 leading-relaxed max-w-sm">
            i&apos;m always excited to discuss software engineering, creative frontend
            concepts, hackathon ideas, or collaborative roles.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-3 text-sm font-sans text-ink/80">
              <span className="w-8 h-8 rounded-full bg-beige/60 flex items-center justify-center text-cherry">
                <MailIcon className="w-4 h-4" />
              </span>
              <a
                href="mailto:mokshitagali@gmail.com"
                className="hover:text-cherry transition-colors font-mono text-xs sm:text-sm underline decoration-cherry/30 underline-offset-4"
              >
                mokshitagali@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3 text-sm font-sans text-ink/80">
              <span className="w-8 h-8 rounded-full bg-beige/60 flex items-center justify-center text-cherry">
                <LinkedinIcon className="w-4 h-4" />
              </span>
              <a
                href="https://www.linkedin.com/in/sai-mokshitha-gali-54143837a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cherry transition-colors font-mono text-xs sm:text-sm underline decoration-cherry/30 underline-offset-4"
              >
                linkedin.com/in/sai-mokshitha-gali-54143837a
              </a>
            </div>

            <div className="flex items-center space-x-3 text-sm font-sans text-ink/80">
              <span className="w-8 h-8 rounded-full bg-beige/60 flex items-center justify-center text-cherry">
                <GithubIcon className="w-4 h-4" />
              </span>
              <a
                href="https://github.com/Mokshitha08-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cherry transition-colors font-mono text-xs sm:text-sm underline decoration-cherry/30 underline-offset-4"
              >
                github.com/Mokshitha08-ui
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean contact form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 bg-white/70 backdrop-blur-sm rounded-lg border border-beige/90 shadow-paper space-y-6"
          >
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wider text-ink/60 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                placeholder="e.g. Eleanor Vance"
                className="w-full px-4 py-3 bg-cream/50 border border-beige/90 rounded-sm text-sm font-sans text-ink focus:outline-none focus:border-cherry focus:ring-1 focus:ring-cherry transition-all placeholder:text-ink/30"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-ink/60 mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                placeholder="e.g. eleanor@example.com"
                className="w-full px-4 py-3 bg-cream/50 border border-beige/90 rounded-sm text-sm font-sans text-ink focus:outline-none focus:border-cherry focus:ring-1 focus:ring-cherry transition-all placeholder:text-ink/30"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wider text-ink/60 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                placeholder="write your message here..."
                className="w-full px-4 py-3 bg-cream/50 border border-beige/90 rounded-sm text-sm font-sans text-ink focus:outline-none focus:border-cherry focus:ring-1 focus:ring-cherry transition-all placeholder:text-ink/30 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-cherry hover:bg-cherry-dark text-cream font-medium text-sm tracking-wide rounded-full shadow-sm hover:shadow-editorial transition-all duration-300"
              >
                {submitted ? (
                  <>
                    <CheckIcon className="w-4 h-4" />
                    <span>opening your email client...</span>
                  </>
                ) : (
                  <>
                    <span>send message</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {submitted && (
              <p className="text-xs font-mono text-cherry animate-fade-in">
                ✓ Thank you! Preparing message to mokshitha...
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
