"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

const phoneSrc = "/images/phone-app-download.avif";
const leatherTextureSrc = "/images/leather-texture.avif";

export function DownloadSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="pb-20" ref={sectionRef}>
      <Container>
        <div className="relative overflow-hidden rounded-[48px] bg-black text-white">
          {/* Leather texture background */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src={leatherTextureSrc}
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="relative flex min-h-140 flex-col md:grid md:grid-cols-2">
            {/* Left content */}
            <motion.div
              className="flex flex-col justify-center space-y-6 px-8 py-12 sm:px-16 md:py-16 lg:px-16"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                Money, Forever
                <br />
                yours
              </motion.h2>
              <motion.p
                className="max-w-sm text-xl text-white sm:text-2xl font-medium"
                variants={itemVariants}
              >
                Ditch the wallets, skip the exchanges, and forget the banks.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button
                  asChild
                  className="group relative rounded-full bg-white text-base px-8! py-6 font-medium text-black transition-all duration-300 hover:bg-white/90 hover:cursor-pointer hover:pr-12!"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Download App
                    <ArrowRight className="absolute right-6 h-5 w-5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </motion.button>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right phone - clipped */}
            <div className="relative flex-1 overflow-hidden md:h-auto md:flex-none">
              <motion.div
                className="absolute left-1/2 top-0 w-48 -translate-x-1/2 sm:w-56 md:left-auto md:right-8 md:top-16 md:w-80 md:translate-x-0 lg:right-16 lg:w-85"
                variants={phoneVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Image
                  src={phoneSrc}
                  alt="Avici app on phone"
                  width={820}
                  height={1020}
                  className="h-auto w-full"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
