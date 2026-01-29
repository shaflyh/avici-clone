"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/common/container";

const phoneFrame = "/images/phone-frame.avif";
const phoneScrollContent = "/images/phone-hero-content.avif";

// How many pixels of page scroll for the phone content to fully scroll
const SCROLL_DISTANCE = 600;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();

      // Start scrolling content when section top hits viewport top
      // rect.top is negative when scrolled past the top
      if (rect.top <= 0) {
        // How far we've scrolled into the section
        const scrolledIntoSection = Math.abs(rect.top);
        // Clamp between 0 and SCROLL_DISTANCE
        const clampedScroll = Math.min(
          Math.max(scrolledIntoSection, 0),
          SCROLL_DISTANCE,
        );
        setTranslateY(clampedScroll);
      } else {
        setTranslateY(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `calc(100vh + ${SCROLL_DISTANCE}px)` }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <Container className="flex flex-col items-center text-center">
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-slate-900 sm:text-8xl">
            Hold Crypto, get Cash
          </h1>
          <p className="mt-8 max-w-3xl text-balance text-base text-slate-500 sm:text-lg">
            Spend easily via Secured credit card using crypto while having full
            control of your funds.
          </p>
          <div className="mt-12 flex w-full items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Phone frame - stays static */}
              <Image
                src={phoneFrame}
                alt="Avici app preview"
                width={520}
                height={1280}
                priority
                className="relative z-10 h-auto w-full"
              />

              {/* Scrolling content container - masked to phone screen area */}
              <div
                className="absolute inset-x-0 z-0 overflow-hidden px-3"
                style={{
                  borderRadius: "64px",
                  top: "1%",
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
        </Container>
      </div>
    </section>
  );
}
