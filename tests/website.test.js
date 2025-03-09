import { test, expect } from "@playwright/test";

test("homepage should show the News link", async ({ page }) => {
  // Start at the English homepage
  await page.goto("https://www.noroff.no/en");

  // Wait for the new page to load and check its content
  await expect(page.getByRole("link", { name: "News" })).toBeVisible();
});
