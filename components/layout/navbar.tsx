import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-4 mt-4">
      <nav className="mx-auto max-w-7xl rounded-full border border-slate-200/50 bg-slate-100/70 px-6 py-3 shadow-lg backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-wide text-slate-900">
            <Image
              src="/avici-icon.avif"
              alt="avici icon"
              width={28}
              height={28}
              className="size-7"
            />
            avici
          </div>
          <Button className="rounded-full bg-black px-5 py-2 text-white hover:bg-black/90">
            <span className="ml-1">Download App</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
