/*
 * Sanitize untrusted URL strings for use in href (e.g. from config that could change).
 */

const SINGLE_EMAIL =
  /^[^\s<>"'\\]+@[^\s<>"'\\]+\.[^\s<>"'\\]+$/;

/**
 * @param {unknown} raw
 * @returns {string | null} Normalized URL or null if unsafe/invalid
 */
export function safeHttpsUrlOrNull(raw) {
  if (raw == null || typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  let parsed;
  try {
    parsed = new URL(trimmed);
  } catch {
    return null;
  }
  if (parsed.protocol !== "https:") return null;
  if (parsed.username !== "" || parsed.password !== "") return null;
  return parsed.href;
}

/**
 * @param {unknown} raw
 * @returns {string | null} Normalized mailto href or null if unsafe/invalid
 */
export function safeMailtoUrlOrNull(raw) {
  if (raw == null || typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (/[\r\n]/.test(trimmed)) return null;
  let parsed;
  try {
    parsed = new URL(trimmed);
  } catch {
    return null;
  }
  if (parsed.protocol !== "mailto:") return null;
  if (parsed.username !== "" || parsed.password !== "") return null;
  const email = decodeURIComponent(
    (parsed.pathname || parsed.hostname || "").replace(/^\/+/, "")
  );
  if (!SINGLE_EMAIL.test(email)) return null;
  return `mailto:${email}`;
}

/**
 * Safe href for profile/social icon links (https or mailto).
 * @param {unknown} raw
 * @returns {string | null}
 */
export function safeProfileHrefOrNull(raw) {
  return safeHttpsUrlOrNull(raw) ?? safeMailtoUrlOrNull(raw);
}
