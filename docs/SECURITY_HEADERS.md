# Security headers (CSP, HSTS, and related)

## What this repo does today

- **Content-Security-Policy (CSP)** is injected as a `<meta http-equiv="Content-Security-Policy">` tag **only in production builds** (see `vite.config.js`). This avoids breaking Vite HMR in development (`connect-src` would otherwise need `ws:` / `wss:` for localhost).
- **Strict-Transport-Security (HSTS)** and most other security headers **cannot** be set reliably from static HTML alone. They must be sent as **HTTP response headers** by your host or a CDN in front of the site.

## GitHub Pages limitations

GitHub Pages does not let you configure custom response headers for arbitrary repos. For full control (HSTS, CSP report-only, `Permissions-Policy`, etc.), use one of:

- A CDN / reverse proxy (e.g. Cloudflare) in front of the custom domain, or
- A static host that supports header config (Netlify `_headers`, Vercel `vercel.json`, Cloudflare Pages `_headers`).

## Suggested header set (edge / host config)

Tune values for your domain and asset origins before enforcing in production.

| Header | Example value | Notes |
|--------|----------------|-------|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | Only after HTTPS is stable site-wide. |
| `Content-Security-Policy` | Align with the production directive string in `vite.config.js` or tighten further. | Start with report-only (`Content-Security-Policy-Report-Only`) if your host supports it. |
| `X-Content-Type-Options` | `nosniff` | |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | |
| `Permissions-Policy` | `geolocation=(), microphone=(), camera=()` | Adjust if you add features that need APIs. |

## Emotion / MUI and CSP

This app uses MUI + Emotion, which typically require `style-src` to allow `'unsafe-inline'` unless you move to a nonce/hash strategy. The build-time meta CSP in `vite.config.js` reflects that tradeoff.

## Next steps

1. Put the site behind a CDN with HTTPS and add **HSTS** at the edge.
2. Optionally **remove** the meta CSP from the Vite plugin once the edge CSP is verified, to avoid duplicate policies (browsers merge multiple CSPs; still simpler to have one source of truth).
