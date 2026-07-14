import type { Metadata, Viewport } from 'next'
import { Geist, Bricolage_Grotesque } from 'next/font/google'
import Script from 'next/script'
import { CookieConsent, ConsentAnalytics } from '@/components/cookie-consent'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] });
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#8657a2',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://swiftgigs.com.ng'),
  title: {
    default: 'Swiftgigs — On-Demand Tasks via WhatsApp | Nigeria',
    template: '%s | Swiftgigs',
  },
  description:
    'Connect with verified local workers for cleaning, errands, deliveries & more in Nigeria. No app needed — just WhatsApp. Instant. Trusted. Affordable.',
  keywords: [
    'on-demand tasks Nigeria',
    'task marketplace Lagos',
    'WhatsApp services Nigeria',
    'home services Nigeria',
    'errand runner Lagos',
    'trusted workers Abuja',
  ],
  authors: [{ name: 'Swiftgigs', url: 'https://swiftgigs.com.ng' }],
  creator: 'Swiftgigs',
  publisher: 'Swiftgigs',
  openGraph: {
    siteName: 'Swiftgigs',
    locale: 'en_NG',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Swiftgigs — On-Demand Tasks via WhatsApp' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@swiftgigs',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Swiftgigs',
  url: 'https://swiftgigs.com.ng',
  description: 'On-demand task marketplace via WhatsApp in Nigeria',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://swiftgigs.com.ng/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${bricolage.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
        <ConsentAnalytics />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  )
}
