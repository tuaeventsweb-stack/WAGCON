# Design Specification: Floating 3D Gaming Console Glyphs & Ambient Parallax

**Date:** 2026-11-01  
**Project:** West Africa Gaming Convention (WAGCON 2027)  
**Topic:** Executive 3D Gaming Visual Wow Factor  
**Status:** Approved by User  

---

## 1. Overview & Objective
WAGCON 2027 is the premier B2B gaming convention where *"Africa's Gaming Deals Get Done"*, bringing together video game studios, esports leagues, iGaming operators, Web3 innovators, and institutional investors.

The website requires a visual "gaming wow factor" that:
1. Unmistakably conveys cutting-edge gaming culture and energy.
2. Maintains boardroom-level prestige and high-contrast legibility for deals, agendas, and venue details without feeling childish or arcade-like.
3. Provides a modern 3D parallax depth experience that performs at 60fps on both mobile and desktop with zero bundle bloat.

---

## 2. Visual & Iconographic System

### 2.1 The 3D Console & Industry Glyphs
The system renders a curated constellation of 8 floating isometric 3D-styled glyphs:
- **PlayStation Geometric Archetypes:**
  - $\triangle$ (Triangle) — Emerald wireframe with beveled edge illumination
  - $\bigcirc$ (Circle) — Translucent glass ring with neon rim lighting
  - $\times$ (Cross) — Matte obsidian & chrome intersecting bars
  - $\square$ (Square) — Deep purple/emerald glowing glass frame
- **Industry & Platform Archetypes:**
  - **Console D-Pad Cross** (Console & Core Game Studios)
  - **Polygonal Diamond Gem** (iGaming economy & Web3 digital assets)
  - **3D Hexagonal Shield** (Esports competition & security)
  - **Arcade Joystick Ball/Ring** (Legacy & arcade culture)

### 2.2 Material & Lighting Aesthetics
- **Glassmorphism & Obsidian:** Semi-translucent panels (`backdrop-blur-md`, subtle specular highlights).
- **Brand Dual Glow:** Accented with WAGCON's primary emerald green (`#22c55e`) and executive royal amethyst (`#9333ea`).
- **Depth Layers (Z-Space):**
  - **Background Layer (Z: -120px):** Small (40–55px), 15% opacity, slow 16s ambient orbital float.
  - **Midground Layer (Z: 0px):** Medium (70–85px), 30% opacity, crisp metallic edge borders, 3D isometric rotation.
  - **Foreground Layer (Z: +80px):** Large (100–120px), 20% opacity, subtle bokeh blur with pronounced cursor parallax reaction.

---

## 3. Motion & Interaction Architecture

### 3.1 Dual-Phase Physics
1. **Continuous Floating Drift:**
   - Harmonic sine-wave translation ($\pm 14\text{px}$ on Y-axis, $\pm 10\text{px}$ on X-axis).
   - Independent sinusoidal cycle times (11s, 14s, 17s, 21s) ensuring organic, non-repeating movement.
2. **Interactive Cursor Parallax:**
   - On desktop, mouse coordinates `(mouseX, mouseY)` map to normalized values $[-1, 1]$.
   - Each layer shifts with proportional opposing parallax:
     - Foreground: $35\text{px}$ displacement
     - Midground: $18\text{px}$ displacement
     - Background: $8\text{px}$ displacement
   - Uses Framer Motion's `useSpring` with stiffness 150 and damping 20 for fluid, frictionless physics.

### 3.2 Mobile & Performance Optimization
- **Responsive Glyph Culling:** On mobile screens (`< 768px`), glyph count is automatically reduced from 8 to 4 to prevent visual crowding around the headline.
- **Hardware Acceleration:** All elements use GPU-accelerated CSS 3D transforms (`translate3d`, `rotate3d`, `will-change: transform`).
- **Zero WebGL Overhead:** Built using lightweight SVG paths and CSS 3D perspective rather than heavy 3MB 3D canvas runtimes, guaranteeing instant initial page load.
- **Respects `prefers-reduced-motion`:** Floating physics are disabled if user has reduced motion enabled in their OS.

---

## 4. Component Structure & Integration

```
src/
├── components/
│   └── wagcon/
│       ├── FloatingGamingGlyphs.tsx  <-- Standalone reusable 3D glyphs canvas
│       └── sections.tsx             <-- Hero() integration
spa/
├── src/
│   └── components/
│       └── wagcon/
│           ├── FloatingGamingGlyphs.tsx  <-- SPA counterpart
│           └── sections.tsx             <-- SPA Hero() integration
```

---

## 5. Verification Plan
1. **Local Build:** Run `bun run build` in root and `cd spa; bun run build` to ensure 0 build errors.
2. **Visual Inspection:** Verify Hero headline, countdown, and CTA buttons remain prominent and legible on top of the 3D glyph layer.
3. **Responsive Check:** Test at 375px (mobile), 768px (tablet), 1024px (laptop), and 1440px+ (desktop).
4. **Git Commit & Push:** Push cleanly to `https://github.com/tuaeventsweb-stack/WAGCON.git` on branch `main`.

