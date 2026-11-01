# Floating 3D Gaming Console Glyphs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement interactive, floating 3D console glyphs with ambient floating physics and cursor parallax depth into the WAGCON website Hero section to deliver a gaming wow factor that aligns with an executive B2B audience.

**Architecture:** A standalone `<FloatingGamingGlyphs />` component built with GPU-accelerated CSS 3D transforms, SVG paths, and Framer Motion spring physics. Elements are layered across 3 depth planes (background, midground, foreground) with organic sinusoidal drift and responsive cursor tracking.

**Tech Stack:** React 19, Framer Motion 14, Tailwind CSS, Lucide icons, TanStack Start & Vite SPA.

---

### Task 1: Create `FloatingGamingGlyphs.tsx` for Root Application

**Files:**
- Create: `src/components/wagcon/FloatingGamingGlyphs.tsx`

- [ ] **Step 1: Implement SVG glyph assets and 3D glassmorphic styling**
  - Define geometric SVG paths for $\triangle$, $\bigcirc$, $\times$, $\square$, D-Pad cross, polygonal gem, and hexagonal node.
  - Apply radial glow gradients, dark glassmorphism fills, and metallic emerald/amethyst linear borders.

- [ ] **Step 2: Add mouse parallax and continuous floating animations**
  - Implement `useMotionValue`, `useSpring`, and `useTransform` to track cursor coordinates across the Hero container.
  - Distribute 8 glyphs with varying Z-depths, blur, and opacity.
  - Add mobile culling (`hidden md:block` on secondary glyphs to keep mobile clean).

- [ ] **Step 3: Export component**

---

### Task 2: Create `FloatingGamingGlyphs.tsx` for SPA Application

**Files:**
- Create: `spa/src/components/wagcon/FloatingGamingGlyphs.tsx`

- [ ] **Step 1: Mirror component into SPA folder**
  - Ensure compatibility with Vite + React 19 in `spa/src/components/wagcon/`.

---

### Task 3: Integrate into Hero Section

**Files:**
- Modify: `src/components/wagcon/sections.tsx`
- Modify: `spa/src/components/wagcon/sections.tsx`

- [ ] **Step 1: Import `<FloatingGamingGlyphs />` and embed in `Hero()`**
  - Place `<FloatingGamingGlyphs />` inside the Hero background layer directly behind the text and countdown, on top of the dark ambient noise.
  - Ensure z-index maintains full button and link clickability.

---

### Task 4: Verify Local Builds

- [ ] **Step 1: Build Root TanStack Start app**
  - Run `bun run build` and ensure exit code 0.
- [ ] **Step 2: Build SPA app**
  - Run `cd spa; bun run build` and ensure exit code 0.

---

### Task 5: Commit and Push to GitHub

- [ ] **Step 1: Stage and commit all changes**
- [ ] **Step 2: Push to `origin main`**
