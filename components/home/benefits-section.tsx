import Image from "next/image";

import { Container } from "@/components/common/container";
import { Card } from "@/components/ui/card";

const phoneSrc = "/images/hero-phone.avif";

export function BenefitsSection() {
  return (
    <section>
      <Container>
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Avici benefits
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Your funds, your control.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2 rounded-3xl border-none bg-slate-50 p-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Your funds, your control
                  </h3>
                  <p className="text-sm text-slate-500">
                    Self-custody by design with transparent onchain activity.
                  </p>
                </div>
                <Image
                  src={phoneSrc}
                  alt="Funds preview"
                  width={420}
                  height={420}
                  className="h-auto w-full max-w-xs"
                />
              </div>
            </Card>
            <Card className="rounded-3xl border-none bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Security</h3>
              <p className="mt-2 text-sm text-slate-500">
                Hardware-secured keys and account recovery.
              </p>
            </Card>
            <Card className="rounded-3xl border-none bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Visa Benefits
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Rewards, lounge access, and priority service.
              </p>
            </Card>
            <Card className="rounded-3xl border-none bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                No hidden fees
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Clear pricing with transparent FX rates.
              </p>
            </Card>
            <Card className="rounded-3xl border-none bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Simple onchain
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Instant top ups with stablecoins or ETH.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
