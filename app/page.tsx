'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Zap, CheckCircle, Briefcase, Shield, Users, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(121,79,235,0.12),_transparent_36%),linear-gradient(180deg,_#ffffff_0%,_#fbf9ff_100%)] text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_12px_24px_rgba(18,18,18,0.04)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Image
              src="/logo-icon.png"
              alt="Swiftgigs logo"
              width={200}
              height={200}
              className="h-15 w-15 md:h-20 md:w-18 object-contain"
              priority
            />
            <span className="-ml-4.5 text-3xl md:text-3xl font-black tracking-tight text-primary leading-none">
              wiftgigs
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition">How It Works</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition">Services</a>
            <a href="#workers" className="text-sm font-medium hover:text-primary transition">For Workers</a>
            <a href="#footer" className="text-sm font-medium hover:text-primary transition">Contact</a>
          </div>
          <button
            className="md:hidden rounded-md p-2 hover:bg-primary/10 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border p-4 space-y-1 bg-background/50 backdrop-blur animate-in fade-in slide-in-from-top-2 duration-200">
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-sm hover:text-primary hover:bg-primary/5 transition py-3 px-3 rounded-lg">How It Works</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-sm hover:text-primary hover:bg-primary/5 transition py-3 px-3 rounded-lg">Services</a>
            <a href="#workers" onClick={() => setMobileMenuOpen(false)} className="block text-sm hover:text-primary hover:bg-primary/5 transition py-3 px-3 rounded-lg">For Workers</a>
            <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" onClick={() => setMobileMenuOpen(false)} className="block text-sm hover:text-primary hover:bg-primary/5 transition py-3 px-3 rounded-lg">Go to Whatsapp</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-28 px-4 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-balance leading-[1.04]">
            Need Something Done Today? Get Help in <span className="text-primary">Minutes</span>.
          </h1>
          <p className="text-lg md:text-xl text-foreground/75 mb-10 text-balance max-w-2xl mx-auto leading-relaxed">
            No apps. No stress. Just message on WhatsApp and get a trusted helper for errands, cleaning, deliveries and more.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-12 text-sm flex-wrap px-4">
            <div className="flex items-center gap-2 bg-white/85 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Verified Workers</span>
            </div>
            <div className="flex items-center gap-2 bg-white/85 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/85 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Pay Only When Satisfied</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
            <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold w-full md:w-auto rounded-xl shadow-[0_10px_30px_rgba(98,72,220,0.35)]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start on WhatsApp Now
              </Button>
            </a>
          </div>

          {/* Micro-copy */}
          <p className="text-sm text-foreground/60 mb-8">
            Takes less than 60 seconds to get started
          </p>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-16 md:py-24 px-4 border-y border-border/70 bg-white/55 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tired of Stressing Over Small Tasks?</h2>
          <p className="text-lg text-foreground/75 max-w-2xl mx-auto">
            Running errands, finding reliable help, or getting things done shouldn't be difficult. Swiftgigs connects you to trusted people nearby — instantly.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Help in 3 Simple Steps</h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">Simple, fast, and reliable</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Steps Content */}
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Tell Us What You Need</h3>
                  <p className="text-foreground/70">Send a quick message on WhatsApp</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">We Find the Right Person</h3>
                  <p className="text-foreground/70">Get matched with a nearby verified worker</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">It Gets Done — Fast</h3>
                  <p className="text-foreground/70">Sit back while your task is completed</p>
                </div>
              </div>
            </div>

            {/* Motion Video - Desktop Side */}
            <div className="hidden md:block rounded-lg overflow-hidden shadow-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover min-h-96"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scene-3-nRFqS28nrJmgvYEUaJrE9AbruVjbZE.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Motion Video - Mobile Full Width */}
          <div className="md:hidden mt-12 rounded-lg overflow-hidden shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scene-3-nRFqS28nrJmgvYEUaJrE9AbruVjbZE.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why People Choose Swiftgigs</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⏱️', title: 'Save Time', desc: 'Stop doing everything yourself' },
              { icon: '🔒', title: 'Trusted Workers', desc: 'Verified before they work' },
              { icon: '📍', title: 'Nearby Help', desc: 'Faster response times' },
              { icon: '💬', title: 'WhatsApp Based', desc: 'No downloads needed' },
              { icon: '💸', title: 'Affordable', desc: 'Start from as low as ₦1,000' },
              { icon: '🔥', title: 'Instant Connection', desc: 'Get matched in minutes' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/35 hover:shadow-[0_16px_30px_rgba(80,58,198,0.12)] transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Can We Help You With?</h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">Whether it's urgent or simple — we've got you covered</p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Motion Video - Desktop Side */}
            <div className="hidden md:block rounded-lg overflow-hidden shadow-lg order-2">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover min-h-96"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scene-4-2O1J9wXNydyNh7o9257LKzRBiS7mMT.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4 order-1 md:order-1">
              {[
                { title: 'Errand Running', icon: Users },
                { title: 'House Cleaning', icon: CheckCircle },
                { title: 'Beauty Services', icon: Zap },
                { title: 'Moving Assistance', icon: Briefcase },
                { title: 'Quick Fix Jobs', icon: Shield },
                { title: 'Personal Help', icon: MessageCircle },
              ].map((service, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/35 hover:shadow-[0_16px_30px_rgba(80,58,198,0.12)] transition-all group">
                  <div className="mb-3 flex justify-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-center">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Motion Video - Mobile Full Width */}
          <div className="md:hidden rounded-lg overflow-hidden shadow-lg mb-12">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scene-4-2O1J9wXNydyNh7o9257LKzRBiS7mMT.mp4" type="video/mp4" />
            </video>
          </div>


        </div>
      </section>

      {/* For Workers Section */}
      <section id="workers" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content - Left on Desktop */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Earn Money With Simple Tasks?</h2>
              <p className="text-lg text-foreground/70 mb-10">
                Join Swiftgigs and start making money in your area — on your own time.
              </p>

              <h3 className="text-xl font-bold mb-6">Benefits:</h3>
              <div className="space-y-4 mb-10">
                {[
                  { title: 'Flexible work', desc: 'Work your own hours' },
                  { title: 'Get paid fast', desc: 'Quick payment processing' },
                  { title: 'No special skills needed', desc: 'We train you on the job' },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{benefit.title}</p>
                      <p className="text-sm text-foreground/60">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-[0_10px_30px_rgba(98,72,220,0.3)]">
                Become a Worker
              </Button>
            </div>

            {/* Video - Right on Desktop */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover min-h-80"
              >
                <source src="/scene-10.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-16 md:py-24 px-4 bg-white/55 backdrop-blur-sm border-y border-border/70">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">You're Safe With Us</h2>
          <p className="text-center text-lg text-foreground/70 max-w-2xl mx-auto mb-16">
            We understand trust is everything. That's why we put safety first.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Workers are screened before onboarding',
                icon: CheckCircle,
              },
              {
                title: 'Escrow intermediary for secure payment',
                icon: Shield,
              },
              {
                title: 'Support available if anything goes wrong',
                icon: Users,
              },
              {
                title: 'Clear communication before every job',
                icon: MessageCircle,
              },
              {
                title: 'You stay in control at all times',
                icon: Briefcase,
              },
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white/95 p-6 rounded-xl border border-border shadow-sm">
                <point.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 font-medium">{point.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Real People. Real Results.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/95 border border-border rounded-xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </div>
              <p className="text-lg mb-6">
                {'"I needed someone urgently and got help within 30 minutes."'}
              </p>
              <p className="font-semibold text-primary">— Abuja Customer</p>
            </div>

            <div className="bg-gradient-to-br from-white to-primary/10 border border-border rounded-xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </div>
              <p className="text-lg mb-6">
                {'"This is way easier than asking around for help."'}
              </p>
              <p className="font-semibold text-primary">— Verified User</p>
            </div>
          </div>
        </div>
      </section>


      {/* Final Close */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">One Message. That's All It Takes.</h2>
          <p className="text-lg text-foreground/75 mb-12 max-w-2xl mx-auto leading-relaxed">
            No forms. No stress. No delays. Just WhatsApp us and get it done.
          </p>

          <a href="https://wa.me/1234567890?text=Hi%20Swiftgigs" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-[0_10px_30px_rgba(98,72,220,0.3)]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start on WhatsApp Now
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-foreground text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Swiftgigs</h3>
              <p className="text-sm text-white/70">Instant tasks on WhatsApp</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="https://wa.me/1234567890" className="hover:text-white transition">WhatsApp</a></li>
                <li><a href="mailto:hello@swiftgigs.com" className="hover:text-white transition">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2024 Swiftgigs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
