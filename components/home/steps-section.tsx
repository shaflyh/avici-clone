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
    <section className="py-12 sm:py-20">
      <Container>
        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {/* Left column - Steps */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -30% 0px" }}
              transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
              className="mb-8 sm:mb-12 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
            >
              How it works
            </motion.h2>

            {/* Mobile phone preview - shown only on mobile */}
            <motion.div
              className="md:hidden mb-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -30% 0px" }}
              transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: 0.2 }}
            >
              <div className="relative w-full max-w-48 sm:max-w-56">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-4 z-0 overflow-hidden rounded-[1.5rem]"
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
                <Image
                  src={phoneFrameSrc}
                  alt="Phone frame"
                  width={520}
                  height={980}
                  className="relative z-10 h-auto w-full"
                />
              </div>
            </motion.div>

            <motion.ul
              className="flex flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: 0.3 }}
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                return (
                  <li
                    key={step.title}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className="flex min-h-24 sm:min-h-32 md:min-h-[60vh] items-start gap-3 sm:gap-4 py-4 sm:py-6 md:pt-48"
                  >
                    <span
                      className={`mt-1 inline-flex size-10 sm:size-12 md:size-14 shrink-0 items-center justify-center rounded-lg sm:rounded-xl transition-colors duration-300 ${
                        isActive
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      <Icon className="size-5 sm:size-6 md:size-7" />
                    </span>
                    <div>
                      <h4
                        className={`text-lg sm:text-xl md:text-2xl font-semibold transition-colors duration-300 ${
                          isActive ? "text-slate-900" : "text-slate-400"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-sm sm:text-base md:text-lg transition-colors duration-300 ${
                          isActive ? "text-slate-500" : "text-slate-300"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          {/* Right column - Sticky phone (hidden on mobile) */}
          <motion.div
            className="relative h-full hidden md:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -30% 0px" }}
            transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: 0.2 }}
          >
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
