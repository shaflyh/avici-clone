"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/common/container";

const phoneFrame = "/images/phone-frame.avif";
const phoneScrollContent = "/images/phone-hero-content.avif";

// Phase 1: How many pixels of scroll for the tilt/scale animation (BEFORE sticky)
const TILT_DISTANCE = 380;
// Phase 2: How many pixels of scroll for the content to fully scroll (DURING sticky)
const SCROLL_DISTANCE = 580;
// Initial tilt angle in degrees (tilted back)
const INITIAL_TILT = 30;
// Initial scale (1 = normal, 1.8 = 80% bigger)
const INITIAL_SCALE = 1.8;

export function HeroSection() {
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const [tiltProgress, setTiltProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const phoneContainer = phoneContainerRef.current;
      if (!phoneContainer) return;

      const scrollY = window.scrollY;
      const rect = phoneContainer.getBoundingClientRect();
      const containerTop = rect.top;

      // Phase 1: Tilt animation - based on page scroll from the very beginning
      const tiltProg = Math.min(scrollY / TILT_DISTANCE, 1);
      setTiltProgress(tiltProg);

      // Phase 2: Content scroll - when phone container becomes sticky
      if (containerTop <= 0) {
        const scrolled = Math.abs(containerTop);
        setScrollProgress(Math.min(scrolled / SCROLL_DISTANCE, 1));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transforms
  const currentTilt = INITIAL_TILT * (1 - tiltProgress);
  const currentScale = INITIAL_SCALE - (INITIAL_SCALE - 1) * tiltProgress;
  const translateY = scrollProgress * SCROLL_DISTANCE;

  return (
    <section className="relative">
      {/* Title and subtitle - scrolls normally */}
      <Container className="flex flex-col items-center pt-16 text-center">
        <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-slate-900 sm:text-8xl">
          Hold Crypto, get Cash
        </h1>
        <p className="mt-8 max-w-3xl text-balance text-base text-slate-500 sm:text-lg">
          Spend easily via Secured credit card using crypto while having full
          control of your funds.
        </p>
      </Container>

      {/* Phone container - only this part is sticky */}
      <div
        ref={phoneContainerRef}
        className="relative"
        style={{
          // Height for: tilt animation + scroll animation
          height: `calc(65vh + ${TILT_DISTANCE + SCROLL_DISTANCE}px)`,
        }}
      >
        {/* Sticky phone - centered on screen */}
        <div
          className="sticky top-0 flex h-screen items-center justify-center pt-24"
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative w-full max-w-sm px-4"
            style={{
              transform: `rotateX(${currentTilt}deg) scale(${currentScale})`,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            {/* Phone frame */}
            <Image
              src={phoneFrame}
              alt="Avici app preview"
              width={520}
              height={1280}
              priority
              className="relative z-10 h-auto w-full"
            />

            {/* Scrolling content container */}
            <div
              className="absolute inset-x-0 z-0 overflow-hidden px-3"
              style={{
                borderRadius: "64px",
                top: "1%",
                left: "3%",
                right: "3%",
                bottom: "3%",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={phoneScrollContent}
                alt="App content"
                className="w-full"
                style={{
                  transform: `translateY(-${translateY}px)`,
                  willChange: "transform",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
