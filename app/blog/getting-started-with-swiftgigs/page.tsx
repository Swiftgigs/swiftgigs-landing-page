import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { AnimateIn } from '@/components/animate-in';
import { Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { PostBanner, PullQuote, StoryCard } from '@/components/blog-visuals';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your First Swiftgigs Experience: What to Expect',
  description:
    'New to Swiftgigs? Here\'s exactly what happens from your first WhatsApp message to a completed task — step by step, with tips for a great first experience.',
  openGraph: {
    title: 'Your First Swiftgigs Experience: What to Expect',
    description: 'Step-by-step guide to your first Swiftgigs task — no surprises.',
    type: 'article',
    url: 'https://swiftgigs.com.ng/blog/getting-started-with-swiftgigs',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/blog/getting-started-with-swiftgigs' },
  other: {
    'article:published_time': '2025-04-15',
    'article:author': 'Swiftgigs',
    'article:section': 'Guide',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Book Your First Task on Swiftgigs',
  description: 'Step-by-step guide to booking your first task on Swiftgigs via WhatsApp.',
  url: 'https://swiftgigs.com.ng/blog/getting-started-with-swiftgigs',
  author: { '@type': 'Organization', name: 'Swiftgigs', url: 'https://swiftgigs.com.ng' },
  step: [
    { '@type': 'HowToStep', name: 'Send a WhatsApp message', text: 'Message Swiftgigs on WhatsApp with a description of your task.' },
    { '@type': 'HowToStep', name: 'Get matched',             text: 'We match you with a verified nearby worker in minutes.' },
    { '@type': 'HowToStep', name: 'Review and confirm',      text: 'Review the worker profile and confirm the price.' },
    { '@type': 'HowToStep', name: 'Task gets done',          text: 'The worker arrives and completes your task.' },
    { '@type': 'HowToStep', name: 'Confirm and pay',         text: 'Confirm satisfaction and release payment through escrow.' },
  ],
};

const steps = [
  { num: '01', title: 'Send Us a Message on WhatsApp',  body: 'Head to our WhatsApp number and tap to start a chat. Tell us what you need in plain language — "I need someone to deep-clean my 2-bedroom apartment in Lekki tomorrow morning" or "I need an errand runner for 2 hours in Ikeja on Friday afternoon." No forms. No templates. Just talk to us like a person.' },
  { num: '02', title: 'We Find Your Match',             body: 'Within minutes, our team reviews your request and matches you with a verified worker near your location. We factor in proximity, skill level, availability, and customer ratings — so you always get someone well-suited for your specific task.' },
  { num: '03', title: 'Review and Confirm',             body: 'We\'ll share your matched worker\'s profile, the agreed price, and the expected timeline. You review and confirm when you\'re happy. There are no surprise fees — the price you confirm is the price you pay.' },
  { num: '04', title: 'The Work Gets Done',             body: 'Your Swiftgigs worker arrives at the agreed time and gets to work. You can stay informed via WhatsApp — workers provide progress updates as needed, and you can message them directly if anything changes.' },
  { num: '05', title: 'Confirm and Pay',                body: 'Once the task is complete, confirm satisfaction and release payment through our secure escrow process. Then rate your experience — your honest feedback helps good workers get more opportunities and keeps quality high.' },
];

const tips = [
  { tip: 'Be specific',        detail: 'The more detail you provide, the better your match — include location, timing, and any special requirements.' },
  { tip: 'Have everything ready', detail: 'If your task requires materials (cleaning products, tools, access codes), have them prepared before the worker arrives.' },
  { tip: 'Stay accessible',    detail: 'Keep WhatsApp notifications on during the booking process so we can confirm details quickly.' },
  { tip: 'Give honest feedback', detail: 'Ratings help great workers get more work and help us maintain the quality you expect.' },
];

export default function BlogPost3() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <PageNav backHref="/blog" backLabel="Back to Blog" />

      <div className="border-b border-border bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="inline-block text-xs font-bold bg-sky-500/10 text-sky-700 rounded-full px-3 py-1 mb-5 uppercase tracking-wider">
              Guide
            </span>
          </div>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 text-3xl md:text-5xl font-display font-bold leading-tight mb-5">
            Your First Swiftgigs Experience: What to Expect
          </h1>
          <div className="animate-in fade-in duration-700 [animation-delay:200ms] flex items-center gap-4 text-sm text-muted-foreground">
            <span>Swiftgigs Team</span>
            <span>·</span>
            <span>Apr 15, 2025</span>
            <span>·</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />2 min read</span>
          </div>
        </div>
      </div>

      <article className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        <AnimateIn variant="fade-up">
          <PostBanner variant="chat" className="mb-10" />
        </AnimateIn>
        <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-foreground/90">
          <AnimateIn variant="fade-up">
            <p>
              Getting started with Swiftgigs takes less than 60 seconds — and your first task can often be
              assigned within minutes. Here&apos;s exactly what happens from your first WhatsApp message to
              a completed task, with no surprises along the way.
            </p>
          </AnimateIn>

          <div className="space-y-8 pt-4">
            {steps.map((step, i) => (
              <AnimateIn key={step.num} variant="fade-up" delay={i * 80}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-display font-bold text-primary">
                    {step.num}
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold mb-2">{step.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn variant="fade-up">
            <StoryCard
              name="Ngozi E."
              where="Port Harcourt"
              service="First-time customer"
              quote="I was skeptical about letting a stranger in, but the verification and escrow made me comfortable."
              detail="First task completed · Now a repeat customer"
            />
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <PullQuote>
              No forms. No templates. Just talk to us like a person.
            </PullQuote>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">Tips for the Best Experience</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {tips.map((item) => (
                <div key={item.tip} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-0.5">{item.tip}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <div className="bg-card border border-border rounded-2xl p-6 mt-8">
              <h3 className="text-lg font-display font-bold mb-3">What If Something Goes Wrong?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We&apos;re here. Message our support team immediately via WhatsApp and we&apos;ll investigate
                and resolve the issue. Our escrow payment system means your money is fully protected until
                you confirm you&apos;re satisfied — so you never pay for work that wasn&apos;t completed properly.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn variant="zoom-in">
            <div className="final-cta-card text-white rounded-3xl p-8 mt-6 text-center">
              <p className="text-lg font-bold mb-2">Ready to try Swiftgigs?</p>
              <p className="text-white/70 text-sm mb-5">Your first task could be done before you finish your next cup of tea.</p>
              <a href="/waitlist"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6 py-3 text-sm transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                Join the waitlist
              </a>
            </div>
          </AnimateIn>
        </div>
      </article>

      <section className="border-t border-border py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-5">More from the Blog</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/making-help-accessible-in-nigeria" className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition flex flex-col gap-2">
              <span className="text-xs font-bold bg-primary/10 text-primary rounded-full px-2.5 py-0.5 self-start">Company</span>
              <p className="font-semibold text-sm leading-snug group-hover:text-primary transition">How Swiftgigs Is Making Everyday Help More Accessible in Nigeria</p>
              <span className="text-xs text-muted-foreground flex items-center gap-1 mt-auto"><Clock className="w-3 h-3" /> 3 min read</span>
            </Link>
            <Link href="/blog/tasks-to-delegate" className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition flex flex-col gap-2">
              <span className="text-xs font-bold bg-emerald-500/10 text-emerald-700 rounded-full px-2.5 py-0.5 self-start">Productivity</span>
              <p className="font-semibold text-sm leading-snug group-hover:text-primary transition">5 Everyday Tasks You Should Stop Doing Yourself</p>
              <span className="text-xs text-muted-foreground flex items-center gap-1 mt-auto"><Clock className="w-3 h-3" /> 4 min read</span>
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition group">
              View all articles <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <PageFooter />
    </div>
  );
}
