'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Mail, Wallet, Timer, PartyPopper, Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { MapBackdrop } from '@/components/map-background';

const STORAGE_KEY = 'sg-waitlist-entry';

/* ─────────────────────────────────────────────────────────────────
   Temporary Google Form backend (until the real API deploys).

   To wire it up:
   1. Create a Google Form with two short-answer questions:
      "Contact method" and "Email or WhatsApp number".
   2. Open the form's "Get pre-filled link", fill dummy answers, and
      copy the generated URL — it contains entry.XXXXXXXXX ids.
   3. Paste the form id + entry ids below and set enabled: true.
   Submissions appear in the Form's Responses tab / linked Sheet.
────────────────────────────────────────────────────────────────── */
const GOOGLE_FORM = {
  enabled: true,
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSebjpRjBakPB6WaqyfCk89IsFtbj2vtENk6dvDOfqACE8ytOA/formResponse',
  fields: {
    method: 'entry.479373886', // "Contact method" question
    value: 'entry.50111773',   // "Email or WhatsApp number" question
  },
};

async function submitToGoogleForm(method: Method, value: string) {
  const body = new URLSearchParams({
    [GOOGLE_FORM.fields.method]: method,
    [GOOGLE_FORM.fields.value]: value,
  });
  // no-cors: the response is opaque (Google doesn't send CORS headers),
  // but the submission still lands in the form.
  await fetch(GOOGLE_FORM.action, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
}

type Method = 'whatsapp' | 'email';

type Entry = { method: Method; value: string };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function loadEntry(): Entry | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Entry) : null;
  } catch {
    return null;
  }
}

function validate(method: Method, value: string): string | null {
  const v = value.trim();
  if (!v) return method === 'email' ? 'Please enter your email address.' : 'Please enter your WhatsApp number.';
  if (method === 'email') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? null : 'That email doesn’t look right, mind checking it?';
  }
  const digits = v.replace(/[\s\-()]/g, '');
  return /^\+?\d{10,14}$/.test(digits) ? null : 'Enter a valid WhatsApp number, e.g. 0803 123 4567.';
}

export function WaitlistClient() {
  const [method, setMethod] = useState<Method>('whatsapp');
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [entry, setEntry] = useState<Entry | null>(null);

  useEffect(() => {
    setEntry(loadEntry());
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const problem = validate(method, value);
    if (problem) {
      setError(problem);
      return;
    }
    setError(null);
    setSubmitting(true);

    // Temporary: record the signup in a Google Form until the real
    // backend (in review) is deployed — then swap this for the API call.
    try {
      if (GOOGLE_FORM.enabled) {
        await submitToGoogleForm(method, value.trim());
      } else {
        await new Promise((r) => setTimeout(r, 900));
      }
    } catch {
      /* opaque/no-cors failures are indistinguishable — treat as sent */
    }
    const saved: Entry = {
      method,
      value: value.trim(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch { /* storage unavailable — session-only */ }

    setSubmitting(false);
    setEntry(saved);
  };

  return (
    <div className="relative min-h-svh bg-background text-foreground overflow-x-clip flex flex-col">

      {/* ── Backdrop: same visual language as the landing hero ── */}
      <MapBackdrop tone="light" className="hidden md:block opacity-55 [mask-image:radial-gradient(ellipse_58%_52%_at_50%_44%,transparent_32%,black_74%)]" />
      <div className="md:hidden pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,90,150,0.11)_1px,transparent_0)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,black,transparent)]" aria-hidden />
      <div className="pointer-events-none absolute -top-44 right-[-12%] h-[520px] w-[520px] rounded-full bg-primary/[0.08] blur-3xl" aria-hidden />

      {/* ── Minimal floating nav ── */}
      <div className="sticky top-0 z-50 px-3 sm:px-4 pt-2.5 sm:pt-3.5">
        <nav className="relative max-w-3xl mx-auto rounded-full border border-border/70 bg-background/80 backdrop-blur-xl shadow-[0_14px_44px_-22px_rgba(32,22,48,0.3)]">
          <div className="pl-3.5 pr-2.5 h-14 flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/logo-icon.png" alt="Swiftgigs logo" width={200} height={200}
                className="nav-logo-icon h-10 w-10 object-contain" priority />
              <span className="nav-logo-text -ml-2.5 text-[20px] font-display font-bold tracking-tight leading-none">wiftgigs</span>
            </Link>
            <Link href="/"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-foreground/60 hover:text-foreground rounded-full px-4 py-2 hover:bg-muted transition-colors group">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Back to home
            </Link>
          </div>
        </nav>
      </div>

      {/* ── Hero ── */}
      <main className="relative flex-1 flex items-center px-4 py-10 sm:py-16">
        {/* Floating trust chips (desktop) */}
        <div className="hidden lg:flex absolute left-[7%] top-[26%] items-center gap-2.5 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-[0_12px_40px_-8px_rgba(32,22,48,0.28)] border border-black/5 animate-[floaty_5s_ease-in-out_infinite]" aria-hidden>
          <span className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center">
            <Wallet className="w-4.5 h-4.5 text-emerald-600" />
          </span>
          <span className="leading-tight">
            <span className="block text-[12.5px] font-semibold text-zinc-900">Get paid fast</span>
            <span className="block text-[11px] text-zinc-500">Escrow released to you</span>
          </span>
        </div>
        <div className="hidden lg:flex absolute right-[7%] bottom-[24%] items-center gap-2.5 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-[0_12px_40px_-8px_rgba(32,22,48,0.28)] border border-black/5 animate-[floaty_5s_ease-in-out_infinite]" style={{ animationDelay: '1.4s' }} aria-hidden>
          <span className="w-8 h-8 rounded-full bg-primary/12 flex items-center justify-center">
            <Timer className="w-4.5 h-4.5 text-primary" />
          </span>
          <span className="leading-tight">
            <span className="block text-[12.5px] font-semibold text-zinc-900">Flexible work</span>
            <span className="block text-[11px] text-zinc-500">Accept only jobs you want</span>
          </span>
        </div>

        <div className="relative w-full max-w-2xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3.5 py-1.5 mb-5 sm:mb-6 text-[12.5px] sm:text-[13px] font-medium text-foreground/75">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Worker onboarding opens soon 🇳🇬
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display font-bold text-[clamp(2.3rem,9.5vw,2.7rem)] md:text-[3.6rem] leading-[1.05] tracking-[-0.02em] mb-5">
            Be <span className="text-primary">first in line</span> to<br className="hidden sm:block" />
            {' '}earn on Swiftgigs.
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-base sm:text-lg text-foreground/60 leading-relaxed mb-7 sm:mb-9 max-w-md mx-auto">
            Join the worker waitlist and we&apos;ll message you the moment onboarding
            opens in your area: flexible jobs, escrow-protected pay, all on WhatsApp.
          </motion.p>

          {/* ── Form / success card ── */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {entry ? (
                <motion.div key="done"
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-card border border-border rounded-3xl p-7 sm:p-8 shadow-[0_28px_70px_-38px_rgba(32,22,48,0.45)] text-left"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-11 h-11 rounded-full bg-emerald-500/12 flex items-center justify-center">
                      <PartyPopper className="w-5 h-5 text-emerald-600" />
                    </span>
                    <div>
                      <p className="font-display font-bold text-lg leading-tight">You&apos;re on the list! 🎉</p>
                      <p className="text-[13px] text-foreground/55">We&apos;ll reach you at <span className="font-semibold text-foreground/80 break-all">{entry.value}</span></p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-5">
                    We&apos;ll send one message when worker onboarding opens in your
                    area. No spam, ever. Want to start sooner?
                  </p>
                  <a href="/waitlist">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-full font-semibold h-11">
                      <WhatsAppIcon className="w-4 h-4 mr-1.5" />
                      Message us on WhatsApp at launch
                    </Button>
                  </a>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} noValidate
                  exit={{ opacity: 0, scale: 0.96, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="bg-card border border-border rounded-3xl p-4 sm:p-5 shadow-[0_28px_70px_-38px_rgba(32,22,48,0.45)]"
                >
                  {/* Segmented control */}
                  <div className="relative grid grid-cols-2 bg-muted rounded-full p-1 mb-4">
                    {(['whatsapp', 'email'] as const).map((m) => (
                      <button key={m} type="button"
                        onClick={() => { setMethod(m); setError(null); }}
                        className={`relative h-9 rounded-full text-[13.5px] font-semibold transition-colors ${method === m ? 'text-foreground' : 'text-foreground/50 hover:text-foreground/75'}`}
                        aria-pressed={method === m}
                      >
                        {method === m && (
                          <motion.span layoutId="waitlist-method" className="absolute inset-0 rounded-full bg-card shadow-sm border border-border/70"
                            transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }} />
                        )}
                        <span className="relative inline-flex items-center gap-1.5">
                          {m === 'whatsapp'
                            ? <><WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp</>
                            : <><Mail className="w-3.5 h-3.5 text-primary" /> Email</>}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <label className="flex-1 flex items-center gap-2.5 h-12 rounded-full border border-border bg-background px-4 focus-within:border-primary/50 focus-within:ring-[3px] focus-within:ring-primary/15 transition-all">
                      {method === 'whatsapp'
                        ? <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                        : <Mail className="w-4 h-4 text-primary shrink-0" />}
                      <input
                        type={method === 'email' ? 'email' : 'tel'}
                        inputMode={method === 'email' ? 'email' : 'tel'}
                        autoComplete={method === 'email' ? 'email' : 'tel'}
                        placeholder={method === 'email' ? 'you@example.com' : '0803 123 4567'}
                        value={value}
                        onChange={(e) => { setValue(e.target.value); if (error) setError(null); }}
                        className="w-full bg-transparent outline-none text-[16px] placeholder:text-foreground/35 min-w-0"
                        aria-label={method === 'email' ? 'Email address' : 'WhatsApp number'}
                      />
                    </label>
                    <Button type="submit" disabled={submitting}
                      className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold h-12 px-6 shrink-0 shadow-[0_10px_28px_-10px_rgba(134,87,162,0.65)]">
                      {submitting
                        ? <Loader2 className="w-4 h-4 animate-spin" />
                        : <>Join the waitlist <ArrowRight className="w-4 h-4 ml-1" /></>}
                    </Button>
                  </div>

                  <AnimatePresence>
                    {error && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        className="text-[12.5px] text-red-500 font-medium text-left px-2 pt-2.5">
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <p className="text-[11.5px] text-foreground/40 mt-3.5">
                    One onboarding message. No spam. Unsubscribe anytime.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Worker benefits — compact chips for small screens */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="lg:hidden mt-5 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-3.5 py-2 text-[12px] font-semibold text-foreground/75">
              <Wallet className="w-3.5 h-3.5 text-emerald-600" /> Get paid fast
            </span>
            <span className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-3.5 py-2 text-[12px] font-semibold text-foreground/75">
              <Timer className="w-3.5 h-3.5 text-primary" /> Flexible work
            </span>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
            className="mt-7 sm:mt-9 flex items-center justify-center gap-4">
            <div className="flex -space-x-2.5">
              {['bg-primary/90', 'bg-emerald-500', 'bg-amber-400', 'bg-sky-500'].map((c, i) => (
                <div key={i} className={`w-9 h-9 rounded-full ${c} border-[3px] border-background flex items-center justify-center text-white text-xs font-bold`}>
                  {['B', 'A', 'P', 'N'][i]}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-[13px] font-semibold leading-tight mb-0.5">Closed beta complete</p>
              <p className="text-[13px] text-foreground/55 font-medium leading-tight">Now onboarding our first workers</p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* ── Giant faded wordmark + quiet footer line ── */}
      <div aria-hidden className="relative select-none pointer-events-none shrink-0 -mb-1">
        <p className="font-display font-bold text-center whitespace-nowrap leading-[0.76] tracking-[-0.045em] text-[19vw] bg-gradient-to-b from-foreground/[0.08] via-foreground/[0.04] to-transparent bg-clip-text text-transparent">
          Swiftgigs
        </p>
      </div>
      <p className="relative text-center text-[12px] text-foreground/40 pb-5 px-4">
        &copy; 2026 Swiftgigs Technologies LTD ·{' '}
        <Link href="/terms" className="hover:text-foreground/70 transition-colors">Terms</Link> ·{' '}
        <Link href="/privacy" className="hover:text-foreground/70 transition-colors">Privacy</Link>
      </p>
    </div>
  );
}
