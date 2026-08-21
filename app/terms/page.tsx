import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Swiftgigs',
  description:
    'Swiftgigs\' Terms & Conditions, governing the relationship between customers, workers, and the platform. Updated May 2026.',
  openGraph: {
    title: 'Terms & Conditions | Swiftgigs',
    description: 'Read our Terms & Conditions for using the Swiftgigs platform.',
    type: 'website',
    url: 'https://swiftgigs.com.ng/terms',
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/terms' },
  robots: { index: true, follow: false },
};
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { CheckCircle, Shield, CreditCard, Ban, Scale, Mail, Users, Briefcase, Lock, FileText, AlertTriangle, RefreshCw, Globe, UserCheck } from 'lucide-react';

type Section = {
  num: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body?: string;
  bullets?: string[];
  isContact?: boolean;
};

const sections: Section[] = [
  {
    num: '01', icon: FileText, title: 'Acceptance of Terms',
    body: 'By accessing or using Swiftgigs, whether through WhatsApp, this website, or any affiliated platform, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not accept these terms, you may not use our services. These terms apply to all users of the platform including customers and workers.',
  },
  {
    num: '02', icon: WhatsAppIcon, title: 'Platform Description',
    body: 'Swiftgigs is an on-demand task marketplace that connects customers ("Clients") with independent service providers ("Workers") for the completion of everyday tasks including errands, home cleaning, deliveries, beauty services, moving assistance, and personal help. Swiftgigs acts solely as a technology intermediary. We do not employ workers directly and we do not perform the services offered by workers on our platform.',
  },
  {
    num: '03', icon: UserCheck, title: 'Eligibility',
    bullets: [
      'You must be at least 18 years of age to use Swiftgigs',
      'You must provide accurate and truthful registration information',
      'You must be legally capable of entering into binding agreements',
      'Swiftgigs reserves the right to decline service to any person at its discretion',
      'Corporate entities may use the platform with proper authorization from a designated representative',
    ],
  },
  {
    num: '04', icon: Users, title: 'Customer Responsibilities',
    body: 'As a Customer using Swiftgigs, you agree to:',
    bullets: [
      'Provide accurate, complete, and detailed task descriptions before booking',
      'Ensure safe and accessible working conditions for assigned workers',
      'Make the full agreed-upon payment before or immediately upon task completion',
      'Treat workers with dignity, respect, and professionalism at all times',
      'Not request illegal, harmful, or unethical services from workers',
      'Provide all necessary materials, access, or equipment required for task completion',
    ],
  },
  {
    num: '05', icon: Briefcase, title: 'Worker Responsibilities',
    body: 'As a Worker on Swiftgigs, you agree to:',
    bullets: [
      'Complete accepted tasks professionally, punctually, and to a high standard',
      'Provide honest and accurate information about your skills, qualifications, and experience',
      'Treat all customers with professionalism and respect at all times',
      'Arrive at job locations on time with any required tools, equipment, or materials',
      'Not engage in any fraudulent, deceptive, abusive, or harmful conduct',
      'Maintain strict confidentiality regarding customer information, premises, and activities',
    ],
  },
  {
    num: '06', icon: CreditCard, title: 'Payments, Fees & Escrow',
    bullets: [
      'Payment terms and amounts are agreed between the Customer and Worker before a task begins',
      'Swiftgigs may hold customer funds in escrow until task completion is confirmed',
      'A service fee or platform commission may be deducted from worker earnings, current rates are disclosed at booking',
      'Workers receive payment after successful task completion and customer confirmation',
      'Swiftgigs reserves the right to adjust its fee structure with advance notice to users',
      'Disputed payments will be held in escrow until a resolution is formally reached',
    ],
  },
  {
    num: '07', icon: RefreshCw, title: 'Cancellation & Refund Policy',
    bullets: [
      'Either party may cancel a booked task before it formally commences',
      'Cancellations made less than 30 minutes before a scheduled start time may attract a cancellation fee',
      'Workers who cancel without valid cause may have their account flagged or temporarily suspended',
      'Refunds for pre-paid tasks will be processed within 3–5 business days of approval',
      'Swiftgigs determines refund eligibility at its reasonable discretion based on available evidence',
    ],
  },
  {
    num: '08', icon: Ban, title: 'Prohibited Conduct',
    body: 'The following activities are strictly prohibited on the Swiftgigs platform:',
    bullets: [
      'Providing false, misleading, or fraudulent information during registration or task booking',
      'Using the platform to engage in, facilitate, or promote illegal activities',
      'Harassing, threatening, or behaving inappropriately toward any user of the platform',
      'Circumventing the platform to arrange payments or future work directly outside Swiftgigs',
      'Creating multiple accounts to exploit promotions, circumvent bans, or manipulate ratings',
      'Uploading, sharing, or requesting harmful, offensive, or inappropriate content or services',
    ],
  },
  {
    num: '09', icon: Lock, title: 'Intellectual Property',
    body: 'All content on the Swiftgigs platform, including but not limited to logos, brand assets, website content, software, and trade names, is owned by or licensed to Swiftgigs and is protected under Nigerian and applicable international intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without express prior written permission from Swiftgigs.',
  },
  {
    num: '10', icon: AlertTriangle, title: 'Disclaimers & Limitation of Liability',
    body: 'Swiftgigs provides its platform strictly on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the quality, safety, timeliness, or fitness for purpose of services performed by workers. To the maximum extent permitted by Nigerian law, Swiftgigs shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. Our total liability for any claim shall not exceed the amount you paid for the specific transaction giving rise to the claim.',
  },
  {
    num: '11', icon: Shield, title: 'Indemnification',
    body: 'You agree to indemnify, defend, and hold harmless Swiftgigs, its directors, officers, employees, agents, and partners from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising from: (i) your use of the platform; (ii) your violation of these Terms; (iii) your infringement of any third-party rights; or (iv) any dispute between you and another user of the platform.',
  },
  {
    num: '12', icon: Scale, title: 'Dispute Resolution',
    bullets: [
      'We strongly encourage both parties to attempt informal resolution before escalating any dispute',
      'Disputes must be reported to Swiftgigs support within 48 hours of the relevant incident',
      'Swiftgigs will review evidence from both parties and provide a recommendation within 5 business days',
      'Unresolved disputes may be submitted to formal mediation in Lagos, Nigeria',
      'Swiftgigs\'s final administrative decision on platform-related matters is binding on all parties',
    ],
  },
  {
    num: '13', icon: Globe, title: 'Governing Law',
    body: 'These Terms & Conditions shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any legal proceedings arising from or related to these Terms shall be instituted exclusively in the courts of Lagos State, Nigeria, and both parties irrevocably submit to the personal jurisdiction of those courts.',
  },
  {
    num: '14', icon: RefreshCw, title: 'Changes to Terms',
    body: 'Swiftgigs reserves the right to update or modify these Terms at any time. Material changes will be communicated to users via our platform, website, or WhatsApp channel with reasonable advance notice. Your continued use of Swiftgigs after any modification takes effect constitutes your acceptance of the updated terms. We recommend reviewing these Terms periodically.',
  },
  {
    num: '15', icon: Mail, title: 'Contact & Support',
    body: 'For questions, concerns, or clarifications about these Terms, please reach out through any of the following channels:',
    isContact: true,
  },
];

const tldr = [
  'Swiftgigs connects customers with independent workers for on-demand tasks',
  'Workers are independent contractors, not Swiftgigs employees',
  'You must be 18 or older to use the platform',
  'Payments are secured through our escrow system',
  'Accounts can be suspended for fraud, misconduct, or abuse',
  'These terms are governed by the laws of the Federal Republic of Nigeria',
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-clip">
      <PageNav />

      {/* Header */}
      <div className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,90,150,0.1)_1px,transparent_0)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_0%,black,transparent)]" aria-hidden />
        <div className="pointer-events-none absolute -top-32 right-[-8%] h-80 w-80 rounded-full bg-primary/[0.09] blur-3xl" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-4 py-12 md:py-20">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-5">
            Legal Document
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[3.2rem] font-display font-bold tracking-[-0.015em] leading-[1.08] mb-5">Terms & Conditions</h1>
          <div className="flex flex-wrap gap-2 text-[12.5px] font-medium text-foreground/65">
            <span className="rounded-full border border-border bg-card px-3.5 py-1.5">Effective: January 2025</span>
                        <span className="rounded-full border border-border bg-card px-3.5 py-1.5">Last Updated: May 2026</span>
                        <span className="rounded-full border border-border bg-card px-3.5 py-1.5">Version 2.0</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-4xl mx-auto px-4 py-10 md:py-12 w-full">

        {/* TL;DR */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-card via-card to-secondary/55 p-6 sm:p-8 mb-10 md:mb-12 shadow-[0_28px_70px_-46px_rgba(72,42,94,0.55)]">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-5">Quick Summary</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {tldr.map((point, i) => (
              <div key={i} className="flex gap-2.5 text-sm">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4 sm:space-y-5">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.num} className="scroll-mt-24 bg-card border border-border rounded-2xl p-5 sm:p-7 transition-colors hover:border-primary/25">
                <div className="flex items-start gap-4 mb-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary/60 uppercase tracking-wider">{section.num}</span>
                    <h2 className="font-display font-bold text-xl leading-snug">{section.title}</h2>
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
                        href="/waitlist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition group"
                      >
                        <WhatsAppIcon className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-sm font-semibold group-hover:text-primary transition">WhatsApp Support</p>
                          <p className="text-xs text-muted-foreground">Fastest response time</p>
                        </div>
                      </a>
                      <a
                        href="mailto:support@swiftgigs.com.ng"
                        className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition group"
                      >
                        <Mail className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <p className="text-sm font-semibold group-hover:text-primary transition">support@swiftgigs.com.ng</p>
                          <p className="text-xs text-muted-foreground">For legal enquiries</p>
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
