# Design: UrbanEvents "Sticker-Book" Moments Carousel

## Overview
This design transforms the UrbanEvents homepage hero into an interactive, full-viewport "Moments" carousel inspired by the Maggie parenting app's playful, neo-brutalist aesthetic. The goal is to create a high-impact first impression using bold typography, vibrant pastel backgrounds, and interactive "stickers."

## Key Features

### 1. Moments Carousel
A full-viewport (100vh) slider that snaps between three distinct slides.
- **Slide 1: Hero Hook**
  - **Background**: `var(--color-mint)` (#82eda6)
  - **Typography**: Massive "BN Dime Display" text: "TURN CHAOS INTO SUCCESS WITH URBANEVENTS!"
  - **Elements**: Centered smiling face, Neo-brutalist App Store/Play Store buttons.
- **Slide 2: Visual Break**
  - **Background**: `var(--color-lavender)` (#f6bbfd)
  - **Elements**: Large-scale mascot face filling the viewport.
- **Slide 3: Sticker Mission**
  - **Background**: `var(--color-cyan)` (#aefbff)
  - **Typography**: "URBANEVENTS IS ON A MISSION TO LIGHTEN THE LOAD FOR ORGANIZERS."
  - **Stickers**: Floating stickers with handwritten notes (Ticket, QR Code, Megaphone, Analytics).

### 2. Sticker-Book Aesthetic
- **Visuals**: Stickers will have a white border and a soft drop shadow (`var(--shadow-sm)`).
- **Animations**:
  - Subtle floating (y-axis) animation for stickers.
  - Scale and rotate on hover.
  - Handwritten notes using `var(--font-script)` (Homemade Apple).

### 3. Navigation
- Sticky header remains above the carousel.
- Simple slide indicators or side arrows for manual navigation.

## Technical Architecture
- **Component**: `MomentsCarousel.astro`
- **Logic**: Simple JavaScript slider or CSS Scroll Snap (preferred for performance).
- **Assets**: Custom stickers generated as transparent PNGs.

## Success Criteria
- The homepage feels "alive" and interactive.
- The design perfectly matches the Maggie "sticker-book" visual language.
- Navigation remains intuitive.
