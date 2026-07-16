import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { AnimateIn } from '@/components/animate-in';
import { ArrowRight, Clock } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { PostBanner, type BannerVariant } from '@/components/blog-visuals';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Insights on Local Services & Productivity in Nigeria',
  description:
    'Tips, guides, and stories about local services, productivity, and life in Nigeria — from the Swiftgigs team.',
  openGraph: {
    title: 'Swiftgigs Blog — Insights on Local Services & Productivity in Nigeria',
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
    excerpt: 'In Nigeria, finding reliable help for everyday tasks has always been harder than it should be. We built Swiftgigs to change that — using a tool 90% of Nigerians already use every day.',
    date: 'May 1, 2025',
    readTime: '3 min read',
    featured: true,
  },
  {
    slug: 'tasks-to-delegate',
    banner: 'checklist' as BannerVariant,
    category: 'Productivity',
    categoryColor: 'bg-emerald-500/10 text-emerald-700',
    title: '5 Everyday Tasks You Should Stop Doing Yourself',
    excerpt: 'Your time is your most valuable resource. Here are five common tasks Swiftgigs customers love delegating — and why the math almost always works in your favour.',
    date: 'Apr 24, 2025',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'getting-started-with-swiftgigs',
    banner: 'chat' as BannerVariant,
    category: 'Guide',
    categoryColor: 'bg-sky-500/10 text-sky-700',
    title: 'Your First Swiftgigs Experience: What to Expect',
    excerpt: 'Not sure what to expect? Here\'s exactly what happens from your first WhatsApp message to a completed task — step by step, with tips for a great experience.',
    date: 'Apr 15, 2025',
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
      <section className="py-12 md:py-20 px-4 border-b border-border bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-5">
              Swiftgigs Blog
            </span>
          </div>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 leading-tight">
            Insights on Local Services,{' '}
            <span className="block sm:inline">Productivity &amp; Life in Nigeria</span>
          </h1>
          <p className="animate-in fade-in duration-700 [animation-delay:200ms] text-muted-foreground text-base md:text-lg max-w-2xl">
            Tips, stories, and guides from the Swiftgigs team.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12 px-4 border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <AnimateIn variant="fade-up">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-5">Featured</p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="bg-card border border-border rounded-3xl p-3 sm:p-4 hover:border-primary/40 hover:shadow-[0_24px_60px_-28px_rgba(32,22,48,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                <PostBanner variant={featured.banner} className="mb-6" />
                <div className="px-3 sm:px-6 pb-4 sm:pb-6">
                <span className={`inline-block text-xs font-bold rounded-full px-3 py-1 mb-5 ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition leading-tight">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all shrink-0">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                </div>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* More posts */}
      <section className="py-12 px-4 flex-1">
        <div className="max-w-5xl mx-auto">
          <AnimateIn variant="fade-up">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-5">More Articles</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((post, i) => (
              <AnimateIn key={post.slug} variant="fade-up" delay={i * 120} className="h-full">
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-card border border-border rounded-3xl p-3 hover:border-primary/40 hover:shadow-[0_20px_50px_-26px_rgba(32,22,48,0.28)] hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                    <PostBanner variant={post.banner} compact className="mb-4" />
                    <div className="px-2.5 pb-2.5 flex flex-col flex-1">
                    <span className={`inline-block text-xs font-bold rounded-full px-3 py-1 mb-4 self-start ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition leading-snug flex-1">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-3 mt-auto">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-1.5 transition-all shrink-0">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 px-4">
        <div className="final-cta-card max-w-5xl mx-auto rounded-[2rem] text-white px-6 sm:px-10 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl mb-2">Want to be first in line?</h3>
            <p className="text-white/70 text-[15px] leading-relaxed">We&apos;re launching soon — join the waitlist and we&apos;ll message you the moment we go live.</p>
          </div>
          <a href="/waitlist"
            className="self-start sm:self-auto shrink-0 inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6 py-3 text-sm transition-colors">
            <WhatsAppIcon className="w-4 h-4" />
            Join the waitlist
          </a>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
