"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/common/container";
import { Card } from "@/components/ui/card";

const cardSrc = "/images/visa-card.avif";
const phoneCardSrc = "/images/phone-visa-card.avif";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export function CardsSection() {
  return (
    <section>
      <Container>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        >
          <motion.div variants={cardVariants}>
            <Card className="rounded-3xl border-none bg-slate-100 p-6 text-black h-auto min-h-80 sm:p-8 sm:h-128 overflow-hidden">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-4xl font-semibold">
                  Physical Card
                </h3>
                <p className="text-base sm:text-xl font-medium text-slate-500">
                  Get an Avici Physical Card delivered to your doorstep.
                </p>
                <Image
                  src={cardSrc}
                  alt="Digital wallet preview"
                  width={520}
                  height={520}
                  className="h-auto w-full"
                />
              </div>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card className="rounded-3xl border-none bg-slate-100 p-6 text-black h-auto min-h-80 sm:p-8 sm:h-128 overflow-hidden">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-4xl font-semibold">
                  Tap to Pay
                </h3>
                <p className="text-base sm:text-xl font-medium text-slate-500">
                  Shop offline like a pro by adding to Apple Pay or Google pay
                </p>
                <Image
                  src={phoneCardSrc}
                  alt="Digital wallet preview"
                  width={520}
                  height={520}
                  className="h-auto w-full"
                />
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
