# Design Doc: Decluttering UrbanEvents Homepage

**Date:** 2026-04-29
**Status:** Approved
**Topic:** Reducing visual density and improving hierarchy on the homepage.

## 1. Problem Statement
The current UrbanEvents homepage (Mission/Hero section) feels "too cluttered." Multiple high-impact elements (massive headlines, large cursive sub-headings, and 5 colorful floating sticker pills) are competing for the user's attention in a single viewport, leading to reduced legibility and a chaotic user experience.

## 2. Goals
- Improve visual hierarchy: ensure the primary headline is the clear focal point.
- Reduce element density: eliminate overlapping components.
- Increase "breathing room": implement generous whitespace between distinct content blocks.
- Maintain brand identity: keep the Neo-Brutalist aesthetic while moving toward a more professional, SaaS-ready layout.

## 3. Proposed Changes

### 3.1. Spacing System
- **New Token:** `--space-huge: 160px`.
- **Implementation:** Apply `--space-huge` as the standard vertical padding for major color sections (Hero, Marquee, Origin).

### 3.2. Hero Section (Cyan)
- **Declutter:** Remove all five `floating-items` (Tickets, Analytics, Events, Workshops, Societies).
- **Scale:** Reduce the `type-heading` (cursive) font size by approximately 20-30%.
- **Layout:** Center-align the headline and sub-headline with increased vertical spacing between them.

### 3.3. New Feature Grid (Cream/White)
- **Concept:** Transition the "floating stickers" into a structured "Features at a Glance" grid.
- **Layout:** A clean 5-column grid (or 3-column with wrapping) where each "pill" is presented as a distinct sticker-card.
- **Placement:** Positioned immediately following the Hero or Marquee section to clarify the platform's value proposition.

### 3.4. Marquee & Content Sections
- **Marquee:** Increase padding to prevent text from feeling "jammed" between sections.
- **Header:** Slim down the sticky header height and logo box to preserve vertical real estate.

## 4. Success Criteria
- No overlapping text and graphics in the Mission/Hero section.
- Clearer separation between the Hero message and the specific feature pills.
- Improved readability of the cursive "Whether it's a university MUN..." text.
- A more "SaaS-premium" feel while retaining the bold UrbanEvents personality.
