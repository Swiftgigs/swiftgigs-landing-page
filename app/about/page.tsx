import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { AnimateIn } from '@/components/animate-in';
import { ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Swiftgigs | Building Nigeria\'s Most Trusted Task Platform',
  description:
    'Swiftgigs is a gig platform built inside WhatsApp, so Nigerians can find and do gigs without downloading another app. Meet the founder and read the story.',
  openGraph: {
    title: 'About Swiftgigs | Building Nigeria\'s Most Trusted Task Platform',
    description: 'Our mission, values, and the founder story behind Swiftgigs.',
    type: 'website',
    url: 'https://swiftgigs.com.ng/about',
  },
  twitter: {
    title: 'About Swiftgigs',
    description: 'Our mission, values, and the story behind Swiftgigs.',
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/about' },
};

const stats = [
  { value: '20',   label: 'closed beta testers' },
  { value: '15',   label: 'service categories' },
  { value: '100%', label: 'escrow-protected' },
];

const values = [
  { title: 'Speed',     desc: 'Your time is your most valuable asset. Every feature is built to save it and cut friction.' },
  { title: 'Trust',     desc: 'Workers are NIN-verified before their first job and payments sit in escrow. Safety is the foundation, not a feature.' },
  { title: 'Community', desc: 'More than a marketplace: real income for skilled people, and easier access to help for everyone else.' },
];

const differentiators = [
  'No app download, it all happens in WhatsApp',
  'Workers NIN-verified before their first job, with a meeting code and door check',
  'Escrow: you only pay when you are satisfied',
  'Designed for the Nigerian context and market',
  'Customer care reviews every dispute',
  'Fair pricing for customers and workers',
];

const eyebrow = 'inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-clip">
      <PageNav />

      {/* Hero */}
      <header className="relative overflow-hidden px-4 sm:px-6 pt-14 md:pt-24">
        <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-primary/[0.09] blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-28 top-40 size-72 rounded-full bg-emerald-400/[0.07] blur-3xl" aria-hidden />
        <div className="relative max-w-6xl mx-auto">
          <span className={`${eyebrow} animate-in fade-in slide-in-from-bottom-4 duration-500`}>About Swiftgigs</span>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 font-display font-bold tracking-[-0.03em] leading-[1.02] text-4xl sm:text-6xl md:text-7xl max-w-4xl mb-7">
            Gigs that live inside the app you <span className="text-primary">already open</span>.
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:200ms] text-base md:text-xl text-foreground/60 max-w-xl leading-relaxed">
            No new app, no new habit. Swiftgigs brings the gig economy to WhatsApp,
            where people already are every day.
          </p>
        </div>
        <div aria-hidden className="relative select-none pointer-events-none mt-8 md:mt-12 -mb-1">
          <p className="font-display font-bold text-center whitespace-nowrap leading-[0.76] tracking-[-0.045em] text-[19vw] bg-gradient-to-b from-foreground/[0.08] via-foreground/[0.04] to-transparent bg-clip-text text-transparent">
            Swiftgigs
          </p>
        </div>
      </header>

      <div className="relative z-10 bg-background rounded-t-[1.75rem] md:rounded-t-[2.5rem] shadow-[0_-18px_44px_-22px_rgba(24,16,36,0.35)] md:shadow-[0_-28px_60px_-24px_rgba(24,16,36,0.28)]">

        {/* Story */}
        <section className="py-16 md:py-28 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-20">
            <AnimateIn variant="fade-up">
              <div className="md:sticky md:top-28">
                <span className={eyebrow}>How it started</span>
                <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.08] text-3xl sm:text-4xl md:text-5xl">
                  Convenient enough to be a habit.
                </h2>
              </div>
            </AnimateIn>
            <div className="space-y-6 text-foreground/65 leading-relaxed text-[17px] md:text-lg">
              {[
                'Swiftgigs began as an attempt to build a gig economy product that is addictive in the good sense: so convenient that people keep coming back, and so light that it never pulls them out of the apps they already love or asks them to download yet another one.',
                'The answer was WhatsApp. People check it all day anyway, so gigs reach them where they already are. A WhatsApp notification feels natural, not like spam from an app you forgot you installed. And WhatsApp is one of the most widely adopted messaging apps in the world, especially across Africa, so the platform works for people on almost any phone.',
                'On the other side, finding reliable help in Nigeria is harder than it should be. You rely on referrals that fall through or people who do not show up, while millions of skilled, hardworking Nigerians look for flexible income. The talent exists. The demand exists. The missing piece was a safe, low-friction way to connect them.',
                'We have completed a closed beta with 20 testers, running the full request, match, and escrow flow end to end. Their feedback shaped the product directly: the strongest ask was tougher identity checks, so NIN verification, matched to each worker\'s payout account, is now built in. Our waitlist is live and we are onboarding our first workers now.',
              ].map((para, i) => (
                <AnimateIn key={i} variant="fade-up" delay={i * 80}>
                  <p>{para}</p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="px-4 sm:px-6 pb-16 md:pb-28">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-20 items-center">
            <AnimateIn variant="fade-up">
              <div className="relative mx-auto md:mx-0 w-56 sm:w-72 aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary to-primary/60 shadow-[0_28px_60px_-28px_rgba(134,87,162,0.7)]">
                <Image
                  src="/elliot-lucky.png"
                  alt="Elliot Lucky, founder of Swiftgigs"
                  width={768}
                  height={1132}
                  sizes="(min-width: 640px) 288px, 224px"
                  className="absolute inset-x-0 bottom-0 w-full h-auto"
                />
              </div>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <span className={eyebrow}>The founder</span>
              <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.08] text-3xl sm:text-4xl mb-5">Elliot Lucky</h2>
              <p className="text-foreground/65 leading-relaxed text-[17px] md:text-lg mb-7 max-w-xl">
                Swiftgigs was founded, designed and built by Elliot, a software developer who wrote
                the product end to end.
              </p>
              <a href="https://elliotlucky.com" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-semibold text-primary border-b-2 border-primary/30 hover:border-primary pb-0.5 transition-colors">
                elliotlucky.com
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </AnimateIn>
          </div>
        </section>

        {/* Numbers + mission */}
        <section className="px-4 sm:px-6 pb-16 md:pb-24">
          <AnimateIn variant="fade-up">
            <div className="relative overflow-hidden max-w-6xl mx-auto rounded-[1.75rem] sm:rounded-[2.25rem] border border-primary/10 bg-gradient-to-br from-card via-card to-secondary/55 p-7 sm:p-10 md:p-14 shadow-[0_28px_80px_-48px_rgba(72,42,94,0.55)]">
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-60 [background-image:radial-gradient(circle_at_center,rgba(134,87,162,0.16)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden />
              <div className="relative grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-16 items-end">
                <div>
                  <span className={eyebrow}>Mission</span>
                  <p className="font-display font-bold tracking-[-0.02em] leading-[1.1] text-2xl sm:text-3xl md:text-4xl mb-8">
                    Make everyday help instantly accessible to every Nigerian, and create real income for the people who provide it.
                  </p>
                  <span className={eyebrow}>Vision</span>
                  <p className="text-foreground/65 leading-relaxed max-w-lg">
                    The operating system for local services in Africa: any city, any task, reliable help nearby.
                  </p>
                </div>
                <dl className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-7">
                  {stats.map((st) => (
                    <div key={st.label} className="md:border-l-2 md:border-primary/25 md:pl-5">
                      <dt className="font-display font-bold text-3xl md:text-5xl text-primary tracking-tight">{st.value}</dt>
                      <dd className="text-xs md:text-sm text-foreground/55 mt-1">{st.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </AnimateIn>
        </section>

        {/* Values */}
        <section className="px-4 sm:px-6 pb-16 md:pb-28">
          <div className="max-w-6xl mx-auto">
            <AnimateIn variant="fade-up">
              <span className={eyebrow}>What we stand for</span>
            </AnimateIn>
            <ol className="divide-y divide-border border-y border-border">
              {values.map((v, i) => (
                <AnimateIn key={v.title} variant="fade-up" delay={i * 80}>
                  <li className="grid md:grid-cols-[4rem_1fr_1.2fr] gap-2 md:gap-8 items-baseline py-7 md:py-9">
                    <span className="font-display text-sm font-semibold text-primary/60">0{i + 1}</span>
                    <h3 className="font-display font-bold text-3xl md:text-4xl tracking-[-0.02em]">{v.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{v.desc}</p>
                  </li>
                </AnimateIn>
              ))}
            </ol>
          </div>
        </section>

        {/* Built different */}
        <section className="px-4 sm:px-6 pb-16 md:pb-28">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-20">
            <AnimateIn variant="fade-up">
              <span className={eyebrow}>Why Swiftgigs</span>
              <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.08] text-3xl sm:text-4xl md:text-5xl">Built different.</h2>
            </AnimateIn>
            <ul className="flex flex-wrap gap-2.5 content-start">
              {differentiators.map((point, i) => (
                <AnimateIn key={point} variant="fade-up" delay={i * 50}>
                  <li className="bg-card border border-border rounded-full px-5 py-3 text-sm font-medium text-foreground/75">
                    {point}
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14 md:pb-20 px-4 sm:px-6">
          <AnimateIn variant="fade-up">
            <div className="final-cta-card max-w-6xl mx-auto rounded-[2rem] text-white px-6 py-14 md:py-20 text-center">
              <h2 className="font-display font-bold text-3xl md:text-[2.6rem] leading-[1.08] tracking-[-0.01em] mb-5">Ready to experience it?</h2>
              <p className="text-white/75 mb-9 text-lg leading-relaxed max-w-lg mx-auto">
                Join the Nigerians already discovering how easy getting things done can be.
              </p>
              <a href="/waitlist"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-bold rounded-full px-8 py-4 transition-colors">
                <WhatsAppIcon className="w-5 h-5" />
                Join the waitlist
              </a>
              <p className="text-sm text-white/60 mt-5">
                Or{' '}
                <Link href="/careers" className="text-white underline underline-offset-4 hover:text-white/80 transition-colors">join our team</Link>
                {' '}and help build something meaningful.
              </p>
              <p className="text-sm text-white/60 mt-2">
                Questions? WhatsApp us on{' '}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 hover:text-white/80 transition-colors">{WHATSAPP_DISPLAY}</a>.
              </p>
            </div>
          </AnimateIn>
        </section>

      </div>

      <PageFooter />
    </div>
  );
}
