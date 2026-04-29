# Design Document: UI/UX Revamp & Refinement

Date: 2026-04-29
Topic: UI/UX Refinement and Feature Completion

## Overview
This design aims to address the UI/UX issues identified during the local review of the UrbanEvents application. The focus is on finishing incomplete sections, improving accessibility, and fixing layout artifacts while maintaining the bold neo-brutalist brand identity.

## Goals
- Complete the homepage "Moments" carousel with impactful content.
- Fix layout overlaps where decorative stickers interfere with readable text.
- Improve accessibility through better color contrast.
- Ensure all pages (including FAQs) are discoverable and visually consistent.

## Design Details

### 1. Global Styles & Accessibility
- **Contrast:** Increase the opacity of `var(--ink-soft)` (used for body text/FAQs) from 0.55 to 0.85 to meet accessibility standards.
- **Typography:** Standardize `letter-spacing` on `type-large-title` to ensure readability on Feature heroes.
- **Layering:** Enforce a `z-index` hierarchy where content containers (`.subpage-inner`, `.container-inner`) always sit at `z-index: 10` or higher, while `.floating-items` sit at `z-index: 1`.

### 2. Homepage: Moments Carousel
- **Slide 2 (Face Moment):** Add a large heading "BUILT FOR ORGANIZERS" and a "Start Selling" button.
- **Navigation:** Increase bottom padding on carousel slides to ensure navigation dots do not overlap with CTA buttons.
- **Transitions:** Ensure smooth snapping and clear visibility of navigation arrows.

### 3. Navigation & Footer
- **FAQ Discovery:** Add a "FAQS" link to the `Footer.astro` legal/policies row.
- **Footer CTA:** Update the "Get Started for Free" button to use dark ink background with white text for maximum "pop" against the yellow footer background.
- **Header:** Maintain the current balanced structure (no changes to header links).

### 4. Page-Specific Improvements
- **Pricing & Features:** Push floating stickers further toward the viewport edges to avoid overlapping text on smaller desktop screens.
- **FAQs Page:** Update the hero section to match the style of Pricing/Features (Eyebrow + Large Heading).

## Artifacts & Designing Decisions
- **Custom Cursor:** Retain the custom SVG cursor as a signature brand element.
- **Sticker Book Aesthetic:** Maintain the playful "sticker" look but prioritize text readability through better positioning and layering.
