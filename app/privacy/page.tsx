import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';

export const metadata: Metadata = {
  title: 'Privacy Policy | Swiftgigs',
  description:
    'How Swiftgigs collects, uses, and protects your personal data. NDPR-compliant privacy practices for our Nigerian user base.',
  openGraph: {
    title: 'Privacy Policy | Swiftgigs',
    description: 'Our NDPR-compliant privacy policy explaining how we handle your data.',
    type: 'website',
    url: 'https://swiftgigs.com.ng/privacy',
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/privacy' },
  robots: { index: true, follow: false },
};
import type { LucideIcon } from 'lucide-react';
import {
  CheckCircle, Shield, Database, Share2, Lock, Clock, UserCheck,
  Cookie, Smartphone, ExternalLink, Baby, Globe, RefreshCw, Mail, MessageCircle,
} from 'lucide-react';

type Section = {
  num: string;
  icon: LucideIcon;
  title: string;
  body?: string;
  bullets?: string[];
  isContact?: boolean;
};

const sections: Section[] = [
  {
    num: '01', icon: Shield, title: 'About This Policy',
    body: 'This Privacy Policy explains how Swiftgigs ("we", "us", or "our") collects, uses, stores, and protects your personal information when you use our platform. We are committed to compliance with the Nigeria Data Protection Regulation (NDPR) 2019 and applicable international privacy standards. By using Swiftgigs, you consent to the practices described in this policy.',
  },
  {
    num: '02', icon: Database, title: 'Information We Collect',
    body: 'We collect information necessary to provide and improve our services:',
    bullets: [
      'Identity data: Full name, phone number, and profile photo',
      'Contact data: WhatsApp number, email address, and physical address',
      'Location data: Approximate or precise location for worker-matching purposes',
      'Transaction data: Payment amounts, task details, and transaction history',
      'Communication data: Messages exchanged through our WhatsApp platform or support channels',
      'Device data: IP address, browser type, device identifiers, and app usage data',
      'Verification data: Government-issued ID and background check documents (Workers only)',
    ],
  },
  {
    num: '03', icon: Smartphone, title: 'WhatsApp Data Handling',
    body: 'Swiftgigs operates primarily through WhatsApp. When you interact with us via WhatsApp:',
    bullets: [
      'Your phone number and display name are shared with us by WhatsApp',
      'Messages you send are stored on our systems to fulfill and track task requests',
      'We do not have access to your WhatsApp message history outside of our conversation',
      'WhatsApp\'s own Privacy Policy also applies to your use of the app',
      'We recommend reviewing Meta\'s data practices at whatsapp.com/legal/privacy-policy',
    ],
  },
  {
    num: '04', icon: CheckCircle, title: 'How We Use Your Data',
    bullets: [
      'To match customers with suitable verified workers for requested tasks',
      'To communicate task updates, confirmations, and support messages',
      'To process payments and maintain accurate transaction records',
      'To prevent fraud, resolve disputes, and maintain platform safety',
      'To improve our services through usage analysis and feedback',
      'To send important platform updates, policy changes, or service announcements',
      'To comply with legal obligations under Nigerian law',
    ],
  },
  {
    num: '05', icon: Share2, title: 'Data Sharing & Disclosure',
    bullets: [
      'Worker contact details are shared with the assigned Customer solely to fulfill a booked task',
      'Customer location or contact details are shared with Workers only as needed for task completion',
      'We do not sell, rent, or trade your personal data to any third party',
      'Data may be shared with trusted payment processors and technical service providers under strict confidentiality',
      'We may disclose data where required by Nigerian law, court order, or lawful regulatory request',
      'In the event of a merger or acquisition, data may transfer to the successor entity',
    ],
  },
  {
    num: '06', icon: Lock, title: 'Data Security',
    body: 'We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. These include encrypted data storage, access controls, and regular security reviews. However, no system is completely secure — you are responsible for safeguarding your WhatsApp account and any credentials associated with the platform.',
  },
  {
    num: '07', icon: Clock, title: 'Data Retention',
    bullets: [
      'Account and profile data is retained for as long as your account is active',
      'Transaction records are retained for a minimum of 7 years to comply with Nigerian financial regulations',
      'Support communications and dispute records are retained for 3 years',
      'Upon account deletion, personal data is anonymised or deleted within 30 days unless retention is legally required',
      'Aggregated, non-identifiable data may be retained indefinitely for analytical purposes',
    ],
  },
  {
    num: '08', icon: UserCheck, title: 'Your Rights Under the NDPR',
    body: 'Under the Nigeria Data Protection Regulation (NDPR), you have the following rights:',
    bullets: [
      'Right of Access: Request a copy of the personal data we hold about you',
      'Right to Rectification: Request correction of inaccurate or incomplete data',
      'Right to Erasure: Request deletion of your personal data where no legal basis exists for retention',
      'Right to Restriction: Request that we limit how we process your data in certain circumstances',
      'Right to Object: Object to processing of your data for direct marketing or other purposes',
      'Right to Portability: Receive your data in a structured, commonly used format',
      'To exercise any of these rights, contact us via WhatsApp or email (see Section 14)',
    ],
  },
  {
    num: '09', icon: Cookie, title: 'Cookies & Tracking Technologies',
    body: 'Our website uses cookies and similar tracking technologies to enhance user experience and analyse traffic. Types of cookies we use include:',
    bullets: [
      'Essential cookies: Required for the website to function correctly',
      'Analytics cookies: Help us understand how visitors use our site (e.g. Google Analytics)',
      'Preference cookies: Remember your settings and preferences across visits',
      'You can control or disable cookies through your browser settings at any time',
      'Disabling cookies may affect some features of our website',
    ],
  },
  {
    num: '10', icon: ExternalLink, title: 'Third-Party Links & Services',
    body: 'Our platform may contain links to third-party websites or services (such as payment providers). We are not responsible for the privacy practices or content of those third parties. We encourage you to read their privacy policies before sharing any personal information with them.',
  },
  {
    num: '11', icon: Baby, title: "Children's Privacy",
    body: 'Swiftgigs is not intended for use by anyone under 18 years of age. We do not knowingly collect personal data from children. If you believe a child has provided us with personal information without parental consent, please contact us immediately and we will take steps to delete that data.',
  },
  {
    num: '12', icon: Globe, title: 'International Data Transfers',
    body: 'Your data may be processed or stored on servers located outside Nigeria, including servers operated by international service providers (such as cloud infrastructure providers). Where such transfers occur, we ensure appropriate safeguards are in place consistent with the NDPR and applicable data protection standards.',
  },
  {
    num: '13', icon: RefreshCw, title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. When we make material changes, we will notify users through our platform or WhatsApp channel with reasonable advance notice. Your continued use of Swiftgigs following any update constitutes your acceptance of the revised policy.',
  },
  {
    num: '14', icon: Mail, title: 'Contact & Data Requests',
    body: 'For privacy-related enquiries, data access requests, or concerns about how we handle your information, please contact us:',
    isContact: true,
  },
];

const highlights = [
  'We never sell your personal data to third parties',
  'We comply with the Nigeria Data Protection Regulation (NDPR)',
  'Your data is only shared with workers/customers to complete booked tasks',
  'You can request deletion of your account and data at any time',
  'Payments are handled through a secure escrow process',
  'You can exercise your data rights by contacting us directly',
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <PageNav />

      {/* Header */}
      <div className="border-b border-border/50 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-5 uppercase tracking-wider">
            Privacy & Data
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Privacy Policy</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
            <span>Effective: January 2025</span>
            <span className="hidden sm:inline">·</span>
            <span>Last Updated: May 2026</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Compliant with the{' '}
            <span className="text-primary font-medium">Nigeria Data Protection Regulation (NDPR) 2019</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-4xl mx-auto px-4 py-10 md:py-12 w-full">

        {/* Key highlights */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10 md:mb-12">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Our Commitment to You</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {highlights.map((point, i) => (
              <div key={i} className="flex gap-2.5 text-sm">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.num} className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary/60 uppercase tracking-wider">{section.num}</span>
                    <h2 className="text-xl font-bold leading-snug">{section.title}</h2>
                  </div>
                </div>
                <div className="pl-0 sm:pl-14 mt-3 space-y-3">
                  {section.body && (
                    <p className="text-muted-foreground leading-relaxed wrap-break-word">{section.body}</p>
                  )}
                  {section.bullets && (
                    <ul className="space-y-2">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="text-primary mt-1 shrink-0">•</span>
                          <span className="wrap-break-word min-w-0">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.isContact && (
                    <div className="grid sm:grid-cols-2 gap-4 pt-1">
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition group"
                      >
                        <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-sm font-semibold group-hover:text-primary transition">WhatsApp Support</p>
                          <p className="text-xs text-muted-foreground">Fastest response time</p>
                        </div>
                      </a>
                      <a
                        href="mailto:privacy@swiftgigs.com"
                        className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition group"
                      >
                        <Mail className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-sm font-semibold group-hover:text-primary transition">support@swiftgigs.com</p>
                          <p className="text-xs text-muted-foreground">Data protection enquiries</p>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
