# WAGCON 2027 — Deployment Guide

This is a **TanStack Start** (React SSR) application built with Vite + Nitro. It can be deployed to **Vercel**, **Netlify**, or **Cloudflare Workers** without any code changes — only an environment variable is needed to switch targets.

---

## Deploying to Vercel

### Option A — Vercel Dashboard (Recommended)
1. Push this repo to GitHub / GitLab / Bitbucket.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. In **Settings → Environment Variables**, add:
   ```
   NITRO_PRESET = vercel
   ```
4. Leave **Framework Preset** as *Other* (the `vercel.json` already sets `framework: null`).
5. **Build Command**: `npm run build`  
   **Install Command**: `npm install`
6. Click **Deploy**.

### Option B — Vercel CLI
```bash
npx vercel env add NITRO_PRESET
# enter: vercel
npx vercel --prod
```

---

## Deploying to Netlify

### Option A — Netlify Dashboard
1. Push this repo to GitHub / GitLab / Bitbucket.
2. Go to **Sites → Add new site → Import an existing project**.
3. In **Site settings → Environment variables**, add:
   ```
   NITRO_PRESET = netlify
   ```
4. The `netlify.toml` in this repo already configures:
   - Build command: `npm run build`
   - Publish directory: `.output/public`
   - Redirects for SSR
5. Click **Deploy site**.

### Option B — Netlify CLI
```bash
npx netlify env:set NITRO_PRESET netlify
npx netlify deploy --build --prod
```

---

## Local Development
```bash
npm install
npm run dev
```
The dev server runs at `http://localhost:3000`.

## Build Preview (local)
```bash
npm run build
npm run preview
```

---

## Notes
- **No SSR-breaking changes were made** — all routes, components, and server functions are untouched.
- The `NITRO_PRESET` environment variable is read at **build time**, not runtime, so it must be set in your host's environment variables before triggering a build.
- To convert to a WordPress theme later, the component HTML/CSS output from the built pages can be used as the template base.

---

## Project Structure (for WordPress theme conversion reference)
```
src/
  routes/           — Pages (index, about, agenda, contact, …)
  components/
    wagcon/         — All WAGCON-specific UI sections
    ui/             — Radix UI / shadcn primitive components
  styles.css        — Global CSS + design tokens
```
