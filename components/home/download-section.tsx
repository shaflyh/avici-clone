import Image from "next/image";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

const phoneSrc = "/images/phone-app-balance.avif";
const leatherTextureSrc = "/images/leather-texture.jpg";

export function DownloadSection() {
  return (
    <section className="pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[48px] bg-black text-white">
          {/* Leather texture background */}
          <div className="absolute inset-0">
            <Image
              src={leatherTextureSrc}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative grid min-h-125 md:grid-cols-2">
            {/* Left content */}
            <div className="flex flex-col justify-center space-y-6 px-8 py-16 sm:px-16 lg:px-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Money, Forever
                <br />
                yours
              </h2>
              <p className="max-w-sm text-xl text-white sm:text-2xl">
                Ditch the wallets, skip the exchanges, and forget the banks.
              </p>
              <div>
                <Button className="rounded-full bg-white px-8 py-6 text-base font-medium text-black hover:bg-white/90">
                  Download App
                </Button>
              </div>
            </div>

            {/* Right phone - clipped */}
            <div className="relative hidden overflow-hidden md:block">
              <div className="absolute right-0 top-8 w-85 lg:right-8 lg:w-95">
                <Image
                  src={phoneSrc}
                  alt="Avici app on phone"
                  width={420}
                  height={820}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
