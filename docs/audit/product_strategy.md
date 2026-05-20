# Product Strategy

A read of what this project is trying to be, where it sits today, and what to consider doing next. This document is opinion-shaped by the code; it is not a market analysis. Treat it as a starting point for a strategy conversation, not a prescription.

## What this project is trying to be

A personal portfolio + lead-gen surface for Nicholas Perry, positioning him as a "digital architect with defined taste." The site is the proof: visible system thinking (the title-block frame motif, strict 1.250 type scale, intentional ratios) layered with expressive motion (smooth scroll, scroll-driven hero, color-flood images, page-transition curtain) that together signal craft beyond a generic developer template.

Brand: Cyberlounge. The wordmark is serif, not the previous bracket-wrapped neon treatment. The audience seems to be founders, small businesses, and consultancies looking for an independent software + cloud engineer who can also hold a coherent visual point of view.

The primary conversion path is **Cal.com 15-minute intro call**. Secondary: outbound email + social. There is no form submission, no lead capture beyond the Cal.com booking funnel.

## Where it sits today

**Done well.**
- Strong, distinctive visual identity. Few solo-dev portfolios commit to a coherent system motif at this depth.
- Honest project lineup: three live external sites with real screenshots pulled from each domain. Visitors can click through and verify the work.
- About page tells a real professional story (helpdesk → IT → SRE) without inflating titles.
- Technical execution is current (Next.js 15.5, React 19, Tailwind 3.4, framer-motion). Vercel-hosted, fully static, fast.
- All routes prerender as static. Lighthouse should score well (not VERIFIED).

**Gaps relative to the apparent product premise.**

1. **No conversion measurement.** The site exists to drive Cal.com bookings, but there is no analytics to count clicks on the booking CTA, no UTM tagging on outbound links, no way to learn whether the redesign is actually winning more meetings than the previous version would have.
2. **No social proof.** The Projects section shows three sites Nicholas built, but no client quotes, no outcomes ("X% more bookings after launch", "shipped in 6 weeks"), no public testimonials. For a lead-gen surface, this is the highest-leverage missing element.
3. **No services / pricing surface.** A prospect reading the site has no sense of what an engagement looks like (fixed price? hourly? retainer?), what Nicholas charges, or how long projects take. This pushes friction into the intro call ("OK now what?") that the site could remove.
4. **No writing.** The blog was intentionally removed earlier in this session, but the absence shows. A senior engineer with taste typically has some kind of public artifact (essays, talks, notes) that proves the taste. Currently the only artifact is the site itself.
5. **No clear positioning niche.** "Independent software & cloud development for founders, small businesses, and consultancies" is broad. The Architect direction suggests a more specific wedge would land harder: e.g., "I rebuild SaaS marketing sites for B2B founders" or "I fix the production cloud infra that your last contractor left running."

## What to do next, in order

Caveat: this is reading product strategy out of code, which is necessarily limited. The user should weigh these against actual business signal (where are intro calls coming from? which ones convert? what are clients actually buying?).

### Horizon 1: ship what is there (1-2 weeks)

1. **Push current main to Vercel and validate the deploy.** This is one git push away.
2. **Add `public/og-cover.jpg`.** Closes BUG-003. A wordmark + tagline on the new light background, 1200x630. 30 minutes in Figma or Canva.
3. **Add Vercel Analytics or Plausible.** One-line install. The first signal you want is: how many visitors and where do they come from. Without this you are flying blind on whether the redesign is doing anything.
4. **Add UTM parameters to the Cal.com link.** `?utm_source=portfolio&utm_medium=cta&utm_campaign=intro_call`. Lets you measure how many bookings the site actually drives.

### Horizon 2: tighten the funnel (2-6 weeks)

1. **Add one or two short client testimonials** to the Projects page or a new Praise section. Even unattributed pull-quotes from real conversations help. If you've helped someone, ask them for two sentences.
2. **Add a Services or Engagement page.** Three engagement shapes ("audit + report", "build a thing in 6 weeks", "ongoing fractional engineering") with rough scope, what's included, and what to expect. Removes the pre-call friction.
3. **Add 2-3 sentences of outcome data to each project entry on `/projects`.** "Built in 4 weeks. Live since March 2025. Visitors can now book classes in 30 seconds vs 5 minutes on the previous site." If the data isn't great, leave this out; if it is, this is the strongest social proof you have.
4. **Decide on positioning.** "Software + cloud" is two markets. Pick one and lean. The Architect framing already implies you favor depth over breadth; the copy should match.

### Horizon 3: build a moat (3-6 months)

1. **Start writing again.** One short piece a month. Not a blog with 50 categories, just an `/essays` or `/notes` route with five honest pieces. Format: MDX in `src/app/essays/[slug]/page.tsx`, no CMS. Topics: things you learned at PNC, opinions about specific tech choices, build-in-public progress on a side project.
2. **Build something in public.** A small open-source tool, a public dashboard, a CLI - anything where prospects can see your code and judgment without an NDA. This is the closest a developer can come to "show, don't tell" credentials.
3. **Convert the Projects page into real case studies.** Not the current short descriptions, but 800-1500 word pieces with problem statement, constraints, decision tree, what shipped, what would change next time. One a quarter is enough.

## Future enhancements / strategic angles

Honest about the limits of this section. These are options, not recommendations.

- **B2B revenue path: productized services.** "GoHighLevel CRM Development" is already a skill listed; that's a specific niche with paying buyers. Could become a primary wedge if the demand signal is there.
- **B2B revenue path: incident-response retainers.** A senior SRE with cloud + product experience is rare. A "break-glass" retainer ($X/mo, includes Y hours of incident response, debug, or quick-fix work) targets companies who don't have an in-house SRE. The site doesn't currently sell this.
- **Defensive moat: code that does something visible.** A small interactive tool on the site itself, e.g., a "what's wrong with your `next.config.ts`" linter that runs in the browser, would establish technical credibility in a way no portfolio text can.
- **Distribution: speak somewhere.** A short talk at a local meetup or a virtual cloud-native conference, with a recording embedded on the site. Even one talk is more than 95% of solo developer sites have.

## Questions for Nicholas

Things I'd want to know to sharpen the strategy:

1. How many intro calls did the previous (cyberpunk) version drive in the last 6 months? What's the baseline?
2. Where do current intro calls come from (LinkedIn outreach? Referrals? Inbound from the site?)?
3. Of the three live projects, which one are you most proud of and which one drove the most subsequent work?
4. Is "Cyberlounge" the brand going forward, or is it a placeholder for an eventual personal brand under "Nicholas Perry"?
5. Is the goal to fill a freelance pipeline, find a single anchor client, or build toward a productized service? Each implies a different site shape.

---
generated_by: codebase-audit skill v1.0
generated_on: 2026-05-19
project: C:/Users/Perry/Dropbox/PC/Documents/GitHub/portfolio
project_type: node
verification: full
---
