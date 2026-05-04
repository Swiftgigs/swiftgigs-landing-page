import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { AnimateIn } from '@/components/animate-in';
import { MessageCircle, Zap, Shield, Heart, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Swiftgigs — Building Nigeria\'s Most Trusted Task Platform',
  description:
    'Learn about Swiftgigs\' mission to make everyday help instantly accessible to every Nigerian — safely, affordably, and via WhatsApp.',
  openGraph: {
    title: 'About Swiftgigs — Building Nigeria\'s Most Trusted Task Platform',
    description: 'Our mission, values, and the story behind Swiftgigs.',
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
  { value: '500+', label: 'Tasks Completed' },
  { value: '50+',  label: 'Verified Workers' },
  { value: '3',    label: 'Cities Served' },
  { value: '4.9★', label: 'Average Rating' },
];

const values = [
  { icon: Zap,    title: 'Speed',     desc: 'We believe your time is your most valuable asset. Every feature we build is optimised to save you time and reduce friction.' },
  { icon: Shield, title: 'Trust',     desc: 'Every worker is verified before they take a single job. Every payment is protected by escrow. Safety isn\'t a feature — it\'s our foundation.' },
  { icon: Heart,  title: 'Community', desc: 'We\'re not just building a marketplace. We\'re creating real income opportunities for skilled people and making services more accessible for everyone.' },
];

const differentiators = [
  'No app download needed — we work entirely through WhatsApp',
  'Workers are verified before onboarding, not after complaints',
  'Escrow payments mean you only pay when you\'re satisfied',
  'Designed specifically for the Nigerian context and market',
  'Human support team available for every transaction',
  'Fair pricing that works for both customers and workers',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <PageNav />

      {/* Hero */}
      <section className="py-12 md:py-24 px-4 border-b border-border/50 bg-card/20 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-6 uppercase tracking-wider">
              Our Story
            </span>
          </div>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Building Nigeria&apos;s Most{' '}
            <span className="text-primary">Trusted</span> Task Platform
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:200ms] text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We started with a simple belief: getting everyday things done should be as easy
            as sending a WhatsApp message — safe, fast, and affordable for everyone.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 border-b border-border/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} variant="zoom-in" delay={i * 80} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateIn variant="fade-up">
            <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-5 uppercase tracking-wider">
              How It Started
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8">It started with a simple observation</h2>
          </AnimateIn>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            {[
              'In Nigeria, finding reliable help for everyday tasks has always been harder than it needs to be. You rely on word-of-mouth referrals that fall through, deal with people who don\'t show up, or simply handle everything yourself — burning time and energy that could go toward things that matter more.',
              'Meanwhile, millions of skilled, hardworking Nigerians are looking for flexible income opportunities. The talent exists. The demand exists. The missing piece was a reliable way to connect them — quickly, safely, and without friction.',
              'We founded Swiftgigs on the idea that the best technology for Nigeria is technology people already use. Over 90% of Nigerians with smartphones use WhatsApp every day. So we built entirely around it — no app to download, no complicated registration, no learning curve.',
              'Today, Swiftgigs is connecting clients with verified workers across Lagos, Abuja, and Port Harcourt. We\'re proud of every task completed, every worker who earned income through our platform, and every customer who got their day back. We\'re just getting started.',
            ].map((para, i) => (
              <AnimateIn key={i} variant="fade-up" delay={i * 80}>
                <p>{para}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 px-4 bg-card/30 border-y border-border/50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { icon: MessageCircle, badge: 'Our Mission', title: 'Make everyday help instantly accessible to every Nigerian', desc: 'We exist to eliminate the friction between needing help and getting it — while creating meaningful income opportunities for skilled workers in our communities.' },
            { icon: Users,         badge: 'Our Vision',  title: 'The operating system for local services in Africa', desc: 'We see a future where anyone in any African city can get reliable, affordable help for any task within minutes — through a platform that empowers both sides of the market.' },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimateIn key={i} variant="fade-up" delay={i * 150}>
                <div className="bg-card border border-border rounded-2xl p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{card.badge}</h3>
                  <p className="text-xl font-bold mb-3">{card.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateIn variant="fade-up" className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4 uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Our Core Values</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimateIn key={v.title} variant="zoom-in" delay={i * 100}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16 md:py-20 px-4 bg-card/30 border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <AnimateIn variant="fade-up" className="text-center mb-10">
            <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4 uppercase tracking-wider">Why Swiftgigs</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Built Different</h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {differentiators.map((point, i) => (
              <AnimateIn key={i} variant="fade-up" delay={i * 60}>
                <div className="flex gap-3 items-start bg-card border border-border rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4">
        <AnimateIn variant="fade-up">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-5">Ready to Experience It?</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Join the hundreds of Nigerians who have already discovered how easy getting things done can be.
            </p>
            <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-4 shadow-[0_10px_30px_rgba(98,72,220,0.35)] hover:-translate-y-0.5 transition-all duration-200">
              <MessageCircle className="w-5 h-5" />
              Start on WhatsApp
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Or{' '}
              <Link href="/careers" className="text-primary hover:underline">join our team</Link>
              {' '}and help build something meaningful.
            </p>
          </div>
        </AnimateIn>
      </section>

      <PageFooter />
    </div>
  );
}
