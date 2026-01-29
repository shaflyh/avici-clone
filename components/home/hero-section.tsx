import Image from "next/image";

import { Container } from "@/components/common/container";

const phoneSrc = "/images/hero-phone.avif";

export function HeroSection() {
  return (
    <section className="pt-16">
      <Container className="flex flex-col items-center text-center">
        <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-slate-900 sm:text-8xl">
          Hold Crypto, get Cash
        </h1>
        <p className="mt-8 max-w-3xl text-balance text-base text-slate-500 sm:text-lg">
          Spend easily via Secured credit card using crypto while having full
          control of your funds.
        </p>
        <div className="mt-12 flex w-full items-center justify-center">
          <div className="relative w-full max-w-sm">
            <Image
              src={phoneSrc}
              alt="Avici app preview"
              width={520}
              height={980}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
