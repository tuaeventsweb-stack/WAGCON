// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
//
// DEPLOYMENT: Set NITRO_PRESET in your host's environment variables to target a platform:
//   - Vercel:   NITRO_PRESET=vercel
//   - Netlify:  NITRO_PRESET=netlify
//   - Default:  cloudflare (Lovable sandbox / Cloudflare Workers)
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Allow the Nitro preset to be overridden at build time via env variable.
// This lets you deploy to Vercel or Netlify without touching source code.
const nitroPreset = (process.env.NITRO_PRESET as string | undefined) ?? undefined;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(nitroPreset ? { nitro: { preset: nitroPreset } } : {}),
});
