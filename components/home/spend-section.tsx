"use client";

import { motion } from "framer-motion";
import { ArrowDownLeft, ListTodo } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/common/container";
import { Card } from "@/components/ui/card";

const phoneSrc = "/images/phone-app-balance.avif";
const cardsIcon = "/images/visa-cards-icon.avif";

export function SpendSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-32">
          <p className="text-6xl font-semibold text-slate-200 md:text-8xl">
            Spend it, don&apos;t sell it
          </p>
        </div>

        {/* Main container for sticky behavior */}
        {/* Two column layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column - Phone sticky */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative mx-auto w-full max-w-xs">
                {/* Drop shadow */}
                <div className="absolute -bottom-12 left-16 h-[90%] w-[90%] rounded-[3rem] bg-black/20 blur-3xl" />
                <Image
                  src={phoneSrc}
                  alt="Avici spending preview"
                  width={520}
                  height={980}
                  className="relative z-10 h-auto w-full drop-shadow-2xl"
                />
              </div>
            </div>
            {/* Floating cards */}
            <div className="flex flex-wrap gap-4">
              <motion.div
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
                  <ArrowDownLeft className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-900">
                  Withdraw funds
                  <br />
                  anytime
                </span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-2 rounded-2xl bg-white px-6 py-4 shadow-lg"
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-900">
                  <ListTodo className="h-6 w-6 text-slate-900" />
                </div>
                <span className="text-center text-sm font-medium text-slate-900">
                  Self custody
                  <br />
                  credit
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right column - scrollable content */}
          <div className="flex flex-col gap-8">
            {/* Heading - right aligned */}
            <div className="flex justify-end mt-36 pb-8">
              <h2 className="max-w-md text-left text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                With your crypto, Visa simply hands you a credit line with
                matching spending power.
              </h2>
            </div>

            <Card className="rounded-3xl border-none bg-slate-100/80 px-8 py-16 shadow-none md:px-12 md:py-20">
              <div className="flex flex-col gap-8">
                {/* Visa cards content */}
                <div className="flex flex-col items-start gap-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <Image
                      src={cardsIcon}
                      alt="Visa cards icon"
                      width={80}
                      height={80}
                      className="h-auto w-16"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                    Create multiple cards for different categories subs,
                    groceries, travel & more.
                  </h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
