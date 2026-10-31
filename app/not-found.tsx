import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, ListChecks } from 'lucide-react';
import { PageNav, PageFooter } from '@/components/page-nav';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Page Not Found | Swiftgigs',
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-clip">
      <PageNav />

      <main className="relative flex-1 flex items-center justify-center overflow-hidden px-4 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,90,150,0.1)_1px,transparent_0)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_30%,black,transparent)]" aria-hidden />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-primary/[0.09] blur-3xl" aria-hidden />

        <div className="relative text-center max-w-xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-5">
            Error 404
          </span>
          <p className="font-display font-bold text-[7rem] sm:text-[9rem] leading-none tracking-[-0.04em] text-primary/15 select-none" aria-hidden>
            404
          </p>
          <h1 className="-mt-4 sm:-mt-6 text-3xl sm:text-4xl font-display font-bold tracking-[-0.015em] leading-[1.1] mb-4">
            This page wandered off
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back to something useful.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
              <Link href="/">
                <Home /> Back to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
              <Link href="/waitlist">
                <ListChecks /> Join the Waitlist
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
