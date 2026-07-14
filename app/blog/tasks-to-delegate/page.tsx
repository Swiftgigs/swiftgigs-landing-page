import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { AnimateIn } from '@/components/animate-in';
import { Clock, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { PostBanner, PullQuote, StoryCard } from '@/components/blog-visuals';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '5 Everyday Tasks You Should Stop Doing Yourself',
  description:
    'Your time is worth more than you think. Here are 5 common tasks Nigerians outsource to Swiftgigs workers — and why the math almost always works in your favour.',
  openGraph: {
    title: '5 Everyday Tasks You Should Stop Doing Yourself',
    description: '5 common tasks to delegate to Swiftgigs workers and reclaim your time.',
    type: 'article',
    url: 'https://swiftgigs.com.ng/blog/tasks-to-delegate',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/blog/tasks-to-delegate' },
  other: {
    'article:published_time': '2025-04-24',
    'article:author': 'Swiftgigs',
    'article:section': 'Productivity',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '5 Everyday Tasks You Should Stop Doing Yourself',
  description: '5 common tasks to delegate to Swiftgigs workers and reclaim your time.',
  datePublished: '2025-04-24',
  author: { '@type': 'Organization', name: 'Swiftgigs', url: 'https://swiftgigs.com.ng' },
  publisher: { '@type': 'Organization', name: 'Swiftgigs', logo: { '@type': 'ImageObject', url: 'https://swiftgigs.com.ng/logo-icon.png' } },
  url: 'https://swiftgigs.com.ng/blog/tasks-to-delegate',
};

const tasks = [
  { num: '01', title: 'Weekly Grocery Runs', body: 'Supermarket trips can easily eat 2–3 hours of your weekend — factoring in travel, queuing, loading, and unpacking. Send a Swiftgigs errand runner with your shopping list instead. Specify exact brands, quantities, and budget, and come home to everything already delivered. Your Saturday afternoon belongs to you again.' },
  { num: '02', title: 'Home Deep Cleaning', body: 'A thorough clean of a 3-bedroom apartment takes 4–6 hours of serious physical effort. That\'s half a Saturday gone, with nothing to show for your personal time. Our verified cleaning helpers tackle mops, scrubbing, dusting, and organising while you relax or run other errands. You come home to a spotless space without lifting a finger.' },
  { num: '03', title: 'Office & Business Errands', body: 'Bank deposits, document submissions, bill payments, courier pickups — these tasks are individually simple but collectively eat hours out of a business owner\'s week. If your hourly contribution to your business is significant, every hour on an errand is money left on the table. Let a Swiftgigs runner handle the legwork while you focus on growing your business.' },
  { num: '04', title: 'Airport & Bus Park Pickups', body: 'Lagos traffic is legendary — and unpredictable. Driving to pick up a parcel, a piece of equipment, or a visiting relative from a bus park or airport can mean losing 2–4 hours to gridlock. A Swiftgigs helper makes the trip while you stay productive, and updates you via WhatsApp throughout.' },
  { num: '05', title: 'Moving & Packing Assistance', body: 'Whether you\'re relocating to a new apartment or just reorganising a room, moving heavy furniture and boxes is exhausting, time-consuming work that often results in sore muscles or worse — damaged items. Our moving assistants help you pack carefully, load efficiently, and unpack on the other side so you can settle in faster.' },
];

export default function BlogPost2() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-clip">
      <PageNav backHref="/blog" backLabel="Back to Blog" />

      <div className="border-b border-border bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="inline-block text-xs font-bold bg-emerald-500/10 text-emerald-700 rounded-full px-3 py-1 mb-5 uppercase tracking-wider">
              Productivity
            </span>
          </div>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 text-3xl md:text-5xl font-display font-bold leading-tight mb-5">
            5 Everyday Tasks You Should Stop Doing Yourself
          </h1>
          <div className="animate-in fade-in duration-700 [animation-delay:200ms] flex items-center gap-4 text-sm text-muted-foreground">
            <span>Swiftgigs Team</span>
            <span>·</span>
            <span>Apr 24, 2025</span>
            <span>·</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />4 min read</span>
          </div>
        </div>
      </div>

      <article className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        <AnimateIn variant="fade-up">
          <PostBanner variant="checklist" className="mb-10" />
        </AnimateIn>
        <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-foreground/90">
          <AnimateIn variant="fade-up">
            <p>
              Your time is your most valuable resource. And yet, most of us spend hours every week on
              tasks that we could easily hand off to someone else — often at a surprisingly affordable cost.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up">
            <p>
              The mindset shift is simple: stop thinking about the cost of getting help, and start thinking
              about the cost of <em>not</em> getting help. Every hour you spend on a task someone else could
              do is an hour taken from your work, your family, your rest, or your growth.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up">
            <PullQuote>
              Stop counting the cost of getting help — start counting the cost of not getting it.
            </PullQuote>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <p>Here are five tasks Swiftgigs customers love delegating — and why it makes sense.</p>
          </AnimateIn>

          <div className="space-y-8 pt-4">
            {tasks.map((task, i) => (
              <AnimateIn key={task.num} variant="fade-up" delay={i * 80}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-display font-bold text-primary">
                    {task.num}
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold mb-2">{task.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{task.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn variant="fade-up">
            <StoryCard
              name="Ibrahim S."
              where="Lagos"
              service="Errand Running"
              quote="This is way easier than asking around for help. One message and it was handled."
              detail="Bank run + courier pickup · Done in 2 hours"
            />
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <div className="bg-card border border-border rounded-2xl p-6 mt-10">
              <h3 className="text-lg font-display font-bold mb-3">The Math Is Simple</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If your effective hourly rate is ₦5,000 per hour, and you spend 4 hours doing a task a Swiftgigs
                worker could handle for ₦3,000, you&apos;ve effectively &quot;lost&quot; ₦17,000 in opportunity cost.
                More importantly, you&apos;ve lost 4 hours you can&apos;t get back.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn variant="zoom-in">
            <div className="final-cta-card text-white rounded-3xl p-8 mt-6 text-center">
              <p className="text-lg font-bold mb-2">Start delegating today</p>
              <p className="text-white/70 text-sm mb-5">Describe what you need — we&apos;ll find a verified helper near you in minutes.</p>
              <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6 py-3 text-sm transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                Book a Task on WhatsApp
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
            <Link href="/blog/getting-started-with-swiftgigs" className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition flex flex-col gap-2">
              <span className="text-xs font-bold bg-sky-500/10 text-sky-700 rounded-full px-2.5 py-0.5 self-start">Guide</span>
              <p className="font-semibold text-sm leading-snug group-hover:text-primary transition">Your First Swiftgigs Experience: What to Expect</p>
              <span className="text-xs text-muted-foreground flex items-center gap-1 mt-auto"><Clock className="w-3 h-3" /> 2 min read</span>
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
