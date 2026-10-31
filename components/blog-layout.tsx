import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';
import { AnimateIn } from '@/components/animate-in';

/* Shared building blocks for blog posts, kept in the same visual
   language as the landing page (soft blobs, rounded content deck,
   hairline dividers) so each article stays free of one-off chrome. */

const deck =
  'relative z-10 -mt-8 md:-mt-12 bg-background rounded-t-[1.75rem] md:rounded-t-[2.5rem] shadow-[0_-18px_44px_-22px_rgba(24,16,36,0.3)] md:shadow-[0_-28px_60px_-24px_rgba(24,16,36,0.25)]';

export function PostHeader({
  category, categoryClass = 'bg-primary/10 text-primary', title, date, readTime,
}: { category: string; categoryClass?: string; title: string; date: string; readTime: string }) {
  return (
    <header className="relative overflow-hidden px-4 sm:px-6 pt-12 md:pt-20 pb-20 md:pb-28 bg-gradient-to-b from-secondary/50 to-background">
      <div className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-primary/[0.09] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-28 bottom-0 size-72 rounded-full bg-emerald-400/[0.07] blur-3xl" aria-hidden />
      <div className="relative max-w-3xl mx-auto">
        <span className={`animate-in fade-in slide-in-from-bottom-4 duration-500 inline-block text-xs font-bold rounded-full px-3 py-1 mb-6 ${categoryClass}`}>
          {category}
        </span>
        <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 font-display font-bold tracking-[-0.025em] leading-[1.05] text-[2rem] sm:text-5xl md:text-6xl mb-7">
          {title}
        </h1>
        <p className="animate-in fade-in duration-700 [animation-delay:200ms] flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground/55">
          <span>Swiftgigs Team</span>
          <span aria-hidden className="size-1 rounded-full bg-foreground/25" />
          <span>{date}</span>
          <span aria-hidden className="size-1 rounded-full bg-foreground/25" />
          <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{readTime}</span>
        </p>
      </div>
    </header>
  );
}

export function PostDeck({ children }: { children: React.ReactNode }) {
  return <div className={deck}>{children}</div>;
}

/* Numbered steps as a hairline-divided list with oversized numerals */
export function NumberedList({ items }: { items: { num: string; title: string; body: string }[] }) {
  return (
    <ol className="my-10 border-t border-border">
      {items.map((it, i) => (
        <AnimateIn key={it.num} variant="fade-up" delay={i * 60}>
          <li className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-x-3 py-7 border-b border-border">
            <span className="font-display font-bold text-3xl sm:text-4xl leading-none text-primary/35 tracking-tight">{it.num}</span>
            <div>
              <h2 className="font-display font-bold text-xl sm:text-2xl tracking-[-0.01em] mb-2">{it.title}</h2>
              <p className="text-foreground/65 leading-relaxed">{it.body}</p>
            </div>
          </li>
        </AnimateIn>
      ))}
    </ol>
  );
}

const related = [
  { slug: 'making-help-accessible-in-nigeria', category: 'Company',      title: 'How Swiftgigs Is Making Everyday Help More Accessible in Nigeria', readTime: '3 min read' },
  { slug: 'tasks-to-delegate',                 category: 'Productivity', title: '5 Everyday Tasks You Should Stop Doing Yourself',                 readTime: '4 min read' },
  { slug: 'getting-started-with-swiftgigs',    category: 'Guide',        title: 'Your First Swiftgigs Experience: What to Expect',                  readTime: '2 min read' },
];

export function MoreFromBlog({ current }: { current: string }) {
  return (
    <section className="px-4 sm:px-6 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-baseline justify-between mb-2">
          <p className="font-display font-bold text-xl">Keep reading</p>
          <Link href="/blog" className="text-sm font-semibold text-primary hover:underline underline-offset-4">All articles</Link>
        </div>
        <ul className="border-t border-border">
          {related.filter((r) => r.slug !== current).map((r) => (
            <li key={r.slug} className="border-b border-border">
              <Link href={`/blog/${r.slug}`} className="group flex items-center gap-4 py-5">
                <span className="flex-1 min-w-0">
                  <span className="block text-xs font-semibold text-primary mb-1">{r.category} · {r.readTime}</span>
                  <span className="block font-display font-bold text-lg leading-snug group-hover:text-primary transition-colors">{r.title}</span>
                </span>
                <ArrowUpRight className="w-5 h-5 shrink-0 text-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
