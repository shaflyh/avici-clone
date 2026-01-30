import { BenefitsSection } from "@/components/home/benefits-section";
import { CardsSection } from "@/components/home/cards-section";
import { DownloadSection } from "@/components/home/download-section";
import { HeroSection } from "@/components/home/hero-section";
import { RewardsSection } from "@/components/home/rewards-section";
import { SpendSection } from "@/components/home/spend-section";
import { StepsSection } from "@/components/home/steps-section";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50  text-slate-900">
      <Navbar />
      <div className="flex flex-col gap-24 py-20 sm:gap-28">
        <HeroSection />
        <SpendSection />
        <CardsSection />
        <StepsSection />
        <BenefitsSection />
        <RewardsSection />
        <DownloadSection />
      </div>
      <Footer />
    </main>
  );
}
