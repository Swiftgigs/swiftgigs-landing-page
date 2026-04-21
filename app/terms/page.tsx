'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          <p className="text-muted-foreground mt-2">Effective Date: January 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-invert max-w-none space-y-8 text-foreground">
          
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Swiftgigs is a platform that connects customers with independent service providers (&ldquo;Workers&rdquo;) for the completion of on-demand tasks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Nature of Service</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Swiftgigs acts only as an intermediary</li>
              <li>Workers are independent contractors, not employees</li>
              <li>Swiftgigs does not directly perform tasks</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            
            <h3 className="text-xl font-semibold mb-2 mt-4">Customers:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
              <li>Provide accurate task details</li>
              <li>Ensure safe working conditions</li>
              <li>Make agreed payments</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Workers:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Complete tasks professionally</li>
              <li>Act honestly and respectfully</li>
              <li>Deliver agreed services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Payments</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Payments are agreed between customer and worker</li>
              <li>Swiftgigs may facilitate payment processes but does not guarantee transactions unless explicitly stated</li>
              <li>Service fees or commissions may apply</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Cancellations</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Either party may cancel before task commencement</li>
              <li>Late cancellations may attract penalties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Liability</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Swiftgigs is not liable for damages, losses, or disputes arising from task execution</li>
              <li>Users engage at their own risk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Dispute Resolution</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Swiftgigs may assist in resolving disputes</li>
              <li>Final decisions may not be binding</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Account Suspension</h2>
            <p className="text-muted-foreground mb-2">
              Swiftgigs reserves the right to suspend users for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Fraudulent activity</li>
              <li>Misconduct</li>
              <li>Abuse of the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may update these terms at any time. Continued use of the platform constitutes acceptance of updated terms.
            </p>
          </section>

          <div className="bg-secondary rounded-lg p-6 border border-border mt-8">
            <p className="text-sm text-muted-foreground">
              If you have any questions about these terms, please contact us via WhatsApp at our support number.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
