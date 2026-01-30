"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CreditCard, RefreshCcw, Shield } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/common/container";

const stepImages = [
  "/images/app-step-1.avif",
  "/images/app-step-2.avif",
  "/images/app-step-3.avif",
];
const phoneFrameSrc = "/images/phone-frame.png";

const steps = [
  {
    title: "Securely deposit your assets",
    description: "Move crypto into Avici without losing self-custody.",
    icon: Shield,
  },
  {
    title: "Card ready in minutes",
    description: "Get a virtual card instantly and a physical card after.",
    icon: CreditCard,
  },
  {
    title: "Top up and spend",
    description: "Spend worldwide with seamless onchain conversion.",
    icon: RefreshCcw,
  },
];

export function StepsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        },
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left column - Steps */}
          <div>
            <h2 className="mb-12 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              How it works
            </h2>
            <ul className="flex flex-col">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                return (
                  <li
                    key={step.title}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className="flex min-h-[60vh] items-start gap-4 pt-48"
                  >
                    <span
                      className={`mt-1 inline-flex size-14 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      <Icon className="size-7" />
                    </span>
                    <div>
                      <h4
                        className={`text-2xl font-semibold transition-colors duration-300 ${
                          isActive ? "text-slate-900" : "text-slate-400"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-lg transition-colors duration-300 ${
                          isActive ? "text-slate-500" : "text-slate-300"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right column - Sticky phone */}
          <div className="relative h-full">
            <div className="sticky top-48 flex items-center justify-center">
              <div className="relative w-full max-w-xs">
                {/* App content image - behind the frame */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-4 z-0 overflow-hidden rounded-[2rem]"
                  >
                    <Image
                      src={stepImages[activeStep]}
                      alt={`Step ${activeStep + 1} preview`}
                      width={520}
                      height={980}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Phone frame - on top */}
                <Image
                  src={phoneFrameSrc}
                  alt="Phone frame"
                  width={520}
                  height={980}
                  className="relative z-10 h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
