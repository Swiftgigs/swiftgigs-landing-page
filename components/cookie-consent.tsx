'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'sg-cookie-consent';
const CHANGE_EVENT = 'sg-consent-change';

type Choice = 'accepted' | 'declined';

function getConsent(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveConsent(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* storage unavailable — treat as session-only choice */
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: choice }));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent()) return;
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  const choose = (choice: Choice) => {
    saveConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[95] px-3 pb-3 sm:px-4 sm:pb-4 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-xl sm:ml-auto bg-ink text-white rounded-2xl border border-white/10 shadow-[0_24px_70px_-24px_rgba(10,6,18,0.75)] p-5 sm:p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-start gap-3.5">
          <span className="w-9 h-9 rounded-full bg-primary/25 flex items-center justify-center shrink-0">
            <Cookie className="w-4.5 h-4.5 text-[#C9A5E8]" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display font-bold text-[15px] mb-1">We value your privacy</p>
            <p className="text-[13px] text-white/60 leading-relaxed">
              We use cookies to improve your experience and analyse site traffic. Read our{' '}
              <Link href="/privacy" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button size="sm" onClick={() => choose('accepted')}
                className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold px-5 h-9">
                Accept all
              </Button>
              <Button size="sm" variant="ghost" onClick={() => choose('declined')}
                className="rounded-full font-semibold px-4 h-9 text-white/70 hover:text-white hover:bg-white/10">
                Decline
              </Button>
            </div>
          </div>
          <button
            aria-label="Dismiss cookie notice"
            onClick={() => choose('declined')}
            className="shrink-0 -mt-1 -mr-1 p-1.5 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4 text-white/50" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* Analytics only loads after the visitor accepts cookies. */
export function ConsentAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getConsent() === 'accepted');
    sync();
    window.addEventListener(CHANGE_EVENT, sync);
    return () => window.removeEventListener(CHANGE_EVENT, sync);
  }, []);

  if (!allowed || process.env.NODE_ENV !== 'production') return null;
  return <Analytics />;
}
