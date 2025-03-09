import { test, expect } from "@playwright/test";

test("Navigates to the home page and verifies venue details", async ({
  page,
}) => {
  // 1. Navigate to the home page
  await page.goto("/index.html");
  await expect(page).toHaveURL("http://localhost:5500/index.html");

  // 2. Wait for the venue list to load by waiting for an anchor tag in the venue container
  await page.waitForSelector("#venue-container a");

  // 3. Click the first venue
  await page.locator("#venue-container a").first().click();

  // 4. Verify that the details page shows "Venue details" in the heading
  await expect(page.locator("h1")).toContainText("Venue details");
});
