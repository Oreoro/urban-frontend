# Maggie — Comprehensive Design System & UI/UX Documentation

> A playful, parent-focused mobile app landing page promoting *Maggie*, a pocket guide for surviving parenthood. This document details the unified visual language, design tokens (CSS variables), components, layout rules, typography, color palettes, interactive states, and component APIs applied across the Astro project.

---

## 1. Brand Overview

**Product:** Maggie — a mobile app that helps parents discover free, local, sanity-saving activities for toddlers and kids.

**Positioning:** *"Your pocket guide to surviving parenthood, one activity at a time."*

**Brand Personality:**
- Warm, witty, self-aware
- Playful and colorful (sticker-book energy)
- Empathetic toward overwhelmed parents
- Australian, community-driven

**Tone of Voice:**
- Conversational, reassuring, humorous
- Relatable micro-jokes ("faster than your toddler can empty the Tupperware drawer")
- Celebrates imperfection ("Parenting should feel lighter")

---

## 2. Design Tokens: Color System

A soft, high-saturation pastel palette evoking childhood crayons, play mats, and sticker books. Colors are implemented globally via CSS variables mapped to `:root`.

### 2.1 Core Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-ink` | `#03594D` | Primary text, heavy borders, button backgrounds, shadows |
| `--color-ink-soft` | `rgba(3,89,77,0.55)` | Secondary text, body paragraphs |
| `--color-ink-faint` | `rgba(3,89,77,0.15)` | Borders, light dividers |
| `--color-mint` | `#82EDA6` | Hero background, brand anchor, primary sections |
| `--color-lavender` | `#F6BBFD` | Scrollers, secondary accents |
| `--color-pink` | `#FFD5E0` | Feature cards, quote blocks |
| `--color-yellow` | `#FFD93D` | Benefit/marquee blocks, prominent CTAs |
| `--color-peach` | `#FDC068` | Origin section backgrounds, warm accents |
| `--color-coral` | `#FF8A65` | High-contrast accents |
| `--color-cyan` | `#C8F8FF` | Mission section, mascot backdrop |
| `--color-cream` | `#FFF9ED` | Neutral base, body backgrounds, secondary sections |
| `--color-white` | `#FFFDF8` | Card backgrounds, pill buttons |
| `--color-line` | `rgba(3,89,77,0.10)` | Very subtle dividers |

### 2.2 Semantic & State Colors
- **Text:** Primarily `--color-ink` for maximum contrast on pastels.
- **Hover States:** Button backgrounds shift brightness slightly or shadows reduce depth to simulate pressing.
- **Focus Rings:** `outline: 3px solid var(--color-coral); outline-offset: 2px;`

---

## 3. Design Tokens: Typography

The site uses a **three-tier type system**.

### 3.1 Font Families
| Token | Font Family | Role |
|---|---|---|
| `--font-display` | `"BN Dime Display Regular", "Bungee", sans-serif` | Massive H1s, H2s, Marquees (Chunky, ALL CAPS) |
| `--font-strong` | `"Archivo", sans-serif` | Small caps, buttons, tags, labels, subheadings |
| `--font-body` | `"Inter", "Nunito", sans-serif` | Paragraphs, standard reading text |
| `--font-script` | `"Caveat", cursive` | Handwritten emotional beats ("you're welcome!") |

### 3.2 Typographic Scale (Responsive Clamps)
- **Massive Display:** `clamp(50px, 10vw, 130px)` (Line-height `0.9`)
- **H1 / Hero:** `clamp(42px, 8vw, 80px)` (Line-height `0.95`)
- **H2 / Section:** `clamp(36px, 6vw, 72px)` (Line-height `0.95`)
- **H3 / Card:** `clamp(24px, 3vw, 40px)` (Line-height `1`)
- **Body Large:** `clamp(18px, 2.5vw, 24px)` (Line-height `1.5`)
- **Body Default:** `16px` (Line-height `1.5`)
- **Micro / Label:** `13px` / `14px` (Letter-spacing `0.04em`, UPPERCASE)

---

## 4. Design Tokens: Spacing, Radius, and Shadows

### 4.1 Spacing (Padding/Margins)
| Token | Value | Usage |
|---|---|---|
| `--space-xs` | `8px` | Gap within small elements |
| `--space-sm` | `16px` | Standard element gap |
| `--space-md` | `24px` | Standard section padding (mobile) |
| `--space-lg` | `48px` | Section padding (tablet/desktop) |
| `--space-xl` | `80px` | Large section padding |
| `--space-2xl` | `100px - 120px` | Massive hero/story block padding |

### 4.2 Border Radius
| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `12px` | Inputs, small UI chips |
| `--radius-lg` | `24px` | Feature Cards, FAQ items |
| `--radius-xl` | `32px` | Main section cards, phone mockups |
| `--radius-full` | `999px` | Pill buttons, chips, nav links |

### 4.3 Depth & Shadows (Neo-Brutalism)
We use hard, un-blurred drop shadows to give elements a physical, "sticker" feel.
| Token | Value | Description |
|---|---|---|
| `--shadow-xs` | `0 2px 0 var(--color-ink)` | Active/pressed state |
| `--shadow-sm` | `0 4px 0 var(--color-ink)` | Hover state |
| `--shadow` | `0 6px 0 var(--color-ink)` | Default resting state for cards and buttons |

---

## 5. Responsive Grid & Breakpoints

- **Mobile First:** Default styles target `< 768px`.
- **Tablet (`>= 768px`):** `grid-template-columns: repeat(2, 1fr)` for features. Max-width containers constrain text.
- **Desktop (`>= 1024px`):** Max width caps out at `1200px` for ultra-wide displays. Multi-column layouts utilize `auto-fit` or explicit `1fr` columns.

---

## 6. Component APIs (Astro)

Standardized components to be used across the `.astro` pages.

### `<Button>` (or `.pill-button` / `.nav-link`)
- **Variants:**
  - `primary`: Filled `--color-ink`, text `--color-white`.
  - `secondary`: Filled `--color-white` with `--color-ink` border.
  - `accent-pink`, `accent-mint`, `accent-yellow`: Filled pastels for visual grouping.
- **Interactive States:**
  - `Hover`: `transform: translateY(-2px)`, `box-shadow` changes to `--shadow-sm` or `--shadow`.
  - `Active`: `transform: translateY(2px)`, `box-shadow` becomes `--shadow-xs`.

### `<Hero>`
- **Props:** `title` (String), `eyebrow` (String), `theme` (e.g., 'mint', 'peach').
- **Structure:** Center-aligned, massive display type, accompanied by floating device mockups (`.phones`).

### `<Card>` / Feature Block
- **Usage:** Contains content within a rounded box (`--radius-lg`), hard shadow, thick border (`3px solid var(--color-ink)`).
- **Themes:** Can dynamically apply background pastels.

### Forms & Inputs
- **Inputs/Textareas:** `border: 3px solid var(--color-ink)`, `border-radius: var(--radius-lg)`, `padding: 16px 20px`.
- **Focus:** Applies `--shadow-xs` and subtle Y translation to feel tactile.

---

## 7. Imagery & Animation Guidelines

- **Photography:** Candid, bright, diverse family scenes. Real moments (mess, play).
- **Sticker Cut-outs:** Placed inside typography or floating as `.float-item` decorations. Must have `aria-hidden="true"`.
- **Motion:**
  - `Scroll reveals`: Elements translate up and fade in.
  - `Hover/Press`: Buttons must physically depress (hard shadow reduction + translateY).
  - Respect `prefers-reduced-motion: reduce`.

---

## 8. Voice & Copy Patterns
- **Headlines:** Punchy, lightly hyperbolic.
- **Subheads:** Script-font reassurance.
- **Numbers:** Spelled for impact (e.g. *"MORE THAN 5000"*).

## 9. Do / Don't
**Do:** Keep one pastel per section, use the script font for emotional beats, ensure 44x44px minimum tap targets.
**Don't:** Mix more than two display weights per section, use pastels for CTAs (use ink, white, or yellow for contrast), place dark photography on dark backgrounds.
