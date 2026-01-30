"use client";

import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Plane, Car, Bed, Utensils, Cross, Briefcase } from "lucide-react";

import { Container } from "@/components/common/container";
import { Card } from "@/components/ui/card";

const rewards = [
  {
    title: "Airline miles",
    description:
      "Earn miles on purchases and redeem for flights, upgrades, or travel perks",
    icon: Plane,
  },
  {
    title: "Auto Rental Insurances",
    description:
      "Skip the extra fees—get complimentary rental car insurance for accidents or theft.",
    icon: Car,
  },
  {
    title: "Luxury travel",
    description:
      "Enjoy room upgrades, free breakfast, late checkouts, and VIP treatment at luxury hotels",
    icon: Bed,
  },
  {
    title: "Luxury restaurants",
    description:
      "Exclusive dining discounts and perks at top-tier restaurants, because fine dining is a lifestyle",
    icon: Utensils,
  },
  {
    title: "Emergency Services",
    description:
      "24/7 emergency medical assistance worldwide through Visa's dedicated helpline",
    icon: Cross,
  },
  {
    title: "Protection Insurances",
    description:
      "Travel with peace of mind—coverage for trip cancellations, lost luggage, and more",
    icon: Briefcase,
  },
];

export function RewardsSection() {
  const autoScrollRef = useRef(
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [autoScrollRef.current],
  );

  const onPointerEnter = useCallback(() => {
    const autoScroll = autoScrollRef.current;
    if (autoScroll && autoScroll.isPlaying()) {
      autoScroll.stop();
    }
  }, []);

  const onPointerLeave = useCallback(() => {
    const autoScroll = autoScrollRef.current;
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = autoScrollRef.current;
    if (autoScroll) {
      autoScroll.play();
    }
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Visa Card
          </h2>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Rewards and Benefits
          </h2>
        </div>
      </Container>

      {/* Carousel - Full width edge to edge */}
      <div
        className="mt-10 overflow-hidden"
        ref={emblaRef}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      >
        <div className="flex">
          {rewards.map((reward) => {
            const Icon = reward.icon;
            return (
              <div
                key={reward.title}
                className="min-w-0 shrink-0 grow-0 basis-70 pl-4 md:basis-80 md:pl-6 py-2"
              >
                <Card className="h-full rounded-2xl border-none bg-white p-6 shadow-sm">
                  <span className="inline-flex size-16 items-center justify-center text-slate-900">
                    <Icon className="size-8" strokeWidth={3} />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {reward.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-700">
                    {reward.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
