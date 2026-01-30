import Image from "next/image";

import { Container } from "@/components/common/container";
import { Card } from "@/components/ui/card";

const cardSrc = "/images/visa-card.avif";
const phoneCardSrc = "/images/phone-visa-card.avif";

export function CardsSection() {
  return (
    <section>
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-3xl border-none bg-slate-100 p-8 text-black h-128 overflow-hidden">
            <div className="space-y-4">
              <h3 className="text-4xl font-semibold"> Physical Card</h3>
              <p className="text-xl font-medium text-slate-500">
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
          <Card className="rounded-3xl border-none bg-slate-100 p-8 text-black h-128 overflow-hidden">
            <div className="space-y-4">
              <h3 className="text-4xl font-semibold">Tap to Pay</h3>
              <p className="text-xl font-medium text-slate-500">
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
        </div>
      </Container>
    </section>
  );
}
