'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function PageNav({
  backHref = '/',
  backLabel = 'Back to Home',
}: {
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link
          href={backHref}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group shrink-0"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          {backLabel}
        </Link>
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-icon.png"
            alt="Swiftgigs"
            width={120}
            height={120}
            className="h-10 w-10 object-contain"
          />
          <span className="-ml-2 text-xl font-black tracking-tight text-primary leading-none">wiftgigs</span>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export function PageFooter() {
  return (
    <footer className="bg-zinc-950 text-white py-8 px-4 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <span className="font-black text-lg text-primary">Swiftgigs</span>
        <p className="text-white/50">© 2025 Swiftgigs. All rights reserved.</p>
        <div className="flex gap-6 text-white/60">
          <Link href="/terms" className="hover:text-white transition">Terms</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
