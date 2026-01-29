import Image from "next/image";

import { Container } from "@/components/common/container";
import { Card } from "@/components/ui/card";

const phoneSrc = "/images/hero-phone.avif";

export function CardsSection() {
  return (
    <section>
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-3xl border-none bg-slate-50 p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Physical Card
              </h3>
              <p className="text-sm text-slate-500">
                Tap anywhere Visa is accepted with a premium physical card.
              </p>
              <Image
                src={phoneSrc}
                alt="Physical card preview"
                width={520}
                height={520}
                className="h-auto w-full"
              />
            </div>
          </Card>
          <Card className="rounded-3xl border-none bg-black p-6 text-white">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Tap to Pay</h3>
              <p className="text-sm text-white/70">
                Pay with Apple Pay or Google Pay in seconds.
              </p>
              <Image
                src={phoneSrc}
                alt="Digital wallet preview"
                width={520}
                height={520}
                className="h-auto w-full"
              />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
