import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Production-only CSP (meta) so `npm run dev` keeps HMR (ws:) working.
 * HSTS and other headers must be set at the CDN / reverse proxy — see docs/SECURITY_HEADERS.md
 */
const productionCspMeta = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

function cspMetaPlugin() {
  return {
    name: "inject-csp-meta",
    transformIndexHtml(html, ctx) {
      if (ctx.server) return html;
      const tag = `    <meta http-equiv="Content-Security-Policy" content="${productionCspMeta}" />\n`;
      return html.replace(/<\/head>/i, `${tag}  </head>`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), ...(command === "build" ? [cspMetaPlugin()] : [])],
  base: "/",
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    include: ["src/**/*.{test,spec}.{js,jsx}"],
    globals: false,
  },
}));
