import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { AnimateIn } from '@/components/animate-in';
import { CheckCircle } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { PullQuote, StoryCard } from '@/components/blog-visuals';
import { PostHeader, PostDeck, MoreFromBlog, NumberedList } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'Your First Swiftgigs Experience: What to Expect',
  description:
    'New to Swiftgigs? Whether you need a quick repair or want local gigs, here\'s exactly what happens from your first WhatsApp message to a completed task, step by step.',
  openGraph: {
    title: 'Your First Swiftgigs Experience: What to Expect',
    description: 'Step-by-step guide to your first Swiftgigs task, no surprises.',
    type: 'article',
    url: 'https://swiftgigs.com.ng/blog/getting-started-with-swiftgigs',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/blog/getting-started-with-swiftgigs' },
  other: {
    'article:published_time': '2026-05-04',
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
    { '@type': 'HowToStep', name: 'Describe your task', text: 'Message Swiftgigs on WhatsApp, pick a category, share your location and describe the task.' },
    { '@type': 'HowToStep', name: 'Choose a worker',          text: 'Pick a worker near you from the list.' },
    { '@type': 'HowToStep', name: 'Agree the price and pay',  text: 'Agree the price with the worker and pay into escrow.' },
    { '@type': 'HowToStep', name: 'Verify and meet',          text: 'Share the meeting code when the worker arrives and complete the task.' },
    { '@type': 'HowToStep', name: 'Confirm and pay',         text: 'Confirm the job and release payment from escrow, then rate each other.' },
  ],
};

const steps = [
  { num: '01', title: 'Message Us and Describe the Task', body: 'Message the Swiftgigs WhatsApp number and tap "Request a service". Pick a category, or just type what you need, like "my laptop screen is cracked" or "I need a cleaner in Lekki". Share your location, then describe the task in text or a voice note, with photos or videos if they help.' },
  { num: '02', title: 'Choose a Worker Near You',         body: 'We search within 50 km of you first and show a list of nearby workers with their ratings and distance. If nobody is close, you can widen the search. Pick one and they get your request to accept or decline. If they decline, you go back to the list.' },
  { num: '03', title: 'Agree the Price and Pay into Escrow', body: 'You suggest a price and the worker can agree, counter with their own amount (with a reason, by text or voice note), or decline. Once you both agree, you get a payment link. Your money is held in escrow, not paid to the worker yet.' },
  { num: '04', title: 'Verify, Meet, and Get It Done',    body: 'Once your payment is in escrow, we verify any party who has not been checked yet. Then you receive the worker\'s official ID photo and contact, plus a 4-digit meeting code. The worker taps "I\'ve arrived" and enters the code, and you confirm the person at your door matches the photo.' },
  { num: '05', title: 'Confirm, Pay, and Rate',           body: 'When the worker marks the job done, you confirm and payment is released. If you do not respond, it is released automatically after 3 hours. If something is wrong, raise a dispute instead: both sides submit evidence and a customer care agent decides. Both of you then rate each other.' },
];

const tips = [
  { tip: 'Be specific',        detail: 'The more detail you provide, the easier it is for a worker to accept, include timing, photos and any special requirements.' },
  { tip: 'Have everything ready', detail: 'If your task requires materials (cleaning products, tools, access codes), have them prepared before the worker arrives.' },
  { tip: 'Stay accessible',    detail: 'Keep WhatsApp notifications on so you see the worker\'s offer, your meeting code and the check-in messages.' },
  { tip: 'Give honest feedback', detail: 'Ratings help great workers get more work and help us maintain the quality you expect.' },
];

export default function BlogPost3() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-clip">
      <PageNav backHref="/blog" backLabel="Back to Blog" />

      <PostHeader
        category="Guide"
        categoryClass="bg-sky-500/10 text-sky-700"
        title="Your First Swiftgigs Experience: What to Expect"
        date="May 4, 2026"
        readTime="2 min read"
      />

      <PostDeck>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 pt-10 md:pt-14 pb-14 w-full">
        <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-foreground/80 [&>div:first-child_p]:text-xl [&>div:first-child_p]:leading-relaxed [&>div:first-child_p]:text-foreground/90">
          <AnimateIn variant="fade-up">
            <p>
              You can start a request on Swiftgigs in about a minute, entirely inside WhatsApp. Here&apos;s exactly
              what happens from your first message to a completed task, with no surprises along the way.
            </p>
          </AnimateIn>

          <NumberedList items={steps} />

          <AnimateIn variant="fade-up">
            <StoryCard
              name="Abdulkareem Yakubu"
              where="Closed beta"
              service="Beta tester"
              quote="The product is lovely and easy to move around. My one ask was stronger identity checks, so putting NIN verification in before launch is the right call."
              detail="Closed beta · Feedback drove NIN verification"
            />
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <PullQuote>
              No forms. No templates. Just talk to us like a person.
            </PullQuote>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">Tips for the Best Experience</h2>
            <ul className="border-t border-border">
              {tips.map((item) => (
                <li key={item.tip} className="flex gap-3 py-4 border-b border-border">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-[15px] leading-relaxed text-foreground/65">
                    <span className="font-semibold text-foreground">{item.tip}.</span> {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-3">Looking for local gigs instead?</h2>
            <p>
              Swiftgigs works for workers too. If you search for local gigs or odd jobs around you, join the
              waitlist and we will message you when worker onboarding opens. You register in WhatsApp with your
              name, location, service and payout bank account. Your NIN is checked against that account name before
              your first job, and customers then choose you from the nearby list, with payment held in escrow.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <div className="bg-card border border-border rounded-2xl p-6 mt-8">
              <h3 className="text-lg font-display font-bold mb-3">What If Something Goes Wrong?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Raise a dispute from the job in WhatsApp. You and the worker each submit your side (text,
                photos, video or voice notes), then a customer care agent reviews both and decides to release
                payment to the worker, return it to you, or split it. Your money stays in escrow until then.
                Note that Swiftgigs&apos; 10% commission also applies to refunds.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn variant="zoom-in">
            <div className="final-cta-card text-white rounded-3xl p-8 mt-6 text-center">
              <p className="text-lg font-bold mb-2">Ready to try Swiftgigs?</p>
              <p className="text-white/70 text-sm mb-5">Describe your task once and pick a verified worker near you.</p>
              <a href="/waitlist"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6 py-3 text-sm transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                Join the waitlist
              </a>
            </div>
          </AnimateIn>
        </div>
      </article>

      <MoreFromBlog current="getting-started-with-swiftgigs" />
      </PostDeck>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <PageFooter />
    </div>
  );
}
