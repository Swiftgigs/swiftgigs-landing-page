// Shared copy used both for on-page rendering and for structured data (JSON-LD),
// so the FAQ/How-it-works text an answer engine indexes always matches what's on screen.

export const howItWorksSteps = [
  {
    title: 'Message Us on WhatsApp',
    desc: 'Tell us what you need in one chat message: an errand, a cleaner, a quick repair.',
  },
  {
    title: 'Get Matched in Minutes',
    desc: 'We connect you with a vetted, nearby worker who is ready to help, usually within minutes.',
  },
  {
    title: 'It Gets Done',
    desc: 'Your task gets handled professionally. You only pay once you’re satisfied.',
  },
];

export type Faq = {
  q: string;
  a: string;
  /** Optional related article — rendered as a link in the FAQ accordion. */
  link?: { href: string; label: string };
};

export const faqs: Faq[] = [
  {
    q: 'What is Swiftgigs?',
    a: 'Swiftgigs is a WhatsApp-based platform that connects people in Nigeria with vetted local workers for everyday tasks like cleaning, errands, deliveries, and small repairs, no app download required.',
    link: { href: '/blog/making-help-accessible-in-nigeria', label: 'Read our story' },
  },
  {
    q: 'How does Swiftgigs work?',
    a: 'You send a WhatsApp message describing what you need. Swiftgigs matches you with a nearby verified worker, usually within minutes, and you confirm the job right there in the chat.',
    link: { href: '/blog/getting-started-with-swiftgigs', label: 'Read the step-by-step guide' },
  },
  {
    q: 'Do I need to download an app to use Swiftgigs?',
    a: 'No. Swiftgigs runs entirely on WhatsApp, the app most people in Nigeria already use every day. There is nothing extra to install.',
  },
  {
    q: 'Is Swiftgigs safe to use?',
    a: 'Yes. Every worker is screened and verified before they can accept jobs, and payments are held through an escrow intermediary until you confirm the work is done.',
  },
  {
    q: 'Which cities does Swiftgigs operate in?',
    a: 'Swiftgigs operates nationwide across Nigeria. Wherever you are, we match you with vetted workers near your location.',
  },
  {
    q: 'What services can I request on Swiftgigs?',
    a: 'You can request errand running, house cleaning, beauty services, moving assistance, quick fix repair jobs, and general personal help.',
    link: { href: '/blog/tasks-to-delegate', label: 'See 5 tasks worth delegating' },
  },
  {
    q: 'How much does Swiftgigs cost?',
    a: 'Jobs start from as low as ₦1,000. Prices are not fixed. You negotiate and agree the final price with your service provider through Swiftgigs before the job starts, with no hidden fees.',
  },
  {
    q: 'How do I become a Swiftgigs worker?',
    a: 'Tap “Become a Worker” on the Swiftgigs website, or message us directly on WhatsApp to start verification and begin accepting jobs in your area.',
  },
];
