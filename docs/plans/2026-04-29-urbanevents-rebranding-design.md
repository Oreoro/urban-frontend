# UrbanEvents SaaS Rebranding Design Doc

**Goal**: Transform the Maggie parenting app landing page into a SaaS landing page for `urbanevents.pk`, targeting small organizers, students, and workshop hosts in Pakistan.

**Top Constraint**: "Text only" — No changes to design tokens (colors, fonts, spacing) or core layout structure beyond removing the Stats section.

**Success Criteria**:
- All "Maggie" branding replaced with "UrbanEvents".
- Copy reflects a SaaS value proposition for events.
- Links point to `app.urbanevents.pk`.
- No horizontal scroll or layout breakage.

---

## 1. Copy Architecture

### 1.1 Hero Section
- **Eyebrow**: BUILT FOR SMALL TEAMS WITH BIG IDEAS
- **Headline**: PROFESSIONAL EVENTS, ZERO HEADACHE.
- **Subhead**: The easiest ticketing and check-in platform for student societies, MUNs, and workshop organizers.

### 1.2 Marquee Section
- **Text**: UNIS • MUNS • WORKSHOPS • CONCERTS • SOCIETIES • SMALL CORPORATE • SMALL TEAMS •
- **Tag**: Free for free events!

### 1.3 Features Section
- **Heading**: EVERYTHING YOU NEED TO LAUNCH
- **Card 1 (Ticketing)**: **Launch in Minutes**. Set up your event page and start selling tickets before your next class starts.
- **Card 2 (Check-in)**: **Easy QR Scanning**. Turn any smartphone into a professional scanner. No more manual lists or long queues.
- **Card 3 (Local Payments)**: **Paid or Free**. Collect payments via JazzCash and Easypaisa, or host free events with zero platform fees.

### 1.4 Mission Section
- **Heading**: PLANNING SHOULDN'T BE A SECOND JOB
- **Sub**: Whether it's a university MUN or your first paid workshop, UrbanEvents gives you the tools of a professional organizer without the professional price tag.

### 1.5 Origin Section
- **Headline**: THE TOOL WE WISHED WE HAD
- **Sub**: We built UrbanEvents because we were tired of spreadsheets and manual lists. It’s time for Pakistani student leaders and creators to have a platform that just works.

### 1.6 Final CTA
- **Heading**: READY TO SELL OUT?
- **Button**: Get Started for Free

---

## 2. Technical Updates

### 2.1 Navigation & Global State
- **Site Name**: UrbanEvents
- **Primary Domain**: `urbanevents.pk`
- **App URL**: `https://app.urbanevents.pk`
- **Links**: `Features`, `About`, `Pricing`, `Contact`.

### 2.2 Section Removal
- **Stats Section**: To be removed from `src/pages/index.astro`.

---

## 3. Implementation Batching
1. **Metadata & Nav**: Update global site config.
2. **Page Content**: Update all text sections in `index.astro`.
3. **Cleanup**: Remove Stats section and verify layout.
