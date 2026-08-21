'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { MetaIcon } from '@/components/meta-icon';
import { Button } from '@/components/ui/button';


export function PageNav({
  backHref = '/',
  backLabel = 'Back to Home',
}: {
  backHref?: string;
  backLabel?: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 px-3 sm:px-4 pt-2.5 sm:pt-3.5">
      <nav
        className={`relative max-w-5xl mx-auto rounded-full border backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? 'bg-background/92 border-border shadow-[0_14px_44px_-18px_rgba(32,22,48,0.35)]'
            : 'bg-background/65 border-border/60'
        }`}
      >
        <div className="pl-3.5 pr-2 sm:pl-4 sm:pr-2.5 h-14 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo-icon.png" alt="Swiftgigs logo" width={200} height={200}
              className="nav-logo-icon h-10 w-10 object-contain" priority />
            <span className="nav-logo-text -ml-2.5 text-[20px] font-display font-bold tracking-tight leading-none">wiftgigs</span>
          </Link>

          <Link
            href={backHref}
            className="hidden sm:inline-flex items-center gap-1.5 text-[13.5px] font-medium text-foreground/60 hover:text-foreground rounded-full px-4 py-2 hover:bg-muted transition-colors group absolute left-1/2 -translate-x-1/2"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            {backLabel}
          </Link>

          <div className="flex items-center gap-1.5">
            <Link
              href={backHref}
              aria-label={backLabel}
              className="sm:hidden rounded-full p-2.5 border border-border/70 hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link href="/waitlist">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-4 sm:px-5 font-semibold h-9">
                <WhatsAppIcon className="w-3.5 h-3.5 sm:mr-1" />
                <span className="hidden sm:inline">Join the waitlist</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export function PageFooter() {
  return (
    <footer className="bg-ink text-white pt-14 pb-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-6 gap-y-10 md:gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display font-bold text-xl mb-3">Swiftgigs</p>
            <p className="text-sm text-white/50 leading-relaxed max-w-[16rem] mb-6">
              Vetted local help for everyday tasks, all on WhatsApp. Available across Nigeria.
            </p>
            <a href="/waitlist"
              className="inline-flex items-center gap-2 bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors">
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              Join the waitlist
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white/40 text-[13px] uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-[15px] text-white/65">
              {[['About', '/about'], ['Blog', '/blog'], ['Careers', '/careers']].map(([l, h]) => (
                <li key={l}><Link href={h} className="hover:text-white transition">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white/40 text-[13px] uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-[15px] text-white/65">
              <li><Link href="/terms" className="hover:text-white transition">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1">
            <h4 className="font-semibold mb-4 text-white/40 text-[13px] uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-[15px] text-white/65">
              <li><a href="/waitlist" className="hover:text-white transition">Waitlist</a></li>
              <li><a href="mailto:support@swiftgigs.com.ng" className="hover:text-white transition">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mb-6">
          <span className="inline-flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-full pl-1.5 pr-5 py-1.5">
            <Image src="/cac-logo.png" alt="Corporate Affairs Commission (CAC) Nigeria seal" width={585} height={579}
              className="h-9 w-9 rounded-full bg-white object-contain" />
            <span className="text-left leading-tight">
              <span className="block text-[12.5px] font-semibold text-white/85">CAC Registered Business</span>
              <span className="block text-[11px] text-white/45">Corporate Affairs Commission · Nigeria</span>
            </span>
          </span>
          <span className="inline-flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-full pl-1.5 pr-5 py-1.5">
            <span className="h-9 w-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <MetaIcon className="w-[22px] h-auto" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[12.5px] font-semibold text-white/85">Meta Verified Business</span>
              <span className="block text-[11px] text-white/45">Business verified by Meta</span>
            </span>
          </span>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/35">
          <p>&copy; 2026 Swiftgigs Technologies LTD. All rights reserved.</p>
          <p>Built for Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}
