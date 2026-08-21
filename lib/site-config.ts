/* Single source of truth for contact details.

   NOTE: while pre-launch, every WhatsApp CTA on the site routes to
   /waitlist instead of wa.me. This number is kept here ready for
   launch, and is not rendered anywhere yet. Before switching CTAs
   back to WhatsApp, make sure this line is attached to the verified
   Meta business portfolio. */
export const WHATSAPP_NUMBER = '2348142736424'; // +234 814 273 6424

export const WHATSAPP_LINK =
  `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Swiftgigs`;

export const WHATSAPP_PLAIN = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SUPPORT_EMAIL = 'support@swiftgigs.com.ng';
