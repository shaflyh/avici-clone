"use client";

import { motion } from "framer-motion";
import { CreditCard, KeyRound, PiggyBank } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/common/container";
import { Card } from "@/components/ui/card";

const appBenefitSrc = "/images/phone-app-benefit.avif";
const visaBenefitSrc = "/images/visa-benefit.avif";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export function BenefitsSection() {
  return (
    <section>
      <Container>
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Avici Benefits
          </motion.h2>

          {/* First Row - Large Card */}
          <motion.div variants={itemVariants}>
            <Card className="min-h-80 md:h-120 rounded-3xl overflow-hidden border-none bg-slate-100 p-6 shadow-none sm:p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Left Content */}
                <div className="flex flex-col justify-center md:h-90">
                  {/* Piggy Bank Icon */}
                  <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <PiggyBank className="h-6 w-6 sm:h-8 sm:w-8 text-slate-900" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                    Your funds, Your
                    <br />
                    control
                  </h3>

                  <p className="mt-4 max-w-sm text-sm sm:text-base text-slate-600">
                    Self-custody sounds tricky, but we&apos;ve made it easy with
                    smart tools like account abstraction and passkeys!
                  </p>
                </div>

                {/* Right Content - Phone with floating cards */}
                <div className="relative flex items-center justify-center">
                  {/* Phone Image */}
                  <div className="relative z-10">
                    <Image
                      src={appBenefitSrc}
                      alt="Avici app showing balance"
                      width={320}
                      height={640}
                      className="h-auto w-48 sm:w-80 md:w-120"
                    />
                  </div>

                  {/* Floating Card - Security */}
                  <motion.div
                    className="absolute left-0 sm:left-0 top-32 sm:top-70 z-20 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white px-3 py-2 sm:px-4 sm:py-3 shadow-lg"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100">
                      <KeyRound className="h-4 w-4 sm:h-5 sm:w-5 text-slate-900" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-900">
                      Security made
                      <br />
                      easy with passkeys
                    </span>
                  </motion.div>

                  {/* Floating Card - No transaction limits */}
                  <motion.div
                    className="absolute top-48 sm:top-85 right-0 z-20 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white px-3 py-2 sm:px-4 sm:py-3 shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-900">
                      <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-900">
                      No transaction
                      <br />
                      limits
                    </span>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Second Row - Three Cards */}
          <motion.div
            variants={itemVariants}
            className="grid gap-6 md:grid-cols-2"
          >
            {/* Visa Benefits Card */}
            <Card className="rounded-3xl border-none bg-slate-100 p-6 sm:p-8 shadow-none">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                  Visa Benefits
                </h3>
                <p className="mt-1 text-base sm:text-xl text-slate-500">
                  Avenue to TradeFI rewards
                </p>

                {/* Visa Benefit Illustration */}
                <div className="mt-4 sm:mt-6">
                  <Image
                    src={visaBenefitSrc}
                    alt="Visa benefits illustration"
                    width={300}
                    height={200}
                    className="h-auto w-full max-w-100"
                  />
                </div>
              </div>
            </Card>

            {/* Right Column - Two Stacked Cards */}
            <div className="flex flex-col gap-6">
              {/* No Hidden Fee Card */}
              <Card className="flex-1 rounded-3xl border-none bg-slate-100 p-6 sm:p-8 shadow-none gap-2">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
                  No Hidden Fee
                </h3>
                <p className="text-xl sm:text-2xl md:text-3xl text-slate-500">
                  No Gas Fee
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl text-slate-500">
                  No Interchange Fee
                </p>
              </Card>

              {/* Simple Card */}
              <Card className="flex-1 rounded-3xl border-none bg-slate-100 p-6 sm:p-8 shadow-none gap-2">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
                  Simple
                </h3>
                <p className="text-xl sm:text-2xl md:text-3xl text-slate-500">
                  Onchain
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl text-slate-500">
                  Transparent
                </p>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
