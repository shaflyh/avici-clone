import Image from "next/image";
import { CreditCard, RefreshCcw, Shield } from "lucide-react";

import { Container } from "@/components/common/container";

const phoneSrc = "/images/hero-phone.avif";

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
  return (
    <section>
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              How it works
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Securely deposit and spend in minutes.
            </h2>
            <ul className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex size-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {step.title}
                      </p>
                      <p className="text-sm text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={phoneSrc}
              alt="Balance screen preview"
              width={520}
              height={980}
              className="h-auto w-full max-w-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
