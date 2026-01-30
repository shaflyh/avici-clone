"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.header
      className="sticky top-4 z-50 mx-4 mt-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="mx-auto max-w-7xl rounded-full border border-slate-200/10 bg-slate-300/30 px-8 py-4 shadow-lg backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-semibold tracking-wide text-slate-900 transition-opacity hover:opacity-80"
          >
            <Image
              src="/avici-icon.avif"
              alt="avici icon"
              width={28}
              height={28}
              className="size-8"
            />
            avici
          </Link>
          <Button className="group relative rounded-full bg-black px-6! py-6 text-white transition-all duration-300 hover:bg-black/90 hover:cursor-pointer hover:pr-10!">
            Download App
            <ArrowRight className="absolute right-4 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100" />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
