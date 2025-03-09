import { describe, expect, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  // 1.Returns true when current path matches href exactly
  it('should return true when current path matches "/" exactly', () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  // 2.Returns true for root path ("/") when path is "/" or "/index.html"
  it('should return true when href is "/" and current path is "/index.html"', () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  // 3. Returns true when current path includes the href
  it("should return true when current path includes the href (using /index.html)", () => {
    expect(isActivePath("/index.html", "/index.html#section")).toBe(true);
  });

  //4. Returns false when paths don't match
  it("should return false when paths don't match", () => {
    expect(isActivePath("/index.html", "/contact")).toBe(false);
  });
});
