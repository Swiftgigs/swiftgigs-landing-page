import { BadgeCheck, Star, MapPin, Sparkles, ShoppingBag, Wrench, Clock, CheckCircle, Quote, Send, Lock } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

/* ─────────────────────────────────────────────────────────────────
   Post banners — real photography (Unsplash) under a brand-tinted
   overlay, with WhatsApp-styled story elements floating on top.
────────────────────────────────────────────────────────────────── */

export type BannerVariant = 'city' | 'checklist' | 'chat';

function Dots({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] bg-[size:22px_22px] ${className}`}
      aria-hidden
    />
  );
}

function CityScene({ compact }: { compact?: boolean }) {
  return (
    <>
      {/* dashed trail across the city */}
      <svg className="absolute inset-0 w-full h-full text-white/45" viewBox="0 0 600 300" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path d="M60 210 C180 120 300 220 380 150 S540 90 590 130" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 9" strokeLinecap="round" />
        <circle cx="60" cy="210" r="7" fill="#25D366" />
        <circle cx="590" cy="130" r="7" fill="#F2C94C" />
      </svg>

      {/* chat bubble */}
      <div className={`absolute left-[7%] top-[16%] bg-white text-zinc-900 rounded-2xl rounded-bl-md shadow-xl ${compact ? 'px-3 py-2' : 'px-4 py-3'}`}>
        <p className={`font-semibold ${compact ? 'text-[10px]' : 'text-[13px]'}`}>I need a cleaner in Lekki 🧹</p>
        {!compact && <p className="text-[10px] text-zinc-400 text-right mt-0.5">2:14 PM ✓✓</p>}
      </div>

      {/* matched worker card */}
      <div className={`absolute right-[6%] bottom-[14%] bg-white text-zinc-900 rounded-2xl rounded-br-md shadow-xl flex items-center gap-2.5 ${compact ? 'px-3 py-2' : 'px-4 py-3'}`}>
        <span className={`rounded-full bg-[#25D366] text-white font-bold flex items-center justify-center ${compact ? 'w-6 h-6 text-[10px]' : 'w-9 h-9 text-[13px]'}`}>A</span>
        <span>
          <span className={`flex items-center gap-1 font-semibold ${compact ? 'text-[10px]' : 'text-[13px]'}`}>
            Amaka O. · Cleaner <BadgeCheck className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} fill-[#25D366] text-white`} />
          </span>
          {!compact && <span className="block text-[10.5px] text-zinc-500">Identity verified · 1.2km away</span>}
        </span>
      </div>

      {!compact && (
        <span className="absolute right-[10%] top-[14%] inline-flex items-center gap-1.5 bg-white/15 border border-white/20 backdrop-blur rounded-full px-3 py-1.5 text-[11px] font-semibold text-white">
          <MapPin className="w-3 h-3" /> Lekki, Lagos 🇳🇬
        </span>
      )}
    </>
  );
}

function ChecklistScene({ compact }: { compact?: boolean }) {
  const tags = [
    { label: 'Grocery run', icon: ShoppingBag, cls: 'bg-white text-zinc-900', rot: '-rotate-3', pos: 'left-[8%] top-[18%]' },
    { label: 'Deep clean', icon: Sparkles, cls: 'bg-[#F2C94C] text-zinc-900', rot: 'rotate-2', pos: 'left-[14%] bottom-[18%]' },
    { label: 'Fix the sink', icon: Wrench, cls: 'bg-white text-zinc-900', rot: 'rotate-3', pos: 'right-[10%] top-[22%]' },
    { label: 'Airport pickup', icon: Clock, cls: 'bg-[#25D366] text-white', rot: '-rotate-2', pos: 'right-[14%] bottom-[16%]' },
  ];
  const visible = compact ? tags.slice(0, 3) : tags;
  return (
    <>
      {visible.map(({ label, icon: Icon, cls, rot, pos }) => (
        <span key={label}
          className={`absolute ${pos} ${rot} inline-flex items-center gap-1.5 rounded-full shadow-lg font-semibold ${cls} ${compact ? 'px-2.5 py-1 text-[9.5px]' : 'px-4 py-2 text-[13px]'}`}>
          <Icon className={compact ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'} />
          {label}
        </span>
      ))}
      {/* the "delegated" checkmark */}
      <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-emerald-600 shadow-2xl flex items-center justify-center ${compact ? 'w-10 h-10' : 'w-16 h-16'}`}>
        <CheckCircle className={compact ? 'w-5 h-5' : 'w-8 h-8'} strokeWidth={2.2} />
      </span>
    </>
  );
}

function ChatScene({ compact }: { compact?: boolean }) {
  return (
    <>
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] ${compact ? 'max-w-[240px]' : 'max-w-[340px]'} space-y-1.5`}>
        <div className={`mx-auto w-fit bg-[#FFF3C7]/95 text-zinc-700 rounded-md font-medium flex items-center gap-1 shadow ${compact ? 'px-2 py-0.5 text-[7.5px]' : 'px-2.5 py-1 text-[9.5px]'}`}>
          <Lock className={compact ? 'w-2 h-2' : 'w-2.5 h-2.5'} /> Messages are end-to-end encrypted
        </div>
        <div className={`ml-auto w-fit bg-[#D9FDD3] text-zinc-900 rounded-xl rounded-tr-sm shadow ${compact ? 'px-2.5 py-1.5 text-[9.5px]' : 'px-3.5 py-2 text-[12.5px]'}`}>
          Hi Swiftgigs 👋 first time here!
        </div>
        <div className={`mr-auto w-fit bg-white text-zinc-900 rounded-xl rounded-tl-sm shadow ${compact ? 'px-2.5 py-1.5 text-[9.5px]' : 'px-3.5 py-2 text-[12.5px]'}`}>
          Welcome! What do you need done today?
        </div>
        {!compact && (
          <div className="flex items-center gap-1.5 bg-white/95 rounded-full pl-4 pr-1 py-1 shadow mt-2">
            <span className="text-[11.5px] text-zinc-400 flex-1">Describe your task…</span>
            <span className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center">
              <Send className="w-3 h-3 text-white" />
            </span>
          </div>
        )}
      </div>
      {!compact && (
        <span className="absolute right-[7%] top-[12%] inline-flex items-center gap-1.5 bg-white/15 border border-white/20 backdrop-blur rounded-full px-3 py-1.5 text-[11px] font-semibold text-white">
          <Clock className="w-3 h-3" /> One chat, no app
        </span>
      )}
    </>
  );
}

/* Fallback gradient shown while the photo loads / if it fails */
const bannerBg: Record<BannerVariant, string> = {
  city: 'bg-[linear-gradient(120deg,#9A6BC0_0%,#7C4F9E_55%,#4E3070_100%)]',
  checklist: 'bg-[linear-gradient(120deg,#22a06b_0%,#1B7F58_60%,#155E44_100%)]',
  chat: 'bg-[linear-gradient(120deg,#5B8DEF_0%,#4A6CF7_55%,#33448F_100%)]',
};

/* Free Unsplash photography, thematically matched per post */
const bannerPhoto: Record<BannerVariant, { src: string; alt: string }> = {
  city: {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=70',
    alt: 'Two people sealing an agreement with a handshake',
  },
  checklist: {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=70',
    alt: 'Planning the week with notes and a laptop on a desk',
  },
  chat: {
    src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=70',
    alt: 'A hand holding a smartphone',
  },
};

/* Brand-tinted veil that keeps the floating elements readable */
const bannerTint: Record<BannerVariant, string> = {
  city: 'bg-[linear-gradient(120deg,rgba(63,36,92,0.82)_0%,rgba(78,48,112,0.55)_55%,rgba(78,48,112,0.3)_100%)]',
  checklist: 'bg-[linear-gradient(120deg,rgba(15,74,52,0.82)_0%,rgba(21,94,68,0.55)_55%,rgba(21,94,68,0.3)_100%)]',
  chat: 'bg-[linear-gradient(120deg,rgba(35,47,102,0.82)_0%,rgba(51,68,143,0.55)_55%,rgba(51,68,143,0.3)_100%)]',
};

export function PostBanner({
  variant, compact = false, className = '',
}: { variant: BannerVariant; compact?: boolean; className?: string }) {
  const photo = bannerPhoto[variant];
  return (
    <div className={`relative overflow-hidden ${compact ? 'rounded-2xl' : 'rounded-3xl'} ${bannerBg[variant]} ${compact ? 'aspect-[2.6/1]' : 'aspect-[2/1] sm:aspect-[2.4/1]'} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 ${bannerTint[variant]}`} aria-hidden />
      <Dots className="opacity-60" />
      <div aria-hidden>
        {variant === 'city' && <CityScene compact={compact} />}
        {variant === 'checklist' && <ChecklistScene compact={compact} />}
        {variant === 'chat' && <ChatScene compact={compact} />}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Editorial pull quote
────────────────────────────────────────────────────────────────── */
export function PullQuote({ children, attribution }: { children: React.ReactNode; attribution?: string }) {
  return (
    <figure className="relative my-10 pl-6 sm:pl-8 border-l-4 border-primary/70">
      <Quote className="absolute -left-1 -top-5 w-8 h-8 text-primary/15 fill-current" aria-hidden />
      <blockquote className="font-display font-bold text-2xl sm:text-[1.7rem] leading-snug tracking-[-0.01em] text-foreground">
        {children}
      </blockquote>
      {attribution && <figcaption className="mt-3 text-sm text-foreground/50 font-medium">{attribution}</figcaption>}
    </figure>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Success-story highlight — WhatsApp-styled customer moment
────────────────────────────────────────────────────────────────── */
export function StoryCard({
  name, where, service, quote, detail,
}: { name: string; where: string; service: string; quote: string; detail?: string }) {
  return (
    <aside className="my-10 rounded-3xl border border-border bg-card overflow-hidden shadow-[0_20px_50px_-30px_rgba(32,22,48,0.35)]">
      <div className="px-6 pt-5 pb-4 flex items-center gap-3 border-b border-border/70">
        <span className="w-11 h-11 rounded-full bg-primary/12 text-primary font-display font-bold flex items-center justify-center text-lg">
          {name[0]}
        </span>
        <span className="flex-1 min-w-0">
          <span className="flex items-center gap-1.5 font-semibold text-[15px]">
            {name}
            <BadgeCheck className="w-4 h-4 fill-[#25D366] text-white shrink-0" />
          </span>
          <span className="block text-xs text-foreground/50">{where} · {service}</span>
        </span>
        <span className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </span>
      </div>
      <div className="px-6 py-5 bg-[#EFEAE2]">
        <div className="w-fit max-w-[92%] bg-[#D9FDD3] text-zinc-900 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
          <p className="text-[14.5px] leading-relaxed">&ldquo;{quote}&rdquo;</p>
        </div>
        {detail && (
          <p className="mt-3 text-xs text-zinc-500 flex items-center gap-1.5">
            <WhatsAppIcon className="w-3 h-3" /> {detail}
          </p>
        )}
      </div>
    </aside>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Inline stat highlights
────────────────────────────────────────────────────────────────── */
export function StatStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="my-10 grid grid-cols-3 gap-2 sm:gap-3">
      {items.map((s) => (
        <div key={s.label} className="rounded-2xl border border-border bg-card px-3 py-5 sm:px-5 text-center">
          <p className="font-display font-bold text-2xl sm:text-3xl text-primary tracking-tight mb-1">{s.value}</p>
          <p className="text-[11px] sm:text-xs text-foreground/50 font-medium leading-tight">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
