import { beforeEach, describe, expect, it } from "vitest";
import { saveToken, saveUser, getUsername } from "./storage.js";

describe("saveToken", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("saves the token to storage", () => {
    const testToken = "test-token";
    saveToken(testToken);
    expect(localStorage.getItem("token")).toBe(JSON.stringify(testToken));
  });
});

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns name from user object in storage", () => {
    const testUser = { name: "John Doe" };
    saveUser(testUser);
    expect(getUsername()).toBe("John Doe");
  });
  it("returns null when no user object is found in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
