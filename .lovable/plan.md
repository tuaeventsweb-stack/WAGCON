
## Goal

Build the WAGCON 2027 site as a reskin of the ABDS design system: a polished, full-length homepage with all 19 sections using verbatim spec copy, plus minimal placeholder routes so the navigation links work. No real photos — use CSS-only hero (radial green glow + grid overlay) and initial-letter avatars throughout.

## Design Foundation

- Fonts: Syne (800/700/600/400) for display, DM Sans (300–600) for body — loaded via Google Fonts in `__root.tsx`.
- Color tokens in `src/styles.css` (WAGCON overrides, dark green-tinted):
  - `--bg` `#060A06`, `--bg2` `#090E09`, `--bg3` `#0D140D`
  - `--gold` `#22C55E` (primary green), `--blue` `#A855F7` (purple), `--purple` `#F59E0B` (amber), `--green` `#9CA3AF` (spectator grey)
  - `--white` `#F0FFF0`, `--muted` `#6B8C6B`, `--border` `rgba(255,255,255,0.08)`
  - Plus matching `*-dim` and `*-border` variants
- Map to existing shadcn semantic tokens (`--background`, `--foreground`, `--primary`, `--accent`, etc.) so shadcn primitives stay themed.

## Routes

Homepage (`/`) is built fully. Each other route is a small stub page (hero + "coming soon" + back link) so nav, SEO `head()`, and links work end-to-end:

```
src/routes/
  __root.tsx        (Google Fonts link, shared head defaults)
  index.tsx         (full WAGCON homepage)
  venues.tsx        (stub)
  agenda.tsx        (stub)
  speakers.tsx      (stub)
  exhibit.tsx       (stub)
  tickets.tsx       (stub)
  partners.tsx      (stub)
  gallery.tsx       (stub)
  about.tsx         (stub)
  contact.tsx       (stub)
```

Each route gets its own `head()` with unique title + description.

## Homepage Components (in section order)

Built as focused components in `src/components/wagcon/`:

1. `Nav.tsx` — sticky header, logo `[W] WAGCON 2027`, center nav links, Tickets + Exhibit CTAs
2. `Hero.tsx` — 90vh, dark bg + grid overlay + radial green glow, headline with green accent, dual CTAs, pass pills row
3. `StatsBar.tsx` — 6 animated counters (Syne 800 green numbers)
4. `About.tsx` — two-column identity section (copy + CSS-art placeholder block)
5. `Venues.tsx` — 3 full-bleed venue cards (THE GUILD amber, THE ARENA green, THE RESPAWN purple) + timeline strip
6. `LookbackVideo.tsx` — side-by-side video placeholder + gallery CTA
7. `EventEssentials.tsx` — 4 download cards (icon-box + title + desc + CTA)
8. `Speakers.tsx` — series ticker + confirmed grid using initial-letter avatars
9. `ContentTracks.tsx` — 14 icon tiles (lucide icons), 7-col → 4 → 3 responsive
10. `AudienceInsights.tsx` — 5 data sub-sections (stat blocks)
11. `WhoYouWillMeet.tsx` — 5 persona tabs
12. `LogoWall.tsx` — double-row CSS-keyframe ticker (text labels in place of logos)
13. `Testimonials.tsx` — auto-advance carousel (5s, pause on hover)
14. `WhyExhibit.tsx` — 6 reason cards
15. `WhyWestAfrica.tsx` — market case section
16. `PartnersPreview.tsx` — logo rows + CTA to /partners
17. `PassTiers.tsx` — 3 pass cards (Spectator grey, Player green featured, Champion amber) + group bundles
18. `FinalCTA.tsx` — 3 action cards + 3 team contact cards
19. `Footer.tsx` — 4-col layout, social icons, bottom bar

All copy (headlines, stats numbers, track names, persona names, pass names/prices/benefits, testimonial text, team names) pulled verbatim from the spec document.

## Reusable Primitives

In `src/components/wagcon/ui/`:
- `Eyebrow.tsx` — section eyebrow label (green, 0.14em tracking, uppercase 11px)
- `SectionTitle.tsx` — Syne 800 with optional green-accented span
- `IconBox.tsx` — 44×44 rounded box, dim+border variants (gold/blue/purple/green)
- `PassPill.tsx` — color-variant pill
- `Card.tsx` — standard dark card with hover green border
- `InitialAvatar.tsx` — circle with Syne 800 initials in brand color

Buttons: extend existing shadcn `button.tsx` with `wagcon-primary` (solid green) and `wagcon-secondary` (ghost outlined) variants — keep all existing variants intact.

## Animations

CSS-only:
- Stats counters: animate from 0 to target via `requestAnimationFrame` in a small `useCounter` hook, triggered by `IntersectionObserver`.
- Logo ticker: `@keyframes scroll` opposite directions per row.
- Testimonial carousel: `setInterval` + pause on hover.
- Card hover: border-color transition.

No external animation libs.

## Build Order

1. Update `src/styles.css` with WAGCON tokens (map to shadcn semantic vars too).
2. Update `__root.tsx`: Google Fonts link, default head meta for WAGCON.
3. Add primitives in `src/components/wagcon/ui/`.
4. Build 19 homepage section components.
5. Assemble `src/routes/index.tsx`.
6. Create 9 stub route files with proper `head()` and a shared `StubPage` component.
7. Visual QA via preview.

## Out of Scope (follow-ups)

- Fleshing out Venues / Agenda / Speakers / Tickets / etc. content pages.
- Real photography, speaker headshots, sponsor logos, hero video.
- Backend (ticket purchase, contact form submission, newsletter).
- Filterable speaker grid, agenda day-tabs.
