import Image from "next/image";

import { Container } from "@/components/common/container";
import { Card } from "@/components/ui/card";

const phoneSrc = "/images/hero-phone.avif";

export function SpendSection() {
  return (
    <section>
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src={phoneSrc}
                alt="Avici spending preview"
                width={520}
                height={980}
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute left-4 top-14 rounded-3xl bg-white/90 px-4 py-3 text-xs font-medium text-slate-700 shadow-lg">
                Withdraw funds
              </div>
              <div className="pointer-events-none absolute bottom-20 right-6 rounded-3xl bg-white/90 px-4 py-3 text-xs font-medium text-slate-700 shadow-lg">
                Self custody
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Spend it, don&apos;t sell it
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Use your crypto without giving it up.
            </h2>
            <p className="text-base text-slate-500">
              With Avici, you keep your assets in a self-custody wallet and spend
              instantly with a card that matches your crypto balance.
            </p>
            <Card className="rounded-3xl border-none bg-slate-50 p-6 shadow-none">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-black text-white">
                  +
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Create multiple cards
                  </p>
                  <p className="text-xs text-slate-500">
                    Organize groceries, travel, and bills with separate spending
                    buckets.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
