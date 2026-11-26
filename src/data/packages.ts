export const BOOKING_URL = 'https://cal.com/cybercap2011';

export interface Package {
  tier: string;
  name: string;
  /* Card shadow and tier chip; light enough for ink text */
  color: string;
  tagline: string;
  bestFor: string;
  features: string[];
  demo: string;
  /* Shown on the card and in structured data. Leave null until the price is set; the card then says it is quoted on the call. */
  price: string | null;
}

export const packages: Package[] = [
  {
    tier: 'TIER 1',
    name: 'Starter',
    color: 'var(--sun)',
    tagline: 'Your professional home on the web.',
    bestFor: 'New trainers who need a credible link-in-bio site.',
    features: ['Landing page with your story', 'Credentials and specialties', 'Social links and feed', 'Testimonials and contact form'],
    demo: 'https://three-tier-template-ochre.vercel.app/',
    price: null,
  },
  {
    tier: 'TIER 2',
    name: 'Pro',
    color: 'var(--mint)',
    tagline: 'Turn visitors into leads.',
    bestFor: 'Established trainers building a client list.',
    features: ['Everything in Starter', 'Weekly class schedule', 'Free workout PDF download', 'Email capture, pricing and FAQ'],
    demo: 'https://three-tier-template-1f74.vercel.app/',
    price: null,
  },
  {
    tier: 'TIER 3',
    name: 'Elite',
    color: '#c6f432',
    tagline: 'Your entire coaching business, online.',
    bestFor: 'Full-time coaches with in-person and online clients.',
    features: ['Everything in Pro', 'Online booking and payments', 'Client portal with progress tracking', 'Content library and trainer dashboard'],
    demo: 'https://three-tier-template-mceq.vercel.app/',
    price: null,
  },
];

/* Feature, then the index of the lowest tier that includes it (0 Starter, 1 Pro, 2 Elite) */
export const comparison: [string, number][] = [
  ['Mobile-friendly landing page', 0],
  ['About, credentials and specialties', 0],
  ['Social media links and feed', 0],
  ['Testimonials', 0],
  ['Contact form', 0],
  ['Weekly schedule', 1],
  ['Downloadable workout (email gated)', 1],
  ['Packages and pricing', 1],
  ['FAQ', 1],
  ['Online booking calendar', 2],
  ['Online payments', 2],
  ['Client login portal', 2],
  ['Programs, workout log and progress charts', 2],
  ['Weekly check-ins', 2],
  ['Video and content library (members only)', 2],
  ['Trainer dashboard (bookings, clients, revenue)', 2],
];

export const steps: [string, string][] = [
  ['BOOK THE CALL', '15 minutes, free. We pick the package that fits where your business is right now.'],
  ['SEND YOUR STUFF', 'Your photos, your story, your colors and your programs.'],
  ['GO LIVE', 'I customize the site, you look it over, and it launches.'],
];
