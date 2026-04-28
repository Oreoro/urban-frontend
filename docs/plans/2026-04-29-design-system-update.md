# Maggie Design System Update Implementation Plan

> **For Antigravity:** REQUIRED SUB-SKILL: Load executing-plans to implement this plan task-by-task.

**Goal:** Update `src/styles/global.css` and `src/layouts/Layout.astro` with the tokens and styles from `new.css` to match the `maggie-app.com` design.

**Architecture:** We will consolidate tokens in `:root`, add semantic typography classes, and update base tags in `global.css`. We'll also integrate the `Homemade Apple` Google Font in the layout.

**Tech Stack:** Astro, CSS (Vanilla), Google Fonts.

---

### Task 1: Update Color Tokens in global.css

**Files:**
- Modify: `src/styles/global.css:22-55`

**Step 1: Merge new colors into :root**

```css
:root {
  /* Maggie Design System Tokens (Refined from new.css) */
  --color-ink: #03594d;
  --color-ink-soft: rgba(3, 89, 77, 0.55);
  --color-ink-faint: rgba(3, 89, 77, 0.15);
  
  /* Primary Palette */
  --color-mint: #82eda6;
  --color-lavender: #f6bbfd;
  --color-pink: #fccddc;
  --color-yellow: #ffff94;
  --color-peach: #fdc068;
  --color-coral: #fc5681;
  --color-cyan: #aefbff;
  --color-cream: #f9f8f4;
  --color-white: #ffffff;
  
  /* Extended Palette from new.css */
  --color-khaki: #ffff94;
  --color-dark-orange: #ff9124;
  --color-pastel-orange: #fdc068;
  --color-plum: #c88cfd;
  --color-dark-slate-gray: #03594d;
  --color-cornflower-blue: #589af0;
  --color-dark-turquoise: #0099ff;
  --color-blue: #0000ee;
  --color-black: #000000;
  --color-line: rgba(3, 89, 77, 0.10);

  /* Legacy Aliases (pointing to refined tokens) */
  --ink: var(--color-ink);
  --mint: var(--color-mint);
  --lavender: var(--color-lavender);
  --pink: var(--color-pink);
  --yellow: var(--color-yellow);
  --peach: var(--color-peach);
  --coral: var(--color-coral);
  --cyan: var(--color-lavender); /* mapping to lavender as per new.css identified color list overlap */
  --white: var(--color-white);
  --cream: var(--color-cream);
```

**Step 2: Commit**
```bash
git add src/styles/global.css
git commit -m "style: update color tokens from new.css"
```

---

### Task 2: Add Typography Tokens and Font Integration

**Files:**
- Modify: `src/styles/global.css:60-76`
- Modify: `src/layouts/Layout.astro:37`

**Step 1: Add typography raw tokens to global.css**

```css
  /* Typography Tokens (from new.css) */
  --text-9: 9px;
  --text-12: 12px;
  --text-14: 14px;
  --text-25: 25px;
  --text-32: 32px;
  --text-48: 48px;
  --text-100: 100px;
  --text-120: 120px;
  --text-180: 180px;

  --tracking-1-8: 1.8px;
  --tracking-1-2: 1.2px;
  --tracking-0-5: 0.5px;
  --tracking-0-25: 0.25px;
  --tracking-0-18: 0.18px;

  /* Font Families */
  --font-bn-dime-display-regular: 'BN Dime Display Regular', sans-serif;
  --font-homemade-apple: 'Homemade Apple', sans-serif;
  --font-sans-serif: sans-serif, serif;
  --font-helvetica-neue: 'Helvetica Neue', sans-serif;

  /* Aliases */
  --font-display: var(--font-bn-dime-display-regular);
  --font-script: var(--font-homemade-apple);
  --font-body: var(--font-helvetica-neue);
```

**Step 2: Update Layout.astro with Google Fonts**

```astro
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@400;500&family=Homemade+Apple&display=swap" rel="stylesheet">
```

**Step 3: Commit**
```bash
git add src/styles/global.css src/layouts/Layout.astro
git commit -m "style: add typography tokens and Homemade Apple font"
```

---

### Task 3: Port Semantic Typography Classes

**Files:**
- Modify: `src/styles/global.css` (append after tokens)

**Step 1: Add .type-* classes to global.css**

```css
/* Typography – Semantic type styles (Layer 1) */
.type-large-title {
    font-family: var(--font-bn-dime-display-regular);
    font-size: var(--text-180);
    font-weight: 400;
    line-height: 0.80;
    letter-spacing: var(--tracking-1-8);
}

.type-h1 {
    font-family: var(--font-bn-dime-display-regular);
    font-size: var(--text-100);
    font-weight: 400;
    line-height: 0.90;
}

.type-h2 {
    font-family: var(--font-bn-dime-display-regular);
    font-size: var(--text-32);
    font-weight: 400;
    line-height: 0.90;
    letter-spacing: var(--tracking-0-5);
}

.type-h3 {
    font-family: var(--font-bn-dime-display-regular);
    font-size: var(--text-48);
    font-weight: 400;
    line-height: 0.90;
    letter-spacing: var(--tracking-0-5);
}

.type-heading {
    font-family: var(--font-homemade-apple);
    font-size: var(--text-25);
    font-weight: 400;
    line-height: 1.16;
    letter-spacing: var(--tracking-0-25);
}

.type-body {
    font-family: var(--font-helvetica-neue);
    font-size: var(--text-9);
    font-weight: 400;
    line-height: 1.00;
    letter-spacing: var(--tracking-0-18);
}
```

**Step 2: Update base tag defaults in global.css**
```css
h1 { @apply type-h1; } /* If using tailwind, but we are in vanilla, so: */
h1 {
  font-family: var(--font-bn-dime-display-regular);
  font-size: var(--text-100);
  line-height: 0.9;
}
/* etc for h2, h3 */
```

**Step 3: Commit**
```bash
git add src/styles/global.css
git commit -m "style: add semantic typography classes"
```

---

### Task 4: Final Polish and design-system.md Update

**Files:**
- Modify: `design-system.md`

**Step 1: Update documentation with new hex codes and font mappings**

**Step 2: Commit**
```bash
git add design-system.md
git commit -m "docs: update design system documentation"
```
