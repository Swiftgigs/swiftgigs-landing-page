/* Single source of truth for contact details.

   NOTE: while pre-launch, the marketing WhatsApp CTAs still route to
   /waitlist. The number is shown on support/contact surfaces (footers,
   legal pages, structured data). Before switching the CTAs to wa.me,
   make sure this line is attached to the verified Meta business
   portfolio. */
export const WHATSAPP_NUMBER = '2348142736424'; // +234 814 273 6424

export const WHATSAPP_LINK =
  `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Swiftgigs`;

export const WHATSAPP_DISPLAY = '+234 814 273 6424';

export const WHATSAPP_PLAIN = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SUPPORT_EMAIL = 'support@swiftgigs.com.ng';
