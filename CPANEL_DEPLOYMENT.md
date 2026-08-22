# 🚀 WAGCON 2027 — cPanel Deployment Guide

This guide details how to deploy **WAGCON 2027** (West Africa Gaming Convention) to **cPanel hosting**.

---

## 📋 Recommended Deployment Methods

### 🌟 Method 1: cPanel "Setup Node.js App" (Best for Full Dynamic Performance & SSR)

This method runs the high-performance Nitro production server with full server-side rendering (SSR) and dynamic routing.

#### 1. Local Build Command
Run the build targeting the Node.js server:
```bash
# On Windows PowerShell:
$env:NITRO_PRESET="node-server"; npm run build

# On Mac/Linux:
NITRO_PRESET=node-server npm run build
```
This generates the `.output/` directory containing:
- `.output/server/index.mjs` (Node.js server entry point)
- `.output/public/` (all images, CSS, JS bundles, and `.htaccess`)

#### 2. Upload Files to cPanel
1. In cPanel **File Manager**, navigate to your web root (e.g., `public_html` or `/home/username/wagcon`).
2. Upload the `.output/` directory, `package.json`, and `public/` directory.

#### 3. Configure Node.js App in cPanel
1. Search for **Setup Node.js App** (or *Node.js Application Manager*) in cPanel.
2. Click **Create Application**:
   - **Node.js Version:** `20.x` (or `18.x` / `22.x`)
   - **Application Mode:** `Production`
   - **Application Root:** `public_html` (or your chosen directory)
   - **Application Startup File:** `.output/server/index.mjs`
   - **Application URL:** Select your domain/subdomain
3. Under **Environment Variables**, add:
   - `PORT` = `3000` (or default assigned by cPanel)
   - `NODE_ENV` = `production`
   - `NITRO_HOST` = `127.0.0.1`
4. Click **Create** and **Restart Application**.

---

### ⚡ Method 2: Standard Apache Web Hosting (`public_html`)

If your cPanel hosting does not support Node.js apps:

1. Copy everything inside `.output/public/` (including `.htaccess`, `assets/`, `wagcon-logo.png`, `about-audience.jpg`, `convention-hall.jpg`, `fourpoints.png`, `oriental.webp`, `fareighheit.jpeg`) into your cPanel `public_html` directory.
2. The included `.htaccess` file automatically configures:
   - HTTPS 301 redirection
   - Gzip compression for fast load times
   - 1-year browser caching headers for images, styles, and scripts
   - Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)

---

## 🔍 Verification Checklist

- [ ] **Homepage (`/`)**: Verify Hero section, Super Early Bird 30% OFF banner, count-down timer, and Early Bird timeline.
- [ ] **Sponsor & Exhibit (`/exhibit`)**: Verify Early Bird pricing grid with `CURRENT` badge tag and registration CTA pointing to `https://app.eventpadi.com/wagcon/f/WAGCON`.
- [ ] **Venues Page (`/venues`)**: Check that Four Points, Lagos Oriental Hotel, and Fahrenheit images render sharply without missing paths.
- [ ] **Partners Page (`/partners`)**: Verify strategic partner links (ABDS 2027) and early bird discount highlight box.
- [ ] **Footer & Navigation**: Verify all social links, navigation dropdowns, and contact emails (`info@tuaevents.org`).
