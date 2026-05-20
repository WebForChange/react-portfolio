import { describe, expect, it } from "vitest";
import {
  safeHttpsUrlOrNull,
  safeMailtoUrlOrNull,
  safeProfileHrefOrNull,
} from "./urlUtils";

describe("safeHttpsUrlOrNull", () => {
  it("accepts valid https URLs", () => {
    expect(safeHttpsUrlOrNull("https://github.com/foo/bar")).toBe(
      "https://github.com/foo/bar"
    );
  });

  it("rejects javascript: URLs", () => {
    expect(safeHttpsUrlOrNull("javascript:alert(1)")).toBeNull();
  });

  it("rejects http", () => {
    expect(safeHttpsUrlOrNull("http://example.com/")).toBeNull();
  });

  it("rejects URLs with embedded credentials", () => {
    expect(safeHttpsUrlOrNull("https://user:pass@example.com/")).toBeNull();
  });

  it("rejects non-strings and empty", () => {
    expect(safeHttpsUrlOrNull(null)).toBeNull();
    expect(safeHttpsUrlOrNull("")).toBeNull();
    expect(safeHttpsUrlOrNull("   ")).toBeNull();
  });
});

describe("safeMailtoUrlOrNull", () => {
  it("accepts valid mailto links", () => {
    expect(safeMailtoUrlOrNull("mailto:suessdorf.dev@gmail.com")).toBe(
      "mailto:suessdorf.dev@gmail.com"
    );
  });

  it("rejects javascript: URLs", () => {
    expect(safeMailtoUrlOrNull("javascript:alert(1)")).toBeNull();
  });

  it("rejects mailto without a valid email", () => {
    expect(safeMailtoUrlOrNull("mailto:not-an-email")).toBeNull();
  });
});

describe("safeProfileHrefOrNull", () => {
  it("accepts https and mailto", () => {
    expect(safeProfileHrefOrNull("https://github.com/foo")).toBe(
      "https://github.com/foo"
    );
    expect(safeProfileHrefOrNull("mailto:me@example.com")).toBe(
      "mailto:me@example.com"
    );
  });
});
