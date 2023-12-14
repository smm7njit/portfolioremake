import { test, expect } from '@playwright/test';

test('Check if About image is present', async ({ page }) => {
  await page.goto('/');
  await page.locator('#about').getByRole('img').click();
});