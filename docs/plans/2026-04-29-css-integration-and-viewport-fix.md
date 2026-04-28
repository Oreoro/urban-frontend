# CSS Integration and 1200px Viewport Fix Implementation Plan

> **For Antigravity:** REQUIRED SUB-SKILL: Load executing-plans to implement this plan task-by-task.

**Goal:** Sync missing design tokens from `new.css` into `global.css` and constrain the site's content width to 1200px while maintaining full-bleed background sections.

**Architecture:** We will define a global `--container-max: 1200px;` variable and a `.container-inner` utility class. We will then update the Header, Footer, and Page sections to use this constraint for their internal content containers.

**Tech Stack:** Astro, CSS, Javascript (GSAP for animations)

---

### Task 1: Sync Missing Tokens and Typography Classes
**Files:**
- Modify: `src/styles/global.css`

**Step 1: Identify and copy missing tokens from new.css**
Copy any missing `--color-*` variables and `.type-*` classes from `new.css` into the relevant sections of `global.css`. Specifically, ensure `.type-large-title-120`, `.type-large-title-100`, `.type-caption`, and other Peek-generated classes are present.

**Step 2: Commit**
```bash
git add src/styles/global.css
git commit -m "feat: sync missing design tokens and typography from new.css"
```

---

### Task 2: Define Global Layout Constraints
**Files:**
- Modify: `src/styles/global.css`

**Step 1: Add container variable and utility**
Add the following to `global.css` near the top of `:root` and in the layout section:
```css
:root {
  --container-max: 1200px;
}

.container-inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding-left: var(--space-md);
  padding-right: var(--space-md);
  width: 100%;
}
```

**Step 2: Update existing inner classes to use the variable**
Update `.hero-inner`, `.marquee-inner`, `.features-inner`, `.mission-inner`, `.origin-inner`, `.stats-inner`, `.final-cta-inner`, `.subpage-inner`, and `.form-card-container` to use `max-width: var(--container-max);`.

**Step 3: Commit**
```bash
git add src/styles/global.css
git commit -m "style: define global container constraints"
```

---

### Task 3: Align Header and Footer to 1200px Grid
**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/styles/global.css`

**Step 1: Update Header.astro**
Wrap the current `site-header` content (brand-mark, nav-main, menu-toggle) in a `<div class="container-inner">`.
Adjust `.site-header` CSS to remove its internal padding and let the container handle it.

**Step 2: Update Footer.astro**
Wrap the `.footer-bottom` content in a `<div class="container-inner">`.

**Step 3: Commit**
```bash
git add src/components/Header.astro src/components/Footer.astro src/styles/global.css
git commit -m "layout: align header and footer to 1200px grid"
```

---

### Task 4: Refine Typography and Responsive Behavior
**Files:**
- Modify: `src/styles/global.css`

**Step 1: Adjust huge display text**
Ensure `.type-large-title` (and other massive headers) use `clamp()` or a responsive `max-width` so they don't break the 1200px container on smaller desktops.
Example: `font-size: clamp(80px, 12vw, 180px);`

**Step 2: Verify viewport meta**
Ensure `Layout.astro` has the correct viewport tag (already present).

**Step 3: Commit**
```bash
git add src/styles/global.css
git commit -m "style: refine typography for constrained width"
```

---

### Task 5: Final Verification
**Step 1: Browser Test**
Run: `npm run dev`
Verify:
1. Site is centered at 1200px.
2. Backgrounds remain full-width.
3. No horizontal scroll.
4. Header/Footer align with content.

**Step 2: Final Commit and Cleanup**
Remove `new.css` if it's no longer needed (per user's "Selective Sync" preference).
```bash
rm new.css
git add .
git commit -m "chore: cleanup and final layout verification"
```
