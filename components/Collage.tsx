"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Editorial Fidget Scrapbook Collage — About Me
 *
 * Motion Architecture:
 * 1. Scroll Convergence (Outer wrappers):
 *    - Starts from clearly evident outer positions (55px–75px offset, opacity: 0.35).
 *    - As user scrolls into About, stickers swoop into their corners with satisfying,
 *      evident directional motion (scrub: 0.3).
 * 2. Continuous Fidget Physics (Inner wrappers):
 *    - Hardware-accelerated CSS keyframe floating (fidget-bob-1, fidget-bob-2, fidget-bob-3).
 *    - Evident 8px–9px vertical travel and 2.5°–3.5° sway, perfectly desynchronized.
 *    - Never conflicts with ScrollTrigger because they operate on nested DOM nodes.
 * 3. Interactive Tactile Response:
 *    - On hover: springs up with scale(1.14), deeper shadow, and tactile feel.
 *    - On click/active: spring squeeze (scale: 0.96).
 */
export default function Collage() {
  const collageRef    = useRef<HTMLDivElement>(null);
  const cameraRef     = useRef<HTMLDivElement>(null);
  const flowerRef     = useRef<HTMLDivElement>(null);
  const coffeeRef     = useRef<HTMLDivElement>(null);
  const toastRef      = useRef<HTMLDivElement>(null);
  const headphonesRef = useRef<HTMLDivElement>(null);
  const laptopRef     = useRef<HTMLDivElement>(null);
  const codeRef       = useRef<HTMLDivElement>(null);
  const bunnyRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !collageRef.current) return;

    const ctx = gsap.context(() => {
      // ── EVIDENT SCROLL CONVERGENCE ───────────────────────────────────────
      // Noticeable 55px-75px travel distance so the user clearly sees each
      // sticker glide inward from around the card into its exact corner.
      const st = gsap.timeline({
        scrollTrigger: {
          trigger: collageRef.current,
          start: "top 88%",
          end: "top 52%",
          scrub: 0.35, // Smooth, evident scrub
        },
      });

      // LEFT 3: glide in from the left
      st.fromTo(
        cameraRef.current,
        { x: -65, y: -45, opacity: 0.3, rotation: -8 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" },
        0
      );
      st.fromTo(
        flowerRef.current,
        { x: -60, y: -10, opacity: 0.3, rotation: -18 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" },
        0
      );
      st.fromTo(
        coffeeRef.current,
        { x: -55, y: 45, opacity: 0.3, rotation: -12 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" },
        0
      );
      st.fromTo(
        toastRef.current,
        { x: -70, y: 55, opacity: 0.3, rotation: 10 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" },
        0
      );

      // RIGHT 4: glide in from the right
      st.fromTo(
        headphonesRef.current,
        { x: 65, y: -45, opacity: 0.3, rotation: 16 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" },
        0
      );
      st.fromTo(
        codeRef.current,
        { x: 55, y: 15, opacity: 0.3, rotation: 12 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" },
        0
      );
      st.fromTo(
        bunnyRef.current,
        { x: 70, y: 30, opacity: 0.3, rotation: -10 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" },
        0
      );
      st.fromTo(
        laptopRef.current,
        { x: 65, y: 45, opacity: 0.3, rotation: -14 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" },
        0
      );
    }, collageRef);

    return () => ctx.revert();
  }, []);

  // Drop shadows hugging transparent cutout contours
  const shadowFront = { filter: "drop-shadow(2px 6px 14px rgba(0,0,0,0.20))" };
  const shadowBadge = { filter: "drop-shadow(1px 3px 7px rgba(0,0,0,0.16))" };

  return (
    <div className="w-full flex justify-center overflow-visible pt-4 pb-8">
      {/* 
        .about-collage container:
        The portrait is the solid anchor (w-[280px] sm:w-[310px]).
        All 6 stickers frame its perimeter.
      */}
      <div
        ref={collageRef}
        className="about-collage relative w-[280px] sm:w-[310px] aspect-[4/5] select-none mx-auto"
      >
        {/* ══════════════════════════════════════════════════════════════════
            CENTRAL RECTANGULAR PHOTOGRAPH (HERO ELEMENT)
            ══════════════════════════════════════════════════════════════════ */}
        <div className="about-portrait relative w-full h-full rounded-[4px] overflow-hidden bg-[#ECE5D8] border border-ink/20 shadow-editorial z-[10]">
          <img
            src="/images/profile/portrait.jpg"
            alt="Mokshitha Gali"
            className="w-full h-full object-cover object-[75%_45%]"
          />
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            LEFT SIDE: EXACTLY 3 STICKERS
            ══════════════════════════════════════════════════════════════════ */}


        {/* 1. LEFT TOP: Vintage Camera */}
        <div
          ref={cameraRef}
          className="absolute -top-7 -left-7 sm:-left-9 z-[20] w-[94px] sm:w-[106px] pointer-events-auto cursor-pointer"
        >
          <div className="fidget-bob-1 fidget-interactive rotate-[4deg]">
            <Image
              src="/images/stickers/camera-cut.png"
              alt="Silver camera with pink ribbon"
              width={240}
              height={200}
              className="w-full h-auto"
              style={shadowFront}
              priority
            />
          </div>
        </div>

        {/* 2. LEFT MIDDLE: Pink Flower (Elevated & Fully Visible) */}
        <div
          ref={flowerRef}
          className="absolute top-[27%] sm:top-[28%] -left-8 sm:-left-10 z-[20] w-[68px] sm:w-[78px] pointer-events-auto cursor-pointer"
        >
          <div className="fidget-bob-2 fidget-interactive rotate-[-10deg]">
            <Image
              src="/images/stickers/flower-cut.png"
              alt="Pink lily flower"
              width={160}
              height={160}
              className="w-full h-auto"
              style={shadowFront}
              priority
            />
          </div>
        </div>

        {/* 3. LEFT LOWER-MIDDLE: Iced Coffee */}
        <div
          ref={coffeeRef}
          className="absolute top-[55%] -left-7 sm:-left-9 z-[20] w-[64px] sm:w-[74px] pointer-events-auto cursor-pointer"
        >
          <div className="fidget-bob-3 fidget-interactive rotate-[-5deg]">
            <Image
              src="/images/stickers/coffee-cut.png"
              alt="Iced coffee"
              width={160}
              height={180}
              className="w-full h-auto"
              style={shadowFront}
              priority
            />
          </div>
        </div>

        {/* 4. LEFT BOTTOM: Avocado Toast */}
        <div
          ref={toastRef}
          className="absolute bottom-2 -left-8 sm:-left-10 z-[20] w-[76px] sm:w-[86px] pointer-events-auto cursor-pointer"
        >
          <div className="fidget-bob-2 fidget-interactive rotate-[8deg]">
            <Image
              src="/images/stickers/toast_cut.png"
              alt="Avocado toast sticker"
              width={200}
              height={180}
              className="w-full h-auto"
              style={{ ...shadowFront, mixBlendMode: "multiply" }}
              priority
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            RIGHT SIDE: 4 STICKERS
            ══════════════════════════════════════════════════════════════════ */}

        {/* 1. RIGHT TOP: Over-Ear Headphones */}
        <div
          ref={headphonesRef}
          className="absolute -top-7 -right-7 sm:-right-9 z-[20] w-[96px] sm:w-[108px] pointer-events-auto cursor-pointer"
        >
          <div className="fidget-bob-2 fidget-interactive rotate-[10deg]">
            <Image
              src="/images/stickers/headphones-cut.png"
              alt="White over-ear headphones"
              width={240}
              height={220}
              className="w-full h-auto"
              style={shadowFront}
              priority
            />
          </div>
        </div>

        {/* 2. RIGHT UPPER-MIDDLE: Code Sticker */}
        <div
          ref={codeRef}
          className="absolute top-[28%] sm:top-[29%] -right-4 sm:-right-6 z-[20] pointer-events-auto cursor-pointer"
        >
          <div className="fidget-bob-3 fidget-interactive rotate-[5deg]">
            <div
              className="bg-white rounded-[4px] px-2.5 py-1 border border-ink/20 shadow-xs"
              style={shadowBadge}
            >
              <span className="font-mono font-bold text-xs sm:text-[13px] text-ink tracking-tight select-none">
                {"</code>"}
              </span>
            </div>
          </div>
        </div>

        {/* 3. RIGHT LOWER-MIDDLE: Miffy Bunny */}
        <div
          ref={bunnyRef}
          className="absolute top-[52%] -right-7 sm:-right-9 z-[20] w-[68px] sm:w-[76px] pointer-events-auto cursor-pointer"
        >
          <div className="fidget-bob-1 fidget-interactive rotate-[-6deg]">
            <Image
              src="/images/stickers/bunny-cut.png"
              alt="Miffy bunny plush"
              width={180}
              height={200}
              className="w-full h-auto"
              style={{ ...shadowFront, mixBlendMode: "multiply" }}
              priority
            />
          </div>
        </div>

        {/* 4. RIGHT BOTTOM: Silver MacBook */}
        <div
          ref={laptopRef}
          className="absolute bottom-3 -right-8 sm:-right-11 z-[20] w-[112px] sm:w-[126px] pointer-events-auto cursor-pointer"
        >
          <div className="fidget-bob-1 fidget-interactive rotate-[-7deg]">
            <Image
              src="/images/stickers/laptop-cut.png"
              alt="Silver MacBook laptop"
              width={280}
              height={220}
              className="w-full h-auto"
              style={shadowFront}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
