import Image from "next/image";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

const phoneSrc = "/images/hero-phone.avif";

export function DownloadSection() {
  return (
    <section className="pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[48px] bg-black px-6 py-12 text-white sm:px-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Money, forever yours
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Own your wallet. Spend everywhere.
              </h2>
              <p className="text-sm text-white/70">
                Switch to Avici and keep custody while accessing the
                world&apos;s most accepted card network.
              </p>
              <Button className="rounded-full bg-white px-6 text-sm text-black hover:bg-white/90">
                Download app
              </Button>
            </div>
            <div className="relative flex items-end justify-center md:justify-end">
              <Image
                src={phoneSrc}
                alt="Avici app on phone"
                width={420}
                height={820}
                className="h-auto w-full max-w-xs translate-y-10"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
