// Shared copy used both for on-page rendering and for structured data (JSON-LD),
// so the FAQ/How-it-works text an answer engine indexes always matches what's on screen.

export const howItWorksSteps = [
  {
    title: 'Message Us on WhatsApp',
    desc: 'Tell us what you need in one chat message: an errand, a cleaner, a quick repair.',
  },
  {
    title: 'Pick a Verified Worker',
    desc: 'Choose from verified workers near you and agree the price in the chat.',
  },
  {
    title: 'It Gets Done',
    desc: 'Your payment stays in escrow until you confirm the job is done.',
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
    a: 'Swiftgigs is a WhatsApp-based platform that connects people in Nigeria with identity-verified local workers for everyday tasks like cleaning, errands, deliveries, repairs, beauty, laundry and more, no app download required.',
    link: { href: '/blog/making-help-accessible-in-nigeria', label: 'Read our story' },
  },
  {
    q: 'How does Swiftgigs work?',
    a: 'You send a WhatsApp message describing what you need. Swiftgigs shows you verified workers near you. You pick one, agree the price in the chat, and pay into escrow.',
    link: { href: '/blog/getting-started-with-swiftgigs', label: 'Read the step-by-step guide' },
  },
  {
    q: 'Do I need to download an app to use Swiftgigs?',
    a: 'No. Swiftgigs runs entirely on WhatsApp, the app most people in Nigeria already use every day. There is nothing extra to install.',
  },
  {
    q: 'Is Swiftgigs safe to use?',
    a: 'We built safety into the flow. Workers are verified against their NIN and payout bank account name, customers verify their NIN on their first job, and contact details are shared only once payment is in escrow. A meeting code and a door check confirm the right person arrives, and payments are held in escrow until you confirm the work is done. No platform can remove all risk, so always use the checks.',
  },
  {
    q: 'Which cities does Swiftgigs operate in?',
    a: 'Swiftgigs works anywhere in Nigeria where workers have signed up. We search within 50 km of you first and offer a wider search if nobody is nearby.',
  },
  {
    q: 'What services can I request on Swiftgigs?',
    a: 'There are 15 service categories, including errands, cleaning, home repairs, appliance repair, food and restaurant orders, beauty, laundry, moving and delivery, power and water, auto, tech and events.',
    link: { href: '/blog/tasks-to-delegate', label: 'See 5 tasks worth delegating' },
  },
  {
    q: 'How much does Swiftgigs cost?',
    a: 'Prices are not fixed. You negotiate and agree the final price with your service provider through Swiftgigs before the job starts. Swiftgigs takes a 10% commission, capped at ₦10,000, from the worker’s payout.',
  },
  {
    q: 'How do I become a Swiftgigs worker?',
    a: 'Join the worker waitlist on the website. When onboarding opens, you register inside WhatsApp with your name, location, service and payout bank account, and your NIN is verified before your first job.',
  },
];
