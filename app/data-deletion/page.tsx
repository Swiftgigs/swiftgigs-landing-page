import type { Metadata } from 'next';
import { PageNav, PageFooter } from '@/components/page-nav';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { CheckCircle, Mail, Trash2, Clock, ShieldCheck, ListOrdered, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Deletion Instructions | Swiftgigs',
  description:
    'How to request deletion of your Swiftgigs account and personal data, including data received through Facebook, Instagram, or WhatsApp.',
  openGraph: {
    title: 'Data Deletion Instructions | Swiftgigs',
    description: 'Request deletion of your Swiftgigs account and personal data.',
    type: 'website',
    url: 'https://swiftgigs.com.ng/data-deletion',
  },
  alternates: { canonical: 'https://swiftgigs.com.ng/data-deletion' },
  robots: { index: true, follow: false },
};

const steps = [
  {
    title: 'Send a deletion request',
    body: 'Email support@swiftgigs.com.ng with the subject "Data Deletion Request", or message us on WhatsApp. Include the phone number or email address linked to your Swiftgigs account so we can find your records.',
  },
  {
    title: 'Verify your identity',
    body: 'To protect your account, we may ask you to confirm ownership, for example by replying from the registered email address or WhatsApp number.',
  },
  {
    title: 'We process your request',
    body: 'Once verified, we delete or anonymise your personal data within 30 days, and confirm by email or WhatsApp when it is complete.',
  },
];

const deleted = [
  'Profile and identity data (name, phone number, profile photo)',
  'Contact details (WhatsApp number, email, address)',
  'Location data used for worker matching',
  'Messages exchanged with Swiftgigs on WhatsApp and support channels',
  'Any information received from Facebook, Instagram, or Meta login or messaging integrations',
  'Verification documents submitted by Workers',
];

const retained = [
  'Transaction records, retained for up to 7 years to meet Nigerian financial regulations',
  'Dispute and support records where required by law, retained for up to 3 years',
  'Anonymised, non-identifiable data used for analytics',
];

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-clip">
      <PageNav />

      {/* Header */}
      <div className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(120,90,150,0.1)_1px,transparent_0)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_0%,black,transparent)]" aria-hidden />
        <div className="pointer-events-none absolute -top-32 right-[-8%] h-80 w-80 rounded-full bg-primary/[0.09] blur-3xl" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-4 py-12 md:py-20">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-5">
            Privacy & Data
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[3.2rem] font-display font-bold tracking-[-0.015em] leading-[1.08] mb-5">
            Data Deletion Instructions
          </h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            You can ask us to delete your Swiftgigs account and the personal data we hold about you at any time. This applies to data we received directly from you and through Facebook, Instagram, or WhatsApp.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-4xl mx-auto px-4 py-10 md:py-12 w-full space-y-4 sm:space-y-5">

        {/* Steps */}
        <section className="bg-card border border-border rounded-2xl p-5 sm:p-7">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <ListOrdered className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display font-bold text-xl leading-snug pt-1.5">How to Request Deletion</h2>
          </div>
          <ol className="sm:pl-14 space-y-4">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-sm">{step.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section className="bg-card border border-border rounded-2xl p-5 sm:p-7">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display font-bold text-xl leading-snug pt-1.5">Where to Send Your Request</h2>
          </div>
          <div className="sm:pl-14 grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:support@swiftgigs.com.ng?subject=Data%20Deletion%20Request"
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition group"
            >
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold group-hover:text-primary transition">support@swiftgigs.com.ng</p>
                <p className="text-xs text-muted-foreground">Subject: Data Deletion Request</p>
              </div>
            </a>
            <a
              href="/waitlist"
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition group"
            >
              <WhatsAppIcon className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold group-hover:text-primary transition">WhatsApp Support</p>
                <p className="text-xs text-muted-foreground">Fastest response time</p>
              </div>
            </a>
          </div>
        </section>

        {/* What gets deleted */}
        <section className="bg-card border border-border rounded-2xl p-5 sm:p-7">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <Trash2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display font-bold text-xl leading-snug pt-1.5">What We Delete</h2>
          </div>
          <ul className="sm:pl-14 space-y-2">
            {deleted.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="wrap-break-word min-w-0">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What is retained */}
        <section className="bg-card border border-border rounded-2xl p-5 sm:p-7">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display font-bold text-xl leading-snug pt-1.5">What We May Retain</h2>
          </div>
          <div className="sm:pl-14 space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              Some data cannot be deleted immediately because the law requires us to keep it:
            </p>
            <ul className="space-y-2">
              {retained.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span className="wrap-break-word min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-card border border-border rounded-2xl p-5 sm:p-7">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display font-bold text-xl leading-snug pt-1.5">Timeline</h2>
          </div>
          <p className="sm:pl-14 text-muted-foreground leading-relaxed">
            We complete verified deletion requests within 30 days. Deletion is permanent and cannot be undone, and you will need to sign up again to use Swiftgigs afterwards.
          </p>
        </section>

        {/* Meta note */}
        <section className="bg-card border border-border rounded-2xl p-5 sm:p-7">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display font-bold text-xl leading-snug pt-1.5">Facebook, Instagram & WhatsApp Users</h2>
          </div>
          <p className="sm:pl-14 text-muted-foreground leading-relaxed">
            If you connected to Swiftgigs through a Meta product, you can also remove Swiftgigs from your Facebook account under Settings → Apps and Websites. Removing the app stops further data sharing with us, but to have the data we already hold erased, send a deletion request using the steps above. See our{' '}
            <a href="/privacy" className="text-primary font-medium hover:underline">Privacy Policy</a>{' '}
            for more on how we handle your data.
          </p>
        </section>
      </div>

      <PageFooter />
    </div>
  );
}
