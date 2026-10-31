import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { AnimateIn } from '@/components/animate-in';
import { ArrowRight, Clock } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { PostBanner, type BannerVariant } from '@/components/blog-visuals';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Insights on Local Services & Productivity in Nigeria',
  description:
    'Guides on local gigs, odd jobs around you, finding a trusted local repair shop and getting everyday tasks done in Nigeria, from the Swiftgigs team.',
  openGraph: {
    title: 'Swiftgigs Blog | Insights on Local Services & Productivity in Nigeria',
    description: 'Tips, guides, and stories from the Swiftgigs team.',
    type: 'website',
    url: 'https://swiftgigs.com.ng/blog',
  },
  twitter: {
    title: 'Swiftgigs Blog',
    description: 'Tips, guides, and stories about local services in Nigeria.',
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/blog' },
};

const posts = [
  {
    slug: 'making-help-accessible-in-nigeria',
    banner: 'city' as BannerVariant,
    category: 'Company',
    categoryColor: 'bg-primary/10 text-primary',
    title: 'How Swiftgigs Is Making Everyday Help More Accessible in Nigeria',
    excerpt: 'From odd jobs around you to finding a trusted local repair shop, getting reliable help in Nigeria has always been harder than it should be. We built Swiftgigs to change that, inside WhatsApp.',
    date: 'May 4, 2026',
    readTime: '3 min read',
    featured: true,
  },
  {
    slug: 'tasks-to-delegate',
    banner: 'checklist' as BannerVariant,
    category: 'Productivity',
    categoryColor: 'bg-emerald-500/10 text-emerald-700',
    title: '5 Everyday Tasks You Should Stop Doing Yourself',
    excerpt: 'Your time is your most valuable resource. Here are five common tasks to delegate, plus how to find odd jobs and quick repairs near you, and why the math works in your favour.',
    date: 'May 4, 2026',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'getting-started-with-swiftgigs',
    banner: 'chat' as BannerVariant,
    category: 'Guide',
    categoryColor: 'bg-sky-500/10 text-sky-700',
    title: 'Your First Swiftgigs Experience: What to Expect',
    excerpt: 'Need a repair or looking for local gigs? Here\'s exactly what happens from your first WhatsApp message to a completed task, step by step.',
    date: 'May 4, 2026',
    readTime: '2 min read',
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-clip">
      <PageNav />

      {/* Hero */}
      <header className="relative overflow-hidden px-4 sm:px-6 pt-14 md:pt-24 pb-24 md:pb-32 bg-gradient-to-b from-secondary/50 to-background">
        <div className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-primary/[0.09] blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-28 bottom-0 size-72 rounded-full bg-emerald-400/[0.07] blur-3xl" aria-hidden />
        <div className="relative max-w-6xl mx-auto">
          <span className="animate-in fade-in slide-in-from-bottom-4 duration-500 inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-5">
            The Swiftgigs blog
          </span>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 font-display font-bold tracking-[-0.03em] leading-[1.03] text-4xl sm:text-6xl md:text-7xl max-w-4xl mb-6">
            Local gigs, odd jobs &amp; getting things <span className="text-primary">done</span>.
          </h1>
          <p className="animate-in fade-in duration-700 [animation-delay:200ms] text-foreground/60 text-base md:text-xl max-w-xl leading-relaxed">
            Guides and stories on local services, side income and everyday life in Nigeria.
          </p>
        </div>
      </header>

      <div className="relative z-10 -mt-8 md:-mt-12 bg-background rounded-t-[1.75rem] md:rounded-t-[2.5rem] shadow-[0_-18px_44px_-22px_rgba(24,16,36,0.3)] md:shadow-[0_-28px_60px_-24px_rgba(24,16,36,0.25)]">

      {/* Featured post */}
      <section className="pt-12 md:pt-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn variant="fade-up">
            <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-12 items-center">
              <PostBanner variant={featured.banner} className="transition-transform duration-500 group-hover:scale-[1.01]" />
              <div>
                <span className={`inline-block text-xs font-bold rounded-full px-3 py-1 mb-5 ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.1] text-2xl sm:text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-foreground/60 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-foreground/55">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* More posts */}
      <section className="py-14 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn variant="fade-up">
            <p className="font-display font-bold text-xl pb-3 mb-8 border-b border-border">More articles</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {rest.map((post, i) => (
              <AnimateIn key={post.slug} variant="fade-up" delay={i * 120} className="h-full">
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="h-full flex flex-col">
                    <PostBanner variant={post.banner} compact className="mb-5 transition-transform duration-500 group-hover:scale-[1.01]" />
                    <span className={`inline-block text-xs font-bold rounded-full px-3 py-1 mb-3 self-start ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <h3 className="font-display font-bold text-xl tracking-[-0.01em] mb-2 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-foreground/50 mt-auto">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-14 md:pb-20 px-4 sm:px-6">
        <div className="final-cta-card max-w-6xl mx-auto rounded-[2rem] text-white px-6 sm:px-10 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl mb-2">Want to be first in line?</h3>
            <p className="text-white/70 text-[15px] leading-relaxed">We&apos;re launching soon, join the waitlist and we&apos;ll message you the moment we go live.</p>
          </div>
          <a href="/waitlist"
            className="self-start sm:self-auto shrink-0 inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6 py-3 text-sm transition-colors">
            <WhatsAppIcon className="w-4 h-4" />
            Join the waitlist
          </a>
        </div>
      </section>
      </div>

      <PageFooter />
    </div>
  );
}
