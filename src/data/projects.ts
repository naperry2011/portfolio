export type StatusTone = 'active' | 'cleared' | 'neutral';

export interface Status {
  label: string;
  tone: StatusTone;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  /* Signature color from the project's art: offset shadows, hover tints */
  color: string;
  /* Background of the app's store graphic, shown behind it when the card has spare height */
  artBg?: string;
  title: string;
  status: Status;
  blurb: string;
  description: string;
  meta: string;
  image: string;
  imageAlt: string;
  links: ProjectLink[];
}

const ACTIVE = (label: string): Status => ({ label, tone: 'active' });
const CLEARED = (label = 'CLEARED'): Status => ({ label, tone: 'cleared' });

/* Main quests: apps in active development. Images are the apps' store feature graphics (1024x500). */
export const apps: Project[] = [
  {
    slug: 'fuck-corpo',
    color: '#d4423b',
    artBg: '#1b1b1b',
    title: 'F*ck Corpo',
    status: ACTIVE('PRE-LAUNCH'),
    blurb:
      '"Your boss pays you to shit. Might as well track it." Started as PTO in SwiftUI, rebuilt in Flutter with 28 passing tests.',
    description:
      'Clock every dump on company time and see exactly what your boss paid for it. It started life as PTO (Paid To Operate), a SwiftUI app, and got rebuilt in Flutter, Android first, with a test suite behind it.',
    meta: 'FLUTTER / ANDROID FIRST',
    image: '/projects/fuck-corpo.png',
    imageAlt: 'F*ck Corpo feature graphic: Get paid to poop',
    links: [{ label: 'SOURCE', href: 'https://github.com/naperry2011/Fuck_Corpo_V2' }],
  },
  {
    slug: 'afterword',
    color: '#9179a6',
    artBg: '#241f33',
    title: 'Afterword',
    status: ACTIVE('IN PROGRESS'),
    blurb: 'A small, good thing to do when you finish a book. No account, nothing leaves the phone.',
    description:
      'A private, reflection-first reading journal. Finish a book, write what stuck, and turn it into a shareable recommendation card. No account and no server: everything stays on the device.',
    meta: 'FLUTTER / iOS + ANDROID',
    image: '/projects/afterword.png',
    imageAlt: 'Afterword feature graphic: a pixel lamp lighting a shelf of book spines',
    links: [{ label: 'SOURCE', href: 'https://github.com/naperry2011/Afterword' }],
  },
  {
    slug: 'tonk',
    color: '#f2c14e',
    artBg: '#0b4d33',
    title: 'Tonk',
    status: ACTIVE('V2 IN PROGRESS'),
    blurb: 'The cookout card game, in your pocket.',
    description:
      'Knock. Spread. Talk your talk. Version 2 of the cookout classic, built in Flutter for Android and iOS, with a vanilla JS version for the web.',
    meta: 'FLUTTER + WEB',
    image: '/projects/tonk.png',
    imageAlt: 'Tonk feature graphic: Knock. Spread. Talk your talk.',
    links: [
      { label: 'PLAY', href: 'https://tonk-six.vercel.app' },
      { label: 'SOURCE', href: 'https://github.com/naperry2011/tonk' },
    ],
  },
  {
    slug: 'pitty-pat',
    color: '#2a9d8f',
    artBg: '#2a9d8f',
    title: 'Pitty Pat',
    status: ACTIVE('IN PROGRESS'),
    blurb: "The classic Southern card game. There's a kiddy version too.",
    description:
      'Match the rank. Empty your hand. Win. The classic Southern card game, rebuilt for the browser and for Android, plus a kiddy version for the little ones.',
    meta: 'WEB + ANDROID',
    image: '/projects/pitty-pat.png',
    imageAlt: 'Pitty Pat feature graphic: Match the rank. Empty your hand. Win.',
    links: [
      { label: 'PLAY', href: 'https://pitty-pat-glwy.vercel.app' },
      { label: 'SOURCE', href: 'https://github.com/naperry2011/Pitty_Pat' },
    ],
  },
];

/* Side story: the anime and gaming writing project. */
export const sideStory: Project = {
  slug: 'beats-backlog',
  color: '#e3a83a',
  title: 'Beats & Backlog',
  status: ACTIVE('IN PROGRESS'),
  blurb: 'Video games, anime and music, written for people with limited hours. No hype, no scores.',
  description:
    'A writing-first corner of the internet for games, anime and music: comfort picks, nostalgia and whatever fits in the hours after the little one is asleep. No hype, no scores.',
  meta: 'TYPESCRIPT',
  image: '/projects/beats-backlog.jpg',
  imageAlt: 'Beats and Backlog homepage: Comfort, nostalgia, and limited hours',
  links: [{ label: 'READ IT', href: 'https://beats-backlog.vercel.app/' }],
};

/* Quest log: sites and client work. Images are 16:10 homepage screenshots. */
export const sites: Project[] = [
  {
    slug: 'reality-saving',
    color: '#7c5cdb',
    title: 'Reality Saving',
    status: CLEARED('CLEARED / STILL LEVELING'),
    blurb: 'Financial coaching for nonprofits, small businesses and working people',
    description:
      'A financial coaching site with separate tracks for nonprofits, growing businesses and personal finance, plus a path to book a strategy call. Live, and still being built out with the client.',
    meta: 'ASTRO / TAILWIND',
    image: '/projects/reality-saving.jpg',
    imageAlt: 'Reality Saving homepage',
    links: [{ label: 'VISIT', href: 'https://reality-saving.vercel.app/' }],
  },
  {
    slug: 'captain-diesels-dojo',
    color: '#e2262c',
    title: "Captain Diesel's Dojo",
    status: CLEARED(),
    blurb: 'Bracket tournaments for comics, anime, movies and games',
    description:
      'A tournament app for nerd debates: build a bracket of comic book characters, anime, shows or games, add competitors and run it to a winner.',
    meta: 'TYPESCRIPT',
    image: '/projects/captain-diesel.jpg',
    imageAlt: "Captain Diesel's Dojo tournament page",
    links: [{ label: 'VISIT', href: 'https://captain-diseal-tournament.vercel.app/' }],
  },
  {
    slug: 'twinkling-hearts',
    color: '#5b7a4a',
    title: 'Twinkling Hearts',
    status: CLEARED(),
    blurb: 'In-home senior care site, built in Astro',
    description:
      'The site for an in-home senior care provider serving Anderson, Indiana and the surrounding counties, with services, veteran care and a free assessment request.',
    meta: 'ASTRO',
    image: '/projects/twinkling-hearts.jpg',
    imageAlt: 'Twinkling Hearts In Home Care homepage',
    links: [{ label: 'VISIT', href: 'https://twinkling-hearts.vercel.app' }],
  },
  {
    slug: 'trainer-packages',
    color: '#c6f432',
    title: 'Trainer Website Packages',
    status: CLEARED(),
    blurb: 'Three ready-to-launch site tiers for personal trainers, each with a live demo',
    description:
      'A three-tier website offer for personal trainers. Starter is a link-in-bio home, Pro adds a class schedule, lead capture and pricing, and Elite adds online booking and payments, a client portal with progress tracking and a trainer dashboard. Every tier has a live demo.',
    meta: 'TEMPLATE / 3 TIERS',
    image: '/projects/trainer-packages.jpg',
    imageAlt: 'Trainer Website Packages page: Pick the site that fits your business',
    links: [{ label: 'VISIT', href: 'https://three-tier-template-zl4o.vercel.app/' }],
  },
  {
    slug: 'porchlight',
    color: '#f0a830',
    title: 'Porchlight',
    status: ACTIVE('IN PROGRESS'),
    blurb: 'Foster parent recruitment that keeps in touch with the "maybe someday" people',
    description:
      'Recruitment software for foster care agencies. It remembers the people who said "maybe someday," stays gently in touch for years, and welcomes them back when they are ready.',
    meta: 'TYPESCRIPT / MVP',
    image: '/projects/porchlight.jpg',
    imageAlt: 'Porchlight homepage: Every child\'s story starts with a light left on',
    links: [{ label: 'VISIT', href: 'https://foster-care-beige.vercel.app/' }],
  },
  {
    slug: 'proctor-house',
    color: '#c9a14a',
    title: 'Proctor House Rottweilers',
    status: ACTIVE('IN PROGRESS'),
    blurb: 'A breeder platform: bloodlines, litters and a puppy waitlist',
    description:
      'A platform for an Arizona Rottweiler breeder: the bloodline, the dogs, available puppies, a shop and a waitlist.',
    meta: 'TYPESCRIPT',
    image: '/projects/proctor-house.jpg',
    imageAlt: 'Proctor House Rottweilers homepage',
    links: [{ label: 'VISIT', href: 'https://proctor-house-rottweilers.vercel.app' }],
  },
  {
    slug: 'safe-screen-logistics',
    color: '#3fbfae',
    title: 'Safe Screen Logistics',
    status: { label: 'CLIENT TEMPLATE', tone: 'neutral' },
    blurb: 'Site template for a client: mobile IV therapy and wellness, with booking',
    description:
      'A site template built for a client: mobile IV hydration and blood draws, a drip menu, and a booking flow that shows the next available slots.',
    meta: 'TYPESCRIPT',
    image: '/projects/safescreen.jpg',
    imageAlt: 'Safe Screen Logistics homepage',
    links: [{ label: 'VISIT', href: 'https://safescreenlogistics-demo.vercel.app/' }],
  },
];
