import type { Metadata } from 'next';
import Script from 'next/script';
import { HomeClient } from '@/components/home-client';

export const metadata: Metadata = {
  title: 'Swiftgigs — Get Everyday Tasks Done via WhatsApp | Nigeria',
  description:
    'Connect with verified local workers for cleaning, errands, deliveries & more in Nigeria. No app needed — just WhatsApp. Instant. Trusted. Affordable.',
  keywords: [
    'on-demand tasks Nigeria',
    'task marketplace Lagos',
    'house cleaning Lagos',
    'errand runner Abuja',
    'WhatsApp services Nigeria',
    'home services Nigeria',
    'trusted workers Lagos',
    'gig economy Nigeria',
  ],
  authors: [{ name: 'Swiftgigs' }],
  creator: 'Swiftgigs',
  openGraph: {
    title: 'Swiftgigs — Get Everyday Tasks Done via WhatsApp',
    description:
      'Connect with verified local workers for cleaning, errands, deliveries & more in Nigeria. No app needed — just WhatsApp.',
    type: 'website',
    url: 'https://swiftgigs.com.ng',
    siteName: 'Swiftgigs',
    locale: 'en_NG',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Swiftgigs — On-Demand Tasks via WhatsApp in Nigeria' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swiftgigs — Get Things Done via WhatsApp',
    description: 'Verified workers for everyday tasks in Nigeria. No app needed.',
    site: '@swiftgigs',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://swiftgigs.com.ng' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Swiftgigs',
  description:
    'On-demand task marketplace connecting customers with verified local workers via WhatsApp in Nigeria.',
  url: 'https://swiftgigs.com.ng',
  logo: 'https://swiftgigs.com.ng/logo-icon.png',
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'On-Demand Task Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Errand Running' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'House Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Beauty Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Moving Assistance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Quick Fix Jobs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Personal Help' } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeClient />
      <Script
        id="schema-org-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
