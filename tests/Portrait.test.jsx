import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Portrait from "../src/components/Portrait";
import constants from "../src/utils/constants";

describe("Portrait", () => {
  it("renders owner name", () => {
    render(<Portrait title="React" />);
    expect(screen.getByText(constants.NAME)).not.toBe(null);
    expect(screen.getByText(constants.NAME)).not.toBe(undefined);
  });
  it("renders owner short description", () => {
    render(<Portrait title="React" />);
    expect(screen.getByText(constants.SHORT_DESC)).not.toBe(null);
    expect(screen.getByText(constants.SHORT_DESC)).not.toBe(undefined);
  });
});
