import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { AnimateIn } from '@/components/animate-in';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { PullQuote, StoryCard } from '@/components/blog-visuals';
import { PostHeader, PostDeck, MoreFromBlog, NumberedList } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: '5 Everyday Tasks You Should Stop Doing Yourself',
  description:
    'Your time is worth more than you think. Here are 5 common tasks Nigerians outsource, how to find odd jobs and quick repairs near you, and why the math works in your favour.',
  openGraph: {
    title: '5 Everyday Tasks You Should Stop Doing Yourself',
    description: '5 common tasks to delegate to Swiftgigs workers and reclaim your time.',
    type: 'article',
    url: 'https://swiftgigs.com.ng/blog/tasks-to-delegate',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/blog/tasks-to-delegate' },
  other: {
    'article:published_time': '2026-05-04',
    'article:author': 'Swiftgigs',
    'article:section': 'Productivity',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '5 Everyday Tasks You Should Stop Doing Yourself',
  description: '5 common tasks to delegate to Swiftgigs workers and reclaim your time.',
  datePublished: '2026-05-04',
  author: { '@type': 'Organization', name: 'Swiftgigs', url: 'https://swiftgigs.com.ng' },
  publisher: { '@type': 'Organization', name: 'Swiftgigs', logo: { '@type': 'ImageObject', url: 'https://swiftgigs.com.ng/logo-icon.png' } },
  url: 'https://swiftgigs.com.ng/blog/tasks-to-delegate',
};

const tasks = [
  { num: '01', title: 'Weekly Grocery Runs', body: 'Supermarket trips can easily eat 2–3 hours of your weekend, factoring in travel, queuing, loading, and unpacking. Send a Swiftgigs errand runner with your shopping list instead (groceries, market runs and pharmacy pickups are all categories). Specify exact brands, quantities, and budget, and come home to everything already delivered. Your Saturday afternoon belongs to you again.' },
  { num: '02', title: 'Home Deep Cleaning', body: 'A thorough clean of a 3-bedroom apartment takes 4–6 hours of serious physical effort. That\'s half a Saturday gone, with nothing to show for your personal time. Our NIN-verified cleaning helpers tackle mops, scrubbing, dusting, and organising while you relax or run other errands. You come home to a spotless space without lifting a finger.' },
  { num: '03', title: 'Office & Business Errands', body: 'Bank deposits, document submissions, bill payments, courier pickups, these tasks are individually simple but collectively eat hours out of a business owner\'s week. If your hourly contribution to your business is significant, every hour on an errand is money left on the table. Let a Swiftgigs runner handle the legwork while you focus on growing your business.' },
  { num: '04', title: 'Airport & Bus Park Pickups', body: 'Lagos traffic is legendary, and unpredictable. Driving to pick up a parcel, a piece of equipment, or a visiting relative from a bus park or airport can mean losing 2–4 hours to gridlock. A Swiftgigs helper makes the trip while you stay productive, and you stay in touch with them on WhatsApp.' },
  { num: '05', title: 'Moving & Packing Assistance', body: 'Whether you\'re relocating to a new apartment or just reorganising a room, moving heavy furniture and boxes is exhausting, time-consuming work that often results in sore muscles or worse, damaged items. Our moving assistants help you pack carefully, load efficiently, and unpack on the other side so you can settle in faster.' },
];

export default function BlogPost2() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-clip">
      <PageNav backHref="/blog" backLabel="Back to Blog" />

      <PostHeader
        category="Productivity"
        categoryClass="bg-emerald-500/10 text-emerald-700"
        title="5 Everyday Tasks You Should Stop Doing Yourself"
        date="May 4, 2026"
        readTime="4 min read"
      />

      <PostDeck>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 pt-10 md:pt-14 pb-14 w-full">
        <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-foreground/80 [&>div:first-child_p]:text-xl [&>div:first-child_p]:leading-relaxed [&>div:first-child_p]:text-foreground/90">
          <AnimateIn variant="fade-up">
            <p>
              Your time is your most valuable resource. And yet, most of us spend hours every week on
              tasks that we could easily hand off to someone else, often at a surprisingly affordable cost.
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
              Stop counting the cost of getting help, start counting the cost of not getting it.
            </PullQuote>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <p>Here are five tasks Swiftgigs customers love delegating, and why it makes sense.</p>
          </AnimateIn>

          <NumberedList items={tasks} />

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-3">Searching &ldquo;odd jobs around me&rdquo;?</h2>
            <p>
              The same applies beyond the big five. Small odd jobs around the house or office, like assembling
              furniture, fixing a leaking tap, or sorting out a faulty gadget, are the tasks that quietly eat
              weekends. If you have ever searched for a laptop repair near you, or spent days finding a local
              repair shop you can trust, you know the cost. Describe the problem in a WhatsApp message and
              pick a verified worker near you from the list, with payment held in
              escrow until it is done.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-3">Or find local gigs yourself</h2>
            <p>
              If you are on the other side, looking for local gigs and flexible work near you, the same
              WhatsApp flow works for earning too. Workers are NIN-verified at their first job, jobs are escrow-protected, and
              there is no app to install. Join the waitlist to be first in line when onboarding opens.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <StoryCard
              name="Amos Lucky"
              where="Closed beta"
              service="Beta tester"
              quote="Delegating through a chat I already use meant there was nothing to install and nothing to figure out."
              detail="Closed beta · Errand flow tested end to end"
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
              <p className="text-white/70 text-sm mb-5">Describe what you need, pick a verified helper near you and agree the price in chat.</p>
              <a href="/waitlist"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6 py-3 text-sm transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                Join the waitlist
              </a>
            </div>
          </AnimateIn>
        </div>
      </article>

      <MoreFromBlog current="tasks-to-delegate" />
      </PostDeck>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <PageFooter />
    </div>
  );
}
