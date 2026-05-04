import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { Zap, Globe, Heart, BookOpen, TrendingUp, Users, ArrowRight, MessageCircle, Lightbulb, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers at Swiftgigs — Join Our Remote Internship Team',
  description:
    'Help us build the future of local work in Nigeria. Swiftgigs is looking for passionate interns to contribute to something revolutionary — fully remote, no experience required.',
  openGraph: {
    title: 'Careers at Swiftgigs — Join Our Remote Internship Team',
    description: 'Fully remote internships at an early-stage Nigerian startup building something revolutionary.',
    type: 'website',
    url: 'https://swiftgigs.com.ng/careers',
  },
  twitter: {
    title: 'Careers at Swiftgigs',
    description: 'Remote internships at an early-stage Nigerian startup.',
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/careers' },
};

const whatYouGet = [
  {
    icon: BookOpen,
    title: 'Real-World Experience',
    desc: 'Work on an actual product used by real people — not dummy projects or sandbox exercises. Everything you build ships.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Fast',
    desc: 'Early-stage startups move at a pace you won\'t find anywhere else. You\'ll learn more in 3 months here than in a year at a corporate job.',
  },
  {
    icon: Globe,
    title: '100% Remote',
    desc: 'Work from anywhere in Nigeria — or the world. We care about what you contribute, not when or where you clock in.',
  },
  {
    icon: Users,
    title: 'Direct Mentorship',
    desc: 'You won\'t be lost in a team of 200. You\'ll work directly with the founders and have your ideas heard from day one.',
  },
  {
    icon: Rocket,
    title: 'Founding Team Energy',
    desc: 'Be part of the story from the ground floor. The people who help build Swiftgigs now are the ones who\'ll have shaped it when it becomes something big.',
  },
  {
    icon: Lightbulb,
    title: 'Portfolio-worthy Work',
    desc: 'Everything you touch is real, live, and impactful. Walk away with work you\'re proud to show — not theoretical case studies.',
  },
];

const roles = [
  {
    title: 'Product & Growth Intern',
    skills: ['Marketing', 'Content', 'Social Media', 'Community'],
    description: 'Help us tell the Swiftgigs story. You\'ll create content, run social channels, experiment with growth ideas, and talk to real users. If you love building audiences and have a knack for what resonates with Nigerians online — this is yours.',
    ideal: 'Someone curious about marketing, growth, or product who wants to see what it actually looks like in a startup from day one.',
  },
  {
    title: 'Operations & Support Intern',
    skills: ['Communication', 'Problem Solving', 'WhatsApp', 'Organisation'],
    description: 'Be the voice and backbone of Swiftgigs. You\'ll handle customer and worker communication, spot operational gaps, and help design better processes. If you\'re the person who makes everything run smoother — we need you.',
    ideal: 'Someone organised, empathetic, and energised by solving people\'s problems in real time.',
  },
  {
    title: 'Tech & Product Intern',
    skills: ['Next.js', 'React', 'TypeScript', 'Design'],
    description: 'Work directly on the Swiftgigs platform — the website, internal tools, and the systems that power our operations. No ticket queues or slow sprints. Just meaningful work that ships.',
    ideal: 'A developer or designer who wants real shipping experience on a live product rather than another tutorial project.',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <PageNav />

      {/* Hero */}
      <section className="py-12 md:py-24 px-4 border-b border-border/50 bg-card/20 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="max-w-4xl mx-auto relative">
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-6 uppercase tracking-wider">
            Join the Team
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight max-w-3xl">
            We&apos;re Just Getting Started.{' '}
            <span className="text-primary">Want In?</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6">
            Swiftgigs is an early-stage startup building something real for Nigeria. We&apos;re
            a small team moving fast and figuring things
            out as we go.
          </p>
          {/* <div className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 rounded-xl px-4 py-3 text-sm font-medium">
            <Zap className="w-4 h-4 shrink-0" />
            These are unpaid internship roles. We can&apos;t pay salaries yet — but we can
            offer something rare: the chance to help build something from scratch.
          </div> */}
        </div>
      </section>

      {/* Honest pitch */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-6 uppercase tracking-wider">
            The Honest Version
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6">Here&apos;s the deal</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              We won&apos;t pretend to be something we&apos;re not. We&apos;re a startup at
              the very beginning — no big funding rounds, no fancy office, no salary packages.
              Just a real problem, a real product, and a real opportunity to help shape what
              this becomes.
            </p>
            <p>
              What we&apos;re looking for are people who want to learn by doing — not by
              watching. People who see a half-built thing and want to help finish it. People
              who are more excited by the idea of &quot;I helped build that&quot; than
              &quot;I worked there.&quot;
            </p>
            <p>
              If that sounds like you, we want to hear from you. Every role is fully remote.
              Every contribution is visible. And when Swiftgigs grows — the people who were
              here first will have earned the right to grow with it.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 md:py-20 px-4 bg-card/30 border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4 uppercase tracking-wider">
              What You Get
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Not money. Something better.</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              We can&apos;t pay you — yet. But here&apos;s what working with us actually gives you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {whatYouGet.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-bold mb-1.5">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4 uppercase tracking-wider">
              Open Roles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Where you can contribute</h2>
            <p className="text-muted-foreground mt-3">All roles are remote internships. No experience required — only curiosity and drive.</p>
          </div>
          <div className="space-y-5">
            {roles.map((role) => (
              <div key={role.title} className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 hover:shadow-md transition">
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <h3 className="text-xl font-bold flex-1">{role.title}</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1">Internship</span>
                    <span className="text-xs font-medium bg-muted text-muted-foreground rounded-full px-3 py-1">Remote · Unpaid</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{role.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {role.skills.map((skill) => (
                    <span key={skill} className="text-xs border border-border rounded-full px-2.5 py-1 text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground italic mb-5">
                  <span className="font-semibold not-italic text-foreground/70">Ideal for:</span>{' '}
                  {role.ideal}
                </p>
                <a
                  href={`mailto:team@swiftgigs.com?subject=Internship Application: ${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition group"
                >
                  Apply for this role
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open application */}
      <section className="py-10 px-4 bg-primary/5 border-y border-primary/20">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-1">Have a different skill?</h3>
            <p className="text-muted-foreground text-sm max-w-lg">
              We&apos;re open-minded. If you have something to contribute and want to be part of
              building Swiftgigs, tell us who you are and what you&apos;d bring.
            </p>
          </div>
          <a
            href="mailto:support@swiftgigs.com.ng?subject=I want to contribute to Swiftgigs"
            className="self-start sm:self-auto shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 py-3 text-sm shadow-[0_4px_14px_rgba(98,72,220,0.3)] transition"
          >
            <MessageCircle className="w-4 h-4" />
            Reach Out
          </a>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
