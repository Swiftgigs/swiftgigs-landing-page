'use client';

import { Button } from '@/components/ui/button';
import { AnimateIn } from '@/components/animate-in';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  MessageCircle, Zap, CheckCircle, Briefcase,
  Shield, Users, Menu, X,
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const steps = [
  { icon: MessageCircle, title: 'Tell Us What You Need',    desc: 'Send a quick message on WhatsApp describing your task' },
  { icon: Zap,           title: 'We Find the Right Person', desc: 'Get matched with a nearby verified worker in minutes' },
  { icon: CheckCircle,   title: 'It Gets Done — Fast',      desc: 'Sit back while your task is completed professionally' },
];

const valueProps = [
  { icon: '⏱️', title: 'Save Time',          desc: 'Delegate the small stuff. Focus on what actually matters to you.' },
  { icon: '🔒', title: 'Trusted Workers',    desc: 'Every worker is vetted and verified before their first job.' },
  { icon: '📍', title: 'Nearby Help',        desc: 'Local workers mean faster arrival and quicker results.' },
  { icon: '💬', title: 'WhatsApp Based',     desc: 'No new apps. Use the tool 90% of Nigeria already uses daily.' },
  { icon: '💸', title: 'Affordable',         desc: 'Honest prices starting from as low as ₦1,000.' },
  { icon: '🔥', title: 'Instant Connection', desc: 'From request to confirmed worker — often under 10 minutes.' },
];

const services = [
  { title: 'Errand Running',     icon: Users,         desc: 'Shopping, pickups & deliveries' },
  { title: 'House Cleaning',     icon: CheckCircle,   desc: 'Deep clean or regular tidying' },
  { title: 'Beauty Services',    icon: Zap,           desc: 'Hair, nails & makeup at home' },
  { title: 'Moving Assistance',  icon: Briefcase,     desc: 'Packing, loading & transport' },
  { title: 'Quick Fix Jobs',     icon: Shield,        desc: 'Repairs, plumbing & small jobs' },
  { title: 'Personal Help',      icon: MessageCircle, desc: 'Anything else you need' },
];

const trustPoints = [
  { title: 'Workers are screened before onboarding',   icon: CheckCircle },
  { title: 'Escrow intermediary for secure payment',   icon: Shield },
  { title: 'Support available if anything goes wrong', icon: Users },
  { title: 'Clear communication before every job',     icon: MessageCircle },
  { title: 'You stay in control at all times',         icon: Briefcase },
];

const workerBenefits = [
  { title: 'Flexible work',   desc: 'Work your own hours, your own way' },
  { title: 'Get paid fast',   desc: 'Quick and secure payment processing' },
  { title: 'Build a reputation', desc: 'Rank higher as your reviews grow' },
];

export function HomeClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center shrink-0">
            <Image src="/logo-icon.png" alt="Swiftgigs logo" width={200} height={200}
              className="h-15 w-15 md:h-20 md:w-18 object-contain" priority />
            <span className="-ml-4.5 text-3xl font-black tracking-tight text-primary leading-none">wiftgigs</span>
          </a>

          <div className="hidden md:flex items-center gap-0.5 bg-muted/50 rounded-full px-1.5 py-1 border border-border/50">
            {['#how-it-works', '#services', '#workers', '#footer'].map((href, i) => (
              <a key={i} href={href} className="text-sm font-medium px-4 py-1.5 rounded-full hover:bg-background hover:shadow-sm hover:text-primary transition-all duration-200">
                {['How It Works', 'Services', 'For Workers', 'Contact'][i]}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-[0_4px_14px_rgba(98,72,220,0.3)] px-5">
                <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                Get Started
              </Button>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button className="rounded-full p-2 hover:bg-primary/10 transition border border-border/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 p-3 space-y-0.5 bg-background/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            {['#how-it-works', '#services', '#workers'].map((href, i) => (
              <a key={i} href={href} onClick={() => setMobileMenuOpen(false)}
                className="flex items-center text-sm font-medium hover:text-primary hover:bg-primary/5 transition py-2.5 px-4 rounded-xl">
                {['How It Works', 'Services', 'For Workers'][i]}
              </a>
            ))}
            <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-sm font-medium hover:text-primary hover:bg-primary/5 transition py-2.5 px-4 rounded-xl">
              Go to WhatsApp
            </a>
            <div className="pt-2 pb-1 px-4">
              <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full w-full shadow-[0_4px_14px_rgba(98,72,220,0.3)]">
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  Get Started on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="py-16 md:py-28 px-4 relative overflow-hidden">
        {/* Background orbs */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-8 h-48 w-48 rounded-full bg-primary/8 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Eyebrow */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mb-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 uppercase tracking-wider">
              <Zap className="w-3 h-3" />
              Now live in Lagos &amp; Abuja
            </span>
          </div>

          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-balance leading-[1.04]">
            Need Something Done Today?{' '}
            Get Help in{' '}
            <span className="text-primary relative">
              Minutes
              <span className="absolute -inset-1 rounded-lg bg-primary/10 blur-sm -z-10" />
            </span>.
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:200ms] text-lg md:text-xl text-foreground/70 mb-10 text-balance max-w-2xl mx-auto leading-relaxed">
            No apps. No stress. Just message on WhatsApp and get a trusted helper for errands,
            cleaning, deliveries and more.
          </p>

          {/* Trust badges */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:350ms] flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-10 text-sm flex-wrap px-4">
            {[
              { icon: CheckCircle, label: 'Verified Workers' },
              { icon: Zap,          label: 'Fast Response' },
              { icon: Shield,       label: 'Pay Only When Satisfied' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-[0_2px_12px_rgba(98,72,220,0.08)]">
                <Icon className="w-4 h-4 text-primary" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="animate-in fade-in duration-700 [animation-delay:500ms] mb-4">
            <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" target="_blank" rel="noopener noreferrer"
              className="inline-block w-full md:w-auto">
              <Button size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold w-full md:w-auto rounded-2xl shadow-[0_12px_32px_rgba(98,72,220,0.4)] hover:shadow-[0_16px_40px_rgba(98,72,220,0.5)] hover:-translate-y-0.5 transition-all duration-200">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start on WhatsApp Now
              </Button>
            </a>
          </div>

          <p className="animate-in fade-in duration-700 [animation-delay:650ms] text-sm text-foreground/50">
            Takes less than 60 seconds to get started
          </p>
        </div>
      </section>

      {/* ── Problem / Solution ── */}
      <section className="py-16 md:py-20 px-4 border-y border-border/60 bg-card/40 backdrop-blur-sm">
        <AnimateIn variant="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Tired of Stressing Over Small Tasks?</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Running errands, finding reliable help, or getting things done shouldn&apos;t be
              difficult. Swiftgigs connects you to trusted people nearby — instantly.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-16 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateIn variant="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Get Help in 3 Simple Steps</h2>
            <p className="text-foreground/60 max-w-xl mx-auto">Simple, fast, and reliable — every time</p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />

              <div className="space-y-10">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <AnimateIn key={idx} variant="fade-left" delay={idx * 160}>
                      <div className="flex gap-5 relative">
                        <div className="shrink-0 relative z-10">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/25 shadow-[0_4px_16px_rgba(98,72,220,0.12)]">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground text-xs font-black rounded-full flex items-center justify-center shadow-sm">
                            {idx + 1}
                          </span>
                        </div>
                        <div className="pt-1">
                          <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                          <p className="text-foreground/65 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </AnimateIn>
                  );
                })}
              </div>
            </div>

            {/* Video */}
            <AnimateIn variant="fade-right" className="hidden md:block rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-border">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover min-h-96">
                <source src="request-flow-only.mp4" type="video/mp4" />
              </video>
            </AnimateIn>
          </div>

          <div className="md:hidden mt-12 rounded-2xl overflow-hidden shadow-lg">
            <video autoPlay muted loop playsInline className="w-full h-auto">
              <source src="request-flow-only.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ── Why Swiftgigs ── */}
      <section className="py-16 md:py-28 px-4 bg-card/30 border-y border-border/60">
        <div className="max-w-6xl mx-auto">
          <AnimateIn variant="fade-up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Why People Choose Swiftgigs</h2>
            <p className="text-foreground/60 max-w-xl mx-auto">Everything you need, nothing you don&apos;t</p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueProps.map((item, idx) => (
              <AnimateIn key={idx} variant="zoom-in" delay={idx * 75}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/35 hover:shadow-[0_16px_40px_rgba(80,58,198,0.10)] hover:bg-gradient-to-b hover:from-card hover:to-primary/[0.03] transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-16 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateIn variant="fade-up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What Can We Help You With?</h2>
            <p className="text-foreground/60 max-w-xl mx-auto">Whether it&apos;s urgent or simple — we&apos;ve got you covered</p>
          </AnimateIn>

          <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <AnimateIn key={idx} variant="zoom-in" delay={idx * 65}>
                  <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/35 hover:shadow-[0_12px_30px_rgba(80,58,198,0.10)] transition-all duration-300 group h-full">
                    <div className="mb-3 flex justify-center">
                      <div className="w-11 h-11 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-200">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-center mb-1">{service.title}</h3>
                    <p className="text-xs text-foreground/55 text-center leading-relaxed">{service.desc}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── For Workers ── */}
      <section id="workers" className="py-16 md:py-28 px-4 bg-card/30 border-y border-border/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateIn variant="fade-left">
              <div>
                <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-5 uppercase tracking-wider">
                  For Workers
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">Want to Earn Money With Simple Tasks?</h2>
                <p className="text-lg text-foreground/65 mb-8 leading-relaxed">
                  Join Swiftgigs and start earning in your area — on your schedule, at your pace.
                </p>
                <div className="space-y-4 mb-10">
                  {workerBenefits.map((b, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{b.title}</p>
                        <p className="text-sm text-foreground/60">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-2xl shadow-[0_10px_30px_rgba(98,72,220,0.3)] hover:-translate-y-0.5 transition-all duration-200">
                  Become a Worker
                </Button>
              </div>
            </AnimateIn>

            <AnimateIn variant="fade-right" className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-border">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover min-h-80">
                <source src="worker-flow-only.mp4" type="video/mp4" />
              </video>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Trust & Safety ── */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateIn variant="fade-up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">You&apos;re Safe With Us</h2>
            <p className="text-foreground/65 max-w-xl mx-auto text-lg leading-relaxed">
              We understand trust is everything. That&apos;s why we put safety first.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-4">
            {trustPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <AnimateIn key={idx} variant="fade-up" delay={idx * 90}>
                  <div className="flex gap-4 items-center bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-sm transition-all duration-200 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-medium text-sm leading-snug">{point.title}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 md:py-24 px-4 bg-card/30 border-y border-border/60">
        <div className="max-w-4xl mx-auto">
          <AnimateIn variant="fade-up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Real People. Real Results.</h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: 'I needed someone urgently and got help within 30 minutes.', author: 'Abuja Customer', gradient: false },
              { quote: 'This is way easier than asking around for help.', author: 'Verified User', gradient: true },
            ].map((t, idx) => (
              <AnimateIn key={idx} variant="fade-up" delay={idx * 150}>
                <div className={`relative overflow-hidden border border-border rounded-2xl p-8 shadow-sm h-full ${t.gradient ? 'bg-gradient-to-br from-card to-primary/8' : 'bg-card'}`}>
                  <div className="absolute top-3 left-5 text-7xl font-black text-primary/10 leading-none select-none pointer-events-none">&ldquo;</div>
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-base">★</span>
                    ))}
                  </div>
                  <p className="text-lg mb-6 relative z-10 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-semibold text-primary text-sm">&mdash; {t.author}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
        <div className="pointer-events-none absolute left-1/2 bottom-0 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

        <AnimateIn variant="fade-up">
          <div className="max-w-3xl mx-auto text-center relative">
            <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
              One Message.<br className="hidden sm:block" /> That&apos;s All It Takes.
            </h2>
            <p className="text-lg text-foreground/65 mb-10 max-w-xl mx-auto leading-relaxed">
              No forms. No stress. No delays. Just WhatsApp us and get it done.
            </p>
            <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" target="_blank" rel="noopener noreferrer">
              <Button size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-2xl shadow-[0_12px_32px_rgba(98,72,220,0.4)] hover:shadow-[0_16px_40px_rgba(98,72,220,0.5)] hover:-translate-y-0.5 transition-all duration-200 text-base px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start on WhatsApp Now
              </Button>
            </a>
            <p className="text-sm text-foreground/45 mt-4">Free to try · No commitments</p>
          </div>
        </AnimateIn>
      </section>

      {/* ── Footer ── */}
      <footer id="footer" className="bg-zinc-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-3">Swiftgigs</h3>
              <p className="text-sm text-white/55 leading-relaxed">Instant tasks on WhatsApp, right where you are.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white/80">Company</h4>
              <ul className="space-y-2.5 text-sm text-white/55">
                {[['About', '/about'], ['Blog', '/blog'], ['Careers', '/careers']].map(([l, h]) => (
                  <li key={l}><a href={h} className="hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white/80">Legal</h4>
              <ul className="space-y-2.5 text-sm text-white/55">
                <li><a href="/terms" className="hover:text-white transition">Terms &amp; Conditions</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white/80">Contact</h4>
              <ul className="space-y-2.5 text-sm text-white/55">
                <li><a href="https://wa.me/1234567890" className="hover:text-white transition">WhatsApp</a></li>
                <li><a href="mailto:support@swiftgigs.com" className="hover:text-white transition">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/40">
            <p>&copy; 2025 Swiftgigs. All rights reserved.</p>
            <p>Built for Nigeria 🇳🇬</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
