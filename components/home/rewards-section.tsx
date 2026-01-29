import { Gift, HandCoins, ShieldCheck, Utensils } from "lucide-react";

import { Container } from "@/components/common/container";
import { Card } from "@/components/ui/card";

const rewards = [
  {
    title: "Luxury lounges",
    description: "Access premium airport lounges worldwide.",
    icon: Gift,
  },
  {
    title: "Dining perks",
    description: "Rewards at top restaurants and reservations.",
    icon: Utensils,
  },
  {
    title: "Concierge service",
    description: "24/7 support for travel and lifestyle.",
    icon: ShieldCheck,
  },
  {
    title: "Cashback",
    description: "Earn crypto cashback on every spend.",
    icon: HandCoins,
  },
];

export function RewardsSection() {
  return (
    <section>
      <Container>
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Visa card rewards
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Rewards and benefits.
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
            {rewards.map((reward) => {
              const Icon = reward.icon;
              return (
                <Card
                  key={reward.title}
                  className="min-w-[220px] rounded-3xl border-none bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-slate-900">
                    {reward.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500">
                    {reward.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
