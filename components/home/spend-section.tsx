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
    <section className="pt-12 sm:pt-20">
      <Container>
        <motion.div
          className="mb-16 sm:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
        >
          <p className="text-4xl sm:text-6xl font-semibold text-slate-300 md:text-8xl">
            Spend it, don&apos;t sell it
          </p>
        </motion.div>

        {/* Main container for sticky behavior */}
        {/* Two column layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column - Phone sticky */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -30% 0px" }}
            transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
          >
            <div className="md:sticky md:top-24">
              <div className="relative mx-auto w-full max-w-64 sm:max-w-xs">
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
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4 md:mt-0">
              <motion.div
                className="flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white px-3 py-2 sm:px-4 sm:py-3 shadow-lg"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-900">
                  <ArrowDownLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-900">
                  Withdraw funds
                  <br />
                  anytime
                </span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-1 sm:gap-2 rounded-xl sm:rounded-2xl bg-white px-4 py-3 sm:px-6 sm:py-4 shadow-lg"
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
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-slate-900">
                  <ListTodo className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" />
                </div>
                <span className="text-center text-xs sm:text-sm font-medium text-slate-900">
                  Self custody
                  <br />
                  credit
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - scrollable content */}
          <motion.div
            className="flex flex-col gap-8 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -30% 0px" }}
            transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: 0.2 }}
          >
            {/* Heading - right aligned */}
            <div className="flex justify-start md:justify-end mt-0 md:mt-36 pb-4 sm:pb-8">
              <h2 className="max-w-md text-left text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                With your crypto, Visa simply hands you a credit line with
                matching spending power.
              </h2>
            </div>

            <Card className="rounded-3xl border-none bg-slate-100/80 px-6 py-10 shadow-none sm:px-8 sm:py-16 md:px-12 md:py-20">
              <div className="flex flex-col gap-8">
                {/* Visa cards content */}
                <div className="flex flex-col items-start gap-4">
                  <div className="rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4 shadow-sm">
                    <Image
                      src={cardsIcon}
                      alt="Visa cards icon"
                      width={80}
                      height={80}
                      className="h-auto w-12 sm:w-16"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
                    Create multiple cards for different categories subs,
                    groceries, travel & more.
                  </h3>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
