import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { AnimateIn } from '@/components/animate-in';
import { Clock, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { PostBanner, PullQuote, StoryCard, StatStrip } from '@/components/blog-visuals';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Swiftgigs Is Making Everyday Help More Accessible in Nigeria',
  description:
    'We built Swiftgigs because finding reliable help shouldn\'t be hard. Here\'s the story behind our platform and how we\'re changing local services in Nigeria.',
  openGraph: {
    title: 'How Swiftgigs Is Making Everyday Help More Accessible in Nigeria',
    description: 'The story behind Swiftgigs and how we\'re changing local services in Nigeria.',
    type: 'article',
    url: 'https://swiftgigs.com.ng/blog/making-help-accessible-in-nigeria',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'How Swiftgigs Is Making Everyday Help More Accessible in Nigeria',
    description: 'The story behind Swiftgigs and our mission to change local services.',
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/blog/making-help-accessible-in-nigeria' },
  other: {
    'article:published_time': '2025-05-01',
    'article:author': 'Swiftgigs',
    'article:section': 'Company',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Swiftgigs Is Making Everyday Help More Accessible in Nigeria',
  description: 'The story behind Swiftgigs and how we\'re changing local services in Nigeria.',
  datePublished: '2025-05-01',
  author: { '@type': 'Organization', name: 'Swiftgigs', url: 'https://swiftgigs.com.ng' },
  publisher: { '@type': 'Organization', name: 'Swiftgigs', logo: { '@type': 'ImageObject', url: 'https://swiftgigs.com.ng/logo-icon.png' } },
  url: 'https://swiftgigs.com.ng/blog/making-help-accessible-in-nigeria',
  mainEntityOfPage: 'https://swiftgigs.com.ng/blog/making-help-accessible-in-nigeria',
};

export default function BlogPost1() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-clip">
      <PageNav backHref="/blog" backLabel="Back to Blog" />

      {/* Header */}
      <div className="border-b border-border bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-5">
              Company
            </span>
          </div>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 text-2xl sm:text-3xl md:text-5xl font-display font-bold leading-tight mb-5">
            How Swiftgigs Is Making Everyday Help More Accessible in Nigeria
          </h1>
          <div className="animate-in fade-in duration-700 [animation-delay:200ms] flex items-center gap-4 text-sm text-muted-foreground">
            <span>Swiftgigs Team</span>
            <span>·</span>
            <span>May 1, 2025</span>
            <span>·</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />3 min read</span>
          </div>
        </div>
      </div>

      <article className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        <AnimateIn variant="fade-up">
          <PostBanner variant="city" className="mb-10" />
        </AnimateIn>
        <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-foreground/90">
          <AnimateIn variant="fade-up">
            <p>
              Nigeria is a country of extraordinary hustle. From Lagos to Abuja, people are working hard —
              building businesses, raising families, and pushing forward every single day. But there&apos;s
              a hidden cost to all that productivity: the hours and energy spent on everyday tasks that
              could easily be handed off to someone else.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <p>
              Think about it. How much time do you spend running errands you could send someone else on?
              How often have you wished for reliable help with a home deep-clean, a pickup across town,
              or a quick repair job? These are small things individually — but they add up to hours every week.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <p>
              The problem isn&apos;t that help isn&apos;t available. Nigeria has millions of skilled,
              hardworking people actively looking for flexible income opportunities. The problem is
              connection — finding the right person quickly, trusting that they&apos;re reliable, and
              having a safe way to pay.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-2">That&apos;s exactly what Swiftgigs was built to solve.</h2>
            <p>
              We started with a simple insight: most Nigerians already use WhatsApp for everything —
              family groups, business chats, buying and selling. So why not use it to book help for
              everyday tasks? With Swiftgigs, you send a message, describe what you need, and we find
              a verified worker near you — usually within minutes. No app to download. No long
              registration forms. No wondering if someone will show up.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <PullQuote attribution="The idea behind Swiftgigs">
              The best technology for Nigeria is the technology people already use.
            </PullQuote>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-2">The Trust Factor</h2>
            <p>
              Every Swiftgigs worker goes through a verification process before they&apos;re approved
              to take a single job — we check identification, collect references, and build a profile
              that customers can review before booking. Workers who consistently deliver excellent
              service earn higher ratings and more opportunities. Workers who fall short are held accountable.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <p>
              For customers, our escrow payment system means your money is only released when you confirm
              the task is done to your satisfaction. If something goes wrong, our support team steps in — fast.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <StoryCard
              name="Chioma A."
              where="Abuja"
              service="House Cleaning"
              quote="I needed someone urgently and got help within 30 minutes. The worker was polite and professional."
              detail="Matched in 6 minutes · Paid through escrow"
            />
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-2">Built for Nigeria, by Nigerians</h2>
            <p>
              Swiftgigs was designed from the ground up for the Nigerian experience. We know about traffic
              in Lagos, the reality of variable power supply, and the challenges of coordinating on-ground
              logistics across dense urban neighbourhoods. Our pricing is fair and transparent, starting
              from as low as ₦1,000 for simple tasks. We&apos;re not trying to replace the informal
              economy — we&apos;re trying to make it better, safer, and more accessible for everyone.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-2">What&apos;s Next</h2>
            <p>
              We&apos;re expanding to more cities, adding more service categories, and building tools that
              help workers build sustainable, flexible incomes on their own terms. If you&apos;ve ever
              wished that getting help was just... easier, Swiftgigs is for you.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <StatStrip items={[
              { value: '500+', label: 'Tasks completed' },
              { value: '< 10 min', label: 'Average match time' },
              { value: '4.9/5', label: 'Customer rating' },
            ]} />
          </AnimateIn>

          <AnimateIn variant="zoom-in">
            <div className="final-cta-card text-white rounded-3xl p-8 mt-10 text-center">
              <p className="text-lg font-bold mb-2">Ready to try it?</p>
              <p className="text-white/70 text-sm mb-6">Takes less than 60 seconds to get started.</p>
              <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6 py-3 text-sm transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                Start on WhatsApp Now
              </a>
            </div>
          </AnimateIn>
        </div>
      </article>

      <section className="border-t border-border py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-5">More from the Blog</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/tasks-to-delegate" className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition flex flex-col gap-2">
              <span className="text-xs font-bold bg-emerald-500/10 text-emerald-700 rounded-full px-2.5 py-0.5 self-start">Productivity</span>
              <p className="font-semibold text-sm leading-snug group-hover:text-primary transition">5 Everyday Tasks You Should Stop Doing Yourself</p>
              <span className="text-xs text-muted-foreground flex items-center gap-1 mt-auto"><Clock className="w-3 h-3" /> 4 min read</span>
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
