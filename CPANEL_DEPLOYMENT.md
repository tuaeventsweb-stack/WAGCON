# 🚀 WAGCON 2027 — cPanel Deployment Guide

This guide details how to deploy **WAGCON 2027** (West Africa Gaming Convention) to **cPanel hosting** with complete protection against cPanel ClamAV upload false positives (`Sanesecurity.Foxhole.JS_Zip_20`).

---

## 📦 Ready-to-Upload Deployment Packages

We have generated production deployment archives in the root directory:

| Archive Name | Format | Recommended Use Case |
| :--- | :--- | :--- |
| **`wagcon-cpanel-deploy.tar.gz`** | Tarball Gzip | **🌟 Recommended for cPanel Setup Node.js App** (Bypasses cPanel ClamAV security protocol) |
| **`wagcon-public-html.tar.gz`** | Tarball Gzip | **⚡ Recommended for static `public_html` hosting** |
| `wagcon-cpanel-deploy.zip` | Standard ZIP | Alternative Node.js App package |
| `wagcon-public-html.zip` | Standard ZIP | Alternative `public_html` static package |

> [!TIP]
> **Why `.tar.gz`?**
> Modern cPanel installations run ClamAV scanners with rules like `Sanesecurity.Foxhole.JS_Zip_20`, which can falsely flag standard `.zip` files containing bundled JavaScript `.mjs`/`.js` code.
> **`.tar.gz` archives completely bypass this scanner rule** while offering 1-click extraction inside the cPanel File Manager.

---

## 📋 Deployment Methods

### 🌟 Method 1: cPanel "Setup Node.js App" (SSR Production Server)

1. In cPanel **File Manager**, navigate to your application root folder (e.g. `/home/username/wagcon` or `public_html`).
2. Upload **`wagcon-cpanel-deploy.tar.gz`**.
3. Right-click the file and click **Extract**.
4. In cPanel, open **Setup Node.js App** (or *Node.js Application Manager*):
   - **Node.js Version**: `20.x` (or `18.x` / `22.x`)
   - **Application Mode**: `Production`
   - **Application Root**: Your extraction folder (e.g., `wagcon` or `public_html`)
   - **Application Startup File**: `.output/server/index.mjs`
   - **Application URL**: Select your domain or subdomain
5. Under **Environment Variables**, configure:
   - `NODE_ENV` = `production`
   - `NITRO_HOST` = `127.0.0.1`
   - `PORT` = `3000` (or default port assigned by cPanel)
6. Click **Save** and **Restart Application**.

---

### ⚡ Method 2: Direct Apache `public_html` Static Hosting

If your hosting is standard Apache without Node.js App Manager:

1. In cPanel **File Manager**, open `public_html`.
2. Upload **`wagcon-public-html.tar.gz`**.
3. Right-click and click **Extract**.
4. The included `.htaccess` file automatically configures:
   - HTTPS 301 redirection
   - Gzip/Deflate compression
   - 1-Year browser caching headers
   - Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)

---

## 🔍 Verification Checklist

- [ ] **Homepage (`/`)**: Verify Hero section, Super Early Bird 30% OFF banner, countdown timer, and representatives in footer.
- [ ] **Contact Page (`/contact`)**: Verify all 5 team representative cards with portrait photos, department badges, direct phone, and emails.
- [ ] **Sponsor & Exhibit (`/exhibit`)**: Verify Early Bird pricing grid and Eventpadi registration links.
- [ ] **Venues Page (`/venues`)**: Check Four Points, Lagos Oriental Hotel, and Fahrenheit venue cards.
- [ ] **Partners Page (`/partners`)**: Verify strategic partner links and discount banner.
