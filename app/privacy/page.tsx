'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Effective Date: January 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-invert max-w-none space-y-8 text-foreground">
          
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              To provide our services, we collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Name</li>
              <li>Phone number</li>
              <li>Location</li>
              <li>Messages sent through the platform</li>
              <li>Profile information and preferences</li>
              <li>Payment and transaction data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To connect customers with workers</li>
              <li>To improve service quality</li>
              <li>To provide customer support</li>
              <li>To process payments and transactions</li>
              <li>To prevent fraud and maintain platform safety</li>
              <li>To send updates and notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Data Sharing</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Shared only with relevant workers/customers for task fulfillment</li>
              <li>Not sold to third parties</li>
              <li>May be shared with payment processors and service providers</li>
              <li>Only shared as required by law or legal process</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We take reasonable steps to protect user data using industry-standard security measures. However, we cannot guarantee absolute security. Users are responsible for maintaining the confidentiality of their account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. User Rights</h2>
            <p className="text-muted-foreground mb-4">
              Users can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Request data deletion</li>
              <li>Update their personal information</li>
              <li>Opt-out of promotional communications</li>
              <li>Request a copy of their data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              We use cookies and similar technologies to improve user experience, analyze usage patterns, and remember preferences. You can control cookie settings through your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our platform may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before sharing information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground">
              Swiftgigs is not intended for users under 18 years of age. We do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this policy periodically. Changes will be effective when posted on the platform. Your continued use constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For privacy concerns or data requests:
            </p>
            <div className="bg-secondary rounded-lg p-4 border border-border">
              <p className="text-sm">
                <strong>WhatsApp Support:</strong> Contact us via WhatsApp for immediate assistance
              </p>
              <p className="text-sm mt-2">
                <strong>Email Support:</strong> Check our website for support email address
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
