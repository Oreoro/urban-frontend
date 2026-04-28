# Design: CSS Integration and Viewport Width Fix

Date: 2026-04-29
Topic: CSS Integration & Viewport Fix

## Goal
Improve the integration of `new.css` into `global.css` by selectively syncing missing tokens and classes, and fix the "viewport issue" by constraining the overall site width to 1200px while maintaining full-bleed background sections.

## Design HARD-GATE
Design HARD-GATE: I will not write code or scaffold files until you approve this design. (Approved by User on 2026-04-29)

## Architecture
We will use a variable-driven approach to maintain the layout width, ensuring that `global.css` remains the single source of truth for the project's design system.

### 1. Style Integration (Selective Sync)
- **Token Migration**: Identify missing CSS variables in `new.css` (specifically those related to the "Peek" export) and add them to the `:root` block in `global.css`.
- **Typography Classes**: Copy missing `.type-*` classes from `new.css` to `global.css` to ensure all high-fidelity typography options are available.
- **Precedence**: Ensure values from `new.css` are respected during the sync to capture the most recent design updates.

### 2. Layout Constraints (1200px Viewport)
- **Global Variable**: Define `--container-max: 1200px;` in `global.css`.
- **Centralized Centering**:
    - Add a `.container-inner` utility class:
      ```css
      .container-inner {
        max-width: var(--container-max);
        margin: 0 auto;
        padding-left: var(--space-md);
        padding-right: var(--space-md);
        width: 100%;
      }
      ```
- **Component Updates**:
    - **Header.astro**: Wrap the `<header>` contents in `.container-inner` to center logo/nav.
    - **Footer.astro**: Wrap the `.footer-bottom` contents in `.container-inner`.
    - **index.astro & Sections**: Update all `*-inner` classes (e.g., `.hero-inner`, `.features-inner`) to use the global `--container-max` instead of hardcoded values.

### 3. Typography Refinement
- Adjust large display text (e.g., `.type-large-title`) to use `clamp()` or a responsive `max-width` to ensure it doesn't overflow the 1200px container or feel disproportionately large on standard desktops.

## Success Criteria
- Site width is visually constrained to 1200px for content.
- Background colors remain full-width (full-bleed).
- All semantic typography classes from `new.css` are functional in `global.css`.
- No horizontal scrolling on standard viewports.
