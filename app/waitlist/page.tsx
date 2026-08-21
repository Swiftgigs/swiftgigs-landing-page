import type { Metadata } from 'next';
import { WaitlistClient } from '@/components/waitlist-client';

export const metadata: Metadata = {
  title: 'Worker Waitlist | Earn With Your Skills on Swiftgigs',
  description:
    'Swiftgigs worker onboarding is opening across Nigeria. Join the waitlist with your email or WhatsApp number and be first to earn from flexible, escrow-protected jobs near you.',
  openGraph: {
    title: 'Swiftgigs Worker Waitlist',
    description:
      'Be first in line to earn from flexible, escrow-protected jobs on WhatsApp.',
    type: 'website',
    url: 'https://swiftgigs.com.ng/waitlist',
  },
  twitter: {
    title: 'Swiftgigs Worker Waitlist',
    description: 'Be first in line to earn with your skills on Swiftgigs.',
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/waitlist' },
};

export default function WaitlistPage() {
  return <WaitlistClient />;
}
