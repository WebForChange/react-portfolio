import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Privacy from "../src/components/Privacy";
import constants from "../src/utils/constants";

describe("Privacy", () => {
  it("renders privacy statement title", () => {
    render(<Privacy title="React" />);
    expect(screen.getByText(constants.PRIVACY_TITLE)).not.toBe(null);
    expect(screen.getByText(constants.PRIVACY_TITLE)).not.toBe(undefined);
  });
  it("renders privacy basics paragraph", () => {
    render(<Privacy title="React" />);
    expect(screen.getByText(constants.PRIVACY_BASICS)).not.toBe(null);
    expect(screen.getByText(constants.PRIVACY_BASICS)).not.toBe(undefined);
  });
});
