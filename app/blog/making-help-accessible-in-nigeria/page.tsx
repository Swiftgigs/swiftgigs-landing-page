import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { AnimateIn } from '@/components/animate-in';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { PullQuote, StoryCard, StatStrip } from '@/components/blog-visuals';
import { PostHeader, PostDeck, MoreFromBlog, NumberedList } from '@/components/blog-layout';

export const metadata: Metadata = {
  title: 'How Swiftgigs Is Making Everyday Help More Accessible in Nigeria',
  description:
    'Searching for odd jobs around you, local gigs, or a trusted local repair shop shouldn\'t be hard. Here\'s the story behind Swiftgigs and how we\'re changing local services in Nigeria.',
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
    'article:published_time': '2026-05-04',
    'article:author': 'Swiftgigs',
    'article:section': 'Company',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Swiftgigs Is Making Everyday Help More Accessible in Nigeria',
  description: 'The story behind Swiftgigs and how we\'re changing local services in Nigeria.',
  datePublished: '2026-05-04',
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
      <PostHeader
        category="Company"
        categoryClass="bg-primary/10 text-primary"
        title="How Swiftgigs Is Making Everyday Help More Accessible in Nigeria"
        date="May 4, 2026"
        readTime="3 min read"
      />

      <PostDeck>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 pt-10 md:pt-14 pb-14 w-full">
        <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-foreground/80 [&>div:first-child_p]:text-xl [&>div:first-child_p]:leading-relaxed [&>div:first-child_p]:text-foreground/90">
          <AnimateIn variant="fade-up">
            <p>
              Nigeria is a country of extraordinary hustle. From Lagos to Abuja, people are working hard, 
              building businesses, raising families, and pushing forward every single day. But there&apos;s
              a hidden cost to all that productivity: the hours and energy spent on everyday tasks that
              could easily be handed off to someone else.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <p>
              Think about it. How much time do you spend running errands you could send someone else on?
              How often have you wished for reliable help with a home deep-clean, a pickup across town,
              or a quick repair job? Maybe you have typed &ldquo;laptop repair near me&rdquo; or tried finding a local repair shop
              you can actually trust, and ended up relying on a referral that fell through. These are small things
              individually, but they add up to hours every week.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <p>
              The problem isn&apos;t that help isn&apos;t available. Nigeria has millions of skilled,
              hardworking people actively looking for flexible income opportunities, from local gigs
              and odd jobs around their area to full-day tasks. The problem is
              connection, finding the right person quickly, trusting that they&apos;re reliable, and
              having a safe way to pay.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-2">That&apos;s exactly what Swiftgigs was built to solve.</h2>
            <p>
              We started with a simple insight: most Nigerians already use WhatsApp for everything, 
              family groups, business chats, buying and selling. So why not use it to book help for
              everyday tasks? With Swiftgigs, you send a message, describe what you need, and we find
              a list of verified workers near you to choose from. No app to download. No long
              registration forms, and a meeting code so you know the right person shows up.
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
              Every Swiftgigs worker is verified before their first job: we look up their NIN against
              government records and match the name to the account that will receive their payout. You see
              their official record photo, and contact details are shared only once your payment is in escrow.
              Customers verify their NIN on their first job too. Workers who consistently deliver earn higher
              ratings and more opportunities, and repeat problems add strikes to their record.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <p>
              For customers, our escrow payment system holds your money until you confirm the task is done, or releases it
              automatically after three hours if you do not respond. If something goes wrong, you can raise
              a dispute and a customer care agent reviews both sides&apos; evidence. A meeting code and a door check
              confirm the right person turns up.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <StoryCard
              name="Bola Opatudun"
              where="Closed beta"
              service="Beta tester"
              quote="It is blazing fast. One message and the whole flow ran inside WhatsApp, so there was nothing new to learn."
              detail="Closed beta · Full request and escrow flow tested"
            />
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-2">Built for Nigeria, by Nigerians</h2>
            <p>
              Swiftgigs was designed from the ground up for the Nigerian experience. We know about traffic
              in Lagos, the reality of variable power supply, and the challenges of coordinating on-ground
              logistics across dense urban neighbourhoods. You agree the price with your worker
              before the job starts, and Swiftgigs takes a 10% commission from the worker&apos;s payout. We&apos;re not trying to replace the informal
              economy, we&apos;re trying to make it better, safer, and more accessible for everyone.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <h2 className="text-2xl font-display font-bold mt-10 mb-2">What&apos;s Next</h2>
            <p>
              We&apos;re growing the worker network across more cities and building tools that
              help workers build sustainable, flexible incomes on their own terms. If you&apos;ve ever
              wished that getting help was just... easier, Swiftgigs is for you.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up">
            <StatStrip items={[
              { value: '20', label: 'Closed beta testers' },
              { value: '15', label: 'Service categories' },
              { value: '100%', label: 'Escrow-protected' },
            ]} />
          </AnimateIn>

          <AnimateIn variant="zoom-in">
            <div className="final-cta-card text-white rounded-3xl p-8 mt-10 text-center">
              <p className="text-lg font-bold mb-2">Ready to try it?</p>
              <p className="text-white/70 text-sm mb-6">Takes less than 60 seconds to get started.</p>
              <a href="/waitlist"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6 py-3 text-sm transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                Join the waitlist
              </a>
            </div>
          </AnimateIn>
        </div>
      </article>

      <MoreFromBlog current="making-help-accessible-in-nigeria" />
      </PostDeck>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <PageFooter />
    </div>
  );
}
