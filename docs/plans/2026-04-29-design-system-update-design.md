# Design: Maggie Design System Update (2026-04-29)

## Goal
Integrate the specific typography and color tokens from `new.css` into the Maggie Astro project to achieve a pixel-perfect match with the live `maggie-app.com` site.

## Architecture
The design system resides in `src/styles/global.css`. We will use CSS variables (`:root`) for tokens and semantic utility classes for typography styles.

## Proposed Changes

### 1. Color System Update
- Update `:root` in `src/styles/global.css` with the 18 identified colors from `new.css`.
- Map legacy names (`--color-mint`, `--color-lavender`, etc.) to the new hex values.
- Add new colors like `--color-khaki`, `--color-dark-orange`, `--color-plum`.

### 2. Typography System Update
- **Fonts**: Add `Homemade Apple` to the Google Fonts import in `src/layouts/Layout.astro`.
- **Tokens**: Add `--text-*` and `--tracking-*` raw tokens from `new.css`.
- **Semantic Classes**: Port all `.type-*` classes (e.g., `.type-large-title`, `.type-h1-180`, `.type-heading`) to `global.css`.
- **Global Tag Overrides**: Update base `h1`, `h2`, `h3`, `p` tags to use the new tokens by default.

### 3. Documentation Update
- Update `design-system.md` to reflect the refined hex codes and the new three-tier typography system (Display, Script, Body).

## Verification Plan
- **Visual Inspection**: Use the browser tool to compare the updated local site with `maggie-app.com`.
- **Consistency Check**: Verify that existing pages (FAQs, For Business, Policies) still look correct and have inherited the new styles.
