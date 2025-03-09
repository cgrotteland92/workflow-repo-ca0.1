import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    // Go to login page, could not get it to work with /auth/login
    await page.goto("http://localhost:5500/login");

    // Fill in form using name attributes
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Click login
    await page.getByRole("button", { name: "Login" }).click();

    // Check if we see logout button - means we're logged in
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("wrong password shows error", async ({ page }) => {
    await page.goto("http://localhost:5500/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    // Check for error in message container
    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
