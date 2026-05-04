import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://swiftgigs.com.ng'),
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8657a2' },
    { media: '(prefers-color-scheme: dark)', color: '#8B70D4' },
  ],
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
    <html lang="en" className="bg-background scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  )
}
