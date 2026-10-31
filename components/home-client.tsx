'use client';

import { Button } from '@/components/ui/button';
import { AnimateIn } from '@/components/animate-in';
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion';
import { CheckCircle, Shield, Menu, X, ArrowRight, Sparkles, Wrench, ShoppingBag, Scissors, Truck, BadgeCheck, Timer, Lock, MapPin, ChevronDown, Check, ArrowLeft, Phone, Video as VideoIcon, Mic, Paperclip, MoreVertical, Play, Wifi, Signal, BatteryFull, Maximize2, Minimize2, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { MetaIcon } from '@/components/meta-icon';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { howItWorksSteps, faqs } from '@/lib/site-content';


const steps = howItWorksSteps;

const navLinks = [
  { href: '#how-it-works', label: 'How it works', icon: Play,       desc: 'Three steps, all on WhatsApp' },
  { href: '#services',     label: 'Services',     icon: Sparkles,   desc: 'Everything we can help with' },
  { href: '#workers',      label: 'For workers',  icon: Wrench,     desc: 'Earn on your own schedule' },
  { href: '#faq',          label: 'FAQ',          icon: HelpCircle, desc: 'Answers to common questions' },
];

const menuListVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.04 } },
};

const menuItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const } },
};

/* WhatsApp brand green, per the motion design */
const WA = {
  green: '#25D366',
  greenDark: '#1DA851',
  wallpaper: '#EFEAE2',
  out: '#D9FDD3',
  tick: '#53BDEB',
  inputBar: '#F0F2F5',
};

const marqueeItems = [
  { icon: Sparkles,    label: 'House Cleaning' },
  { icon: ShoppingBag, label: 'Errand Running' },
  { icon: Wrench,      label: 'Quick Repairs' },
  { icon: Truck,       label: 'Moving & Delivery' },
  { icon: Scissors,    label: 'Beauty at Home' },
  { icon: WhatsAppIcon, label: 'Personal Help' },
];

const stats = [
  { value: '20',   label: 'Closed beta testers' },
  { value: '7',    label: 'Service categories' },
  { value: '100%', label: 'Escrow-protected' },
  { value: '0',    label: 'Apps to download' },
];

const testimonials = [
  { quote: 'It is blazing fast. One message and the whole flow ran inside WhatsApp, so there was nothing new to learn.', author: 'Bola Opatudun', where: 'Closed beta tester' },
  { quote: 'The product is lovely and easy to move around. My one ask was stronger identity checks, so putting NIN verification in before launch is the right call.', author: 'Abdulkareem Yakubu', where: 'Closed beta tester' },
  { quote: 'Everything just dey happen for the same WhatsApp wey I dey open every day. E no hard at all, I no need download new app. Wow.', author: 'Aisha Omah', where: 'Closed beta tester' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const bubbleIn: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.4, delay: 0.8 + i * 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ─────────────────────────────────────────────────────────────────
   Phone frame — used for the hand-built hero chat only.
────────────────────────────────────────────────────────────────── */
function PhoneFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-[2.9rem] p-[11px] bg-ink ring-1 ring-black/20 shadow-[0_28px_80px_-18px_rgba(32,22,48,0.4)] ${className}`}>
      <div className="absolute left-1/2 top-[19px] -translate-x-1/2 h-[19px] w-[80px] rounded-full bg-black/90 z-20" aria-hidden />
      <div className="relative rounded-[2.3rem] overflow-hidden bg-white ring-1 ring-black/10">
        {children}
      </div>
    </div>
  );
}

/* Phone status bar — time left, signal/wifi/battery right */
function StatusBar() {
  return (
    <div style={{ backgroundColor: WA.wallpaper }} className="flex items-center justify-between px-5 pt-2.5 pb-0.5 text-[#111B21] relative z-10">
      <span className="text-[11px] font-semibold tracking-wide">9:41</span>
      <span className="flex items-center gap-1.5">
        <Signal className="w-3 h-3" />
        <Wifi className="w-3.5 h-3.5" />
        <BatteryFull className="w-4 h-4" />
      </span>
    </div>
  );
}

function WAHeader() {
  return (
    <div style={{ backgroundColor: WA.wallpaper }} className="flex items-center gap-2.5 text-[#111B21] px-3 pt-2 pb-2.5 shrink-0 relative z-10 border-b border-black/5">
      <ArrowLeft className="w-4 h-4 text-[#54656F] shrink-0" />
      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[12px] shrink-0">S</div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-[13.5px] flex items-center gap-1 leading-tight truncate">
          Swiftgigs
          <BadgeCheck className="w-3.5 h-3.5 fill-[#25D366] text-white shrink-0" />
        </p>
        <p className="text-[10.5px] text-black/45 leading-tight">online</p>
      </div>
      <VideoIcon className="w-4.5 h-4.5 text-[#54656F] shrink-0" />
      <Phone className="w-4 h-4 text-[#54656F] shrink-0 ml-1" />
      <MoreVertical className="w-4 h-4 text-[#54656F] shrink-0" />
    </div>
  );
}

function WAInputBar() {
  return (
    <div style={{ backgroundColor: WA.inputBar }} className="flex items-center gap-1.5 px-2 py-1.5 shrink-0 relative z-10">
      <div className="flex-1 h-9 bg-white rounded-full flex items-center px-3.5 gap-2 text-black/35">
        <span className="text-[12.5px]">Message</span>
        <Paperclip className="w-3.5 h-3.5 ml-auto" />
      </div>
      <div style={{ backgroundColor: WA.green }} className="w-9 h-9 rounded-full flex items-center justify-center shrink-0">
        <Mic className="w-4 h-4 text-white" />
      </div>
    </div>
  );
}

/* Green tappable rows mimicking WhatsApp's interactive reply buttons */
function WAButtonRow({ label }: { label: string }) {
  return (
    <div style={{ color: WA.greenDark }}
      className="border-t border-black/8 text-center py-2 text-[12.5px] font-semibold">
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Hero chat — mirrors the actual Swiftgigs bot flow.
────────────────────────────────────────────────────────────────── */
function WhatsAppChat() {
  return (
    <div className="flex flex-col h-[560px] md:h-[620px] text-[12.5px] leading-snug">
      <StatusBar />
      <WAHeader />

      <div style={{ backgroundColor: WA.wallpaper }} className="flex-1 px-2.5 py-3 space-y-2 overflow-hidden">
        <motion.div variants={bubbleIn} initial="hidden" animate="show" custom={0}
          className="mx-auto w-fit bg-[#FFF3C7] text-black/60 rounded-md px-2.5 py-1 text-[9.5px] font-medium flex items-center gap-1 shadow-sm">
          <Lock className="w-2.5 h-2.5 shrink-0" /> Messages are end-to-end encrypted
        </motion.div>

        <motion.div variants={bubbleIn} initial="hidden" animate="show" custom={1}
          className="mr-auto max-w-[88%] bg-white rounded-lg rounded-tl-[3px] shadow-sm overflow-hidden">
          <div className="px-2.5 pt-2 pb-1.5">
            <p className="font-semibold mb-0.5">Welcome to Swiftgigs 👋</p>
            <p className="text-black/70">We connect skilled workers with people who need services nearby. What would you like to do?</p>
            <p className="text-right text-[9px] text-black/35 mt-1">2:14 PM</p>
          </div>
          <WAButtonRow label="🧺 Request a service" />
          <WAButtonRow label="🛠 Become a Worker" />
        </motion.div>

        <motion.div variants={bubbleIn} initial="hidden" animate="show" custom={2}
          style={{ backgroundColor: WA.out }}
          className="ml-auto w-fit max-w-[78%] rounded-lg rounded-tr-[3px] px-2.5 py-1.5 shadow-sm">
          <p>Request a service</p>
          <p className="text-right text-[9px] text-black/35 mt-0.5">2:14 PM <span style={{ color: WA.tick }}>✓✓</span></p>
        </motion.div>

        <motion.div variants={bubbleIn} initial="hidden" animate="show" custom={3}
          className="mr-auto max-w-[85%] bg-white rounded-lg rounded-tl-[3px] shadow-sm overflow-hidden">
          <div className="px-2.5 pt-2 pb-1.5">
            <p className="font-semibold mb-0.5">📍 Share your location</p>
            <p className="text-black/70">It enables us to match you with nearby workers.</p>
            <p className="text-right text-[9px] text-black/35 mt-1">2:15 PM</p>
          </div>
          <WAButtonRow label="Send Location" />
        </motion.div>

        <motion.div variants={bubbleIn} initial="hidden" animate="show" custom={4}
          style={{ backgroundColor: WA.out }}
          className="ml-auto w-[58%] rounded-lg rounded-tr-[3px] p-1 shadow-sm">
          <div className="h-16 rounded-md bg-[radial-gradient(circle_at_30%_40%,#CDE8D8,#B8D8C6)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(90deg,transparent_48%,#96BCA6_48%,#96BCA6_52%,transparent_52%),linear-gradient(0deg,transparent_58%,#96BCA6_58%,#96BCA6_62%,transparent_62%)]" />
            <MapPin className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full w-5 h-5 text-red-500 fill-red-500" />
          </div>
          <p className="px-1.5 py-1 text-[10.5px] text-black/60">Lekki, Lagos</p>
        </motion.div>

        <motion.div variants={bubbleIn} initial="hidden" animate="show" custom={5}
          className="mr-auto max-w-[90%] bg-white rounded-lg rounded-tl-[3px] shadow-sm overflow-hidden">
          <div className="px-2.5 pt-2 pb-2">
            <div className="flex items-center gap-2.5 rounded-lg border border-black/8 p-2 mb-2">
              <div className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-[13px] shrink-0">A</div>
              <div className="min-w-0">
                <p className="font-semibold truncate">Amaka O. · Cleaner</p>
                <p className="text-[10.5px] text-black/50 flex items-center gap-1">
                  <BadgeCheck className="w-2.5 h-2.5 text-[#25D366] shrink-0" /> NIN verified · Guarantor checked
                </p>
              </div>
              <p className="ml-auto font-bold shrink-0">₦4,500</p>
            </div>
            <p className="text-black/70">Pay now to confirm this job. Your worker gets paid <span className="font-semibold text-black/80">after you confirm the work done</span>. Only pay through Swiftgigs for safety and easy refund.</p>
            <p className="text-right text-[9px] text-black/35 mt-1">2:16 PM</p>
          </div>
          <WAButtonRow label="Pay Now" />
        </motion.div>
      </div>

      <WAInputBar />
    </div>
  );
}

/* Defers video loading until the element nears the viewport —
   keeps ~9MB of motion design out of the initial page load. */
function LazyVideo({ src, className = '', ...rest }: { src: string; className?: string } & React.VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); io.disconnect(); } },
      { rootMargin: '260px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (active && el) { el.load(); el.play().catch(() => {}); }
  }, [active]);

  return (
    <video ref={ref} muted loop playsInline preload="none" className={className} {...rest}>
      {active && <source src={src} type="video/mp4" />}
    </video>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Square motion-design videos: styled card, click to enlarge.
────────────────────────────────────────────────────────────────── */
function VideoCard({ src, caption, onOpen, className = '' }: { src: string; caption: string; onOpen: () => void; className?: string }) {
  return (
    <button type="button" onClick={onOpen}
      className={`group relative block w-full rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_-20px_rgba(32,22,48,0.35)] cursor-pointer text-left ${className}`}>
      <LazyVideo src={src} className="w-full h-auto aspect-square block bg-[#EDE4F7]" />
      {/* hover veil + play affordance */}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-300 flex items-center justify-center">
        <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 text-ink flex items-center justify-center shadow-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 [@media(hover:none)]:opacity-90 [@media(hover:none)]:scale-100 transition-all duration-300">
          <Play className="w-6 h-6 ml-0.5 fill-current" />
        </span>
      </div>
      <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 bg-ink/80 backdrop-blur text-white text-[12.5px] font-medium rounded-full px-4 py-2">
        <Maximize2 className="w-3 h-3 fill-current" /> {caption}
      </span>
    </button>
  );
}

function VideoModal({ src, onClose }: { src: string | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-ink/90 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.92, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-fit max-w-[92vw] rounded-3xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video key={src} autoPlay loop controls playsInline className="block w-auto h-auto max-w-[92vw] max-h-[80svh]">
              <source src={src} type="video/mp4" />
            </video>
            <button onClick={onClose} aria-label="Close video"
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors">
              <Minimize2 className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Animated city-map background.
────────────────────────────────────────────────────────────────── */
function MapBackground({ tone = 'light', className = '' }: { tone?: 'light' | 'dark'; className?: string }) {
  const road = tone === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(80,55,105,0.10)';
  const block = tone === 'dark' ? 'rgba(255,255,255,0.035)' : 'rgba(80,55,105,0.05)';
  const trailA = tone === 'dark' ? 'rgba(178,132,215,0.55)' : 'rgba(134,87,162,0.45)';
  const trailB = tone === 'dark' ? 'rgba(52,199,123,0.5)' : 'rgba(35,165,105,0.45)';
  const nodes: { x: number; y: number; c: string; init: string }[] = [
    { x: 190, y: 170, c: '#8657a2', init: 'A' },
    { x: 620, y: 120, c: '#22a06b', init: 'T' },
    { x: 1010, y: 250, c: '#8657a2', init: 'E' },
    { x: 420, y: 430, c: '#d99a26', init: 'B' },
    { x: 830, y: 520, c: '#22a06b', init: 'N' },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg className="w-full h-full" viewBox="0 0 1200 640" fill="none" preserveAspectRatio="xMidYMid slice">
        {[[60, 60, 220, 140], [340, 40, 200, 120], [900, 60, 220, 130], [120, 330, 180, 150], [560, 300, 200, 160], [950, 400, 190, 150]].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx={14} stroke={block} strokeWidth="1.5" />
        ))}
        <path d="M-20 210 C260 190 520 240 740 210 S1080 170 1220 200" stroke={road} strokeWidth="2" />
        <path d="M-20 470 C300 440 640 500 900 470 S1140 430 1220 460" stroke={road} strokeWidth="2" />
        <path d="M300 -20 C320 200 280 420 310 660" stroke={road} strokeWidth="2" />
        <path d="M760 -20 C740 180 790 400 760 660" stroke={road} strokeWidth="2" />
        <path d="M1040 -20 C1060 160 1010 380 1050 660" stroke={road} strokeWidth="2" />
        <circle cx="620" cy="210" r="34" stroke={road} strokeWidth="2" />

        <path d="M190 170 C340 90 500 100 620 120" stroke={trailA} strokeWidth="2"
          strokeLinecap="round" strokeDasharray="4 10" className="animate-[trail_3.2s_linear_infinite]" />
        <path d="M620 120 C780 150 900 190 1010 250" stroke={trailB} strokeWidth="2"
          strokeLinecap="round" strokeDasharray="4 10" className="animate-[trail_4s_linear_infinite]" />
        <path d="M190 170 C240 300 330 380 420 430" stroke={trailB} strokeWidth="2"
          strokeLinecap="round" strokeDasharray="4 10" className="animate-[trail_4.6s_linear_infinite]" />
        <path d="M420 430 C560 500 700 540 830 520" stroke={trailA} strokeWidth="2"
          strokeLinecap="round" strokeDasharray="4 10" className="animate-[trail_3.6s_linear_infinite]" />

        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="11" fill={n.c} opacity="0.45"
              className="animate-[node-pulse_2.8s_ease-out_infinite]"
              style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: `${i * 0.55}s` }} />
            <circle cx={n.x} cy={n.y} r="11" fill={tone === 'dark' ? '#231b30' : '#ffffff'} stroke={n.c} strokeWidth="2" />
            <text x={n.x} y={n.y + 3.5} textAnchor="middle" fontSize="10" fontWeight="700" fill={n.c}>{n.init}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* Floating status chip pinned around the phone */
function FloatChip({ className = '', delay = '0s', children }: { className?: string; delay?: string; children: React.ReactNode }) {
  return (
    <div
      className={`absolute z-30 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-[0_12px_40px_-8px_rgba(32,22,48,0.28)] border border-black/5 animate-[floaty_5s_ease-in-out_infinite] ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

export function HomeClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const phoneY = useTransform(heroProgress, [0, 1], [0, -48]);
  const { scrollYProgress: pageProgress } = useScroll();
  const trailLength = useTransform(pageProgress, [0.02, 0.95], [0, 1]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const syncHeroHeight = () => {
      hero.style.setProperty('--hero-height', `${hero.offsetHeight}px`);
    };

    syncHeroHeight();
    const observer = new ResizeObserver(syncHeroHeight);
    observer.observe(hero);
    window.addEventListener('resize', syncHeroHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncHeroHeight);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip">

      {/* <ScrollTrail progress={trailLength} /> */}
      <VideoModal src={modalSrc} onClose={() => setModalSrc(null)} />

      {/* ── Navigation — floating glass pill ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-[3px] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <div className="sticky top-0 z-50 px-3 sm:px-4 pt-2.5 sm:pt-3.5">
        <nav
          className={`relative max-w-5xl mx-auto border backdrop-blur-xl transition-[border-radius,background-color,border-color,box-shadow] duration-300 ${
            mobileMenuOpen ? 'rounded-[1.65rem]' : 'rounded-full'
          } ${
            scrolled || mobileMenuOpen
              ? 'bg-background/92 border-border shadow-[0_14px_44px_-18px_rgba(32,22,48,0.35)]'
              : 'bg-background/65 border-border/60'
          }`}
        >
          <div className="relative pl-3.5 pr-2 sm:pl-4 sm:pr-2.5 h-14 flex items-center justify-between gap-3">
            <a href="#" className="flex items-center shrink-0">
              <Image src="/logo-icon.png" alt="Swiftgigs logo" width={200} height={200}
                className="nav-logo-icon h-10 w-10 object-contain" priority />
              <span className="nav-logo-text -ml-2.5 text-[20px] font-display font-bold tracking-tight leading-none">wiftgigs</span>
            </a>

            {/* Desktop links — sliding hover indicator */}
            <div
              className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {navLinks.map((link, i) => (
                <a key={link.href} href={link.href} onMouseEnter={() => setHoveredLink(i)}
                  className="relative px-4 py-2 text-[13.5px] font-medium text-foreground/65 hover:text-foreground transition-colors">
                  {hoveredLink === i && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-full bg-muted"
                      transition={{ type: 'spring', bounce: 0.28, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center shrink-0">
              <Link href="/waitlist">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 font-semibold h-9 group">
                  <WhatsAppIcon className="w-3.5 h-3.5 mr-1" />
                  Join the waitlist
                  <ArrowRight className="w-3.5 h-3.5 ml-1 -mr-0.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Button>
              </Link>
            </div>

            <div className="flex md:hidden items-center">
              <button
                className={`rounded-full p-2.5 transition-colors border ${mobileMenuOpen ? 'bg-muted border-border' : 'border-border/70 hover:bg-muted'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
                <motion.span
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="block"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </motion.span>
              </button>
            </div>
          </div>

          {/* Mobile dropdown — staggered sheet inside the pill */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden overflow-hidden"
              >
                <motion.div variants={menuListVariants} initial="hidden" animate="show"
                  className="px-2.5 pb-3 pt-1 border-t border-border/60">
                  {navLinks.map(({ href, label, icon: Icon, desc }) => (
                    <motion.div variants={menuItemVariants} key={href}>
                      <a href={href} onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3.5 rounded-2xl px-3 py-3 hover:bg-muted active:bg-muted transition-colors">
                        <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-[14.5px] font-semibold leading-tight">{label}</span>
                          <span className="block text-[12px] text-foreground/45 leading-tight mt-0.5">{desc}</span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-foreground/25 shrink-0" />
                      </a>
                    </motion.div>
                  ))}

                  <motion.div variants={menuItemVariants} className="pt-2.5 mt-1.5 border-t border-border/60 px-1">
                    <Link href="/waitlist" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-full font-semibold h-11">
                        <WhatsAppIcon className="w-4 h-4 mr-1.5" />
                        Join the waitlist
                      </Button>
                    </Link>
                    <p className="text-center text-[11.5px] text-foreground/45 mt-2.5 mb-0.5">
                      Launching soon · Available across Nigeria 🇳🇬
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* ══ Hero — scrolls fully, then pins at its bottom for the content-deck overlap ══ */}
      <div className="relative">
        <header ref={heroRef} className="hero-scroll-pin relative flex flex-col md:min-h-[100svh]">
          <MapBackground tone="light" className="hidden md:block [mask-image:radial-gradient(ellipse_85%_75%_at_50%_10%,black,transparent)]" />
          <div className="md:hidden pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,90,150,0.11)_1px,transparent_0)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,black,transparent)]" aria-hidden />
          <div className="pointer-events-none absolute -top-44 right-[-12%] h-[520px] w-[520px] rounded-full bg-primary/[0.08] blur-3xl" aria-hidden />

          <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 pt-9 sm:pt-12 md:pt-16 pb-20 sm:pb-24 md:pb-32 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 sm:gap-16 lg:gap-6 items-center relative flex-1">
            {/* Copy */}
            <div className="max-w-xl">
              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3.5 py-1.5 mb-5 sm:mb-7 text-[12px] sm:text-[13px] font-medium text-foreground/75">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available nationwide 🇳🇬
              </motion.div>

              <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
                className="font-display font-bold text-[clamp(2.35rem,11vw,2.75rem)] leading-[1.04] md:text-[4rem] tracking-[-0.02em] mb-5 sm:mb-6">
                Everyday help,<br />
                one WhatsApp<br className="hidden md:block" />
                <span className="text-primary"> message away.</span>
              </motion.h1>

              <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
                className="text-base sm:text-lg text-foreground/60 leading-relaxed mb-7 sm:mb-9 max-w-md">
                Swiftgigs connects you with vetted local workers for cleaning, errands,
                repairs and more. Matched in minutes, paid only when you&apos;re satisfied.
                No app to download.
              </motion.p>

              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
                <Link href="/waitlist">
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold px-7 w-full sm:w-auto h-12 text-[15px] shadow-[0_10px_28px_-10px_rgba(134,87,162,0.65)]">
                      <WhatsAppIcon className="w-4 h-4 mr-2" />
                      Join the waitlist
                    </Button>
                  </motion.div>
                </Link>
                <a href="#how-it-works">
                  <Button size="lg" variant="ghost" className="rounded-full font-semibold px-6 w-full sm:w-auto h-12 text-[15px] text-foreground/70 hover:text-foreground">
                    See how it works
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
                className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {['bg-primary/90', 'bg-emerald-500', 'bg-amber-400', 'bg-sky-500'].map((c, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full ${c} border-[3px] border-background flex items-center justify-center text-white text-xs font-bold`}>
                      {['B', 'A', 'P', 'N'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[13px] font-semibold leading-tight mb-0.5">Closed beta complete</p>
                  <p className="text-[13px] text-foreground/55 font-medium leading-tight">Tested end to end with 20 users</p>
                </div>
              </motion.div>
            </div>

            {/* Product visual */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: phoneY }}
              className="relative mx-auto w-full max-w-[290px] sm:max-w-[320px] lg:max-w-[340px]"
            >
              <PhoneFrame>
                <WhatsAppChat />
              </PhoneFrame>

              <FloatChip className="-left-16 top-24" delay="0s">
                <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center">
                  <BadgeCheck className="w-4.5 h-4.5 text-emerald-600" />
                </div>
                <div className="leading-tight">
                  <p className="text-[12.5px] font-semibold text-zinc-900">Worker verified</p>
                  <p className="text-[11px] text-zinc-500">ID &amp; guarantor checked</p>
                </div>
              </FloatChip>

              <FloatChip className="-right-14 bottom-32" delay="1.4s">
                <div className="w-8 h-8 rounded-full bg-primary/12 flex items-center justify-center">
                  <Timer className="w-4.5 h-4.5 text-primary" />
                </div>
                <div className="leading-tight">
                  <p className="text-[12.5px] font-semibold text-zinc-900">Matched in 6 min</p>
                  <p className="text-[11px] text-zinc-500">Average under 10</p>
                </div>
              </FloatChip>

              {/* Compact trust chips for small screens where the floating ones are hidden */}
              <div className="sm:hidden mt-4 flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-3.5 py-2 text-[12px] font-semibold text-foreground/75">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" /> Worker verified
                </span>
                <span className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-3.5 py-2 text-[12px] font-semibold text-foreground/75">
                  <Timer className="w-3.5 h-3.5 text-primary" /> Matched in minutes
                </span>
              </div>
            </motion.div>
          </div>

          {/* Giant faded wordmark anchored at the hero's base */}
          <div aria-hidden className="relative select-none pointer-events-none shrink-0 -mb-1">
            <p className="font-display font-bold text-center whitespace-nowrap leading-[0.76] tracking-[-0.045em] text-[19vw] bg-gradient-to-b from-foreground/[0.08] via-foreground/[0.04] to-transparent bg-clip-text text-transparent">
              Swiftgigs
            </p>
          </div>
        </header>

        {/* ══ Content deck — scrolls over the bottom-pinned hero ══ */}
        <div className="relative z-10 bg-background rounded-t-[1.75rem] md:rounded-t-[2.5rem] shadow-[0_-18px_44px_-22px_rgba(24,16,36,0.35)] md:shadow-[0_-28px_60px_-24px_rgba(24,16,36,0.28)]">

          {/* ── Service ticker ── */}
          <section aria-label="Services offered"
            className="rounded-t-[1.75rem] md:rounded-t-[2.5rem] overflow-hidden border-b border-border bg-gradient-to-r from-secondary/70 via-card to-secondary/70 py-6 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                  {marqueeItems.map(({ icon: Icon, label }) => (
                    <span key={`${dup}-${label}`} className="flex items-center gap-2.5 sm:gap-3 px-6 sm:px-9 whitespace-nowrap">
                      <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </span>
                      <span className="font-display font-semibold text-[15px] sm:text-[17px] text-foreground/75">{label}</span>
                      <Sparkles className="w-3.5 h-3.5 text-primary/40 ml-6 sm:ml-9" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* ── What is Swiftgigs + stats ── */}
          <section className="relative overflow-hidden py-14 sm:py-16 md:py-24 px-4 sm:px-6">
            <div className="pointer-events-none absolute -left-24 top-16 size-64 rounded-full bg-primary/[0.08] blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -right-28 bottom-0 size-72 rounded-full bg-emerald-400/[0.07] blur-3xl" aria-hidden />
            <div className="max-w-6xl mx-auto relative">
              <AnimateIn variant="fade-up">
                <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] border border-primary/10 bg-gradient-to-br from-card via-card to-secondary/55 p-6 sm:p-9 md:p-12 shadow-[0_28px_80px_-48px_rgba(72,42,94,0.55)] mb-5">
                  <div className="absolute right-0 top-0 h-full w-1/2 opacity-60 [background-image:radial-gradient(circle_at_center,rgba(134,87,162,0.16)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden />
                  <div className="relative grid md:grid-cols-[0.85fr_1.15fr] gap-7 md:gap-16 items-center">
                    <div>
                      <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary mb-4">
                        <span className="h-px w-7 bg-primary/60" aria-hidden /> About Swiftgigs
                      </p>
                      <h2 className="font-display font-bold text-[2rem] sm:text-4xl md:text-[2.75rem] leading-[1.05] tracking-[-0.025em]">
                      What is Swiftgigs?
                      </h2>
                    </div>
                    <div>
                      <p className="text-base sm:text-lg text-foreground/60 leading-relaxed">
                        <span className="text-foreground/90 font-semibold">Swiftgigs is a WhatsApp-based platform that connects
                        people across Nigeria to vetted local workers</span> for everyday tasks like cleaning, errands,
                        deliveries, repairs and more. Instead of downloading another app or asking around
                        for help, you send one WhatsApp message and get matched with a trusted person
                        nearby, usually in minutes.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {[
                          { icon: WhatsAppIcon, label: 'WhatsApp-first' },
                          { icon: BadgeCheck, label: 'Vetted workers' },
                          { icon: Timer, label: 'Matched in minutes' },
                        ].map(({ icon: Icon, label }) => (
                          <span key={label} className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background/75 px-3 py-2 text-xs sm:text-[13px] font-semibold text-foreground/70 backdrop-blur">
                            <Icon className="size-3.5 text-primary" /> {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn variant="fade-up" delay={120}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                  {stats.map((s, i) => (
                    <div key={s.label} className="rounded-2xl border border-border/80 bg-card/75 px-4 py-5 sm:px-6 sm:py-7 transition-transform duration-300 hover:-translate-y-1">
                      <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-1 text-primary">{s.value}</p>
                      <p className="text-[11px] sm:text-[13px] text-foreground/50 font-semibold leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </section>

          {/* ── How it works ── */}
          <section id="how-it-works" className="scroll-mt-20 py-14 sm:py-16 md:py-28 px-4 sm:px-6 bg-secondary/40 border-y border-border">
            <div className="max-w-6xl mx-auto">
              <AnimateIn variant="fade-up" className="max-w-2xl mb-10 sm:mb-16">
                <p className="text-sm font-semibold text-primary mb-3">How it works</p>
                <h2 className="font-display font-bold text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.01em] mb-4">
                  How does Swiftgigs work?
                </h2>
                <p className="text-lg text-foreground/60">
                  Three steps, all inside WhatsApp. Simple, fast, and reliable every time.
                </p>
              </AnimateIn>

              <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
                <div className="relative">
                  <div className="absolute left-[23px] top-6 bottom-6 w-px bg-border hidden sm:block" aria-hidden />
                  <div className="space-y-2">
                    {steps.map((step, idx) => (
                      <AnimateIn key={idx} variant="fade-up" delay={idx * 110}>
                        <div className="relative flex gap-4 sm:gap-8 items-start rounded-2xl p-4 sm:p-6 hover:bg-card transition-colors group">
                          <div className="relative z-10 w-12 h-12 rounded-full bg-card border border-border group-hover:border-primary/40 flex items-center justify-center shrink-0 font-display font-bold text-primary transition-colors">
                            {idx + 1}
                          </div>
                          <div className="pt-1.5">
                            <h3 className="font-display font-bold text-xl mb-1.5">{step.title}</h3>
                            <p className="text-foreground/60 leading-relaxed max-w-md">{step.desc}</p>
                          </div>
                        </div>
                      </AnimateIn>
                    ))}
                  </div>

                  <AnimateIn variant="fade-up" delay={380} className="mt-10 ml-5 sm:ml-[72px]">
                    <Link href="/waitlist"
                      className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
                      Join the waitlist in 60 seconds
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </AnimateIn>
                </div>

                <AnimateIn variant="fade-right">
                  <VideoCard
                    src="/request-flow-only.mp4"
                    caption="Watch the booking flow"
                    onOpen={() => setModalSrc('/request-flow-only.mp4')}
                    className="max-w-md mx-auto"
                  />
                </AnimateIn>
              </div>
            </div>
          </section>

          {/* ── Why Swiftgigs — bento grid ── */}
          <section id="services" className="scroll-mt-20 py-14 sm:py-16 md:py-28 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <AnimateIn variant="fade-up" className="max-w-2xl mb-14">
                <p className="text-sm font-semibold text-primary mb-3">Why Swiftgigs</p>
                <h2 className="font-display font-bold text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.01em] mb-4">
                  Built on trust, start to finish
                </h2>
                <p className="text-lg text-foreground/60">
                  Letting someone into your home or handing off an errand takes trust.
                  Every part of Swiftgigs is designed to earn it.
                </p>
              </AnimateIn>

              <div className="grid md:grid-cols-3 gap-4">
                <AnimateIn variant="fade-up" className="md:col-span-2">
                  <div className="h-full rounded-3xl bg-secondary/60 border border-primary/10 p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[250px] sm:min-h-[280px]">
                    <div className="flex items-center gap-3 mb-8 flex-wrap">
                      {[
                        { init: 'A', role: 'Cleaner' },
                        { init: 'E', role: 'Electrician' },
                        { init: 'T', role: 'Errands' },
                      ].map((w) => (
                        <div key={w.init} className="flex items-center gap-2 bg-card rounded-full pl-1.5 pr-3.5 py-1.5 border border-border shadow-sm">
                          <span className="w-7 h-7 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">{w.init}</span>
                          <span className="text-[13px] font-medium">{w.role}</span>
                          <BadgeCheck className="w-4 h-4 text-emerald-600" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">Verified people, not strangers</h3>
                      <p className="text-foreground/60 leading-relaxed max-w-lg">
                        Every worker passes ID verification, guarantor checks and an in-person screening call
                        before their first job, then keeps earning your trust through ratings.
                      </p>
                    </div>
                  </div>
                </AnimateIn>

                <AnimateIn variant="fade-up" delay={90}>
                  <div className="h-full rounded-3xl bg-[#25D366]/[0.09] border border-[#25D366]/15 p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[280px]">
                    <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center">
                      <WhatsAppIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">No app needed</h3>
                      <p className="text-foreground/60 leading-relaxed">
                        Runs entirely on WhatsApp, the app 90% of Nigeria already opens every day.
                      </p>
                    </div>
                  </div>
                </AnimateIn>

                <AnimateIn variant="fade-up" delay={60}>
                  <div className="h-full rounded-3xl bg-muted/70 border border-border p-6 sm:p-8 flex flex-col justify-between min-h-[230px] sm:min-h-[260px]">
                    <p className="font-display font-bold text-4xl tracking-tight">₦1,000<span className="text-foreground/40 text-xl font-semibold">+</span></p>
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">Honest pricing</h3>
                      <p className="text-foreground/60 leading-relaxed">
                        Prices aren&apos;t fixed. You negotiate and agree the final price with your
                        provider through Swiftgigs before the job starts. No hidden fees.
                      </p>
                    </div>
                  </div>
                </AnimateIn>

                <AnimateIn variant="fade-up" delay={120} className="md:col-span-2">
                  <div className="h-full rounded-3xl bg-ink text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-10 min-h-[250px] sm:min-h-[260px] relative overflow-hidden">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" aria-hidden />
                    <div className="inline-flex items-start sm:items-center gap-2.5 bg-white/[0.07] border border-white/10 rounded-2xl sm:rounded-full px-4 py-2.5 self-start backdrop-blur">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <span className="text-[13px] font-medium text-white/85">₦4,500 held in escrow · released on your confirmation</span>
                    </div>
                    <div className="relative">
                      <h3 className="font-display font-bold text-2xl mb-2">Pay only when satisfied</h3>
                      <p className="text-white/55 leading-relaxed max-w-lg">
                        Your money sits with us, not the worker, until you confirm the job is done
                        properly. If anything goes wrong, support steps in fast.
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              </div>

              <AnimateIn variant="fade-up" delay={150}>
                <div className="mt-4 rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
                    <h3 className="font-display font-bold text-2xl">What can we help you with?</h3>
                    <Link href="/waitlist"
                      className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                      Join the waitlist <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {['House Cleaning', 'Errand Running', 'Grocery Shopping', 'Quick Repairs', 'Plumbing', 'Moving Assistance', 'Deliveries', 'Beauty at Home', 'Laundry Pickup', 'Handyman Jobs', 'Personal Assistance'].map((s) => (
                      <span key={s} className="rounded-full border border-border bg-muted/50 px-4 py-2 text-[13.5px] font-medium text-foreground/70 hover:border-primary/40 hover:text-foreground transition-colors cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </section>

          {/* ══ Sticky stack: Workers slides up over The Experience ══ */}
          <div className="relative">
            {/* ── The experience — motion design as ambient backdrop ── */}
            <section className="sticky top-0 min-h-[100svh] flex items-center bg-ink text-white py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
              {/* video backdrop */}
              <LazyVideo
                src="/compiled-scenes-main.mp4"
                aria-hidden
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto max-w-none aspect-square [mask-image:linear-gradient(to_right,transparent_0%,black_26%,black_100%)]"
              />
              <div className="hidden md:block absolute inset-0 bg-[linear-gradient(90deg,#171021_0%,#171021_40%,rgba(23,16,33,0.7)_58%,rgba(23,16,33,0.2)_78%,transparent_100%)]" aria-hidden />
              <div className="md:hidden pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/25 blur-3xl" aria-hidden />
              <div className="md:hidden pointer-events-none absolute -left-20 bottom-0 size-56 rounded-full bg-primary/15 blur-3xl" aria-hidden />

              <div className="max-w-6xl mx-auto relative w-full">
                <div className="max-w-xl">
                  <p className="text-sm font-semibold text-[#C9A5E8] mb-3">The experience</p>
                  <h2 className="font-display font-bold text-[2rem] sm:text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.01em] mb-5">
                    From &ldquo;I need help&rdquo;<br />to help at your door.
                  </h2>
                  <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-7 sm:mb-9 max-w-md">
                    One message, a vetted match, secure payment, done.
                    all in the app you already use.
                  </p>
                  <div className="space-y-3.5 mb-10">
                    {['Describe your task in plain language', 'Review your matched worker’s profile & rating', 'Confirm, and payment stays protected until the job is done'].map((line, i) => (
                      <div key={i} className="flex items-start sm:items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </span>
                        <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed">{line}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 [&_button]:w-full sm:[&_button]:w-auto">
                    <Link href="/waitlist" className="block sm:inline-block">
                      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="block sm:inline-block">
                        <Button size="lg" className="bg-white text-ink hover:bg-white/90 rounded-full font-semibold px-7 h-12">
                          Join the waitlist
                          <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Button>
                      </motion.div>
                    </Link>
                    <Button size="lg" variant="ghost" onClick={() => setModalSrc('/compiled-scenes-main.mp4')}
                      className="rounded-full font-semibold px-6 h-12 text-white/85 hover:text-white hover:bg-white/10 border border-white/20">
                      <Play className="w-4 h-4 mr-2 fill-current" />
                      Watch the full flow
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* ── For workers — slides over the video stage ── */}
            <section id="workers"
              className="scroll-mt-20 relative z-10 bg-background rounded-t-[2rem] md:rounded-t-[3rem] shadow-[0_-28px_60px_-20px_rgba(10,6,18,0.5)] lg:min-h-[100svh] flex items-center py-16 sm:py-20 px-4 sm:px-6">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16 items-center w-full">
                <AnimateIn variant="fade-left" className="order-2 lg:order-1">
                  <VideoCard
                    src="/worker-flow-only.mp4"
                    caption="Watch the worker flow"
                    onOpen={() => setModalSrc('/worker-flow-only.mp4')}
                    className="max-w-md mx-auto"
                  />
                </AnimateIn>

                <AnimateIn variant="fade-right" className="order-1 lg:order-2">
                  <p className="text-sm font-semibold text-primary mb-3">For workers</p>
                  <h2 className="font-display font-bold text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.01em] mb-5">
                    Turn your skills into steady income
                  </h2>
                  <p className="text-lg text-foreground/60 mb-10 leading-relaxed max-w-md">
                    Join Swiftgigs and start earning in your area, on your schedule, at your pace.
                  </p>

                  <div className="space-y-6 mb-10">
                    {[
                      { title: 'Flexible work', desc: 'Work your own hours, your own way. Accept only the jobs you want.' },
                      { title: 'Get paid fast', desc: 'Secure escrow payment released straight to you when the job is confirmed.' },
                      { title: 'Build a reputation', desc: 'Great work earns ratings; higher ratings earn you more and better jobs.' },
                    ].map((b, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-display font-bold mb-0.5">{b.title}</p>
                          <p className="text-[15px] text-foreground/55 leading-relaxed">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href="/waitlist" className="inline-block">
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
                      <Button size="lg" className="bg-ink text-white hover:bg-ink/90 rounded-full font-semibold px-7 h-12">
                        Join the worker waitlist
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </motion.div>
                  </Link>
                </AnimateIn>
              </div>
            </section>
          </div>

          {/* ── Testimonials ── */}
          <section className="py-14 sm:py-16 md:py-28 px-4 sm:px-6 bg-muted/40 border-y border-border">
            <div className="max-w-6xl mx-auto">
              <AnimateIn variant="fade-up" className="flex flex-wrap items-end justify-between gap-6 mb-14">
                <div>
                  <p className="text-sm font-semibold text-primary mb-3">Reviews</p>
                  <h2 className="font-display font-bold text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.01em]">
                    What did our beta testers say?<br />
                    <span className="text-foreground/40">Straight from the closed beta.</span>
                  </h2>
                </div>
                <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-4">
                  <p className="font-display font-bold text-3xl">20</p>
                  <div>
                    <p className="text-xs font-semibold leading-tight mb-0.5">Closed beta testers</p>
                    <p className="text-xs text-foreground/50 font-medium leading-tight">Tested end to end</p>
                  </div>
                </div>
              </AnimateIn>

              <div className="grid md:grid-cols-3 gap-4">
                {testimonials.map((t, idx) => (
                  <AnimateIn key={idx} variant="fade-up" delay={idx * 100}>
                    <figure className="bg-card border border-border rounded-3xl p-6 sm:p-8 h-full flex flex-col">
                      <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-[11.5px] font-semibold mb-6">
                        <BadgeCheck className="w-3.5 h-3.5" /> Closed beta feedback
                      </span>
                      <blockquote className="text-[17px] leading-relaxed mb-8 flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
                      <figcaption className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-primary/12 text-primary font-bold flex items-center justify-center">
                          {t.author[0]}
                        </span>
                        <span>
                          <span className="block font-semibold text-sm">{t.author}</span>
                          <span className="block text-xs text-foreground/50">{t.where}</span>
                        </span>
                      </figcaption>
                    </figure>
                  </AnimateIn>
                ))}
              </div>

              <AnimateIn variant="fade-up" delay={150}>
                <div className="mt-4 rounded-3xl bg-card border border-border px-6 sm:px-8 py-6 grid sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-x-10 gap-y-4">
                  {[
                    { icon: BadgeCheck, label: 'Workers screened before onboarding' },
                    { icon: Lock,       label: 'Escrow-protected payments' },
                    { icon: Shield,     label: 'Support on every single job' },
                    { icon: MapPin,     label: 'Local, nearby workers' },
                  ].map(({ icon: Icon, label }) => (
                    <span key={label} className="flex items-center gap-2.5 text-[13.5px] font-medium text-foreground/65">
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      {label}
                    </span>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="scroll-mt-20 py-14 sm:py-16 md:py-28 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-20 items-start">
              <AnimateIn variant="fade-up">
                <p className="text-sm font-semibold text-primary mb-3">FAQ</p>
                <h2 className="font-display font-bold text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.01em] mb-4">
                  Frequently asked questions
                </h2>
                <p className="text-foreground/55 leading-relaxed mb-6">
                  Everything you need to know about getting help through Swiftgigs.
                </p>
                <a href="/waitlist"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Still curious? Join the waitlist <ArrowRight className="w-4 h-4" />
                </a>
              </AnimateIn>

              <AnimateIn variant="fade-up" delay={100}>
                <Accordion type="single" collapsible>
                  {faqs.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-left font-semibold text-[15.5px] hover:no-underline py-5">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-foreground/60 leading-relaxed text-[15px]">
                        <p>{item.a}</p>
                        {item.link && (
                          <Link href={item.link.href}
                            className="mt-3 inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2.5 transition-all">
                            {item.link.label} <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimateIn>
            </div>
          </section>

          {/* ── Final CTA — a living chat invitation ── */}
          <section className="px-3 sm:px-4 pb-3 sm:pb-4">
            <AnimateIn variant="fade-up">
              <div className="final-cta-card max-w-6xl mx-auto rounded-[1.75rem] sm:rounded-[2rem] text-white px-5 sm:px-6 py-14 sm:py-16 md:py-24 text-center relative overflow-hidden">
                <MapBackground tone="dark" className="hidden md:block opacity-34 [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,black,transparent)]" />
                <WhatsAppIcon className="pointer-events-none absolute -left-10 -bottom-12 w-56 h-56 text-white/[0.055]" aria-hidden />

                {/* floating request bubbles */}
                {[
                  { text: 'Need a cleaner today 🧹', cls: 'left-[7%] top-[18%]', delay: '0s' },
                  { text: 'Fix my sink 🔧', cls: 'right-[9%] top-[26%]', delay: '1.2s' },
                  { text: 'Errand in 20 mins 🛵', cls: 'left-[12%] bottom-[16%]', delay: '2.1s' },
                  { text: 'Braids at home 💅', cls: 'right-[13%] bottom-[22%]', delay: '0.7s' },
                ].map((b) => (
                  <span key={b.text}
                    className={`hidden lg:inline-flex absolute ${b.cls} items-center bg-white/[0.09] border border-white/12 backdrop-blur rounded-2xl rounded-bl-md px-4 py-2.5 text-[13px] font-medium text-white/85 animate-[floaty_6s_ease-in-out_infinite]`}
                    style={{ animationDelay: b.delay }}>
                    {b.text}
                  </span>
                ))}

                <div className="relative">
                  {/* typing indicator */}
                  <span className="inline-flex items-center gap-1.5 bg-white/[0.105] border border-white/14 rounded-full px-4 py-2 mb-7">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-bounce [animation-delay:300ms]" />
                    <span className="text-[12.5px] font-medium ml-1.5 text-white/85">Swiftgigs is ready to reply…</span>
                  </span>

                  <h2 className="font-display font-bold text-3xl md:text-[3.4rem] leading-[1.06] tracking-[-0.01em] mb-5">
                    One message.<br />That&apos;s all it takes.
                  </h2>
                  <p className="text-lg text-white/75 mb-10 max-w-lg mx-auto leading-relaxed">
                    No forms. No stress. No delays. Just WhatsApp us and get it done.
                  </p>
                  <Link href="/waitlist">
                    <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                      <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full font-bold text-base px-8 h-13">
                        <WhatsAppIcon className="w-5 h-5 mr-2" />
                        Join the waitlist
                      </Button>
                    </motion.div>
                  </Link>
                  <p className="text-sm text-white/58 mt-5">Launching soon · No commitments · Available across Nigeria</p>
                </div>
              </div>
            </AnimateIn>
          </section>

          {/* ── Footer ── */}
          <footer id="footer" className="bg-ink text-white pt-16 pb-8 px-4 mt-4 relative overflow-hidden">
            <MapBackground tone="dark" className="hidden md:block [mask-image:radial-gradient(ellipse_90%_85%_at_50%_20%,black,transparent)] opacity-80" />
            <div className="max-w-6xl mx-auto relative">
              <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-6 gap-y-10 md:gap-10 mb-12 md:mb-16">
                <div className="col-span-2 md:col-span-1">
                  <p className="font-display font-bold text-xl mb-3">Swiftgigs</p>
                  <p className="text-sm text-white/50 leading-relaxed max-w-[16rem] mb-6">
                    Vetted local help for everyday tasks, all on WhatsApp. Available across Nigeria.
                  </p>
                  <a href="/waitlist"
                    className="inline-flex items-center gap-2 bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    Join the waitlist
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-white/40 text-[13px] uppercase tracking-wider">Company</h4>
                  <ul className="space-y-3 text-[15px] text-white/65">
                    {[['About', '/about'], ['Blog', '/blog'], ['Careers', '/careers']].map(([l, h]) => (
                      <li key={l}><a href={h} className="hover:text-white transition">{l}</a></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-white/40 text-[13px] uppercase tracking-wider">Legal</h4>
                  <ul className="space-y-3 text-[15px] text-white/65">
                    <li><a href="/terms" className="hover:text-white transition">Terms &amp; Conditions</a></li>
                    <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                    <li><a href="/data-deletion" className="hover:text-white transition">Data Deletion</a></li>
                  </ul>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-1">
                  <h4 className="font-semibold mb-4 text-white/40 text-[13px] uppercase tracking-wider">Contact</h4>
                  <ul className="space-y-3 text-[15px] text-white/65">
                    <li><a href="/waitlist" className="hover:text-white transition">Waitlist</a></li>
                    <li><a href="mailto:support@swiftgigs.com.ng" className="hover:text-white transition">Email</a></li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mb-6">
                <span className="inline-flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-full pl-1.5 pr-5 py-1.5">
                  <Image src="/cac-logo.png" alt="Corporate Affairs Commission (CAC) Nigeria seal" width={585} height={579}
                    className="h-9 w-9 rounded-full bg-white object-contain" />
                  <span className="text-left leading-tight">
                    <span className="block text-[12.5px] font-semibold text-white/85">CAC Registered Business</span>
                    <span className="block text-[11px] text-white/45">Corporate Affairs Commission · Nigeria</span>
                  </span>
                </span>
                <span className="inline-flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-full pl-1.5 pr-5 py-1.5">
                  <span className="h-9 w-9 rounded-full bg-white flex items-center justify-center shrink-0">
                    <MetaIcon className="w-[22px] h-auto" />
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-[12.5px] font-semibold text-white/85">Meta Verified Business</span>
                    <span className="block text-[11px] text-white/45">Business verified by Meta</span>
                  </span>
                </span>
              </div>

              <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/35">
                <p>&copy; 2026 Swiftgigs Technologies LTD. All rights reserved.</p>
                <p>Built for Nigeria 🇳🇬</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
