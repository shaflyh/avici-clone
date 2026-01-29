import { Container } from "@/components/common/container";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <Container className="flex flex-col gap-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-slate-900">
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-black text-white">
            a
          </span>
          avici
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-wide text-slate-500">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Support</span>
          <span>Contact</span>
        </div>
      </Container>
    </footer>
  );
}
