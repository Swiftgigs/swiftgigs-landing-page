'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type AnimateVariant = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'zoom-in';

const variants: Record<AnimateVariant, { hidden: string; visible: string }> = {
  'fade-up':    { hidden: 'opacity-0 translate-y-10',  visible: 'opacity-100 translate-y-0' },
  'fade-in':    { hidden: 'opacity-0',                  visible: 'opacity-100' },
  'fade-left':  { hidden: 'opacity-0 -translate-x-10', visible: 'opacity-100 translate-x-0' },
  'fade-right': { hidden: 'opacity-0 translate-x-10',  visible: 'opacity-100 translate-x-0' },
  'zoom-in':    { hidden: 'opacity-0 scale-95',         visible: 'opacity-100 scale-100' },
};

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimateVariant;
  delay?: number;
  duration?: number;
}

export function AnimateIn({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  duration = 650,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); obs.disconnect(); } },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { hidden, visible } = variants[variant];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out will-change-transform',
        show ? visible : hidden,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: show ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}
