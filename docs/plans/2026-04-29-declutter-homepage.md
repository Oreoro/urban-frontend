# Declutter Homepage Implementation Plan

> **For Antigravity:** REQUIRED SUB-SKILL: Load executing-plans to implement this plan task-by-task.

**Goal:** Redesign the UrbanEvents homepage to reduce visual density and improve hierarchy by moving floating elements into structured grids and applying generous whitespace.

**Architecture:** 
- Update global CSS with a new `--space-huge` token (160px).
- Refactor the Hero/Mission section to remove visual noise (floating stickers).
- Introduce a structured `section-feature-grid` to organize the sticker pills.
- Standardize section padding across the landing page for a cleaner "SaaS" rhythm.

**Tech Stack:** Astro, Vanilla CSS.

---

### Task 1: Spacing System Updates
**Files:**
- Modify: `src/styles/global.css`

**Step 1: Update spacing tokens**
Add `--space-huge` and refine `--space-xl`.
```css
/* src/styles/global.css */
:root {
  ...
  --space-xl: 100px; /* Increased from 80px */
  --space-huge: 160px; /* New token for section padding */
  ...
}
```

**Step 2: Commit**
```bash
git add src/styles/global.css
git commit -m "style: add space-huge token and update spacing scale"
```

---

### Task 2: Refactor Hero (Mission) Section
**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Remove floating items**
Delete the `<div class="floating-items">` block from the `section-mission`.

**Step 2: Update typography styles**
Add a style override to reduce the size of the cursive sub-heading (`type-heading`) in the mission section.
```html
<!-- src/pages/index.astro -->
<p class="type-heading" data-reveal style="color: var(--ink); font-size: 18px; max-width: 600px; margin-top: var(--space-sm);">{home.mission.sub}</p>
```

**Step 3: Commit**
```bash
git add src/pages/index.astro
git commit -m "refactor: remove floating stickers and scale down sub-heading in hero"
```

---

### Task 3: Implement Feature Grid
**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Add new Feature Grid section**
Insert a new section between `section-mission` and `section-origin-bg` (or after `MomentsCarousel`).
```html
<!-- src/pages/index.astro -->
<section class="section-feature-grid" style="background: var(--cream); padding: var(--space-huge) 0; border-bottom: 3px solid var(--color-ink);">
  <div class="container-inner" style="display: flex; flex-wrap: wrap; justify-content: center; gap: var(--space-md);">
    <div class="sticker-pill bg-pink sticker"><span class="type-h4">Tickets</span></div>
    <div class="sticker-pill bg-lavender sticker"><span class="type-h4">Events</span></div>
    <div class="sticker-pill bg-mint sticker"><span class="type-h4">Analytics</span></div>
    <div class="sticker-pill bg-peach sticker"><span class="type-h4">Workshops</span></div>
    <div class="sticker-pill bg-yellow sticker"><span class="type-h4">Societies</span></div>
  </div>
</section>
```

**Step 2: Commit**
```bash
git add src/pages/index.astro
git commit -m "feat: add structured feature grid for sticker pills"
```

---

### Task 4: Enhance Section Rhythm
**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Update section paddings**
Update `marquee-section`, `section-mission`, and `section-origin` to use `var(--space-huge)`.
```html
<!-- src/pages/index.astro -->
<section class="marquee-section" style="padding: var(--space-huge) var(--space-md); ...">
<section class="section-mission" style="padding: var(--space-huge) 32px; ...">
<section class="section-origin" style="padding: var(--space-huge) 32px; ...">
```

**Step 2: Commit**
```bash
git add src/pages/index.astro
git commit -m "style: apply space-huge padding to major sections"
```

---

### Task 5: Slim Header Design
**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/styles/global.css`

**Step 1: Reduce header padding**
Update `.site-header` padding from `16px` to `12px`.

**Step 2: Update logo box scale**
In `src/components/Header.astro`, ensure the logo container is slightly more compact.

**Step 3: Commit**
```bash
git add src/components/Header.astro src/styles/global.css
git commit -m "style: slim down header for better vertical space"
```
